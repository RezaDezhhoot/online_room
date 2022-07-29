const socket = require('../app/Http/Sockets/Start') ;
const Webinar = require('../app/Http/Sockets/Webinar');

socket.run(process.env.PORT || 3000);
socket.use('/class',Webinar.Webinar);

module.exports = socket;