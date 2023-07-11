import { StyleSheet, Text, View, Dimensions, Image, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { Icon } from 'react-native-elements';


const DATA = [
    {
        key: 0,
        image: require("../../images/Carousel/image0.jpg"),
        title: "Dev Bear",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 1,
        image: require("../../images/Carousel/image1.jpg"),
        title: "Small Metal Salad",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 2,
        image: require("../../images/Carousel/image2.jpg"),
        title: "Iron Man",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 3,
        image: require("../../images/Carousel/image3.jpg"),
        title: "Bat Man",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 4,
        image: require("../../images/Carousel/image4.jpg"),
        title: "Super Man",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 5,
        image: require("../../images/Carousel/image5.jpg"),
        title: "Sieu Nhan Gao",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 6,
        image: require("../../images/Carousel/image6.jpg"),
        title: "React Native",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 7,
        image: require("../../images/Carousel/image7.jpg"),
        title: "Flutter",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 8,
        image: require("../../images/Carousel/image8.jpg"),
        title: "Swift",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 9,
        image: require("../../images/Carousel/image9.jpg"),
        title: "JavaScript",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 10,
        image: require("../../images/Carousel/image10.jpg"),
        title: "Is The Best",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 11,
        image: require("../../images/Carousel/image11.jpg"),
        title: "Android",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 12,
        image: require("../../images/Carousel/image12.jpg"),
        title: "Head Phone",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 13,
        image: require("../../images/Carousel/image13.jpg"),
        title: "Carousel",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
    {
        key: 14,
        image: require("../../images/Carousel/image14.jpg"),
        title: "Tiny PC",
        subtitle: "Delivered by Dev Bear",
        price: Math.floor(Math.random() * (200 - 80 + 1) + 80),
    },
];


const { width, height } = Dimensions.get('screen');
const IMAGE_WIDTH = width * 0.65;
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.7;
const SPACING = 20;

const Content = ({ item }) => {
    return (
        <>
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: '800',
                    fontSize: 16,
                    textTransform: 'uppercase',
                }}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {item?.title}
            </Text>
            <Text style={{ fontSize: 12, opacity: 0.4 }}>{item?.subtitle}</Text>
            <View style={{ flexDirection: 'row', marginTop: SPACING / 2 }}>
                <Text
                    style={{
                        fontSize: 42,
                        letterSpacing: 3,
                        fontWeight: '900',
                        marginRight: 8,
                    }}
                >
                    {item?.price}
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        lineHeight: 36,
                        fontWeight: '800',
                        alignSelf: 'flex-end',
                    }}
                >
                    USD
                </Text>
            </View>
        </>
    );
};

export default function CarouselScreen(){

    const scrollX = useRef(new Animated.Value(0)).current;

    const animatedDevice = Animated.divide(scrollX , width);
    const progress = Animated.modulo(Animated.divide(scrollX , width), width);

    // console.log("animatedDevice  ",progress)

    const [ index, setIndex ] = useState( 0 );
    const refFlatlist = useRef();

    // console.log(' index: ', index)
    
    return (
        <SafeAreaView style={{ backgroundColor: '#A5F1FA', flex: 1 }}>
            <StatusBar hidden />
            
            <View style={{marginTop: SPACING  * 4}}>
                <View>
                    <Animated.FlatList
                        data={DATA}
                        ref={refFlatlist}
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ height: IMAGE_HEIGHT + SPACING * 2 }}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset:  { x: scrollX } } }],
                            { useNativeDriver: true }
                        )}
                        onMomentumScrollEnd={event=>{
                            // console.log(" Scroll ENd")
                            setIndex(Math.floor( event.nativeEvent.contentOffset.x / width ))
                        }}
                        renderItem={({item, index})=>{
                            const inputRange = [ (index - 1) * width, index *  width , (index + 1) * width ];
                            const translateY = scrollX.interpolate({
                                inputRange, 
                                outputRange: [ 60, 0, 20]
                            })
                            const opacity = scrollX.interpolate({
                                inputRange,
                                outputRange:  [0 ,1 ,0]
                            })
                            return(
                                <Animated.View style={{width: width, paddingLeft: SPACING * 2, 
                                    transform: [ {  translateY} ], opacity}}>
                                    <Image
                                        source={item.image}
                                        style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT, resizeMode:'cover'}}
                                    />
                                </Animated.View>
                            )
                        }}
                    />

                    <View style={{width:IMAGE_WIDTH + SPACING * 2,marginLeft: SPACING,
                        marginTop:IMAGE_HEIGHT + SPACING,alignItems:'center', position:'absolute' 
                    }}>
                        {
                            DATA.map((item, index)=>{
                                const inputRange = [ (index - 0.15)* width, index * width, (index + 0.15)* width ]
                                const translateY = scrollX.interpolate({
                                    inputRange,
                                    outputRange: [ -40, 0, -40]
                                })
                                const opacity = scrollX.interpolate({
                                    inputRange,
                                    outputRange: [0, 1, 0]
                                })
                                return(
                                    <Animated.View style={{position: 'absolute',opacity, transform:[ { translateY }  ] }} key={index}>
                                        <Content item={DATA[index]} /> 
                                    </Animated.View>
                                )
                            })
                        }
                        <View style={{opacity: 0}}>
                            <Content item={DATA[0]} />
                        </View>
                    </View>

                    {/* Background */}
                    <Animated.View
                        style={{
                            position:'absolute',
                            zIndex: -1,
                            backgroundColor:'white',
                            marginLeft: SPACING  ,
                            width:IMAGE_WIDTH + SPACING * 2,
                            // height: IMAGE_HEIGHT * 1.5 + SPACING,
                            marginTop: SPACING * 2,
                            paddingBottom: SPACING,
                            transform:[
                                { perspective: IMAGE_WIDTH * 4 },
                                // { rotateY: '45deg'  }
                                { rotateY:  progress.interpolate({
                                    inputRange: [ 0, 0.5, 1],
                                    outputRange: ['0deg', '90deg', '180deg']
                                })}
                            ],
                            // shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
                            // shadowOpacity: 1,  shadowRadius: 2, elevation: 7,
                        }}
                    >
                        <View style={{marginTop:IMAGE_HEIGHT - SPACING,alignItems:'center' }}>
                            <View style={{opacity: 0}}>
                                <Content item={DATA[0]} />
                            </View>
                        </View>
                    </Animated.View>
                </View>                
            </View>
            {/* Button */}            
            <View style={{width: IMAGE_WIDTH + SPACING * 2, marginLeft: SPACING , marginTop:IMAGE_HEIGHT - SPACING*2  , flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <TouchableOpacity disabled={ index === 0 } onPress={()=>{
                    refFlatlist?.current?.scrollToOffset({
                        offset: (index - 1) * width,
                        animated: true
                    })
                    setIndex(index - 1)
                }} style={{opacity: index === 0 ? 0.2: 1}}>
                    <Text style={{fontSize: 18, color:'#000', paddingLeft: SPACING * 3, fontWeight: '500'}}>PREV</Text>
                    <View style={{width: "75%", height: 0, borderTopWidth: 1.5, borderTopColor: "#000", marginTop:SPACING/3 }}/>
                </TouchableOpacity>

                <TouchableOpacity disabled={ index === DATA.length - 1 } onPress={()=>{
                    refFlatlist?.current?.scrollToOffset({
                        offset: (index + 1) * width,
                        animated: true
                    })
                    setIndex(index + 1)
                }} style={{opacity: index === DATA.length - 1 ? 0.2: 1}}>
                    <Text style={{fontSize: 18, color:'#000', paddingRight: SPACING * 3, fontWeight: '500'}}>NEXT</Text>
                    <View style={{width: "75%", height: 0, borderTopWidth: 1.5, borderTopColor: "#000", marginTop:SPACING/3 , alignSelf:'flex-end'}}/>
                </TouchableOpacity>
            </View>

            <View style={{
                position:'absolute', zIndex: -1,
                top: 150, right: - width /2 - 25, 
                transform: [ {rotate: '270deg'} ], 
                flexDirection:'row', alignItems:'center',

            }}>
                <View style={{width: SPACING * 1.5 , height: 1.5, backgroundColor:"#000", marginRight: SPACING}}/>
                <Text style={{textTransform:'uppercase', fontSize:22, fontWeight: '500'}}>Dev     Bear</Text>
                <View style={{width: width - SPACING * 3.5 , height: 1.5, backgroundColor:"#000", marginLeft: SPACING}}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({})


{/* <View style={{marginTop: SPACING * 4}}>
                <View style={{ height: IMAGE_HEIGHT * 2.1 }}>
                    <FlatList
                        data={DATA}
                        // keyExtractor={(item) => item.key}
                        horizontal
                        pagingEnabled
                        bounces={false}
                        // style={{ flexGrow: 0 }}
                        contentContainerStyle={{ height: IMAGE_HEIGHT + SPACING * 2, paddingHorizontal: SPACING * 2 }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    style={{
                                        width: width,
                                        paddingVertical: SPACING,
                                        // backgroundColor:  "pink"
                                    }}
                                >
                                    <Image
                                        source={item.image }
                                        style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT, resizeMode: 'cover' }}
                                    />
                                </View>
                            );
                        }}
                    />

                    <View
                        style={{
                            width: IMAGE_WIDTH,
                            alignItems: 'center',
                            paddingHorizontal: SPACING * 2,
                            marginLeft: SPACING * 2,
                            backgroundColor:"red"
                        }}
                    >
                        <Content item={DATA[0]} />
                    </View>

                    <View
                        style={{
                            width: IMAGE_WIDTH + SPACING * 2,
                            // height: IMAGE_HEIGHT * 2,
                            position: 'absolute',
                            backgroundColor: 'white',
                            // backfaceVisibility: true,
                            zIndex: -1,
                            top: SPACING * 2,
                            left: SPACING,
                            bottom: 0,
                            shadowColor: '#000',
                            shadowOpacity: 0.2,
                            shadowRadius: 24,
                            shadowOffset: {
                                width: 0,
                                height: 0,
                            },
                        }}
                    />

                </View>
                
            </View> */}