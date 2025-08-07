export default function FAQ() {
  const faqs = [
    {
      q: 'What is Mentiting?',
      a: 'Mentiting is a mentor-led productivity platform that turns conversations into outcomes through guided sessions, goals, and insights.',
    },
    { q: 'Is there a free trial?', a: 'Yes, a 14-day free trial with no credit card required.' },
    {
      q: 'Can we use our SSO?',
      a: 'Yes. SSO and SCIM are available on enterprise plans. Contact sales for details.',
    },
    {
      q: 'Do you offer discounts?',
      a: 'We offer discounts for startups, education, and nonprofits. Reach out to our team.',
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>
        <dl className="mt-10 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <dt className="text-base font-semibold text-gray-900">{f.q}</dt>
              <dd className="mt-2 text-sm text-gray-600">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
} 