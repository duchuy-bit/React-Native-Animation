import { Animated, Dimensions, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import UICardChoose from './UICardChoose';
import UICardNotChoose from './UICardNotChoose';
import { Platform } from 'react-native';
import { UIManager } from 'react-native';
import { LayoutAnimation } from 'react-native';

const {width, height}  =Dimensions.get('screen')

const data = [
    {
        id: 1,
        eGold: 30,
        cashValue: 1892,
        percent: 50,
        nfts: 160,
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

const DURATION_ANIM = 500;

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

export default function ThreeCardCompVer2() {

    const [ indexCard  , setIndexCard ]= useState(0);
    const [ lastedIndexCard  , setLastedIndexCard ]= useState(0);

    const [ indexCardAnim  , setIndexCardAnim ]= useState(0);

    const cardOneAnim = useRef(new Animated.Value(0)).current;
    const cardTwoAnim = useRef(new Animated.Value(0)).current;
    const cardThreeAnim = useRef(new Animated.Value(0)).current;


    const touchCardOne = () =>{
        // setTimeout(()=>{
            setIndexCardAnim(0);
        // },DURATION_ANIM);
    }
    const touchCardTwo = () =>{
        // setTimeout(()=>{
            setIndexCardAnim(1);
        // },DURATION_ANIM);
    }
    const touchCardThree = () =>{
        // setTimeout(()=>{
            setIndexCardAnim(2);
        // },DURATION_ANIM);
    }


    useEffect(()=>{
        // setTimeout(()=>{
            setIndexCard(indexCardAnim);
            setLastedIndexCard(indexCard);
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
            // console.log("indexCardAnim: ",indexCardAnim)
        // },DURATION_ANIM);
        // setIndexCard(indexCardAnim);
    },[indexCardAnim])

    return (
        <View style={{width:'100%', marginTop: 30, paddingHorizontal: 20,}}>
            <View>
                {/* Card One */}
                <Pressable onPress={()=> touchCardOne()} style={{ width: width *0.6, borderRadius: 20, position:'absolute',
                    zIndex: indexCard == 0? 3:  1,
                }}>
                    <View style={{ width: width *0.6, backgroundColor:"#EAA300", 
                        borderRadius: 20, 
                        
                    }}>
                        <View style={{opacity: 0}}> 
                            <UICardChoose item={data[0]} /> 
                        </View>

                        <View style={{opacity: 1, position:"absolute", width: width *0.6}}> 
                        {
                            indexCard == 0? <UICardChoose item={data[0]}  /> 
                            : <UICardNotChoose item={data[0]} isLeft = {indexCard === 1 || indexCard == 2? true: false}/>
                        }
                        </View>
                    </View>
                </Pressable>    
                {/* Card Two */}
                <Pressable onPress={()=> touchCardTwo()} 
                    style={{ position:'absolute', marginTop: 10, marginLeft: 60,
                        zIndex: indexCard == 1 ? 3
                        : indexCard == 0 ? 1: 1,
                }} >
                    <View style={{ width: width *0.6, backgroundColor:"#F6E5BE", 
                         borderRadius: 20, 
                    }}>
                        <View style={{opacity: 0}}> 
                            <UICardChoose item={data[1]} /> 
                        </View>

                        <View style={{opacity: 1, position:"absolute", width: width *0.6}}> 
                        {
                            indexCard == 1? <UICardChoose item={data[1]}  /> 
                            : <UICardNotChoose item={data[1]} isLeft = {indexCard == 2? true: false}/>
                        }
                        </View>   
                    </View>

                </Pressable>  
                {/* Card Three */}
                <Pressable onPress={()=> touchCardThree()} style={{ width: width *0.6, 
                    marginTop: 20, marginLeft: 120 , borderRadius: 20,  position:'absolute',
                    zIndex:  indexCard == 2? 3: 
                            indexCard == 0 ? 0: 1,
                }}>
                    <View style={{ width: width *0.6, backgroundColor:"#EAC500", 
                        borderRadius: 20, 
                    }}>
                        <View style={{opacity: 0}}> 
                            <UICardChoose item={data[2]} /> 
                        </View>

                        <View style={{opacity: 1, position:"absolute", width: width *0.6}}> 
                        {
                            indexCard == 2? <UICardChoose item={data[2]}  /> : <UICardNotChoose item={data[2]} isLeft = {indexCard == 0 || indexCard ==1 ? false: true }/>
                        }
                        </View>
                    </View>
                </Pressable>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})