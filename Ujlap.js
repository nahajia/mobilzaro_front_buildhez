import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ujlap = ({route}) => {
    const {atkuld1,atkuld2} =route.params

  return (
    <View style={styles.container}>
      <Text>{atkuld1}</Text>
      <Text>{atkuld2}</Text>
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

export default Ujlap;