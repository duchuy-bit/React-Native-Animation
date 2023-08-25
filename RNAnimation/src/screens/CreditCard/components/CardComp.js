import { Dimensions, LayoutAnimation, Platform, StyleSheet, Text, UIManager, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Pressable } from 'react-native';

const {width, height}  =Dimensions.get('screen')


if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
export default function CardComp(props) {

    const item = props.item;
    const isLeft = props.isLeft;
    const indexCard = props.indexCard;
    const index = props.index;
    
    const [ isChoose, setIsChoose] = useState(true);

    const touchItem = () =>{
        setIsChoose(!isChoose);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    }


    useEffect(()=>{
        if (indexCard === index) {
            setIsChoose(true);
        }else{
            setIsChoose(false)
        }
    },[indexCard])

  return (
    <View  style={{padding: 10,paddingTop: 16}}>
        {/* Detail */}
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginBottom: isChoose? 25: 20}}>
            <View style={{flex: 1,  alignItems: isChoose? "center": isLeft? "flex-start" :'flex-end'}}>
                <View style={{width: isChoose? 'auto': 60, alignItems:'center', right: isLeft ? 10: -5,}}>
                    {
                        isChoose? null
                        :<Text style={{fontSize: isChoose? 16: 12, fontWeight:isChoose? '500': "900", lineHeight: isChoose? 16: 12}}>Total</Text>
                    }
                    <Text style={{fontSize: isChoose? 16: 12, fontWeight:isChoose? '500': "900", marginBottom: 8, lineHeight: isChoose? 16: 12}}>E-Gold</Text>
                    {/* <Text style={{fontSize: 16, fontWeight:'500'}}>
                        <Text style={{fontSize: 30, fontWeight:'bold'}}>{item.eGold}</Text> g
                    </Text> */}
                    <View style={{flexDirection: isChoose? 'row': "column",   alignItems: isChoose? 'flex-end': 'center'}}>
                        
                        {
                            item.nfts.toString().split('').map((letter, index)=>{
                                return (
                                    <Text key={index} style={{fontSize: isChoose? 30: 20, fontWeight:'900', lineHeight: isChoose? 30: 20}}>{letter}</Text>
                                )
                            })
                        }
                        <Text style={{fontSize: 20, fontWeight:'bold',lineHeight:20}}> g</Text>
                    </View>
                </View>
            </View>
            {
                isChoose?
                <View>
                    <Text style={{fontSize: 16, fontWeight:'500', color:"#fff"}}>Cash Value</Text>
                    <Text style={{fontSize: 16, fontWeight:'500',color:"#fff"}}>
                        <Text style={{fontSize: 30, fontWeight:'bold'}}>{item.cashValue}</Text> USD
                    </Text>
                </View>  : null
            }
                      
        </View>
        {/* ProgressBar */}
        {
            isChoose?
            <>
                <View style={{marginTop: 10,borderRadius: 100, height: 15, width: '80%', overflow:"hidden", backgroundColor:"grey", alignSelf:'center'}}>
                    <View style={{height:"100%", alignSelf:"flex-start", width: item.percent +"%", backgroundColor:"white"}}/>
                </View>
                {/* Note */}
                <View style={{alignItems:'center', flex: 1, paddingTop: 8, paddingBottom: 16}}>
                    <Text style={{fontSize: 12, fontWeight: '300'}}>Buy 200g more to hit a  500g Coin</Text>
                </View>
            </>: null
        }
        


    </View>
  )
}

const styles = StyleSheet.create({})