export const errorHandler = async (err, req, res, next) => {
    res.status(500).json({ succeeded: false, msg: 'internal server error' });
};
