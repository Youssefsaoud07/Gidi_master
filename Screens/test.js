import React,{useState,useEffect} from 'react'
import { Image, ScrollView, StyleSheet, Text, View,Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import gb from '../assets/splash.png'
import CountDown from 'react-native-countdown-component'
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Avatar, Paragraph, Title } from 'react-native-paper'
import star from '../assets/start.png'

const Test = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    const [mini, setMini] = useState([
      {
         id:1,
         color:'#4e1a3d'
    },
    {
      id:1,
      color:'#4e1a3d'
 },
 {
  id:1,
  color:'#4e1a3d'
},
  ])
  const [trueMini, setTrueMini] = useState(1)
  const [sel, setSel] = useState(null)
  const handelCorrect=(a)=>{
    setSel(a)}
  useEffect(() => {
   setTimeout(() => {
     setTrueMini(Math.floor(Math.random() * 3) + 1 )
     setSel(null)
   }, 5000);
  }, [sel])

 
    const [sponsors, setSponsors] = useState([
        {
      id:1,
      name:'PEPSI',
      img:'https://www.albawaba.com/sites/default/files/im_new/israa/Pepsi3.jpg?width=1200&enable=upscale'

    },
    {
        id:2,
        name:'PEPSI',
        img:'https://play-lh.googleusercontent.com/UwI2KbMTONxELV5umJD97svuJKQ8G477g_Z7KAzzKj758KmKeH3aw1m9jAMHp8Hzq7I'
  
      },
      {
        id:3,
        name:'PEPSI',
        img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pepsi-blue-2021-1619277087.jpeg'
  
      },
])
    return (
      <View>
        <StatusBar animated barStyle='default' />
       <View
     //  stickyHeaderIndices={[0]}

       >
         
         
                  
         
      <View>
        <View style={{
          flexDirection:'row',
          width:windowWidth,
          height:50,
          paddingRight:20,
          paddingLeft:20,
          justifyContent:'space-between'
        }}>
          <View style={styles.case}>
            <Text style={styles.title}>
              Next 
            </Text>
            <Text style={styles.cap}>
              Game
            </Text>
          </View>
          <View style={styles.case}>
            <Text style={styles.title}>
              3 
            </Text>
            <Text style={styles.cap}>
              Winners
            </Text>
          </View>
          <View style={styles.case}>
            <Text style={styles.title}>
              #1M
            </Text>
            <Text  style={styles.cap}>
              EACH
            </Text>
          </View>
        </View>
        <View style={{marginTop:50,padding:10}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={{uri:sponsors[0].img}} style={{
          width:100,
          height:100,
          borderRadius:50,
        }} />
        <Title style={{marginLeft:20}}>
          {sponsors[0].name}
        </Title>
        </View>
        <Text style={{fontSize:20}}>
        {sponsors[0].name}
        </Text>
         <View style={{padding:1}}>
        <Text>N° 1 Plug in Nigeria for refreshing soft drinks.</Text> 
        <Text>XMAS BONANZA : 50% reduction on all purchases</Text> 
        <Text>exceeding #1500 </Text> 
        <Text style={{color:'blue'}}>Address : 21 Avenue Fisher, Lagos, Nigeria.</Text>
        <Text>+234 845 756 123 </Text> 
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
         <View style={{
         backgroundColor:'#cf3282',
         color:'#fff',
         height:60,
         width:60,
         borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
        }}
         >
       <FontAwesome5 name='instagram' size={35} color='#fff'  />
         </View>
         <View style={{
         backgroundColor:'blue',
         color:'#fff',
         height:60,
         width:60,
         borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
        }}
         >
       <FontAwesome name='facebook' size={35} color='#fff' />
       </View>
       <View style={{
         backgroundColor:'red',
         color:'#fff',
         height:60,
         width:60,
         borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
        }}
         >
       <FontAwesome5 name='youtube' size={35} color='#fff' />
       </View>
       <View style={{
         backgroundColor:'yellow',
         color:'#fff',
         height:60,
         width:60,
         borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
        }}
         >
       <FontAwesome name='snapchat-ghost' size={35} color='#000' />
       </View>
       </View>
       <View style={{
         flexDirection:'row',
         justifyContent:'space-evenly',
         marginTop:30,
         width:windowWidth,
         height:80,
         backgroundColor:'#faf7f7',
         alignItems:'center',
        
         }}>
           {mini.map((val,key)=>(
             <TouchableOpacity key={key} onPress={()=>handelCorrect(val.id)} >
           {sel===val.id&&sel===trueMini?<Image source={star} style={{height:50,width:50}} />:<View style={{...styles.cercle,backgroundColor:val.color}}></View>}
            </TouchableOpacity>
           ))}
         
         
       </View>
       <Text style={{alignSelf:'center',fontSize:18,marginBottom:200}}>Where is the star ?</Text>
        </View>
        </View>
             
           
             </View>
       </View>
   
    )
}

export default Test

const styles = StyleSheet.create({
  title:{
   fontSize:21,
   color:'#369694',
   fontWeight:'bold'
  },
  case:{
    alignItems:'center',
    
  },
  cap:{
    color:'black'
    
  },
  cercle:{
    backgroundColor:'red',
    width:50,
    height:50,
   borderTopLeftRadius:30,
   borderTopRightRadius:30,
   borderBottomLeftRadius:20,
   borderBottomRightRadius:40
  }
})
