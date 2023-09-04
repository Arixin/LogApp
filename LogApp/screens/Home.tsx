import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Home = () => {
  return (
    <LinearGradient 
        style={{
            flex:1
        }}
        colors={[COLORS.purple,COLORS.creamy]}
    >
        <View>
            <Text style={{paddingTop:100,
              textAlign:"center",
              color:`${COLORS.black}`,
              fontSize:40,
              fontWeight:'bold'
            }}>Hello World</Text>
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
