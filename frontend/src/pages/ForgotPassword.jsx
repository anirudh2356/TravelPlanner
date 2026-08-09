import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react'

import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'
import ErrorMessage from '../components/auth/ErrorMessage'
import Spinner from '../components/auth/Spinner'
import { forgotPassword } from '../services/authService'
import { forgotPasswordSchema } from '../utils/validators'

export default function ForgotPassword() {
  const [submitting, setSubmitting] = useState(false)
  const [apiError, setApiError] = useState(null)
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' }
  })

  const onSubmit = async (data) => {
    setApiError(null)
    setSubmitting(true)
    try {
      await forgotPassword(data)
      // Always show generic success — never reveal whether the email exists.
      setSent(true)
    } catch (err) {
      setApiError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthLayout
      eyebrow="Account recovery"
      title="Forgot your password?"
      subtitle="Enter your email and we'll send you a link to reset it."
    >
      {sent ? (
        <div>
          <ErrorMessage
            variant="success"
            message="If an account with that email exists, a reset link has been sent. Check your inbox (and spam folder)."
          />
          <p className="mb-6 text-xs text-slate-500">
            Tip: in this demo, open your browser console to see the generated reset link.
          </p>
          <Link to="/login" className="btn-primary inline-flex justify-center no-underline">
            <ArrowLeft className="h-4 w-4" /> Back to login
          </Link>
        </div>
      ) : (
        <>
          <ErrorMessage message={apiError} />
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

            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? (
                <Spinner />
              ) : (
                <>
                  Send reset link <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Remembered your password?{' '}
            <Link to="/login" className="font-semibold text-ocean-700 hover:text-ocean-900">
              Log in
            </Link>
          </p>
        </>
      )}
    </AuthLayout>
  )
}
