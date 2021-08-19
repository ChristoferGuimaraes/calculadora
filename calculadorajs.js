class Calculator {
  constructor() {}

  equal() {
    let result = document.querySelector("#result").innerHTML;
    if (result.includes("!")) {
      result = result.slice(0, -1);
      this.factorial(result);
      return;
    }
    if (result) {
      document.querySelector("#numbers").innerHTML = eval(result);
      return;
    }
    this.clean();
  }

  insert(num) {
    document.querySelector("#result").innerHTML += `${num}`;
  }

  clean() {
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#numbers").innerHTML = "";
  }

  factorial(result) {
    let fat = 1;
    for (let i = 0; i < result; i++) {
      fat *= result - i;
    }
    document.querySelector("#numbers").innerHTML = `${fat}`;
  }
}

let calculator = new Calculator();
