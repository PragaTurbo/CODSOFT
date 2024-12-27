
var inp = document.getElementById("inp");
function clearall()
{
    inp.value = "";
}
function delsing()
{
    inp.value = inp.value.toString().slice(0,-1);
}
function appendAtEnd(input)
{
    inp.value += input;
}
function calculate()
{
   try{
     inp.value = eval(inp.value);
   }
   catch(error)
   {
        inp.value = "Input error !";
   }
}

// let continueCalculating = true;

// while (continueCalculating) {
//     const operation = prompt("Choose an operation: add, subtract, multiply, divide");
//     const num1 = parseFloat(prompt("Enter the first number:"));
//     const num2 = parseFloat(prompt("Enter the second number:"));

//     if (operation === "add") {
//         alert(`Result: ${num1 + num2}`);
//     } else if (operation === "subtract") {
//         alert(`Result: ${num1 - num2}`);
//     } else if (operation === "multiply") {
//         alert(`Result: ${num1 * num2}`);
//     } else if (operation === "divide") {
//         if (num2 !== 0) {
//             alert(`Result: ${num1 / num2}`);
//         } else {
//             alert("Error: Division by zero is not allowed.");
//         }
//     } else {
//         alert("Invalid operation. Please choose add, subtract, multiply, or divide.");
//     }

//     const choice = prompt("Do you want to perform another calculation? (yes/no)");
//     if (choice.toLowerCase() !== "yes") {
//         continueCalculating = false;
//         alert("Goodbye!");
//     }
// }

