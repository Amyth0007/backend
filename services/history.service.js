import History from '../models/history.model.js';
import User from '../models/user.model.js';
export const saveHistory = async ({ userId, input, output }) => {
  const history = new History({ userId, input, output });
  return await history.save();
};

export const getUserHistory = async (userId) => {
  return await History.find({ userId }).sort({ createdAt: -1 });
};
export const getUserData = async (userId) => {
  return await User.findById( userId );
};
