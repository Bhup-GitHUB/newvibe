import Link from 'next/link'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      period: '/mo',
      description: 'For individuals and small teams getting started.',
      features: ['Up to 3 mentors', 'Unlimited mentees', 'Basic templates', 'Email support'],
      cta: 'Get started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$24',
      period: '/user/mo',
      description: 'For growing orgs that need advanced workflows.',
      features: ['Unlimited mentors', 'Goal analytics', 'Custom templates', 'Priority support'],
      cta: 'Start free trial',
      highlighted: true,
    },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-gray-600">Try Pro free for 14 days. No credit card required.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border bg-white p-8 shadow-sm ${
                t.highlighted ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-200'
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <div className="flex items-end gap-2">
                <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-gray-900">{t.price}</span>
                <span className="text-sm text-gray-500">{t.period}</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{t.description}</p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-1 h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#cta"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus:outline-none focus-visible:ring-2 ${
                  t.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-600'
                    : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50'
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 