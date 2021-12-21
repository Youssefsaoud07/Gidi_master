import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'

import { Dimensions, Image } from 'react-native'
import { Caption, Divider, Paragraph, Title } from 'react-native-paper';
import {useFonts, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import { ScrollView,SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import game from '../assets/Game.png'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const About = ({navigation}) => {
    
  const [about, setAbout] = useState('Gidi-Way is a platform where Nigerians play fun games to win weekly cash prizes. The games are simple and absolutely anyone can win, all it takes is a bit of luck.The initiative is largely driven by the desire of the creators to put money back into the pockets of Nigerians, the weekly games are simply a way to ensure a certain level of equilibrium. Each Gidi-Game is sponsored, the generosity of our sponsors is what allows us to be a blessing to Nigerians every other week. Gidi-Gidi is free and always will be.')
    let [fontsLoaded] = useFonts({Montserrat_500Medium})
    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
    
        <ScrollView style={styles.container}>
            <View style={{alignItems:'center',justifyContent:'center',padding:20}}>
           <View style={styles.header}>
               <TouchableOpacity onPress={()=>navigation.openDrawer()}>
               <AntDesign name='arrowleft' size={40} color='white'  />
               </TouchableOpacity>
               <Title style={{color:'#fff',fontFamily:'Montserrat_500Medium',alignSelf:'center',fontSize:25}}>GIDI-GIDI</Title>
           </View>
           
        <View style={{padding:10,marginTop:20,marginBottom:40}}>
           <Paragraph lineBreakMode='head' style={{marginBottom:40}}> {about} </Paragraph>

           <Title>The GIDI Game</Title>
           <Image source={game} style={{width:80,height:80,resizeMode:"contain"}} />
            </View>
             
              
                  
              
             
              
              
              </View>
             
          
        </ScrollView>
    )}
}

export default About

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        
       
    },
    header:{
        backgroundColor:'#139f4f',
        width:windowWidth,
        height:windowHeight/4,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        padding:20,
      
        
    },
    balance:{
        width:windowWidth-50,
        height:100,
        backgroundColor:'#f9fafd',
        justifyContent:'center',
        alignItems:'center'
    },
    lisWrapper:{
        flexDirection:'row',
        flexWrap:'wrap',
        
    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:70,
        marginBottom:20
    },
    label:{
        marginRight:-160,
        bottom:20,
        width:150
        
    },
   
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 20,
        paddingRight:10,
        borderColor:'blue',
        width:300,
        color:'#000'
      },
      save:{
          justifyContent:'center',
          alignItems:'center',
          width:300,
          height:70,
          backgroundColor:'#5271ff',
          alignSelf:'center',
          marginTop:20
      }
})
