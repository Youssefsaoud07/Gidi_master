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
import img1 from '../assets/home/14.png'
import img2 from '../assets/home/15.png'
import img3 from '../assets/home/16.png'
import img4 from '../assets/home/17.png'
import img5 from '../assets/home/18.png'



const CategoryFoodScreen = () => {
    const [index, setIndex] = useState(1)
 const data=[
     {
     id:1,
     category:'Breakfast',
     img:"https://res.cloudinary.com/musk07/image/upload/v1640008312/15_jlcqov.png"
 },
 {
    id:2,
    category:'Breakfast',
    img:"https://res.cloudinary.com/musk07/image/upload/v1640009728/17_ncdkzx.png"
 },
 {
    id:3,
    category:'Breakfast',
    img:"https://res.cloudinary.com/musk07/image/upload/v1640008307/16_zmpupi.png"
 },
 {
    id:4,
    category:'Breakfast',
    img:"https://res.cloudinary.com/musk07/image/upload/v1640009987/14_lm7cqg.png"
 },
 {
    id:5,
    category:'Breakfast',
    img:"https://res.cloudinary.com/musk07/image/upload/v1640010132/18_uis6z6.png"
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

export default CategoryFoodScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    // transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});