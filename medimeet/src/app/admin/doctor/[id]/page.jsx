'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const DoctorDetailsPage = ({ params }) => {
  const router = useRouter();
  const { id } = params; // ✅ Correct in Client Component

  const handleBack = () => {
    router.push('/admin');
  };

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#111',
      color: '#fff',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h2 style={{ fontSize: '2rem' }}>Doctor Details</h2>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'orange' }}>
        You are in pending status
      </p>
      <button
        onClick={handleBack}
        style={{
          marginTop: '2rem',
          backgroundColor: '#0ff',
          color: '#000',
          border: 'none',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        ← Back to Admin
      </button>
    </div>
  );
};

export default DoctorDetailsPage;
