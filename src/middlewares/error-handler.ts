import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const errorHandler = async (
 err: ErrorRequestHandler,
 req: Request,
 res: Response,
 next: NextFunction
) => {
 res.status(500).json({ succeeded: false, msg: 'internal server error' });
};
