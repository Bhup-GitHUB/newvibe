export default function Solutions() {
  const items = [
    {
      title: 'Onboarding programs',
      description: 'Ramp new hires faster with structured mentor-led onboarding.',
    },
    {
      title: 'Leadership coaching',
      description: 'Develop managers through recurring, goal-driven sessions.',
    },
    {
      title: 'Skill tracks',
      description: 'Create repeatable, role-specific mentorship tracks.',
    },
  ]

  return (
    <section id="solutions" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solutions that fit your workflow</h2>
            <p className="mt-4 text-lg text-gray-600">
              Mentiting adapts to your org—whether you are running onboarding cohorts, peer learning circles, or leadership coaching.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((s) => (
                <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-indigo-50 to-violet-50 shadow-sm">
              <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">Screenshot placeholder</div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-40 rounded-xl border border-gray-200 bg-white p-4 text-xs text-gray-600 shadow-md md:block">
              Session notes → tasks
            </div>
            <div className="absolute -right-6 -top-6 hidden w-40 rounded-xl border border-gray-200 bg-white p-4 text-xs text-gray-600 shadow-md md:block">
              Goal progress 68%
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 