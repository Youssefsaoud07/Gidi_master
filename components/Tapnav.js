import React, { useContext } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const TapNav = ({ index, setIndex }) => {
  

  return (
    <View
      style={{
        ...styles.container,
       
      }}
    >
        
      <View style={{width:windowWidth,position:'absolute',bottom:80,left:20}}>
        <Text style={{fontWeight:'bold',color:'#fff',fontSize:10}} >NEXT GAME : SUNDAY @ 4 AM</Text>
        </View>
        <View
          style={{
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: "rgba(52, 52, 52, 0.1)",
            position:'absolute',
            bottom:40,
            left:20,
            alignItems:'center',
            justifyContent:'center',
            paddingLeft:5,
            height:25,
            paddingRight:5,
            borderRadius:3
           
           
           // height: windowHeight*1/9,
          }}
        >
         <View style={{flexDirection:'row'}}>
           <Text style={{color:'#fff',marginRight:5}}>00 :</Text>
           <Text style={{color:'#fff',marginRight:5}}>00 :</Text>
           <Text style={{color:'#fff',marginRight:5}}>00 :</Text>
           <Text style={{color:'#fff',marginRight:5}}>00</Text>
         </View>
        </View>
    </View>
  );
};

export default TapNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    position:'absolute',
    bottom:10,
    
    alignItems: "center",
    borderBottomColor: "black",
   
    zIndex:3
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  right: {
    width: 80,
    alignItems: "flex-end",
  },
});