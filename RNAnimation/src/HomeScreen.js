import React from 'react';

import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {  MotiView } from 'moti';

const listScreen = [
  {
    name: "HeadPhoneScreen",
    title: 'Head Phone',
    image: require("./images/headphone.jpg"),
  },
  {
    name: "PostCard",
    title: 'Post Card',
    image: require("./images/HomePostCard.jpg"),
  },
  {
    name: "CarouselScreen",
    title: 'Carousel Screen',
    image: require("./images/HomeCarousel.jpg"),
  },
  {
    name: "HeadPhoneScreen",
    title: 'Head Phone',
    image: require("./images/headphone.jpg"),
  },
  {
    name: "HeadPhoneScreen",
    title: 'Head Phone',
    image: require("./images/headphone.jpg"),
  }
]

const {width, height}  =Dimensions.get('screen')

export default function HomeScreen() {

  const navigation = useNavigation();
  
  return (
    <View style={{backgroundColor: '#F6F6F6', flex: 1}}>
      <SafeAreaView style={{paddingHorizontal: 40,paddingVertical: 20, backgroundColor: '#F6F6F6'}}>
        <Text style={{fontSize: 28, fontWeight:'800', color:'black', textTransform:'uppercase'}}>Dev Bear</Text>
      </SafeAreaView>

      {/* <View>
        <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }}  transition={{delay: 500 }}>
          <Text>OK</Text>
        </MotiView>
      </View> */}

      <View style={{paddingHorizontal: 16}}>
        <FlatList
          data={listScreen}
          numColumns={2}
          // style={{paddingLeft: 16}}
          renderItem={({item, index})=>{
            return(
              <View
              // from={{opacity: 0, translateY: 50}}
              // animate={{opacity: 1, translateY: 0}}
              // transition={{delay: index  * 200 }}
              >
                <TouchableOpacity onPress={()=> navigation.navigate(item.name)} style={styles.itemContainer} >
                  <Image source={item.image} style={{width: width/ 2 - 32, height: width/ 2 - 32, }}/>
                  <View style={{width:'100%', backgroundColor:'white', paddingBottom: 16, alignItems:'center'}}> 
                    <Text style={{fontSize: 18, marginTop: 8}} numberOfLines={1}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer:{ 
    shadowColor: '#000',  shadowOffset: { width: 10, height: 1 },  shadowOpacity: 0.8, shadowRadius: 2,  elevation: 5,
    borderRadius: 20,
    marginHorizontal: 8,
    overflow:'hidden',
    marginBottom: 16
  }
})