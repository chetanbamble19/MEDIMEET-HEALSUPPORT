"use client";

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-green-800 p-4 flex flex-wrap justify-center gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/consultation" className="hover:underline">
          24/7 Consultation
        </Link>
        <Link href="/digital-health-records" className="hover:underline">
          Digital Health Records
        </Link>
        <Link href="/secure-platform" className="hover:underline">
          Secure Platform
        </Link>
        <Link href="/video-consultations" className="hover:underline">
          Video Consultations
        </Link>
        <Link href="/medicine-delivery" className="hover:underline">
          Medicine Delivery
        </Link>
        <Link href="/community-support" className="hover:underline">
          Community Support
        </Link>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
