import React, { useContext, useState } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";

import StreatWearScreen from "./streatWearScreen";

const CategoryScreen = () => {
    const [index, setIndex] = useState(1)
 const data=[
     {
     id:1,
     category:'Sreetwear',
     img:'https://i.pinimg.com/originals/c0/cc/58/c0cc585c23ff90ad344df5faabcfcfac.jpg'
 },
 {
    id:2,
    category:'Sreetwear',
    img:'https://i.pinimg.com/originals/25/a4/f0/25a4f0ef9d7475f4653c0ac6ed686e3c.jpg'
 },
 {
    id:3,
    category:'Sreetwear',
    img:'https://i.pinimg.com/originals/ba/1b/63/ba1b63c201d7b4149aadc8524a39764e.jpg'
 },
]

  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  // console.log(articles && articles[9]);

  return (
    <View style={styles.carousel}>
      {data && (
        <Carousel
          firstItem={data.slice(0, 10).length - 1}
          layout={"stack"}
          data={data.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <StreatWearScreen item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    // transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});