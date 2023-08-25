import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react';

const {width, height}  =Dimensions.get('screen')

export default function UICardChoose(props) {

    const item = props.item;

  return (
    <View style={{padding: 10,paddingTop: 16}}>
        {/* Detail */}
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginBottom: 25, position:"relative"}}>
            <View>
                <Text style={{fontSize: 16, fontWeight:'500'}}>E-Gold</Text>
                <Text style={{fontSize: 16, fontWeight:'500'}}>
                    <Text style={{fontSize: 30, fontWeight:'bold'}}>{item.eGold}</Text> g
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 16, fontWeight:'500', color:"#fff"}}>Cash Value</Text>
                <Text style={{fontSize: 16, fontWeight:'500',color:"#fff"}}>
                    <Text style={{fontSize: 30, fontWeight:'bold'}}>{item.cashValue}</Text> USD
                </Text>
            </View>            
        </View>
        {/* ProgressBar */}
        <View style={{marginTop: 10,borderRadius: 100, height: 15, width: '80%', overflow:"hidden", backgroundColor:"grey", alignSelf:'center'}}>
            <View style={{height:"100%", alignSelf:"flex-start", width: item.percent +"%", backgroundColor:"white"}}/>
        </View>
        {/* Note */}
        <View style={{alignItems:'center', flex: 1, paddingTop: 8, paddingBottom: 16}}>
            <Text style={{fontSize: 12, fontWeight: '300'}}>Buy 200g more to hit a  500g Coin</Text>
        </View>


    </View>
  )
}

const styles = StyleSheet.create({})