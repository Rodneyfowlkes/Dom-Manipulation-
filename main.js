var first_num = document.querySelector("#value-one");

var second_num = document.querySelector("#value-two");

var add_button = document.querySelector("#calculate-button");


var add = function ( x, y) {

var sum = Number(x) + Number(y) 

return sum;

};

add_button.addEventListener('click', function(event)

{
	event.preventDefault();

    var answer = document.querySelector("#answer");
    var first_num1 = first_num.value;
    var second_num2 = second_num.value;
    answer.textContent = add (first_num1, second_num2);



});




