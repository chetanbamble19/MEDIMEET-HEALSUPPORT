"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Earnings",
      backgroundColor: "#10B981",
      data: [1200, 1900, 3000, 2500, 2800],
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function EarningsPage() {
  return (
    <div className="min-h-screen bg-background text-white p-8">
      <h1 className="text-3xl font-bold mb-6">📊 Your Earnings</h1>
      <Bar data={data} options={options} />
    </div>
  );
}
