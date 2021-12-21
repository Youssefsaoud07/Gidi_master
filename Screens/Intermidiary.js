import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Intermidiary = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Entypo
          name="menu"
          size={35}
          style={{ position: "absolute", top: 20, left: 20 }}
        />
        <View
          style={{
            width: (windowWidth * 7.8) / 9,
            height: (windowWidth * 2.3) / 5,
            alignSelf: "center",
            backgroundColor: "#F9FAFD",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ ...styles.texto, color: "#057EC1" }}>
            {" "}
            Compete against other{" "}
          </Text>
          <Text style={{ ...styles.texto, color: "#057EC1" }}>
            {" "}
            players from across the{" "}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...styles.texto, color: "#057EC1" }}>
              {" "}
              country to win the
            </Text>
            <Text style={{ ...styles.texto, color: "#F9A72B" }}> TOP 3</Text>
          </View>
          <Text style={{ ...styles.texto, color: "#057EC1" }}>
            {" "}
            weekly spots.
          </Text>
        </View>
        <View
          style={{
            width: windowWidth,
            height: windowHeight / 2,
            marginBottom: (windowHeight * 1) / 6,
          }}
        >
          <Text
            style={{ alignSelf: "flex-start", marginLeft: 29, marginTop: 10 }}
          >
            Swipe to see current rankings
          </Text>
          <TouchableOpacity
            onPress={() =>
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Practice' }],
                  })
              
            }
          >
            <Entypo
              name="game-controller"
              size={60}
              style={{
                alignSelf: "flex-start",
                marginLeft: 30,
                marginTop: 90,
                color: "#82D692",
              }}
            />
            <Text
              style={{
                alignSelf: "flex-start",
                marginLeft: 30,
                marginTop: 5,
                fontSize: 20,
              }}
            >
              PLAY
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: (windowWidth * 7.8) / 9,
            height: (windowHeight * 1) / 4,
            backgroundColor: "#F9FAFD",
            alignSelf: "center",
            padding: 15,
            marginBottom: 40,
          }}
        >
          <Text style={{ color: "#057EC1", fontSize: 15, fontWeight: "bold" }}>
            Tournament regulations
          </Text>
          <Text style={{ fontSize: 10, marginLeft: 5 }}>
            1. Play as many times as you want to increase your chances
          </Text>
          <Text style={{ fontSize: 10, marginLeft: 15 }}>
            {" "}
            of finishing TOP 3
          </Text>
          <Text style={{ fontSize: 10, marginLeft: 5 }}>
            2. Start each game with 7 trials instead of 6 with extra lives
          </Text>
          <Text style={{ fontSize: 10, marginLeft: 5 }}>
            3. Tournament starts at 23:59 each Sunday
          </Text>
          <Text style={{ fontSize: 10, marginLeft: 5 }}>
            4. Tournament ends at 23:59 each Saturday
          </Text>
          <Text style={{ fontSize: 10, marginLeft: 5 }}>
            5. Tournament winners receive their prize instantly
          </Text>
          <Text style={{ fontSize: 10, marginLeft: 5 }}>
            6. The same player can win all 3 spots in the same week
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Intermidiary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 90,
  },
  texto: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
