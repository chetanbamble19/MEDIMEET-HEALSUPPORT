"use client";

import { useState } from "react";
import Image from "next/image";

export default function BookAppointmentPage() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [appointments, setAppointments] = useState<any[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBook = () => {
    if (!doctor || !date) {
      alert("Please select date & enter doctor or condition.");
      return;
    }

    const newAppt = {
      id: appointments.length + 1,
      doctor,
      date,
    };

    setAppointments((prev) => [...prev, newAppt]);
    setDoctor("");
    setDate("");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <div className="bg-blue-700 text-white py-16 px-6 flex flex-col items-center text-center relative">
        {/* Logo */}
        <Image
          src="/globe.svg"
          alt="Medimeet Logo"
          width={120}
          height={40}
          className="absolute top-4 left-4"
        />

        <h1 className="text-4xl font-bold mb-4 leading-snug">
          Book Your Doctor <br /> Appointment Online.
        </h1>
        <p className="text-base mb-6 max-w-xl">
          A Healthier Tomorrow Starts Today: Schedule Your Appointment! <br />
          Your Wellness, Our Expertise: Set Up Your Appointment Today.
        </p>

        <div className="flex gap-4 mb-8 flex-wrap justify-center">
          <button
            onClick={handleBook}
            className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-md hover:bg-gray-100"
          >
            Book An Appointment
          </button>
          <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-700 font-semibold">
            Call now
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-gold rounded-xl shadow-lg px-4 py-3 flex flex-wrap gap-4 items-center w-full max-w-3xl">
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Search doctors, name, specialist"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleBook}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-100 text-green-800 text-center py-3 font-medium">
          ✅ Appointment Booked Successfully!
        </div>
      )}

      {/* Appointments List */}
      {appointments.length > 0 && (
        <div className="max-w-4xl mx-auto mt-10 px-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Your Appointments</h2>
          <ul className="space-y-4">
            {appointments.map((appt) => (
              <li
                key={appt.id}
                className="border rounded-md p-4 shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">Doctor/Condition: {appt.doctor}</p>
                  <p className="text-gray-600 text-sm">Date: {new Date(appt.date).toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* How It Works Section */}
      <div className="max-w-4xl mx-auto mt-16 px-4 pb-16">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">How It Works</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Select your preferred appointment date and time.</li>
          <li>Search by doctor’s name or medical condition.</li>
          <li>Click “Book An Appointment” or “Search”.</li>
          <li>View all your appointments below.</li>
        </ol>
      </div>
    </div>
  );
}
