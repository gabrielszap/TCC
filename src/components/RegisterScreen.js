import React, { Component } from 'react'
import { Alert, View, TextInput, Text, Button, TouchableOpacity } from 'react-native'

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
        };
      }
    onLogin() {
        const { username, password } = this.state;
    
        Alert.alert(`${username} você foi cadastrado!`);
        this.props.navigation.navigate('Login');
    }    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.registerform}>
                    <TextInput style={styles.input}
                        placeholder="Digite Seu Nome"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        value={this.state.username}
                        onChangeText={(username) => this.setState({ username })}
                    />
                    <TextInput style={styles.input}
                        placeholder="Digite Seu E-mail"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        ref={(input) => this.email = input}
                    />
                    <TextInput style={styles.input}
                        placeholder="Digite Sua Senha"
                        returnKeyType="next"
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.password}
                        // onChangeText={(password) => this.setState({ password })}
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style={styles.buttoncontainer} onPress={this.onLogin.bind(this)} 
                    // onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={styles.buttontext}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    registerform: {
        // marginTop: 30,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'white',
        borderColor: '#1abc9c',
        borderWidth: 1,
        marginBottom: 20,
        color: '#34495e'
    },
    buttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1abc9c',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    buttontext: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20
    }
}