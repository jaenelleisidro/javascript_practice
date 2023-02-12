const findFirstNonRepeatingCharacter = require('../src/findFirstNonRepeatingCharacter');

describe('find non repeating character', () => {
    describe('single non repeating character exists',()=>{
        test('at first of string', () => {
            expect(findFirstNonRepeatingCharacter("abbccddeeff")).toBe("a");
        });
        test('at the middle of string', () => {
            expect(findFirstNonRepeatingCharacter("aabbccdeeff")).toBe("d");
        });
        test('at the end of string', () => {
            expect(findFirstNonRepeatingCharacter("aabbccddeef")).toBe("f");
        });    
    });
    describe('multiple non repeating character exists',()=>{
        test('at first and middle of string', () => {
            expect(findFirstNonRepeatingCharacter("abbccdeeff")).toBe("a");
        });
        test('at the middle and end of string', () => {
            expect(findFirstNonRepeatingCharacter("aabbccdeeff")).toBe("d");
        });
        test('at first and end of string', () => {
            expect(findFirstNonRepeatingCharacter("aabbccdeef")).toBe("d");
        });    
        test('everywhere', () => {
            expect(findFirstNonRepeatingCharacter("abcdef")).toBe("a");
        });
    });
       
    
    describe('special cases',()=>{
        test('null string as input', () => {
            expect(()=>{
                findFirstNonRepeatingCharacter(null);
            }).toThrow(Error("parameter must be a string"));
        });
        test('no non repeating character found', () => {
            expect(findFirstNonRepeatingCharacter("aabbccddeeff")).toBe(null);
        });
    });
});
  
    