import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../assets/favicon.png'

const index = () => {
  return (
    <View style={styles.container}>
   <Image source={logo} />
      <Text style={styles.title}>Saquib Sayyed</Text> 
      <Text style={{marginTop:10, marginBottom: 10}}>MERN Stack Developer</Text>
      <View>
        <Text style={styles.card}>This is Card Components</Text>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:18
  },
  card:{
    backgroundColor:'#add8e6',
    padding:20,
    borderRadius: 5,
    boxShadow: '4px 4px 10px rgba(0,0,0,0.1)'

  },
  img:{
    marginVertical:20
  }
})