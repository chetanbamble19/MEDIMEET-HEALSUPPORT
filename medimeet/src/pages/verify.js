import { useEffect } from "react";

export default function VerifyPage() {
  useEffect(() => {
    // Optional: Auto-open Jitsi iframe if needed
  }, []);

  const handleCall = () => {
    window.location.href = "tel:9372415130";
  };

  const handleVideoCall = () => {
    const roomName = `consult_room_${Date.now()}`;
    window.open(`https://meet.jit.si/${roomName}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center p-6" style={{ backgroundImage: "url('/verify-bg.jpg')" }}>
      <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-xl w-full max-w-md text-center">
        <img src="/verify-icon.png" alt="Verification" className="w-24 mx-auto mb-4" />

        <h2 className="text-2xl font-bold mb-2">Phone Verification</h2>
        <p className="mb-6">Please verify your phone number via call or video consultation.</p>

        <button onClick={handleCall} className="w-full bg-green-600 py-2 rounded mb-3 hover:bg-green-700">
          📞 Call +91 9372415130
        </button>
        <button onClick={handleVideoCall} className="w-full bg-purple-600 py-2 rounded hover:bg-purple-700">
          🎥 Start Video Call
        </button>
      </div>
    </div>
  );
}
