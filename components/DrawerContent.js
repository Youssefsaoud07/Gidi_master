import React,{useState} from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import {DrawerItem,DrawerContentScrollView} from '@react-navigation/drawer'
import { Avatar,Text,Caption,Paragraph,Switch,TouchableRipple, Drawer, Title } from "react-native-paper";
import { AntDesign, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FontAwesome } from '@expo/vector-icons';

import log from '../assets/log.png'

export const DrawerContent = (props) => {
  
    const [user, setUser] = useState('A')
    return (
        <View style={{flex:1}}>
          
            <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
             
                  {user?
                   <TouchableOpacity onPress={()=>props. navigation.reset({
                    index: 0,
                    routes: [{ name: 'Profile' }],
                  })}>
                  <View style={styles.userInfoSection}>
                   
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                          <Avatar.Image 
                          source={log}
                           size={50}
                           style={{marginRight:20}}

                          
                           />
                          
                          <View>
                              <Title style={{color:'#fff'}} >Youssef Saoud</Title>
                             
                          </View>
                          
                      </View>
                      
                     
                  </View></TouchableOpacity>:<TouchableOpacity onPress={()=>props.navigation.navigate('Login/Logout')}><View style={styles.userInfoSection}>
                      <View style={{flexDirection:'row',paddingLeft:20,marginBottom:20,marginLeft:10,right:30}}>
                          <Avatar.Image 
                          style={{backgroundColor:'#fff',marginRight:20}}
                          source={log} size={50}/>
                          <View>
                              <Title style={{color:'#fff'}}>Login/Signup</Title>
                             
                          </View>
                      </View>
                     
                  </View></TouchableOpacity>}
                  <TouchableOpacity
                  onPress={()=>props.navigation.navigate('Hall of Fame')}>
                  <View  
                  // style={{justifyContent:'space-between'}}
                
                
                style={{paddingLeft:20,color:'#fff',justifyContent:'space-between',flexDirection:'row',padding:20,borderTopWidth:0.2,borderBottomWidth:0.2,borderColor:'#a6a6a6',alignItems:'center'}}
               >
                 <Text style={{color:"#fff"}}>Hall of Fame </Text>
                  <AntDesign 
                  name='caretright'
                  color={'white'}
                  size={12} />
                  </View>
                  </TouchableOpacity>
               
               
                 <DrawerItem icon={(color,size)=>(
                  <Icon
                  name='home-outline'
                  color={'white'}
                  size={26}
                  />
                )} label='Home' 
                labelStyle={{marginLeft:-20}}
                inactiveTintColor='white'
                onPress={()=>props.navigation.navigate('Home')}
                
                />
                  
              </View>
              <View style={styles.DrawerContent,{marginTop:10}}>
              {/* <DrawerItem icon={(color,size)=>(
                  <Icon
                  name='account-question'
                  color={color}
                  size={26}
                  />
                )} label='About gidi-gidi' 
                labelStyle={{marginLeft:-20}}
                onPress={()=>props.navigation.navigate('About')}
                /> */}
                
                 {/* <DrawerItem icon={(color,size)=>(
                  <Icon
                  name='account-group'
                  color={color}
                  size={26}
                  />
                )} label='Sponsors' 
                labelStyle={{marginLeft:-20}}
                onPress={()=>props.navigation.navigate('Sponsors')}
                /> */}
                 <DrawerItem icon={(color,size)=>(
                 <Entypo name='game-controller' size={26} />
                )} label='Tournament' 
                labelStyle={{marginLeft:-20}}
                onPress={()=>props. navigation.reset({
                  index: 0,
                  routes: [{ name: 'Tournament' }],
                })}
               
                
                />
                 <DrawerItem icon={(color,size)=>(
                  <Icon
                  name='translate'
                  color={color}
                  size={26}
                  />
                )} label='Language' 
                labelStyle={{marginLeft:-20}}
                onPress={()=>props.navigation.navigate('Language')}
                />
                  <DrawerItem icon={(color,size)=>(
                 <FontAwesome5 name='battle-net' size={26} />
                )} label='Energy bar' 
                labelStyle={{marginLeft:-20}}
                onPress={()=>props.navigation.navigate('Refil')}
               
                
                />
              </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={(color,size)=>(
                  <Icon
                  name='exit-to-app'
                  color={color}
                  size={30}
                  />
                )} label='SignOut' 
                labelStyle={{marginLeft:-20}}
                onPress={()=>props.navigation.navigate('Login/Logout')}
                />

            </Drawer.Section>
        </View>
    )
}



const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor:'#000',
        paddingTop:20
       
      },
      userInfoSection: {
        paddingLeft: 20,
        paddingBottom:20
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})