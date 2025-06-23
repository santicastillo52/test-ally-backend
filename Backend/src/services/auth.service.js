
const bcrypt = require("bcrypt");
const jwt = require("../providers/jwt.provider");
const userProvider = require("../providers/user.provider");

const loginUser = async (user, timezoneOffset) => {
  const now = new Date();
  const localDate = new Date(now.getTime() - timezoneOffset * 60 * 1000);
  await user.update({ last_login: localDate  });
  const token = jwt.generateToken({
    id: user.id,
    name: user.name,
    last_login: localDate
  });

  return {
    message: "Autenticación exitosa",
    token,
    user: {
      id: user.id,
      name: user.name,
    },
  };
};

const createUser = async (user) => {
  const existingUser = await userProvider.getUserByEmailFromDB(user.email);
  if (existingUser) throw new Error("El usuario ya existe");

  const hashedPassword = await bcrypt.hash(user.password, 10);

  const newUser = await userProvider.createUserInDB({
    name: user.name,
    email: user.email,
    password_hash: hashedPassword,
    last_login: new Date()
  });
  const token = jwt.generateToken({
    id: newUser.id,
    email: newUser.email,
    name: newUser.name
  });
  return {
    message: "Usuario registrado correctamente",
    token,
    user: {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name
    },
  };
};

module.exports = { loginUser, createUser };
