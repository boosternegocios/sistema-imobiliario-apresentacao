"use client";

import { login } from './actions'
import { Building2, KeyRound, Mail, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function LoginContent() {
  const searchParams = useSearchParams()
  const error = searchParams?.get('error')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Esquerda: Formulário de Login */}
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
            Bem-vindo de volta
          </h1>
          <p className="mt-2 text-slate-500">
            Acesse seu espaço de trabalho para gerenciar seus leads e captações.
          </p>

          {/* Erro */}
          {error && (
            <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600 border border-red-100">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="mt-8 space-y-6" action={login}>
            <div className="space-y-4">
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
                    placeholder="••••••••"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#4A90E2] focus:ring-[#4A90E2]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-slate-500"
                >
                  Lembrar de mim
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-bold text-[#4A90E2] hover:text-[#05325E]">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-[16px] bg-[#4A90E2] py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#357ABD] hover:shadow-xl active:scale-95"
            >
              Entrar no sistema
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Não tem uma conta?{' '}
            <Link
              href="/register"
              className="font-bold text-[#4A90E2] hover:text-[#05325E]"
            >
              Crie seu Workspace
            </Link>
          </p>
        </div>
      </div>

      {/* Direita: Imagem Decorativa */}
      <div className="relative hidden w-1/2 md:block">
        <Image
          src="/login-bg.png"
          alt="Luxury Real Estate"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05325E]/90 via-[#05325E]/40 to-transparent"></div>
        
        {/* Content on Image */}
        <div className="absolute bottom-12 left-12 right-12">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-8 backdrop-blur-xl">
            <h2 className="font-display text-3xl font-bold text-white">
              Elevando o Padrão do Luxo.
            </h2>
            <p className="mt-2 text-lg text-blue-100/80">
              Gerencie seus leads mais exclusivos e captações high-end com a plataforma definitiva para corretores de alta performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <LoginContent />
    </Suspense>
  )
}
