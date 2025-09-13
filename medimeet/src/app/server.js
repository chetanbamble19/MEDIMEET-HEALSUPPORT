const express = require("express");
const cors = require("cors");
const OpenTok = require("opentok");

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = "YOUR_VONAGE_API_KEY";
const apiSecret = "YOUR_VONAGE_API_SECRET";

const opentok = new OpenTok(apiKey, apiSecret);

let sessionId = null;

// Create a session only once and reuse for simplicity
opentok.createSession({ mediaMode: "routed" }, (err, session) => {
  if (err) {
    console.log("Error creating session:", err);
    return;
  }
  sessionId = session.sessionId;
});

app.get("/api/session", (req, res) => {
  if (!sessionId) {
    return res.status(500).send("Session not ready");
  }
  const token = opentok.generateToken(sessionId, {
    role: "publisher",
    expireTime: new Date().getTime() / 1000 + 3600, // 1 hour
  });
  res.json({ apiKey, sessionId, token });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
