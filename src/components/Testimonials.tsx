const testimonials = [
  {
    name: 'Amelia Hart',
    role: 'Head of People, Nova',
    quote:
      'Mentiting turned our mentorship program from ad-hoc to outcome-driven. We saw time-to-ramp drop by 22% in one quarter.',
  },
  {
    name: 'Ravi Patel',
    role: 'Engineering Manager, Orion',
    quote:
      'The guided sessions and goal tracking keep conversations focused. My 1:1s are now the highest-leverage time of my week.',
  },
  {
    name: 'Sofia Alvarez',
    role: 'L&D Lead, Lumina',
    quote:
      'Templates and analytics made it easy to scale mentorship across teams without losing quality.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Loved by ambitious teams</h2>
          <p className="mt-4 text-lg text-gray-600">
            Mentors and managers use Mentiting to turn conversations into measurable progress.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-sm leading-6 text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
} 