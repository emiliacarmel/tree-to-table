const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const port = 3000;
const entryController = require('./../controllers/controllers.js')


// express scratch routes
app.get('/', entryController.create, (req, res) => res.send( )); // get
app.post('/', (req, res) => res.send('Post request to the home page.'));

app.listen(port, () => console.log('Listening on port ' + port));



// module.exports = server;