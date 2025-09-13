// src/components/PricingTable.jsx

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";


const pricingPlans = [
  {
    title: "Basic",
    price: "$10",
    description: "1 consultation per month",
  },
  {
    title: "Standard",
    price: "$25",
    description: "3 consultations per month",
  },
  {
    title: "Premium",
    price: "$50",
    description: "Unlimited consultations",
  },
];

export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pricingPlans.map((plan, index) => (
        <Card key={index} className="bg-card border-emerald-900/20 text-white">
          <CardHeader>
            <CardTitle>{plan.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold mb-2">{plan.price}</p>
            <p className="text-muted-foreground">{plan.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
