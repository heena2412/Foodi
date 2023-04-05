import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { startTransition } from 'react'
//import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../globals/style';

const HomeHeadNav = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.containerin}>
                <Text style={styles.mytext}>Foodie</Text>
                {/* <MaterialCommunityIcons name="food-outline" size={26} color="black"  style={styles.myicon} /> */}
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('userprofile') }}>
                <FontAwesome5 name="user-circle" size={30} color="black" style={styles.myicon} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.col1,
        elevation: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        
    },
    containerin: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    myicon: {
        color: colors.text1,
        paddingLeft: 10,
        
    },
    mytext: {
        color: colors.text1,
        fontSize: 28,
        fontWeight:'bold',
        fontSize: 35,
        textAlign:'center',

    
    },
})