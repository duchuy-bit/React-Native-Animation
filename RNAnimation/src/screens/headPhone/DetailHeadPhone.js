import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity,Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'
import { SharedElement } from 'react-navigation-shared-element';


const { width, height } = Dimensions.get('screen')

const letterAnimation = {
    0: { opacity: 0, translateY: -42 },
    1: { opacity: 1, translateY: 0 },
}

const letterAnimationGoBack = {
    0: { opacity: 1, translateY: 0 },
    1: { opacity: 0, translateY: -42 },
    
}

const iconAnimation  = {
    0: { opacity: 0, scale: 0, rotate: '180deg'},
    1: { opacity: 1, scale: 1, rotate: '0deg'},
}
const iconAnimationGoback  = {
    0: { opacity: 1, scale: 1, rotate: '0deg'},
    1: { opacity: 0, scale: 0, rotate: '180deg'},
}

export default function DetailHeadPhone({route}) {

    const item = route?.params?.item
    // console.log('item: ',item)
    const navigation = useNavigation();

    const [isGoback, setIsGoback] = useState(false);

    const circleSize = Math.sqrt(
        Math.pow(height, 2) + Math.pow(width , 2)
    )

    // console.log("  width: ",width,"  circleSize: ",Math.pow(width , 2))

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#FFF"}}>
        {/* Header Screen */}
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 16, paddingTop: 20}}>
            <View style={{flex: 1, overflow:'hidden', flexDirection:'row'}}>
            {
                item.type.split('').map((letter, index)=>{
                    return (
                        <Animatable.Text key={index} 
                            useNativeDriver
                            animation={isGoback? letterAnimationGoBack: letterAnimation}
                            delay={300 + index * 50}
                            duration={700}
                            style={{fontSize: 30, fontWeight:'800', textTransform:'uppercase'}}
                        >{letter}</Animatable.Text>
                    )
                })
            }
            </View>

            <Animatable.View 
                useNativeDriver
                delay={600}
                duration={600}
                animation={isGoback? iconAnimationGoback:  iconAnimation}                
            >
                <TouchableOpacity onPress={()=> {
                    setIsGoback(true);
                    setTimeout(()=>{
                        navigation.goBack();
                    },350)
                }} activeOpacity={0.6} hitSlop={{top: 16, bottom: 16, left: 16, right: 16,}}>                
                    <Icon type='antdesign' name='close' color={'#000'} style={{opacity: 0.5}} size={35} />
                </TouchableOpacity>
            </Animatable.View>
        </View>
        {/* Color */}
        <View style={{paddingHorizontal: 16, top: -5}}>
            <Animatable.Text useNativeDriver
                animation={isGoback? letterAnimationGoBack: letterAnimation}
                delay={300 + item.type.length * 50 + 50}
                duration={700}
                style={{textTransform:'uppercase', fontSize: 16, fontWeight:'800',color: item.color}}
            >
                Dev Bear
            </Animatable.Text>
        </View>

        {/* Background Color */}
        <SharedElement id={`item.${item.key}.backgroundColor`} 
            style={[StyleSheet.absoluteFillObject,{ alignItems:'center', justifyContent:'center',zIndex: -1,}]}
        >
            <View style={{position: 'absolute',zIndex: -1, 
                backgroundColor: item.color, 
                width: circleSize ,
                height: circleSize,
                // height: height, width: height, 
                opacity: 0.2,
                borderRadius: circleSize,
            }}>

            </View>
        </SharedElement>

        {/* Image */}
        <View style={{alignItems:'center', paddingTop: 100, }}>
            <SharedElement id={`item.${item.key}.image`} >
                <Image
                    source={item.imageUri}
                    style={{width: width *0.9, height: width*0.9, resizeMode:'contain'}}
                />
            </SharedElement>
        </View>
        


    </SafeAreaView>
  )
}
// DetailHeadPhone.sharedElements = (route, otherRoute, showing) => {
//     const { item } = route.params;
//     return [
//         {id:`item.${item.color}.backgroundColor`},
//         {id: `item.${item.imageUri}.image`},
        
//     ];
//   }

const styles = StyleSheet.create({})