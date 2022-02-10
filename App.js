import React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Ionic from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from'@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Activity from './src/components/screens/Activity';
import Profile from './src/components/screens/Profile';
import Status from './src/components/screenComponents/Status'



export default props => {
  const Stack = createNativeStackNavigator();
  
  const Tab = createBottomTabNavigator();

  const bottomTabScreen = () => {
    return (
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabe: false ,
        headerShown:false,
        tabBarStyle:{
          height:50
        },

        tabBarIcon:({focused,size,colour}) => {
          let iconName;
          if(route.name==="Home"){
            iconName= focused ? "home-sharp" : "home-outline";
            size =focused ? size + 8 : size + 2;
          }else if(route.name ==="Search"){
            iconName = focused ? "search" : "ios-search-outline";
            size =focused ? size + 8 : size + 2;
          }else if(route.name ==="Reels"){
            iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline";
            size =focused ? size + 8 : size + 2;
          }else if(route.name ==="Activity"){
            iconName = focused ? "ios-heart" : "ios-heart-outline";
            size =focused ? size + 8 : size + 2;
          }else if(route.name ==="Profile"){
            iconName = focused ? "ios-person-circle" : "ios-person-circle-outline";
            size =focused ? size + 8 : size + 2;
          }

          return <Ionic name={iconName} size={size} color={colour}/>
        }
      })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Reels" component={Reels}/>
        <Tab.Screen name="Activity" component={Activity}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    )
  }

  let [fontsLoaded] = useFonts({
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}
        >
          <Stack.Screen name="Bottom" component={bottomTabScreen}/>
          <Stack.Screen name="Status" component={Status}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
