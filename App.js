import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminScreen from './screens/AdminScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WaterScreen from './screens/WaterScreen';
import EstateScreen from './screens/EstateScreen';
//working 


const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#1DA1F2",
        },
      }}
    >
      <TopTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "HomeScreen",
        }}
      />
      <TopTabs.Screen name="Purchase Water" component={WaterScreen} />
      <TopTabs.Screen name="Estate" component={EstateScreen} />
     
    </TopTabs.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen name="Toptab" component={TopTabsGroup} />
      <Stack.Screen name="Admin" component={AdminScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
