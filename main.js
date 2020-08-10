function number(num1, num2) {
    if (num1 == 20 || num2 == 20 || num1 + num2 <= 20) {
        return true;
    } else {
        return "Żaden warunek nie został spełniony";
    }
}
console.log(number(5, 10));

