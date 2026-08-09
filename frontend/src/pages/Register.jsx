import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { User, Mail, Lock, ArrowRight } from 'lucide-react'

import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'
import ErrorMessage from '../components/auth/ErrorMessage'
import PasswordStrengthMeter from '../components/auth/PasswordStrengthMeter'
import Spinner from '../components/auth/Spinner'
import { useAuth } from '../hooks/useAuth'
import { registerSchema } from '../utils/validators'

export default function Register() {
  const { register: registerUser, error, clearError } = useAuth()
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    }
  })

  const passwordValue = watch('password')

  const onSubmit = async (data) => {
    clearError()
    setSubmitting(true)
    const result = await registerUser(data)
    setSubmitting(false)
    if (result.success) {
      navigate('/trips', { replace: true })
    }
  }

  return (
    <AuthLayout
      eyebrow="Get started"
      title="Create your account"
      subtitle="Start building itineraries in minutes — it's free."
    >
      <ErrorMessage message={error} />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputField
          label="Full name"
          name="fullName"
          icon={User}
          placeholder="Jordan Rivera"
          error={errors.fullName?.message}
          {...register('fullName')}
        />

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
          placeholder="Create a strong password"
          error={errors.password?.message}
          {...register('password')}
        />
        <PasswordStrengthMeter password={passwordValue} />

        <InputField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          icon={Lock}
          placeholder="Re-enter your password"
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        <div className="mb-6">
          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-ocean-600 focus:ring-ocean-500"
              {...register('agreeToTerms')}
            />
            <span>
              I agree to the{' '}
              <a href="#" className="font-medium text-ocean-700 hover:text-ocean-900">
                Terms &amp; Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-ocean-700 hover:text-ocean-900">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="mt-1.5 text-xs text-red-600">{errors.agreeToTerms.message}</p>
          )}
        </div>

        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting ? (
            <Spinner />
          ) : (
            <>
              Create account <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-ocean-700 hover:text-ocean-900">
          Log in
        </Link>
      </p>
    </AuthLayout>
  )
}
