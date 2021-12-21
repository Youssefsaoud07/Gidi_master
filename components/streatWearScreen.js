import React, { useContext, useState } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "./carousel";

import CarouselItem from "./carouselItem";

import StreatWearScreen from "./streatWearScreen";
import img1 from '../assets/home/7.png'
import img2 from '../assets/home/8.png'
import img3 from '../assets/home/9.png'
import img4 from '../assets/home/11.png'
import img5 from '../assets/home/12.png'
import img6 from '../assets/home/13.png'


const CategoryScreen = () => {
    const [index, setIndex] = useState(1)
 const data=[
  
 {
    id:2,
    category:'Skating',
    img:"https://res.cloudinary.com/musk07/image/upload/v1640010066/12_o7138m.png"
 },
 {
    id:3,
    category:'Skating',
    img:"https://res.cloudinary.com/musk07/image/upload/v1640010058/13_yqreoi.png"
 },
 {
    id:4,
    category:'Skating',
    img:"https://res.cloudinary.com/musk07/image/upload/v1640009923/8_ppg10v.png"
 },
 {
    id:5,
    category:'Skating',
    img:"https://res.cloudinary.com/musk07/image/upload/v1640009971/11_jgfosb.png"
 },
 {
    id:6,
    category:'Skating',
    img:"https://res.cloudinary.com/musk07/image/upload/v1640009953/10_oyuqpn.png"
 },

]

  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  // console.log(articles && articles[9]);

  return (
    <View style={styles.carousel}>
      {/* {data && (
        <Carousel
          firstItem={data.slice(0, 10).length - 1}
          layout={"default"}
          data={data.slice(0, 10)}
          sliderHeight={200}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <StreatWearScreen item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )} */}
      <Carousel data={data} />
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