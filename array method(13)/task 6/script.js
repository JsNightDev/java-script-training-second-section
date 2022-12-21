let result;
function Calculator() {
    this.calculate = function (str) {
        // console.log(str);
        let arr = str.split(' ');
        let a;
        let op;
        let b;

        // console.log(arr);
        // console.log(arr.length);

        // console.log(item);
        a = +arr[0];
        op = arr[1];
        b = +arr[2];
        // console.log(a, +op, +b);

        // console.log(typeof op);
        if (op === "+") {
            result = a + b;
            return result
        }

        if (op === "-") {
            result = a - b;
            return result
        }
        if (op === "*") {
            result = a * b;
            return result
        }
        if (op === "/") {
            result = a / b;
            return result
        }


    }
};
let calc = new Calculator;

alert(calc.calculate("300 + 70")); // 10