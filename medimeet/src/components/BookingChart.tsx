// src/components/BookingChart.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BookingChart = () => {
  const data = {
    labels: ["Dr. John", "Dr. Smith", "Dr. Patel"],
    datasets: [
      {
        label: "Number of Bookings",
        data: [12, 19, 7], // Example data
        backgroundColor: "#3B82F6",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BookingChart;
