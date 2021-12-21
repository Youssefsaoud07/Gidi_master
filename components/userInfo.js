import React,{useState} from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { FontAwesome,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const UserInfo = () => {
   
    return (
        <View style={{backgroundColor:'#fff',justifyContent:"center",alignItems:'center'}}>
             <View style={styles.textContainer}>
           <View style={styles.label}>
               {/* <Text style={{marginBottom:5,color:'#5271ff'}}>FIRST NAME</Text> */}
             
           </View>
           <TextInput placeholder='FIRST NAME' style={styles.input}  />
        </View>
        <View style={styles.textContainer}>
           <View style={styles.label}>
               {/* <Text style={{marginBottom:5,color:'#5271ff'}}>FAMILY NAME</Text> */}
             
           </View>
           <TextInput   placeholder='FAMILY NAME' style={styles.input}  />
        </View>
        
        <View style={styles.textContainer}>
           <View style={styles.label}>
               {/* <Text style={{marginBottom:5,color:'#5271ff'}}>EMAIL</Text> */}
              
           </View>
           <TextInput placeholder='EMAIL' style={styles.input} />
        </View>
        <View style={styles.textContainer}>
           <View style={styles.label}>
               {/* <Text style={{marginBottom:5,color:'#5271ff'}}>PHONE NUMBER </Text> */}
              
           </View>
           <TextInput keyboardType='numeric' placeholder='PHONE NUMBER' style={styles.input} />
        </View>
        <View style={styles.textContainer}>
           <View style={styles.label}>
               {/* <Text style={{marginBottom:5,color:'#5271ff'}}>Gender</Text> */}
               
           </View>
           <TextInput placeholder='GUY or GIRL' style={styles.input}  />
        </View>
        <View style={styles.textContainer}>
           <View style={styles.label}>
               {/* <Text style={{marginBottom:5,color:'#5271ff'}}>CITY OF RESIDENCE</Text> */}
               
           </View>
           <TextInput placeholder='CITY OF RESIDENCE' style={styles.input}  />
        </View>
       
        <View style={styles.textContainer}>
           <View style={styles.label}>
               {/* <Text style={{marginBottom:5,color:'#5271ff'}}>Year Of Birth</Text> */}
              
           </View>
           <TextInput keyboardType='numeric' placeholder='YEAR Of BIRTH' style={styles.input}  />
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:30,marginBottom:40,alignSelf:"flex-start"}}>
            <TouchableOpacity>
            <View style={{backgroundColor:'gray',justifyContent:'center',alignItems:'center',width:100,height:100}}>
            <MaterialCommunityIcons name='upload' size={24} color='#fff' />
            </View>
            </TouchableOpacity>
            <Text style={{marginLeft:20,width:80}}>UPLOAD YOUR PROFILE PC</Text>
        </View>
        <TouchableOpacity>
            <View style={styles.save}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>
                    Save
                </Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default UserInfo

const styles = StyleSheet.create({
    textContainer:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    label:{
        marginRight:-160,
       
        width:150
        
    },
    container:{
        flex:1,
        paddingTop:60
    },
    input: {
        height: 40,
        margin: 5,
        borderBottomWidth: 1,

        paddingRight:10,
        borderColor:'gray',
        width:windowWidth-50,
      },
      save:{
        justifyContent:'center',
        alignItems:'center',
        width:windowWidth-50,
        height: windowHeight<600?50:70,
        backgroundColor:'#5271ff',
        alignSelf:'center',
        marginBottom:50,
        marginRight:10,
       
    }
})
