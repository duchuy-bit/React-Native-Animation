import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, Animated } from 'react-native'
import React, { useRef } from 'react'

const { width, height } = Dimensions.get('screen');

const data = [
    require("../../images/postcard/image1.png"),
    require("../../images/postcard/image2.png"),
    require("../../images/postcard/image3.png"),
    require("../../images/postcard/image4.png"),
    require("../../images/postcard/image5.png"),
    require("../../images/postcard/image6.png"),
];

const imageW = width * 0.7;
const imageH = imageW * 1.54;


export default function PostCard() {

    const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#000'}}>
        <StatusBar  hidden/>

        <View style={StyleSheet.absoluteFillObject}>
            {
                data.map((item, index)=>{
                    const inputRange = [ 
                        (index - 1)* width,
                        index * width,
                        (index + 1)* width
                    ]
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0 , 1 , 0]
                    })
                    return(
                        <Animated.Image key={index}
                            source={item}
                            style={[StyleSheet.absoluteFillObject,{width: width, height: height, opacity: opacity,}]}
                            blurRadius={50}
                        />
                    )
                })
            }
        </View>

        <Animated.FlatList
            data={data}
            pagingEnabled
            horizontal
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset:  { x: scrollX } } }],
                { useNativeDriver: true }
            )}
            renderItem={({item, index})=>{
                // console.log('item: ',item)
                return(
                    <View style={{ width: width, alignItems:'center', justifyContent:'center',}}>
                        <View style={{shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
                            shadowOpacity: 1,  shadowRadius: 2, elevation: 7,
                            borderRadius: 16,
                        }}>
                            <Image source={item} style={{
                                height: imageH,  width: imageW,
                                resizeMode: 'cover',
                                borderRadius: 16,
                            }}/>
                        </View>
                    </View>
                )
            }}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})