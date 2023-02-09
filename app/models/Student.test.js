import Student from './Student.js';
import EnrollmentType from '../enums/EnrollmentType';

var student = new Student();

// Birthdat function
test('brthday sets correctly', () => {
    var bday = "04-06-1999";
    student.setBirthday(bday);
    expect(student.getBirthday()).toBe(bday);
});

// Email function
test('email sets correctly', () => {
    var email = "dsly@whispwriting.net";
    student.setEmail(email);
    expect(student.getEmail()).toBe(email);
});

// Enrollment function
test('enrollment sets correctly', () => {
    student.setEnrollmentType(EnrollmentType.HIGH_SCHOOL);
    expect(student.getEnrollmentType()).toBe(EnrollmentType.HIGH_SCHOOL);
});

// First name function
test('first name sets correctly', () => {
    var name = "Drew";
    student.setFirstName(name);
    expect(student.getFirstName()).toBe(name);
});

// Gender function
test('gender sets correctly', () => {
    var gender = "Male";
    student.setGender(gender);
    expect(student.getGender()).toBe(gender);
});

// Grad date function
test('grad date sets correctly', () => {
    var date = "05-14-2022";
    student.setGraduationDate(date);
    expect(student.getGraduationDate()).toBe(date);
});

// Last name function
test('last name sets correctly', () => {
    var name = "Sly";
    student.setLastName(name);
    expect(student.getLastName()).toBe(name);
});

// Parent access function
test('parent access sets correctly', () => {
    var pa = true;
    student.setParentAccess(pa);
    expect(student.getParentAccess()).toBe(pa);
});

// Password function
test('password sets correctly', () => {
    var password = "password";
    student.setPassword(password);
    expect(student.getPassword()).toBe(password);
});

// School name function
test('school name sets correctly', () => {
    var name = "Medfield HS";
    student.setSchoolName(name);
    expect(student.getSchoolname()).toBe(name);
});