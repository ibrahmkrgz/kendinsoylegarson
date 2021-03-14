import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { Title } from 'native-base';
import { withNavigation } from 'react-navigation';
import Button from '../components/Button';
//import { api_url } from '../../../redux/actions/constants';
import SkeletonDetail from '../components/Skeleton';


const TableScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [responseData, setResponseData] = useState([]);
    const [tableAction, setTableAction] = useState(false);


    useEffect(() => {

        async function fetchMyAPI() {
            const token = await AsyncStorage.getItem('token');
            await axios({
                method: 'GET', url: `https://kendinsoyle-admin-service.herokuapp.com/getUserResponsibleTables`, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
            })
                .then(response => {
                    setResponseData(response.data);
                    setIsLoading(false);

                })
                .catch(error => {
                    navigation.navigate('HomeScreen');
                    return error
                });
        }

        fetchMyAPI()


    }, [tableAction]);

    useEffect(() => {

        async function fetchMyAPI() {
            const token = await AsyncStorage.getItem('token');
            await axios({
                method: 'GET', url: `https://kendinsoyle-admin-service.herokuapp.com/getUserResponsibleTables`, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
            })
                .then(response => {
                    setResponseData(response.data);
                    setIsLoading(false);

                })
                .catch(error => {
                    navigation.navigate('HomeScreen');
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

    const logout = async () => {
        await AsyncStorage.removeItem('token');
        navigation.navigate('LoginScreen');
    }

    const removeTable = async (id) => {
        const token = await AsyncStorage.getItem('token');
        await axios({
            method: 'POST', url: `https://kendinsoyle-admin-service.herokuapp.com/checkOut/${id}`, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        })
            .then(response => {
                setTableAction(!tableAction)

            })
            .catch(error => {
                console.log(error, 'removed api error');
                return error
            });
    }

    return (
        <ScrollView>

            <View>
                {isLoading && <SkeletonDetail />}
                <View style={{ backgroundColor: '#DE3C4B', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 10 }}>

                    <View>
                        <Title style={{
                            color: '#f9f7f7', fontFamily: 'AvenirNext-Medium', fontSize: 23, fontWeight: 'bold'
                        }}>Masalar</Title>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', paddingHorizontal: 25 }}>
                    <Button mode="contained" style={{ alignItems: 'center', justifyContent: 'center', width: 130 }} icon="logout" mode="contained" onPress={logout}>
                        Çıkış yap
                </Button>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center' }}>
                    {responseData && responseData.map(table => {

                        return (
                            <View style={{
                                margin: 10, borderRadius: 10, background: '#fff',
                                borderColor: '#f9f7f7',
                                borderWidth: 1,
                                overflow: 'hidden',
                                backgroundColor: "#0000",
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.6,
                                shadowRadius: 2,
                                elevation: 3,
                                width: '40%'
                            }}  >
                                <View style={{ alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 10, backgroundColor: table.userCheckIns && table.userCheckIns.length > 0 ? "#DE3C4B" : "#fcfcfc", minHeight: 280 }}>
                                    <View style={{ paddingVertical: 3 }}>
                                        <View style={{ paddingVertical: 0 }}>
                                            <Text style={{ fontSize: 20, fontFamily: 'Lobster-Regular', color: table.userCheckIns && table.userCheckIns.length > 0 ? "#fcfcfc" : "black" }}>
                                                Masa {table.tableId}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ paddingVertical: 1, fontFamily: 'Lobster-Regular' }}>
                                        <Text style={{ fontSize: 18, color: '#ccc5c5' }}>{table.userCheckIns && table.userCheckIns.length > 0 ? "Dolu" : "Boş"}</Text>
                                    </View>
                                    {table.userCheckIns && table.userCheckIns.map(user => {
                                        return (
                                            <View style={{ paddingVertical: 1, fontFamily: 'Lobster-Regular' }}>
                                                <Text style={{ fontSize: 16, color: '#fcfcfc' }}>{user.username}</Text>
                                            </View>
                                        )
                                    })}
                                    {table.userCheckIns && table.userCheckIns.length > 0 &&
                                        <View style={{ alignItems: 'flex-start', paddingHorizontal: 0, position: 'absolute', bottom: 0 }}>
                                            <Button
                                                mode="contained"
                                                icon="logout"
                                                style={{ width: '100%', backgroundColor: '#cebebe', color: 'black' }}
                                                labelStyle={{ color: 'black' }}
                                                onPress={() => removeTable(table.tableId)}
                                            >
                                                Kaldır
                                            </Button>
                                        </View>
                                    }
                                </View>
                            </View>
                        )
                    })}
                </View>
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
    TableScreen,
);


