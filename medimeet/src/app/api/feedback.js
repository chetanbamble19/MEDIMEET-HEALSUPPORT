import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'db.json');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { rating, feedback } = req.body;

      if (!rating || !feedback) {
        return res.status(400).json({ message: 'Rating and feedback required' });
      }

      // Read existing data or initialize
      let data = { feedbacks: [] };
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        data = JSON.parse(fileContents);
      }

      // Add new feedback
      data.feedbacks.push({
        id: Date.now(),
        rating,
        feedback,
      });

      // Write back to db.json
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      return res.status(200).json({ message: 'Feedback saved successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      if (!fs.existsSync(filePath)) {
        return res.status(200).json({ feedbacks: [] });
      }
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(fileContents);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
