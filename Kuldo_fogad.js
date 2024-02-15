import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const Kuldo_fogad = ({navigation, route}) => {
    const {atkuld1,atkuld2} =route.params

  return (
    <View style={styles.container}>
      <Text>{atkuld1}</Text>
      <Text>{atkuld2}</Text>
      <Button
            onPress={() => navigation.navigate('Kuldo',{visszakuld:17})}
            title="Visszaküldés"
          />
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

export default Kuldo_fogad;