import React, { Children } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { primary } from '../../style/components/buttons'

export default function PrimaryButton({title, onPress}) {
  return (
    <TouchableOpacity style={primary.button} onPress={()=>onPress()}>
      <Text style={primary.text}>{title}</Text>
    </TouchableOpacity>
  )
}