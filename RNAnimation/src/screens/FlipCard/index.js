import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import CardComp from './components/CardComp'
// import { Gesture, GestureDetector, } from 'react-native-gesture-handler';
// import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
// import Animated from 'react-native-reanimated';
// import { useAnimatedGestureHandler } from 'react-native-reanimated';
const {width, height}  =Dimensions.get('screen');
export default function FlipCard() {

  // const panGestureEvent = useAnimatedGestureHandler({
  //   onStart: () =>{},
  //   onActive: () =>{},
  //   onFinish: () =>{},
  // })

  // const tap = Gesture.Tap().onEnd((_event, success)=>{
  //   // console.log(event.translationX) 
  //   console.log("OK")
  // })

  // // console.log(" OK")

  // const start = useSharedValue({ x: 0, y: 0 });
  // const gesture = Gesture.Pan()
  // .onBegin(() => {
  //   isPressed.value = true;
  // })
  // .onUpdate((e) => {
  //   offset.value = {
  //     x: e.translationX + start.value.x,
  //     y: e.translationY + start.value.y,
  //   };
  // })
  // .onEnd(() => {
  //   start.value = {
  //     x: offset.value.x,
  //     y: offset.value.y,
  //   };
  // })
  // .onFinalize(() => {
  //   isPressed.value = false;
  // });

  // const isPressed = useSharedValue(false);
  // const offset = useSharedValue({ x: 0, y: 0 });
  // const animatedStyles = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       { translateX: offset.value.x },
  //       { translateY: offset.value.y },
  //       { scale: withSpring(isPressed.value ? 1.2 : 1) },
  //     ],
  //     backgroundColor: isPressed.value ? 'yellow' : 'blue',
  //   };
  // });


  return (
    <View style={{flex: 1, backgroundColor:'white', alignItems:'center', justifyContent:'flex-end', paddingBottom: 80}}>
      {/* <TouchableOpacity onPress={()=> console.log("OKKKK")}> */}

      {/* <GestureDetector gesture={gesture}> */}
        {/* <Animated.View style={[styles.ball, animatedStyles]} /> */}
      {/* </GestureDetector> */}


      {/* <GestureDetector gesture={tap}>
        <Animated.View style={styles.cardContainer}/>
      </GestureDetector> */}
      {/* </TouchableOpacity> */}

        
      {/* <PanGestureHandler> */}
      {/* </PanGestureHandler> */}
      {/* <CardComp  color={'#92B2D7'}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 100, width: 300,
    backgroundColor: 'rgba(0,0,256,0.5)',
    borderRadius: 20
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },

})