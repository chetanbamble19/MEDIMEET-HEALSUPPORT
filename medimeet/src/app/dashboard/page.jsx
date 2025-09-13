export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Widget 1 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800">Today's Appointments</h3>
        <p className="text-4xl font-bold text-emerald-600 mt-2">8</p>
        <p className="text-sm text-gray-500 mt-1">3 new patients</p>
      </div>

      {/* Widget 2 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800">Total Earnings</h3>
        <p className="text-4xl font-bold text-emerald-600 mt-2">₹18,750</p>
        <p className="text-sm text-gray-500 mt-1">This Month</p>
      </div>

      {/* Widget 3 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800">Patient Satisfaction</h3>
        <p className="text-4xl font-bold text-emerald-600 mt-2">92%</p>
        <p className="text-sm text-gray-500 mt-1">Based on feedback</p>
      </div>

      {/* Widget 4 */}
      <div className="bg-white p-6 rounded-lg shadow col-span-1 md:col-span-2">
        <h3 className="text-xl font-semibold text-gray-800">Upcoming Appointments</h3>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-700">
            <strong>10:00 AM</strong> – Rahul Sharma (Follow-up)
          </li>
          <li className="text-gray-700">
            <strong>11:30 AM</strong> – Anita Patel (New patient)
          </li>
          <li className="text-gray-700">
            <strong>2:00 PM</strong> – Ajay Verma (Consultation)
          </li>
        </ul>
      </div>
    </div>
  );
}
