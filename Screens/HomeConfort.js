import React, { useState, useEffect, useCallback } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  RefreshControlBase,
} from "react-native";
import gb from "../assets/splash.png";
import CountDown from "react-native-countdown-component";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Avatar, Paragraph, Title } from "react-native-paper";
import star from "../assets/start.png";

import { dummyData } from "../components/data";
import {
  Interaction,
  InteractionText,
  InteractionWrapper,
} from "../styles/styles";
import card from "../assets/card.png";
import cardfail from "../assets/cardFail.png";
import joker from "../assets/joker.png";
import { BlurView } from "expo-blur";
import gidi from "../assets/gidilogo.png";
import YoutubePlayer from "react-native-youtube-iframe";
import coin from "../assets/coin.png";
import { Video, AVPlaybackStatus } from "expo-av";
import insta from '../assets/insta.png'
import Carousel from "../components/carousel";

const HomeConfort = ({ navigation,RemainingTime }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState(true);
  const [RemainingTimes, setRemainingTimes] = useState()

  const handlePlayAndPause = () => {
    setStatus((prevState) => ({
      shouldPlay: !prevState.shouldPlay,
    }));
  };


  const handleVolume = () => {
    setStatus((prevState) => (
     !prevState
    ));
  };

 
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [Cards, setCards] = useState([
    {
      id: 1,
      img: card,
      imgfail:cardfail
    },
    {
      id: 2,
      img: card,
      imgfail:cardfail
    },
    {
      id: 3,
      img: card,
      imgfail:cardfail
    },
    {
      id: 4,
      img: card,
      imgfail:cardfail
    },
    {
      id: 5,
      img: card,
      imgfail:cardfail
    },
    {
      id: 6,
      img: card,
      imgfail:cardfail
    },
    {
      id: 7,
      img: card,
      imgfail:cardfail
    },
    {
      id: 8,
      img: card,
      imgfail:cardfail
    },
    {
      id: 9,
      img: card,
      imgfail:cardfail
    },
    {
      id: 10,
      img: card,
      imgfail:cardfail
    },
    {
      id: 11,
      img: card,
      imgfail:cardfail
    },
    {
      id: 12,
      img: card,
      imgfail:cardfail
    },
  ]);
  const [trueJoker, settrueJoker] = useState(6);
  const [jokerSelected, setJokerSelected] = useState(null);

  const [mini, setMini] = useState([
    {
      id: 1,
      color: "#4e1a3d",
    },
    {
      id: 2,
      color: "#4e1a3d",
    },
    {
      id: 3,
      color: "#4e1a3d",
    },
  ]);
  const [trueMini, setTrueMini] = useState(1);
  const [selected, setSelected] = useState(null);
  const [timerBorderColor, setTimerBorderColor] = useState('#1e507b')
  const [MenuColorDrawer, setMenuColorDrawer] = useState('#fff')
  const [count, setCount] = useState(0);
  const handelCorrect = (a) => {
    setSelected(a);
    setCount(count + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTrueMini(Math.floor(Math.random() * 3) + 1);
      setSelected(null);
      setJokerSelected(null);
      settrueJoker(Math.floor(Math.random() * 12) + 1);
      setCards([
        {
          id: 1,
          img: card,
          imgfail:cardfail
        },
        {
          id: 2,
          img: card,
          imgfail:cardfail
        },
        {
          id: 3,
          img: card,
          imgfail:cardfail
        },
        {
          id: 4,
          img: card,
          imgfail:cardfail
        },
        {
          id: 5,
          img: card,
          imgfail:cardfail
        },
        {
          id: 6,
          img: card,
          imgfail:cardfail
        },
        {
          id: 7,
          img: card,
          imgfail:cardfail
        },
        {
          id: 8,
          img: card,
          imgfail:cardfail
        },
        {
          id: 9,
          img: card,
          imgfail:cardfail
        },
        {
          id: 10,
          img: card,
          imgfail:cardfail
        },
        {
          id: 11,
          img: card,
          imgfail:cardfail
        },
        {
          id: 12,
          img: card,
          imgfail:cardfail
        },
      ])

      setCount(0);
    }, 30000);
    return () => clearInterval(interval);
  }, []);
 
  

 

  const findJoker = (a) => {
    setJokerSelected(a);
    setCards([...Cards, Cards[a-1].img = Cards[a-1].imgfail]);
  };
  const [sponsors, setSponsors] = useState([
    {
      id: 1,
      name: "Pepsi Nigeria",
      img: "https://seeklogo.com/images/P/pepsi-logo-94D7DEF922-seeklogo.com.png",
      post: "Pepsi Nigeria  Stay refreshed all day.",
      adresse:'Address : 21 Avenue Fisher, Lagos, Nigeria.',
      bio:'N° 1 Plug in Nigeria for refreshing soft drinks. XMAS BONANZA : 50% reduction on all purchases exceeding #1500',
      phoneNumber:'+234 845 756 123',
      category:'Streatwear',
      UrlLink:''

    },
    {
      id: 2,
      name: "PEPSI",
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHx8&w=1000&q=80",
      category:'Streatwear'
    },
    {
      id: 3,
      name: "PEPSI",
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHx8&w=1000&q=80",
      category:'Streatwear'
    },
  ]);
  return (
    
      
     
       
        <View style={{ flex: 1 }}>
           <StatusBar />
          <View
            style={{
              width: windowWidth,
              height: windowHeight,
              resizeMode: "cover",
              position: "relative",
            }}
          >
            <ImageBackground
              source={{ uri: sponsors[2].img }}
              resizeMode="cover"
              style={{

             
               
                flex:1,
                
              }}
            >
             <View style={{flexDirection:'row' , position: "absolute",
                  top: 20,alignItems:'center',
                  left: 20,}}>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{}}
              >
                <Entypo name="menu" size={40} color={MenuColorDrawer} />
              
              </TouchableOpacity>
              <Text style={{color:"#fff",fontWeight:'bold',marginLeft:10,fontSize:16 }}>{sponsors[2].category}</Text>
              </View>
            
      
            </ImageBackground>
          </View>
       
      
        </View>
       
      
  
  );
};

export default HomeConfort;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: "#369694",
    fontWeight: "bold",
    backgroundColor: "#fff",
  },
  case: {
    alignItems: "center",
    marginLeft:25,
    marginRight:25
  },
  cap: {
    
    color: "#F1F1F1",
    fontSize: 17,
    
    textShadowColor: '#000', 
    textShadowOffset: { width: -.1, height: 0 },
    textShadowRadius: 10, 
   
    fontWeight: '800'
  },
  cercle: {
    backgroundColor: "red",
    width: 60,
    height: 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 40,
  },
  pub: {
    padding: 10,
    backgroundColor: "#fff",
  },

  video: {
    marginTop: 10,
  },
  extraLife: {
    height: 300,
    position: "relative",
    backgroundColor: "#faf7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  controlBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    zIndex:4
  },
  avatar:{
    width: 35,
    height: 35,
    borderRadius: 40,
    marginRight: 10,
  },
  textAvatar:{
    fontSize:15,
    fontWeight:'bold',
    marginRight:5
  },
  description:{
      marginLeft:12,
      flexDirection:'row',
      alignItems:'center',
      marginBottom:10
  },
  play:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:120,
    height:35,
    alignSelf:'center',
    
    marginTop:20}
});
