let userInput = prompt("Enter the instruction you wish!!");
let todoList = [];
while (userInput !== "quit") {
  if (userInput === "new") {
    let userList = prompt("Enter the todo item!!!");
    todoList.push(userList);
    console.log(`${userList} added to the list`);
    console.log('***************************');
    userInput = prompt("Enter the instruction you wish!!");
  } else if (userInput === "list") {

    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i} : ${todoList[i]}`);
    }
    console.log('***************************');
    userInput = prompt("Enter the instruction you wish!!");
  } else if (userInput === "delete") {
    if (todoList.length !== 0) {
      index = prompt("Enter the index you want to delete!!!");
      let deletedItem = todoList.splice(index, 1);
      console.log(`You deleted ${deletedItem}`);
    } else {
      console.log("Nothing to delete here");
    }
    console.log('***************************');
    userInput = prompt("Enter the instruction you wish!!");

  } else {
    userInput = prompt("Enter the valid instruction!!");
  }

}
