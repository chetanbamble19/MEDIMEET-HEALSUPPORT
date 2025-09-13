// app/dashboard/appointments/page.js
export default function AppointmentsPage() {
  const appointments = [
    {
      id: 'APT-1001',
      patient: 'John Doe',
      date: '2025-09-12',
      time: '10:00 AM',
      status: 'Confirmed',
      reason: 'Routine Checkup',
      type: 'In-person',
    },
    {
      id: 'APT-1002',
      patient: 'Alicia Gomez',
      date: '2025-09-12',
      time: '11:30 AM',
      status: 'Pending',
      reason: 'Follow-up',
      type: 'Online',
    },
    {
      id: 'APT-1003',
      patient: 'Sami Yusuf',
      date: '2025-09-13',
      time: '01:00 PM',
      status: 'Completed',
      reason: 'Heart Palpitation',
      type: 'In-person',
    },
    {
      id: 'APT-1004',
      patient: 'Emma Watson',
      date: '2025-09-14',
      time: '02:30 PM',
      status: 'Cancelled',
      reason: 'Surgery Consultation',
      type: 'Online',
    },
  ];

  return (
    <div>
      <h1 className="title-xl mb-6">📅 Appointments</h1>
      <div className="glass-card overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="text-sm text-accent border-b border-muted-foreground/20">
            <tr>
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">Patient</th>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Time</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Reason</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="hover:bg-muted/5 border-b border-border">
                <td className="p-2">{a.id}</td>
                <td className="p-2">{a.patient}</td>
                <td className="p-2">{a.date}</td>
                <td className="p-2">{a.time}</td>
                <td className="p-2">{a.type}</td>
                <td className="p-2">{a.reason}</td>
                <td className="p-2">
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    a.status === 'Confirmed'
                      ? 'bg-green-600 text-white'
                      : a.status === 'Pending'
                      ? 'bg-yellow-500 text-black'
                      : a.status === 'Cancelled'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-500 text-white'
                  }`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
