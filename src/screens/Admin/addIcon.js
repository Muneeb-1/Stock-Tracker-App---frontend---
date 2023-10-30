import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';// Replace with your icon library
const validIconNames = ['users', 'icon2', 'icon3'];
export default function AddIcon() {
    const [iconName, setIconName] = useState('');

  const validateIcon = () => {
    if (validIconNames.includes(iconName)) {
      // Icon name is valid, you can use it
      // Add your logic here
      Alert.alert('Success', 'Icon name is valid.');
    } else {
      Alert.alert('Error', 'Invalid icon name. Please enter a valid icon name.');
    }
  };

  return (
    <View>
      <Text>Enter Icon Name:</Text>
      <TextInput
        placeholder="Icon Name"
        value={iconName}
        onChangeText={setIconName}
      />
      <Button title="Validate Icon" onPress={validateIcon} />
    </View>
  );
}
  