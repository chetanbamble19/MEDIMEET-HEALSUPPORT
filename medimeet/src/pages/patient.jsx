// pages/patients.jsx
import DashboardLayout from '../components/DashboardLayout';

export default function Patients() {
  // Example patients data
  const patients = [
    { id: 1, name: 'Pebbles Flintstone', age: '10 yrs, 1 mo', sex: 'F', dob: '04/03/04' },
    { id: 2, name: 'Bamm-Bamm Rubble', age: '8 yrs', sex: 'M', dob: '10/11/06' },
  ];

  return (
    <DashboardLayout>
      <h1>My Patients</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id} style={{ marginBottom: '10px' }}>
            <strong>{patient.name}</strong> - {patient.age} - {patient.sex} - DOB: {patient.dob}
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
}
