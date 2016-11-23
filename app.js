const http = require('http');
const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/*====================
    YOUR CODE
====================*/

var dataSet= [{
        "description": "Finish this homework",
        "id": 0
    },
    {
        "description": "Celebrate Thankgiving",
        "id": 1
    },
    {
        "description": "Go Work on thesis Documentation",
        "id": 2
    }
];

// Comunication between Jason File and Index
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running and listening at http://localhost:${port}/`);
});


app.use(function(req, res, next) {
    // Do Logging on every request
    console.log('Something is happening.');
    next(); // Go on to the next item
});

//get from the server
app.get('/start',function(req,res){
  res.json(dataSet);
});

//Endpoint for Adding an Item to server, Takes in object newTask data
//name/id from client and returns an updated initial Data array
app.post('/addItem', function(req, res,next){
   console.log(req.body);
   dataSet.push(req.body);
   console.log(dataSet);
   res.json(dataSet);
});
