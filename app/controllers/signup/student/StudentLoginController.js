import Student from "../../../models/Student";
import NameType from "../../../enums/NameType";

class StudentLoginController {

    student = new Student();

    static instance = null;

    signIn(email, password, navigation){
        this.student.signIn(email, password, navigation);
    }

    static getInstance(){
        if (this.instance == null){
            this.instance = new StudentLoginController()
        }

        return this.instance;
    }
}

export default StudentLoginController;