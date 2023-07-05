import React, {useRef} from 'react';

import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import listData from './data/listData';

const WIDTH_SCREEN = Dimensions.get("screen").width;
const HEIGHT_SCREEN = Dimensions.get("screen").height;

const WIDTH =  WIDTH_SCREEN - 32;

const HEIGHT_TYPE =  40;

export default function HeadPhoneScreen() {

    const scrollX = useRef(new Animated.Value(0)).current;
    
    const inputRange = [ - WIDTH_SCREEN, 0,  WIDTH_SCREEN ];   
    
    const translateXDotIndicator = scrollX.interpolate({
        inputRange,
        outputRange: [ - 52, 0, 52]
    })
    
  return (
    <View>
        <SafeAreaView/>        
        {/* -------- TYPE ---------- */}
        <TypeHeadPhone scrollX={scrollX}/>
        
        {/*  ---------- BACKGROUND COLOR OF ITEM  --------- */}
        <BackgroundItem  scrollX={scrollX}/>
        
        {/* -------- LIST ITEM ---------- */}
        <Animated.FlatList
            data={listData}
            style={{marginTop: 70}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({item, index})=><Item  item={item} index={index} scrollX={scrollX}/>}
            onScroll={ Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX }}}],
                {useNativeDriver: true},
            )}            
            scrollEventThrottle={16}
        />
        
        {/* -------- INFO DEV ---------- */}
        <InfoDev />
        
        {/* -------- DOT INDICATOR ---------- */}
        <View style={{bottom: 30, right: 40,position:'absolute', zIndex: 10,justifyContent:'center'}}>
            <FlatList
                data={listData}
                horizontal
                renderItem={({item,index})=>{
                    return (
                        <View style={{marginLeft:index == 0 ? 0:  20,  paddingHorizontal: 10}}>
                            <View style={{height: 12, width: 12, borderRadius: 100, backgroundColor: item.color}}/>
                        </View>
                    )
                }}
            />
            <Animated.View 
                style={{position: 'absolute',zIndex: 1,borderWidth: 0.5, borderColor: 'grey', borderRadius: 100,padding: 10, 
                    transform:[{ translateX: translateXDotIndicator }]
                }}
            >
                <View style={{height: 12, width: 12, borderRadius: 100, opacity: 0}}/>
            </Animated.View>
        </View>
    </View>
  )
}

function Item ({index, item, scrollX}){

    const inputRange = [ (index - 1)* WIDTH_SCREEN, index * WIDTH_SCREEN, (index + 1)* WIDTH_SCREEN ];
    const inputRangeOpacity = [ (index - 0.3)* WIDTH_SCREEN, index * WIDTH_SCREEN, (index + 0.3)* WIDTH_SCREEN ];
    
    const scaleImage = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0]
    })    
    const translateXHeading = scrollX.interpolate({
        inputRange,
        outputRange: [WIDTH_SCREEN * 0.2 , 0 , - WIDTH_SCREEN * 0.2]
    })    
    const translateXDescription = scrollX.interpolate({
        inputRange,
        outputRange: [WIDTH_SCREEN * 0.6 , 0 , - WIDTH_SCREEN * 0.6]
    })    
    const opacity = scrollX.interpolate({
        inputRange: inputRangeOpacity,
        outputRange: [0, 1, 0]
    })
    
    return(
    <View style={{width: WIDTH_SCREEN, minHeight: HEIGHT_SCREEN, padding: 16}}>        
        
        {/* =========================================== IMAGE ==================================== */}
        <View style={{marginTop: 16}}>
            <Animated.Image
                source={item.imageUri}
                style={{width: WIDTH, height: WIDTH, transform:[{scale: scaleImage}] }}
                resizeMode='contain'
            />            
        </View>
        
        {/* =========================================== DETAIL ==================================== */}
        <View style={{marginLeft: 70, marginTop: 60}}>
            <Animated.Text style={{fontSize: 22, fontWeight:'600',textTransform:'uppercase', transform:[{translateX: translateXHeading}], opacity}}>
                {item.heading}
            </Animated.Text>
            <Animated.Text style={{fontSize: 16,color:"grey" , transform:[{translateX: translateXDescription}],opacity}}>
                {item.description}
            </Animated.Text>
        </View>
        
    </View>
    )
}

const BackgroundItem  = ({scrollX})=>{

    return(
    <View style={[StyleSheet.absoluteFillObject,{  alignItems:'center', top: 65}]}>
        {
            listData.map((item, index)=> {
                const inputRange = [ (index - 0.55)* WIDTH_SCREEN, index * WIDTH_SCREEN, (index + 0.55)* WIDTH_SCREEN ];
                const scale = scrollX.interpolate({
                    inputRange, 
                    outputRange: [ 0, 1 ,0],
                    extrapolate: 'clamp'
                })                
                const opacity = scrollX.interpolate({
                    inputRange, 
                    outputRange: [ 0, 0.2 ,0],
                    extrapolate: 'clamp'
                })
                return(
                    <Animated.View style={{
                        position:'absolute',
                        backgroundColor:item.color,                        
                        borderRadius: 500,
                        width: WIDTH ,
                        height: WIDTH,
                        transform: [{ scale: scale }],
                        opacity: opacity
                    }} key={index}/>
                )
            })
        }
    </View> 
    )    
}

const TypeHeadPhone = ({scrollX})=>{    
    const inputRange = [ - WIDTH_SCREEN, 0,  WIDTH_SCREEN ];
    const translateY_Type = scrollX.interpolate({
        inputRange,
        outputRange: [HEIGHT_TYPE, 0, - HEIGHT_TYPE]
    })
    
    return(
        <View style={styles.typeContainer}>
            <Animated.View style={{transform:[{ translateY: translateY_Type }] }}>
                {
                    listData.map((item, index) =><Text style={styles.typeItem} key={index}>{item.type}</Text>)
                }
            </Animated.View>
        </View>
    )
}

const InfoDev = ()=>{
    return(
        <View style={{bottom: 130, left: -50,position:'absolute', zIndex: 10,}}>
            <Text style={[styles.typeItem, {  transform:[{rotate: '-90deg'}] }]}> BEAR DEV</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    typeContainer:{
        position: 'absolute', zIndex: 1, 
        marginTop: 20, 
        marginLeft: 20, 
        height: 40, 
        overflow:'hidden', 
        // backgroundColor:'pink'
    },
    typeItem:{
        fontSize: 30,
        fontWeight:'800',
        textTransform:'uppercase'
    }
})