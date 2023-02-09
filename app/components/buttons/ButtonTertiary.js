import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Color from '../../values/Color';

const ButtonTertiary = ({children, ...props}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.button, {...props.extStyle}]}
            {...props}
            >
                <View style={{top: 2}}>{children}</View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 28,
        backgroundColor: Color.tertiary,
    },
});

export default ButtonTertiary;