// Variables

var first_num = document.querySelector("#value-one");

var second_num = document.querySelector("#value-two");

var add_button = document.querySelector("#add-button");

var subtract_button = document.querySelector("#subtract-button");

var multiply_button = document.querySelector("#multiply-button");

var divide_button = document.querySelector("#divide-button");

var square_button = document.querySelector("#square-button");


// Add Function

var add = function ( x, y) {

var sum = Number(x) + Number(y) 

return sum;

};

// Subtract Function

var subtract = function ( x, y) {

var difference = Number(x) - Number(y) 

return difference;

};




// Multiply Function

var multiply = function ( x, y) {

var multiple = Number(x) * Number(y) 

return multiple;

};

// Divide Function

var divide = function ( x, y) {

var quotient = Number(x) / Number(y) 

return quotient;

};

// Square


var square = function (x) {


var squareroot =  Math.sqrt(Number(x))

return squareroot;

};










// Add button


add_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var answer = document.querySelector("#answer");
    var first_num1 = first_num.value;
    var second_num2 = second_num.value;
    answer.textContent = add (first_num1, second_num2);



});

// multiply button


multiply_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var answer = document.querySelector("#answer");
    var first_num1 = first_num.value;
    var second_num2 = second_num.value;
    answer.textContent = multiply (first_num1, second_num2);



});


// Divide button 

divide_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var answer = document.querySelector("#answer");
    var first_num1 = first_num.value;
    var second_num2 = second_num.value;
    answer.textContent = divide (first_num1, second_num2);



});


// Subtract button

subtract_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var answer = document.querySelector("#answer");
    var first_num1 = first_num.value;
    var second_num2 = second_num.value;
    answer.textContent = subtract (first_num1, second_num2);



});


// Square button

square_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var answer = document.querySelector("#answer");
    var first_num1 = first_num.value;
    var second_num2 = second_num.value;
    answer.textContent = square (first_num1, second_num2);



});





