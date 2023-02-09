import { NavigationContainer, StackActions } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Transitioner, Easing, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { initializeApp } from "firebase/app";

//app launch landing page
import WelcomeScreen from './app/screens/WelcomeScreen';

// Signup student screens
import BeginJourneyStudentScreen from './app/screens/signup/student/BeginJourneyStudentScreen';
import BirthdayScreen from './app/screens/signup/student/BirthdayScreen';
import EmailScreen from './app/screens/signup/student/EmailScreen';
import EnrollmentStatusScreen from './app/screens/signup/student/EnrollmentStatusScreen';
import FirstNameScreen from './app/screens/signup/student/FirstNameScreen';
import GenderScreen from './app/screens/signup/student/GenderScreen';
import GraduationDateScreen from './app/screens/signup/student/GraduationDateScreen';
import LastNameScreen from './app/screens/signup/student/LastNameScreen';
import ParentAccessScreen from './app/screens/signup/student/ParentAccessScreen';
import PasswordScreen from './app/screens/signup/student/PasswordScreen';
import PhoneNumberScreen from './app/screens/signup/student/PhoneNumberScreen';
import ReenterPasswordScreen from './app/screens/signup/student/ReenterPasswordScreen';
import SchoolNameScreen from './app/screens/signup/student/SchoolNameScreen'
import UserTypeScreen from './app/screens/signup/UserTypeScreen'

// Signup University screens
import AddressScreen from './app/screens/signup/university/AddressScreen';
import UndergradSizeScreen from './app/screens/signup/university/UndergradSizeScreen';
import StaffSizeScreen from './app/screens/signup/university/StaffSizeScreen';
import MajorScreen from './app/screens/signup/university/MajorScreen';
import MinorScreen from './app/screens/signup/university/MinorScreen';
import EnvironmentScreen from './app/screens/signup/university/EnvironmentScreen';
import ColorSchemePrimary from './app/screens/signup/university/ColorSchemePrimary';
import ColorSchemeSecondary from './app/screens/signup/university/ColorSchemeSecondary';
import ColorSchemeAccents from './app/screens/signup/university/ColorSchemeAccents';
import MascotScreen from './app/screens/signup/university/MascotScreen';
import FiveFunFactsScreen from './app/screens/signup/university/FiveFunFactsScreen';
import WhatKnownForScreen from './app/screens/signup/university/WhatKnownForScreen';
import BeginJourneyUniversityScreen from './app/screens/signup/university/BeginJourneyUniversityScreen';

// Signup Counselor screens
import CounselorEmailScreen from './app/screens/signup/counselor/CounselorEmailScreen';
import CounselorPasswordScreen from './app/screens/signup/counselor/CounselorPasswordScreen';
import HighSchoolScreen from './app/screens/signup/counselor/HighSchoolScreen';
import HighSchoolAddressScreen from './app/screens/signup/counselor/HighSchoolAddressScreen';
import NumberOfStudentsHighSchoolScreen from './app/screens/signup/counselor/NumberOfStudentsHighSchoolScreen';
import SchoolsStudentsAreInterestedInScreen from './app/screens/signup/counselor/SchoolsStudentsAreInterestedInScreen';
import ReligiousHighSchoolScreen from './app/screens/signup/counselor/ReligiousHighSchoolScreen';
import PublicHighSchoolScreen from './app/screens/signup/counselor/PublicHighSchoolScreen';
import BeginJourneyCounselorScreen from './app/screens/signup/counselor/BeginJourneyCounselorScreen';

// Profile screens
import UniversityProfileScreen from './app/screens/profile/university/UniversityProfileScreen';
import StudentProfileScreen from './app/screens/profile/student/StudentProfileScreen';
import SearchCityScreen from './app/screens/profile/student/SearchCityScreen';
import SearchLocationScreen from './app/screens/profile/student/SearchLocationScreen';
import SearchSizeScreen from './app/screens/profile/student/SearchSizeScreen';
import SearchMajorsScreen from './app/screens/profile/student/SearchMajorsScreen';
import SearchMinorsScreen from './app/screens/profile/student/SearchMinorsScreen';
import SearchFratScreen from './app/screens/profile/student/SearchFratScreen';
import SearchReligiousScreen from './app/screens/profile/student/SearchReligiousScreen';
import SearchPublicScreen from './app/screens/profile/student/SearchPublicScreen';
import SearchScreen from './app/screens/profile/student/SearchScreen';
import FooterContainer from './app/screens/profile/student/FooterContainer';
import CollegeScreen from './app/screens/profile/student/CollegeScreen';



import CounselorProfileScreen from './app/screens/profile/counselor/CounselorProfileScreen';

// Login screen
import LoginScreen from './app/screens/login/LoginScreen';

//firebase config
import { firebaseConfig } from './app/assets/FirebaseConfig';
import FavoriteScreen from './app/screens/profile/student/FavoriteScreen';
import MaybeScreen from './app/screens/profile/student/MaybeScreen';

const APP = initializeApp(firebaseConfig);

const STACK = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <STACK.Navigator
    
      
    >


      <STACK.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />

      <STACK.Screen 
        name="UserTypeScreen"
        component={UserTypeScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

      <STACK.Screen
        name="FirstNameScreen"
        component={FirstNameScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

      <STACK.Screen
        name="LastNameScreen"
        component={LastNameScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

      <STACK.Screen
        name="EmailScreen"
        component={EmailScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="ReenterPasswordScreen"
        component={ReenterPasswordScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="GraduationDateScreen"
        component={GraduationDateScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="PhoneNumberScreen"
        component={PhoneNumberScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="EnrollmentStatusScreen"
        component={EnrollmentStatusScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="SchoolNameScreen"
        component={SchoolNameScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="BirthdayScreen"
        component={BirthdayScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="GenderScreen"
        component={GenderScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="ParentAccessScreen"
        component={ParentAccessScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="BeginJourneyStudentScreen"
        component={BeginJourneyStudentScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="AddressScreen"
        component={AddressScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />



<STACK.Screen
        name="UndergradSizeScreen"
        component={UndergradSizeScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="StaffSizeScreen"
        component={StaffSizeScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="MajorScreen"
        component={MajorScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="SearchLocationScreen"
        component={SearchLocationScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="MinorScreen"
        component={MinorScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="SearchFratScreen"
        component={SearchFratScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="FooterContainer"
        component={FooterContainer}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="SearchPublicScreen"
        component={SearchPublicScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="CollegeScreen"
        component={CollegeScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="SearchScreen"
        component={SearchScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="SearchReligiousScreen"
        component={SearchReligiousScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="EnvironmentScreen"
        component={EnvironmentScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="ColorSchemePrimary"
        component={ColorSchemePrimary}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="ColorSchemeSecondary"
        component={ColorSchemeSecondary}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="ColorSchemeAccents"
        component={ColorSchemeAccents}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="MascotScreen"
        component={MascotScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


    
<STACK.Screen
        name="FiveFunFactsScreen"
        component={FiveFunFactsScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />


<STACK.Screen
        name="SearchSizeScreen"
        component={SearchSizeScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

    <STACK.Screen
        name="WhatKnownForScreen"
        component={WhatKnownForScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />    


<STACK.Screen
        name="HighSchoolScreen"
        component={HighSchoolScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />  


<STACK.Screen
        name="SearchCityScreen"
        component={SearchCityScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: upSlideAnimation,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}
      />  

<STACK.Screen
        name="HighSchoolAddressScreen"
        component={HighSchoolAddressScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />  


<STACK.Screen
        name="NumberOfStudentsHighSchoolScreen"
        component={NumberOfStudentsHighSchoolScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 


<STACK.Screen
        name="SearchMajorsScreen"
        component={SearchMajorsScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 


<STACK.Screen
        name="SearchMinorsScreen"
        component={SearchMinorsScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 


<STACK.Screen
        name="SchoolsStudentsAreInterestedInScreen"
        component={SchoolsStudentsAreInterestedInScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 

<STACK.Screen
        name="ReligiousHighSchoolScreen"
        component={ReligiousHighSchoolScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 

<STACK.Screen
        name="PublicHighSchoolScreen"
        component={PublicHighSchoolScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 

<STACK.Screen
        name="BeginJourneyCounselorScreen"
        component={BeginJourneyCounselorScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 

<STACK.Screen
        name="BeginJourneyUniversityScreen"
        component={BeginJourneyUniversityScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 
<STACK.Screen
        name="UniversityProfileScreen"
        component={UniversityProfileScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />

<STACK.Screen
        name="StudentProfileScreen"
        component={StudentProfileScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 

<STACK.Screen
        name="CounselorProfileScreen"
        component={CounselorProfileScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 


<STACK.Screen
        name="CounselorEmailScreen"
        component={CounselorEmailScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 


<STACK.Screen
        name="CounselorPasswordScreen"
        component={CounselorPasswordScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 


<STACK.Screen
        name="LoginScreen"
        component={LoginScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 

<STACK.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 
      
      <STACK.Screen
        name="MaybeScreen"
        component={MaybeScreen}
        defaultNavigationOptions={{
          gestureEnabled: true,
          gestureResponseDistance: {
            horizontal: Dimensions.get("window").width
          }
        }}
        options={{
          headerShown: false,
          transitionSpec: {
            open: rightSlideAnim,
            close: leftSlideAnim
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      /> 


    </STACK.Navigator>


  </NavigationContainer>
  );
}

const leftSlideAnim = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear
  }
}

const rightSlideAnim = {
  animation: "timing",
  config: {
    duration: 200,
    easing: Easing.linear
  }
}

const upSlideAnimation = {
  animation: "timing",
  config: {
    duration: 200,
    easing: Easing.linear
  }
}

export default App;
