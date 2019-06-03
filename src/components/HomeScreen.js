import React, { Component } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Welcome to HomeScreen</Text>
            </View>
        );
    }
}

const styles = {
    container : {
        padding : 20,
        flex : 1,
        backgroundColor :'#ecf0f1',
        justifyContent : 'center',
        alignItems : 'stretch'
    },
    text : {
        textAlign : 'center',
        color : 'black',
        fontSize : 20
    }
}