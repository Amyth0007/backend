import { saveHistory, getUserHistory, getUserData } from '../services/history.service.js';

export const createHistory = async (req, res) => {
  const { input, output } = req.body;
  try {
    await saveHistory({ userId: req.userId, input, output });
    res.status(201).json({ message: 'History saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving history', details: err.message });
  }
};
export const testing = async (req, res) => {

  try {
   
    res.status(201).json({ message: 'Project is live' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving history', details: err.message });
  }
};

export const fetchUserHistory = async (req, res) => {
  try {
    const history = await getUserHistory(req.userId);
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching history', details: err.message });
  }
};
export const fetchUserData = async (req, res) => {
  try {
    const history = await getUserData(req.userId);
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching history', details: err.message });
  }
};
