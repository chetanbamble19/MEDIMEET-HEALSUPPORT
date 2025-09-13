// app/dashboard/profile/page.js
export default function ProfilePage() {
  return (
    <div>
      <h1 className="title-xl mb-6">⚙️ Profile Settings</h1>
      <div className="glass-card space-y-6">
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            className="input"
            type="text"
            defaultValue="Dr. Alexander Gray"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            className="input"
            type="email"
            defaultValue="alex.gray@medicare.com"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input
            className="input"
            type="text"
            defaultValue="+1 987 654 3210"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Specialization</label>
          <input
            className="input"
            type="text"
            defaultValue="Cardiology"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Bio</label>
          <textarea
            className="input"
            rows={4}
            defaultValue="Experienced cardiologist with a passion for patient-first care and innovation in diagnostics."
          />
        </div>

        <button className="btn mt-4">💾 Save Changes</button>
      </div>
    </div>
  );
}
