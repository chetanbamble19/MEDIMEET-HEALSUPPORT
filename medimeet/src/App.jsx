import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const features = [
  {
    title: "Book Appointments",
    icon: "→",
    description: "Easily schedule appointments with doctors at your convenience.",
    details: {
      text: "Schedule your appointments with verified doctors, view upcoming and past appointments in a timeline, and get reminders.",
      timeline: [
        { date: "2025-09-12", event: "Appointment booked with Dr. Smith" },
        { date: "2025-09-15", event: "Video consultation with Dr. Meera" },
        { date: "2025-09-20", event: "Follow-up appointment" },
      ],
      graphData: [
        { name: "Week 1", appointments: 3 },
        { name: "Week 2", appointments: 2 },
        { name: "Week 3", appointments: 4 },
        { name: "Week 4", appointments: 1 },
      ],
    },
  },
  {
    title: "Consult via Video",
    icon: "🩺",
    description: "Connect with doctors through secure video calls from home.",
    details: {
      text: "Video consultations allow you to discuss your health concerns from the comfort of your home with top specialists.",
    },
  },
  {
    title: "Manage Your Health",
    icon: "❤️",
    description: "Keep track of your medical history and prescriptions in one place.",
    details: {
      text: "Store your medical records securely, track prescriptions, and get personalized health tips based on your data.",
    },
  },
  {
    title: "Verified Specialists",
    icon: "👨‍⚕️",
    description: "Consult with experienced and verified healthcare professionals.",
    details: {
      text: "All doctors on our platform are verified with licenses and ratings to ensure you get the best care.",
    },
  },
];

export default function App() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Healthcare Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedFeature(feature)}
            className="cursor-pointer p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <div className="text-2xl mb-2">{feature.icon}</div>
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="text-gray-300 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for feature details */}
      <Transition appear show={selectedFeature !== null} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setSelectedFeature(null)}
        >
          <div className="min-h-screen px-4 text-center bg-black bg-opacity-70">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="inline-block w-full max-w-3xl p-6 my-20 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold mb-4"
                >
                  {selectedFeature?.title}
                </Dialog.Title>
                <Dialog.Description className="mb-6 text-gray-300">
                  {selectedFeature?.details.text}
                </Dialog.Description>

                {/* Timeline if available */}
                {selectedFeature?.details.timeline && (
                  <>
                    <h4 className="font-semibold mb-2">Appointment Timeline:</h4>
                    <ul className="list-disc list-inside mb-6">
                      {selectedFeature.details.timeline.map((item, idx) => (
                        <li key={idx}>
                          <strong>{item.date}:</strong> {item.event}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Graph if available */}
                {selectedFeature?.details.graphData && (
                  <>
                    <h4 className="font-semibold mb-2">Appointments Over Time</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={selectedFeature.details.graphData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                        <CartesianGrid stroke="#444" />
                        <XAxis dataKey="name" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="appointments" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </>
                )}

                <button
                  className="mt-6 px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                  onClick={() => setSelectedFeature(null)}
                >
                  Close
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
