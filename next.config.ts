import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_RELEASE_STAGE:
      process.env.VERCEL_ENV ||
      (process.env.NODE_ENV === 'production' ? 'production' : 'development'),
    NEXT_PUBLIC_MASTER_ADMIN_EMAIL: process.env.MASTER_ADMIN_EMAIL || '',
  },
  async redirects() {
    return [
      {
        source: "/support",
        destination: "/help-support",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://nyc.cloud.appwrite.io https://cloud.appwrite.io https://www.google.com https://*.google-analytics.com https://*.googletagmanager.com https://notify.bugsnag.com https://sessions.bugsnag.com",
              "frame-src https://www.google.com https://www.gstatic.com",
              "worker-src 'self' blob:",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
