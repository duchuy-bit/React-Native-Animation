import { FlatList, StyleSheet, Text, View, Dimensions, Image, SafeAreaView,Animated } from 'react-native'
import React, { useRef } from 'react'
import TouchableScale from 'react-native-touchable-scale'
import { useNavigation } from '@react-navigation/native'
import { listPhotoGraphy } from './data/data';

const { width, height } = Dimensions.get('screen');

export default function PhotoGraphyScreen() {

  const navigation = useNavigation();

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{flex: 1, }}>
      <Animated.FlatList
        data={listPhotoGraphy}
        onScroll={ Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX }}}],
          {useNativeDriver: true},
        )}  
        // initialScrollIndex={2}
        horizontal
        pagingEnabled
        renderItem={({item, index})=> {
          return(
            <View style={{height: height, width: width}}>
              <Image
                source={item.imageUri}
                style={{height: height, width: width, resizeMode:'cover', position:'absolute',zIndex: -1}}
              />

              <View style={{position: 'absolute', zIndex: 10,  alignSelf:'center', bottom: 150}}>
                <TouchableScale
                  activeScale={0.8}
                  tension={20}
                  friction={7}
                  useNativeDriver
                  style={{width: width*0.8, height: width*0.38,backgroundColor:'white',borderRadius: 5}}
                >
                  <View style={{flexDirection:'row', alignItems:'center',padding: 16}}>
                    {/* Image */}
                    <Image
                      source={require("../../assets/images/avatar.jpg")}
                      style={{height: 60, width: 60, borderRadius: 100, resizeMode:'contain', overflow:'hidden'}}
                    />
                    {/* ------------ */}
                    <View style={{marginLeft: 16}}>
                      {/* ------------------ */}
                      <Text style={{textTransform:'uppercase', fontSize: 16, fontFamily:'Montserrat-Bold',color: "#000"}}>
                        {item.heading}
                      </Text>
                      <Text style={{ fontSize: 14, fontFamily:'Montserrat-Regular',color: "grey"}}>
                        Delivered by BEAR DEV
                      </Text>
                    </View>
                  </View>

                  {/* ------------------ */}
                  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
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
                </TouchableScale>
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
              <Animated.View style={{position:"absolute", zIndex: 100, opacity: opacity,
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