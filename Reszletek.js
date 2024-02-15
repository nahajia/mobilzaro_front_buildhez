import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Retek = ({route}) => {
  const {atkuld} =route.params



  return (
    <View style={styles.container}>
      <Text>{atkuld}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Retek;