"use client";
import { useRouter } from "next/navigation";

const specialties = [
  "Dermatology",
  "Neurology",
  "Oncology",
  "Pediatrician",
  "Cardiology",
  "Psychiatry",
  "Orthopedics",
  "Gastroenterology"
];

export default function DoctorsPage() {
  const router = useRouter();

  // ⛔️ Your function was declared outside the component or incomplete
  const handleClick = (specialty) => {
    const formatted = specialty.toLowerCase(); // ✅ make it lowercase
    router.push(`/doctors/${formatted}`);      // ✅ navigate to dynamic route
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-black via-transparent to-black text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose a Specialty</h1>

      <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
        {specialties.map((spec) => (
          <button
            key={spec}
            onClick={() => handleClick(spec)}
            className="
              bg-black bg-opacity-60
              border border-white border-opacity-30
              rounded-lg
              p-8
              font-semibold
              text-xl
              text-white
              hover:bg-white hover:text-black
              transition-colors duration-300
              shadow-lg
              flex items-center justify-center
              cursor-pointer
              select-none
            "
          >
            {spec}
          </button>
        ))}
      </div>
    </div>
  );
}
