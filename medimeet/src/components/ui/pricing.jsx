"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "./card";

const Pricing = () => {
  const router = useRouter();

  const plans = [
    { name: "Basic", price: "₹0", details: "2 consultations/month" },
    { name: "Standard", price: "₹299/month", details: "10 consultations + discounts" },
    { name: "Premium", price: "₹499/month", details: "Unlimited consultations" },
  ];

  const handleSelectPlan = (planName) => {
    router.push(`/payment?plan=${planName.toLowerCase()}`);
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {plans.map((plan, idx) => (
        <Card
          key={idx}
          className="p-6 shadow-lg border border-emerald-500/30 bg-transparent 
                     hover:bg-emerald-900/30 hover:scale-105 hover:shadow-xl 
                     transition-all duration-300 ease-in-out"
        >
          <CardContent>
            <h2 className="text-xl font-bold text-white">{plan.name}</h2>
            <p className="text-gray-300">{plan.details}</p>
            <p className="text-2xl font-semibold mt-4 text-emerald-400">
              {plan.price}
            </p>
            <button
              className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg"
              onClick={() => handleSelectPlan(plan.name)}
            >
              Switch to {plan.name}
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Pricing;
