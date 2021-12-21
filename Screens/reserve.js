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
  </View>

   
 <View
  style={{
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    width: windowWidth,
    height: 250,
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
    <View style={{ backgroundColor: "#faf7f7",position:'absolute',bottom:20,left:0,
  right:0 }}>
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
<View style={styles.description}>
    <Text style={styles.textAvatar}>
    Pepsi Nigeria
    </Text>
<Text >
 Stay refreshed all day.
    </Text>
    </View>
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
<Carousel data = {dummyData}/>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>
<View style={styles.description}>
    <Text style={styles.textAvatar}>
    Pepsi Nigeria
    </Text>
<Text >
 Stay refreshed all day.
    </Text>
    </View>
{/* mini game2 */}
<View
  style={{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#faf7f7",
    height: 400,
    width: windowWidth,
    padding: 40,
    marginBottom:20
    
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
      )
      //  : jokerSelected != trueJoker && jokerSelected == val.id ? (
      //   <Image
      //     source={val.img}
      //     style={{ width: 60, height: 80, margin: 7 }}
      //   />
      // ) 
      : (
        <Image
          source={val.img}
          style={{ width: 60, height: 80, margin: 7 }}
        />
      )}
    </TouchableOpacity>
  ))}
  <Text
    style={{...styles.textAvatar,bottom:30,position:'absolute'}}
  >
    Where is The Joker
  </Text>
</View>
{/* image big size */}
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
  style={{ width: windowWidth, height: 370, resizeMode: "cover" }}
/>
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
      style={styles.avatar}
    />
    <Text style={styles.textAvatar}>{sponsors[0].name}</Text>
  </View>
</View>
<Carousel data = {dummyData}/>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>
<View style={styles.description}>
    <Text style={styles.textAvatar}>
    Pepsi Nigeria
    </Text>
<Text >
 Stay refreshed all day.
    </Text>
    </View>
<View
  style={{ width: windowWidth, paddingLeft: 20, paddingBottom: 10 }}
>
 
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
      style={styles.avatar}
    />
    <Text style={styles.textAvatar}>{sponsors[0].name}</Text>
  </View>
</View>


<View style={styles.description}>
<View style={styles.description}>
    <Text style={styles.textAvatar}>
    Pepsi Nigeria
    </Text>
<Text >
 Stay refreshed all day.
    </Text>
    </View>

    </View>
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
      style={styles.avatar}
    />
    <Text style={styles.textAvatar}>{sponsors[0].name}</Text>
  </View>
</View>
<Carousel data = {dummyData}/>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>
<View style={styles.description}>
    <Text style={styles.textAvatar}>
    Pepsi Nigeria
    </Text>
<Text >
 Stay refreshed all day.
    </Text>
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
  source={{ uri: sponsors[1].img }}
  style={{ width: windowWidth, height: 270, resizeMode: "cover" }}
/>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>

<View style={styles.description}>
    <Text style={styles.textAvatar}>
    Pepsi Nigeria
    </Text>
<Text >
 Stay refreshed all day.
    </Text>
    </View>

<View
  style={{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#faf7f7",
    height: 400,
    width: windowWidth,
    padding: 40,
    marginBottom:20
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
      ) 
      // :
      //  jokerSelected != trueJoker && jokerSelected == val.id ? (
      //   <Image
      //     source={cardfail}
      //     style={{ width: 60, height: 80, margin: 7 }}
      //   />
      // )
       : (
        <Image
          source={val.img}
          style={{ width: 60, height: 80, margin: 7 }}
        />
      )}
    </TouchableOpacity>
  ))}
  <Text
    style={{...styles.textAvatar,bottom:30,position:'absolute'}}
  >
    Where is The Joker
  </Text>
</View>
{/* //video2 */}
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
<View style={{ width: windowWidth, height: windowWidth }}>
  <Video
    ref={video}
    style={{ width: windowWidth, height: windowWidth }}
    source={{
      uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    }}
    shouldPlay
    isMuted={status}
    resizeMode="cover"
    isLooping
    
   
  />
  <View style={styles.controlBar}>
    <TouchableOpacity onPress={handleVolume}>
    <MaterialIcons
      name={status ? "volume-up" :  "volume-mute"}
      size={25}
      color="white"
      
    />
    </TouchableOpacity>
  </View>
</View>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>

{/* Image big 2 */}
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
  style={{ width: windowWidth, height: 370, resizeMode: "cover" }}
/>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>



<View style={styles.description}>
    <Text style={styles.textAvatar}>
    Pepsi Nigeria
    </Text>
<Text >
 Stay refreshed all day.
    </Text>
    </View>


<View
  style={{
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    width: windowWidth,
    height: 250,
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
   <View style={{ backgroundColor: "#faf7f7",position:'absolute',bottom:20,left:0,
  right:0 }}>
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
</View>
{/* image single */}
<View style={{ width: windowWidth, height: windowWidth }}>
  <Video
    ref={video}
    style={{ width: windowWidth, height: windowWidth }}
    source={{
      uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    }}
    shouldPlay
    isMuted={status}
    resizeMode="cover"
    isLooping
    
   
  />
  <View style={styles.controlBar}>
    <TouchableOpacity onPress={handleVolume}>
    <MaterialIcons
      name={status ? "volume-up" :  "volume-mute"}
      size={25}
      color="white"
      
    />
    </TouchableOpacity>
  </View>
</View>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>
 {/* Image big 2 */}
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
  style={{ width: windowWidth, height: 370, resizeMode: "cover" }}
/>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>

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
<Carousel data = {dummyData}/>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>
{/* joker */}
<View
  style={{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#faf7f7",
    height: 400,
    width: windowWidth,
    padding: 40,
    marginBottom:20
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
      )
      //  : jokerSelected != trueJoker && jokerSelected == val.id ? (
      //   <Image
      //     source={val.img}
      //     style={{ width: 60, height: 80, margin: 7 }}
      //   />
      // ) 
      : (
        <Image
          source={val.img}
          style={{ width: 60, height: 80, margin: 7 }}
        />
      )}
    </TouchableOpacity>
  ))}
  <Text
    style={{...styles.textAvatar,bottom:30,position:'absolute'}}
  >
    Where is The Joker
  </Text>
</View>

<View style={{ width: windowWidth, height: windowWidth }}>
  <Video
    ref={video}
    style={{ width: windowWidth, height: windowWidth }}
    source={{
      uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    }}
    shouldPlay
    isMuted={status}
    resizeMode="cover"
    isLooping
    
   
  />
  <View style={styles.controlBar}>
    <TouchableOpacity onPress={handleVolume}>
    <MaterialIcons
      name={status ? "volume-up" :  "volume-mute"}
      size={25}
      color="white"
      
    />
    </TouchableOpacity>
  </View>
</View>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>

 {/* Image big 2 */}
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
  style={{ width: windowWidth, height: 370, resizeMode: "cover" }}
/>
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
      style={styles.avatar}
    />
    <Text style={styles.textAvatar}>{sponsors[0].name}</Text>
  </View>
</View>
<Carousel data = {dummyData}/>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>
<View style={styles.description}>
    <Text style={styles.textAvatar}>
    Pepsi Nigeria
    </Text>
<Text >
 Stay refreshed all day.
    </Text>
    </View>
    <View
  style={{
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    width: windowWidth,
    height: 250,
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
   <View style={{ backgroundColor: "#faf7f7",position:'absolute',bottom:20,left:0,
  right:0 }}>
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
     <Text style={styles.textAvatar}>{sponsors[0].name}</Text>
  </View>
</View>
<Carousel data = {dummyData}/>
<InteractionWrapper>
  <Interaction>
    <Ionicons name="heart-outline" size={25} color="#333" />
    <InteractionText> 1,136 likes</InteractionText>
  </Interaction>
</InteractionWrapper>
<View style={styles.description}>
    <Text style={styles.textAvatar}>
    Pepsi Nigeria
    </Text>
<Text >
 Stay refreshed all day.
    </Text>
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
      style={styles.avatar}
    />
    <Text style={styles.textAvatar}>{sponsors[0].name}</Text>
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
    <View style={{...styles.play}}>
<Text style={{color:'gray',fontSize:9}}>GIDI-GIDI NG</Text>
<View style={{width:2,height:10,borderColor:'gray',borderWidth:1,marginLeft:10,marginRight:10}}></View>
<Text style={{color:'gray',fontSize:9}}>VERSION 1.0</Text>

</View>
</View>