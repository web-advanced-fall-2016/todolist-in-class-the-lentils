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

var dataSet= [];

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
app.get('/items',function(req,res){
  if( dataSet.length) {
    res.json({message: 'success', data: {dataSet}});
  }
  else {
     res.json({message: 'No task available!', data: {dataSet}});
  }
});

app.post('/items', function(req, res, next){
  
});


//Endpoint for Adding an Item to server, Takes in object newTask data
//name/id from client and returns an updated initial Data array
app.post('/addItem', function(req, res,next){

   console.log(req.body);
   let data = req.body;

   if(!data.description) {
     res.json({message:'Error, You must add description in body of post!'});

   }else {
     let newItem = {
       description: data.description,
       id: dataSet.length
     };

     dataSet.push(req.body);
     res.json({message: 'Success', data: {item: newItem}});
   }


});

app.post('/removeTask/:id',function(req,res,next){
  //search dataSet for id and pop it
  // dataSet.splice(req.body);
  for (item of items){
    dataSet.splice(req.body);
  }
});


// app.post('/closeItem', function(req, res){
//    removeItem(req.body.id);
//    console.log("removing " + req.body.id);
//    let index = db.items.indexOf(req.body.id);
//    for (item of db.items) {
//     console.log("The index of the items is: " + db.items.indexOf(item));
//    }
//    // console.log(index);
//    console.log(db.items);
//    res.json(db.items);
//    db.saveItemList(db.items);
// });
