import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { images } from './assets'
import Sizes from './helper/sizesHelper'
import { navigate } from './helper/navigationHelper'

const Entry = () => {

  useEffect(() => {
    setTimeout(() => {
      navigate('Home')
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={images.splashLogo} style={styles.logoStyle}/>
    </View>
  )
}

export default Entry

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoStyle: {
    width: Sizes.horizontalScale(400),
    height: Sizes.verticalScale(400),
    resizeMode: 'contain'
  }
})