number = +prompt('Будь ласка, введіть радіус!');
function getArea(number){
    if( number === null){
        console.log('Будь ласка, введіть радіус!')
    } else if(Number.isNaN(Number(number))) {
        console.log('Повинно бути числове значення')
    } else {
        console.log(`Площа дорівнює ${Math.round(Math.PI*Math.pow(number, 2))} квадратних одиниць`)
    }
}
 

getArea(number);