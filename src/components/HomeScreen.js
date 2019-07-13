import React, { Component } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import Mapa from './Mapa'

export default class HomeScreen extends Component{
    constructor(props) {
        super(props);
      }
    static navigationOptions = ({navigation}) => {
        return {title : "Usuario",
        headerRight : (
            <TouchableOpacity  
                style = {{paddingRight : 20}}
                onPress= {() => navigation.replace('Login')} >
                <Text> Log Off</Text>
            </TouchableOpacity>
        ),
        };
    };
    render(){
        return(
            // <View style = {styles.container}>
            //     <Text style = {styles.text}>Welcome to HomeScreen</Text>
            // </View>
            <Mapa/>
            
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