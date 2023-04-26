let MyMath = {
    PI: 3.14159,
    pow: function (number, degree) {
        if (number === null || degree === null){
            return 'Будь ласка, введіть числа!';
        }
        else if (Number.isNaN(Number(number)) || Number.isNaN(Number(degree))){
            return 'Повинні бути числові значення';
        }
        else{
            return Number(number)**Number(degree);
        }
    },
    abs: function (number) {    
        if (number === null){
            return 'Будь ласка, введіть число!';
        }
        else if (Number.isNaN(Number(number))){
            return 'Повинно бути числове значення';
        }
        else {
            number < 0 ? number =-number : number;
            return number;
        }
    },
    max: function (...arg) {
        let max = arg[0], result;
        for (let i = 0; i<arg.length; i++){
            if (arg[i] === null){
                result = 'Будь ласка, введіть числа!';
                break;
            }
            else if (Number.isNaN(Number(arg[i]))){
                result = 'Повинні бути числові значення';
                break;
            }
            else{
                arg[i] > max ? max = arg[i]: max;
                result = max;
            }
        }
        return result;
    },
    min: function (...arg) {
        let min = arg[0], result;
        for (let i = 0; i<arg.length; i++){
            if (arg[i] === null){
                result = 'Будь ласка, введіть числа!';
                break;
            }
            else if (Number.isNaN(Number(arg[i]))){
                result = 'Повинні бути числові значення';
                break;
            }

            else{
                arg[i] < min ? min = arg[i]: min;
                result = min;
            }
        }
        return result;
    }
}

console.log('Pi =' , MyMath.PI);

console.log( 'pow 3 2 =' , MyMath.pow(3, 2));
console.log( 'pow 5 -2 =' , MyMath.pow(5, -2));
console.log( 'pow 3 0 =' , MyMath.pow(3, 0));
console.log( 'pow 4 null =' , MyMath.pow(4, null));
console.log( 'pow 5 rrr =' , MyMath.pow(5, 'rrr'));

console.log( 'abs 3 =' , MyMath.abs(3));
console.log( 'abs -5 =' , MyMath.abs(-5));
console.log( 'abs 0 =' , MyMath.abs(0));
console.log( 'abs null =' , MyMath.abs(null));
console.log( 'abs rrr =' , MyMath.abs('rrr'));

console.log('max 4, 9, 27=', MyMath.max(4, 9, 27));
console.log('max -5, -9, -20=', MyMath.max(-5, -9, -20));
console.log('max -4, 0=', MyMath.max(-4, 0));
console.log('max 3, null, 7, 17=', MyMath.max(3, null, 7, 17));
console.log('max 3, 5, rrr, 23=', MyMath.max(3, 5, 'rrr', 23));

console.log('min 2, 6, 27=', MyMath.min(2, 6, 27));
console.log('min -2, -6, -27=', MyMath.min(-2, -6, -27));
console.log('min -5, 0=', MyMath.min(-5, 0));
console.log('min 5, null, 7, 17=', MyMath.min(5, null, 7, 17));
console.log('min 5, 9, rrr, 17=', MyMath.min(5, 9, 'rrr', 17));