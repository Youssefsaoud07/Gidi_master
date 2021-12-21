import React, { useContext,useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import TopNavigation from "./TopNavigation";
import { TabBar } from "react-native-tab-view";
import Register from "../Screens/Register";
import Login from "../Screens/Login";

export default function AuthTabs({navigation,route}) {

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#0178BE' }}
        />
      );
  const layout = useWindowDimensions();

  
  const [index, setIndex] = useState(route?.params?.index?1:0)

  const [routes] = useState([
    { key: "first", title: "Sign-up" },
    { key: "second", title: "Login" },
  ]);

  const renderScene = SceneMap({
    first: Register,
    second: Login,
  });
  

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    
      renderTabBar={renderTabBar}
      
    />
  );
}