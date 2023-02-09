import Student from "../../../models/Student";
import NameType from "../../../enums/NameType";

class StudentSignupController {

    student = new Student();

    static instance = null;

    verifyBirthday(date){
        if (date != null){
            this.student.setBirthday(date);
            return true;
        }

        return false;
    }

    setEnrollmentType(type){
        this.student.setEnrollmentType(type);
    }

    verifyGender(gender){
        if (gender.length > 0){
            this.student.setGender(gender);
            return true;
        }

        return false;
    }

    verifyGraduationDate(date){
        if (date != null){
            this.student.setGraduationDate(date);
            return true;
        }

        return false;
    }

    verifySchoolName(name){
        if (name.length > 0){
            this.student.setSchoolName(name);
            return true;
        }

        return false;
    }

    verifyParentAccess(boolean){
        if (boolean != null){
            this.student.setParentAccess(boolean);
            return true;
        }

        return false;
    }

    verifyPassword(password){
        if (password.length >= 8 && this.containsSpecialChars(password) && this.containsNumber(password)){
            this.student.setPassword(password);
            return true;
        }

        return false;
    }

    isPasswordMatch(password){
        return password == this.student.getPassword();
    }

    containsSpecialChars(string){
        const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(string);
    }

    containsNumber(string){
        const numbers = /[1234567890]/;
        return numbers.test(string);
    }

    verifyEmail(email){
        var email_split = email.split(".");
        if (email.includes("@") &&
            (email_split.length > 1 && email_split[email_split.length - 1].length > 0)){
            this.student.setEmail(email);
            return true;
        }
        return false;
    }

    verifyName(name, type){
       if (name.length > 1){
       switch (type){
            case NameType.FIRST:
                this.student.setFirstName(name);
                break;
            case NameType.LAST:
                this.student.setLastName(name);
                break;
       }
            return true;
       }

       return false;
    }

    register(navigation){
        this.student.register(navigation);
    }

    signOut(){
        this.student.signOut();
    }

    static getInstance(){
        if (this.instance == null){
            this.instance = new StudentSignupController();
        }

        return this.instance;
    }
}

export default StudentSignupController;