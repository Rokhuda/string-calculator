// string calculator

function add(stringNumbers) {

    //checks for empty strings
    if (stringNumbers == '') return 0;

    let sum = 0

    //checks for any negative numbers
    if (stringNumbers.search('-') >= 0) return 'negative number not allowed';

    else {
        let numberArray = stringNumbers.split(/\D/g);
        for (let i = 0; i < numberArray.length; i++) {
            if (numberArray[i] != '') {
                sum += parseInt(numberArray[i]);
            }
        }
        return sum;
    }
}
console.log(add('/-/[***]\n1***2***3'))