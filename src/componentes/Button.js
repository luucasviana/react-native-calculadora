import React from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TouchableHighlight,
}  from 'react-native'

const style = StyleSheet.create({
    button: {
        fontSize: 35,
        height: Dimensions.get('window').width / 4.5,
        width: Dimensions.get('window').width / 4.5,
        padding: 15,
        backgroundColor: '#a9a9a9',
        textAlign: 'center',
        borderWidth: 0,
        margin: 5,
        borderRadius: 30,
    },
    operationButton: {
        color: '#fff',
        fontSize: 40,
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4.46) * 2.1,
    },
    buttonTriple: {
        backgroundColor: '#f0f0f0',
        width: (Dimensions.get('window').width / 4.45) * 3.2,
    }
})

export default props => {
    const styleButton= [style.button]
    if (props.double) styleButton.push(style.buttonDouble)
    if (props.triple) styleButton.push(style.buttonTriple)
    if (props.operation) styleButton.push(style.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}
