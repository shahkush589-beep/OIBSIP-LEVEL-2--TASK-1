let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let value = button.innerText;

        if(value == "C"){
            expression = "";
            display.value = "";
        }

        else if(value == "⌫"){
            expression = expression.slice(0,-1);
            display.value = expression;
        }

        else if(value == "="){
            display.value = calculate(expression);
            expression = display.value;
        }

        else{
            expression += value;
            display.value = expression;
        }

    });

});

function calculate(exp){

    let operator;

    if(exp.includes("+")) operator = "+";
    else if(exp.includes("-")) operator = "-";
    else if(exp.includes("*")) operator = "*";
    else if(exp.includes("/")) operator = "/";

    let parts = exp.split(operator);

    let num1 = parseFloat(parts[0]);
    let num2 = parseFloat(parts[1]);

    if(operator == "+") return num1 + num2;
    if(operator == "-") return num1 - num2;
    if(operator == "*") return num1 * num2;

    if(operator == "/"){
        if(num2 == 0)
            return "Error";
        return num1 / num2;
    }

    return exp;
}