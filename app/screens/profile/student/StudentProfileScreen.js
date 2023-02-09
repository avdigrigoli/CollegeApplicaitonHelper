import React from 'react';
import { StyleSheet, StatusBar, View, TextInput, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'

import TitleText from '../../../components/custom_textviews/TitleText';
import ButtonSecondary from '../../../components/buttons/ButtonSecondary';
import Color from '../../../values/Color';
import ProfileHeader from '../../../components/headers/ProfileHeader';
import StudentSignupController from '../../../controllers/signup/student/StudentSignupController';
import StudentProfileController from '../../../controllers/signup/student/StudentProfileController';
//import FooterContainer from '../FooterContainer';
import ProfileFooter from '../../../components/footers/ProfileFooter';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';

//import maybe from '../../../assets/maybe.png';


var inputText;
var controller;

const StudentProfileScreen = ({navigation}) => {
	StudentProfileController.getInstance().init();

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
            <StatusBar 
            backgroundColor={Color.primary}/>

			<ProfileHeader extStyle={{width: "100%", height: "12%", justifyContent: 'center'}}>
				<TitleText extStyle={{color: Color.secondary}}>{StudentProfileController.getInstance().getName()}</TitleText>
				
				<Text style={{color: Color.secondary}}>{StudentProfileController.getInstance().getEmail()}</Text>
			</ProfileHeader>

			<View style={[styles.card, styles.shadowElevation]}>
				<View style={styles.detailTextView}>
					<Text style={styles.detailTextLeft}> Age:</Text>
					<Text style={styles.detailTextRight}>{StudentProfileController.getInstance().getAge()} </Text>
				</View>

				<View style={styles.detailTextView}>	
					<Text style={styles.detailTextLeft}> School:</Text>
					<Text style={styles.detailTextRight}>{StudentProfileController.getInstance().getSchoolName()} </Text>
				</View>

				<View style={styles.detailTextView}>
					<Text style={styles.detailTextLeft}> Graduation Date:</Text>
					<Text style={styles.detailTextRight}>{StudentProfileController.getInstance().getGraduationDate()} </Text>
				</View>

				<View style={styles.detailTextView}>
					<Text style={styles.detailTextLeft}> Birthday:</Text>
					<Text style={styles.detailTextRight}>{StudentProfileController.getInstance().getBirthday()} </Text>
				</View>

				<View style={styles.detailTextView}>
					<Text style={styles.detailTextLeft}> Gender:</Text>
					<Text style={styles.detailTextRight}>{StudentProfileController.getInstance().getGender()} </Text>
				</View>

				<View style={styles.detailTextView}>
					<Text style={styles.detailTextLeft}> Grade:</Text>
					<Text style={styles.detailTextRight}>{StudentProfileController.getInstance().getSchoolYear()} </Text>
				</View>

                <View style={styles.detailTextView}>
                <ButtonPrimary 
                extStyle={styles.buttonContainer}
                onPress={() => {
                    handleSignoutButton(navigation);
                }}
                >
                    <Text style={styles.buttonText}>Log Out</Text>
                </ButtonPrimary>
                </View>
			</View>

		<ProfileFooter navigator={navigation} extStyle={{width: "100%", height: "10%", justifyContent: 'center'}}/>	
        </SafeAreaView>
    );
}

function handleFavoritesButton(navigation){
    navigation.navigate("FavoriteScreen");
}

function handleMaybeButton(navigation){
    navigation.navigate("SearchCityScreen");
}

function handleSearchButton(navigation){
    navigation.navigate("SearchCityScreen");
}

function handleSignoutButton(navigation){
	StudentSignupController.getInstance().signOut();
    navigation.popToTop();
}

const styles = StyleSheet.create({
    button: {
        width: "20%",
        height: 70,
        borderRadius: 90
    },
    buttonText: {
        color: Color.secondary, 
        fontSize: 20, 
        alignSelf: "center",
        top: -2
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
	},
	buttonContainer: {
        width: "40%", 
        height: 50, 
        top: 40,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginLeft: Dimensions.get("window").width / 4
    },
	card: {
		backgroundColor: 'white',
		borderRadius: 20,
    	paddingVertical: 45,
    	width: '82%',
		height: "73%",
		marginVertical: 20,
		justifyContent: 'space-between'
	},
	detailTextView: {
		paddingTop: 10, 
		paddingBottom: 10,
		flexDirection: 'row',
		width: "100%"
	},
	detailTextLeft: {
		fontSize:18,
		color: '#979797',
		alignContent: 'flex-start'
	},
	detailTextRight: {
		fontSize:18,
		color: '#979797',
		marginLeft: 'auto'
	},
	shadowProp: {
		shadowColor: '#171717',
		shadowOffset: {width: -2, height: 4},
		shadowOpacity: 0.2,
		shadowRadius: 3
	},
	shadowElevation: {
		elevation: 20,
		shadowColor: '#171717'
	}
});

export default StudentProfileScreen;