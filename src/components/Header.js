import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../themes/theme';
import DefaultTheme from '../themes/defaultTheme';

const Header = ({ children, mode }) => <Text style={mode === 'header' ? styles.titleWrapperText : styles.header}>{children}</Text>;

const styles = StyleSheet.create({
    header: {
        fontSize: 26,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 14,
    },
    titleWrapperText: {
        fontSize: 35,
        fontFamily: 'PlayfairDisplay-Italic',
        //fontFamily: 'Yellowtail-Regular',
        //fontFamily: 'Lobster-Regular',
        color: DefaultTheme.primaryWhite,
        marginBottom: 10,
        width: DefaultTheme.deviceWidth / 1.5,
        textAlign: 'center',
        shadowColor: DefaultTheme.buttonShadowColor,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: DefaultTheme.buttonShadowOpacity,
        elevation: 12,
        shadowRadius: 5,
        //fontFamily: theme.primaryFont,
    },
});

export default memo(Header);
