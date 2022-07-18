const path = require('path');
const express_layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const MongoStore = require("connect-mongo");

dotenv.config({path:'./.env'});

const socket =  require('./routes/channels');

const app = socket.app;

app.use(express_layouts);
app.set('view engine','ejs');
// app.set('layout','./layouts/site.ejs');
// app.set('views','resources/views');

app.use(express.static(path.join(__dirname,'public')));

app.use('/', require('./routes/web'));
app.use('/webinar/:room', require('./routes/webinar'));

