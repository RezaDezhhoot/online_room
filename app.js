const dotenv = require('dotenv');
const passport = require("passport");
const MongoStore = require("connect-mongo");

dotenv.config({path:'./.env'});
const connectDB = require('./config/database');
require('./config/passport');

connectDB().then((r)=>console.log('DB ok'));

const socket =  require('./routes/channels');
const {validKey} = require("./app/Http/Middlewares/Room");
const {Headers} = require("./app/Http/Middlewares/Headers");

const app = socket.app;

app.use(Headers);
app.use(function(err, req, res, next) {res.status(err.status || 500);res.json({ error: err })});
app.use(validKey);
app.use('/v1/', require('./routes/web'));

