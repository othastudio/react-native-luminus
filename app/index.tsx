import React from 'react'
import { useRouter } from 'expo-router'
import { View, Text, Image } from 'react-native'
import { global } from '../style/global'
import PrimaryButton from '../components/buttons/primary'



export default function index() {
  const router = useRouter();

  return (
    <View style={global.container}>
      <Image source={require('../assets/brand/logo.png')} style={global.image}/>
      <Text style={global.text}>Welcome to React Native 2023</Text>
      <PrimaryButton title="About us" onPress={()=>router.push('/about')} />
    </View>
  )
}