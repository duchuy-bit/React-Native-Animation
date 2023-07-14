import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchableScale from 'react-native-touchable-scale'
import { useNavigation } from '@react-navigation/native'


export default function PhotoGraphyScreen() {

    const navigation = useNavigation();

  return (
    <View>
        <TouchableScale
            activeScale={0.8}
            // tension={20}
            // friction={7}
            useNativeDriver
            style={{width: 200, height: 100,margin: 100, backgroundColor:'pink',}}
            // onPress={()=> navigation.navigate("")}
        >

        </TouchableScale>
    </View>
  )
}

const styles = StyleSheet.create({})