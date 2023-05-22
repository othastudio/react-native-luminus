import { StyleSheet } from "react-native"
import { windowWidth, windowHeight } from "../utils/screen-sizes"

export const global = StyleSheet.create({
    container:{
        width: windowWidth,
        height: windowHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})