import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-600 to-violet-600" />
            <span className="text-sm font-semibold text-gray-900">Mentiting</span>
          </div>
          <nav className="flex items-center gap-5 text-sm text-gray-600">
            <Link href="#features" className="hover:text-gray-900">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#faq" className="hover:text-gray-900">
              FAQ
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Privacy
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Mentiting, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
} 