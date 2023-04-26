let number = prompt('Будь ласка, введіть число!')
function getSqrt(number){
    if( number === null || number === ''){
        console.log('Будь ласка введіть число!')
    } else if(number < 0){
        console.log('Введіть додатнє число')
    } else if(Number.isNaN(Number(number))) {
        console.log('Повинно бути числове значення')
    } else {
        console.log(`Квадратний корінь з ${number} дорівнює ${Math.pow(number, 2)}`)
    }
}

getSqrt(number);