import { Compass, MapPin, Plane } from 'lucide-react'

/**
 * Shared two-column layout for all auth pages:
 * left = branding / travel imagery, right = form card.
 */
export default function AuthLayout({ eyebrow, title, subtitle, children }) {
  return (
    <div className="flex min-h-screen w-full bg-sand-50">
      {/* Left branding panel */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-travel-gradient p-12 text-white lg:flex">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <MapPin className="absolute left-16 top-24 h-24 w-24 rotate-[-12deg]" />
          <Compass className="absolute bottom-32 right-10 h-40 w-40 rotate-12" />
          <Plane className="absolute right-24 top-16 h-16 w-16 rotate-45" />
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            <Compass className="h-6 w-6" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">Wanderly</span>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="font-display text-4xl font-bold leading-tight">
            Plan your next adventure, all in one place.
          </h1>
          <p className="mt-4 text-ocean-100">
            Itineraries, packing lists, and destination inspiration — synced across every trip you plan with Wanderly.
          </p>
        </div>

        <p className="relative z-10 text-sm text-ocean-100/70">
          © {new Date().getFullYear()} Wanderly. Happy travels.
        </p>
      </div>

      {/* Right form panel */}
      <div className="flex w-full flex-col items-center justify-center px-6 py-12 lg:w-1/2">
        <div className="mb-8 flex items-center gap-2 lg:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ocean-700 text-white">
            <Compass className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold text-ocean-900">Wanderly</span>
        </div>

        <div className="card-surface">
          {eyebrow && (
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-sunset-600">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-2xl font-bold text-ocean-950">{title}</h2>
          {subtitle && <p className="mt-2 text-sm text-slate-500">{subtitle}</p>}

          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  )
}
