import Link from 'next/link';
import './dashboard.css'; // You can style this or remove if using Tailwind

export const metadata = {
  title: 'MediMeet Doctor Dashboard',
  description: 'Doctor Panel - View Appointments, Earnings, Profile',
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-900 text-white flex flex-col px-4 py-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">MediMeet</h2>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li><Link href="/dashboard" className="hover:text-emerald-300">🏠 Dashboard Home</Link></li>
            <li><Link href="/dashboard/appointments" className="hover:text-emerald-300">📅 Appointments</Link></li>
            <li><Link href="/dashboard/earnings" className="hover:text-emerald-300">💰 Earnings</Link></li>
            <li><Link href="/dashboard/patients" className="hover:text-emerald-300">🧑‍🤝‍🧑 My Patients</Link></li>
            <li><Link href="/dashboard/reports" className="hover:text-emerald-300">📊 Reports</Link></li>
            <li><Link href="/dashboard/profile" className="hover:text-emerald-300">⚙️ Profile Settings</Link></li>
          </ul>
        </nav>
        <footer className="mt-10 text-sm text-emerald-300">
          © 2025 MediMeet Healthcare
        </footer>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Top bar */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Doctor Dashboard</h1>
          <p className="text-emerald-600 font-medium">
            “Your Health, Our Priority” – Welcome to MediMeet!
          </p>
        </div>

        {/* Dynamic content from page */}
        {children}
      </main>
    </div>
  );
}
