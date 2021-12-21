import { AntDesign, Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'

import { Dimensions, Image } from 'react-native'
import { Caption, Divider, Paragraph, Title } from 'react-native-paper';
import {useFonts, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import { ScrollView,SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Sponsors = ({navigation}) => {
    
    const [sponsors, setSponsors] = useState([
        {
            SponsorName:'Pepsi',
         SponsorId:1,
         SponsorMedia:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Pepsi_logo_new.svg/2560px-Pepsi_logo_new.svg.png',
         SponsorDetails:'The modern Pepsi logo has its origins in the 1940s, during World War II. Pepsi unveiled a new bottle cap that featured the Pepsi script surrounded by red and blue colors on a white background. Since Pepsi was recognizable with its script logo in the same manner as its main rival, Coca-Cola, the cap logo was meant as a show of U.S. patriotism.',
    },{
        SponsorName:'Samsung',
    SponsorId:2,
    SponsorMedia:'https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png',
    SponsorDetails:'The Samsung Group(or simply Samsung) (Korean: 삼성) is a South Korean multinational manufacturing conglomerate headquartered in Samsung Town, Seoul, South Korea. It comprises numerous affiliated businesses,most of them united under the Samsung brand, and is the largest South Korean chaebol (business conglomerate). As of 2020, Samsung has the 8th highest global brand value.'

    },
    {
        SponsorName:'Nike',
        SponsorId:3,
        SponsorMedia:'https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg',
        SponsorDetails:'Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area.'
    
        },
])
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
               <Title style={{color:'#fff',fontFamily:'Montserrat_500Medium'}}>Sponsors</Title>
           </View>
           
           <View style={{justifyContent:'center'}}>
              
             {
                 sponsors.map((val,key)=>(
                     <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                         <Title style={{alignSelf:'flex-start',fontSize:20,marginBottom:10}}>-{val.SponsorName}</Title>
                         <Image source={{uri:val.SponsorMedia}} style={{width:windowWidth-50,height:150,resizeMode:'contain'}} />
                         <Paragraph >
                             {val.SponsorDetails}
                         </Paragraph>
                    </View>
                 ))
             }
             </View>
             
              
                  
              
             
              
              
              </View>
             
          
        </ScrollView>
    )}
}

export default Sponsors

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        
       
    },
    header:{
        backgroundColor:'#8c58ff',
        width:windowWidth,
        height:windowHeight/4,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingLeft:20,
        paddingTop:40,
        
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
