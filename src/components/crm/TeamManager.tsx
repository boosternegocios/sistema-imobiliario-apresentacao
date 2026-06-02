'use client';

import { useState } from 'react';
import { Plus, X, Check, Mail, User, Shield } from 'lucide-react';
import { inviteMemberAction } from '@/app/(app)/equipes/actions';

export default function TeamManager({ orgId, initialMembers }: { orgId: string, initialMembers: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInvite = async () => {
    if (!name.trim() || !email.trim()) {
      setError("Preencha todos os campos.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await inviteMemberAction(orgId, email, name);
      setIsModalOpen(false);
      setName('');
      setEmail('');
      // Optional: show success toast here
      window.location.reload(); // Simple refresh to see the new member
    } catch (e: any) {
      setError(e.message || "Erro ao convidar usuário.");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#05325E]">Membros da Equipe</h2>
            <p className="text-sm text-slate-500 mt-1">Gerencie quem tem acesso ao sistema da sua imobiliária.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#4A90E2] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#357ABD] transition-colors shadow-lg shadow-blue-500/20"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
            Convidar Membro
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-500">
                <th className="px-6 py-4">Nome</th>
                <th className="px-6 py-4">Cargo / Função</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {initialMembers.map(member => (
                <tr key={member.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-[#05325E]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                        {member.profiles?.full_name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      {member.profiles?.full_name || 'Usuário Pendente'}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                      member.role === 'admin' 
                        ? 'bg-purple-50 text-purple-700 border-purple-200' 
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {member.role === 'admin' ? <Shield className="w-3 h-3" /> : <User className="w-3 h-3" />}
                      {member.role === 'admin' ? 'Administrador' : 'Corretor'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border bg-green-50 text-green-700 border-green-200">
                      <Check className="w-3 h-3" />
                      Ativo
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#05325E]">Convidar Novo Corretor</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                  {error}
                </div>
              )}
              
              <p className="text-sm text-slate-600 mb-6">
                Um e-mail será enviado com um "Link Mágico". Ao clicar, o corretor poderá definir sua própria senha e entrar no sistema da sua imobiliária.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Nome Completo</label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Ex: João Silva"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-[#4A90E2] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">E-mail</label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="email" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Ex: joao@imobiliaria.com.br"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-[#4A90E2] transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50 rounded-b-2xl">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 font-bold text-slate-500 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={handleInvite}
                disabled={loading}
                className="flex items-center gap-2 bg-[#4A90E2] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#357ABD] transition-colors shadow-lg disabled:opacity-50"
              >
                {loading ? 'Enviando Convite...' : 'Enviar Convite'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
