export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-4xl rounded-2xl border border-indigo-200 bg-indigo-50/60 px-6 py-12 shadow-sm sm:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start your 14-day free trial
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Experience mentor-led productivity with Mentiting. Cancel anytime.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]"
          >
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              Start free trial
            </button>
          </form>

          <p className="mt-3 text-xs text-gray-500">By signing up, you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
    </section>
  )
} 