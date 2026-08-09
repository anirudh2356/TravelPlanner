import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, ArrowRight, ShieldAlert } from 'lucide-react'

import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'
import ErrorMessage from '../components/auth/ErrorMessage'
import PasswordStrengthMeter from '../components/auth/PasswordStrengthMeter'
import Spinner from '../components/auth/Spinner'
import { resetPassword } from '../services/authService'
import { resetPasswordSchema } from '../utils/validators'

export default function ResetPassword() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const navigate = useNavigate()

  const [submitting, setSubmitting] = useState(false)
  const [apiError, setApiError] = useState(null)
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: '', confirmPassword: '' }
  })

  const passwordValue = watch('password')

  const onSubmit = async (data) => {
    setApiError(null)
    setSubmitting(true)
    try {
      await resetPassword({ token, password: data.password })
      setSuccess(true)
      setTimeout(() => navigate('/login'), 2000)
    } catch (err) {
      setApiError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  // No token in the URL at all — nothing to do here.
  if (!token) {
    return (
      <AuthLayout eyebrow="Reset password" title="Invalid reset link">
        <ErrorMessage
          message="This password reset link is missing a token. Please request a new one."
        />
        <Link to="/forgot-password" className="btn-primary inline-flex justify-center no-underline">
          Request a new link
        </Link>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      eyebrow="Reset password"
      title="Choose a new password"
      subtitle="Make it strong — you'll use this to log back in."
    >
      {success ? (
        <ErrorMessage variant="success" message="Password updated! Redirecting you to login…" />
      ) : (
        <>
          <ErrorMessage message={apiError} />
          {apiError && apiError.toLowerCase().includes('expired') && (
            <div className="mb-5 flex items-center gap-2 text-xs text-slate-500">
              <ShieldAlert className="h-3.5 w-3.5" />
              <Link to="/forgot-password" className="font-medium text-ocean-700 hover:text-ocean-900">
                Request a fresh reset link
              </Link>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <InputField
              label="New password"
              name="password"
              type="password"
              icon={Lock}
              placeholder="Enter new password"
              error={errors.password?.message}
              {...register('password')}
            />
            <PasswordStrengthMeter password={passwordValue} />

            <InputField
              label="Confirm new password"
              name="confirmPassword"
              type="password"
              icon={Lock}
              placeholder="Re-enter new password"
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />

            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? (
                <Spinner />
              ) : (
                <>
                  Update password <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </AuthLayout>
  )
}
