import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThreeCardComp from './components/ThreeCardComp'
import ThreeCardCompVer2 from './components/ThreeCardComp_2'
import ThreeCardCompVer3 from './components/ThreeCardComp_3'
import { ScrollView } from 'react-native'
import ThreeCardCompVer4 from './components/ThreeCardComp_4'
import ThreeCardCompVer5 from './components/ThreeCardComp_5'
import ThreeCardCompVer6 from './components/ThreeCardComp_6'

export default function CreditCard() {
    return (
        <ScrollView style={{flex: 1, backgroundColor:'#000'}}>
            {/* Header */}
            <View style={{height: 100, width:'100%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 , backgroundColor:"grey"}}>
            </View>

            <ThreeCardComp/>
            <View style={{height: 200}}/>

            <ThreeCardCompVer2 />

            <View style={{height: 200, width: 30, }}/>

            <ThreeCardCompVer3 />

            {/* <View style={{height: 200, width: 30, }}/> */}

            <ThreeCardCompVer4 />

            <ThreeCardCompVer5 />

            <ThreeCardCompVer6 />
            

        </ScrollView>
  )
}

const styles = StyleSheet.create({})