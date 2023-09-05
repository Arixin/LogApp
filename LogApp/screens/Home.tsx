import { View, Text,Pressable,FlatList } from 'react-native'
import React, { useState,useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'


const BASE_URL = 'http://51.83.185.187:1337'

const Home = ({navigation,route}:{navigation:any,route:any}) => {

  const[title,setTitle]=useState<any[]>([])
  const[description,setDescription]=useState<any[]>([])

  useEffect(() => {
    const {accessToken,userId} = route.params

    axios
      .get(`${BASE_URL}/api/articles`, {
         headers: {
           Authorization: `Bearer ${accessToken}`,
         },
      })
      .then((response) => {
        setTitle(response.data.data[userId].attributes.title)
        setDescription(response.data.data[userId].attributes.description)
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania artykułów:', error)
      });
  }, []);

  return (
    <LinearGradient 
        style={{
            flex:1
        }}
        colors={[COLORS.purple,COLORS.creamy]}
    >
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',paddingTop:100,gap:40}} >
            <Text style={{
              textAlign:"center",
              color:`${COLORS.black}`,
              fontSize:40,
              fontWeight:'bold'
            }}>Hello Home</Text>
            <Pressable style={{
            borderWidth:1,
            borderRadius:50,
            backgroundColor:COLORS.creamy,
            display:'flex',
            padding:10,
            paddingRight:35,
            paddingLeft:35,
            justifyContent:'center',
            alignItems:'center'}} 
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color:COLORS.purple,fontWeight:'bold',fontSize:20}}>Log Out</Text>
          </Pressable>
        </View>
        <View style={{display:'flex',padding:10,gap:10}} >
            <Text style={{fontSize:20}} ><Text style={{fontWeight:'bold'}} >Title:</Text><Text> {title}</Text></Text>
            <Text style={{fontSize:20}} ><Text style={{fontWeight:'bold'}} >Description:</Text><Text> {description}</Text></Text>        
            </View>
    </LinearGradient>
  )
}

export default Home

const COLORS = {
    purple: "#6047df",
    creamy: "#e5ccc3",
    black:"#222222"
}
