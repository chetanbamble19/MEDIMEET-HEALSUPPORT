import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PhoneConsult() {
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleProceedToPayment = () => {
    router.push({
      pathname: "/payment",
      query: { address },
    });
  };

  return (
    <div className="min-h-screen bg-[#111] text-white py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Phone Consultation</h1>

      <div className="bg-card p-8 rounded-xl shadow-xl w-full max-w-lg space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Numbers</h2>
          <ul className="space-y-1 text-lg">
            <li>Landline: +1 (800) 123‑4567</li>
            <li>Mobile: +1 (800) 765‑4321</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
          <Image
            src="/map.png"
            alt="Map showing our office location"
            width={400}
            height={250}
            className="rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="address" className="block mb-1 font-semibold">
            Your Address
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full p-2 rounded-md text-black"
          />
          <button
            onClick={handleProceedToPayment}
            className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
