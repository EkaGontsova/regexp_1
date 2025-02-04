import Validator from '../app.js'; 

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    describe('valid usernames', () => {
        test.each([
            'valid_username123',
            'user-name123',
            'username123',
            'user123'
        ])('should validate username: %s', (username) => {
            expect(validator.validateUsername(username)).toBe(true);
        });
    });

    describe('invalid usernames with four consecutive digits', () => {
        test.each([
            '1234user',
            'user1234',
            'user12345'
        ])('should invalidate username: %s', (username) => {
            expect(validator.validateUsername(username)).toBe(false);
        });
    });

    describe('invalid usernames starting with _ or -', () => {
        test.each([
            '-username',
            '_username'
        ])('should invalidate username: %s', (username) => {
            expect(validator.validateUsername(username)).toBe(false);
        });
    });

    describe('invalid usernames ending with _ or -', () => {
        test.each([
            'username-',
            'username_'
        ])('should invalidate username: %s', (username) => {
            expect(validator.validateUsername(username)).toBe(false);
        });
    });

    test('should invalidate empty usernames', () => {
        expect(validator.validateUsername('')).toBe(false);
    });

    describe('invalid usernames with only special characters', () => {
        test.each([
            '---',
            '___'
        ])('should invalidate username: %s', (username) => {
            expect(validator.validateUsername(username)).toBe(false);
        });
    });
});