"use client";

import { useState } from "react";

const medicines = [
  {
    name: "Paracetamol",
    use: "Fever and Pain Relief",
    benefits: "Reduces fever, relieves mild to moderate pain.",
    stock: 25,
  },
  {
    name: "Amoxicillin",
    use: "Antibiotic for bacterial infections",
    benefits: "Fights a wide range of bacterial infections.",
    stock: 12,
  },
  {
    name: "Ibuprofen",
    use: "Pain relief and anti-inflammatory",
    benefits: "Reduces inflammation and pain in muscles or joints.",
    stock: 8,
  },
  {
    name: "Loratadine",
    use: "Allergy relief",
    benefits: "Relieves runny nose, sneezing, and itchy eyes.",
    stock: 15,
  },
  {
    name: "Metformin",
    use: "Diabetes management",
    benefits: "Helps control blood sugar levels.",
    stock: 5,
  },
];

export default function MedicineDelivery() {
  const [viewMedicines, setViewMedicines] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const filteredMedicines = medicines.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Medicine Delivery</h1>

      {!viewMedicines ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl w-full text-left">
          <h2 className="text-2xl font-semibold mb-4">Doctor's Prescription</h2>
          <p className="mb-2">
            <strong>Doctor:</strong> Dr. Ayesha Rahman
          </p>
          <p className="mb-2">
            <strong>Patient:</strong> John Doe
          </p>
          <p className="mb-2">
            <strong>Symptoms:</strong> Fever, joint pain, mild allergies
          </p>
          <p className="mb-4">
            <strong>Prescribed Medicines:</strong> Paracetamol, Ibuprofen,
            Loratadine
          </p>
          <button
            onClick={() => setViewMedicines(true)}
            className="mt-4 w-full bg-green-700 hover:bg-green-600 py-2 rounded font-semibold"
          >
            View Medicines
          </button>
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-green-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Search Medicines</h2>

          <input
            type="text"
            placeholder="Enter medicine name..."
            className="w-full p-2 rounded bg-gray-900 text-white mb-6 border border-green-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {filteredMedicines.length > 0 ? (
            <ul className="space-y-4">
              {filteredMedicines.map((med, idx) => (
                <li
                  key={idx}
                  className="border border-green-600 rounded p-4 bg-gray-900"
                >
                  <h3 className="text-xl font-bold mb-1">{med.name}</h3>
                  <p>
                    <strong>Use:</strong> {med.use}
                  </p>
                  <p>
                    <strong>Benefits:</strong> {med.benefits}
                  </p>
                  <p>
                    <strong>Stock:</strong>{" "}
                    {med.stock > 0 ? `${med.stock} available` : "Out of stock"}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">No medicine found.</p>
          )}

          <button
            className="mt-6 w-full bg-green-700 hover:bg-green-600 py-2 rounded font-semibold"
            onClick={() => setOrderPlaced(true)}
            disabled={filteredMedicines.length === 0}
          >
            {orderPlaced ? "Order Placed ✅" : "Place Order"}
          </button>
        </div>
        
      )}
    </div>
  );
}
