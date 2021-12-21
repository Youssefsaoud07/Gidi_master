import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



const TopNavigation = ({ index, setIndex }) => {
  

  return (
    <View
      style={{
        ...styles.container,
      
      }}
    >
      {index === 0 ? (
        <TouchableOpacity
         
          style={styles.left}
        >
          <Text
            style={{ ...styles.text}}
          >
            
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          
         
        </TouchableOpacity>
      )}

      
      
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
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