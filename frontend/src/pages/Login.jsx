import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Lock, ArrowRight } from 'lucide-react'

import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'
import ErrorMessage from '../components/auth/ErrorMessage'
import Spinner from '../components/auth/Spinner'
import { useAuth } from '../hooks/useAuth'
import { loginSchema } from '../utils/validators'

export default function Login() {
  const { login, error, clearError } = useAuth()
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', rememberMe: false }
  })

  const redirectTo = location.state?.from?.pathname || '/trips'

  const onSubmit = async (data) => {
    clearError()
    setSubmitting(true)
    const result = await login(data)
    setSubmitting(false)
    if (result.success) {
      navigate(redirectTo, { replace: true })
    }
  }

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Log in to Travel Planner"
      subtitle="Pick up your trip planning right where you left off."
    >
      <ErrorMessage message={error} />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputField
          label="Email address"
          name="email"
          type="email"
          icon={Mail}
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          icon={Lock}
          placeholder="••••••••"
          error={errors.password?.message}
          rightSlot={
            <Link to="/forgot-password" className="text-xs font-medium text-ocean-600 hover:text-ocean-800">
              Forgot password?
            </Link>
          }
          {...register('password')}
        />

        <label className="mb-6 flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-ocean-600 focus:ring-ocean-500"
            {...register('rememberMe')}
          />
          Remember me on this device
        </label>

        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting ? (
            <Spinner />
          ) : (
            <>
              Log in <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        New to Travel Planner?{' '}
        <Link to="/register" className="font-semibold text-ocean-700 hover:text-ocean-900">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  )
}
