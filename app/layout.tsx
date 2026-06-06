import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phoenixyardsales.com"),
  title: "Phoenix Yard Sales - Find Events That Won't Break the Bank",
  description: "Discover affordable events and experiences in your area. Save money while having fun.",
  openGraph: {
    title: "Phoenix Yard Sales - Find Events That Won't Break the Bank",
    description: "Discover affordable events and experiences in your area. Save money while having fun.",
    url: "https://phoenixyardsales.com",
    siteName: "Phoenix Yard Sales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${outfit.variable} font-sans antialiased bg-background text-navy`}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
        </AuthProvider>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}