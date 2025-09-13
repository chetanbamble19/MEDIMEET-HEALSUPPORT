import { useRouter } from 'next/router';

export default function SubscriptionPage() {
  const router = useRouter();

  const redirectToPayment = (plan) => {
    router.push(`/payment?plan=${plan}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8">Choose a Plan</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Basic Plan */}
        <div className="bg-gray-800 rounded-lg p-6 border border-green-600 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Basic</h2>
          <p className="text-gray-400 mb-4">2 consultations/month</p>
          <p className="text-2xl font-bold text-green-400 mb-4">₹0</p>
          <button
            className="w-full bg-green-600 py-2 rounded hover:bg-green-700"
            onClick={() => redirectToPayment('Basic')}
          >
            Switch to Basic
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-gray-800 rounded-lg p-6 border border-green-600 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Standard</h2>
          <p className="text-gray-400 mb-4">10 consultations + discounts</p>
          <p className="text-2xl font-bold text-green-400 mb-4">₹299/month</p>
          <button
            className="w-full bg-green-600 py-2 rounded hover:bg-green-700"
            onClick={() => redirectToPayment('Standard')}
          >
            Switch to Standard
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-gray-800 rounded-lg p-6 border border-green-600 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Premium</h2>
          <p className="text-gray-400 mb-4">Unlimited consultations</p>
          <p className="text-2xl font-bold text-green-400 mb-4">₹499/month</p>
          <button
            className="w-full bg-green-600 py-2 rounded hover:bg-green-700"
            onClick={() => redirectToPayment('Premium')}
          >
            Switch to Premium
          </button>
        </div>
      </div>
    </div>
  );
}
