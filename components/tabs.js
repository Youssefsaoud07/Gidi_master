import React, { useContext,useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import WeeklyRanking from "../Screens/WeeklyRank";
import Intermidiary from "../Screens/Intermidiary";
import TopNavigation from "./TopNavigation";
import { TabBar } from "react-native-tab-view";

export default function Tabs({navigation,route}) {

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
    { key: "first", title: "Game" },
    { key: "second", title: "Weekly" },
  ]);

  const renderScene = SceneMap({
    first: Intermidiary,
    second: WeeklyRanking,
  });
  

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ backgroundColor: '#057EC1' }}
      renderTabBar={renderTabBar}
      
    />
  );
}