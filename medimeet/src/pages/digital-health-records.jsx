"use client";
import { useState } from "react";

// Dummy data
const patients = [
  { name: "Chetan Bamble", date: "2025-09-10", issue: "Hypertension" },
  { name: "Pravish Dwibedi", date: "2025-09-08", issue: "Type 2 Diabetes" },
  { name: "Haresh Dhasade", date: "2025-08-28", issue: "Asthma" },
  { name: "Amit Ckolape", date: "2025-09-05", issue: "Thyroid Disorder" },
  { name: "Sujal Bhore", date: "2025-09-12", issue: "Migraines" },
  { name: "Ashwini Kulkarni", date: "2025-09-01", issue: "High Cholesterol with Level Hypocritic pose 2 "  },
  { name: "Chetu", date: "2025-09-11", issue: "Anemia" },
  { name: "Sameer Patil", date: "2025-09-04", issue: "Back Pain" },
  { name: "Ritika Joshi", date: "2025-08-30", issue: "Arthritis" },
  { name: "Ravi Shinde", date: "2025-09-03", issue: "Skin Allergy" },
  { name: "Divya Rane", date: "2025-09-07", issue: "PCOS" },
  { name: "Aditya Sawant", date: "2025-09-02", issue: "Depression" },
];

export default function AyushmanCards() {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white text-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <img
              src="data:image/jpeg;base64,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"
              alt="Ayushman Bharat"
              className="h-16"
            />
            <div>
              <h1 className="text-3xl font-bold">Ayushman Bharat Patient Cards</h1>
              <p className="text-sm text-gray-700">MediMeet - Digital Health Partner</p>
            </div>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search patient name..."
            className="mt-4 md:mt-0 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPatients.map((patient, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-4 border-2 transition shadow hover:shadow-lg ${
                selectedIssue === patient.issue ? "border-green-600" : "border-gray-200"
              }`}
              onClick={() => setSelectedIssue(patient.issue)}
            >
              {/* Card header with logo */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-green-800">{patient.name}</h2>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZEOVm4Nbl8qKswqNp3KRfZXo_1FSQo15ZQ&s"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </div>

              <p className="text-xs text-gray-600 mb-1">Date Issued: {patient.date}</p>
              <p className="text-xs italic text-gray-500">Click card to scan patient QR</p>

              {/* QR */}
              <div className="mt-4 bg-gray-100 rounded flex items-center justify-center p-3">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(
                    patient.issue
                  )}`}
                  alt="QR"
                  className="h-24 w-24"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Issue Modal */}
        {selectedIssue && (
          <div className="fixed bottom-6 right-6 bg-green-900 text-white px-6 py-4 rounded shadow-lg border border-green-500 max-w-sm w-full">
            <p className="text-sm">
              🩺 <span className="font-semibold">Patient Issue:</span>{" "}
              <span className="text-green-300">{selectedIssue}</span>
            </p>
            <button
              onClick={() => setSelectedIssue(null)}
              className="mt-2 text-sm text-green-400 underline"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
