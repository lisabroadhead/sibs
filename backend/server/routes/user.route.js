const UsersController = require('../controllers/user.controller');
// const passport = require('passport');

module.exports = app => {
    app.get('/api/users', UsersController.allUsers);
    app.get('/api/user/:id', UsersController.singleUser);
    app.post('/api/login', UsersController.loginUser);
    app.post('/api/email', UsersController.EmailUser);
    app.post('/api/create/user', UsersController.createUser);
    app.delete('/api/delete/user/:id', UsersController.deleteUser);
    app.patch('/api/update/user/:id', UsersController.editUser)
    app.patch('/api/update/user/children/:id', UsersController.AddChildUser)
    app.patch('/api/update/user/delete/kid/:id', UsersController.DeleteChildUser)
    app.patch('/api/update/kid/:id', UsersController.EditChildUser)
    app.patch('/api/update/user/spouse/:id', UsersController.SpouseLinkUser)
    app.patch('/api/update/user/siblings/:id', UsersController.SiblingLinkUser)
    app.patch('/api/update/user/parents/:id', UsersController.ParentsLinkUser)
    app.patch('/api/update/user/stepParents/:id', UsersController.StepParentsLinkUser)
    app.patch('/api/update/user/kids/:id', UsersController.KidsLinkUser)
    app.patch('/api/update/user/stepKids/:id', UsersController.StepKidsLinkUser)
    app.patch('/api/update/user/stepSibling/:id', UsersController.StepSiblingLinkUser)
}

