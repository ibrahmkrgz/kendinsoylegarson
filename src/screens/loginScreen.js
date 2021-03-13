import React, { memo, useState, useEffect, useRef } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Background from '../components/Background';
import AsyncStorage from '@react-native-community/async-storage';
//import Logo from '../../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../themes/theme';
import { Toast } from 'native-base';
import { emailValidator, passwordValidator } from '../config/utils';

export const toastr = {
    showToast: (message, duration = 2500) => {
        Toast.show({
            text: message,
            type: 'danger',
            duration,
            position: 'top',
            textStyle: { textAlign: 'center' },
            buttonText: 'OK',
        });
    },
    showSuccess: (message, duration = 2500) => {
        Toast.show({
            text: message,
            //type: 'success',
            duration,
            position: 'top',
            textStyle: { textAlign: 'center' },
            //buttonText: 'OK',
            // style: {
            //   backgroundColor: "blue"
            // }
        });
    },
};

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [errorMessages, setErrorMessages] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)
    //const [buttonLoading, setButtonLoading] = useState(authState);
    const [token, setToken] = useState(null)
    const mounted = useRef();

    useEffect(() => {

        const unsubscribe = navigation.addListener('willFocus', () => {
            setEmail({ value: '', error: '' });
            setPassword({ value: '', error: '' });
            //resetSignup()
        });

        async function fetch() {
            return unsubscribe
        }

        fetch()

    }, [navigation]);

    const _onLoginPressed = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        } else {
            //login(email, password);
            const params = {
                username: email.value,
                password: password.value,
            };
            console.log(params, 'auth params')
            setButtonLoading(true)
            axios
                .post(`https://kendinsoyle-admin-service.herokuapp.com/authenticate`, params)
                .then(response => {
                    console.log(response.data.token, 'response token asd');
                    AsyncStorage.setItem('token', response.data.token);
                    setErrorMessages(false)
                    setButtonLoading(false)
                    navigation.navigate('HomeScreen');
                    // return response
                })
                .catch(error => {
                    console.log(error, 'response token error');
                    setErrorMessages(true)
                    setButtonLoading(false)
                    return error
                });
            // navigation.navigate('HomeScreen');
        }

        //navigation.navigate('LoginHomeScreen');
    };

    return (
        <Background>
            {/* <BackButton goBack={() => navigate('LoginHomeScreen')} /> */}

            {/* <Logo /> */}

            <Header mode='header'>KendinSöyle</Header>

            <TextInput
                label="Kullanıcı adı"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Şifre"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            {errorMessages && <Text style={{ color: '#DE3C4B' }}>Kullanıcı adı veya şifre hatalı!</Text>}

            <Button
                mode="contained"
                loading={buttonLoading}
                onPress={_onLoginPressed}>
                Giriş Yap
      </Button>

        </Background>
    );
};

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: '#ffff',
    },
    link: {
        fontWeight: 'bold',
        color: '#DE3C4B',
        fontSize: 16
    },
});



export default memo(LoginScreen)
