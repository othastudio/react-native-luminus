import { StyleSheet } from "react-native"
import { windowWidth, windowHeight } from "../utils/screen-sizes"
import {colors} from '../utils/colors'

export const global = StyleSheet.create({
    container:{
        width: windowWidth,
        height: windowHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 23,
        backgroundColor: colors.success100
    },
    image:{
        width: 200, 
        height:35, 
        objectFit: "contain"
    },
    text:{
        fontSize: 25,
        fontWeight: "700",
        color: colors.primary600
    }
})