const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/users');

router.post('/signup', UsersControllers.signup_post);

router.post('/login', UsersControllers.login_post);

router.post('/delete', UsersControllers.delete_user_post);

router.post('/logout', UsersControllers.logout_post);


module.exports = router;