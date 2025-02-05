function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Modify the function to accept an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user)); // Correct

// Solution 2:  Process the array before passing to the function
let userName = user.join(" ");
console.log(greeter(userName)); // Correct