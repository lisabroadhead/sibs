const UsersController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/users', UsersController.allUsers);
    app.get('/api/user/:id', UsersController.singleUser);
    app.get('/api/login', UsersController.loginUser);
    app.post('/api/create/user', UsersController.createUser);
    app.delete('/api/delete/user/:id', UsersController.deleteUser);
    app.patch('/api/update/user/:id', UsersController.editUser)
}