import {KeyboardAvoidingView, Settings, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { doc } from 'firebase/firestore';
import { db} from '../firebase';
 import { getDoc } from 'firebase/firestore';
const LoginScreen = () => {
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const navigation = useNavigation()

// useEffect(()=>{
//     const unsubscribe = auth.onAuthStateChanged(user =>{
//         if(user){
//             navigation.replace("Login")
//         }
//     })
//     return unsubscribe
// },[])
// const signIn = async () => {
   
//   try {
        
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;
//         // Assuming you have a collection named 'users' in Firestore
//         const userDocRef = doc(db, 'userrs', user.uid);
//         const userDoc = await getDoc(userDocRef);
        
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           if (userData.role === 'admin') {
        
//             navigation.replace("Admin")
//           } else {
           
//             navigation.replace("Home")
//           }
//         }
//         // navigation.replace("DrawerGroup")
//       }
//     catch (err) {
//       console.error(err);
//       Alert.alert('Error', err.message);// Set the error message in state
//     }
//   };
//useffect 
useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
        if(user){
            navigation.replace("Home")
        }
    })
    return unsubscribe
},[])
const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the home screen after a successful login
      console.log('signed in')// Replace "/home" with the actual route for your home screen.
    } catch (err) {
      console.error(err);
      Alert.alert('Error', err.message);// Set the error message in state
    }
  };

const SignUp = async ()=>{
    try{await createUserWithEmailAndPassword(auth, email,password )}
    catch(err){
        console.error(err)
        Alert.alert('Error', err.message);
    }
        };  
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior='padding'>
    <View style={styles.inputContainer}>
        <TextInput placeholder='Email'
        value={email}
        onChangeText={text =>setEmail(text)}
        style={styles.input}/>
    </View>

    <View style={styles.inputContainer}>
        <TextInput placeholder='password'
        value={password}
        onChangeText={text =>setPassword(text)}
        style={styles.input}
        secureTextEntry/>
    </View>
    <View style={styles.buttonContainer}>
<TouchableOpacity
onPress={signIn 

}
style={styles.button}
>
    <Text style={styles.buttonText }>Login</Text>
</TouchableOpacity  >


<TouchableOpacity
onPress={SignUp 

}
style={[styles.button, styles.buttonOutline ]}
>
    <Text style={[styles.buttonOutlineText ]}>Register</Text>
</TouchableOpacity  >
    </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },

    inputContainer:{
        width:'80%'
    },

input:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,
},
    buttonContainer:{
        width:"60%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:40
    },
button:{
    backgroundColor: "#0782f9",
    width: '100%',
    padding:15,
    borderRadius:10,
    alignItems: 'center'
},
buttonOutline:{
    
    backgroundColor:'white',
    marginTop:5,
    borderColor: "#0782f9",
    borderWidth:2,
},
buttonOutlineText:{
    color:'#0782f9',
    fontWeight:'700',
    fontSize:16
},
buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16
},
})