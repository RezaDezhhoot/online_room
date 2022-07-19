const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const MongoStore = require("connect-mongo");

dotenv.config({path:'./.env'});
const connectDB = require('./config/database');
require('./config/passport');

connectDB().then((r)=>console.log('DB ok'));

const socket =  require('./routes/channels');

const app = socket.app;

app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: {maxAge:null},
    resave: false,
    saveUninitialized: false,
    unset: "destroy",
    store: MongoStore.create({mongoUrl:process.env.mongo_uri})
}));
app.use(flash());
app.use(passport.initialize({}));
app.use(passport.session({}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', require('./routes/web'));
app.use('/webinar/:room', require('./routes/webinar'));

