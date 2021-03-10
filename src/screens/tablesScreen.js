import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, BackHandler, Text, Image, ScrollView, Modal } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { Title } from 'native-base';
import { connect } from 'react-redux';
import { navigate } from '../services/navigationService';
import { withNavigation } from 'react-navigation';
//import { api_url } from '../../../redux/actions/constants';
import { Divider } from 'react-native-paper';
import SkeletonDetail from '../components/Skeleton';

//import SkeletonDetail from '../../../components/SkeletonDetail';

const TableScreen = ({ errorText, ...props }) => {
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
            <View style={{ backgroundColor: '#DE3C4B', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 10 }}>

                <View>
                    <Title style={{ color: '#f9f7f7' }}>Masalar</Title>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center' }}>
                <TouchableOpacity style={{
                    margin: 10, borderRadius: 10, background: '#fff',
                    borderColor: '#f9f7f7',
                    borderWidth: 1,
                    overflow: 'hidden',
                    backgroundColor: "#0000",
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.6,
                    shadowRadius: 2,
                    elevation: 3
                }}  >

                    <View style={{
                        alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, backgroundColor: "#fcfcfc", height: 150,


                    }}>
                        <View style={{ paddingVertical: 10 }}>
                            <View style={{ paddingVertical: 5 }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Lobster-Regular' }}>
                                    bildirim
                        </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 13, color: '#ccc5c5', fontFamily: 'Lobster-Regular' }}>
                                    detay
                        </Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#fcfcfc" }}>

                            <View style={{ paddingVertical: 0, fontFamily: 'Lobster-Regular' }}><Text style={{ fontSize: 13, color: '#ccc5c5' }}>₺ iki kişi için</Text></View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    margin: 10, borderRadius: 10, background: '#fff',
                    borderColor: '#f9f7f7',
                    borderWidth: 1,
                    overflow: 'hidden',
                    backgroundColor: "#0000",
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.6,
                    shadowRadius: 2,
                    elevation: 3
                }}  >

                    <View style={{
                        alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, backgroundColor: "#fcfcfc", height: 150,

                    }}>
                        <View style={{ paddingVertical: 10 }}>
                            <View style={{ paddingVertical: 5 }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Lobster-Regular' }}>
                                    bildirim
                        </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 13, color: '#ccc5c5', fontFamily: 'Lobster-Regular' }}>
                                    detay
                        </Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#fcfcfc" }}>

                            <View style={{ paddingVertical: 0, fontFamily: 'Lobster-Regular' }}><Text style={{ fontSize: 13, color: '#ccc5c5' }}>₺ iki kişi için</Text></View>
                        </View>
                    </View>
                </TouchableOpacity>
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
    TableScreen,
);


