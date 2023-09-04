const express = require('express');
const users = require('./users');
const path = require('path');

// Server
const expresServer = express();
expresServer.use(express.static(path.resolve(__dirname, '../client')));
expresServer.use(express.json());

// Client Front Page
expresServer.get('/', (req, res) => {

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(path.resolve(__dirname, '../client/index.html'));

})

// Server Endpoints (READ)
expresServer.get('/users', (req, res) => {

    users.read((code, returnObj) => {

        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.status(code);
        res.send(returnObj);
    });
    
});

// Server Endpoints (Create)

// Server Endpoints (Update)

// Server Endpoints (Delete)


// Server Module.
const server = {};

server.run = () => {

    const port = 3000;
    console.log('Run Server')

    expresServer.listen(port, () => {

        console.log(`Serveren lytter på port http://localhost:${port}`)

    });

};

module.exports = server;