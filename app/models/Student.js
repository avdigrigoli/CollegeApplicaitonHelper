import {initializeApp} from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword } from '@firebase/auth';
import { getFirestore, addDoc, doc, getDoc, setDoc, collection } from "firebase/firestore";
import { Alert } from "react-native";

import { firebaseConfig } from '../assets/FirebaseConfig';

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default class Student {
    #birthday;
    #email;
    #enrollmentType;
    #firstName;
    #gender;
    #graduationDate;
    #lastName;
    #parentAccess;
    #password;
    #schoolName;
    #favoritesList = [];
    #maybeList = [];

    addFavorite(object){
        this.#favoritesList[this.#favoritesList.length] = object;
        console.log(this.#favoritesList);
    }

    getFavorites(){
        return this.#favoritesList;
    }

    addMaybe(object){
        this.#maybeList[this.#maybeList.length] = object;
    }

    getMaybe(){
        return this.#maybeList;
    }

    getAge(){
        return new Date();
    }

    setBirthday(date){
        this.#birthday = date;
    }

    getBirthday(){
        return this.#birthday;
    }

    setEmail(email){
        this.#email = email;
    }

    getEmail(){
        return this.#email;
    }

    setEnrollmentType(type){
        this.#enrollmentType = type;
    }

    getEnrollmentType(){
        return this.#enrollmentType;
    }

    setFirstName(name){
        this.#firstName = name;
    }

    getFirstName(){
        return this.#firstName;
    }

    setGender(gender){
        this.#gender = gender;
    }

    getGender(){
        return this.#gender;
    }

    setGraduationDate(date){
        this.#graduationDate = date;
    }

    getGraduationDate(){
        return this.#graduationDate;
    }

    setLastName(name){
        this.#lastName = name;
    }

    getLastName(){
        return this.#lastName;
    }

    setParentAccess(boolean){
        this.#parentAccess = boolean;
    }

    getParentAccess(){
        return this.#parentAccess;
    }

    setPassword(password){
        this.#password = password;
    }

    getPassword(){
        return this.#password;
    }

    setSchoolName(school){
        this.#schoolName = school;
    }

    getSchoolName(){
        return this.#schoolName;
    }

    register(navigation){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.#email, this.#password)
        .then((userCredential) => {
            console.log("registered and signed in");
            this.registerHelper(navigation);
            return true;
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use'){
                console.log("email in use");
                Alert.alert("Registration Failed", "Sorry, we could not create an account with that email");
                return false;
            }

            if (error.code === 'auth/invalid-email'){
                console.log('emai; invalid');
                return false;
            }

            console.error(error);
        });
    }

    async registerHelper(navigation){
        await this.write();
        navigation.navigate("StudentProfileScreen");
    }

    signOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
            return true;
        }).catch((error) => {
            return false;
        })
    }

    signIn(email, password, navigation){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            this.read(user.uid);
            navigation.navigate("StudentProfileScreen");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert("Sign-in failed", "We were unable to sign you in. Please check your username and password");
        });;
    }

    write = async () => {
        try{
            const docRef = await setDoc(doc(db, "Students", getAuth().currentUser.uid), {
                birthday: this.#birthday,
                email: this.#email,
                enrollmentType: this.#enrollmentType,
                firstName: this.#firstName,
                gender: this.#gender,
                graduationDate: this.#graduationDate,
                lastName: this.#lastName,
                parentAccess: this.#parentAccess,
                schoolName: this.#schoolName
            })
            console.log("Document written with ID: ", getAuth.currentUser.uid);
            return true;
        } catch (e) {
            console.error("Error adding document: ", e);
            return false;
        }
    }

    read = async (id) => {
        var docRef = doc(db, "Students", id);
        var docSnap = await getDoc(docRef);

        if (docSnap.exists()){
            this.#birthday = docSnap.data().birthday;
            this.#email = docSnap.data().email;
            this.#enrollmentType = docSnap.data().enrollmentType;
            this.#firstName = docSnap.data().firstName;
            this.#gender = docSnap.data().gender;
            this.#graduationDate = docSnap.data().graduationDate;
            this.#lastName = docSnap.data().lastName;
            this.#parentAccess = docSnap.data().parentAccess;
            this.#schoolName = docSnap.data().schoolName;
        }
    }
}