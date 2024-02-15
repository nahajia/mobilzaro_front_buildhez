import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Proba from './Proba';
import Mogyoro from "./Mogyoro"
import Repa from './Repa';
import Retek from "./Retek"
import Kepfeltoltes from "./Kepfeltoltes"
import Felvitel from "./Felvitel"
import Lenyiloteszt from "./Lenyiloteszt"
import Lenyilo from "./Lenyilo"
import Marvel from "./Marvel"
import Reszletek from "./Reszletek"
import Kozosscreen from "./Kozosscreen"
import Ujlap from "./Ujlap"
import JanProba from "./JanProba"
import Video from "./Video"
import Videoadatb from "./VideoAdatb"
import UjlapVideo from "./UjlapVideo"
import KeresesProba from './KeresesProba';
import Keresesszoveg from './Keresesszoveg'
import Kosar from './Kosar';

const menulatszik=false
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
       <Button
        onPress={() => navigation.navigate('Proba')}
        title="Próba screen meghívása"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function Root({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    { menulatszik?
     <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    : null}
    
    <Drawer.Screen name="Mogyoro" component={Mogyoro} />
    <Drawer.Screen name="Kepfeltotles" component={Kepfeltoltes} />  
    <Drawer.Screen name="Felvitel" component={Felvitel} />     
    <Drawer.Screen name="Lenyiloteszt" component={Lenyiloteszt} /> 
    <Drawer.Screen name="Lenyilo" component={Lenyilo} /> 
    <Drawer.Screen name="Marvel" component={Marvel} /> 
    <Drawer.Screen name="Kozosscreen" component={Kozosscreen} /> 
    <Drawer.Screen name="JanProba" component={JanProba} /> 
    <Drawer.Screen name="Video" component={Video} /> 
    <Drawer.Screen name="Videoadatb" component={Videoadatb} /> 
    <Drawer.Screen name="KeresesProba" component={KeresesProba} /> 
    <Drawer.Screen name="Keresesszoveg" component={Keresesszoveg} /> 
    <Drawer.Screen name="Kosar" component={Kosar} /> 
   
    </Drawer.Navigator>

  );
}




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Root" component={Root} options={{headerShown:false}} />
        <Stack.Screen name="Proba" component={Proba}  />  
        <Stack.Screen name="Repa" component={Repa}  />       
        <Stack.Screen name="Retek" component={Retek}  />   
        <Stack.Screen name="Reszletek" component={Reszletek}  />   
        <Stack.Screen name="Ujlap" component={Ujlap}  />    
        <Stack.Screen name="UjlapVideo" component={UjlapVideo}  />   
      </Stack.Navigator>     
    </NavigationContainer>
  );
}