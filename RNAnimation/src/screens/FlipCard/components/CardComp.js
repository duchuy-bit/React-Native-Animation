import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
const {width, height}  =Dimensions.get('screen');
export default function CardComp(props) {

    const color = props.color;

  return (
    <View style={{backgroundColor: color, borderRadius: 16, width: width *0.8, height: width* 0.45  , justifyContent:'flex-end', padding: 16}}>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'black', opacity:0.3, height: 80, width: 80, borderRadius: 100}}/>
        <View style={{flex: 1 , padding: 16}}>
            <View style={{width: "100%", height: 20,borderRadius: 100, backgroundColor:'black', opacity: 0.3}}/>
            <View style={{width: "50%", height: 20,borderRadius: 100, backgroundColor:'black', opacity: 0.3, marginTop: 10}}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})