import { Loader2 } from 'lucide-react'

export default function Spinner({ full = false, label = 'Loading…' }) {
  if (full) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-sand-50">
        <Loader2 className="h-8 w-8 animate-spin text-ocean-600" />
        <p className="text-sm text-slate-500">{label}</p>
      </div>
    )
  }
  return <Loader2 className="h-4 w-4 animate-spin" />
}
