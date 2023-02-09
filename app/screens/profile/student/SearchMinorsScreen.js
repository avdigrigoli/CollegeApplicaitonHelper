import React from 'react';
import { StyleSheet, StatusBar, View, TextInput, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'

import TitleText from '../../../components/custom_textviews/TitleText';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';
import Color from '../../../values/Color';
import StudentSignupController from '../../../controllers/signup/student/StudentSignupController';

var inputText = "";

const SearchMinorsScreen = ({route, navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar 
            backgroundColor="#f1f1f1"/>

            <View style={styles.titleView}>
                <TitleText>Please choose</TitleText>
                <TitleText>the minors you'd</TitleText>
                <TitleText>prefer to have:</TitleText>

            </View>

            <View style={{flex: 0.05}}/>

            <View style={{flex: 0.2}}>
                <TextInput 
                    style={styles.input}
                    placeholder="I want to study..."
                    onChangeText={(text) => {
                        inputText = text;
                    }}

                    
                />
                <Text style={styles.text}> Please enter the minor you'd intend to study
                </Text>

                <Text style={styles.text}> account if you need to later
                </Text>

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
                    <Icon.Button
                        name="arrow-forward"
                        size={45}
                        color={Color.secondary}
                        justifyContent="center"
                        borderRadius={90}
                        backgroundColor={Color.primary}
                        onPress={() =>{
                            handleNextButton(navigation);
                        }}
                    ></Icon.Button>
            </View>

            <View style={{flex: 0.1}}></View>
        </SafeAreaView>
    );
}



function handleNextButton(navigation){
    navigation.navigate("SearchScreen");

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

export default SearchMinorsScreen;