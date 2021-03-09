

xdescribe('splitString tests', () => {
    const delim = '';
    const word = ' ';
    
    test('empty string', () => {
        expect(splitString([], delim, word)).toEqual([]);
    });

    test('string is split into multi array', () => {
        const input =  "My name is Madd";
        const output = [['M','y'], ['n','a','m','e'], ['i','s'], ['M','a','d','d']];
        
        expect(splitString(input, delim, word)).toEqual(output);
    });

    test('arr is split into words', () => {
        
    });

    test('multiarr is split into letters', () => {
        
    });

    test('word delimeter is a character', () => {
        
    });

    test('character delimeter is a character', () => {
        
    });
});

xdescribe('translateArr tests', () => {

    


});