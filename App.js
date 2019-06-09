// import { AppRegistry } from 'react-native'
// import App from './src/components/LoginScreen'

// AppRegistry.registerComponent('AwesomeProject', () => App)

import React, { Component } from 'react'
import { Alert, View, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './src/components/HomeScreen'
import RegisterScreen from './src/components/RegisterScreen'


export class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          validUser :'Gabriel', 
          validPassword :'teste',
          loginUser : '',
          loginPassword : '',
        };
      }
    onLogin(){
        const _validUser = this.state.validUser;
        const _validPassword = this.state.validPassword;

        if(this.state.loginUser == _validUser && 
           this.state.loginPassword == _validPassword){
            this.props.navigation.replace('Home')
        }
        else{
            Alert.alert('Usuário e/ou senha inválido(s)');
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textfields}><TextInput style={styles.input}
                        placeholder = "E-mail"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        onChangeText={(loginUser) => this.setState({ loginUser })}
                    />
                    <TextInput style={styles.input}
                        placeholder = "Senha"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                        onChangeText={(loginPassword) => this.setState({ loginPassword })}
                        
                    />
                    <TouchableOpacity style = {styles.buttonLoginContainer} 
                    // onPress = {() => this.props.navigation.navigate('Home')}
                    onPress={this.onLogin.bind(this)}>
                        <Text style = {styles.buttonLoginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonRegistrarContainer} onPress = {() => this.props.navigation.replace('Register')}>
                        <Text style = {styles.buttonRegistrarText}>Registrar-se</Text>
                    </TouchableOpacity>
                    
                    {/* <Button
                    
                    title = "Registre-se Aqui"
                    type = "clear"
                    buttonStyle = {{marginTop : 20}}
                    onPress = {() => this.props.navigation.navigate('Register')}
                    />                      */}
                </View>
            </View>
        );
    }
}


export default class App extends Component{
    
    render(){
        return (
            <AppContainer/>
        );
    }
}



const AppStackNavigator = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen
});

const AppContainer = createAppContainer(AppStackNavigator);

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
    buttonLoginContainer : {
        height : 50,
        borderRadius : 50,
        backgroundColor : '#1abc9c',
        paddingVertical : 10,
        justifyContent : 'center'
    },
    buttonLoginText : {
        textAlign : 'center',
        color : '#ecf0f1',        
        fontSize : 20
    },
    buttonRegistrarContainer : {
        height : 50,
        borderRadius : 50,
        backgroundColor : '#ecf0f1',
        paddingVertical : 10,
        justifyContent : 'center'
    },
    buttonRegistrarText : {
        textAlign : 'center',
        color : '#1abc9c',        
        fontSize : 20,
    }
}