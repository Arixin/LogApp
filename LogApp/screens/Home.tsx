import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({navigation}:{navigation:any}) => {
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
    </LinearGradient>
  )
}

export default Home

const COLORS = {
    purple: "#6047df",
    creamy: "#e5ccc3",
    black:"#222222"
}
