const authService = require('../services/auth.service');
const passport = require('passport');

const login = (req, res, next) => {
  passport.authenticate('local', { session: false }, async (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info?.message || 'Credenciales inválidas' });

    try {
      const timezoneOffset = req.body.timezoneOffset || 0;
      const result = await authService.loginUser(user, timezoneOffset);  
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  })(req, res, next);
};

const register = async (req, res) => {
  try {
    const user =  req.body;
    const userRegistered = await authService.createUser(user);
    res.status(201).json(userRegistered);
  }
  catch(error){
      console.error(error);
      res.status(500).json({message: error.message})
  }
}

module.exports = { login, register };
