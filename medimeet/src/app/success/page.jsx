"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "../../components/ui/button";


export default function Success() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Updated handleSubmit with API call
  const handleSubmit = async () => {
    if (rating === 0) {
      alert("Please select a rating before submitting.");
      return;
    }

    setSubmitted(true);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, feedback }),
      });

      if (!res.ok) throw new Error("Failed to save feedback");

      alert("🎉 Thank you for your feedback!");
      router.push("/");
    } catch (error) {
      alert("❌ Error submitting feedback: " + error.message);
      setSubmitted(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-white">
      <h1 className="text-4xl font-extrabold mb-8">Payment Successful</h1>

      <p className="mb-10 text-center max-w-md">
        Your payment was successful! Thank you for trusting us.
      </p>

      <section className="w-full max-w-md bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl mb-4 font-semibold">Rate your experience</h2>
        <div className="flex gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={36}
              className={`cursor-pointer ${
                rating >= star ? "text-yellow-400" : "text-gray-500"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <label htmlFor="feedback" className="block mb-2 font-medium">
          Leave feedback (optional)
        </label>
        <textarea
          id="feedback"
          rows={4}
          className="w-full rounded-md bg-gray-700 border border-gray-600 p-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Tell us about your experience..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <Button
          onClick={handleSubmit}
          disabled={submitted}
          className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
        >
          {submitted ? "Submitting..." : "Submit Feedback"}
        </Button>
      </section>
    </main>
  );
}
