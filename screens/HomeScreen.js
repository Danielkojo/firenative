import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';   



const HomeScreen = () => {
const navigation = useNavigation();


    const logout = async () => {
        try {
          await signOut(auth);
       navigation.replace("Login")
        } catch (err) {
          console.error(err);
          // Set the error message in state
          Alert.alert('Error', err.message);
        }
      };
  return (
    <View style={styles.container}>
      
      <Text>Email:{auth.currentUser?.email}</Text>
      <TouchableOpacity
      onPress={logout}
      style = {styles.button }
      >
        <Text style ={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
 
const styles = StyleSheet. create({
container:{
flex:1,
justifyContent: 'center',
alignItems: 'center'
}
,
 

button:{
backgroundColor: "#0782f9",
width: '60%',
padding:15,
borderRadius:10,
alignItems: 'center',
marginTop:40
},
buttonText:{
color:'white',
fontWeight:'700',
fontSize:16
},

}) 