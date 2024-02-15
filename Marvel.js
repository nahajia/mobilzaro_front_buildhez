import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button} from 'react-native';
import Ipcim from "./Ipcim"

const Marvel = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View>
            <Text>
              {item.film_id}, {item.film_cim}
            </Text>
            <Button
       onPress={() => navigation.navigate('Reszletek', {atkuld:item.film_id} )}
        title="Részletek: "
      />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Marvel;