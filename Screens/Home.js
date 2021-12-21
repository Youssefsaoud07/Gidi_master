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

const Home = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({ mute: false, shouldPlay: true });
  const [RemainingTime, setRemainingTime] = useState(10010)

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
  useEffect(() => {
    const interval = setInterval(() => {
      setTrueMini(Math.floor(Math.random() * 3) + 1);
      setSelected(null);
      setJokerSelected(null);
      settrueJoker(Math.floor(Math.random() * 12) + 1);

      setCount(0);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

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
   
      
      <ScrollView stickyHeaderIndices={[2]}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: windowWidth,
              height: windowHeight - 118,
              resizeMode: "cover",
              position: "relative",
            }}
          >
            <ImageBackground
              source={{ uri: sponsors[1].img }}
              resizeMode="cover"
              style={{

             
                borderWidth: 3,
                borderColor: "#fff",
                flex:1,
                
              }}
            >
             
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                }}
              >
                <Entypo name="menu" size={40} color={MenuColorDrawer} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <View style={{width:windowWidth,marginTop:3,marginBottom:3,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'bold'}} >NEXT GAME : SUNDAY @ 4 AM</Text>
        </View>
        <View
          style={{
            borderColor: timerBorderColor,
            borderWidth: 4,
            backgroundColor: "#f1f1f1",
            margin: 3,
          }}
        >
          <CountDown
            until={RemainingTime}
            digitStyle={{ backgroundColor: "#f1f1f1" }}
            onFinish={() => alert("finished")}
            onPress={() => alert("hello")}
            timeLabels={{ d: null, h: null, m: null, s: null }}
            digitTxtStyle={{ color: "#000", fontWeight: "300",fontSize:40 }}
            separatorStyle={{ color: "#000" }}
            showSeparator
            size={30}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              width: windowWidth,
              height: 50,
              paddingRight: 20,
              paddingLeft: 20,
              justifyContent: "center",
              marginTop: 60,
              backgroundColor: "#fff",
            }}
          >
            <View style={styles.case}>
              <Text style={styles.title}>NEXT</Text>
              <Text style={styles.cap}>GAME</Text>
            </View>
            <View style={styles.case}>
              <Text style={styles.title}>3</Text>
              <Text style={styles.cap}>WINNERS</Text>
            </View>
            <View style={styles.case}>
              <Text style={styles.title}>#1M</Text>
              <Text style={styles.cap}>EACH</Text>
            </View>
          </View>
          <View style={{ marginTop: 50, padding: 10, backgroundColor: "#fff" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{
                  width: 82,
                  height: 82,
                  borderRadius: 50,
                  borderWidth:1,
                  borderColor:'#A6A6A6'
              }}>
              <Image
                source={{ uri: sponsors[0].img }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                }}
              />
              </View>
              <Title style={{ marginLeft: 10 }}>SPONSOR</Title>
            </View>
            <Text style={{ fontSize: 15,fontWeight:'bold', marginTop: 10 }}>
              {sponsors[0].name}
            </Text>
            <View
              style={{ padding: 1, marginTop: 10, backgroundColor: "#fff" }}
            >
              <Text>{sponsors[0].bio} </Text>
              <Text style={{ color: "blue" }}>
                {sponsors[0].adresse}
              </Text>
              <Text>{sponsors[0].phoneNumber} </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 20,
                marginBottom:20
              }}
            >
              <View
                style={{
                  borderColor: "gray",
                  borderWidth: 0.5,
                  color: "#fff",
                  height: 63,
                  width: 63,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <View
                  style={{
                    backgroundColor: "#cf3282",
                    color: "#fff",
                    height: 60,
                    width: 60,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                > */}
                  <ImageBackground
                  source={insta}
                  imageStyle={{ borderRadius: 50}}
                  style={{
                    
                    height: 60,
                    width: 60,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",


                  }}
                  >
                  <FontAwesome5 name="instagram" size={35} color="#fff" />
                  </ImageBackground>
                {/* </View> */}
              </View>
              <View
                style={{
                  borderColor: "gray",
                  borderWidth: 0.5,
                  color: "#fff",
                  height: 63,
                  width: 63,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "blue",
                    color: "#fff",
                    height: 60,
                    width: 60,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome name="facebook" size={35} color="#fff" />
                </View>
              </View>
              <View
                style={{
                  borderColor: "gray",
                  borderWidth: 0.5,
                  color: "#fff",
                  height: 63,
                  width: 63,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                    height: 60,
                    width: 60,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome5 name="youtube" size={35} color="#fff" />
                </View>
              </View>
              <View
                style={{
                  borderColor: "gray",
                  borderWidth: 0.5,
                  color: "#fff",
                  height: 63,
                  width: 63,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "yellow",
                    color: "#fff",
                    height: 60,
                    width: 60,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  
                  <MaterialCommunityIcons name="snapchat" size={35} color="#000" />
                  
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 30,
                width: windowWidth,
                height: 270,
                paddingBottom:20,
                backgroundColor: "#faf7f7",
                alignItems: "center",
              }}
            >
              <Image
                source={gidi}
                style={{
                  width: 40,
                  height: 40,
                  top: 10,
                  left: 5,
                  position: "absolute",
                }}
              />
              {mini.map((val, key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => handelCorrect(val.id)}
                >
                  {count < 2 ? (
                    val.id === trueMini && selected == trueMini ? (
                      <View
                        style={{
                          ...styles.cercle,
                          backgroundColor: "#fff",
                          borderColor: "green",
                          borderWidth: 3,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={star}
                          style={{ height: 30, width: 30 }}
                        />
                      </View>
                    ) : selected == val.id && selected != trueMini ? (
                      <View
                        style={{
                          ...styles.cercle,
                          backgroundColor: "pink",
                          borderColor: "red",
                          borderWidth: 3,
                        }}
                      ></View>
                    ) : (
                      <View
                        style={{ ...styles.cercle, backgroundColor: val.color }}
                      ></View>
                    )
                  ) : val.id === trueMini ? (
                    <View style={{ ...styles.cercle, backgroundColor: "red" }}>
                      <Image source={star} style={{ height: 60, width: 60 }} />
                    </View>
                  ) : selected == val.id && selected != trueMini ? (
                    <View
                      style={{
                        ...styles.cercle,
                        backgroundColor: "pink",
                        borderColor: "red",
                        borderWidth: 3,
                      }}
                    ></View>
                  ) : (
                    <View
                      style={{ ...styles.cercle, backgroundColor: "pink" }}
                    ></View>
                  )}
                </TouchableOpacity>
              ))}
               <View style={{ backgroundColor: "#faf7f7", position:'absolute',bottom:10,left:0,right:0 }}>
              {count < 3 && selected == trueMini ? (
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    marginBottom: 20,
                  }}
                >
                  You Are The Star!
                </Text>
              ) : selected != trueMini && count > 0 ? (
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    marginBottom: 20,
                  }}
                >
                  Try again
                </Text>
              ) : (
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    marginBottom: 20,
                  }}
                >
                  Where is the star ?
                </Text>
              )}
            </View>
            </View>
           
          </View>
          {/* single image */}
          <View style={styles.pub}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={{ uri: sponsors[0].img }}
                style={styles.avatar}
              />
              <Text style={styles.textAvatar}>{sponsors[0].name}</Text>
            </View>
          </View>
          <Image
            source={{ uri: sponsors[2].img }}
            style={{ width: windowWidth, height: 270, resizeMode: "cover" }}
          />
          <InteractionWrapper>
            <Interaction>
              <Ionicons name="heart-outline" size={25} color="#333" />
              <InteractionText> 1,136 likes</InteractionText>
            </Interaction>
          </InteractionWrapper>
          {/* carousel 1 */}

          <View style={styles.pub}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={{ uri: sponsors[0].img }}
                style={styles.avatar}
              />
              <Text style={styles.textAvatar}>{sponsors[0].name}</Text>
            </View>
          </View>
          <CustomSlider data={data} />
          <InteractionWrapper>
            <Interaction>
              <Ionicons name="heart-outline" size={25} color="#333" />
              <InteractionText> 1,136 likes</InteractionText>
            </Interaction>
          </InteractionWrapper>
          {/* mini game2 */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              backgroundColor: "#faf7f7",
              height: 370,
              width: windowWidth,
              padding: 40,
            }}
          >
            <Image
              source={gidi}
              style={{
                width: 40,
                height: 40,
                top: 5,
                left: 5,
                position: "absolute",
              }}
            />
            {Cards.map((val, key) => (
              <TouchableOpacity onPress={() => findJoker(val.id)}>
                {jokerSelected == val.id && jokerSelected == trueJoker ? (
                  <Image
                    source={joker}
                    style={{ width: 60, height: 80, margin: 7 }}
                  />
                ) : jokerSelected != trueJoker && jokerSelected == val.id ? (
                  <Image
                    source={cardfail}
                    style={{ width: 60, height: 80, margin: 7 }}
                  />
                ) : (
                  <Image
                    source={card}
                    style={{ width: 60, height: 80, margin: 7 }}
                  />
                )}
              </TouchableOpacity>
            ))}
            <Title
              style={{ alignSelf: "center", position: "absolute", bottom: 5 }}
            >
              Where is The Joker
            </Title>
          </View>
          {/* carousel 2 */}
          <View style={styles.pub}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={{ uri: sponsors[0].img }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 40,
                  marginRight: 10,
                }}
              />
              <Title>{sponsors[0].name}</Title>
            </View>
          </View>
          <CustomSlider data={data} />
          <InteractionWrapper>
            <Interaction>
              <Ionicons name="heart-outline" size={25} color="#333" />
              <InteractionText> 1,136 likes</InteractionText>
            </Interaction>
          </InteractionWrapper>
          <View
            style={{ width: windowWidth, paddingLeft: 20, paddingBottom: 10 }}
          >
            <Text>{sponsors[0].post}</Text>
          </View>
          <View style={styles.pub}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={{ uri: sponsors[0].img }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 40,
                  marginRight: 10,
                }}
              />
              <Title>{sponsors[0].name}</Title>
            </View>
          </View>
          <View style={{ width: windowWidth, height: windowWidth }}>
            {/* <Video
              ref={video}
              style={{ width: windowWidth, height: windowWidth }}
              source={{
                uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              }}
              shouldPlay
              isMuted
              // volume
              resizeMode="cover"
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            /> */}
            <View style={styles.controlBar}>
              <MaterialIcons
                name={status.mute ? "volume-mute" : "volume-up"}
                size={25}
                color="white"
                onPress={handleVolume}
              />
            </View>
          </View>
          <InteractionWrapper>
            <Interaction>
              <Ionicons name="heart-outline" size={25} color="#333" />
              <InteractionText> 1,136 likes</InteractionText>
            </Interaction>
          </InteractionWrapper>
          {/* carousel 3 */}
          <View style={styles.pub}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={{ uri: sponsors[0].img }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 40,
                  marginRight: 10,
                }}
              />
              <Title>{sponsors[0].name}</Title>
            </View>
          </View>
          <CustomSlider data={data} />
          <InteractionWrapper>
            <Interaction>
              <Ionicons name="heart-outline" size={25} color="#333" />
              <InteractionText> 1,136 likes</InteractionText>
            </Interaction>
          </InteractionWrapper>
          {/* single image */}
          <View style={styles.pub}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={{ uri: sponsors[0].img }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 40,
                  marginRight: 10,
                }}
              />
              <Title>{sponsors[0].name}</Title>
            </View>
          </View>
          <Image
            source={{ uri: sponsors[1].img }}
            style={{ width: windowWidth, height: 270, resizeMode: "cover" }}
          />
          <InteractionWrapper>
            <Interaction>
              <Ionicons name="heart-outline" size={25} color="#333" />
              <InteractionText> 1,136 likes</InteractionText>
            </Interaction>
          </InteractionWrapper>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              backgroundColor: "#faf7f7",
              height: 370,
              width: windowWidth,
              padding: 40,
            }}
          >
            <Image
              source={gidi}
              style={{
                width: 40,
                height: 40,
                top: 5,
                left: 5,
                position: "absolute",
              }}
            />
            {Cards.map((val, key) => (
              <TouchableOpacity onPress={() => findJoker(val.id)}>
                {jokerSelected == val.id && jokerSelected == trueJoker ? (
                  <Image
                    source={joker}
                    style={{ width: 60, height: 80, margin: 7 }}
                  />
                ) : jokerSelected != trueJoker && jokerSelected == val.id ? (
                  <Image
                    source={cardfail}
                    style={{ width: 60, height: 80, margin: 7 }}
                  />
                ) : (
                  <Image
                    source={card}
                    style={{ width: 60, height: 80, margin: 7 }}
                  />
                )}
              </TouchableOpacity>
            ))}
            <Title
              style={{ alignSelf: "center", position: "absolute", bottom: 5 }}
            >
              Where is The Joker
            </Title>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 30,
              width: windowWidth,
              height: 150,
              backgroundColor: "#faf7f7",
              alignItems: "center",
            }}
          >
            <Image
              source={gidi}
              style={{
                width: 40,
                height: 40,
                top: 5,
                left: 5,
                position: "absolute",
              }}
            />
            {mini.map((val, key) => (
              <TouchableOpacity key={key} onPress={() => handelCorrect(val.id)}>
                {count < 2 ? (
                  val.id === trueMini && selected == trueMini ? (
                    <View
                      style={{
                        ...styles.cercle,
                        backgroundColor: "#fff",
                        borderColor: "green",
                        borderWidth: 3,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image source={star} style={{ height: 30, width: 30 }} />
                    </View>
                  ) : selected == val.id && selected != trueMini ? (
                    <View
                      style={{
                        ...styles.cercle,
                        backgroundColor: "pink",
                        borderColor: "red",
                        borderWidth: 3,
                      }}
                    ></View>
                  ) : (
                    <View
                      style={{ ...styles.cercle, backgroundColor: val.color }}
                    ></View>
                  )
                ) : val.id === trueMini ? (
                  <View style={{ ...styles.cercle, backgroundColor: "red" }}>
                    <Image source={star} style={{ height: 60, width: 60 }} />
                  </View>
                ) : selected == val.id && selected != trueMini ? (
                  <View
                    style={{
                      ...styles.cercle,
                      backgroundColor: "pink",
                      borderColor: "red",
                      borderWidth: 3,
                    }}
                  ></View>
                ) : (
                  <View
                    style={{ ...styles.cercle, backgroundColor: "pink" }}
                  ></View>
                )}
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ backgroundColor: "#faf7f7", width: windowWidth }}>
            {count < 3 && selected == trueMini ? (
              <Text
                style={{ alignSelf: "center", fontSize: 18, marginBottom: 20 }}
              >
                You Are The Star!
              </Text>
            ) : selected != trueMini && count > 0 ? (
              <Text
                style={{ alignSelf: "center", fontSize: 18, marginBottom: 20 }}
              >
                Try again
              </Text>
            ) : (
              <Text
                style={{ alignSelf: "center", fontSize: 18, marginBottom: 20 }}
              >
                Where is the star ?
              </Text>
            )}
          </View>

          {/* carousel 2 */}
          <View style={styles.pub}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={{ uri: sponsors[0].img }}
                style={styles.avatar}
              />
              <Title>{sponsors[0].name}</Title>
            </View>
          </View>
          <CustomSlider data={data} />
          <InteractionWrapper>
            <Interaction>
              <Ionicons name="heart-outline" size={25} color="#333" />
              <InteractionText> 1,136 likes</InteractionText>
            </Interaction>
          </InteractionWrapper>

          {/* carousel 2 */}
          <View style={styles.pub}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={{ uri: sponsors[0].img }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 40,
                  marginRight: 10,
                }}
              />
              <Title>{sponsors[0].name}</Title>
            </View>
          </View>
          <CustomSlider data={data} />
          <InteractionWrapper>
            <Interaction>
              <Ionicons name="heart-outline" size={25} color="#333" />
              <InteractionText> 1,136 likes</InteractionText>
            </Interaction>
          </InteractionWrapper>

          <View style={styles.extraLife}>
            <Image
              source={gidi}
              style={{
                width: 40,
                height: 40,
                top: 5,
                left: 5,
                position: "absolute",
              }}
            />
            <View
              style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
            >
              <Image
                source={coin}
                style={{ width: 100, height: 100, marginRight: 15 }}
              />
              <Title style={{ color: "green", fontSize: 31 }}>
                1 Extra Life
              </Title>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                bottom: 4,
                position: "absolute",
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "bold",
                  alignSelf: "center",
                  marginLeft: 50,
                }}
              >
                Get one extra life for the next game.
              </Text>
              <AntDesign
                name="arrowright"
                color="green"
                size={30}
                style={{
                  marginLeft: 40,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
  
  );
};

export default Home;

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
