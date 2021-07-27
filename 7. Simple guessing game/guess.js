const randomNumber = Math.floor(Math.random() * 100) + 1;
let userInput = parseInt(prompt("Enter the number between 1 and 100:"));
let count = 0;
while(true){
  count++;
  if(!userInput){
      userInput= parseInt(prompt("Enter a valid number:"));
  }
  else if (userInput < 1 || userInput > 100){
    userInput = parseInt(prompt("Enter the number within the range:"));
  }
  else if(userInput === randomNumber){
    console.log("Hurray!!!! You guess is correct.");
    console.log(`Total number of guesses: ${count}`);
    break;
  }
  else if (userInput < randomNumber){
    userInput = parseInt(prompt("Your number is low:"));
  }
  else if(userInput > randomNumber){
    userInput = parseInt(prompt("Your number is high:"));
  }

}
