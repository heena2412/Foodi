// import React from 'react';
import React, { useState , } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View , Text , link2 , link , TouchableOpacity , Image } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

const Upi = () => {
  const navigation = useNavigation();
  const [bankName, setBankName] = useState('');
 
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const handleProcessPayment = () => {
    if (bankName ) {
      // All fields are filled in
      setAllFieldsFilled(true);
      alert('Payment Succesfully');
    } else {
      // Display validation message
      setAllFieldsFilled(false);
      alert('Please Enter UPI ID');
    }
  };

  return (
    <View>
    <View>
    <Input
        placeholder="Enter UPI ID"
        leftIcon={{ type: 'font-awesome', name: 'university' }}
        onChangeText={(value) => setBankName(value)}
        value={bankName}
      />
      
      <Button
        title="Request Payment"
        icon={<Icon name="check" color="white" />}
        containerStyle={{ marginTop: 20 }}
        onPress={handleProcessPayment}
      />
      </View>

      {/* <Image source={require('tacos veg.jpg')} /> */}
     
    </View>
      
);

};


        // const styles = StyleSheet.create({
        //     container: {
        //       flex: 1,
        //       alignItems: 'center',
        //       justifyContent: 'center',
        //       padding: 20,
        //       //backgroundColor: '#fff',
        //     },
        //   });

export default Upi;