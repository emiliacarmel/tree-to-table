const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose

mongoose.connect()


app.get('/', (req, res) => res.send('Hi there world'));

app.listen(port, function () {
     console.log("Listening on port " + port);
});