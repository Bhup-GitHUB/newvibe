"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-600 to-violet-600" />
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Mentiting
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-gray-700 hover:text-gray-900">
            Features
          </Link>
          <Link href="#solutions" className="text-gray-700 hover:text-gray-900">
            Solutions
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="#faq" className="text-gray-700 hover:text-gray-900">
            FAQ
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="#cta"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
          >
            Start free trial
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            {open ? (
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zm0 6.75c0-.414.336-.75.75-.75h15a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zm0 6c0-.414.336-.75.75-.75h15a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6 lg:px-8">
            <Link href="#features" className="block rounded-md px-3 py-2 hover:bg-gray-50">
              Features
            </Link>
            <Link href="#solutions" className="block rounded-md px-3 py-2 hover:bg-gray-50">
              Solutions
            </Link>
            <Link href="#pricing" className="block rounded-md px-3 py-2 hover:bg-gray-50">
              Pricing
            </Link>
            <Link href="#faq" className="block rounded-md px-3 py-2 hover:bg-gray-50">
              FAQ
            </Link>
            <Link
              href="#cta"
              className="mt-2 block rounded-md bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Start free trial
            </Link>
          </div>
        </div>
      )}
    </header>
  )
} 