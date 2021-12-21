import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect, useRef } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
  Image,
  Modal,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import { Caption, Title } from "react-native-paper";
import Sponsors from "./Sponsors";
import star from "../assets/start.png";
import { set } from "react-native-reanimated";
import CountDown from "react-native-countdown-component";
import ModalPoup from '../components/customModal'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Practice = ({navigation}) => {
  const [count, setCount] = useState(5);
  const [Score, setScore] = useState(0)
  const [winningNine, setWinningNine] = useState(Math.floor(Math.random() * (46 - 41 + 1)) + 41);
  const [winningEight, setWinningEight] = useState(Math.floor(Math.random() * (40 - 41 + 1)) + 36);
  const [winningSeven, setWinningSeven] = useState(Math.floor(Math.random() * (35 - 31 + 1)) + 31);
  const [winningSix, setWinningSix] = useState(Math.floor(Math.random() * (30 - 26 + 1)) + 26);
  const [winningFive, setWinningFive] = useState(Math.floor(Math.random() * (25 - 21 + 1)) + 21);
  const [winningFor, setWinningFor] = useState(Math.floor(Math.random() * (20 - 16 + 1)) + 16);
  const [winningThree, setWinningThree] = useState(Math.floor(Math.random() * (15 - 11 + 1)) + 11);
  const [winningTwo, setWinningTwo] = useState(Math.floor(Math.random() * (10 - 6 + 1)) + 6);
  const [winningOne, setWinningOne] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  console.log('wonning',winningNine)
  console.log('wonning',winningEight)
  console.log('wonning',winningSeven)
  console.log('wonning',winningSix)
  console.log('wonning',winningFive)
  console.log('wonning',winningFor)
  console.log('wonning',winningThree)
  console.log('wonning',winningTwo)
  console.log('wonning',winningOne)
  const [selectedShape, setSelectedShape] = useState([]);
  const [RemainingTime, setRemainingTime] = useState(600);
  const [clicked, setClicked] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = React.useState(true);
  

  const [circules, setCircules] = useState([
    {
      id: 1,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 1,
    },
    {
      id: 2,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 1,
    },
    {
      id: 3,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 1,
    },
    {
      id: 4,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 1,
    },
    {
      id: 5,
      color: "#81C3C9",
      fade: "#fcd9e1",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 1,
    },
    {
      id: 6,
      color: "#81C3C9",
      fade: "#fcd9e1",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 2,
    },
    {
      id: 7,
      color: "#81C3C9",
      fade: "#fcd9e1",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 2,
    },
    {
      id: 8,
      color: "#81C3C9",
      fade: "#fcd9e1",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 2,
    },
    {
      id: 9,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 2,
    },
    {
      id: 10,
      color: "#81C3C9",
      fade: "#fcd9e1",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 2,
    },
    {
      id: 11,
      color: "#81C3C9",
      fade: "#fcd9e1",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 3,
    },
    {
      id: 12,
      color: "#81C3C9",
      fade: "#fcd9e1",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 3,
    },
    {
      id: 13,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 3,
    },
    {
      id: 14,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 3,
    },
    {
      id: 15,
      color: "#81C3C9",
      fade: "#fcd9e1",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 3,
    },
    {
      id: 16,
      color: "#81C3C9",
      fade: "#fcd9e1",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 4,
    },
    {
      id: 17,
      color: "#81C3C9",
      fade: "#c3e0df",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 4,
    },
    {
      id: 18,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 4,
    },
    {
      id: 19,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 4,
    },
    {
      id: 20,
      color: "#81C3C9",
      fade: "#fcd9e1",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 4,
    },
    {
      id: 21,
      color: "#81C3C9",
      fade: "#c3e0df",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 5,
    },
    {
      id: 22,
      color: "#81C3C9",
      fade: "#c3e0df",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 5,
    },
    {
      id: 23,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 5,
    },
    {
      id: 24,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 5,
    },
    {
      id: 25,
      color: "#81C3C9",
      fade: "#c3e0df",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 5,
    },
    {
      id: 26,
      color: "#81C3C9",
      fade: "#c3e0df",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 6,
    },
    {
      id: 27,
      color: "#81C3C9",
      fade: "#c3e0df",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 6,
    },
    {
      id: 28,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 6,
    },
    {
      id: 29,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 6,
    },
    {
      id: 30,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 6,
    },
    {
      id: 31,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 7,
    },
    {
      id: 32,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 7,
    },
    {
      id: 33,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 7,
    },
    {
      id: 34,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 7,
    },
    {
      id: 35,
     color: "#81C3C9",
      fade: "#efd3f8",
      isCorrect: "#F9A72B",
      active: "#f1f1f1",
      level: 7,
    },
    {
      id: 36,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 8,
    },
    {
      id: 37,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 8,
    },
    {
      id: 38,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 8,
    },
    {
      id: 39,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 8,
    },
    {
      id: 40,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 8,
    },
    {
      id: 41,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 9,
    },
    {
      id: 42,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 9,
    },
    {
      id: 43,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 9,
    },
    {
      id: 44,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 9,
    },
    {
      id: 45,
      color: "#81C3C9",
      fade: "#efd3f8",
      active: "#f1f1f1",
      isCorrect: "#F9A72B",
      level: 9,
    },
  ]);
   console.log('issue',winningNine)
  const [level, setLevel] = useState(9);
  const [selected, setSelected] = useState(null);
  const [reveal, setReveal] = useState(false)
  const [max, setMax] = useState(45);
  const [min, setMin] = useState(40);
  const handelCorrect = (a) => {
    setSelected(a);
    setClicked(true);
    setSelectedShape([...selectedShape, a.id]);
    
    // setCircules([...circules,circules[a-1].color=circules[a-1].fade])
    if (count <= 1) {
      console.log("game over");
      setReveal((prev)=>!reveal)
    }
    if (
     (a.id == winningOne)  ||
      (a.id == winningTwo) ||
      (a.id == winningThree) ||
      (a.id == winningFor) ||
      (a.id == winningFive) ||
      (a.id == winningSix) ||
      (a.id == winningSeven) ||
      (a.id == winningEight) ||
      (a.id == winningNine)
    ) {
      console.log("great");
      setScore((prev) => Score + 1)
      
        
      } else {
        setCount(count - 1);
        
        console.log('count',count)
      
    }

    console.log("kamouneya", selected);
    if (
      (a.level == level && a.id == winningOne) ||
      a.id === winningTwo ||
      a.id === winningThree ||
      a.id === winningFor ||
      a.id === winningFive ||
      a.id === winningSix ||
      a.id === winningSeven ||
      a.id === winningEight ||
      a.id === winningNine
    ) {
      setLevel((prev) => level - 1);
      //     setMax(max-5)
      // setMin(min-5)
      // setWinning(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    // console.log('lvl:',level)
  };
  useEffect(() => {
    setTimeout(()=>setReveal,200)
    Animated.timing(fadeAnim, {
      toValue: 1 ,
      duration: 5000,
      useNativeDriver: true
    }).start();
  }, [reveal]);

  useEffect(() => {
    console.log('score',Score)
    console.log("selected", selected);
    console.log("level", level);
    console.log("shapes", selectedShape);
    console.log(RemainingTime);
    console.log(reveal)
  }, [selected, level, selectedShape, count, RemainingTime,reveal,Score]);

  const changeWinning = () => {
    // let RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    // console.log(RandomNumber)

    setSelectedShape([]);
    setLevel(9);
    setScore(0)
    setWinningNine(Math.floor(Math.random() * (45 - 41 + 1)) + 41);
    setWinningEight(Math.floor(Math.random() * (40 - 36 + 1)) + 36);
    setWinningSeven(Math.floor(Math.random() * (35 - 31 + 1)) + 31);
    setWinningSix(Math.floor(Math.random() * (30 - 26 + 1)) + 26);
    setWinningFive(Math.floor(Math.random() * (25 - 21 + 1)) + 21);
    setWinningFor(Math.floor(Math.random() * (20 - 16 + 1)) + 16);
    setWinningThree(Math.floor(Math.random() * (15 - 11 + 1)) + 11);
    setWinningTwo(Math.floor(Math.random() * (10 - 6 + 1)) + 6);
    setWinningOne(Math.floor(Math.random() * (4 - 2 + 1)) + 2);
    setRemainingTime((prev) => 600);

    setCircules([
        {
            id: 1,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 1,
          },
          {
            id: 2,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 1,
          },
          {
            id: 3,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 1,
          },
          {
            id: 4,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 1,
          },
          {
            id: 5,
            color: "#81C3C9",
            fade: "#fcd9e1",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 1,
          },
          {
            id: 6,
            color: "#81C3C9",
            fade: "#fcd9e1",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 2,
          },
          {
            id: 7,
            color: "#81C3C9",
            fade: "#fcd9e1",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 2,
          },
          {
            id: 8,
            color: "#81C3C9",
            fade: "#fcd9e1",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 2,
          },
          {
            id: 9,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 2,
          },
          {
            id: 10,
            color: "#81C3C9",
            fade: "#fcd9e1",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 2,
          },
          {
            id: 11,
            color: "#81C3C9",
            fade: "#fcd9e1",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 3,
          },
          {
            id: 12,
            color: "#81C3C9",
            fade: "#fcd9e1",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 3,
          },
          {
            id: 13,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 3,
          },
          {
            id: 14,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 3,
          },
          {
            id: 15,
            color: "#81C3C9",
            fade: "#fcd9e1",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 3,
          },
          {
            id: 16,
            color: "#81C3C9",
            fade: "#fcd9e1",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 4,
          },
          {
            id: 17,
            color: "#81C3C9",
            fade: "#c3e0df",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 4,
          },
          {
            id: 18,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 4,
          },
          {
            id: 19,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 4,
          },
          {
            id: 20,
            color: "#81C3C9",
            fade: "#fcd9e1",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 4,
          },
          {
            id: 21,
            color: "#81C3C9",
            fade: "#c3e0df",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 5,
          },
          {
            id: 22,
            color: "#81C3C9",
            fade: "#c3e0df",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 5,
          },
          {
            id: 23,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 5,
          },
          {
            id: 24,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 5,
          },
          {
            id: 25,
            color: "#81C3C9",
            fade: "#c3e0df",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 5,
          },
          {
            id: 26,
            color: "#81C3C9",
            fade: "#c3e0df",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 6,
          },
          {
            id: 27,
            color: "#81C3C9",
            fade: "#c3e0df",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 6,
          },
          {
            id: 28,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 6,
          },
          {
            id: 29,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 6,
          },
          {
            id: 30,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 6,
          },
          {
            id: 31,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 7,
          },
          {
            id: 32,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 7,
          },
          {
            id: 33,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 7,
          },
          {
            id: 34,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 7,
          },
          {
            id: 35,
           color: "#81C3C9",
            fade: "#efd3f8",
            isCorrect: "#F9A72B",
            active: "#f1f1f1",
            level: 7,
          },
          {
            id: 36,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 8,
          },
          {
            id: 37,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 8,
          },
          {
            id: 38,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 8,
          },
          {
            id: 39,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 8,
          },
          {
            id: 40,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 8,
          },
          {
            id: 41,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 9,
          },
          {
            id: 42,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 9,
          },
          {
            id: 43,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 9,
          },
          {
            id: 44,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 9,
          },
          {
            id: 45,
            color: "#81C3C9",
            fade: "#efd3f8",
            active: "#f1f1f1",
            isCorrect: "#F9A72B",
            level: 9,
          },
    ]);
    setCount(5);
    setSelected(null);
  };
console.log('width',windowWidth,windowHeight)
  return (
    <View style={{ width: windowWidth, height: windowHeight ,justifyContent:'center',alignItems:'center' }}>
      
      <Animated.View
        style={{
          ...styles.gameLayout,
          width: windowWidth,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 9,
          height:windowHeight<600?windowHeight*95.5/100:windowHeight,
          borderColor: count != 0 ? `rgb(1,120,190)` : "#737373",
          opacity: fadeAnim,
          position:'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          zIndex:2
        }}
      ></Animated.View>
      <View
        style={{
          ...styles.gameLayout,
          width: windowWidth *93.5/100,
          height: windowHeight>600?windowHeight *94.5/100:windowHeight *87.5/100,
          marginLeft:2,
          position:'absolute',
          top:8,
          left:8,
          right:8,
          bottom:8,
          zIndex:3,
          marginTop:5
          
        }}
      >
        <ModalPoup visible={visible}>
        
        <View style={{alignItems: 'center',padding:25}}>
         
        <Text style={{ fontSize: 12,fontWeight:'bold', textAlign: 'center'}}>
        On each level there is a winning square
        </Text>
        <Text style={{ marginTop:30,marginBottom:30,fontSize: 13,fontWeight:'bold', textAlign: 'center'}}>
        Find them
        </Text>
        <TouchableOpacity onPress={() => setVisible(false)}>
        <View style={{width:100,height:30,borderRadius:20,backgroundColor:'#82D692',alignItems:'center',justifyContent:'center'}}>
          <Text style={{textAlign: 'center',fontWeight:'bold',color:'#fff',fontSize:12}}>BEGIN</Text></View>
        </TouchableOpacity>
        </View>
      </ModalPoup>
        <StatusBar barStyle="default" />

        {/* <View style={styles.topLeft}>
                <TouchableOpacity onPress={()=>changeWinning()}>
             <Ionicons name="sync-circle-outline" size={35} color='white' />
             </TouchableOpacity>
            </View> */}
        {/* <View style={styles.botomRight}>
                <Text style={{color:'#fff',fontSize:45}}>{count}</Text>
                <View>
                <Caption style={{color:'#fff'}}>Trials</Caption>
                <Caption style={{color:'#fff'}}> Left</Caption>
                </View>
            </View> */}
        <View style={styles.gameContent}>
          <FlatList
            data={circules}
            renderItem={({ item }) => (
              <View>
                {!selectedShape.includes(item.id) &&
                count != 0 &&item.id!=1&&item.id!=5&&
                item.level == level &&
                selected != item.id ? (
                  <TouchableOpacity onPress={() => handelCorrect(item)}>
                    <View
                      style={{ ...styles.circles, backgroundColor: item.color }}
                    ></View>
                  </TouchableOpacity>
                ) : item.id == 1 ? (
                  <View
                    style={{
                      ...styles.circles,
                      backgroundColor: "black",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      padding:12,


                    
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize:10,
                        fontWeight:'bold'
                      }}
                    >
                      Time left
                    </Text>
                    
                      <CountDown
                        running={clicked}
                        until={RemainingTime}
                        digitStyle={{ backgroundColor: "#000" }}
                        onFinish={() => alert("finished")}
                        timeLabels={{ m: null, s: null }}
                        timeToShow={["M","S"]}
                        digitTxtStyle={{
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: windowHeight>600?2:10,
                          alignSelf:'center',
                          marginRight:5
                          
                        }}
                        separatorStyle={{ color: "#fff" }}
                        showSeparator
                        size={windowHeight>600?8:7}
                      />
                  
                  </View>
                ) : item.id == 5 ? (
                  <TouchableOpacity onPress={() => changeWinning()}>
                    <View
                      style={{
                        ...styles.circles,
                        backgroundColor: "black",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 35,
                            marginRight:5
                          }}
                        >
                          {count}
                        </Text>
                        <View>
                          <Text
                            style={{
                              color: "#fff",
                              fontSize:10,
                              fontWeight:'bold'
                            }}
                          >
                            trials
                          </Text>
                          <Text
                            style={{
                              color: "#fff",
                              fontSize:10,
                              fontWeight:'bold'
                            }}
                          >
                           
                            left
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ) : item.level > level &&
                  (item.id == winningOne ||
                    item.id == winningTwo ||
                    item.id == winningThree ||
                    item.id == winningFor ||
                    item.id == winningFive ||
                    item.id == winningSix ||
                    item.id == winningSeven ||
                    item.id == winningEight ||
                    item.id == winningNine) ? (
                  <View
                    style={{
                      ...styles.circles,
                      backgroundColor: item.isCorrect,
                    }}
                  ></View>
                ) : item.level == level &&
                item.id!=1&&item.id!=5&&
                  selected === item.id &&
                  (selected === winningOne ||
                    selected === winningTwo ||
                    selected === winningThree ||
                    selected === winningFor ||
                    selected === winningFive ||
                    selected === winningSix ||
                    selected === winningSeven ||
                    selected === winningEight ||
                    selected === winningNine) ? (
                  <TouchableOpacity onPress={() => handelCorrect(item.id)}>
                    <View
                      style={{
                        ...styles.circles,
                        backgroundColor: item.isCorrect,
                        borderColor: "gold",
                        borderWidth: 3,
                      }}
                    ></View>
                  </TouchableOpacity>
                ) : count == 0 &&
                  (item.id === winningOne ||
                    item.id === winningTwo ||
                    item.id === winningThree ||
                    item.id === winningFor ||
                    item.id === winningFive ||
                    item.id === winningSix ||
                    item.id === winningSeven ||
                    item.id === winningEight ||
                    item.id === winningNine) &&
                  item.level == level ? (
                  <Animated.View
                    style={{
                      ...styles.circles,
                      backgroundColor: item.color,
                      borderColor: item.isCorrect,
                      borderWidth: 3,
                      elevation:fadeAnim
                      
                    }}
                  ></Animated.View>
                ) : count == 0 &&
                  (item.id !== winningOne ||
                    item.id !== winningTwo ||
                    item.id !== winningThree ||
                    item.id !== winningFor ||
                    item.id !== winningFive ||
                    item.id !== winningSix ||
                    item.id !== winningSeven ||
                    item.id !== winningEight ||
                    item.id !== winningNine) &&
                  item.level == level &&
                  !selectedShape.includes(item.id) ? (
                  <View
                    style={{ ...styles.circles, backgroundColor: item.color }}
                  ></View>
                ) : item.level > level &&
                  (item.id !== winningOne ||
                    item.id !== winningTwo ||
                    item.id !== winningThree ||
                    item.id !== winningFor ||
                    item.id !== winningFive ||
                    item.id !== winningSix ||
                    item.id !== winningSeven ||
                    item.id !== winningEight ||
                    item.id !== winningNine) ? (
                  <View
                    style={{ ...styles.circles, backgroundColor: item.active }}
                  ></View>
                ) : item.level == level &&
                  selected === item.id &&
                  (selected === winningOne ||
                    selected === winningTwo ||
                    selected === winningThree ||
                    selected === winningFor ||
                    selected === winningFive ||
                    selected === winningSix ||
                    selected === winningSeven ||
                    selected === winningEight ||
                    selected === winningNine) ? (
                  <TouchableOpacity onPress={() => handelCorrect(item.id)}>
                    <View
                      style={{
                        ...styles.circles,
                        backgroundColor: item.isCorrect,
                      }}
                    ></View>
                  </TouchableOpacity>
                ) : item.level == level &&
                  selected == item.id &&
                  (selected !== winningOne ||
                    selected !== winningOne ||
                    selected !== winningTwo ||
                    selected !== winningThree ||
                    selected !== winningFor ||
                    selected !== winningFive ||
                    selected !== winningSix ||
                    selected !== winningSeven ||
                    selected !== winningEight ||
                    selected !== winningNine) ? (
                  <View
                    style={{ ...styles.circles, backgroundColor: item.fade }}
                  ></View>
                ) : (
                  <View
                    style={{ ...styles.circles, backgroundColor: item.active }}
                  ></View>
                )}
              </View>
            )}
            numColumns={5}
            keyExtractor={(item, index) => index}
          />
        </View>

        {(Score<9&&count!=0)? (
          <View
            style={{ alignSelf: "center", flexDirection: "row", marginTop: 2,marginRight:5 }}
          >
             
            <Text style={{ color: "#f57e9a", marginLeft: 5,fontWeight:'bold',fontSize:12 }}>click</Text>
            <Text style={{ color: "#3d4176", marginLeft: 5,fontWeight:'bold',fontSize:12 }}>to</Text>
            <Text style={{ color: "#82D692", marginLeft: 5,fontWeight:'bold',fontSize:12 }}>play</Text>
          </View>
        ) : Score>0&&count==0? (
         
            <View
              style={{
                justifyContent:'space-between',
                alignItems:'center',
                paddingLeft:10,
                paddingRight:10,
                flexDirection: "row",
               
              
               
              }}
            >
                 <View style={{
               
               width:90,
               marginRight:-70
               
                }}>
                  <Text style={{fontSize:9,fontWeight:'bold'}}>Level : {level}</Text>
                  <Text style={{fontSize:9,fontWeight:'bold'}} >Speed: 49s 453ms</Text>
                  </View>
                  <TouchableOpacity onPress={() => changeWinning()}>
                  <View style={{flexDirection:'row',
                  marginLeft:windowHeight<600?40:55,
                  
                   
                
                }}>
              <Text style={{ color: "#f57e9a",marginRight:5,fontWeight:'bold',fontSize:12,alignSelf:'center' }}>play</Text>
              <Text style={{ color: "#008037",fontWeight:'bold',fontSize:12 }}>again</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Tournament',{index:1})}>
            <View  style={{
                
               
            }}
                >
                  
                   <Text style={{fontSize:9,fontWeight:'bold',alignSelf:'flex-end',color: "#0178BE"}}>View</Text>
                  <Text style={{fontSize:9,fontWeight:'bold',color: "#0178BE"}} >Rankings table</Text>
                  
                {/* <Ionicons name='ios-arrow-undo-outline' size={15} /> */}

               </View> 
               </TouchableOpacity>
                 
                 
            </View>
         
        ):count==0?(
          <View
          style={{
            justifyContent:'space-between',
            alignItems:'center',
            paddingLeft:10,
            paddingRight:10,
            flexDirection: "row",
           
          
           
          }}
        >
             <View style={{
           
           width:90,
           marginRight:-70
           
            }}>
              <Text style={{fontSize:9,fontWeight:'bold'}}>Level : {level}</Text>
              <Text style={{fontSize:9,fontWeight:'bold'}} >Speed: 49s 453ms</Text>
              </View>
              <TouchableOpacity onPress={() => changeWinning()}>
              <View style={{flexDirection:'row',
              marginLeft:40,
              
               
            
            }}>
          <Text style={{ color: "#f57e9a",marginRight:5,fontWeight:'bold',fontSize:12,alignSelf:'center' }}>play</Text>
          <Text style={{ color: "#008037",fontWeight:'bold',fontSize:12 }}>again</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Tournament',{index:1})}>
        <View  style={{
            
           
        }}
            >
              
               <Text style={{fontSize:9,fontWeight:'bold',alignSelf:'flex-end',color: "#0178BE"}}>View</Text>
              <Text style={{fontSize:9,fontWeight:'bold',color: "#0178BE"}} >Rankings table</Text>
              
            {/* <Ionicons name='ios-arrow-undo-outline' size={15} /> */}

           </View> 
           </TouchableOpacity>
             
             
        </View>  
        ):Score>8?(
        <View
          style={{
            justifyContent:'space-between',
            alignItems:'center',
            paddingLeft:8,
            paddingRight:10,
            flexDirection: "row",
           
          
           
          }}
        >
             <View style={{
           
           width:90,
           marginRight:-70
           
            }}>
              <Text style={{fontSize:9,fontWeight:'bold'}}>Level : {level}</Text>
              <Text style={{fontSize:9,fontWeight:'bold'}} >Speed: 49s 453ms</Text>
              </View>
             
              <View style={{flexDirection:'row',
              marginLeft:45,
              
               
            
            }}>
          <Text style={{ color: "#f57e9a",fontWeight:'bold',fontSize:12,alignSelf:'center' }}>CHAM</Text>
          <Text style={{ color: "#008037",fontWeight:'bold',fontSize:12 }}>PION</Text>
          </View>
         
          <TouchableOpacity onPress={()=> navigation.navigate('Tournament',{index:1})}>
        <View  style={{
            
           
        }}
            >
              
               <Text style={{fontSize:9,fontWeight:'bold',alignSelf:'flex-end',color: "#0178BE"}}>View</Text>
              <Text style={{fontSize:9,fontWeight:'bold',color: "#0178BE"}} >Rankings table</Text>
              
            {/* <Ionicons name='ios-arrow-undo-outline' size={15} /> */}

           </View> 
           </TouchableOpacity>
             
             
        </View>
        ):<View></View>}
      </View>
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({
  gameLayout: {
    flex: 1,

    backgroundColor: "#fff",
  },
  topLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    backgroundColor: "#057ec1",
    borderBottomRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
 
  gameContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 2,
    paddingBottom:2,
    paddingLeft:windowHeight<600?3:4.5,
    paddingRight:2,
    paddingTop:1
   
  },
  circles: {
    height: windowHeight<600?(windowHeight*90.5/100)/10:(windowHeight*93.5/100)/10,
    width:  windowHeight<600?(windowWidth*90.3/100)/5.52:(windowWidth*95.3/100)/5.52,

    marginLeft: windowHeight<600?2:2,
    marginRight: windowHeight<600?2:3,
    marginBottom: windowHeight>600?6:2.2,
  },
});
