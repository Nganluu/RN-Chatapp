const userController = require('../controllers/userController');
const chatController = require('../controllers/chatController')
var authenticate = require('../middleware/authenticate');

module.exports = (app) =>{
    //user
    //register new account
    app.post('/api/user/register', userController.register);
    //login 
    app.post('/api/user/login', userController.login);
    //get user
    app.get('/api/user/:id', userController.getUser)
    //get chat list
    app.get('/api/getChatList', authenticate('user'), userController.getChatList);
    //get message
    app.get('/api/getMessage', authenticate('user'), chatController.getMessage)
}