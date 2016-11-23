let BaseURL = "http://localhost:3000";
// Publishing full list to index
var taskList = document.getElementById('taskList');
var taskDiv = document.createElement('div');
let i =0;
let dataSet =[];

window.onload = function() {
    getStart();
};

function getStart() {
    $.ajax({
        method:"GET",
        url: BaseURL + `/start`
    }).done(function(res){
        console.log('Got the initial items.');
        console.log(res);
            for (i = 0; i < res.length; i++) {
                console.log(res[i]);
                dataSet.push(res[i]);
            }
    })

};


function sendTask(data){
  $.ajax({
         method:"POST",
         url: BaseURL + `/addItem`,
         data: data
     }).done(function(res){
         console.log(data + " was sent to server");
         console.log("The result is " + res);
        //  refreshList(res);
 });
}

function addTask(){
  console.log('Adding a Task');
  var taskInput = document.getElementById('taskInput');
  var task = taskInput.value;
  taskDiv.classList.add('task');
  taskDiv.innerHTML += `<p class='taskName' id = ${i++}>${task} <span class='deleteTask' onclick="removeTask();" >x</span></p>`;
	taskList.appendChild(taskDiv);
	taskInput.value = "";

// Sending to the Json File
  if(task){
    var elem = event.target.parentElement;
    var newTask = {description:task, id:i};
    console.log(newTask);
    sendTask(newTask);
  };
};

function removeTask(){
  var elem = event.target.parentNode;
// Removes targeted task from list
  elem.remove();
  console.log('removing a Task number ' + elem.id)
};
