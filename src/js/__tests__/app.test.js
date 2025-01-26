import Validator from '../app.js'; 

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('should validate a valid username', () => {
        expect(validator.validateUsername('valid_username123')).toBe(true);
        expect(validator.validateUsername('user-name123')).toBe(true);
        expect(validator.validateUsername('username123')).toBe(true);
        expect(validator.validateUsername('user123')).toBe(true);
    });

    test('should invalidate usernames with four consecutive digits', () => {
        expect(validator.validateUsername('1234user')).toBe(false);
        expect(validator.validateUsername('user1234')).toBe(false);
        expect(validator.validateUsername('user12345')).toBe(false);
    });

    test('should invalidate usernames starting with _ or -', () => {
        expect(validator.validateUsername('-username')).toBe(false);
        expect(validator.validateUsername('_username')).toBe(false);
    });

    test('should invalidate usernames ending with _ or -', () => {
        expect(validator.validateUsername('username-')).toBe(false);
        expect(validator.validateUsername('username_')).toBe(false);
    });

    test('should invalidate empty usernames', () => {
        expect(validator.validateUsername('')).toBe(false);
    });

    test('should invalidate usernames with only special characters', () => {
        expect(validator.validateUsername('---')).toBe(false);
        expect(validator.validateUsername('___')).toBe(false);
    });
});