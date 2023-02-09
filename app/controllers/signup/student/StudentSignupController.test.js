import StudentSignupController from './StudentSignupController.js';
import NameType from '../../../enums/NameType';

// Name function
test('First name is valid', () => {
    expect(StudentSignupController.getInstance().verifyName("Drew", NameType.FIRST)).toBe(true)
});

// Name function
test('Last name is valid', () => {
    expect(StudentSignupController.getInstance().verifyName("Sly", NameType.LAST)).toBe(true)
});

// Name function
test('Name is valid', () => {
    expect(StudentSignupController.getInstance().verifyName("", NameType.FIRST)).toBe(false)
});

// Birthday function
test('birthday is valid', () => {
    expect(StudentSignupController.getInstance().verifyBirthday(new Date())).toBe(true)
});

// Birthday function
test('birthday is invalid', () => {
    expect(StudentSignupController.getInstance().verifyBirthday(null)).toBe(false)
});

// Verifying gender
test('Gender has been verified valid', () => {
    expect(StudentSignupController.getInstance().verifyGender("Male")).toBe(true)
});

// Verifying gender
test('Gender has been verified invalid', () => {
    expect(StudentSignupController.getInstance().verifyGender("")).toBe(false)
});

// Verifying graduation date
test('Graduation date has been verified valid', () => {
    expect(StudentSignupController.getInstance().verifyGraduationDate(new Date())).toBe(true)
});

// Verifying graduation date
test('Graduation date has been verified invalid', () => {
    expect(StudentSignupController.getInstance().verifyGraduationDate(null)).toBe(false)
});

// Verifying school name
test('School name has been verified true', () => {
    expect(StudentSignupController.getInstance().verifySchoolName("Medfield High School")).toBe(true)
}); 

// Verifying school name
test('School name has been verified false', () => {
    expect(StudentSignupController.getInstance().verifySchoolName("")).toBe(false)
}); 

// Verifying parent access 
test('Parent access has been verified true', () => {
    expect(StudentSignupController.getInstance().verifyParentAccess(true)).toBe(true)
}); 

// Verifying parent access 
test('Parent access has been verified false', () => {
    expect(StudentSignupController.getInstance().verifyParentAccess(null)).toBe(false)
}); 

// Verifying password 
test('Password has been verified valid', () => {
    expect(StudentSignupController.getInstance().verifyPassword("Password#123")).toBe(true)
}); 

// Verifying password 
test('Password has been verified invalid', () => {
    expect(StudentSignupController.getInstance().verifyPassword("BadPasswordLol")).toBe(false)
}); 

// Verifying password 
test('Passwords do match', () => {
    StudentSignupController.getInstance().verifyPassword("Password#12345")
    expect(StudentSignupController.getInstance().isPasswordMatch("Password#12345")).toBe(true)
}); 

// Verifying password 
test('Passwords do not match', () => {
    StudentSignupController.getInstance().verifyPassword("Password#12345")
    expect(StudentSignupController.getInstance().isPasswordMatch("Password#67890")).toBe(false)
});

// Verifying if the special characters has been contained 
test('String contains special characters', () => {
    expect(StudentSignupController.getInstance().containsSpecialChars("*words")).toBe(true)
}); 

// Verifying if the special characters has been contained 
test('String does not contain special characters', () => {
    expect(StudentSignupController.getInstance().containsSpecialChars("words")).toBe(false)
}); 


// Verifying if the password contains the correct numbers 
test('String contains numbers', () => {
    expect(StudentSignupController.getInstance().containsNumber("2words")).toBe(true)
});

// Verifying if the password contains the correct numbers 
test('String does not contain numbers', () => {
    expect(StudentSignupController.getInstance().containsNumber("words")).toBe(false)
});

// Verifying if the email has been verified 
test('The email has been verified valid', () => {
    expect(StudentSignupController.getInstance().verifyEmail("dsly@whispwriting.net")).toBe(true)
});

// Verifying if the email has been verified 
test('The email has been verified invalid', () => {
    expect(StudentSignupController.getInstance().verifyEmail("dsly")).toBe(false)
});