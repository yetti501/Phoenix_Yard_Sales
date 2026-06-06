'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ExecutionMethod } from 'appwrite';
import { useAuth } from '@/context/AuthContext';
import { functions } from '@/lib/appwrite';

type Step = 'warning' | 'confirm' | 'deleting' | 'done' | 'error';

export default function DeleteAccountPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState<Step>('warning');
  const [confirmText, setConfirmText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleDelete = useCallback(async () => {
    setStep('deleting');

    try {
      const execution = await functions.createExecution(
        'delete-account',
        '',
        false,
        undefined,
        ExecutionMethod.POST
      );

      if (execution.responseStatusCode >= 400) {
        let msg = 'Something went wrong. Please try again or contact support@smashingwallets.com';
        try {
          const body = JSON.parse(execution.responseBody);
          if (body.message) msg = body.message;
        } catch {
          // Use default message
        }
        setErrorMessage(msg);
        setStep('error');
        return;
      }

      // Clear session and show success
      await logout();
      setStep('done');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      const lower = message.toLowerCase();

      if (lower.includes('network') || lower.includes('fetch') || lower.includes('econnrefused')) {
        setErrorMessage('Unable to connect. Please check your internet connection.');
      } else if (lower.includes('unauthorized') || lower.includes('session') || lower.includes('401')) {
        setErrorMessage('Your session has expired. Please log in again.');
        setTimeout(() => router.push('/login'), 3000);
      } else {
        setErrorMessage('Something went wrong. Please try again or contact support@smashingwallets.com');
      }
      setStep('error');
    }
  }, [logout, router]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
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
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-100/50 p-8">
          {/* User info banner */}
          {(step === 'warning' || step === 'confirm') && (
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-white">
                  {(user.name || user.email)
                    .split(' ')
                    .map((n: string) => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-navy truncate">{user.name || 'User'}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          )}

          {/* Step 1: Warning */}
          {step === 'warning' && (
            <>
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>

              <h1 className="text-xl font-bold text-navy text-center mb-2">Delete Account</h1>
              <p className="text-gray-500 text-sm text-center mb-5">
                This will permanently delete the following:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400 shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  Your profile information
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400 shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  All your event listings and uploaded images
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400 shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  Your saved events and preferences
                </li>
              </ul>

              <p className="text-red-600 text-sm font-semibold text-center mb-6">
                This action cannot be undone.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => setStep('confirm')}
                  className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-red-600/25"
                >
                  Continue
                </button>
                <Link
                  href="/account"
                  className="block w-full py-3 px-4 border-2 border-gray-200 text-navy font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center"
                >
                  Cancel
                </Link>
              </div>
            </>
          )}

          {/* Step 2: Type DELETE to confirm */}
          {step === 'confirm' && (
            <>
              <h1 className="text-xl font-bold text-navy text-center mb-2">Confirm Deletion</h1>
              <p className="text-gray-500 text-sm text-center mb-6">
                Type <span className="font-mono font-semibold text-navy bg-gray-100 px-1.5 py-0.5 rounded">DELETE</span> below to confirm you want to permanently delete your account.
              </p>

              <input
                type="text"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder="Type DELETE to confirm"
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all text-center font-mono text-lg tracking-widest mb-6"
              />

              <div className="space-y-3">
                <button
                  onClick={handleDelete}
                  disabled={confirmText !== 'DELETE'}
                  className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-600 disabled:hover:shadow-none hover:shadow-lg hover:shadow-red-600/25"
                >
                  Delete My Account
                </button>
                <button
                  onClick={() => {
                    setConfirmText('');
                    setStep('warning');
                  }}
                  className="w-full py-3 px-4 border-2 border-gray-200 text-navy font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </>
          )}

          {/* Step 3: Deleting in progress */}
          {step === 'deleting' && (
            <div className="text-center py-4">
              <div className="flex justify-center mb-5">
                <div className="animate-spin h-12 w-12 border-4 border-red-500 border-t-transparent rounded-full" />
              </div>
              <h1 className="text-xl font-bold text-navy mb-2">Deleting your account...</h1>
              <p className="text-gray-500 text-sm">
                Please wait while we remove your data. This may take a moment.
              </p>
            </div>
          )}

          {/* Done */}
          {step === 'done' && (
            <div className="text-center py-4">
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
              <h1 className="text-xl font-bold text-navy mb-2">Your account has been deleted.</h1>
              <p className="text-gray-500 text-sm mb-6">
                Your account and all associated data have been permanently removed. We&apos;re sorry to see you go.
              </p>
              <Link
                href="/"
                className="block w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 text-center"
              >
                Return to Home
              </Link>
            </div>
          )}

          {/* Error */}
          {step === 'error' && (
            <div className="text-center py-4">
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
              <h1 className="text-xl font-bold text-navy mb-2">Something went wrong</h1>
              <p className="text-gray-500 text-sm mb-6">{errorMessage}</p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setConfirmText('');
                    setStep('warning');
                  }}
                  className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Try Again
                </button>
                <Link
                  href="/account"
                  className="block w-full py-3 px-4 border-2 border-gray-200 text-navy font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center"
                >
                  Back to Account
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
