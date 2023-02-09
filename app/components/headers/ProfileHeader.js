import React from "react";
import { View, StyleSheet } from 'react-native';
import Color from '../../values/Color'

const ProfileHeader = ({children, ...props}) => {
    return (
      <View style={[styles.container, {...props.extStyle}]}>
        {children}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Color.primary,
  },
});

export default ProfileHeader
