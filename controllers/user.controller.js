import { saveHistory } from '../services/history.service.js';
import { createUser, getUsers, loginUser } from '../services/user.service.js';
import { successResponse, errorResponse } from '../utils/response.util.js';

export const createUserController = async (req, res) => {
    try {
        const user = await createUser(req.body);
        return successResponse(res, 'User created successfully', user);
    } catch (err) {
        return errorResponse(res, err.message);
    }
};
export const loginController = async (req, res) => {
    try {
        const user = await loginUser(req.body);
        return successResponse(res, 'User created successfully', user);
    } catch (err) {
        return errorResponse(res, err.message);
    }
};

