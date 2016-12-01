# Session 11 / in class exercise

## Team Info
- Eliza
- David

### Endpoints

| URL                   | Description                              | Response structure                       |
| --------------------- | ---------------------------------------- | ---------------------------------------- |
| `/items`              | returns back a list of all the available items. | `{message: 'success', data: { list: [{id: 1, description: 'Clean the house'},{},…]} }` |
| `/addItem`            | adds a new item to our todo list         | `{message: 'success', data: {item: newItem}}` |
| `/removeTask/:taskId` | removes the task with id=`taskId`        | `{message: 'success', data: {}}`         |
|                       |                                          |                                          |

Response

```json
{
  message: 'success', 
 data: [{
   id: 1, 
   description: 'Clean the house'
 },
 {}
       ]
}
```

### Features

 	1. Mainatin an array of Tasks via. a to-do-list function
 	2. Add new item through an HTML input at the top and plus (“+”) sign next to it. This sends the content to a sever and after confirmation creates a new HTML element of that task and a delete button ("x")
 	3. Remove existing items on list with the delete button (“x”). Calling to the server it searches through the current array dataSet for an object with that ID. When that object is found the function splices the task from the server and the HTML task list.
 	4. List is saved so existing items can be revisited, even if the user leaves or refreshes site.

### To Run the Code

1. Clone or Download repo to your computer

2. Open the primary directory through your terminal

3. Install dependencies 

   ```
   npm install
   ```

4. Run program

   ```
   node app.js
   ```

5. Within a web broswer and type [http://localhost:3000](http://localhost:3000)

### Libraries Used and Refrences









#### Bonus features

- Update existing items.
- Improve UX/UI by adding signifiers for successful save/remove/update of items on server.
- Save the items on server. In other words, make it persistent. (Save it in a `.json` file or a database if interested/checkout `mongoose` )




