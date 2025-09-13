import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PhoneConsult() {
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleProceedToPayment = () => {
    // Pass address as query param or via state if needed
    router.push({
      pathname: "/payment",
      query: { address },
    });
  };

  return (
    <div className="min-h-screen bg-[#111] text-shadow-black py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Phone Consultation</h1>

      <div className="bg-card p-8 rounded-xl shadow-xl w-full max-w-lg space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Numbers</h2>
          <ul className="space-y-1 text-lg">
            <li>Landline: 1200 2000 2520</li>
            <li>Mobile: 9372415130</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
          <Image
            src="/img.jpg"
            alt="Map showing our office location"
            width={400}
            height={250}
            className="rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="address" className="block mb-1 font-semibold">
            Your Email Address
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
            className="mt-4 bg-gold-600 px-4 py-2 rounded hover:bg-gray-700"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
