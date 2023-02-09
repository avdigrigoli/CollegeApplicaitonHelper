import Student from "../../../models/Student";
import NameType from "../../../enums/NameType";
import { getAuth } from "firebase/auth";


class StudentProfileController {
    student;

    static instance;

    setStudent(student){
        this.student = student;
    }

    init() {
        console.log("init student");
        if (this.student != null){
            return;
        }
        this.student = new Student();
        this.student.read(getAuth().currentUser.uid);
    }

    addFavorite(object){
        this.student.addFavorite(object);
    }

    addMaybe(object){
        this.student.addMaybe(object);
    }

    getFavorites(){
        return this.student.getFavorites();
    }

    getMaybe(){
        return this.student.getMaybe();
    }

    getAge(){
        var today = new Date();
        var birthday = new Date(this.student.getBirthday());
        var age = today.getFullYear() - birthday.getFullYear();
        var m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        return age;
    }

    getEmail(){
        return this.student.getEmail();
    }

    getSchoolName(){
        return this.student.getSchoolName();
    }

    getSchoolYear(){
        var gradYear = new Date(this.student.getGraduationDate()).getFullYear();
        var thisYear = new Date().getFullYear();
        var yearsLeft = gradYear - thisYear;
        var month = new Date().getMonth();

        if (yearsLeft <= 0 && month >= 5){
            return "Graduated";
        }
        else if (yearsLeft == 0 || (yearsLeft == 1 && month >= 9)){
            return "Senior";
        }else if (yearsLeft == 1 || (yearsLeft == 2 && month >= 9)){
            return "Junior";
        }else if (yearsLeft == 2 || (yearsLeft == 3 && month >= 9)){
            return "Junior";
        }else{
            return "Freshman";
        }
    }

    getGender(){
        return this.student.getGender();
    }

    getGraduationDate(){
        return this.student.getGraduationDate();
    }

    getBirthday(){
        return this.student.getBirthday();
    }

    getName(){
        return this.student.getFirstName() + " " + this.student.getLastName();// + this.student.getLastName();
    }

    static getInstance(){
        if (this.instance == null){
            this.instance = new StudentProfileController();
        }

        return this.instance;
    }
}

export default StudentProfileController;