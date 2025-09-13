"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Reports Processed",
      backgroundColor: "#F59E0B", // Amber
      data: [10, 12, 18, 15, 20],
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

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background text-white p-8">
      <h1 className="text-3xl font-bold mb-6">🧾 Patient Reports</h1>
      <Bar data={data} options={options} />
    </div>
  );
}
