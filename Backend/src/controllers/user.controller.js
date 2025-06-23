const userService =  require('../services/user.service')
const getAllUsersPaginated = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const name = req.query.name || '';
        const allUsers = await userService.fetchAllUsersPaginated(page, limit, offset, name);
        res.status(200).json(allUsers);
    }
    catch (error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userService.fetchAllUsers();
        res.status(200).json(allUsers);
    } 
    catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
}
module.exports = {getAllUsersPaginated, getAllUsers}