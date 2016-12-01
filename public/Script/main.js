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
        url: BaseURL + `/items`
    }).done(function(res){
        console.log('Got the initial items.');
        console.log(res);
            for (i = 0; i < res.length; i++) {
                console.log(res[i]);
                dataSet.push(res[i]);
            }
    })
};

function pullTask(data){
  $.ajax({
      method:"POST",
      url: BaseURL + '/removeTask/:id',
      data:data
  }).done(function(res){
      console.log(data + "pulling from task list");
  });
}

function sendTask(data){
        //  refreshList(res);
 };


function addTask(){
  console.log('Adding a Task');
  var description = taskInput.value;
// Sending to the Json File
  if(description){
    $.ajax({
           method:"POST",
           url: BaseURL + `/addItem`,
           data: {description: description}
       }).done(function(res){
         console.log(res);
         if( res.message == 'Success') {
          var list = document.querySelector('#taskList');
          var newItem = document.createElement('div');
           newItem.classList.add('task');
           newItem.innerHTML += `<p class='taskName' id =${res.data.item.id}> ${res.data.item.description}<span class='deleteTask' onclick="removeTask();" >x</span></p>`;
         	 list.appendChild(newItem);
          }
          console.log("The result is " + res);
       });
    }
};

function removeTask(){
  var elem = event.target.parentNode;
// Removes targeted task from list
  elem.remove();
  console.log('removing a Task number ' + elem.id);
  pullTask();
};
