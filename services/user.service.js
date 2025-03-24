import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const createUser = async (userData) => {
    const {username, email, password } = userData;

    const hashedPassword = await bcrypt.hash(password, 10);
    const data = {
        name: username,
        email,
        password: hashedPassword
    };
    return await User.create(data);

};
export const loginUser = async (userData) => {
    const { email, password } = userData;
    if (!email || !password) {
        throw new Error('All fields are required');
    }
    const user = await User.findOne({ $or: [{ username: email }, { email: email }] });
    if (!user) {
        throw new Error('Invalid username or email');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid password');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
}


export const getUsers = async () => {
    return await User.find();
};
