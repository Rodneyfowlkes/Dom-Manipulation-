// Variables

var first_num = document.querySelector("#value-one");

var second_num = document.querySelector("#value-two");

var add_button = document.querySelector("#add-button");

var subtract_button = document.querySelector("#subtract-button");

var multiply_button = document.querySelector("#multiply-button");

var divide_button = document.querySelector("#divide-button");

var square_button = document.querySelector("#square-button");

var equal_button = document.querySelector("#equal-button");

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



calprocess = 






// Add button


add_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var clear = document.querySelector("#value-one");
    first_num1 = first_num.value;
    clear.value = " ";
    calprocess = 1;


});

// multiply button


multiply_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var clear = document.querySelector("#value-one");
    first_num1 = first_num.value;
    clear.value = " ";
    calprocess = 2;


});


// Divide button 

divide_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var clear = document.querySelector("#value-one");
    first_num1 = first_num.value;
    clear.value = " ";
    calprocess = 3;


});



// Subtract button

subtract_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var clear = document.querySelector("#value-one");
    first_num1 = first_num.value;
    clear.value = " ";
    calprocess = 4;


});



// Square button

square_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var clear = document.querySelector("#value-one");
    first_num1 = first_num.value;
    clear.value = " ";
    calprocess = 5;


});



// Equal button

equal_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var answer = document.querySelector("#value-one");
    var second_num2 = first_num.value;

    if (calprocess == 6) {
    	answer.value = add (first_num1, second_num2);
    } else if (calprocess == 2) {
    	answer.value = multiply (first_num1, second_num2);
    } else if (calprocess ==3) {
    	answer.value = divide (first_num1, second_num2);
    } else if (calprocess == 4) {
    	answer.value = subtract (first_num1, second_num2);
    } else if (calprocess == 5) {
    	answer.value = square (first_num1, second_num2);
    }     
    

});




