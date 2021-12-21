import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import React, { useState,useRef } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Dimensions } from 'react-native'
import { Caption, Divider, Title } from 'react-native-paper';
import {useFonts, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import UserInfo from '../components/userInfo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Withdraw from './Withdraw';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = ({navigation}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [withdraw, setWithdraw] = useState(false)
    const flatlistRef =useRef()
    const scrollRef = useRef(0);
    
   

      const onPressFunction = () => {
        setIsOpen(!isOpen)
       
    };

    const [user, setUser] = useState(
        {name:'Youssef',
        Balance:'250,000',
        AccountNum:'XXXX-XXXX-XXXX-XXXX',
        Withdrawed:'30,000',

        victories:[{
            Date:'10/12/2021',
            Speed:'5',
            Attmpt:'4',
            Amount:'50,000',
            
        },
        {
            Date:'17/12/2021',
            Speed:'2',
            Attmpt:'2',
            Amount:'50,000',

            
        },
        {
            Date:'22/12/2021',
            Speed:'2',
            Attmpt:'3',
            Amount:'50,000',

            
        },
    ]
    })
    let [fontsLoaded] = useFonts({Montserrat_500Medium})
    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
    
        <ScrollView 
       
       
       
        
        style={styles.container}>
            <View style={{alignItems:'center',backgroundColor:'#fff'}}>
           <View style={styles.header}>
               <TouchableOpacity onPress={()=>navigation.openDrawer()}>
               <Entypo name='arrow-long-left' size={30} color='white'  />
               </TouchableOpacity>
               <Title style={{color:'#fff',fontFamily:'Montserrat_500Medium',marginTop:20,fontSize:25}}>Yo {user.name}</Title>
           </View>
           <View style={{justifyContent:'flex-start',width:windowWidth,padding:20,backgroundColor:'#fff'}}>
               <Caption  >Your Balance</Caption>
               </View>
               <View style={styles.balance}>
                   <Text style={{fontSize:50}} >#{user.Balance}</Text>
               </View>
              
               <View style={{flexDirection: 'row',padding:20,backgroundColor:'#fff'}}>
                 <View style={{backgroundColor: '#E9E7EF', height: 2, flex: 1, alignSelf: 'center'}} />
                 <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 10,color:'#5271ff' }} onPress={()=>setWithdraw(!withdraw)}>WITHDRAW ALL</Text>
               <View style={{backgroundColor: '#E9E7EF', height: 2, flex: 1, alignSelf: 'center'}} />
              </View>
              {withdraw?<Withdraw />:<View></View>}
              <View style={styles.lisWrapper}>
                  <View style={{borderBottomWidth:1,borderRightWidth:1,width:70,justifyContent:'center',alignItems:'center',paddingBottom:20,paddingTop:20}}>
                      <Text style={{fontSize:10}}>Date</Text></View>
                  <View style={{borderBottomWidth:1,borderRightWidth:1,width:70,justifyContent:'center',alignItems:'center',paddingBottom:20,paddingTop:20}}>
                      <Text style={{fontSize:10}}>Level</Text></View>
                  <View style={{borderBottomWidth:1,borderRightWidth:1,width:70,justifyContent:'center',alignItems:'center',paddingBottom:20,paddingTop:20}}>
                      <Text style={{fontSize:10}}>Speed</Text></View>
                  <View style={{borderBottomWidth:1,width:70,justifyContent:'center',alignItems:'center',paddingBottom:20,paddingTop:20}}>
                      <Text style={{fontSize:10}}>Amount</Text></View>

              </View>
              
                  {user.victories.map((val,key)=>(
                      <View style={styles.lisWrapper}>
                      <View style={{borderRightWidth:1,width:70,justifyContent:'center',alignItems:'center',paddingBottom:20,paddingTop:20}}>
                          <Text style={{fontSize:10}}>{val.Date}</Text></View>
                      <View style={{borderRightWidth:1,width:70,justifyContent:'center',alignItems:'center',paddingBottom:20,paddingTop:20}}>
                          <Text style={{fontSize:10}}>{val.Speed}</Text></View>
                      <View style={{borderRightWidth:1,width:70,justifyContent:'center',alignItems:'center',paddingBottom:20,paddingTop:20}}>
                          <Text style={{fontSize:10}}>{val.Attmpt}</Text></View>
                      <View style={{width:70,justifyContent:'center',alignItems:'center',paddingBottom:20,paddingTop:20}}>
                          <Text style={{fontSize:10}}>{val.Amount}</Text></View>
                      </View>
                  ))}
              
              <View style={{flexDirection: 'row',padding:20,marginTop:40}}>
                 <View style={{backgroundColor: '#E9E7EF', height: 2, flex: 1, alignSelf: 'center'}} />
                
               <View style={{backgroundColor: '#E9E7EF', height: 2, flex: 1, alignSelf: 'center'}} />
              </View>
              
              <View style={{justifyContent:'space-between',flexDirection:'row',width:windowWidth-60,alignItems:'center',marginBottom:30}}>
                  <Title>
                      Personal Info
                  </Title>
                  <TouchableOpacity onPress={()=>{onPressFunction()}}>
                  <Ionicons name='md-pencil' size={20} />
                  </TouchableOpacity>
              </View>
              </View>
              <View style={{alignItems:'center',paddingBottom:10,backgroundColor:'#fff'}}>
              {isOpen?<UserInfo />:<View></View> }
              </View>
          
        </ScrollView>
    )}
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        
       
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
        
    }
})
