import React, { useState } from 'react';
import index from '../API/index';
import { useLogin } from '../Context/index';
import { isValidEmail, isValidObjField, updateError } from '../utils/methods.js';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, Dimensions,StatusBar } from 'react-native'
import { FontAwesome,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import bg from '../assets/Gidi.png'
import FormInput from '../components/FormInput';
import FormSubmitButton from '../components/FormSubmitButton';
import FormContainer from '../components/FormContainer';

const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
const Login = () => {
   
    const { setIsLoggedIn, setProfile } = useLogin();
    const [userInfo, setUserInfo] = useState({
      email: '',
      password: '',
    });
  
    const [error, setError] = useState('');
  
    const { email, password } = userInfo;
  
    const handleOnChangeText = (value, fieldName) => {
      setUserInfo({ ...userInfo, [fieldName]: value });
    };
  
    const isValidForm = () => {
      if (!isValidObjField(userInfo))
        return updateError('Required all fields!', setError);
  
      if (!isValidEmail(email)) return updateError('Invalid email!', setError);
  
      if (!password.trim() || password.length < 8)
        return updateError('Password is too short!', setError);
  
      return true;
    };
  
    const submitForm = async () => {
      if (isValidForm()) {
        try {
          const res = await index.post('/user/login', userInfo );
  
          if (res.data) {
            setUserInfo({ email: '', password: '' });
            setProfile(res.data.user);
            setIsLoggedIn(true);
          }
  
          console.log(res.data);
        } catch (error) {
          console.log('ktibaaaaa',error);
        }
      }
    };
    
    return (
        <SafeAreaView style={styles.container}>
             <StatusBar
        animated={true}
        backgroundColor="#057ec1"
         />
           <FormContainer>
     
        
        <View style={styles.textContainer}>
           <View style={styles.label}>
               <Text style={{marginBottom:5,color:'blue'}}>EMAIL</Text>
               <Entypo name='mail' size={24} color='blue' />
           </View>
           <TextInput style={styles.input} onChangeText={value => handleOnChangeText(value, 'email')} />
        </View>

        {/* <FormInput
        value={email}
        onChangeText={value => handleOnChangeText(value, 'email')}
        label='Email'
        placeholder='example@email.com'
        autoCapitalize='none'
      /> */}
       
        <View style={styles.textContainer}>
           <View style={styles.label}>
               <Text style={{marginBottom:5,color:'blue'}}>PASSWORD</Text>
               <MaterialCommunityIcons name='key' size={24} color='blue' />
           </View>
           <TextInput style={styles.input} onChangeText={value => handleOnChangeText(value, 'password')}  />
        </View>
        {/* <FormInput
        style={styles.input}
        value={password}
        onChangeText={value => handleOnChangeText(value, 'password')}
        label='Password'
        placeholder='********'
        autoCapitalize='none'
        secureTextEntry
      /> */}
       {error ? (
        <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' ,margin:10}}>
          {error}
        </Text>
      ) : null}
        {/* <TouchableOpacity onPress={submitForm}>
            <View style={styles.save}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>
                    Save
                </Text>
            </View>
        </TouchableOpacity> */}
        <FormSubmitButton onPress={submitForm} title='Login' />
        </FormContainer>
       
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    textContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
        marginBottom:20
    },
    label:{
        marginRight:-160,
        bottom:10,
        width:150
        
    },
    container:{
        flex:1,
      paddingLeft:20,
      paddingRight:20,
      paddingTop:windowHeight/6,
       justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#fff'
        
    },
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
     
      save:{
        justifyContent:'center',
        alignItems:'center',
        padding: 20,
        width: windowWidth/1.2 ,
        height:70,
        backgroundColor:'#5271ff',
        
        
        
       
    }

})
