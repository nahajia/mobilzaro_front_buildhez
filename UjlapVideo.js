import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const UjlapVideo = ({route}) => {
    const {atkuld1,atkuld2} =route.params

  return (
    <View style={{flex: 1, padding: 24}}>
    <Text>{atkuld1}</Text>
    
      <WebView 
    source={{ uri: 'https://www.youtube.com/embed/UwLlz_f27l0?si=UsUlAs7n1p1lvnGw' }} 
    style={{ flex: 1 }} />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UjlapVideo;