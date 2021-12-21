import React,{useState} from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { FontAwesome,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Withdraw = () => {
   
    return (
        <View style={{backgroundColor:'#fff'}}>
             <View style={styles.textContainer}>
           <View style={styles.label}>
               {/* <Text style={{marginBottom:5,color:'#5271ff'}}>FIRST NAME</Text> */}
             
           </View>
           <TextInput placeholder='ACCOUNT NAME' style={styles.input}  />
        </View>
        <View style={styles.textContainer}>
           <View style={styles.label}>
               {/* <Text style={{marginBottom:5,color:'#5271ff'}}>FAMILY NAME</Text> */}
             
           </View>
           <TextInput keyboardType='numeric'  placeholder='ACCOUNT N° ' style={styles.input}  />
        </View>
        
        <View style={styles.textContainer}>
           <View style={styles.label}>
               {/* <Text style={{marginBottom:5,color:'#5271ff'}}>EMAIL</Text> */}
              
           </View>
           <TextInput  placeholder='BANK NAME' style={styles.input} />
        </View>
       
        <TouchableOpacity>
            <View style={{...styles.save}}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>
                    Withdraw
                </Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default Withdraw

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
        height: windowHeight<600?50:70,
        width:windowWidth-50,
        backgroundColor:'#5271ff',
        alignSelf:'center',
        marginBottom:80,
        marginRight:10,
        marginTop:20
       
    }
})
