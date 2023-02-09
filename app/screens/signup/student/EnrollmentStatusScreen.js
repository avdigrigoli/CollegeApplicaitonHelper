import React from 'react';
import { StyleSheet, StatusBar, View, TextInput, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'

import TitleText from '../../../components/custom_textviews/TitleText';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';
import ButtonSecondary from '../../../components/buttons/ButtonSecondary';

import Color from '../../../values/Color';
import EnrollmentType from "../../../enums/EnrollmentType";
import StudentSignupController from '../../../controllers/signup/student/StudentSignupController';

const EnrollmentStatusScreen = ({route, navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.titleView}>
                <TitleText>I</TitleText>
                <TitleText>am currently</TitleText>
            </View>


            <View style={{flex: 0.05}}/>
            

            
            <View style={styles.backgroundLower}>
              
                <ButtonPrimary 
                extStyle={styles.buttonContainer}
                onPress={() => {
                    handleButtonHighSchool(navigation);
                }}
                >
                    <Text style={styles.registerButtonText}>In High School</Text>
                </ButtonPrimary>

            </View>


            <View style={styles.backgroundLower}>
              
              <ButtonPrimary 
              extStyle={styles.buttonContainer}
              onPress={() => {
                handleButtonHomeSchool(navigation);
              }}
              >
                  <Text style={styles.registerButtonText}>Home Schooled</Text>
              </ButtonPrimary>

          </View>



            <View style={styles.backgroundLower}>
              
                <ButtonPrimary 
                extStyle={styles.buttonContainer}
                onPress={() => {
                    handleButtonCollege(navigation);
                }}
                >
                    <Text style={styles.registerButtonText}>In College</Text>
                </ButtonPrimary>

            </View>




            <View style={styles.backgroundLower}>
              
              <ButtonPrimary 
              extStyle={styles.buttonContainer}
              onPress={() => {
                handleButtonNoSchool(navigation);
              }}
              >
                  <Text style={styles.registerButtonText}>Not enrolled</Text>
              </ButtonPrimary>

              

            </View>





            <View style={{flex: 0.1}}></View>



            <View style={styles.buttonView}>
            <Icon.Button
                        name="arrow-back"
                        size={45}
                        color={Color.secondary}
                        justifyContent="center"
                        borderRadius={90}
                        backgroundColor={Color.primary}
                        onPress={() =>{
                            handlePreviousButton(navigation);
                        }}
                    ></Icon.Button>
            </View>

            
        </SafeAreaView>
        
    );
}

function handleButtonHighSchool(navigation){
    StudentSignupController.getInstance().setEnrollmentType(EnrollmentType.HIGH_SCHOOL);
    navigation.navigate("SchoolNameScreen");
}

function handleButtonCollege(navigation){
    StudentSignupController.getInstance().setEnrollmentType(EnrollmentType.UNIVERSITY);
    navigation.navigate("SchoolNameScreen");
}


function handleButtonHomeSchool(navigation){
    StudentSignupController.getInstance().setEnrollmentType(EnrollmentType.HOME_SCHOOL);
    navigation.navigate("BirthdayScreen");
}

function handleButtonNoSchool(navigation){
    StudentSignupController.getInstance().setEnrollmentType(EnrollmentType.NONE);
    navigation.navigate("BirthdayScreen");
}


function handlePreviousButton(navigation){
    navigation.pop();
}

const styles = StyleSheet.create({
    button: {
        width: "20%",
        height: 70,
        borderRadius: 90
    },
    background: {
        flex: 0.8,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "grey"
    },
    backgroundLower: {
        flex: 0.09, 
        alignItems: "center",
        justifyContent: "flex-start"
    },
    buttonContainer: {
        width: "60%", 
        height: 50, 
        top: 40,
        alignItems: "center",
        alignContent: "space-around",
        justifyContent: "center",
    },
    buttonText: {
        color:Color.secondary,
        fontSize: 45,
        alignSelf: "center",
        top: 2
    },
    buttonView: {
        width: "100%",
        flex: 0.09, 
        flexWrap: "wrap", 
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignContent: "flex-end"
    },
    loginButtonText: {
        color: Color.primary,
        fontSize: 30
    },
    registerButtonText: {
        color: Color.secondary,
        fontSize: 30,
        top: -3
    },
    titleView: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flex: 0.30,
        left: "5%",
        color: Color.primary
    },
    text: {
        height: 20,
        left: "5%",
        fontSize: 15,
        width: "90%",
        borderBottomWidth: 0.5,
        borderBottomColor: Color.primary,
    } 
});
export default EnrollmentStatusScreen;