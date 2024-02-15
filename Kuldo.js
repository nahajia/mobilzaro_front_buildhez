import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Kuldo = ({ navigation, route }) => {
  const {visszakuld} =route.params

  return (
    <View style={styles.container}>

     <Button
            onPress={() => navigation.navigate('Kuldo_fogad',{atkuld1:1,atkuld2:"atkuldott szoveg"})}
            title="Adatküldés screennek"
          />

<Text>{visszakuld}</Text>
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

export default Kuldo;