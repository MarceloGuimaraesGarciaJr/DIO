function sayMyname(name) {
  if (name === undefined || name === null) {
    console.log ("Name is required");
  }
   console.log  (`Hello, ${name}!`);
};

sayMyname("John");

function checkAge(age){
    
    if (age === undefined || age === null) {
        console.log("Age is required");
    }else if (age < 18) {
        console.log("You are under 18");
    }else if (age >= 18 && age < 65) {
        console.log("You are an adult");
}
}
checkAge(20)  