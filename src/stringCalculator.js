// string calculator

function add(stringNumbers) {

    if (stringNumbers == '') return 0;

    let sum = 0;

    let newArray = stringNumbers.match(/-?\d+/g)

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] > 0) {
            sum += parseInt(newArray[i]);
        } else {
            return ('negatives not allowed' + ' and the negative number is: ' + newArray[i]);
        }

    }
    return sum;
}

console.log(add('//;\n12;;33;;;;-2'))