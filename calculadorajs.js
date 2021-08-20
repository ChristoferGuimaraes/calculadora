class Calculator {
  constructor() {}

  equal () {
    let numbers = document.querySelector("#numbers").innerHTML;
    if (numbers.includes("!")) {
        numbers = numbers.slice(0, -1);
      this.factorial(numbers);
      return;
    }
    if (numbers) {
      document.querySelector("#result").innerHTML = eval(numbers);
      return;
    }
    this.clean();
  }

  insert = num => 
    document.querySelector("#numbers").innerHTML += `${num}`;
  

  clean() {
    document.querySelector("#numbers").innerHTML = "";
    document.querySelector("#result").innerHTML = "";
  }

  factorial(numbers) {
    let fat = 1;
    for (let i = 0; i < numbers; i++) {
      fat *= numbers - i;
    }
    document.querySelector("#result").innerHTML = `${fat}`;
  }
}

let calculator = new Calculator();
