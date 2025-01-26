export default class Validator {
    validateUsername(username) {
        const usernameTemplate = /^(?!.*[0-9]{4})(?![_-])[a-zA-Z0-9_-]*[a-zA-Z0-9]$/
;

        return usernameTemplate.test(username);
    }
}