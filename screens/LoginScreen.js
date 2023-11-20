import {KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior='padding'>
    <View style={styles.inputContainer}>
        <TextInput placeholder='Email'
        // value={}
        // onChangeText={text =>}
        style={styles.input}/>
    </View>

    <View style={styles.inputContainer}>
        <TextInput placeholder='password'
        // value={}
        // onChangeText={text =>}
        style={styles.input}
        secureTextEntry/>
    </View>
    <View style={styles.buttonContainer}>
<TouchableOpacity
onPress={()=>{}

}
style={styles.button}
>
    <Text style={styles.button }>Login</Text>
</TouchableOpacity  >


<TouchableOpacity
onPress={()=>{}

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
    backgroundColor:"white",
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
    backgroundColor: "0782f9"
},
buttonOutline:{},
buttonOutlineText:{},
buttonText:{},
})