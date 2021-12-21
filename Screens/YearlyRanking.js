import React,{useState} from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Caption, Title } from "react-native-paper";
import { backgroundColor, color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import user from '../assets/log.png'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const YearlyRanking = () => {
    const [rankingUser, setRankingUser] = useState(
        [
        {id:1,
        name:'user1',
        location:'Lagos',
        Level:'5',
        time:'6min 23sec 233msec',
        picture:user ,
        amount:'50.000'     
    },
    {id:2,
        name:'user2',
        location:'Lagos',
        Level:'5',
        time:'6min 23sec 233msec',
        picture:user ,
        amount:'40.000'       
    },
    {id:3,
        name:'user3',
        location:'Lagos',
        Level:'5',
        time:'6min 23sec 233msec',
        picture:user , 
        amount:'30.000'      
    },
    {id:4,
        name:'user4',
        location:'Lagos',
        Level:'5',
        time:'6min 23sec 233msec',
        picture:user      
    },
    {id:5,
        name:'user5',
        location:'Lagos',
        Level:'5',
        time:'6min 23sec 233msec',
        picture:user      
    },
    {id:6,
        name:'user6',
        location:'Lagos',
        Level:'5',
        time:'6min 23sec 233msec',
        picture:user      
    },
    {id:7,
        name:'user4',
        location:'Lagos',
        Level:'5',
        time:'6min 23sec 233msec',
        picture:user      
    },
    {id:8,
        name:'user5',
        location:'Lagos',
        Level:'5',
        time:'6min 23sec 233msec',
        picture:user      
    },
    {id:9,
        name:'user6',
        location:'Lagos',
        Level:'5',
        time:'6min 23sec 233msec',
        picture:user      
    },
    {id:10,
        name:'user6',
        location:'Lagos',
        Level:'5',
        time:'6min 23sec 233msec',
        picture:user      
    },
    ]
    )
  return (
    <ScrollView >
        <View style={styles.container}>
      <View style={{
           flexDirection: "row",
            height: 60
     }}>
        <View
          style={{
            borderWidth: 5,
            borderColor: "#0178BE",
            width: (windowWidth * 1) / 4-10,
            backgroundColor: "#F1F1F1",
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            marginRight:10

          }}
        >
          <Text style={{ color: "#0178BE" ,fontWeight:'bold',fontSize:20 }}>2021</Text>
        </View>
        <View
          style={{
            backgroundColor: "#0178BE",
            width: (windowWidth * 3) / 4-10,
            height: 60,
            alignItems:'center',
            justifyContent:'space-between',
            paddingLeft:20,
            flexDirection:'row'
          }}
        >
          <Text style={{ color: "#fff" ,fontSize:25,fontWeight:'bold' }}>Record holders</Text>
          <View style={{flexDirection:'row',height:50,justifyContent:'center',alignItems:'center',alignSelf:'flex-end',top:-10,right:10,position:'absolute'}}>
              <View style={{paddingBottom:3,marginRight:2,height:70}}>
              <Text style={{fontWeight:'bold',fontSize:35,color:'#7ED957'}}>.</Text>
              </View>
             <Text style={{fontSize:15,color:'#fff'}}>final</Text> 
          </View>
        </View>
      </View>
      {rankingUser.map((val,key)=>(
        <View style={styles.user}>
            <View style={{flexDirection:'row',width:windowWidth-20,height:60,alignItems:'center'}}>
       <View style={{...styles.circle,backgroundColor: val.id<4?'#F9A72B':'#0178BE'}}>
           <Text style={{color:'#fff'}}>
               {val.id}
           </Text>
        
       </View>
       <View style={{width:15,height:2,borderWidth:1,borderColor: val.id<4?'#F9A72B':'#0178BE'}}></View>
       <View style={{...styles.circleUser,borderColor: val.id<4?'#F9A72B':'#0178BE'}}>
         <Image source={val.picture} style={{width:50,height:50,borderRadius:50,resizeMode:'cover',borderWidth:1,borderColor:'gray'}} />
       </View>
       <View style={{marginLeft:10,height:50,justifyContent:'center'}}>
           <Text style={{fontSize:18,fontWeight:'bold'}}>
               {val.name}
           </Text>
           <Text style={{fontSize:8}}>
               {val.location}
           </Text>
           <View style={{flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:10}}>Level:{val.Level}</Text>
           <View style={{width:1,height:10,borderColor:'gray',borderWidth:.4,marginLeft:10,marginRight:10}}></View>
           <Text style={{fontSize:10}}>{val.time}</Text>
               </View>

           </View>
           {val.amount?(<View style={{position:'absolute',top:10,right:2}}>
              <Text style={{color:'#05B852'}}>#{val.amount}</Text>
               </View>):(<View></View>)}
       </View>
      </View>

      ))}
      <Text style={{color:'#0178BE',fontSize:12,marginTop:30,marginBottom:40}}>Top 100</Text>
      <View style={{...styles.play}}>
          <Text style={{color:'gray',fontSize:9}}>GIDI-GIDI NG</Text>
          <View style={{width:2,height:10,borderColor:'gray',borderWidth:1,marginLeft:10,marginRight:10}}></View>
          <Text style={{color:'gray',fontSize:9}}>VERSION 1.0</Text>

      </View>
      </View>
    </ScrollView>
  );
};

export default YearlyRanking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  user:{
      height:60,
      width:windowWidth-20,
      justifyContent:'space-between',
      alignItems:'center',
      right:5,
      marginTop:25

  },circle:{
      height:30,
      width:30,
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
      

  },circleUser:{
    height:60,
    width:60,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    padding:3
    

},
play:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:120,
    height:35,
   
    
    marginTop:20
    


}
});
