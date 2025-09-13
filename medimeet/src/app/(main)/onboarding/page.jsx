"use client";

import { useRouter } from "next/navigation";
import { UserRound, Stethoscope } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Welcome to MediMeet</h1>
        <p className="text-gray-400 mt-2">
          Tell us how you want to use the platform
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Patient Card */}
        <div
          onClick={() => router.push("/onboarding/admin")}
          className="bg-zinc-900 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
        >
          <div className="bg-green-600/20 p-4 rounded-full">
            <UserRound size={48} className="text-green-500" />
          </div>
          <h2 className="text-xl font-semibold mt-4">Join as a Patient</h2>
          <p className="text-gray-400 text-sm mt-2">
            Book appointments, consult with doctors, and manage your healthcare
            journey.
          </p>
          <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium">
            Continue as Patient
          </button>
        </div>

        {/* Doctor Card */}
        <div
          onClick={() => router.push("/onboarding/doctor")}
          className="bg-zinc-900 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
        >
          <div className="bg-green-600/20 p-4 rounded-full">
            <Stethoscope size={48} className="text-green-500" />
          </div>
          <h2 className="text-xl font-semibold mt-4">Join as a Doctor</h2>
          <p className="text-gray-400 text-sm mt-2">
            Create your professional profile, set availability, and provide
            consultations.
          </p>
          <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium">
            Continue as Doctor
          </button>
        </div>
      </div>
    </div>
  );
}
