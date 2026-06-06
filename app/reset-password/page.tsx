"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId") ?? "";
  const secret = searchParams.get("secret") ?? "";
  const deepLink = `smashingwallets://resetPassword?userId=${encodeURIComponent(userId)}&secret=${encodeURIComponent(secret)}`;

  useEffect(() => {
    if (userId && secret) {
      window.location.href = deepLink;
    }
  }, [userId, secret, deepLink]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        padding: "1rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: "2.5rem 2rem",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#1E3A5F",
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          Reset Your Password
        </h1>
        <p style={{ color: "#6B7280", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
          Tap the button below to open Phoenix Yard Sales and reset your password.
        </p>
        <a
          href={deepLink}
          style={{
            display: "inline-block",
            backgroundColor: "#FF5747",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1rem",
            padding: "0.85rem 2rem",
            borderRadius: "10px",
            textDecoration: "none",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          Open App
        </a>
        <p
          style={{
            color: "#6B7280",
            fontSize: "0.8rem",
            marginTop: "1.25rem",
          }}
        >
          If the app doesn&apos;t open, make sure Phoenix Yard Sales is installed on your device.
        </p>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordContent />
    </Suspense>
  );
}
