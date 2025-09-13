// pages/legacy.tsx
import { useRouter } from 'next/router';

const plans = [
  { name: "Basic", price: "₹0", features: "2 consultations/month" },
  { name: "Standard", price: "₹299/month", features: "10 consultations + discounts" },
  { name: "Premium", price: "₹499/month", features: "Unlimited consultations" },
];

export default function LegacyHome() {
  const router = useRouter();

  const handleSelectPlan = (planName: string) => {
    router.push(`/plans/${planName.toLowerCase()}`);
  };

  return (
    <div style={styles.container}>
      <h1>Consultation Packages</h1>
      <p>Choose the perfect consultation package that fits your healthcare needs</p>

      <div style={styles.cards}>
        {plans.map((plan) => (
          <div style={styles.card} key={plan.name}>
            <h2>{plan.name}</h2>
            <p>{plan.features}</p>
            <h3>{plan.price}</h3>
            <button style={styles.button} onClick={() => handleSelectPlan(plan.name)}>
              Switch to {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center' as const,
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    padding: '50px',
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginTop: '40px',
    flexWrap: 'wrap' as const,
  },
  card: {
    background: '#111',
    padding: '30px',
    border: '1px solid #00b386',
    borderRadius: '16px',
    width: '300px',
    transition: 'transform 0.2s ease',
  },
  button: {
    marginTop: '20px',
    background: '#00b386',
    color: 'white',
    padding: '12px',
    width: '100%',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
