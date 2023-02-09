import React from 'react';
import { 
    SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    View, 
    Text,
    Transitioner, 
    Easing} from 'react-native';

import TitleText from '../../components/custom_textviews/TitleText';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import Color from '../../values/Color';

const UserTypeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar 
            backgroundColor="#f1f1f1"/>

            <View style={styles.titleView}>
                <TitleText>I am a...</TitleText>
            </View>

            <View style={styles.buttonView}>
                <View 
                style={[styles.buttonViewInner, {flex: 0.4, justifyContent: "flex-end"}]}>
                    <ButtonPrimary 
                    extStyle={styles.button}
                    onPress={() => {
                        handleStudentPressed(navigation);
                    }}>
                        <Text style={styles.buttonText}>Student</Text>
                    </ButtonPrimary>
                </View>

                <View style={[styles.buttonViewInner, {flex: 0.2, justifyContent: "center"}]}>
                    <ButtonPrimary extStyle={styles.button}
                    onPress={() => {
                        handleCounselorPressed(navigation);
                    }}>
                        <Text style={styles.buttonText}>Counselor</Text>
                    </ButtonPrimary>
                </View>

                <View style={[styles.buttonViewInner, {flex: 0.4, justifyContent: "flex-start"}]}>
                    <ButtonPrimary extStyle={styles.button}
                    onPress={() => {
                        handleUniversityPressed(navigation);
                    }}>
                        <Text style={styles.buttonText}>University</Text>
                    </ButtonPrimary>
                </View>
            </View>
        </SafeAreaView>
    );
}

function handleStudentPressed(navigation){
    navigation.navigate('FirstNameScreen');
}

function handleUniversityPressed(navigation){
    navigation.navigate('AddressScreen');
}

function handleCounselorPressed(navigation){
    navigation.navigate('CounselorEmailScreen');
}

const styles = StyleSheet.create({
    button: {
        width: "60%",
        height: 50,
        alignItems: "center",
        alignContent: "space-around",
        justifyContent: "center",
    },
    buttonView: {
        alignItems: "center",
        flex: 0.65
    },
    buttonViewInner: {
        width: "100%",
        alignItems: "center"
    },
    buttonText: {
        color: Color.secondary,
        fontSize: 30,
        top: -3
    },
    titleView: {
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 0.35
    },
});

export default UserTypeScreen;