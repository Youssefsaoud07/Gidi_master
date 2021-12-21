import React, { useContext, useState } from "react";
import { useWindowDimensions,View,Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";


import HomeConfort from "../Screens/HomeConfort";
import CategoryScreen from "./streatWearScreen";
import CategoryUFCScreen from "./categoryUFCScreen";
import StreatWearScreen from "./streatWearScreen";
import TapNav from "./Tapnav";
import CategoryFoodScreen from "./categoryFoodScreen";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function HomeTabs({navigation}) {
  const layout = useWindowDimensions();

 const [index, setIndex] = useState(1)

  const [routes] = useState([
    { key: "first", title: "Watches" },
    { key: "second", title: "Skating" },
    { key: "third", title: "Breakfast" },
  ]);

  const renderScene = SceneMap({
    first: CategoryScreen,
    second: CategoryUFCScreen,
    third:CategoryFoodScreen
   

  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TapNav index={index} setIndex={setIndex}/>}
    />
  );
}