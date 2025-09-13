export default function DoctorVerificationCard({ doctor }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md border border-gray-600">
      <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
      <p className="text-sm text-gray-300">
        {doctor.specialty} • {doctor.experience} years experience
      </p>
      <button className="mt-3 px-4 py-1 bg-yellow-500 text-black rounded">
        Pending
      </button>
    </div>
  );
}
