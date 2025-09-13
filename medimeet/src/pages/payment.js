import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function UpiPaymentPage() {
  const [isPaid, setIsPaid] = useState(false);
  const router = useRouter();
  const { plan } = router.query;

  const upiId = '9372415130@mbk';

  const handleConfirmPayment = () => {
    setIsPaid(true);
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    alert('UPI ID copied to clipboard!');
  };

  const getAmountByPlan = (plan) => {
    switch ((plan || '').toLowerCase()) {
      case 'standard':
        return '₹299';
      case 'premium':
        return '₹499';
      case 'basic':
        return '₹0';
      default:
        return '₹0';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4 py-10">
      {!isPaid ? (
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl max-w-sm w-full text-center">
          <h1 className="text-2xl font-bold mb-4 text-blue-400">UPI Payment</h1>

          <p className="mb-2 text-sm text-gray-300">
            Plan Selected:{' '}
            <span className="text-white font-semibold capitalize">{plan || 'None'}</span>
          </p>
          <p className="text-xl font-bold text-green-400 mb-4">
            {getAmountByPlan(plan)}
          </p>

          <img
            src="/your-upi-qr.png"
            alt="UPI QR Code"
            className="w-64 h-64 mx-auto rounded-md border border-gray-600"
          />

          <div className="mt-6 bg-gray-700 p-3 rounded-lg">
            <p className="text-sm mb-1 text-gray-300">UPI ID:</p>
            <div className="font-semibold text-lg text-green-400 break-all">{upiId}</div>
            <button
              onClick={copyUpiId}
              className="mt-2 text-xs text-blue-300 hover:text-blue-500 underline"
            >
              Copy UPI ID
            </button>
          </div>

          <button
            onClick={handleConfirmPayment}
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-200"
          >
            Proceed to Payment
          </button>

          <p className="text-xs text-gray-500 mt-3">
            Complete the payment using any UPI app and then click "Proceed to Payment".
          </p>
        </div>
      ) : (
        <div className="text-center bg-gray-800 p-8 rounded-xl shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold text-green-400 mb-2">Payment Successful! 🎉</h2>
          <p className="text-gray-300 mb-1">Your subscription to</p>
          <p className="text-white font-semibold capitalize">{plan} Plan</p>
          <p className="text-gray-400 mt-2">Thank you for your payment!</p>
        </div>
      )}
    </div>
  );
}
