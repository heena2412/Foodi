// import React from 'react';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, link2, link, TouchableOpacity, Image } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import Placeorder from './Placeorder';



const PaymentPage = () => {
  const navigation = useNavigation();


  return (
    

    <View style={{ justifyContent: 'center', alignSelf: 'center' }}>


      <View>
        <Text style={{ textAlign: 'center', alignSelf: 'center', paddingTop: 300, fontSize: 22, color: 'red' }}>Choose Payment Option For Payment </Text>
        <Button
          title="UPI"
          //icon={<Icon name="check" color="white" />}
          containerStyle={{
            marginTop: 5,
            Text: 'center',
            paddingTop: 20,

          }}

          onPress={() => navigation.navigate('Upi')}
        />
      </View>
      <View>
        <Button
          title="Cash On Delivery"
          //icon={<Icon name="check" color="white" />}
          containerStyle={{
            marginTop: 30,

          }}
          onPress={() => navigation.navigate('COD')}
        />
      </View>
      <View>
        <Button
          title="Cancel Payment"
          //icon={<Icon name="check" color="white" />}
          containerStyle={{
            marginTop: 30

          }}
          onPress={() =>  navigation.navigate('cart')}
        />
      </View>
    </View>

  )
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30,
//     backgroundColor: '#fff',
//   },



//});

export default PaymentPage;
