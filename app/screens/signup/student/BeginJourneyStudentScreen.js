import React from 'react';
import { StyleSheet, StatusBar, View, TextInput, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'

import TitleText from '../../../components/custom_textviews/TitleText';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';
import Color from '../../../values/Color';
import StudentSignupController from '../../../controllers/signup/student/StudentSignupController';
import StudentProfileController from '../../../controllers/signup/student/StudentProfileController';

const BeginJourneyStudentScreen = ({route, navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar 
            backgroundColor="#f1f1f1"/>

            <View style={styles.titleView}>
                <TitleText>Begin</TitleText>
                <TitleText>my Journey</TitleText>
            </View>

            <View style={{flex: 0.05}}/>

            <View style={{flex: 0.2}}>
    
            </View>

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
                <ButtonPrimary 
                extStyle={styles.buttonRight}
                onPress={() => {
                    handleNextButton(navigation);
                }}>
                    <Text style={styles.buttonText}>Finish</Text>
                </ButtonPrimary>
            </View>

            <View style={{flex: 0.1}}></View>
        </SafeAreaView>
    );
}

function handleNextButton(navigation){
    console.log(StudentSignupController.getInstance().student);
    StudentProfileController.getInstance().student = StudentSignupController.getInstance().student;
    StudentSignupController.getInstance().register(navigation);
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
    buttonRight: {
        width: "50%",
        height: 70,
        borderRadius: 90
    },
    buttonText: {
        color:Color.secondary, 
        fontSize: 45, 
        alignSelf: "center", 
        top: 2
    },
    buttonView: {
        width: "100%",
        flex: 0.35, 
        flexWrap: "wrap", 
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignContent: "flex-end"
    },
    input: {
        height: 40,
        left: "5%",
        textDecorationLine: "underline",
        fontSize: 20,
        width: "90%",
        borderBottomWidth: 0.5,
        borderBottomColor: Color.primary,
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

export default BeginJourneyStudentScreen;