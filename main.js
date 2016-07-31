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

var sum = eval(x + "+" + y) 

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

 
    first_num1 = first_num.value;
    
    calprocess = 5;


});



// Equal button

equal_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var answer = document.querySelector("#value-one");
    var answer2 = document.querySelector("#answer");
    var second_num2 = first_num.value;
    // first_num1 = first_num.value;

    if (calprocess == 1) {
    	answer2.innerHTML = add (first_num1, second_num2);
        answer.value = add (first_num1, second_num2);
    } else if (calprocess == 2) {
    	answer.value = multiply (first_num1, second_num2);
        answer2.innerHTML = multiply (first_num1, second_num2);                                      
    } else if (calprocess ==3) {
    	answer.value = divide (first_num1, second_num2);
        answer2.innerHTML = divide (first_num1, second_num2);
    } else if (calprocess == 4) {
    	answer.value = subtract (first_num1, second_num2);
        answer2.innerHTML = subtract (first_num1, second_num2);
    } else if (calprocess == 5) {
    	answer.value = square (first_num1);
        answer2.innerHTML = square (first_num1);
    }     
    

});

// Number button functions 


var num_inputs = document.querySelector("#value-one");

var one_button = document.querySelector("#one-button");
var two_button = document.querySelector("#two-button");
var three_button = document.querySelector("#three-button");
var four_button = document.querySelector("#four-button");
var five_button = document.querySelector("#five-button");
var six_button = document.querySelector("#six-button");
var seven_button = document.querySelector("#seven-button");
var ten_button = document.querySelector("#ten-button");
var nine_button = document.querySelector("#nine-button");
var clear_button = document.querySelector("#clear-button");
var zero_button = document.querySelector("#zero-button");
var decimal_button = document.querySelector("#decimal-button");

one_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = num_inputs.value + Number(one_button.textContent);
});


two_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = num_inputs.value + Number(two_button.textContent);
});

three_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = num_inputs.value + Number(three_button.textContent);
});

four_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = num_inputs.value + Number(four_button.textContent);
});

five_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = num_inputs.value + Number(five_button.textContent);
});

six_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = num_inputs.value + Number(six_button.textContent);
});

seven_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = num_inputs.value + Number(seven_button.textContent);
});

 ten_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = num_inputs.value + Number(ten_button.textContent);
});

nine_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = num_inputs.value + Number(nine_button.textContent);
});

clear_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = " ";
});

zero_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = num_inputs.value + Number(zero_button.textContent);
});

decimal_button.addEventListener('click', function(event)
{	event.preventDefault();
    num_inputs.value = (num_inputs.value + (decimal_button.textContent));
});
