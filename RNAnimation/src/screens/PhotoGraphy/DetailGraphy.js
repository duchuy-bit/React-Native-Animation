import { StyleSheet, Text, View, Image, Dimensions, Animated, FlatList, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react';

import MasonryList from "@react-native-seoul/masonry-list";
import { SharedElement } from 'react-navigation-shared-element';
import { listPhotoGraphy } from './data/data';


import * as Animatable from 'react-native-animatable'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// ------------ LIST IMAGE ANIMATION -------
const footerAnimation  = {
    0: { opacity: 0, translateY: 60 },
    1: { opacity: 1, translateY: 0 },
}
const footerAnimationGoBack  = {
    0: { opacity: 1, translateY: 0 },
    1: { opacity: 0, translateY: 60 },
}


// ------------ ICON GO BACK ANIMATION -------
const iconGoBackAnimation  = {
    0: { opacity: 0, scale: 0, translateY: -50 },
    1: { opacity: 1, scale: 1, translateY: 0  },
}
const iconGoBackAnimationGoBack  = {
    0: { opacity: 1, scale: 1, translateY: 0  },
    1: { opacity: 0, scale: 0, translateY: -50 },
}

const { width, height } = Dimensions.get('screen');

const listImage= [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHxIAjBtDjS9M64hYkyhTuTkKg0yKsWsCAyWzFIZANZ8sSAwQNBSKCiFF0IQCTvqmlOM&usqp=CAU",
    "https://img.freepik.com/premium-photo/great-wanderlust-evoking-natural-landscape-generative-ai_853901-255.jpg",
    "https://st3.depositphotos.com/1010305/14817/i/450/depositphotos_148173113-stock-photo-waterfall-beautiful-view-of-waterfall.jpg",
    "https://images.pexels.com/photos/1575861/pexels-photo-1575861.jpeg?cs=srgb&dl=pexels-dustin-tray-1575861.jpg&fm=jpg",
    "https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?cs=srgb&dl=pexels-lukas-hartmann-1557652.jpg&fm=jpg",
    "https://parade.com/.image/t_share/MTkwNTgxNDY5NjY1NzY1MjQ0/most-beautiful-places-in-the-world-4-jpeg.jpg",
    "https://i.pinimg.com/originals/99/e1/48/99e1485b059b1509fba327d065029fc5.jpg",
    "https://i.pinimg.com/originals/d5/be/18/d5be1821195d4a103d27a8f990544e42.jpg",
]

export default function DetailGraphy({ route }) {

    const {item} = route.params;

    const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
        {/* ========================= IMAGE BACKGROUND ======================== */}
        <SharedElement id={`item.${item.id}.image`} style={StyleSheet.absoluteFillObject}>
            <Image
                source={item.imageUri}
                style={{height: height/3, width: width, resizeMode:'cover'}}
            />
        </SharedElement>

        {/* ========================= HEADER ========================  */}
        <Animatable.View 
            useNativeDriver
            animation={iconGoBackAnimation}
            duration={700}
            delay={300} 
            style={{ position:"absolute",zIndex: 100, top: 20, left: 30 }}
        >
            <Pressable onPress={()=> navigation.goBack()}>
                <Icon type='antdesign' name='arrowleft' color={"white"} size={30}/>
            </Pressable>
        </Animatable.View>


        {/* ========================= DETAIL ======================== */}
        <SharedElement id={`item.${item.id}.profile`} style={{marginTop: height/3 - 70}}>
            <View style={{
                width: width*0.8, height: width*0.38,backgroundColor:'white',borderRadius: 5, alignSelf:'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,  
                elevation: 5
            }}>
            {/* -------------------------------------------------------- */}
            <View style={{flexDirection:'row', alignItems:'center',padding: 16}}>
                {/* Image */}
                <Image
                    source={item.imageUri}
                    style={{height: 60, width: 60, borderRadius: 100, resizeMode:'contain', overflow:'hidden', }} 
                />
                {/* ------------ */}
                <View style={{marginLeft: 16,  }}>
                    {/* ------------------ */}
                    <Text style={{textTransform:'uppercase', fontSize: 16, fontFamily:'Montserrat-Bold',color: "#000"}}>
                        {item.heading}
                    </Text>
                    <Text style={{ fontSize: 14, fontFamily:'Montserrat-Regular',color: "grey"}}>
                        Delivered by BEAR DEV {item.id}
                    </Text>
                </View>
            </View>

            {/* ------------------ */}
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', }}>
                {/* Follower */}
                <View style={{alignItems:'center'}}>
                    <Text style={{textTransform:'uppercase', fontSize: 16, fontFamily:'Montserrat-Bold',color: "#000"}}>
                        1,601
                    </Text>
                    <Text style={{ fontSize: 14, fontFamily:'Montserrat-Regular',color: "grey"}}>
                        Follower
                    </Text>
                </View>
                    {/* Following*/}
                <View style={{alignItems:'center'}}>
                    <Text style={{textTransform:'uppercase', fontSize: 16, fontFamily:'Montserrat-Bold',color: "#000"}}>
                        2,001
                    </Text>
                    <Text style={{ fontSize: 14, fontFamily:'Montserrat-Regular',color: "grey"}}>
                        Following
                    </Text>
                </View>
                    {/* Following */}
                <View style={{alignItems:'center'}}>
                    <Text style={{textTransform:'uppercase', fontSize: 16, fontFamily:'Montserrat-Bold',color: "#000"}}>
                        23
                    </Text>
                    <Text style={{ fontSize: 14, fontFamily:'Montserrat-Regular',color: "grey"}}>
                        Like
                    </Text>
                </View>
            </View>
                {/* -------------------------------------------------------------- */}
            </View>
        </SharedElement>
        {/* ========================= LIST IMAGE FOOTER ======================== */}
        <Animatable.View 
            useNativeDriver
            animation={footerAnimation}
            duration={700}
            delay={300} 
            
            style={{marginTop: 20, paddingHorizontal: 10, shadowColor: '#000', borderRadius: 1, backgroundColor:'white',
            paddingTop: 10, 
            flex: 1,
        }}>
            <Text style={{ fontSize: 20, fontFamily:'Montserrat-Bold',color: "grey", marginBottom: 8}}>Album</Text>
            <MasonryList
                data={listImage}
                
                numColumns={2}
                renderItem={({item, index})=>{
                    const widthItem = width * 0.46;
                    const heightItem = Math.floor(Math.random() * (width * 0.75)) + widthItem;
                    return(
                        <View style={{height: heightItem, width: widthItem, marginBottom: 5, }}>
                            <Image
                                source={{uri: item}}
                                style={{height: "100%", width: "100%", borderRadius:8}}
                            />
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
            />

        </Animatable.View>
      
    </View>
  )
}

const styles = StyleSheet.create({})