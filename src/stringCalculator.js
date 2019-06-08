// string calculator

function add(stringNumbers) {

    if (stringNumbers == '') return 0;

    let sum = 0;
    let newArray = stringNumbers.split(/\D/g);


    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] != '' && isNaN(newArray)) {
            sum += parseInt(newArray[i]);
        }
    }
    return sum;
}
