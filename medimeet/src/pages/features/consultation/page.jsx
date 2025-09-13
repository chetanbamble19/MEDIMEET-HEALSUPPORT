"use client";

import { useState } from "react";

export default function ConsultationPage() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Open slide-in panel with loading animation
  const openPanel = () => {
    setPanelOpen(true);
    setLoading(true);
    // Simulate doctor availability loading
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-white p-8 relative overflow-hidden">
      <h1 className="text-4xl font-bold mb-6">24/7 Consultation</h1>
      <p className="mb-4 max-w-2xl">
        Welcome to our hospital consultation center. Here you can open a live chat or book appointments with our doctors anytime.
      </p>

      <button
        onClick={openPanel}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold"
      >
        Open Doctor Availability
      </button>

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gray-900 shadow-lg transform transition-transform duration-500 ${
          panelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            onClick={() => setPanelOpen(false)}
            className="self-end text-green-400 font-bold text-xl"
            aria-label="Close Panel"
          >
            ×
          </button>

          <h2 className="text-2xl font-semibold mb-4">Doctor Availability</h2>

          {loading ? (
            <div className="flex flex-col items-center justify-center flex-grow space-y-4">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-green-500 h-16 w-16"></div>
              <p>Loading doctors' availability...</p>
            </div>
          ) : (
            <ul className="flex-grow overflow-auto">
              <li className="mb-3 p-3 bg-green-800 rounded">Dr. Smith - Available Now</li>
              <li className="mb-3 p-3 bg-green-700 rounded">Dr. Johnson - Available in 30 mins</li>
              <li className="mb-3 p-3 bg-green-800 rounded">Dr. Lee - Available Now</li>
              <li className="mb-3 p-3 bg-green-700 rounded">Dr. Patel - Available Tomorrow</li>
            </ul>
          )}

          {!loading && (
            <button className="mt-auto bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-semibold">
              Book Appointment
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .loader {
          border-top-color: #22c55e;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
