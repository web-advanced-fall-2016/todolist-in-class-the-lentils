let tasks = require('./todolist.json');
let fs = require('fs');

let db = {
	getTaskList: function(){
		let tasky = tasks.slice(0);
		return tasky;
	},

	updateList: () => {
			fs.writeFile('./todolist.json', JSON.stringify(newTask), (err) => {
				if(err){
					console.log('File did not update');
				console.log('File successfully updated');
				}
			});
	}	
};

module.exports = db;