-- Visits, Proposals, Tasks, Automations and AI Agents

-- Tasks
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    due_date TIMESTAMPTZ,
    status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'canceled'
    
    assigned_user_id UUID REFERENCES profiles(id),
    created_by_user_id UUID REFERENCES profiles(id),
    
    -- Polimorfismo para vincular a leads ou imóveis
    related_entity_type TEXT, -- 'lead', 'property', 'proposal'
    related_entity_id UUID,
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Ver tarefas da organização" ON tasks FOR SELECT
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid()));

-- Visits
CREATE TABLE visits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    lead_id UUID REFERENCES leads(id),
    property_id UUID REFERENCES properties(id),
    assigned_user_id UUID REFERENCES profiles(id),
    
    scheduled_at TIMESTAMPTZ NOT NULL,
    status TEXT DEFAULT 'scheduled', -- 'scheduled', 'completed', 'canceled', 'no_show'
    feedback TEXT,
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE visits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Ver visitas da organização" ON visits FOR SELECT
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid()));

-- Proposals
CREATE TABLE proposals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    lead_id UUID NOT NULL REFERENCES leads(id),
    property_id UUID NOT NULL REFERENCES properties(id),
    
    amount DECIMAL NOT NULL,
    conditions TEXT,
    status TEXT DEFAULT 'draft', -- 'draft', 'sent', 'accepted', 'rejected', 'counter_offer'
    
    assigned_user_id UUID REFERENCES profiles(id),
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Ver propostas da organização" ON proposals FOR SELECT
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid()));

-- Automations
CREATE TABLE automations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    trigger_type TEXT NOT NULL, -- 'lead_created', 'stage_changed'
    conditions JSONB DEFAULT '[]'::jsonb,
    actions JSONB DEFAULT '[]'::jsonb,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE automations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin/Gestor veem automações" ON automations FOR SELECT
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid() AND role IN ('admin', 'gestor')));

-- AI Agents
CREATE TABLE ai_agents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL, -- 'qualifier', 'assistant'
    prompt_instruction TEXT,
    provider TEXT DEFAULT 'openai',
    model TEXT DEFAULT 'gpt-4o',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE ai_agents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Ver agentes da organização" ON ai_agents FOR SELECT
USING (organization_id IN (SELECT organization_id FROM organization_members WHERE user_id = auth.uid()));

-- Triggers for updated_at
CREATE TRIGGER update_tasks_modtime BEFORE UPDATE ON tasks FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_visits_modtime BEFORE UPDATE ON visits FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_proposals_modtime BEFORE UPDATE ON proposals FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_automations_modtime BEFORE UPDATE ON automations FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_ai_agents_modtime BEFORE UPDATE ON ai_agents FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
