// string calculator

function add(stringNumbers) {

    if (stringNumbers == '') return 0;

    let sum = 0;
    let newArray = stringNumbers.split(/^(?=.*\r)(?=.*\n)$/);


    console.log(newArray)
    console.log(typeof newArray)

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] != '' && typeof newArray[i] == Number) {
            if (parseInt(newArray[i]) > 0) {
                sum += parseInt(newArray[i]);
                console.log(newArray[i])
            } else {
                sum = 'negative number (-1) not allowed';
                return sum;
            }
        }

    }
    return sum;
}
//console.log(sum)


console.log(add('//;\n1;2')) 