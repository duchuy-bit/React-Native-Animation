import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity,Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'
import { SharedElement } from 'react-navigation-shared-element';
import { color } from 'react-native-reanimated';


const { width, height } = Dimensions.get('screen')

// ------------ TEXT ANIMATION -------
const letterAnimation = {
    0: { opacity: 0, translateY: -42 },
    1: { opacity: 1, translateY: 0 },
}

const letterAnimationGoBack = {
    0: { opacity: 1, translateY: 0 },
    1: { opacity: 0, translateY: -42 },
    
}

// ------------ ICON CLOSE ANIMATION -------
const iconAnimation  = {
    0: { opacity: 0, scale: 0, rotate: '180deg'},
    1: { opacity: 1, scale: 1, rotate: '0deg'},
}
const iconAnimationGoback  = {
    0: { opacity: 1, scale: 1, rotate: '0deg'},
    1: { opacity: 0, scale: 0, rotate: '180deg'},
}


// ------------ FIELD LEFT ANIMATION -------
const FIELD_DELAY  = 400 
const FIELD_DURATION  = 950 

const fieldLeftAnimation  = {
    0: {  opacity: 0, translateX: width * 0.32 + 20, },
    1: {  opacity: 1, translateX: 0},
}
const fieldLeftAnimationGoBack  = {
    0: {  opacity: 1, translateX: 0},
    1: {  opacity: 0, translateX: width * 0.32 + 20},    
}
// ------------ FIELD RIGHT ANIMATION -------
const fieldRightAnimation  = {
    0: {  opacity: 0, translateX: width * 0.68 + 20},
    1: {  opacity: 1, translateX: 0},
}
const fieldRightAnimationGoBack  = {
    0: {  opacity: 1, translateX: 0},
    1: {  opacity: 0, translateX: width * 0.68 + 20},    
}

// ------------ FOOTER ANIMATION -------
const footerAnimation  = {
    0: { opacity: 0, translateY: 60 },
    1: { opacity: 1, translateY: 0 },
}
const footerAnimationGoBack  = {
    0: { opacity: 1, translateY: 0 },
    1: { opacity: 0, translateY: 60 },
}

const DURATION_GO_BACK = 500

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
        
        {/*  ================================ HEADER ================================ */}
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 16, paddingTop: 20}}>
            {/* Type Headphone */}
            <View style={{flex: 1, overflow:'hidden', flexDirection:'row'}}>
            {
                item.type.split('').map((letter, index)=>{
                    return (
                        <Animatable.Text key={index} 
                            useNativeDriver
                            animation={isGoback? letterAnimationGoBack: letterAnimation}
                            delay={isGoback? 0 : 300 + index * 50}
                            duration={isGoback? DURATION_GO_BACK : 700}
                            style={{fontSize: 30, fontFamily:'Montserrat-Bold', textTransform:'uppercase'}}
                        >{letter}</Animatable.Text>
                    )
                })
            }
            </View>

            {/*  Icon Go Back  */}
            <Animatable.View 
                useNativeDriver
                delay={isGoback? 0 : 750}
                duration={isGoback? DURATION_GO_BACK : 750}
                animation={isGoback? iconAnimationGoback:  iconAnimation}                
            >
                <TouchableOpacity onPress={()=> {
                    setIsGoback(true);
                    setTimeout(()=>{
                        navigation.goBack();
                    },300)
                }} activeOpacity={0.6} hitSlop={{top: 16, bottom: 16, left: 16, right: 16,}}>                
                    <Icon type='antdesign' name='close' color={'#000'} style={{opacity: 0.5}} size={35} />
                </TouchableOpacity>
            </Animatable.View>
        </View>
        {/* Color */}
        <View style={{paddingHorizontal: 16, top: -5}}>
            <Animatable.Text useNativeDriver
                animation={isGoback? letterAnimationGoBack: letterAnimation}
                delay={isGoback? 0 : 300 + item.type.length * 50 + 50}
                duration={isGoback? DURATION_GO_BACK : 700}
                style={{textTransform:'uppercase', fontSize: 16, fontFamily:'Montserrat-Bold',color: item.color}}
            >
                BEAR DEV
            </Animatable.Text>
        </View>
        {/*  ================================ END HEADER ================================ */}

        {/*  ================================ BACKGROUND COLOR ================================ */}
        <SharedElement id={`item.${item.key}.backgroundColor`} 
            style={[StyleSheet.absoluteFillObject,{ alignItems:'center', justifyContent:'center',zIndex: -1,}]}
        >
            <View style={{position: 'absolute',zIndex: -1, 
                backgroundColor: item.color, 
                width: circleSize ,
                height: circleSize,
                opacity: 0.2,
                borderRadius: circleSize,
            }}>

            </View>
        </SharedElement>
        {/*  ================================ END BACKGROUND COLOR ================================ */}

        {/*  ================================ IMAGE HEADPHONE ================================ */}
        {/* Image */}
        <View style={{alignItems:'center', paddingTop: 50, }}>
            <SharedElement id={`item.${item.key}.image`} >
                <Image
                    source={item.imageUri}
                    style={{width: width *0.9, height: width*0.9, resizeMode:'contain'}}
                />
            </SharedElement>
        </View>
        {/*  ================================ END IMAGE HEADPHONE ================================ */}
            
        {/*  ================================ DETAIL HEADPHONE ================================ */}
        <View style={{flex: 1,  flexDirection:'row', alignItems:"flex-end", paddingBottom: 16}}>
            <View style={{height: 230, width: '38%',   overflow:"hidden"}}>
                <Animatable.View 
                    useNativeDriver
                    animation={isGoback? fieldLeftAnimationGoBack : fieldLeftAnimation}
                    duration={isGoback? DURATION_GO_BACK : FIELD_DURATION}
                    delay={isGoback? 0 : FIELD_DELAY}
                    style={{flex: 1, backgroundColor:"#FFF", padding: 8, marginRight: 8, marginLeft: 16}}
                >
                    <Text style={{fontSize:18, fontWeight:'800'}}>{item.heading}</Text>
                    <View style={{justifyContent:'flex-end', flex: 1, }}></View>
                    <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:16, fontWeight:'800'}}>Play Video  </Text>
                        <Icon type='antdesign' name='playcircleo' color={'#000'} size={20}/>
                    </View>
                </Animatable.View>
            </View>
            <View style={{height: 230, width: '62%', paddingRight: 16, paddingLeft: 8, overflow:"hidden"}}>
                <Animatable.View 
                    useNativeDriver
                    animation={isGoback? fieldRightAnimationGoBack : fieldRightAnimation}
                    duration={isGoback? DURATION_GO_BACK : FIELD_DURATION}
                    delay={isGoback? 0 : FIELD_DELAY}
                    style={{flex: 1, backgroundColor:"#FFF", padding: 16}}
                >
                    <Text style={{fontSize:16, fontFamily:'Montserrat-Regular'}}>{item.description}</Text>
                </Animatable.View>
            </View>
        </View>
        {/*  ================================ END DETAIL HEADPHONE ================================ */}

        {/*  ================================ ADD TO CARD ================================ */}
        <Animatable.View 
            useNativeDriver
            duration={isGoback? DURATION_GO_BACK : FIELD_DURATION}
            animation={isGoback? footerAnimationGoBack : footerAnimation}
            delay={isGoback? 0 : FIELD_DELAY }
            style={{flexDirection:"row", alignItems:'center',}}
        >
            <View style={{height: 50, width: '38%',  backgroundColor:"white",alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize: 18, fontFamily:'Montserrat-Bold', textTransform:'uppercase', color: item.color}}>161 USD</Text>
            </View>

            <TouchableOpacity activeOpacity={0.6} style={{height: 50, width: '62%',  backgroundColor: item.color, alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize: 18, fontFamily:'Montserrat-Bold', textTransform:'uppercase'}}>Add To Cart</Text>
            </TouchableOpacity>
        </Animatable.View>


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