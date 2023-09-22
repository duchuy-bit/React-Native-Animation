import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Donut from './components/Donut'

function CircularProgressBar(){
  return (
    <SafeAreaView style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Donut/>
    </SafeAreaView>
  )
}

export default CircularProgressBar

const styles = StyleSheet.create({})