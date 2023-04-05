import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../globals/style';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const BottomNav = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Text>BottomNav</Text> */}
            <View style={styles.btncon1}>
                <AntDesign name="home" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('home') }} />

            </View>
            {/* <View style={styles.btncon2} >
                <Ionicons name="search" size={40} color="black" style={styles.icon2} onPress={() => { navigation.navigate('home') }} />
            </View> */}
            <View style={styles.btncon1} >
                <AntDesign name="shoppingcart" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('cart') }} />

            </View>
            <View style={styles.btncon1} >
                <FontAwesome5 name="map-marked-alt" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('trackorders') }} />
            </View>
            <View style={styles.btncon1} >
            <MaterialIcons name="payment" size={32} color="red"   style={styles.icon1} onPress={() => { navigation.navigate('PaymentPage') }} />
            </View>
        </View>
    )
}

export default BottomNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        elevation: 50,
        borderTopColor: colors.text1,
        borderTopWidth: 1,
        borderTopEndRadius: 100,
        borderTopStartRadius: 100,
    },
    btncon1: {
        alignItems: 'center',
        height: 50,
    },
    btncon2: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 10,
        backgroundColor: colors.text1,
        width: 60,
        height: 60,
        borderRadius: 100,

    },
    icon2: {
        color: 'white',
        align: 'center',

    },
    icon1: {
        color: colors.text1,
        size: 'bold',

    }
})