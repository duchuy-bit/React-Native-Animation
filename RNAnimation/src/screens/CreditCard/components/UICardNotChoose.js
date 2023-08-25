import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react';

const {width, height}  =Dimensions.get('screen')

export default function UICardNotChoose(props) {

    const item = props.item;

    const isLeft = props.isLeft;

  return (
    <View style={{padding: 10, flex: 1}}>
        <View style={{alignSelf: isLeft? "flex-start":  'flex-end', width: 60, alignItems:'center'}}>
            <Text style={{fontSize: 14, fontWeight:'500'}}>Total</Text>
            <Text style={{fontSize: 14, fontWeight:'500'}}>NFTs</Text>
            {
                item.nfts.toString().split('').map((letter, index)=>{
                    return (
                        <Text key={index} style={{fontSize: 20, fontWeight:'bold', lineHeight:20}}>{letter}</Text>
                    )
                })
            }
            <Text style={{fontSize: 20, fontWeight:'bold',lineHeight:20}}>g</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({})