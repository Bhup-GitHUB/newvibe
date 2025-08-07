import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="absolute left-1/2 top-10 -translate-x-1/2">
          <div className="h-64 w-[80rem] rounded-full bg-gradient-to-r from-indigo-200 via-violet-200 to-fuchsia-200 blur-3xl" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
            New
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            Guided mentorship sessions
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Mentor-led productivity that turns goals into growth
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-gray-600">
            Mentiting connects mentors and teams with structured sessions, collaborative goals, and actionable insights. Turn feedback into measurable outcomes.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="#cta"
              className="w-full rounded-md bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 sm:w-auto"
            >
              Start free trial
            </Link>
            <Link
              href="#features"
              className="w-full rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 sm:w-auto"
            >
              See features
            </Link>
          </div>

          <p className="mt-6 text-xs text-gray-500">No credit card required. 14-day free trial.</p>
        </div>

        <div className="mt-16 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {['Acme', 'Nova', 'Zenit', 'Lumina', 'Orion', 'Nimbus'].map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center rounded-md border border-gray-200 bg-white/60 p-4 text-sm font-medium text-gray-500 shadow-sm"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 