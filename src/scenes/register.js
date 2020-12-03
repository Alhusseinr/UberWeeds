import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import {AsyncStorage} from "react-native-web";
import axios from 'axios';
import { Actions } from 'react-native-router-flux';


export default class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            error: {},
            token: ''
        }
    }

    handleEmailChnage = (email) => {
        this.setState({ email:email });
    };

    handlePasswordChange = (password) => {
        this.setState({ password: password });
    };

    handlePasswordConfirmChange = (confirmPassword) => {
        this.setState({ confirmPassword: confirmPassword });
    }

    _storeToken = async (token) => {
        try{
            await AsyncStorage.setItem('token', token);
        } catch (e) {
            console.log(e)
        }
    };

    _retrieveToken = async () => {
        try{
            const value = await AsyncStorage.getItem('token');
            if(value !== null){
                console.log('token in localStorage: ', value);
                return value;
            }
            return value;
        } catch (e) {
          console.log(e)
        }
    };

    handleRegister = async () => {
        const errors = {}
        const { email, password, confirmPassword } = this.state;
        errors = this.isEmpty(email, password);
        if(Object.keys(errors).length === 0) {
            if(password !== confirmPassword) {
                errors.confirmPassword = "passwords do not match"
                this.setState({ errors });
            }
            if(Object.keys(errors).length === 0) {
                axios
                    .post('http://127.0.0.1:5000/api/user/register', { email, password })
                    .then(response => {
                        console.log(response)
                    })
                    .catch(e => console.log(e))
            }
        }
        this.setState({ errors });
    };

    Login = () => {
        Actions.pop()
    }

    isEmpty = (email, password) => {
        const errors = {};
        if(!email) errors.email = "Email can't be blank";
        if(!password) errors.password = "Password can't be blank";
        return errors;
    };

    render() {

        return(
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={{ flex: 1}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.logo}>Uber-Weeds</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={ styles.inputText }
                                value={this.state.email}
                                placeholder='Email'
                                placeholderTextColor='#003f5c'
                                onChangeText={text => this.setState({ email: text })}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={ styles.inputText }
                                value={this.state.password}
                                placeholder='Password'
                                placeholderTextColor='#003f5c'
                                onChangeText={text => this.setState({ password: text })}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={ styles.inputText }
                                value={this.state.confirmPassword}
                                placeholder='Confirm Password'
                                placeholderTextColor='#003f5c'
                                onChangeText={text => this.setState({ confirmPassword: text })}
                                secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity style={styles.registerBtn} onPress={this.handleRegister}>
                            <Text style={styles.loginText}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signupBtn} onPress={this.Login}>
                            <Text style={styles.loginText}>Already have an account? <Text style={{ fontWeight: 'bold' }}>Go to login.</Text></Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#499B4A',
        marginBottom: 40,
    },

    inputView: {
        width: '80%',
        backgroundColor: '#465881',
        borderRadius: 5,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },

    inputText: {
        height: 50,
        color: 'white'
    },

    input: {
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        height: 55,
        marginBottom: 20,
        padding: 10,
    },

    registerBtn: {
        width: '80%',
        backgroundColor: '#499B4A',
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    loginText: {
        color: 'white',
        fontSize: 14
    },

    signupBtn: {
        marginTop: 10
    }
});
