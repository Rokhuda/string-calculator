//

describe('string calculator', function () {

    it('should take an empty string', function () {
        let result = add('');
        expect(result).toEqual(0);
    });
    it('should take up to two numbers separated by a comma', function () {
        let result = add('1,2');
        expect(result).toEqual(3);
    });
    it('should handle unknown amount of numbers', function () {
        let result = add('1,1,1,1,17');
        expect(result).toEqual(21);
    });
    it('should handle new lines between numbers', function () {
        let result = add('1\n2,3');
        expect(result).toEqual(6);
    });
    it('should read a change in delimiter, where the beginning of the string will contain a separate line ', function () {
        let result = add('//;\n1;2');
        expect(result).toEqual(3);
    });
     it('should throw an exception if negative number is passed as well as the negative number', function () {
        let result = add('-1,1');
        expect(result).toBe('negative number not allowed');
    }); 


})