'use client';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {
  const router = useRouter();

  const doctors = [
    {
      id: '1',
      name: 'Piyush Agarwal',
      gender: 'male',
      specialization: 'Dermatology',
      experience: '3 years',
      status: 'Pending',
    },
    {
      id: '2',
      name: 'Nirmay Kasar',
      gender: 'male',
      specialization: 'Orthopedics',
      experience: '5 years',
      status: 'Pending',
    },
    {
      id: '3',
      name: 'Dr. Priya Mehta',
      gender: 'female',
      specialization: 'Cardiology',
      experience: '7 years',
      status: 'Pending',
    },
    {
      id: '4',
      name: 'Dr. Anjali Rao',
      gender: 'female',
      specialization: 'Pediatrics',
      experience: '4 years',
      status: 'Pending',
    },
    {
      id: '5',
      name: 'Dr. Riya Sharma',
      gender: 'female',
      specialization: 'Gynecology',
      experience: '6 years',
      status: 'Pending',
    },
    {
      id: '6',
      name: 'Dr. Arjun Patel',
      gender: 'male',
      specialization: 'Neurology',
      experience: '8 years',
      status: 'Pending',
    },
  ];

  // Navigate to doctor detail page by id
  const handleViewDetails = (id: string) => {
    router.push(`/admin/doctor/${id}`);
  };

  // Navigate back to home
  const handleBackToHome = () => {
    router.push('/');
  };

  // Profile icon based on gender
  const getProfileIcon = (gender: string) => {
    return gender === 'male'
      ? 'https://cdn-icons-png.flaticon.com/512/236/236831.png'
      : 'https://cdn-icons-png.flaticon.com/512/236/236832.png';
  };

  return (
    <div
      style={{
        padding: '2rem',
        background: '#111',
        color: '#fff',
        fontFamily: 'sans-serif',
        minHeight: '100vh',
      }}
    >
      <button
        onClick={handleBackToHome}
        style={{
          color: '#0ff',
          marginBottom: '1rem',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
      >
        ← Back to Home
      </button>

      <h1 style={{ fontSize: '2rem', color: '#0ff' }}>🛡️ Admin Settings</h1>

      <div style={{ marginTop: '2rem' }}>
        <h2>Pending Doctor Verifications</h2>
        <p>Review and approve doctor applications</p>

        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            style={{
              background: '#1e1e1e',
              padding: '1rem',
              marginTop: '1rem',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={getProfileIcon(doctor.gender)}
                alt={`${doctor.gender} doctor`}
                width={50}
                height={50}
                style={{ borderRadius: '50%', marginRight: '1rem' }}
              />
              <div>
                <h3>{doctor.name}</h3>
                <p>
                  {doctor.specialization} • {doctor.experience} experience
                </p>
              </div>
            </div>
            <div>
              <span
                style={{
                  background: 'orange',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  marginRight: '1rem',
                }}
              >
                {doctor.status}
              </span>
              <button
                onClick={() => handleViewDetails(doctor.id)}
                style={{
                  background: '#0ff',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#000',
                  fontWeight: 'bold',
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
