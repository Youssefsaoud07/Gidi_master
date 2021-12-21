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
import img1 from '../assets/home/1.png'
import img2 from '../assets/home/2.png'
import img3 from '../assets/home/3.png'
import img4 from '../assets/home/4.png'
import img5 from '../assets/home/5.png'
import img6 from '../assets/home/6.png'
import img7 from '../assets/home/7.png'

const CategoryUFCScreen = () => {
    const [index, setIndex] = useState(1)
 const data=[
     {
     id:1,
     category:'Watches',
     img:'https://res.cloudinary.com/musk07/image/upload/v1640009680/1_vjs3u0.png'
 },
 {
    id:2,
    category:'Watches',
    img:'https://res.cloudinary.com/musk07/image/upload/v1640009729/2_yajvqm.png'
 },
 {
    id:3,
    category:'Watches',
    img:'https://res.cloudinary.com/musk07/image/upload/v1640009803/5_vihh6x.png'
 },
 {
    id:4,
    category:'Watches',
    img:'https://res.cloudinary.com/musk07/image/upload/v1640009862/7_jy6uyw.png'
 },
 {
    id:5,
    category:'Watches',
    img:'https://res.cloudinary.com/musk07/image/upload/v1640010127/3_utki9c.png'
 },
 
 {
    id:7,
    category:'Watches',
    img:'https://res.cloudinary.com/musk07/image/upload/v1640010173/4_lq84yt.png'
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

export default CategoryUFCScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    // transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});