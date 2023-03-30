// import React from 'react';
import React, { useState , } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View , Text , link2 , link , TouchableOpacity , Image } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

const Bankaccount = () => {
  const navigation = useNavigation();
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  //const [securityCode, setSecurityCode] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const handleProcessPayment = () => {
    if (bankName && accountNumber && ifscCode) {
      // All fields are filled in
      setAllFieldsFilled(true);
      alert('Payment Successful');
    } else {
      // Display validation message
      setAllFieldsFilled(false);
      alert('All fields are required');
    }
  };

  return (
    <View>
    <View>
    <Input
        placeholder="Bank Name"
        leftIcon={{ type: 'font-awesome', name: 'university' }}
        onChangeText={(value) => setBankName(value)}
        value={bankName}
      />
      <Input
        placeholder="Account Number"
        leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
        keyboardType="numeric"
        onChangeText={(value) => setAccountNumber(value)}
        value={accountNumber}
      />
      <Input
        placeholder="IFSC Code"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={(value) => setIfscCode(value)}
        value={ifscCode}
      />
      <Button
        title="Process Payment"
        icon={<Icon name="check" color="white" />}
        containerStyle={{ marginTop: 20 }}
        onPress={handleProcessPayment}
      />
      </View>
     
    </View>
      
  
    

        
        

);

};



        // const styles = StyleSheet.create({
        //     container: {
        //       flex: 1,
        //       alignItems: 'center',
        //       justifyContent: 'center',
        //       padding: 20,
        //       backgroundColor: '#fff',
        //     },
        //   });

export default Bankaccount;