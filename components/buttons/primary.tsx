import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { primary } from '../../style/components/buttons'

export default function Primary({press}) {
  return (
    <TouchableOpacity style={primary.button} onPress={()=>press()}>
      <Text style={primary.text}>Discover about us</Text>
    </TouchableOpacity>
  )
}