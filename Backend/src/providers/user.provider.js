const {User} = require("../models");
const { Op } = require('sequelize');



const getUserByEmailFromDB = async (email) => {
    return await User.findOne({where: {email: email}});
}

const createUserInDB = async (userData) => {
    return await User.create(userData);
}
const getAllUsersFromDB = async () => {
    return await User.findAll({
        attributes: ['id','name', 'email', 'last_login', 'created_at']
    });
};

const getUsersFromDB = async (limit, offset, name) => {
    const where = {};

    if (name) {
        where.name = {
            [Op.iLike]: `%${name}%` 
        };
    }

    return await User.findAndCountAll({
        where, 
        limit,
        offset,
        order: [['id', 'ASC']],
        attributes: ['id','name', 'email', 'last_login', 'created_at']
    });
}; 


module.exports = {getUserByEmailFromDB, createUserInDB, getUsersFromDB, getAllUsersFromDB};