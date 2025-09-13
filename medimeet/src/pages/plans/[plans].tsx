// pages/plans/[plan].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const plansInfo: Record<string, { name: string; price: string; description: string }> = {
  basic: {
    name: 'Basic',
    price: '₹0',
    description:
      'Enjoy 2 free consultations per month. Ideal for light users. Follows XYZ policies. No hidden charges. Includes limited mediclaim support.',
  },
  standard: {
    name: 'Standard',
    price: '₹299/month',
    description:
      'Get 10 consultations monthly plus exclusive discounts. Covered under standard XYZ health policies. Offers partial mediclaim support. Great for families.',
  },
  premium: {
    name: 'Premium',
    price: '₹499/month',
    description:
      'Unlimited consultations with all features unlocked. Full access to premium support. Covered under advanced XYZ policies. Best suited for corporate and critical care. Full mediclaim included.',
  },
};

export default function PlanPage() {
  const router = useRouter();
  const { plan } = router.query;
  const [planData, setPlanData] = useState<{ name: string; price: string; description: string }>();

  useEffect(() => {
    if (typeof plan === 'string') {
      const lowerCasePlan = plan.toLowerCase();
      if (plansInfo[lowerCasePlan]) {
        setPlanData(plansInfo[lowerCasePlan]);
      } else {
        setPlanData(undefined);
      }
    }
  }, [plan]);

  if (!planData) {
    return (
      <div style={styles.container}>
        <h1>Plan not found</h1>
        <p>Please go back and select a valid plan.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>{planData.name} Package</h1>
      <h2>{planData.price}</h2>
      <p style={styles.description}>{planData.description}</p>

      <div style={styles.ad}>
        <h3>🩺 Health Mediclaim Add-on</h3>
        <p>
          Get covered with our partnered health insurance plans. Quick approval. Minimal paperwork.
        </p>
      </div>

      <button style={styles.button} onClick={() => alert('Integrate Razorpay here')}>
        Proceed to Payment
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    textAlign: 'center' as const,
  },
  description: {
    maxWidth: '600px',
    margin: '20px auto',
    fontSize: '18px',
    lineHeight: '1.6',
  },
  ad: {
    backgroundColor: '#111',
    padding: '20px',
    margin: '30px auto',
    borderRadius: '8px',
    maxWidth: '500px',
    border: '1px solid #00b386',
  },
  button: {
    marginTop: '20px',
    background: '#00b386',
    color: '#fff',
    padding: '14px 30px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
