import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../HomeScreen';
import HeadPhoneScreen from '../screens/headPhone';
import PostCard from '../screens/PostCard';
import CarouselScreen from '../screens/Carousel';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown: false}}/>
      <Stack.Screen name="HeadPhoneScreen" component={HeadPhoneScreen}  options={{headerShown: false}}/>
      <Stack.Screen name="PostCard" component={PostCard}  options={{headerShown: false}}/>
      <Stack.Screen name="CarouselScreen" component={CarouselScreen}  options={{headerShown: false}}/>
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}