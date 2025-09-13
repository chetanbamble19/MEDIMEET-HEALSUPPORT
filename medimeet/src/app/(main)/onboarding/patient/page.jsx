export default function PatientOnboarding() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-2xl bg-zinc-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Complete Your Patient Profile</h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm mb-2">Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm mb-2">Gender</label>
            <select className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Medical History */}
          <div>
            <label className="block text-sm mb-2">Medical History</label>
            <textarea
              rows="4"
              placeholder="e.g. Diabetes, Hypertension..."
              className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
            />
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
