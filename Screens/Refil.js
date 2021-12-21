import { AntDesign, Entypo } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import sky from '../assets/sky2.png'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Refil = ({navigation}) => {
    const [energy, setenergy] = useState(85)
    return (
        <ScrollView>
        <View style={styles.container}>
            <ImageBackground source={sky}  style={styles.energy}>
               
                <Entypo name='menu' size={35} style={{position:'absolute',top:20,left:20}} />
               
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{width:250,height:100,borderColor:'#057EC1',borderWidth:5,borderRadius:10,flexDirection:'row',alignItems:'center',padding:2}} >
                      <View style={{width:energy*2.36,height:85,borderRadius:10,backgroundColor:energy>59?'#79B061':energy>20?'orange':'red',zIndex:5,marginRight:5}}></View>
                       {/* {energy>24?<View style={{width:40,height:85,borderRadius:10,backgroundColor:energy>74?'#79B061':'red',zIndex:5,marginRight:5}}></View>:<View></View>}
                      {energy>74?<View style={{width:40,height:85,borderRadius:10,backgroundColor:energy>74?'#79B061':'red',zIndex:5,marginRight:5}}></View>:<View></View>}
                      {energy>99?<View style={{width:40,height:85,borderRadius:10,backgroundColor:energy>74?'#79B061':'red',zIndex:5,marginRight:5}}></View>:<View></View>}  */}
                </View>
                <View style={{width:20,height:50,borderTopRightRadius:7,borderBottomRightRadius:7,backgroundColor:'#057EC1',marginLeft:3,zIndex:3}}>
                  
                </View>
               
                </View>
                <Text style={{fontSize:30,color:'#057EC1',marginTop:20,fontWeight:'bold'}}>{energy}%</Text>
                <View style={{flexDirection:'row',paddingLeft:20,position:'absolute',bottom:70,left:0}}>
                <Text style={{fontWeight:'bold',fontSize:20,marginRight:5}}>Next refill :</Text>
                <Text style={{fontSize:20}}>Monday @ 00:00</Text>
               
            </View>
            <Text style={{fontSize:20,color:'#057EC1',fontWeight:'bold',position:'absolute',bottom:20,left:20}}>Instant refill</Text>
            </ImageBackground>
            <View style={styles.bottom}>
                <View style={{paddingLeft:20,marginTop:20}}>
            <Text style={{fontWeight:'bold',fontSize:20,marginBottom:10}}>Energy FAQ</Text>
            <Text style={{fontSize:12}}> 1.Each tournament game uses 5% of your energy bar</Text>
            <Text style={{fontSize:12}}> 2.Each sponsored game uses 10% of your energy bar</Text>
            <Text style={{fontSize:12}}> 3.Free refill every monday at midnight</Text>
            <Text style={{fontSize:12}}> 4.Instant refill on demand for #100</Text>
            <Text style={{fontSize:12}}> 5.Maintain your energy level to keep playing</Text>
            </View>
            </View>
            
        </View>
        </ScrollView>
    )
}

export default Refil

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    energy:{
        width:windowWidth,
        height:windowHeight*4/6,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
       
    },
    bottom:{
        width:windowWidth,
        height:windowHeight/2,
        backgroundColor:'#fff',
    }
})
