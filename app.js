const http = require('http');
const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const port = 3000;

const app = express();

var tasks = require('./todolist');
const db = require('./db.js');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/tasks', function(req, res, next){
  res.json(db.getTaskList());
  let tasks = db.getTaskList();
});

app.get('/tasks/:task_id', function(req, res, next){
  let id = req.params.task_id;
  let task = db.getTask(id);
  console.log(task);
  if(task){
    res.json(task);
  } else {
    res.json("notfound");
  }
  next();
})

app.post('/tasks', function(req, res, next){
  db.getTaskList(req.body);
  console.log(req.body);
  tasks.push(req.body);
  tasks.pop(req.body);
});
/*====================
    YOUR CODE
====================*/


const server = http.createServer(app);
server.listen(port, () => {
  console.log("server running and listening at http://localhost:${port}/")
});

module.exports = app;
// app.get('/tasks', function(req, res, next){
//   res.json(db.getList());
//   let tasks = db.getList();
//   next();
// });

// app.get('/tasks/:task_id', function(req, res, next){
//   let id=req.params.task_id;
//   let task = db.getTask(id);
//   if(task)
//     res.json(task);
// });

// app.post('/tasks', function(req, res, next){
//   db.getList(req.body);
//   console.log(req.body);
//   todolist.push(req.body);
// });

// var dataSet= [
//         "description": "Finish this homework",
//         "id": 0
//     },
//     {
//         "description": "Celebrate Thankgiving",
//         "id": 1
//     },
//     {
//         "description": "Go Work on thesis Documentation",
//         "id": 2
//     }
// ];

// // Comunication between Jason File and Index
// const server = http.createServer(app);
// server.listen(port, () => {
//     console.log(`Server running and listening at http://localhost:${port}/`);
// });


// app.use(function(req, res, next) {
//     // Do Logging on every request
//     console.log('Something is happening.');
//     next(); // Go on to the next item
// });

// app.use('/test', function(req, res){
//   res.json({message:"success"});
// });

// //get from the server
// app.get('/start',function(req,res){
//   let dataSet = db.getTaskList;
//   res.json(dataSet);
//   console.log(dataSet);
//   db.tasks = dataSet;
// });

// //Endpoint for Adding an Item to server, Takes in object newTask data
// //name/id from client and returns an updated initial Data array
// app.post('/addTask', function(req, res){
//    console.log(req.body);
//    db.tasks.push(req.body);
//    console.log(db.tasks);
//    res.json(db.tasks);
//    console.log("db is" + db.tasks);
// });

// app.post('/removeTask', function(req, res){
//   removeTask(req.body.id);
//   console.log("removing" + req.body.id);
//   let index = db.tasks.indexOf(req.body.id);
//   for (task of db.tasks){
//     console.log("The index of the task is: " + db.tasks.indexOf(task));
//   }
//   console.log(db.tasks);
//   res.json(db.tasks);
//   db.updateList(db.tasks);
// });

// // function removeTask(id){
// //   for (task of db.tasks){
// //     console.log (task.id);
// //     console.log (id);
// //     if (item.id == parseInt(id)){
// //       let index = db.tasks.indexOf(task);
// //       db.tasks.splice(index, 1);
// //     }
// //   }
// // }

// app.listen(port);
