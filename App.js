import 'react-native-gesture-handler';
import React, { useContext } from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Register from './Screens/Register';
import gb from './assets/Gidi.png'
import { DrawerContent } from "./components/DrawerContent";
import HallOfFame from './Screens/HallOfFame';
import {Dimensions} from 'react-native';
import Profile from './Screens/Profile';
import Language from './Screens/Language';
import Sponsors from './Screens/Sponsors';
import About from './Screens/About';
import Practice from './Screens/Practice';
import Boiler from './Screens/Boiler';
import Ranking from './Screens/Ranking';
import YearlyRanking from './Screens/YearlyRanking';
import Refil from './Screens/Refil';
import WeeklyRanking from './Screens/WeeklyRank';
import Intermidiary from './Screens/Intermidiary';
import Tabs from './components/tabs';
import AuthTabs from './components/AuthTabs';
import HomeTabs from './components/homeTab';
import LoginProvider from './Context/index';
import { useLogin } from './Context/index';
const Drawer = createDrawerNavigator();

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  return (
   
    //<Register />
    //<Login />
    <LoginProvider>
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false,
    
    drawerStyle: {
    
      width: windowWidth-50,
      },
  }}
  drawerContent={props=><DrawerContent{... props} />} 
  
  >
       <Drawer.Screen  name="Login/Logout" component={AuthTabs} />
        <Drawer.Screen  name="Hall of Fame" component={YearlyRanking} />
        <Drawer.Screen  name="Home" component={HomeTabs} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Language" component={Language} />
        <Drawer.Screen name="Sponsors" component={Tabs} />
        <Drawer.Screen name="Tournament" component={Tabs} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="ranking" component={Intermidiary} />
        <Drawer.Screen name="Refil" component={Refil} />
        <Drawer.Screen name="Practice" component={Practice} />
      </Drawer.Navigator>
    </NavigationContainer>
   
   </LoginProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
