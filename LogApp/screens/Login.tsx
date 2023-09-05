import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'


const BASE_URL = 'http://51.83.185.187:1337'

const Login = ({navigation}:{navigation:any}) => {
  
  const[username,setUsername] = useState('')
  const[isValidU,setIsValidU] = useState(true)
  
  const[password,setPassword] = useState('')
  const[isValidP,setIsValidP] = useState(true)
  
  
  const validateUsername = (text: string) => {
    const regex = /^[a-zA-Z0-9]{3,20}$/
    setIsValidU(regex.test(text))
    setUsername(text)
  }
  
  const validatePassword = (text: string) => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{6,20}$/
    setIsValidP(regex.test(text))
    setPassword(text)
  }
  
  const handleAuth = () => {
    if(!isValidP || !isValidU){
      return
    }

    axios
      .post(`${BASE_URL}/api/auth/local`,{identifier:username,password:password})
      .then((response:any) => {
        navigation.navigate('Home')
        console.log("Login Accepted",response.data)
      })
      .catch((error:any) => {
        Alert.alert('Login Failed','Try again')
        console.error('Login Failed',error)
        console.log(username,password)
      })

  }

  return (
    <LinearGradient 
        style={{
            flex:1
        }}
        colors={[COLORS.purple,COLORS.creamy]}
    >
        <View>
            <Text
              style={{paddingTop:100,
              textAlign:"center",
              color:`${COLORS.black}`,
              fontSize:40,
              fontWeight:'bold'
            }}
            >Hello Login</Text>
        </View>
        <View style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:10,
          padding:5,
          margin:10,
          paddingTop:150
        }}>
          <Text style={{fontSize:25}}>Login</Text>
          <TextInput style={{
            height:40,
            borderWidth:1,
            borderRadius:50,
            width:300,
            backgroundColor:COLORS.creamy,
            padding:10
          }}
          placeholder='JanKowalski'
          onChangeText={validateUsername}
          value={username}
          />
          {!isValidU && (
        <Text style={{ color: 'black',width:250,fontSize:15,fontWeight:'bold' }}>
        • Nazwa użytkownika musi zawierać od 3 do 20 znaków i składać się tylko z liter i cyfr.
        </Text>
      )}
          <Text style={{fontSize:25}}>Password</Text>
          <TextInput style={{
            height:40,
            borderWidth:1,
            borderRadius:50,
            width:300,
            backgroundColor:COLORS.creamy,
            padding:10
          }}
          secureTextEntry={true}
          placeholder='********'
          onChangeText={validatePassword}
          value={password}
          />{!isValidP && (
            <Text style={{ color: 'black',width:250,fontSize:15,fontWeight:'bold' }}>
            • Hasło musi zawierać od 6 do 20 znaków i zawierać co najmniej jeden znak specjalny, jedną cyfrę oraz jedną dużą literę.
            </Text>
          )}
          <Pressable style={{
            marginTop:20,
            borderWidth:1,
            borderRadius:50,
            backgroundColor:COLORS.purple,
            display:'flex',
            padding:10,
            paddingRight:35,
            paddingLeft:35,
            justifyContent:'center',
            alignItems:'center'}} 
            onPress={handleAuth}>
            <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:20}}>Log In</Text>
          </Pressable>
        </View>
    </LinearGradient>
  )
}

export default Login

const COLORS = {
    purple: "#6047df",
    creamy: "#e5ccc3",
    black:"#222222"
}
