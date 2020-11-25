//initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));

//initialize nedb
// let Datastore = require('nedb');
// let db = new Datastore('stories.db');
// db.loadDatabase();


//initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});


//navigation

window.addEventListener('load');