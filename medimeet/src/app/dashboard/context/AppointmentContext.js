// app/dashboard/context/AppointmentContext.js
"use client";

import React, { createContext, useState, useEffect } from "react";

export const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("appointments");
    if (saved) setAppointments(JSON.parse(saved));
    else {
      // Initialize with dummy data (optional)
      setAppointments([
        {
          id: "APT-1001",
          patient: "John Doe",
          date: "2025-09-12",
          time: "10:00 AM",
          status: "Confirmed",
          reason: "Routine Checkup",
          type: "In-person",
        },
      ]);
    }
  }, []);

  // Save to localStorage whenever appointments change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appt) => {
    setAppointments((prev) => [...prev, { ...appt, id: `APT-${Date.now()}` }]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
}
