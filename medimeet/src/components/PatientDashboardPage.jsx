"use client";

export default function PatientDashboardPage({ user }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user.name}!</h2>
      <p className="text-muted-foreground">This is the patient dashboard. More features coming soon.</p>
    </div>
  );
}
