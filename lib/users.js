const fs = require('fs');
const users = {};

users.read = (callback) => {

    fs.readFile('./data/data.json', 'utf8', (err, data) => {

        callback(200, data);
        
    });
   

};

module.exports = users;