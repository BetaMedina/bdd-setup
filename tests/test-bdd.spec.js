function passwordValidator() {
  return {
    password: '',
    setPassword: (newPassword) => {
      this.password = newPassword;
    },
    validatePassword: (passwordToValidate) => {
      return this.password === passwordToValidate
    }
  }
}
let sut = passwordValidator();
describe('Feature: Validate password', () => {
  beforeEach(() => {
    sut = passwordValidator();
  });
  scenario('Entering a correct password', () => {
    given('I have previously created a password', () => {
      sut.setPassword('1234');

      when('I enter my password correctly', () => {
        const accessGranted = sut.validatePassword('1234');

        then('I should be granted access', () => {
          expect(accessGranted).toBeTruthy();
        });
      });
    });
    given("I haven't previously created a password", () => {
      sut.setPassword('12345');

      when('I enter my inexistent password', () => {
        const accessGranted = sut.validatePassword('1234');

        then('I should be blocked', () => {
          expect(accessGranted).toBeFalsy();
        });
      });
    });
  });
});