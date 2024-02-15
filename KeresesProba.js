import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, TextInput, Button} from 'react-native';
import Ipcim from './Ipcim';

const KeresesProba = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'film');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);


const kereses=async ()=>{
    //alert(text)
    var adatok ={
        "bevitel1":text
    }
    try {
        const response = await fetch(Ipcim.Ipcim+'keresszoveg',
        {
            method: "POST",
            body: JSON.stringify(adatok),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          }
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }  


}


  return (
    <View style={{flex: 1, padding: 24}}>

<TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

<Button 
title="Keresés"
onPress={()=>kereses() }
/>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.film_cim}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default KeresesProba;