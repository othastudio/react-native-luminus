import { View, Text } from 'react-native'
import React from 'react'
import { global } from '../style/global'

export default function index() {
  return (
    <View style={global.container}>
      <Text>Welcome to Luminus</Text>
    </View>
  )
}