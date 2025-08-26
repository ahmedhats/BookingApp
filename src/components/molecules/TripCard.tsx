import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppImage from '../atoms/Image/AppImage'
import AppPrice from '../atoms/Price/AppPrice'

type TripCardProps = {
    imageUrl:string,
    isVertical?:boolean
}
export default function TripCard({imageUrl,isVertical=true}:TripCardProps) {
  if(!isVertical){
    return(
      <View style={styles.vContainer}>
        <AppImage style={{ width: 150, height: 150, borderRadius: 10 }} source={{uri: imageUrl}} />
        <Text>hellllllo</Text>
      </View>   
    )
  }
  else{
    return ( 
        <ImageBackground 
          source={{uri: imageUrl}} 
          style={styles.container}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.tripInfo}>
            <Text style={styles.tripName}>TripCard</Text>
            <Text style={styles.tripLocation}>TripCard</Text>
            <AppPrice content={100} size={18} perWhat="night" />
          </View>
        </ImageBackground>  
    )
}
}

const styles = StyleSheet.create({
  container: {
    width: 154,
    height: 220,
    borderRadius: 10,
    padding: 10,
    margin: 10,

  },
  tripInfo:{
    flex:1,
    justifyContent: "flex-end",
    // backgroundColor: "red"

  },
  tripName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  },
  tripLocation: {
    fontSize: 12,
    color: "white"
  },
  vContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  },
})