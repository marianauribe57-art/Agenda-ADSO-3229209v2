import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email === "admin@sena.com" && password === "1234"){
      login()
      navigate("/")
    } else {
      alert("Credenciales incorrectas")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl border border-slate-100 px-8 py-10">

        {/* Logo + título */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-2xl bg-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-md">
            A
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Proyecto ABP</p>
            <h1 className="text-base font-semibold text-slate-800">Agenda ADSO — ReactJS</h1>
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Iniciar sesión</h2>
        <p className="text-sm text-gray-500 mb-6">Ingresa tus credenciales para continuar</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
            <input
              type="email"
              placeholder="admin@sena.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm px-4 py-2.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm px-4 py-2.5"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors shadow-md mt-2"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="mt-6 text-center text-[11px] text-slate-400 uppercase tracking-[0.2em]">SENA CTMA · ADSO</p>
      </div>
    </div>
  )
}