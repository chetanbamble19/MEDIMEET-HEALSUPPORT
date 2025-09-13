// src/FeatureDetailModal.jsx
import { Dialog } from "@headlessui/react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function FeatureDetailModal({ feature, onClose }) {
  // Example data for appointments over time (for Book Appointments)
  const appointmentData = [
    { date: "2025-09-01", appointments: 2 },
    { date: "2025-09-02", appointments: 5 },
    { date: "2025-09-03", appointments: 3 },
    { date: "2025-09-04", appointments: 6 },
    { date: "2025-09-05", appointments: 4 },
  ];

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
    >
      <Dialog.Panel className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 font-bold text-xl hover:text-gray-900"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-6">{feature.title}</h2>
        <p className="mb-6 text-gray-700">{feature.description}</p>

        {/* Conditional detailed content */}

        {feature.title === "Book Appointments" && (
          <>
            <h3 className="text-2xl font-semibold mb-4">Appointment Timeline</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-800">
              <li>Schedule appointments with available doctors.</li>
              <li>View upcoming and past appointment history.</li>
              <li>Receive reminders and notifications.</li>
              <li>Cancel or reschedule appointments easily.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Appointments Overview (Last 5 days)</h3>

            <LineChart
              width={700}
              height={300}
              data={appointmentData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Line
                type="monotone"
                dataKey="appointments"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </>
        )}

        {feature.title === "Consult via Video" && (
          <>
            <h3 className="text-2xl font-semibold mb-4">How it Works</h3>
            <ul className="list-disc pl-6 text-gray-800">
              <li>Book a video consultation with your doctor.</li>
              <li>Get a secure video call link at your appointment time.</li>
              <li>Discuss your symptoms and get medical advice remotely.</li>
              <li>Receive prescriptions and follow-up plans.</li>
            </ul>
          </>
        )}

        {feature.title === "Manage Your Health" && (
          <>
            <h3 className="text-2xl font-semibold mb-4">Health Records Dashboard</h3>
            <p className="text-gray-700 mb-6">
              Keep track of your medical history, prescriptions, and lab results in one place.
            </p>
            <ul className="list-disc pl-6 text-gray-800">
              <li>View your past medical reports.</li>
              <li>Track medication adherence.</li>
              <li>Set health goals and reminders.</li>
            </ul>
          </>
        )}

        {feature.title === "Verified Specialists" && (
          <>
            <h3 className="text-2xl font-semibold mb-4">Find Verified Specialists</h3>
            <p className="mb-6 text-gray-700">
              Browse through specialists verified for expertise and experience.
            </p>
            <ul className="list-disc pl-6 text-gray-800">
              <li>See ratings and reviews.</li>
              <li>Check availability and book appointments.</li>
              <li>Get personalized specialist recommendations.</li>
            </ul>
          </>
        )}
      </Dialog.Panel>
    </Dialog>
  );
}
