import { Request, Response } from 'express';

const getAllUsers = async (req: Request, res: Response) => {
 throw new Error('somthing went wrong');
 res.json([{ firstName: 'hamid reza', lastName: 'akbari' }]);
};

export { getAllUsers };
