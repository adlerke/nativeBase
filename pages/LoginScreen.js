import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';

class LoginScreen extends Component {
    signInWithGoogleAsync = async () => {
        try {

            const result = await Google.logInAsync({
                // behavior: 'web',
                // androidClientId: YOUR_CLIENT_ID_HERE,
                iosClientId: '831320147388-u78t02l9gq014ljvopa043rs6t3i7ph3.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {

                return result.accessToken;
            } else {

                return { cancelled: true };
            }
        } catch (e) {
            alert(e)

            return { error: true };
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Sign in"
                    onPress={() => this.signInWithGoogleAsync()} />


            </View>
        );
    }

}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


