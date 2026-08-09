import { getPasswordStrength } from '../../utils/validators'

export default function PasswordStrengthMeter({ password }) {
  const { score, label, color } = getPasswordStrength(password)
  if (!password) return null

  return (
    <div className="mb-4 -mt-2">
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < score ? color : 'bg-slate-200'
            }`}
          />
        ))}
      </div>
      <p className="mt-1 text-xs text-slate-500">
        Strength: <span className="font-medium text-slate-600">{label}</span>
      </p>
    </div>
  )
}
