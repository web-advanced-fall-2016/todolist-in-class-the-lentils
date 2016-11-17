let submit = document.getElementsByClassName('.btn');
let newTask = document.querySelector('#newTask');
let listElement = document.querySelector('.theList')
let list = new Array();

function updateList(){
  var newItem = document.createElement('li');
  var ItemValue = newTask.value;
  var t = document.createTextNode(ItemValue);
  newItem.appendChild(t);
  listElement.appendChild(newItem);


}

function addTask(){
  list.push(newTask.value);
  console.log(list);
  updateList();
}
