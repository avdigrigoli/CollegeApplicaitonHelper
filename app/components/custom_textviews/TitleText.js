import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = ({children, ...props}) => {
    return (
        <Text style={[styles.formatting, {...props.extStyle}]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    formatting: {
        fontSize: 48
    }
});

export default TitleText;