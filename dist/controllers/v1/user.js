const getAllUsers = async (req, res) => {
    throw new Error('somthing went wrong');
    res.json([{ firstName: 'hamid reza', lastName: 'akbari' }]);
};
export { getAllUsers };
