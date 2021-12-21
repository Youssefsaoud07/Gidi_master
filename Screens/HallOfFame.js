import React,{useState} from 'react'
import { Image, ImageBackground, ScrollView,  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  AppLoading  from 'expo-app-loading';
import header from '../assets/Gidi.png'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import cup from '../assets/cup.png'
import { Caption, Title } from 'react-native-paper'
import {
    useFonts,
    LibreFranklin_700Bold
  } from '@expo-google-fonts/libre-franklin';
  import { Montserrat_500Medium } from '@expo-google-fonts/montserrat';
  import { StatusBar } from 'expo-status-bar';
 


const HallOfFame = ({navigation}) => {
    let [fontsLoaded] = useFonts({LibreFranklin_700Bold,Montserrat_500Medium})
    const [Winners, setWinners] = useState([
        {
            name:'KUNLE Lawal',
            picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHajfC29NA-O-cFQzCSIE_F85CuSrrAHp_0Q&usqp=CAU',
            timeToResolve:5,
            Attempt:1,
            Location:'LAGOS',
            Ammount:'50,000'
        },
        {
            name:'KEVWE Justin',
            picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHajfC29NA-O-cFQzCSIE_F85CuSrrAHp_0Q&usqp=CAU',
            timeToResolve:5,
            Attempt:1,
            Location:'WARRI',
            Ammount:'50,050'
        },
        {
            name:'Kylie Jenner',
            picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHajfC29NA-O-cFQzCSIE_F85CuSrrAHp_0Q&usqp=CAU',
            timeToResolve:3,
            Attempt:1,
            Location:'LA',
            Ammount:'50,500'
        },
        {
            name:'Kylie Jenner',
            picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHajfC29NA-O-cFQzCSIE_F85CuSrrAHp_0Q&usqp=CAU',
            timeToResolve:3,
            Attempt:1,
            Location:'LA',
            Ammount:'50,500'
        },

    ])
    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <ScrollView style={styles.container}>
       
            <View style={{flexDirection:'row'}}>
                <View style={{paddingLeft:25,paddingRight:25,justifyContent:'center'}}>
                    <TouchableOpacity
                    onPress={()=>navigation.openDrawer()}>
            <MaterialCommunityIcons name='menu' size={35} style={{marginBottom:50}} />
            </TouchableOpacity>
            <Image source={cup} style={{width:35,height:35}} />
            </View>
            <Image source={header} style={{width:244,height:100,alignSelf:'center'}}  />
            </View>
            <View style={{alignItems:"center" ,paddingLeft:30,marginTop:20}}>
            <Title style={{fontFamily:'Montserrat_500Medium'}} >WINNERS of this Week</Title>
            </View>
             <View>
                 {Winners.map((val,key)=>(
                      <View style={{flexDirection:'row',marginBottom:  20}}>
                      <View style={{paddingLeft:15,justifyContent:'flex-start'}}>
                        <Text style={{width:70,fontSize:16,marginTop:40,color:'#057ec1',fontFamily:'Montserrat_500Medium'}}>{val.name}</Text>
                 <View style={{marginTop:30,justifyContent:'center'}}>
                  <Ionicons name='location' size={ 30} style={{color:'#057ec1',fontFamily:'Montserrat_500Medium'}} />
                  <Text>{val.Location}</Text>
                  </View>
                  
                  </View>
                  <View>
                  <ImageBackground source={{uri:val.picture}} style={{width:240,height:300,alignSelf:'center',resizeMode:'contain'}} >
                  <View style={{position: 'absolute', top: 0, left: 0, right: 20, bottom: 30, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <Text style={{color:'#fff',fontFamily:'LibreFranklin_700Bold'}}>#{val.Ammount}</Text>
                  </View>
                  </ImageBackground>
                  <Caption style={{fontFamily:'Montserrat_500Medium'}}>Resolved in:{val.timeToResolve}minutes</Caption>
                  <Caption style={{fontFamily:'Montserrat_500Medium'}}>Attempt:{val.Attempt}</Caption>
                  </View>
                  </View>
                 ))}
             </View>
        </ScrollView>
    )}
}

export default HallOfFame

const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        paddingLeft:10
        
    }
})
