// import React from 'react';
import React, { useState, } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, link2, link, TouchableOpacity, Image } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import PaymentPage from './PaymentPage';

const CreditDebit = () => {
  const navigation = useNavigation();
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const handleProcessPayment = () => {
    if (cardholderName && cardNumber && expirationDate && securityCode) {
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
          placeholder="Cardholder Name"
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          onChangeText={(value) => setCardholderName(value)}
          value={cardholderName}
        />
        <Input
          placeholder="Card Number"
          leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
          keyboardType="numeric"
          onChangeText={(value) => setCardNumber(value)}
          value={cardNumber}
        />
        <Input
          placeholder="Expiration Date"
          leftIcon={{ type: 'font-awesome', name: 'calendar' }}
          keyboardType="numeric"
          onChangeText={(value) => setExpirationDate(value)}
          value={expirationDate}
        />
        <Input
          placeholder="Security Code"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          keyboardType="numeric"
          onChangeText={(value) => setSecurityCode(value)}
          value={securityCode}
          secureTextEntry={true}
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
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },

//   buttonContainer: {
//     backgroundColor: '#2196F3',
//     borderRadius: 5,
//     padding: 10,
//     marginTop: 10
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',

//   },
// });

export default CreditDebit;