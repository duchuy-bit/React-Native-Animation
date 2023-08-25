import { Animated, Dimensions, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import UICardChoose from './UICardChoose';
import UICardNotChoose from './UICardNotChoose';
import { Platform } from 'react-native';
import { UIManager } from 'react-native';
import { LayoutAnimation } from 'react-native';

const {width, height}  =Dimensions.get('screen');
import { withAnchorPoint } from 'react-native-anchor-point';
import CardComp from './CardComp';


const data = [
    {
        id: 1,
        eGold: 30,
        cashValue: 1892,
        percent: 50,
        nfts: 1600,
    },
    {
        id: 2,
        eGold: 36,
        cashValue: 1601,
        percent: 66,
        nfts: 400,
    },
    {
        id: 3,
        eGold: 23,
        cashValue: 2001,
        percent: 16,
        nfts: 1250,
    },
]

const DURATION_ANIM = 300;

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

export default function ThreeCardCompVer4() {

    const [ indexCard  , setIndexCard ]= useState(0);
    const [ lastedIndexCard  , setLastedIndexCard ]= useState(0);

    const [ indexCardAnim  , setIndexCardAnim ]= useState(0);
    const [ heightCard  , setHeightCard ]= useState(0);

    const cardOneAnim = useRef(new Animated.Value(0)).current;
    const cardTwoAnim = useRef(new Animated.Value(0)).current;
    const cardThreeAnim = useRef(new Animated.Value(0)).current;

    const touchCardOne = () =>{
        if (indexCard == 0) return;
        // console.log('1')
        // setTimeout(()=>{
            setIndexCardAnim(0);
        // },DURATION_ANIM);
        cardOneAnim.setValue(0)
        Animated.sequence([
            Animated.timing(cardOneAnim, {
                toValue: 1,
                duration: DURATION_ANIM,
                useNativeDriver: true,
                // easing: Easing.bezier(0.37, 0, 0.63, 1)
            }),
            Animated.timing(cardOneAnim, {
                toValue: 2,
                duration: DURATION_ANIM,
                useNativeDriver: true,
                easing: Easing.bezier(0.37, 0, 0.63, 1)
            }),
        ]).start();
    }
    const touchCardTwo = () =>{
        if (indexCard == 1) return;

        setLastedIndexCard(indexCard);
        // console.log('2')
        // setTimeout(()=>{
            setIndexCardAnim(1);
        // },DURATION_ANIM);

        cardTwoAnim.setValue(0);
        Animated.sequence([
            Animated.timing(cardTwoAnim, {
                toValue: 1,
                duration: DURATION_ANIM,
                useNativeDriver: true,
                // easing: Easing.bezier(0.37, 0, 0.63, 1)
            }),
            Animated.timing(cardTwoAnim, {
                toValue: 2,
                duration: DURATION_ANIM,
                useNativeDriver: true,
                easing: Easing.bezier(0.37, 0, 0.63, 1)
            }),
        ]).start();
    }
    const touchCardThree = () =>{
        if (indexCard == 2) return;
        // console.log('3')
        // setTimeout(()=>{
            setIndexCardAnim(2);
        // },DURATION_ANIM);

        cardThreeAnim.setValue(0);
        Animated.sequence([
            Animated.timing(cardThreeAnim, {
                toValue: 1,
                duration: DURATION_ANIM,
                useNativeDriver: true,
                // easing: Easing.bezier(0.37, 0, 0.63, 1)
            }),
            Animated.timing(cardThreeAnim, {
                toValue: 2,
                duration: DURATION_ANIM,
                useNativeDriver: true,
                easing: Easing.bezier(0.37, 0, 0.63, 1)
            }),
        ]).start();
    }

    useEffect(()=>{
        setTimeout(() => {
            console.log(" Index Card: ",indexCardAnim, "   lasted Index Card: ",indexCard)
            setIndexCard(indexCardAnim);
            setLastedIndexCard(indexCard);
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)            
        }, DURATION_ANIM -200);
        
    },[indexCardAnim]);
    

    return (
        <View style={{width:'100%', height: 200,marginTop: 30, }}>
            <View style={{marginLeft: 20}}>
                {/* =========================  CARD ONE =================================== */}
                <Animated.View style={[{width: width *0.6, backgroundColor:"#EAA300",   borderRadius: 20,
                        marginTop: 0, marginLeft: 0,
                        position: 'absolute',
                        zIndex: indexCard == 0? 3:  1,
                    }]} 
                    onLayout={(event) => {
                        var {x, y, width, height} = event.nativeEvent.layout;
                        setHeightCard(height);
                      }}
                >
                    <Pressable onPress={()=> touchCardOne()} >
                        <CardComp item={data[0]} isLeft = {true} indexCard={indexCard} index={0}/> 
                    </Pressable>
                </Animated.View>

                {/* =========================  CARD TWO =================================== */}
                <Animated.View style={[{width: width *0.6, backgroundColor:"#F6E5BE",   borderRadius: 20,
                    marginTop: 10, marginLeft: 60,
                    position: 'absolute',zIndex: indexCard == 1 ? 3
                    : indexCard == 0 ? 1: 1,
                }]} >
                    <Pressable onPress={()=> touchCardTwo()}>
                        <CardComp item={data[0]} isLeft = {indexCard == 2? true: false}  indexCard={indexCard} index={1} /> 
                    </Pressable>
                </Animated.View>

                {/* =========================  CARD THREEE =================================== */}
                <Animated.View style={[{width: width *0.6, backgroundColor:"#EAC500",   borderRadius: 20, 
                    marginTop: 20, marginLeft: 120,
                    position: 'absolute', zIndex:  indexCard == 2? 3: 
                    indexCard == 0 ? 0: 1,
                }]} >
                    <Pressable onPress={()=> touchCardThree()}>
                        <CardComp item={data[0]} isLeft = {false}  indexCard={indexCard} index={2} /> 
                    </Pressable>
                </Animated.View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({})