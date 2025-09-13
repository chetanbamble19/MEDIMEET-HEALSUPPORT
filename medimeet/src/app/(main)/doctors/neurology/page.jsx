"use client";
import { useState } from "react";
import Image from "next/image";

export default function NeurologyBooking() {
  const [showBooking, setShowBooking] = useState(true);
  const [selectedDate, setSelectedDate] = useState("2025-05-28");
  const [selectedSlot, setSelectedSlot] = useState("18:48 - 19:18");
  const [concern, setConcern] = useState("");

  const slots = [
    "6:00 PM - 6:30 PM",
    "6:48 PM - 7:18 PM",
    "7:30 PM - 8:00 PM",
    "8:15 PM - 8:45 PM",
  ];

  const toggleBooking = () => setShowBooking((prev) => !prev);

  return (
    <div className="min-h-screen bg-[#121212] text-white flex max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
      {/* Left panel - Doctor info */}
      <div className="w-1/3 bg-[#1e1e1e] p-8 flex flex-col items-center text-center space-y-4">
        <div className="rounded-full overflow-hidden w-32 h-32 border-4 border-emerald-500">
          <Image
            src="data:image/jpeg;base64,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" // Replace with actual image path
            alt="Dr. Chetan Bamble"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold">Dr. Chetan Bamble</h2>
        <span className="bg-emerald-600 text-black text-xs font-semibold px-3 py-1 rounded-full">
          Neurology
        </span>
        <p className="text-gray-400 text-sm flex items-center gap-1 justify-center">
          🧠 5 years experience
        </p>

        <button
          onClick={toggleBooking}
          className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 py-2 rounded-lg font-semibold transition"
        >
          {showBooking ? "Hide Booking" : "Show Booking"}
          {showBooking ? (
            <span className="inline-block ml-2">▲</span>
          ) : (
            <span className="inline-block ml-2">▼</span>
          )}
        </button>
      </div>

      {/* Right panel - Booking form */}
      {showBooking && (
        <div className="flex-1 p-8">
          <h3 className="text-xl font-semibold mb-6">Book an Appointment</h3>

          {/* Date display */}
          <div className="bg-[#1e1e1e] rounded-lg p-4 mb-4 space-y-2">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
                />
              </svg>
              <span>
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Time slot */}
            <div className="flex items-center gap-2 text-gray-300 text-sm mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
              <span>{selectedSlot}</span>
            </div>

            {/* Cost */}
            <div className="flex items-center gap-2 text-gray-300 text-sm mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v6m0 0H9m3 0h3"
                />
              </svg>
              <span>Cost: 3 credits</span>
            </div>
          </div>

          {/* Date selector */}
          <label className="block mb-2 font-semibold" htmlFor="date">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 rounded bg-[#1e1e1e] text-white border border-gray-700 mb-6"
          />

          {/* Time slots */}
          <label className="block mb-2 font-semibold">Select Time Slot</label>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`p-3 rounded font-medium border transition ${
                  selectedSlot === slot
                    ? "bg-emerald-600 border-emerald-600 text-black"
                    : "bg-[#1e1e1e] border-gray-700 hover:border-emerald-600"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>

          {/* Medical concern textarea */}
          <label className="block mb-2 font-semibold" htmlFor="concern">
            Describe your medical concern (optional)
          </label>
          <textarea
            id="concern"
            rows={5}
            placeholder="Please provide any details about your medical concern or what you'd like to discuss in the appointment..."
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="w-full p-3 rounded bg-[#1e1e1e] text-white border border-gray-700 resize-none"
          ></textarea>

          <p className="mt-2 text-xs text-gray-500">
            This information will be shared with the doctor before your appointment.
          </p>

          <button
            className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-black py-3 rounded-lg font-semibold transition"
            onClick={() => alert("Appointment booked successfully!")}
          >
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );
}
