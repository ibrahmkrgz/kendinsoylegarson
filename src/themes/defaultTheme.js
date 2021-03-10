import { Dimensions, Platform, StatusBar } from 'react-native';

export default {
    // Colors
    mdButtonColor: '#1676FF',
    primaryWhite: '#ffff',
    primaryButton: '#1676FF',
    primaryButtonText: '#ffff',
    secondaryButtonText: '#1676FF',
    secondaryButton: '#ffff',
    shadowColor: '#272E36',
    titleColor: '#1676ff',
    primaryBackground: '#1676FF',
    secondaryBackground: '#fff',
    primaryTextColor: '#000',
    subTextColor: '#3b4f66',
    buttonDisabledColor: '#cbcbcb',

    squareButtonShadowColor: '#1676FF',
    squareButtonActiveBackground: '#fff',
    squareButtonActiveTextColor: '#1676FF',
    squareButtonActiveBorderColor: '#1676FF',
    squareButtonTextColor: '#fff',
    squareButtonBackgroundColor: '#1676FF',
    squareButtonDisabledBackgroundColor: '#fff',
    squareButtonDisabledBorderColor: '#eaeaea',
    squareButtonDisabledTextColor: '#eaeaea',

    // Configs
    buttonShadowOpacity: 0.3,
    shadowOpacity: 0.5,
    secondaryButtonHeight: 45,
    primaryButtonHeight: 45,
    primaryButtonRadius: 45 / 2,
    secondaryButtonRadius: 45 / 2,
    primaryButtonTextWeight: '800',
    secondaryButtonTextWeight: '800',

    // Devices Sizes
    deviceHeight:
        Platform.OS === 'ios'
            ? Dimensions.get('window').height
            : Dimensions.get('window').height + StatusBar.currentHeight,
    deviceWidth: Dimensions.get('window').width,

    // Fonts Properties
    primaryFont: 'Avenir-Black',
    primaryLatterSpacing: 0,
};
