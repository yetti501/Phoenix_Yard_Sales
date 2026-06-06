'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { user, loading, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Phoenix Yard Sales"
              width={40}
              height={40}
              className="rounded-lg transition-transform group-hover:scale-105"
            />
            <span className="font-display font-bold text-xl text-navy hidden sm:block">
              Phoenix Yard Sales
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-2 sm:gap-4">
            {loading ? (
              <div className="w-20 h-9 bg-gray-100 rounded-lg animate-pulse" />
            ) : user ? (
              <>
                <Link
                  href="/account"
                  className="px-4 py-2 text-sm font-medium text-navy hover:text-primary transition-colors"
                >
                  Account
                </Link>
                <button
                  onClick={() => logout()}
                  className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-navy transition-colors"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-navy hover:text-primary transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
