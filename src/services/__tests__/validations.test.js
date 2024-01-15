// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBe(false);
    });

    test('should return true if the gamertag is valid', () => {
        const result = isValid("shshsh#2");
        expect(result).toBe(true);
    });

    test('should return false if gamertag doesnt contain at least 8 characters', () => {
        const result = isValid("shshs#2");
        expect(result).toBe(false);
    });

    test('should return false if gamertag doesnt contain at least 1 special character', () => {
        const result = isValid("shshshh2");
        expect(result).toBe(false);
    });

    test('should return false if gamertag doesnt contain at least 1 number', () => {
        const result = isValid("shshshh#");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - isEmpty", () => {
    test("should return true if label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true if label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false if the label is not empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});
