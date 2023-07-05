import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeadPhoneScreen from '../screens/headPhone';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HeadPhoneScreen" component={HeadPhoneScreen}  options={{headerShown: false}}/>
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}