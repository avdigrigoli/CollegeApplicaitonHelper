import React from "react";
import { View, StyleSheet } from 'react-native';
import Color from '../../values/Color'
import Icon from 'react-native-vector-icons/Ionicons'

const ProfileFooter = ({children, ...props}) => {
    return (
      <View style={[styles.container, {...props.extStyle}]}>
                <Icon.Button
        name="briefcase"
        iconStyle={{alignSelf: 'center', paddingLeft: 10}}
        color={Color.secondary}
        backgroundColor={Color.primary}
        size={60}
        onPress={() => {
          handleMaybeButton({...props.navigator});
        }}
        ></Icon.Button>

        <View style={{width:"10%"}}/>

		<Icon.Button
        name="search"
        iconStyle={{alignSelf: 'center', paddingLeft: 10}}
        color={Color.secondary}
        backgroundColor={Color.primary}
        size={60}
        onPress={() => {
          handleSearchButton({...props.navigator});
        }}
        ></Icon.Button>

        <View style={{width:"10%"}}/>

		<Icon.Button
        name="heart"
        iconStyle={{alignSelf: 'center', paddingLeft: 10}}
        color={Color.secondary}
        backgroundColor={Color.primary}
        size={60}
        onPress={() => {
          handleFavoritesButton({...props.navigator});
        }}
        ></Icon.Button>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom:0,
    backgroundColor: Color.primary
  },
});

function handleFavoritesButton(navigation){
  navigation.navigate("FavoriteScreen", navigation);
}

function handleMaybeButton(navigationMaybe){
  navigationMaybe.navigate("MaybeScreen");
}

function handleSearchButton(navigation){
  navigation.navigate("SearchCityScreen");
}

export default ProfileFooter;
