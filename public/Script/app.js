let submit = document.getElementsByClassName('.btn');
let newTask = document.querySelector('#newTask');
let listElement = document.querySelector('.theList')
let list = new Array();
var newItem = document.createElement('li');


function removeTask(){
	//add event listener to x buttons for each task


	let closeButton = document.getElementById("close");
	 closeButton.addEventListener("click", function(){
	 	console.log('clicked');
	 	newItem.parentNode.remove();
	 },false);

}

function updateList(){
	 newItem.id = "removable";

    var ItemValue = newTask.value;
  var t = document.createTextNode(ItemValue);
  newItem.appendChild(t);
  listElement.appendChild(newItem);
  
  //create a button to remove task as it's created
  for (i =0; i < list.length;i++){
	var removeItem = document.createElement('button');
	removeItem.id = "close";
  	var d = document.createTextNode('x');
 	 removeItem.appendChild(d);
 	 listElement.appendChild(removeItem);
 	 removeTask();	
	}


}

function addTask(){
  list.push(newTask.value);
  console.log(list);
  updateList();
}


