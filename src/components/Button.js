import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight, View, StyleSheet
} from 'react-native';
import { themes } from '../utils'

function Button(props) {

    return (
        <TouchableHighlight
            {...props}
            onPress={props.onPress}
            style={styles.ButtonTouch}>
            <Text style={styles.ButtonText}>{props.title}</Text>
        </TouchableHighlight>

    )
}



const styles = StyleSheet.create({
    ButtonText: {
        color: "black",
        fontFamily: themes.fontFamily.Normal,
        fontWeight: "400",
        fontSize: themes.size.h2,
        // paddingTop: 10,
        // paddingBottom: 10

    },
    ButtonTouch: {
        backgroundColor: "#FFA302",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent:'center',
        margin: 20,
         height:40
    }

})


export default Button;