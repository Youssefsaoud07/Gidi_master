import React from 'react';
import {View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./carouselItem";
import styles from "./styles";

const { width } = Dimensions.get("window");
export default function CustomSlider({ data }) {
  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 10,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container}>
      <Carousel {...settings} />
    </View>
  );
}