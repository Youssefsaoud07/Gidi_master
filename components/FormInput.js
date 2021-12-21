import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
const FormInput = props => {
  const { placeholder, label, error } = props;
  return (
    <>
    <View style={styles.textContainer}>
     <Text style={{marginBottom:5,color:'blue'}}>{label}</Text>
               <FontAwesome name={label} size={24} color='blue' />
        {error ? (
          <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
        ) : null}
    
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
        marginLeft:10,
        marginBottom:30,
        borderBottomWidth: 1,
        paddingLeft: 30,
        paddingTop:10,
        paddingRight:10,
        borderColor:'blue',
        width:windowWidth/1.2,
        color:'#000'
  },
  textContainer:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
    marginBottom:20,

},
label:{
    marginRight:-160,
    bottom:10,
    width:150
    
},
});

export default FormInput;