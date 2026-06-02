"use client";

import { signup } from './actions'
import { Building2, KeyRound, Mail, User, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function RegisterContent() {
  const searchParams = useSearchParams()
  const error = searchParams?.get('error')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Direita: Imagem Decorativa (Invertido em relacao ao Login) */}
      <div className="relative hidden w-1/2 md:block">
        <Image
          src="/login-bg.png"
          alt="Luxury Real Estate"
          fill
          className="object-cover scale-x-[-1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05325E]/90 via-[#05325E]/40 to-transparent"></div>
        <div className="absolute bottom-12 left-12 right-12">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-8 backdrop-blur-xl">
            <h2 className="font-display text-3xl font-bold text-white">
              Crie seu Ecossistema.
            </h2>
            <p className="mt-2 text-lg text-blue-100/80">
              O seu próprio workspace isolado. Todos os seus dados, leads e corretores em um único lugar seguro.
            </p>
          </div>
        </div>
      </div>

      {/* Esquerda: Formulário de Registro */}
      <div className="flex w-full flex-col justify-center px-8 md:w-1/2 md:px-24 lg:px-32 xl:px-48">
        <div className="mx-auto w-full max-w-md">
          {/* Header */}
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#05325E]">
              <Building2 className="h-7 w-7 text-white" strokeWidth={1.5} />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-[#05325E]">
              LeadEstate
            </span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#05325E]">
            Criar Conta
          </h1>
          <p className="mt-2 text-slate-500">
            Comece a gerenciar seus imóveis e leads gratuitamente.
          </p>

          {/* Erro */}
          {error && (
            <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600 border border-red-100">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="mt-8 space-y-6" action={signup}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-bold text-[#05325E]"
                >
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition-all focus:border-[#4A90E2] focus:ring-4 focus:ring-[#4A90E2]/10"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-bold text-[#05325E]"
                >
                  E-mail Profissional
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition-all focus:border-[#4A90E2] focus:ring-4 focus:ring-[#4A90E2]/10"
                    placeholder="seu.nome@imobiliaria.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-sm font-bold text-[#05325E]"
                >
                  Senha
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-12 text-sm outline-none transition-all focus:border-[#4A90E2] focus:ring-4 focus:ring-[#4A90E2]/10"
                    placeholder="Mínimo de 6 caracteres"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#4A90E2] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" strokeWidth={1.5} />
                    ) : (
                      <Eye className="h-5 w-5" strokeWidth={1.5} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-[16px] bg-[#4A90E2] py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#357ABD] hover:shadow-xl active:scale-95"
            >
              Criar Workspace
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Já tem uma conta?{' '}
            <Link
              href="/login"
              className="font-bold text-[#4A90E2] hover:text-[#05325E]"
            >
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <RegisterContent />
    </Suspense>
  )
}
