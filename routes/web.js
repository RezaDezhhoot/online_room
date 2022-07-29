const {Router} = require('express');
const Authentication = require('../app/Http/Controllers/Authentication/AuthenticationController');
const {guest} =  require('../app/Http/Middlewares/Guest');
const {validKey} =  require('../app/Http/Middlewares/Room');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = Router().use(guest).use(validKey);

// Login user
router.get('/login',Authentication.login);
router.post('/login', Authentication.login_logic);

// Register user
router.get('/register',Authentication.register);
router.post('/register', Authentication.register_logic);

// User login as a guest
router.get('/guest',Authentication.guest);
router.post('/guest',Authentication.guest_logic);

module.exports = router;