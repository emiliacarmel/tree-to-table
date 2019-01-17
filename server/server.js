const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const port = 3000;
const entryController = require('./../controllers/controllers.js')
const path = require('path');
const bodyParser = require('body-parser')


mongoose.connect("mongodb://emiliacarmel:hellocode1@ds157654.mlab.com:57654/emilia-codesmith", { useNewUrlParser: true }, () => {
  console.log('Connected to MongoDB')
});


// express scratch routes
app.use(express.static(path.join(__dirname, '.././')));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile('/index.html')); // gathers list items to display on homepage
app.post('/accept', entryController.create, (req, res) => res.send('Entry created.')); // sends form information to db
app.get('/getList', entryController.getList, (req, res) => {
  console.log('hit')
  res.status(200).json(JSON.stringify(res.locals.doc));
});

app.use((err, req, res, next) => {
  console.error(`You've struck a nerve: ${err}`);
  res.status(400).send(`You've struck a nerve: ${err}`)
})

app.listen(port, () => console.log('Listening on port ' + port));



// module.exports = server;