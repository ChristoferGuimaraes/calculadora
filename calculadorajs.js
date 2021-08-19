class Calculator {
    constructor() {

    }

    equal() {
        let result = document.querySelector('#result').innerHTML;
        if (result) {
            document.querySelector('#result').innerHTML = eval(result);
        } else {
            document.querySelector('#result').innerHTML = '0';
        }

    }

    insert(num) {
        document.querySelector('#result').innerHTML += `${num}`;
    }

    clean() {
        document.querySelector('#result').innerHTML = '';
    }

    factorial() {
        let res = document.querySelector('#result').innerHTML;
        let fat = 1
        for (let i=0; i<res; i++) {
            fat = fat*(res-i);
        }
        document.querySelector('#result').innerHTML = `${res}! = ${fat}`
        
    }
}

let calculator = new Calculator();