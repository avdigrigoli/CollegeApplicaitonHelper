import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, Alert, ImageBackground } from 'react-native';
import FlipCard from '../../../components/cards/FlipCard';

import ProfileFooter from '../../../components/footers/ProfileFooter';
import Icon from 'react-native-vector-icons/Ionicons'
import Color from '../../../values/Color';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';
import StudentProfileController from '../../../controllers/signup/student/StudentProfileController';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Users = [
  { id: "1", uri: require('../../../assets/Template.png'), banner: require('../../../assets/Template1.png'), back: <View style={{width: "100%", height: "100%", backgroundColor: "#cccccc", borderRadius: 20, justifyContent: 'space-evenly'}}>
  <Text style={{fontSize: 25}}>  • Avg Cost after aid: $53,430</Text>
  <Text style={{fontSize: 25}}>  • Acceptance Rate: 80.2%</Text>
  <Text style={{fontSize: 25}}>  • Location: Baltimore, Maryland</Text>
  <Text style={{fontSize: 25}}>  • Graduation Rate: 81%</Text>
  <Text style={{fontSize: 25}}>  • Average GPA: 3.42</Text>
  <Text style={{fontSize: 25}}>  • Male / Female Ratio: 42%/58%</Text>
  <Text style={{fontSize: 25}}>  • Number of undergrads: 3,822</Text>
</View> },
  { id: "2", uri: require('../../../assets/UMBC.png'), banner: require('../../../assets/UMBC1.png'), back: <View style={{width: "100%", height: "100%", backgroundColor: "#cccccc", borderRadius: 20, justifyContent: 'space-evenly'}}>
  <Text style={{fontSize: 25}}>  • Avg Cost after aid: $25,000</Text>
  <Text style={{fontSize: 25}}>  • Acceptance Rate: 69.5%</Text>
  <Text style={{fontSize: 25}}>  • Location: Baltimore, Maryland</Text>
  <Text style={{fontSize: 25}}>  • Graduation Rate: 67.2%</Text>
  <Text style={{fontSize: 25}}>  • Average GPA: 3.9</Text>
  <Text style={{fontSize: 25}}>  • Male / Female Ratio: 45%/55%</Text>
  <Text style={{fontSize: 25}}>  • Number of undergrads: 10,932</Text>
</View> },
  { id: "3", uri: require('../../../assets/UMD.png'), banner: require('../../../assets/UMD1.png'), back: <View style={{width: "100%", height: "100%", backgroundColor: "#cccccc", borderRadius: 20, justifyContent: 'space-evenly'}}>
  <Text style={{fontSize: 25}}>  • Avg Cost after aid: $19,000</Text>
  <Text style={{fontSize: 25}}>  • Acceptance Rate: 51%</Text>
  <Text style={{fontSize: 25}}>  • Location: College Park, Maryland</Text>
  <Text style={{fontSize: 25}}>  • Graduation Rate: 84.5%</Text>
  <Text style={{fontSize: 25}}>  • Average GPA: 4.32</Text>
  <Text style={{fontSize: 25}}>  • Male / Female Ratio: 52%/48%</Text>
  <Text style={{fontSize: 25}}>  • Number of undergrads: 30,875</Text>
</View> },
  { id: "4", uri: require('../../../assets/Towson.png'), banner: require('../../../assets/Towson1.png'), back: <View style={{width: "100%", height: "100%", backgroundColor: "#cccccc", borderRadius: 20, justifyContent: 'space-evenly'}}>
  <Text style={{fontSize: 25}}>  • Avg Cost after aid: $53,430</Text>
  <Text style={{fontSize: 25}}>  • Acceptance Rate: 80.2%</Text>
  <Text style={{fontSize: 25}}>  • Location: Baltimore, Maryland</Text>
  <Text style={{fontSize: 25}}>  • Graduation Rate: 81%</Text>
  <Text style={{fontSize: 25}}>  • Average GPA: 3.42</Text>
  <Text style={{fontSize: 25}}>  • Male / Female Ratio: 42%/58%</Text>
  <Text style={{fontSize: 25}}>  • Number of undergrads: 3,822</Text>
</View> },
{ id: "5", uri: require('../../../assets/JHU.png'), banner: require('../../../assets/JHU1.png'), back: <View style={{width: "100%", height: "100%", backgroundColor: "#cccccc", borderRadius: 20, justifyContent: 'space-evenly'}}>
<Text style={{fontSize: 25}}>  • Avg Cost after aid: $52,000</Text>
<Text style={{fontSize: 25}}>  • Acceptance Rate: 11.1%</Text>
<Text style={{fontSize: 25}}>  • Location: Baltimore, Maryland</Text>
<Text style={{fontSize: 25}}>  • Graduation Rate: 92.8%</Text>
<Text style={{fontSize: 25}}>  • Average GPA: 3.92</Text>
<Text style={{fontSize: 25}}>  • Male / Female Ratio: 45%/55%</Text>
<Text style={{fontSize: 25}}>  • Number of undergrads: 6,331</Text>
</View> },
 // { id: "5", uri: require('../../../assets/5.jpg'), banner: require('../../../assets/5a.jpg') },
]

const lst = {};

var navigationn;

export default class SearchScreen extends React.Component {

  constructor({navigation}) {
    super()

    navigationn = navigation;
    
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }


    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH /2 ,0, SCREEN_WIDTH /2],
      outputRange: ['-30deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }
    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }
  
  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
            console.log("Swiped right");
            StudentProfileController.getInstance().addFavorite(Users[this.state.currentIndex - 1].banner);
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
            StudentProfileController.getInstance().addMaybe(Users[this.state.currentIndex - 1].banner);
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderUsers = () => {

    return Users.map((item, i) => {


      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: "95%", width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>

            <FlipCard 
              friction={36}
              perspective={1000}
              flipHorizontal={true}
              flipVertical={false}
              flip={false}
              clickable={true}
              onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
            >
              {/* Face Side */}
              <View style={{width: "100%", height: "100%"}}>
              <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />
              </View>
              {/* Back Side */}
              {item.back}
            </FlipCard>

          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: "95%", width: SCREEN_WIDTH, padding: 10, position: 'absolute'
            }]}>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>

            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />

          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    const image = { uri: "../../../assets/gradient.jpeg" };
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={image} style={{width:SCREEN_WIDTH, height:SCREEN_HEIGHT}}>
        <View style={{ height: 60 }}>

        </View>
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
        </View>
        <View style={{ height: 60 }}>

        </View>

        <ProfileFooter navigator={navigationn} extStyle={{width: "100%", height: "10%", justifyContent: 'center'}}/>
      </ImageBackground>
      </View>

      
    );
  }
}