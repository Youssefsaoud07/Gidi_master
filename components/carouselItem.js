import React, { useState } from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Pressable, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

function CarouselItem({ item, index }, parallaxProps) {
    
  return (
    <Pressable onPress={() => alert('Image description:' + item.description)}>
      <SafeAreaView style={styles.item}>
        <ParallaxImage
          source={{ uri: item.source }} /* the source of the image */
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...parallaxProps} /* pass in the necessary props */ 
        />
        
      </SafeAreaView>
    </Pressable>
  );
}

export default CarouselItem;