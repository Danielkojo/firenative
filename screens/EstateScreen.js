import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';   
import { SelectList } from 'react-native-dropdown-select-list';


const EstateScreen = () => {
const navigation = useNavigation();
const [category,setCategory]=React.useState("")
const [subCategory,setSubCategory]=React.useState("")


const categories =[{key:'SugarBread', value:'SugarBread'},{key:'WaterBottle', value:'WaterBottle'}]
const subcategories={
  'SugarBread':[{key:'1', value:'Large'},{key:'2', value:'Small'}],
  'WaterBottle':[{key:'3', value:' Big'},{key:'4', value:'Small'}]
}
    // const logout = async () => {
    //     try {
    //       await signOut(auth);
    //    navigation.replace("Login")
    //     } catch (err) {
    //       console.error(err);
    //       // Set the error message in state
    //       Alert.alert('Error', err.message);
    //     }
    //   };
  return (
    // <View style={styles.container}>
      
    //   <Text>Email:{auth.currentUser?.email}</Text>
    //   <TouchableOpacity
    //   onPress={logout}
    //   style = {styles.button }
    //   >
    //     <Text style ={styles.buttonText}>Sign Outttttttt</Text>
    //   </TouchableOpacity>
    // </View>
    <View style={{paddingHorizontal:20,paddingTop:10}}>
<SelectList
setSelected={setCategory}
data={categories}
placeholder={"Select Bread"}
defaultOption={{key:'SugarBread', value:'SugarBread'}}
/>

<SelectList
setSelected={setSubCategory}
data={subcategories[category]}
boxStyles={{marginTop:30}}
placeholder={"Select Size"}
defaultOption={subcategories[category[0]]}
/>
    </View>
  )
}

export default EstateScreen
 
// const styles = StyleSheet. create({
// container:{
// flex:1,
// justifyContent: 'center',
// alignItems: 'center'
// }
// ,
 

// button:{
// backgroundColor: "#0782f9",
// width: '60%',
// padding:15,
// borderRadius:10,
// alignItems: 'center',
// marginTop:40
// },
// buttonText:{
// color:'white',
// fontWeight:'700',
// fontSize:16
// },

// }) 