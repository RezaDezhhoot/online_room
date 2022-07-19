const {Router} = require('express');

const {validKey} = require('../app/Http/Middlewares/Room');

const router = Router().use(validKey);

