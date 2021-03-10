import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, BackHandler, Text, Image, ScrollView, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Title } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { connect } from 'react-redux';
import { navigate } from '../services/navigationService';
import { withNavigation } from 'react-navigation';
//import { api_url } from '../../../redux/actions/constants';
import { Divider } from 'react-native-paper';
import SkeletonDetail from '../components/Skeleton';

//import SkeletonDetail from '../../../components/SkeletonDetail';

const HomeScreen = ({ errorText, ...props }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [responseData, setResponseData] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false)
    const [base64Image, setBase64Image] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [images, setImages] = useState([])



    // useEffect(() => {

    //     async function fetchMyAPI() {
    //         const token = await AsyncStorage.getItem('token');
    //         await axios({
    //             method: 'POST', url: `${api_url}/getRestaurantMenuPicturesByRestaurantId/${props.itemId}`, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    //         })
    //             .then(response => {
    //                 setResponseData(response.data);
    //                 setIsLoading(false);
    //                 setBase64Image(`data:image/png;base64,${response.data.restaurantCoverPicture}`);

    //             })
    //             .catch(error => {
    //                 navigate('FirstpageScreen');
    //                 return error
    //             });
    //     }

    //     fetchMyAPI()


    // }, []);

    const RightAction = (progress, dragX) => {

        return (
            <View
                style={{
                    backgroundColor: '#DE3C4B',
                    justifyContent: 'center',
                    marginTop: 5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                    shadowColor: '#ede6e6',
                    shadowOpacity: 0.1,
                    flex: 1
                }}>
                <Animated.Text
                    style={{
                        color: 'white',
                        paddingHorizontal: 10,
                        fontWeight: '600',
                        // transform: [{ scale }]
                    }}>
                    Tamamlandı
            </Animated.Text>
            </View>
        )
    }

    console.log(responseData, 'zeynom menuu')
    return (
        <View>
            {/* {isLoading && <SkeletonDetail />} */}
            <View style={{ backgroundColor: '#DE3C4B', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 10 }}>

                <View>
                    <Title style={{ color: '#f9f7f7' }}>Bildirimler</Title>
                </View>
            </View>
            <View style={{ backgroundColor: '#ede8e8' }}>
                <Swipeable key="1" renderRightActions={() => RightAction()}>
                    <View style={{
                        width: '100%',
                        marginTop: 5,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        backgroundColor: '#f9f7f7',
                        paddingVertical: 20,
                        paddingHorizontal: 15,
                        borderRadius: 7,
                        shadowColor: '#ede6e6',
                        shadowOpacity: 0.1,
                        elevation: 2,
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                    }}>
                        <View style={{ width: '60%' }}>
                            <Text style={{ fontSize: 15, fontWeight: '600' }}>
                                Bildirim
                                </Text>
                        </View>

                    </View>
                </Swipeable>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    searchInput: {
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        //padding: 5,
        //borderRadius: 15,
    },
    imageContain: {
        width: '100%',
        height: 200,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    searchContainerWrapper: {
        width: '95%',
        padding: 2,
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 40,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 3
    },
    searchContainer: {
        backgroundColor: '#ede8e8',
        //width: '100%',
        //height: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ede8e8',
    },
});



export default withNavigation(
    HomeScreen,
);


