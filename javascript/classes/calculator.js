class calculator {
  constructor() {
    this.result = 0;
  }

  //add

  add(a, b) {
    this.result = a + b;

    console.log(this.result);
  }

  subtract(a, b) {
    return (this.result = a - b);
  }

  multiply(a, b) {
    return (this.result = a * b);
  }

  divide(a, b) {
    return (this.result = a / b);
  }
  toString() {
    console.log(`Result is: ${this.result}`);
  }
}

let calculate = new calculator();

calculate.add(1, 1);

console.log(calculate.multiply(3, 5));

class calc {
  constructor(number1, number2, operator) {
    this.result = 0;

    this.number1 = number1;

    this.number2 = number2;

    this.operator = operator;
  }

  getResult() {
    switch (this.operator) {
      case "+":
        this.result = this.number1 + this.number2;

        break;

      case "-":
        this.result = this.number1 - this.number2;

        break;

      case "*":
        this.result = this.number1 * this.number2;

        break;

      case "/":
        this.result = this.number1 / this.number2;

        break;

      default:
        console.log("Invalid operator");

        break;
    }
  }

  toString() {
    console.log(
      `${this.number1} ${this.operator} ${this.number2} = ${this.result}`
    );
  }
}

let math = new calc(20, 30, "+jsu");

math.getResult();

math.toString();
