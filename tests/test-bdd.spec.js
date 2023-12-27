function passwordValidator() {
  return {
    password: '',
    setPassword: (newPassword) => {
      this.password = newPassword;
    },
    validatePassword: (passwordToValidate) => this.password === passwordToValidate
  }
}
describe('Feature: Validate password', () => {
  let sut = passwordValidator();
  let accessGranted = false;

  beforeEach(() => {
    sut = passwordValidator();
  });

  scenario('Entering a correct password', () => {
    given('I have previously created a password', () => {
      sut.setPassword('1234');

      when('I enter my password correctly', () => {
        accessGranted = sut.validatePassword('1234');

        then('I should be granted access', () => {
          expect(accessGranted).toBeTruthy();
        });
      });
    });
  });
});