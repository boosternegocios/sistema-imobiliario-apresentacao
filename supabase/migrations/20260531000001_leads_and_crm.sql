-- CRM and Leads Migration

-- Pipelines
CREATE TABLE pipelines (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE pipelines ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Ver pipelines da organização" ON pipelines FOR SELECT
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid()));

CREATE POLICY "Admin/Gestor podem gerenciar pipelines" ON pipelines FOR ALL
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid() AND role IN ('admin', 'gestor')));

-- Pipeline Stages
CREATE TABLE pipeline_stages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pipeline_id UUID NOT NULL REFERENCES pipelines(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    order_index INTEGER NOT NULL,
    sla_hours INTEGER, -- SLA opcional para alertar sobre lead estagnado
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE pipeline_stages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Ver estágios da organização" ON pipeline_stages FOR SELECT
USING (pipeline_id IN (SELECT id FROM pipelines WHERE organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid())));

CREATE POLICY "Admin/Gestor podem gerenciar estágios" ON pipeline_stages FOR ALL
USING (pipeline_id IN (SELECT id FROM pipelines WHERE organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid() AND role IN ('admin', 'gestor'))));

-- Imóveis (Properties)
CREATE TABLE properties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    code TEXT,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL, -- 'apartment', 'house', 'commercial', 'land', etc.
    purpose TEXT NOT NULL, -- 'sale', 'rent'
    status TEXT DEFAULT 'available', -- 'available', 'negotiation', 'sold', 'rented', 'inactive'
    
    price_sale DECIMAL,
    price_rent DECIMAL,
    condo_fee DECIMAL,
    property_tax DECIMAL,
    
    area_total DECIMAL,
    area_usable DECIMAL,
    bedrooms INTEGER,
    bathrooms INTEGER,
    suites INTEGER,
    parking_spots INTEGER,
    
    address JSONB,
    features JSONB DEFAULT '[]'::jsonb,
    images JSONB DEFAULT '[]'::jsonb,
    
    assigned_broker_id UUID REFERENCES profiles(id),
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Ver imóveis da organização" ON properties FOR SELECT
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid()));

CREATE POLICY "Corretores e admins podem gerenciar imóveis" ON properties FOR ALL
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid() AND role IN ('admin', 'gestor', 'corretor', 'sdr')));

-- Leads
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    document TEXT,
    
    origin TEXT, -- 'website', 'whatsapp', 'facebook', 'portal', 'manual'
    temperature TEXT DEFAULT 'cold', -- 'cold', 'warm', 'hot'
    score INTEGER DEFAULT 0,
    tags JSONB DEFAULT '[]'::jsonb,
    
    -- Critérios de busca do lead
    interest_type TEXT,
    interest_purpose TEXT,
    interest_budget_min DECIMAL,
    interest_budget_max DECIMAL,
    interest_neighborhoods JSONB DEFAULT '[]'::jsonb,
    
    -- Status no CRM
    pipeline_id UUID REFERENCES pipelines(id),
    stage_id UUID REFERENCES pipeline_stages(id),
    assigned_user_id UUID REFERENCES profiles(id),
    team_id UUID, -- Será referenciado futuramente
    
    is_lost BOOLEAN DEFAULT FALSE,
    loss_reason TEXT,
    
    last_interaction_at TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Membros podem ver leads atribuídos a si" ON leads FOR SELECT
USING (assigned_user_id = auth.uid() OR organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid() AND role IN ('admin', 'gestor', 'sdr')));

CREATE POLICY "Admin/Gestor/SDR podem gerenciar todos os leads" ON leads FOR ALL
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid() AND role IN ('admin', 'gestor', 'sdr')));

CREATE POLICY "Corretor pode gerenciar seus próprios leads" ON leads FOR UPDATE
USING (assigned_user_id = auth.uid());

-- Atividades do Lead (Histórico)
CREATE TABLE lead_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id),
    
    activity_type TEXT NOT NULL, -- 'note', 'stage_change', 'email_sent', 'whatsapp_sent', 'call', 'meeting'
    description TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE lead_activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Ver atividades de leads visíveis" ON lead_activities FOR SELECT
USING (lead_id IN (SELECT id FROM leads));

CREATE POLICY "Criar atividades" ON lead_activities FOR INSERT
WITH CHECK (lead_id IN (SELECT id FROM leads));

-- Triggers for updated_at
CREATE TRIGGER update_pipelines_modtime BEFORE UPDATE ON pipelines FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_pipeline_stages_modtime BEFORE UPDATE ON pipeline_stages FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_properties_modtime BEFORE UPDATE ON properties FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_leads_modtime BEFORE UPDATE ON leads FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
