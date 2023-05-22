import { StyleSheet } from "react-native"
import { windowWidth, windowHeight } from "../../utils/screen-sizes"
import { colors } from "../../utils/colors"

export const about = StyleSheet.create({
    container:{
        width: windowWidth,
        height: windowHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 23,
        backgroundColor: colors.success100,
        paddingHorizontal: 25
    },
    image:{
        width: 200, 
        height:35, 
        objectFit: "contain"
    },
    text:{
        fontSize: 25,
        fontWeight: "600"
    },
    paragraph:{
        fontSize: 15,
        fontWeight: "400",
        textAlign: "center"
    }
})