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

const HomeScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [responseData, setResponseData] = useState([]);
    const [sendedState, setSendedState] = useState(false);


    useEffect(() => {

        async function fetchMyAPI() {
            const token = await AsyncStorage.getItem('token');
            if (token === null) {
                navigation.navigate('LoginScreen');
            }
        }

        fetchMyAPI()

    }, []);

    useEffect(() => {
        console.log("asdasd")

        async function fetchMyAPI() {
            console.log("asdasd 22")

            const token = await AsyncStorage.getItem('token');
            await axios({
                method: 'GET', url: `https://kendinsoyle-admin-service.herokuapp.com/getUserNotification`, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
            })
                .then(response => {
                    console.log(response.data, 'not res')
                    setResponseData(response.data);
                    setIsLoading(false);

                })
                .catch(error => {
                    navigation.navigate('LoginScreen');
                    return error
                });
        }

        fetchMyAPI()

    }, [sendedState]);

    useEffect(() => {
        console.log("asdasd")

        async function fetchMyAPI() {
            console.log("asdasd 22")

            const token = await AsyncStorage.getItem('token');
            await axios({
                method: 'GET', url: `https://kendinsoyle-admin-service.herokuapp.com/getUserNotification`, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
            })
                .then(response => {
                    console.log(response.data, 'not res')
                    setResponseData(response.data);
                    setIsLoading(false);

                })
                .catch(error => {
                    navigation.navigate('LoginScreen');
                    return error
                });
        }

        const intervalId = setInterval(() => {  //assign interval to a variaable to clear it
            fetchMyAPI()
        }, 30000)

        return () => {
            clearInterval(intervalId); //This is important
        }

    }, []);

    const doneJob = async (id) => {
        console.log(id, 'done job');
        const token = await AsyncStorage.getItem('token');
        await axios({
            method: 'PUT', url: `https://kendinsoyle-admin-service.herokuapp.com/updateNotificationState/${id}`, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log(response.data, 'tamamlandı');
                setSendedState(!sendedState)
                //setModalVisible(false)
                //setSendCommentAction(true)

            })
            .catch(error => {
                console.log(error, 'tamamlandı hata error');
                return error
            });
    }

    const RightAction = (id) => {

        return (
            <TouchableOpacity onPress={() => doneJob(id)}>
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
                    }}
                >
                    <Animated.Text
                        style={{
                            color: 'white',
                            paddingHorizontal: 10,
                            fontWeight: '600',
                        }}>
                        Tamamlandı
             </Animated.Text>
                </View>
            </TouchableOpacity>
        )
    }

    console.log(responseData, 'zeynom menuu')
    return (
        <ScrollView>
            <View>
                {/* {isLoading && <SkeletonDetail />} */}
                <View style={{ backgroundColor: '#DE3C4B', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 10 }}>

                    <View>
                        <Title style={{
                            color: '#f9f7f7', fontFamily: 'AvenirNext-Medium', fontSize: 23, fontWeight: 'bold'
                        }}>Bildirimler</Title>
                    </View>
                </View>
                {responseData && responseData.map((notification, index) => {

                    return (
                        <View style={{ paddingVertical: 3 }}>
                            <Swipeable key={`${notification.notification.id}-${notification.notification.createdTime}`} renderRightActions={() => RightAction(notification.notification.id)}>
                                <View style={{
                                    width: '100%',
                                    marginTop: 5,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    backgroundColor: '#f4e8e9',
                                    paddingVertical: 20,
                                    paddingHorizontal: 15,
                                    borderRadius: 7,
                                    shadowColor: '#ede6e6',
                                    shadowOpacity: 0.1,
                                    elevation: 5,
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                }}>
                                    {notification.order === null &&
                                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                                                {notification.notification.tableId} numaralı masa sizi çağırıyor.
                                    </Text>
                                        </View>
                                    }
                                    {notification.order &&
                                        <View style={{ width: '100%', alignItems: 'flex-start', justifyContent: 'center', fontWeight: 'bold' }}>
                                            <Text style={{ fontSize: 17, fontWeight: 'bold', paddingBottom: 5 }}>
                                                {notification.notification.tableId} numaralı masa sipariş verdi.
                                        </Text>
                                            {notification.order && notification.order.orderDetails && notification.order.orderDetails.map(detail => {
                                                return (
                                                    <View style={{ paddingVertical: 3 }}>
                                                        <Text style={{ fontSize: 15, fontWeight: '600' }}>
                                                            {detail.itemName} ({detail.itemDescription})
                                                     </Text>
                                                    </View>
                                                )
                                            })}

                                        </View>
                                    }
                                </View>
                            </Swipeable>
                        </View>
                    )
                })}

            </View >
        </ScrollView>
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


