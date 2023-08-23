import { FlatList, StyleSheet, Text, View, Dimensions, Image, SafeAreaView,Animated } from 'react-native'
import React, { useRef } from 'react'
import TouchableScale from 'react-native-touchable-scale'
import { useNavigation } from '@react-navigation/native'
import { listPhotoGraphy } from './data/data';

import { SharedElement } from 'react-navigation-shared-element';

const { width, height } = Dimensions.get('screen');

export default function PhotoGraphyScreen() {

  const navigation = useNavigation();

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{flex: 1, }}>
      <Animated.FlatList
        // initialScrollIndex={1}
        data={listPhotoGraphy}
        onScroll={ Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX }}}],
          {useNativeDriver: true},
        )}  
        // initialScrollIndex={2}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item, index) => item.id}

        renderItem={({item, index})=> {

          const translateYProfileTitle = scrollX.interpolate({
            inputRange: [ (index -0.5) * width, index * width, (index +0.5) * width ],
            outputRange: [ -50 , 0 , -50 ]
          })

          const translateXProfileAvatar = scrollX.interpolate({
            inputRange: [ (index -0.5) * width, index * width, (index +0.5) * width ],
            outputRange: [ -50 , 0 , -50 ]
          })

          const translateYProfileFollow = scrollX.interpolate({
            inputRange: [ (index -0.5) * width, index * width, (index +0.5) * width ],
            outputRange: [ 50 , 0 , 50 ]
          })

          const opacityProfileDetail = scrollX.interpolate({
            inputRange: [ (index -0.5) * width, index * width, (index +0.5) * width ],
            outputRange: [ 0 , 1 , 0 ]
          })

          return(
            <View style={{height: height, width: width}}>
              <SharedElement id={`item.${item.id}.image`}>
                <Image
                  source={item.imageUri}
                  style={{height: height, width: width, resizeMode:'cover', position:'absolute',zIndex: -1}}
                />
              </SharedElement>

              <View style={{position: 'absolute', zIndex: 10,  alignSelf:'center', bottom: 150}}>
              <SharedElement id={`item.${item.id}.profile`}>
                <TouchableScale
                  onPress={()=> navigation.navigate("DetailGraphy", {item: item})}
                  activeScale={0.8}
                  tension={10}
                  friction={7}
                  useNativeDriver
                >
                  <Animated.View style={{
                    width: width*0.8, height: width*0.38,backgroundColor:'white',borderRadius: 5,
                    opacity: opacityProfileDetail
                  }}>
                    {/* -------------------------------------------------------- */}
                    <View style={{flexDirection:'row', alignItems:'center',padding: 16}}>
                      {/* Image */}
                      <Animated.Image
                        source={item.imageUri}
                        style={{height: 60, width: 60, borderRadius: 100, resizeMode:'contain', overflow:'hidden',
                          opacity: opacityProfileDetail,
                          transform: [ {  translateX: translateXProfileAvatar } ]
                        }}
                      />
                      {/* ------------ */}
                      <Animated.View style={{marginLeft: 16, opacity: opacityProfileDetail , 
                        transform: [ {translateY: translateYProfileTitle} ]
                      }}>
                        {/* ------------------ */}
                        <Text style={{textTransform:'uppercase', fontSize: 16, fontFamily:'Montserrat-Bold',color: "#000"}}>
                          {item.heading}
                        </Text>
                        <Text style={{ fontSize: 14, fontFamily:'Montserrat-Regular',color: "grey"}}>
                          Delivered by BEAR DEV {item.id}
                        </Text>
                      </Animated.View>
                    </View>

                    {/* ------------------ */}
                    
                      <Animated.View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around',
                        opacity: opacityProfileDetail , transform: [
                          {translateY: translateYProfileFollow}
                        ]
                      }}>
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
                      </Animated.View>
                    {/* -------------------------------------------------------------- */}
                  </Animated.View>
                </TouchableScale>
              </SharedElement>
              </View>
            </View>
          )
        }}
      />


      <View style={{marginTop: 30, marginLeft: 20, position:'absolute',zIndex: 10}}>
        {
          listPhotoGraphy.map((item,index)=>{
            const inputRange = [ (index -0.5) * width, index * width, (index +0.5) * width ]
            const inputRangeOpacity = [ (index -0.5) * width, index * width, (index +0.5) * width ]

            const opacity = scrollX.interpolate({
              inputRange: inputRangeOpacity, 
              outputRange: [ 0, 1, 0 ]
            })

            const translateX = scrollX.interpolate({
              inputRange, 
              outputRange: [ 50, 0, 50 ]
            })

            return(
              <Animated.View key={index} style={{position:"absolute", zIndex: 100, opacity: opacity,
                transform:[
                  {translateY: translateX}
                ]
              }}>
                <Text style={{textTransform:'uppercase', fontSize: 18, fontFamily:'Montserrat-Bold',color: "#FFF"}}>
                  Bear Dev
                </Text>
                <Text style={{fontSize: 14, fontFamily:'Montserrat-Regular',color: "#FFF", maxWidth: width*0.9}}>
                  {item.detail}
                </Text>
              </Animated.View>
            )
          })
        }
        
          {/* DEV BEAR
        </Text>
        <Text style={{fontSize: 14, fontFamily:'Montserrat-Regular',color: "#FFF"}}>
        
        </Text> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})