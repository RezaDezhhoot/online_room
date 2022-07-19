const {Router} = require('express');
const Authentication = require('../app/Http/Controllers/Authentication/AuthenticationController');
const {guest} =  require('../app/Http/Middlewares/Guest');

const router = Router().use(guest);
//
router.get('/',Authentication.index);

// Login user
router.get('/login',Authentication.login);
router.post('/login',Authentication.login_logic);

// Register user
router.get('/register',Authentication.register);
router.post('/register',Authentication.register_logic);

// User login as a guest
router.get('/guest',Authentication.guest);
router.post('/register',Authentication.guest_logic);



module.exports = router;