const express = require("express");
const sequelize = require("./config/database");
const passport = require('passport');
const loginRoutes = require('./routes/auth.routes.js');
const userRoutes =  require('./routes/user.routes.js');
const taskRoutes =  require('./routes/tasks.routes.js');
const weatherRoutes = require('./routes/weather.routes.js')
const cors = require("cors");
require('dotenv').config();


require('./config/passport')(passport);

const app =  express();
app.use(express.json())
app.use(passport.initialize());



const startApp = async () => {
    try{
        await sequelize.authenticate();
        console.log("Conexión exitosa.");
        app.get("/", (req, res) => {
            res.send("Hello World!")
        });

        
        app.use(cors());
        app.use(loginRoutes);
        app.use(userRoutes);
        app.use(taskRoutes);
        app.use(weatherRoutes);
        app.listen(process.env.PORT || 3000, ()=> {
            console.log(`El servidor esta escuchando en el puerto ${process.env.PORT}`)
        });
    } catch(error){
        console.log(error);
    }
}

module.exports = startApp;