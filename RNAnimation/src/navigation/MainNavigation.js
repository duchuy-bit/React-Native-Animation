import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../HomeScreen';
import HeadPhoneScreen from '../screens/headPhone';
import PostCard from '../screens/PostCard';
import CarouselScreen from '../screens/Carousel';
import DetailHeadPhone from '../screens/headPhone/DetailHeadPhone';

// const Stack = createNativeStackNavigator();

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

import {enableScreens} from 'react-native-screens';
import PhotoGraphyScreen from '../screens/PhotoGraphy';
import DetailGraphy from '../screens/PhotoGraphy/DetailGraphy';
import TourBooking from '../screens/TourBooking/TourBooking';
import CreditCard from '../screens/CreditCard/CreditCard';
import FlipCard from '../screens/FlipCard';
enableScreens();

export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown: false}}/>

      <Stack.Screen name="HeadPhoneScreen" component={HeadPhoneScreen}  options={{headerShown: false}}/>
      <Stack.Screen name="DetailHeadPhone" component={DetailHeadPhone}  options={{headerShown: false}}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          // console.log("item  sharedElements : ",item)
          return [
              {id:`item.${item.key}.backgroundColor`},
              {id: `item.${item.key}.image`},              
          ];
        }}
      />

      <Stack.Screen name="PostCard" component={PostCard}  options={{headerShown: false}}/>
      <Stack.Screen name="CarouselScreen" component={CarouselScreen}  options={{headerShown: false}}/>

      <Stack.Screen name="PhotoGraphyScreen" component={PhotoGraphyScreen}  options={{headerShown: false}}/>
      <Stack.Screen name="DetailGraphy" component={DetailGraphy}  options={{headerShown: false}}
      sharedElements={(route, otherRoute, showing) => {
        const { item } = route.params;
        // console.log("item  sharedElements : ",item)
        return [
            {id: `item.${item.id}.image`},              
            {id:`item.${item.id}.profile`},
            
        ];
      }}/>


      <Stack.Screen name="TourBooking" component={TourBooking}  options={{headerShown: false}}/>


      <Stack.Screen name="CreditCard" component={CreditCard}  options={{headerShown: false}}/>


      <Stack.Screen name="FlipCard" component={FlipCard}  options={{headerShown: false}}/>
      
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}