import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { useDispatch, useSelector } from 'react-redux'
import { signed_in } from '../redux/actions'
import AuthScreen from '../screens/auth'
import HomeScreen from '../navigation/home'

const stack = createStackNavigator()

export default function Route() {
  const user = useSelector(state => state.auth)
  console.log(user)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signed_in());
  }, [])

  if (!user.loaded) {
    return (
      <View>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <stack.Navigator>
        {
          user.currentUser == null ?
            <stack.Screen name='auth' component={AuthScreen} options={{ headerShown: false }} />
            :
            <stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
        }
      </stack.Navigator>
    </NavigationContainer>
  )
}
