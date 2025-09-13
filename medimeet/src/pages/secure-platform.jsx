"use client";

import { useState } from "react";

export default function SecurePlatform() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [locked, setLocked] = useState(true);
  const correctPassword = "1234";

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Try again.");
    }
  };

  const dummyDatabases = Array.from({ length: 12 }, (_, i) => ({
    name: `Database-${i + 1}`,
    description: "Encrypted records with AES-256",
    securityLevel: "HIPAA & GDPR Compliant",
  }));

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-6">Enter Secure Platform</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none text-white mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-green-700 px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Submit
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Secure Platform</h1>

      <div
        className="cursor-pointer p-8 rounded bg-green-700 flex flex-col items-center justify-center mb-8"
        onClick={() => setLocked(!locked)}
      >
        <div
          className={`w-24 h-24 mb-4 transition-transform duration-700 ${
            locked ? "rotate-0" : "rotate-360"
          }`}
        >
          {locked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m0-8v2m-6 2h12a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 012-2z"
              />
              <rect
                x="8"
                y="7"
                width="8"
                height="5"
                rx="2"
                ry="2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.104 0 2-.896 2-2V7a2 2 0 10-4 0v2c0 1.104.896 2 2 2z"
              />
              <rect
                x="6"
                y="11"
                width="12"
                height="7"
                rx="2"
                ry="2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          )}
        </div>

        <div className="max-w-md text-center">
          {locked ? (
            <>
              <h2 className="text-2xl font-semibold mb-4">Data Locked</h2>
              <p>
                All patient data is encrypted, stored securely, and fully compliant
                with regulations.
              </p>
              <p className="mt-2 font-mono text-sm">Certifications: HIPAA, GDPR</p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-4">Security Details</h2>
              <ul className="text-left list-disc list-inside">
                <li>AES-256 Encryption</li>
                <li>Multi-factor Authentication</li>
                <li>Regular Security Audits</li>
                <li>Data Backup & Disaster Recovery</li>
              </ul>
            </>
          )}
        </div>
      </div>

      {/* Dummy Databases Section */}
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dummyDatabases.map((db, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded p-4 border border-green-600 shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{db.name}</h3>
            <p className="text-sm">{db.description}</p>
            <p className="text-xs text-green-400 mt-1">{db.securityLevel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
