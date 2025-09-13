import { useState } from 'react';

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating || !feedback) {
      alert('Please provide rating and feedback');
      return;
    }

    setSubmitted(true);
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, feedback }),
      });

      if (!res.ok) throw new Error('Failed to save feedback');

      alert('🎉 Thank you for your feedback!');
      setRating(0);
      setFeedback('');
    } catch (error) {
      alert('❌ Error submitting feedback: ' + error.message);
    }
    setSubmitted(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>MediMeet Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Rating:
            <br />
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  cursor: 'pointer',
                  color: star <= rating ? '#f5c518' : '#ccc',
                  fontSize: '2rem',
                }}
                role="button"
                aria-label={`${star} star`}
              >
                ★
              </span>
            ))}
          </label>
        </div>

        <div style={{ marginTop: 20 }}>
          <label>
            Feedback:
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={5}
              style={{ width: '100%', padding: 10, fontSize: 16 }}
              placeholder="Write your feedback here"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={submitted}
          style={{
            marginTop: 20,
            padding: '10px 20px',
            fontSize: 16,
            cursor: submitted ? 'not-allowed' : 'pointer',
          }}
        >
          {submitted ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
}
