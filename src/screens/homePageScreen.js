import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, BackHandler, Text, Image, ScrollView, Modal } from 'react-native';
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

    console.log(responseData, 'zeynom menuu')
    return (
        <View>
            {/* {isLoading && <SkeletonDetail />} */}
            <ScrollView style={styles.scrollView}>
                <View>
                    <Text>
                        Home page
                  </Text>
                </View>
            </ScrollView>
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


