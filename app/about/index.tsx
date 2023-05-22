import React from 'react'
import { View, Text, Image } from 'react-native'
import { useRouter } from 'expo-router'
import { about } from '../../style/pages/about'
import PrimaryButton from '../../components/buttons/primary'



export default function About() {
  const router = useRouter();

  return (
    <View style={about.container}>
      <Text style={about.text}>Welcome to React Native 2023</Text>
      <Text>Introducing a powerful template for your next React Native project, designed with a focus on developer experience and performance. This template incorporates the following technologies: Typescript, Expo, Expo Router, and Axios. Get ready to supercharge your development process! 🚀</Text>
      <PrimaryButton title="Back home" onPress={()=>router.push('/')} />
    </View>
  )
}