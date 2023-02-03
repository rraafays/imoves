import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createMaterialBottomTabNavigator()

const TEST_SCREEN = () => {
  return (<View><Text>i am a placeholder</Text></View>)
}

export default function HomeScreen() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#000000' }}
      initialRouteName='feed'
      activeColor='#E0E0E0'
      inactiveColor='#E0E0E0'
      shifting={true}
    >
      <Tab.Screen
        name='Feed'
        component={TEST_SCREEN}
        options={{ tabBarIcon: () => <MaterialCommunityIcons name='home' size={24} color={'#702F8A'} /> }}
      />
      <Tab.Screen
        name='Add'
        component={TEST_SCREEN}
        options={{ tabBarIcon: () => <MaterialCommunityIcons name='plus-circle' circle size={24} color={'#702F8A'} /> }}
      />
      <Tab.Screen
        name='Profile'
        component={TEST_SCREEN}
        options={{ tabBarIcon: () => <MaterialCommunityIcons name='baby-face' size={24} color={'#702F8A'} /> }}
      />
    </Tab.Navigator>
  )
}
