'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { account } from '@/lib/appwrite';

type Status = 'ready' | 'verifying' | 'success' | 'error';

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId') ?? '';
  const secret = searchParams.get('secret') ?? '';
  const [status, setStatus] = useState<Status>(() =>
    userId && secret ? 'ready' : 'error'
  );
  const [errorMessage, setErrorMessage] = useState(() =>
    userId && secret ? '' : 'Invalid verification link. Please check your email and try again.'
  );

  const verify = useCallback(async () => {
    setStatus('verifying');

    if (!userId || !secret) {
      setErrorMessage('Invalid verification link. Please check your email and try again.');
      setStatus('error');
      return;
    }

    try {
      await account.updateVerification(userId, secret);
      setStatus('success');
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'An unexpected error occurred.';

      if (message.includes('expired') || message.includes('Invalid token')) {
        setErrorMessage('This verification link has expired. Please request a new one from your profile in the app.');
      } else if (message.includes('already') || message.includes('used')) {
        setErrorMessage('This link has already been used. Your email may already be verified.');
      } else {
        setErrorMessage(message);
      }
      setStatus('error');
    }
  }, [userId, secret]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Phoenix Yard Sales"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-100/50 p-8 text-center">
          {/* Ready State */}
          {status === 'ready' && (
            <>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-navy mb-2">Confirm Your Email</h1>
              <p className="text-gray-500 text-sm mb-6">
                Tap the button below to verify your email address and activate your account.
              </p>
              <button
                onClick={verify}
                className="block w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 text-center"
              >
                Verify My Email
              </button>
            </>
          )}

          {/* Verifying State */}
          {status === 'verifying' && (
            <>
              <div className="flex justify-center mb-5">
                <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full" />
              </div>
              <h1 className="text-xl font-bold text-navy mb-2">Verifying your email...</h1>
              <p className="text-gray-500 text-sm">
                Please wait while we confirm your email address.
              </p>
            </>
          )}

          {/* Success State */}
          {status === 'success' && (
            <>
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-green-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-navy mb-2">Email Verified!</h1>
              <p className="text-gray-500 text-sm mb-6">
                Your email address has been successfully verified. You can now create event listings.
              </p>
              <Link
                href="/account"
                className="block w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 text-center"
              >
                Go to Profile
              </Link>
            </>
          )}

          {/* Error State */}
          {status === 'error' && (
            <>
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-red-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-navy mb-2">Verification Failed</h1>
              <p className="text-gray-500 text-sm mb-6">{errorMessage}</p>
              <Link
                href="/"
                className="block w-full py-3 px-4 border-2 border-gray-200 text-navy font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center"
              >
                Go Home
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense>
      <VerifyEmailContent />
    </Suspense>
  );
}
