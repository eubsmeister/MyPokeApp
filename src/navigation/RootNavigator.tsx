import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { setTopNavigationRef } from '../helper/navigationHelper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Entry from '../Entry'
import Home from '../pages/Home/Home'


const RootNavigator = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer ref={ref => setTopNavigationRef(ref)}>
      <Stack.Navigator initialRouteName='Entry' screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Entry' component={Entry} />
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator