function Icon({ path }: { path: string }) {
  return (
    <svg className="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const features = [
  {
    title: 'Guided sessions',
    description: 'Structured agendas that keep mentorship focused and outcome-driven.',
    icon: 'M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0117.25 19.5H6.75A2.25 2.25 0 014.5 17.25V6.75z',
  },
  {
    title: 'Collaborative goals',
    description: 'Set shared goals, track progress, and celebrate milestones.',
    icon: 'M12 2.25c-5.385 0-9.75 4.365-9.75 9.75S6.615 21.75 12 21.75 21.75 17.385 21.75 12 17.385 2.25 12 2.25z',
  },
  {
    title: 'Actionable insights',
    description: 'Turn meeting notes into tasks with AI-powered suggestions.',
    icon: 'M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V6.75z',
  },
  {
    title: 'Integrated feedback',
    description: 'Collect 360° feedback directly in sessions and projects.',
    icon: 'M7.5 6.75h9a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 015.25 15V9a2.25 2.25 0 012.25-2.25z',
  },
  {
    title: 'Templates & playlists',
    description: 'Reusable session templates and mentor playlists for consistency.',
    icon: 'M6.75 3A2.25 2.25 0 004.5 5.25v13.5A2.25 2.25 0 006.75 21h10.5A2.25 2.25 0 0019.5 18.75V5.25A2.25 2.25 0 0017.25 3H6.75z',
  },
  {
    title: 'Enterprise-ready',
    description: 'SSO, SCIM, and granular roles to meet security requirements.',
    icon: 'M12 6l7.794 4.5L12 15 4.206 10.5 12 6z',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for meaningful mentorship</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to make mentorship a repeatable, measurable advantage.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                  <Icon path={f.icon} />
                </span>
                <h3 className="text-base font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 