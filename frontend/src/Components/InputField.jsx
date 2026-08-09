import { forwardRef, useState } from 'react'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'

/**
 * Generic form input with label, error state, and optional
 * password-visibility toggle. Designed to be used with
 * react-hook-form's register(), spread via {...props}.
 */
const InputField = forwardRef(
  ({ label, name, type = 'text', error, icon: Icon, rightSlot, ...props }, ref) => {
    const [show, setShow] = useState(false)
    const isPassword = type === 'password'
    const resolvedType = isPassword && show ? 'text' : type

    return (
      <div className="mb-4">
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor={name} className="text-sm font-medium text-slate-700">
            {label}
          </label>
          {rightSlot}
        </div>

        <div className="relative">
          {Icon && (
            <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          )}
          <input
            id={name}
            name={name}
            type={resolvedType}
            ref={ref}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${name}-error` : undefined}
            className={`input-base ${Icon ? 'pl-10' : ''} ${isPassword ? 'pr-10' : ''} ${
              error ? 'input-error' : ''
            }`}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              tabIndex={-1}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label={show ? 'Hide password' : 'Show password'}
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          )}
        </div>

        {error && (
          <p id={`${name}-error`} className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {error}
          </p>
        )}
      </div>
    )
  }
)

InputField.displayName = 'InputField'
export default InputField
