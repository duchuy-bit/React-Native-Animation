import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CardComp from './components/CardComp'
import { GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
const {width, height}  =Dimensions.get('screen');
export default function FlipCard() {
  return (
    
        <View style={{flex: 1, backgroundColor:'black', alignItems:'center', justifyContent:'flex-end', paddingBottom: 80}}>
            {/* <GestureDetector> */}
                <CardComp  color={'#92B2D7'}/>
            {/* </GestureDetector> */}
        </View>
    
  )
}

const styles = StyleSheet.create({})