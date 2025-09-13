"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Patients Visited",
      backgroundColor: "#3B82F6", // Blue
      data: [15, 25, 22, 18, 30],
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

export default function PatientsPage() {
  return (
    <div className="min-h-screen bg-background text-white p-8">
      <h1 className="text-3xl font-bold mb-6">👥 My Patients</h1>
      <Bar data={data} options={options} />
    </div>
  );
}
