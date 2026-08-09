import { AlertTriangle, CheckCircle2 } from 'lucide-react'

/**
 * Form-level banner for API errors or success confirmations.
 * variant: 'error' | 'success'
 */
export default function ErrorMessage({ message, variant = 'error' }) {
  if (!message) return null

  const isError = variant === 'error'
  const Icon = isError ? AlertTriangle : CheckCircle2

  return (
    <div
      role="alert"
      className={`mb-5 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm ${
        isError
          ? 'border-red-200 bg-red-50 text-red-700'
          : 'border-emerald-200 bg-emerald-50 text-emerald-700'
      }`}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{message}</span>
    </div>
  )
}
