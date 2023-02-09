import StudentProfileController from "./StudentProfileController";
import Student from '../.././models/Student'

// Favorites functions
test('favorites list holds stuff', () => {
    StudentProfileController.getInstance().setStudent(new Student());
    StudentProfileController.getInstance().addFavorite("Hello");
    expect(StudentProfileController.getInstance().getFavorites())[0].toBe("Hello")
});