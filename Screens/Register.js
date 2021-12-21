import React,{useState} from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import * as Yup from 'yup';
import FormInput from '../components/FormInput';
import FormSubmitButton from '../components/FormSubmitButton';
import index from '../API/index';
const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const validationSchema = Yup.object({
        fullname: Yup.string()
          .trim()
          .min(3, 'Invalid name!')
          .required('Name is required!'),
        email: Yup.string().email('Invalid email!').required('Email is required!'),
        password: Yup.string()
          .trim()
          .min(8, 'Password is too short!')
          .required('Password is required!'),
        confirmPassword: Yup.string().equals(
          [Yup.ref('password'), null],
          'Password does not match!'
        ),
      });
      
const Register = () => {
    const userInfo = {
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
      };

      const [error, setError] = useState('');

      const { fullname, email, password, confirmPassword } = userInfo;
    
      const handleOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value });
      };
    
      const isValidForm = () => {
        // we will accept only if all of the fields have value
        if (!isValidObjField(userInfo))
          return updateError('Required all fields!', setError);
        // if valid name with 3 or more characters
        if (!fullname.trim() || fullname.length < 3)
          return updateError('Invalid name!', setError);
        // only valid email id is allowed
        if (!isValidEmail(email)) return updateError('Invalid email!', setError);
        // password must have 8 or more characters
        if (!password.trim() || password.length < 8)
          return updateError('Password is less then 8 characters!', setError);
        // password and confirm password must be the same
        if (password !== confirmPassword)
          return updateError('Password does not match!', setError);
    
        return true;
      };
    
      const sumbitForm = () => {
        if (isValidForm()) {
          // submit form
          console.log(userInfo);
        }else console.log('errrrrrrrr')
      };
    
      const signUp = async (values, formikActions) => {
        const res = await index.post('/user/register', {
          ...values,
        });
    
        if (res.data.success) {
          const signInRes = await index.post('/user/login', {
            email: values.email,
            password: values.password,
          });
          if (signInRes.data.success) {
            navigation.dispatch(
              StackActions.replace('ImageUpload', {
                token: signInRes.data.token,
              })
            );
          }
        }
    
        formikActions.resetForm();
        formikActions.setSubmitting(false);
      };
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
        <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={signUp}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const { fullname, email, password, confirmPassword } = values;
          return (

            <>

              <FormInput
                value={fullname}
                error={touched.fullname && errors.fullname}
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                label='Full Name'
                placeholder='John Smith'
                icon='user'
              />
              <FormInput
                value={email}
                error={touched.email && errors.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                autoCapitalize='none'
                label='Email'
                placeholder='example@email.com'
                icon='mail'
              />
              <FormInput
                value={password}
                error={touched.password && errors.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                autoCapitalize='none'
                secureTextEntry
                label='Password'
                placeholder='********'
                icon='key'
              />
              <FormInput
                value={confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                autoCapitalize='none'
                secureTextEntry
                label='Confirm Password'
                placeholder='********'
                icon='key'
              />

        {/* <View style={styles.textContainer}>
           <View style={styles.label}>
               <Text style={{marginBottom:5,color:'blue'}}>FULL NAME</Text>
               <FontAwesome name='user' size={24} color='blue' />
           </View>
           <TextInput style={styles.input}   />
        </View>
        <View style={styles.textContainer}>
           <View style={styles.label}>
               <Text style={{marginBottom:5,color:'blue'}}>EMAIL</Text>
               <Entypo name='mail' size={24} color='blue' />
           </View>
           <TextInput style={styles.input} />
        </View>
        <View style={styles.textContainer}>
           <View style={styles.label}>
               <Text style={{marginBottom:5,color:'blue'}}>CITY OF RESIDENCE</Text>
               <Entypo name='location-pin' size={24} color='blue' />
           </View>
           <TextInput style={styles.input}  />
        </View>
        <View style={styles.textContainer}>
           <View style={styles.label}>
               <Text style={{marginBottom:5,color:'blue'}}>PASSWORD</Text>
               <MaterialCommunityIcons name='key' size={24} color='blue' />
           </View>
           <TextInput style={styles.input}  />
        </View> */}

        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'flex-start',marginLeft:30}}>
            <TouchableOpacity>
            <View style={{backgroundColor:'gray',justifyContent:'center',alignItems:'center',width:100,height:100}}>
              <MaterialCommunityIcons name='upload' size={24} color='#fff' />
            </View>
            </TouchableOpacity>
            <Text style={{marginLeft:20,width:80}}>UPLOAD YOUR PROFILE PC</Text>
        </View>
        {/* <TouchableOpacity>
            <View style={styles.save}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>
                    Save
                </Text>
            </View>
        </TouchableOpacity> */}
         <FormSubmitButton
                submitting={isSubmitting}
                onPress={handleSubmit}
                title='Sign up'
              />
        </>
          );
        }}
      </Formik>
        </SafeAreaView>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
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
    container:{
        flex:1,
        paddingTop:60,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    input: {
        height: 40,
        marginLeft:10,
        marginBottom:30,
        borderBottomWidth: 1,
        padding: 20,
        paddingRight:10,
        borderColor:'blue',
        width: windowWidth/1.2
      },
      save:{
        justifyContent:'center',
        alignItems:'center',
        padding: 20,
        width: windowWidth/1.2 ,
        height:70,
        backgroundColor:'#5271ff',
        marginTop:60,
        marginBottom:80
      }
})
