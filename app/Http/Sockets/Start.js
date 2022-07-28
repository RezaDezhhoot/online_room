const http = require("http");
const {Server} = require('socket.io');
const express = require('express');

class Start {
    static run(PORT) {
        this.app = express();
        const server = http.createServer(this.app);
        this.app.use(express.urlencoded({extended: false}));

        server.listen(PORT , () => {
            console.log(`Server is running on port ${PORT}`);
        });

        this.IO = new Server(server);
    }

    static use(NameSpace , module) {
        module(this.IO.of(NameSpace));
    }
}

module.exports = Start;