import React, { memo } from 'react';
import {
    ImageBackground,
    StyleSheet,
    KeyboardAvoidingView,
    View
} from 'react-native';

const Background = ({ children }) => (
    <ImageBackground
        source={require('../assets/findrestaurants.jpeg')}
        resizeMode="cover"
        style={styles.background}
    >
        <View style={styles.overlay}></View>
        <KeyboardAvoidingView style={styles.container}>
            {children}
        </KeyboardAvoidingView>
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        opacity: 0.8,
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default memo(Background);
