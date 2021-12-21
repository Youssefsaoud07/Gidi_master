import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'

import { Dimensions, Image } from 'react-native'
import { Caption, Divider, Title } from 'react-native-paper';
import {useFonts, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import UserInfo from '../components/userInfo';
import { ScrollView,SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import Nigeria from '../assets/Nigeria.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Language = ({navigation}) => {
    console.log(windowWidth)
    const [isOpen, setIsOpen] = useState(false)
   
    let [fontsLoaded] = useFonts({Montserrat_500Medium})
    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
         <ScrollView >
            <View style={{...styles.container ,alignItems:'center',backgroundColor:'#fff'}}>
           <View style={styles.header}>
               <TouchableOpacity onPress={()=>navigation.openDrawer()}>
               <Entypo name='arrow-long-left' size={30} color='white'  />
               </TouchableOpacity>
               <Title style={{color:'#fff',fontFamily:'Montserrat_500Medium',marginTop:30,fontSize:25}}>Language</Title>
           </View>
           
              
              
               <View style={{padding:20,backgroundColor:'#fff'}}>
               <View style={styles.textContainer}>
           <View style={styles.label}>
               <Text style={{marginBottom:15,color:'#000'}}>COUNTRY</Text>
               <Image source={Nigeria} style={{width:50,height:25}} />
           </View>
           <TextInput  style={styles.input}  />
        </View>
        
        <View style={styles.textContainer}>
           <View style={styles.label}>
               <Text style={{marginBottom:15,color:'#000'}}>LANGUAGE</Text>
               
               <Icon
                  name='translate'
                  
                  size={26}
                  />
           </View>
           <TextInput style={styles.input}  />
        </View>


        <TouchableOpacity>
            <View style={styles.save}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>
                    Save
                </Text>
            </View>
        </TouchableOpacity>
              </View>
             
              
                  
              
             
              
              
              </View>
             
          
        </ScrollView>
    )}
}

export default Language

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:windowWidth,
        height:windowHeight,
       
    },
    header:{
        backgroundColor:'#5271ff',
        width:windowWidth,
        height:windowHeight/4,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingLeft:20,
        paddingTop:20,
        
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
        marginTop: windowHeight<600?40:70,
        marginBottom:20
    },
    label:{
        marginRight:-160,
        bottom:20,
        width:150
        
    },
   
    input: {
        height:40,
        marginTop:10,
        marginLeft:10,
        borderBottomWidth: 1,
        paddingLeft: 60,
        paddingRight:10,
        borderColor:'blue',
        width:'90%',
        color:'#000',
        
      },
      save:{
          justifyContent:'center',
          alignItems:'center',
          width:'90%',
          height: windowHeight<600?50:70,
          backgroundColor:'#5271ff',
          alignSelf:'center',
          marginTop:20
          
      }
})
