import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Image,
    Alert,
    ImageBackground
 } from 'react-native';

 import {getAuth} from 'firebase/auth';

 import ButtonPrimary from '../components/buttons/ButtonPrimary';
 import ButtonSecondary from '../components/buttons/ButtonSecondary';
 import Color from '../values/Color';
 import StudentProfileController from '../controllers/signup/student/StudentProfileController';
import ButtonTertiary from '../components/buttons/ButtonTertiary';

const WelcomeScreen = ({navigation}) => {
    checkIfLoggedIn(navigation);
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar 
            backgroundColor={Color.quaternary}
            />
            <ImageBackground source={require("../assets/gradient.jpeg")} style={{flex: 1}}>


<Image source={require("../assets/Logo.png")} 

style = {[{ width: 250, height: 250, alignSelf: 'center'}, styles.logoBorder]}

/>


<Text style={styles.mottoText}>Strong Truths Well Lived</Text>


            <View style={styles.background}>
                <ButtonPrimary
                extStyle={styles.buttonContainerLogin}
                onPress={() => {
                    handleLoginPress(navigation);
                }}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </ButtonPrimary>
            </View>


            <View style={styles.backgroundLower}>
                <ButtonTertiary 
                extStyle={styles.buttonContainer}
                onPress={() => {
                    handleRegisterPress(navigation);
                }}
                >
                    <Text style={styles.registerButtonText}>Register</Text>
                </ButtonTertiary>
            </View>
            </ImageBackground>
            </SafeAreaView>
    );
}

function checkIfLoggedIn(navigation){
    getAuth().onAuthStateChanged(function(user){
        if (user){
           isLoggedIn(navigation);
        }
    });
}

async function isLoggedIn(navigation){
    StudentProfileController.getInstance().init();
        var count = 0;
        while (StudentProfileController.getInstance().getEmail() == null){
            await sleep(1000);
            count++;
            if (count >= 60){
                Alert.alert("Failed to load data", "Data from the saved user could not be loaded");
                return;
            }
        }
        navigation.navigate("StudentProfileScreen");
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

function handleRegisterPress(navigation){
    navigation.navigate('UserTypeScreen');
}

function handleLoginPress(navigation){
    navigation.navigate('LoginScreen');
}

const styles = StyleSheet.create({
    background: {
        flex: 0.8,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    logoBorder: {
        borderRadius: 50
    },

    backgroundLower: {
        flex: 0.2, 
        alignItems: "center",
        justifyContent: "flex-start"
    },
    buttonContainer: {
        width: "40%", 
        height: 50, 
        top: 40,
        alignItems: "center",
        alignContent: "space-around",
        justifyContent: "center",
    },
    buttonContainerLogin: {
        width: "40%", 
        height: 50, 
        alignItems: "center",
        alignContent: "space-around",
        justifyContent: "center",
    },
    loginButtonText: {
        color: Color.secondary,
        fontSize: 30,
        top: -3,
    },
    registerButtonText: {
        color: Color.secondary,
        fontSize: 30,
        top: -3
    },
    mottoText: {
        alignSelf: "center",
        fontSize: 25,
        top: 15,
        color: '#000000',
    }
});

export default WelcomeScreen;