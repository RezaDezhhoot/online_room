const {Router} = require('express');

const router = new Router();

router.get('/',(req,res,next) => {
    console.log(21);
    res.send('ok');
    next();
});

module.exports = router;