const userProvider =  require('../providers/user.provider');

const fetchAllUsersPaginated = async (page, limit, offset, name) => {
    try {
    const {count, rows} = await userProvider.getUsersFromDB(limit, offset,name);
    
    const responseToSend = rows.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        last_login: user.last_login,
        created_at: user.created_at
    }));

    const totalPages = Math.ceil(count / limit);

    return {
      users: responseToSend,
      currentPage: page,
      totalPages,
      totalUsers: count
    };

    } catch (error){
        throw new Error (`Error buscando usuarios: ${error.message}`);
    }
}

const fetchAllUsers = async () => {
    try {
        const users = await userProvider.getAllUsersFromDB();
        return users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            last_login: user.last_login,
            created_at: user.created_at
        }));
    } catch (error) {
        throw new Error(`Error buscando usuarios: ${error.message}`);
    }
}

module.exports = {fetchAllUsersPaginated, fetchAllUsers}