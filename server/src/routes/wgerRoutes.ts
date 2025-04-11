import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/exercises', async (req, res) => {
  const response = await axios.get('https://wger.de/api/v2/exerciseinfo/?language=2&limit=10');
  res.json(response.data);
});

export default router;
