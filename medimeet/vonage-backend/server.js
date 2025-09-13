require('dotenv').config();
const express = require('express');
const OpenTok = require('opentok');

const app = express();

console.log("Loaded API Key:", process.env.VONAGE_API_KEY);
console.log("Loaded API Secret:", process.env.VONAGE_API_SECRET);


if (!apiKey || !apiSecret) {
  console.error('ERROR: Missing VONAGE_API_KEY or VONAGE_API_SECRET in .env');
  process.exit(1);
}

const opentok = new OpenTok(apiKey, apiSecret);

app.get('/api/session', (req, res) => {
  opentok.createSession({ mediaMode: 'routed' }, (err, session) => {
    if (err) {
      console.error('Error creating session:', err);
      return res.status(500).json({ error: 'Failed to create session' });
    }

    const sessionId = session.sessionId;
    const token = opentok.generateToken(sessionId);

    res.json({
      apiKey,
      sessionId,
      token,
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
