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
import Carousel from "react-native-reanimated-carousel";
import CustomSlider from "../components/customSlider";
import data from "../components/data";
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
import HomeConfort from "./HomeConfort";
import Home from "./Home";

const Boiler = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({ mute: false, shouldPlay: true });
  const [RemainingTime, setRemainingTime] = useState(3500)

  const handlePlayAndPause = () => {
    setStatus((prevState) => ({
      shouldPlay: !prevState.shouldPlay,
    }));
  };

  const handleVolume = () => {
    setStatus((prevState) => ({
      mute: !prevState.mute,
    }));
  };

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [Cards, setCards] = useState([
    {
      id: 1,
      img: card,
    },
    {
      id: 2,
      img: card,
    },
    {
      id: 3,
      img: card,
    },
    {
      id: 4,
      img: card,
    },
    {
      id: 5,
      img: card,
    },
    {
      id: 6,
      img: card,
    },
    {
      id: 7,
      img: card,
    },
    {
      id: 8,
      img: card,
    },
    {
      id: 9,
      img: card,
    },
    {
      id: 10,
      img: card,
    },
    {
      id: 11,
      img: card,
    },
    {
      id: 12,
      img: card,
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
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRemainingTime(RemainingTime-200)
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

  const findJoker = (a) => {
    setJokerSelected(a);
    setCards([...Cards, (Cards[a - 1].img = cardfail)]);
  };
  const [sponsors, setSponsors] = useState([
    {
      id: 1,
      name: "Pepsi Nigeria",
      img: "https://seeklogo.com/images/P/pepsi-logo-94D7DEF922-seeklogo.com.png",
      post: "Pepsi Nigeria  Stay refreshed all day.",
      adresse:'Address : 21 Avenue Fisher, Lagos, Nigeria.',
      bio:'N° 1 Plug in Nigeria for refreshing soft drinks. XMAS BONANZA : 50% reduction on all purchases exceeding #1500',
      phoneNumber:'+234 845 756 123'
    },
    {
      id: 2,
      name: "PEPSI",
      img: "https://wallpaperaccess.com/full/1277470.jpg",
    },
    {
      id: 3,
      name: "PEPSI",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pepsi-blue-2021-1619277087.jpeg",
    },
  ]);
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <StatusBar animated barStyle="default" />
      {RemainingTime<1000?<Home navigation={navigation} RemainingTime={RemainingTime} />:<HomeConfort navigation={navigation} RemainingTime={RemainingTime} />}
      </View>
  );
};

export default Boiler;

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
    color: "black",
    color: "gray",
    fontSize: 17,
    backgroundColor: "#fff",
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
    marginTop: 20,
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
  },
  avatar:{
    width: 35,
    height: 35,
    borderRadius: 40,
    marginRight: 10,
  },
  textAvatar:{
    fontSize:15,
    fontWeight:'bold'
  }
});
