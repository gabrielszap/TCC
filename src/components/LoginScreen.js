import React, { Component } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import RegisterScreen from './RegisterScreen'


export class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textfields}>
                    <TextInput style={styles.input}
                        placeholder = "username"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />
                    <TextInput style={styles.input}
                        placeholder = "password"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Home')}>
                        <Text style = {styles.buttontext}>Login</Text>
                    </TouchableOpacity>
                    <Button
                    title = "Register Here"
                    color = "#1abc9c"
                    onPress = {() => this.props.navigation.navigate('Register')}
                    />
                </View>
            </View>
        );
    }
}


export default class App extends Component{
    render(){
        return (
            <AppStackNavigator/>
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen
});

const styles = {
    container : {
        padding : 20,
        flex : 1,
        backgroundColor :'#ecf0f1',
        justifyContent : 'center',
        alignItems : 'stretch'
    },
    input : {
        paddingLeft : 20,
        borderRadius : 50,
        height : 50,
        fontSize : 25,
        backgroundColor : 'white',
        borderColor : '#1abc9c',
        borderWidth : 1,
        marginBottom : 20, 
        color : '#34495e'
    },
    buttoncontainer : {
        height : 50,
        borderRadius : 50,
        backgroundColor : '1abc9c',
        paddingVertical : 10,
        justifyContent : 'center'
    },
    buttontext : {
        textAlign : 'center',
        color : '#ecf0f1',
        fontSize : 20
    }
}