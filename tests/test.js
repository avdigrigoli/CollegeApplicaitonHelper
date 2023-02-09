import React from 'react';
//import renderer from 'react-test-renderer';
import Student from '../app/models/Student';

test('setBirthdat sets the birthday', () => {
  var student = new Student();
  var date = new Date();
  student.setBirthday(date);
  expect(student.getBirthday()).toEqual(date);
});