const express = require('express');
const path = require('path');

// Server
const expresServer = express();
expresServer.use(express.static(path.resolve(__dirname, '../client')));


expresServer.get('/', (req, res) => {

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(path.resolve(__dirname, '../client/index.html'));

})

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