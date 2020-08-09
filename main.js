let num1, num2;

function number(num1, num2) {
    if (num1 == 20 || num2 == 20) {
        return console.log("true");
    } else if (num1 + num2 <= 20) {
        return console.log("true");
    } else {
        return console.log("Żaden warunek nie został spełniony");

    }
}
number(5, 10);

