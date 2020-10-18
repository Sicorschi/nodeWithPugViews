const express = require('express');
const sequelize = require('./database/db');
const { database }  = require('./config');
const postRoutes = require('./routes/post.routes');
const usersRoutes = require('./routes/users.routes');
const rolesRoutes = require('./routes/roles.routes');
require('./database/models/associations');

// Init the express() object:
const app = express();

// Set app middlewares and settings:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;

// Routes:
app.use('/api/post', postRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/roles', rolesRoutes);


// Init the server:
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    sequelize.sync({ force: true }).then(() => {
        console.log(`Connected to the database ${database.database}`);
    }).catch((err) => {
        console.log(err.message);
    })
});
