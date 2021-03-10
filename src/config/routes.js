import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    Animated,
    Easing
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import LoginScrenn from '../screens/loginScreen';
import HomeScreen from '../screens/homePageScreen';
import TableScreen from '../screens/tablesScreen';
import ROUTES from '../constants/routeNames';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

let SlideFromRight = (index, position, width) => {
    const inputRange = [index - 1, index, index + 1];
    const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0]
    })
    const slideFromRight = { transform: [{ translateX }] }
    return slideFromRight
};

//Transition configurations for createStackNavigator
const TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: (sceneProps) => {
            const { layout, position, scene } = sceneProps;
            const width = layout.initWidth;
            const { index } = scene
            return SlideFromRight(index, position, width);
        },
    }
}


const LOGIN = createStackNavigator({
    [ROUTES.SCREENS.LOGIN]: {
        screen: LoginScrenn,
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
            header: null,
        },
    },
});



const FIRSTPAGE = createBottomTabNavigator(
    {
        [ROUTES.SCREENS.HOME]: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'firtpage',
                tabBarIcon: () => (
                    <FontistoIcon name="home" style={{ fontSize: 25, color: '#DE3C4B' }} />
                ),
            },
        },
        [ROUTES.SCREENS.TABLE]: {
            screen: TableScreen,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: () => (
                    <Icon name="user-alt" style={{ fontSize: 25, color: '#DE3C4B' }} />
                ),
            },
        },
    },
    {
        initialRouteName: 'HomeScreen',
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'yellow',
            //activeBackgroundColor: 'lightgreen',
            showLabel: false,
            keyboardHidesTabBar: false,
            style: { backgroundColor: '#f9f7f7', height: 55 },
            tabStyle: {
                backgroundColor: '#f9f7f7',
                //height: 200,
            },
        },
        // tabBarOptions: {
        //   activeTintColor: 'red',
        //   inactiveTintColor: 'cyan',
        //   activeBackgroundColor: 'lightgreen',
        //   showLabel: false,
        //   keyboardHidesTabBar: false,
        //   style: {
        //     backgroundColor: '#f7f7f7',
        //     //----------add this line------------------------//
        //     height: 170
        //   },
        //   tabStyle: {
        //     backgroundColor: 'orange',
        //     height: 200,
        //   },
        // },
    },
);

const RootNavigator = createStackNavigator(
    {
        LOGIN,
        FIRSTPAGE,
    },
    {
        headerMode: 'none', //No headers, like createAnimatedSwitchNavigator
        transitionConfig: TransitionConfiguration //Configure transitions here,
    }
);

export default createAppContainer(RootNavigator);
