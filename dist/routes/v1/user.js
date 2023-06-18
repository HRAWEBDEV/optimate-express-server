import express from 'express';
import { getAllUsers } from '../../controllers/v1/user.js';
const router = express.Router();
router.route('/').get(getAllUsers);
export { router };
