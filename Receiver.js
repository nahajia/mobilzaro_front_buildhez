// Receiver.js

import React from 'react';
import { View, Text } from 'react-native';

const Receiver = ({ number, callbackFunction }) => {
  // A függvény meghívása a kapott paraméterekkel
  callbackFunction(number);

  return (
    <View>
      <Text>Receiver Component</Text>
    </View>
  );
};

export default Receiver;