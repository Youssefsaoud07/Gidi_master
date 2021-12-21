import { Entypo } from '@expo/vector-icons'

import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity,StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <StatusBar />
              <View style={{flexDirection:'row' , position: "absolute",
                  top: 20,alignItems:'center',
                  zIndex:5,
                  left: 20,}}>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{
                    
                }}
              >
                <Entypo name="menu" size={40} color={'#fff'} />
              
              </TouchableOpacity>
              <Text style={{color:"#fff",fontWeight:'bold',marginLeft:10,fontSize:16 }}>{item.category}</Text>
              </View>
            <Image style={styles.image} source={ { uri:item.img }} style={{width:width,height:height, resizeMode:'cover'}} />
          
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width ,
        height: height,
        backgroundColor: 'white',
        transform: [{ rotate: '0deg'}],
       
        
       
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width,
        height: height,
      
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})

export default CarouselItem