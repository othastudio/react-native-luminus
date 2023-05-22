import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const primary = StyleSheet.create({
    button:{
        backgroundColor: colors.primary600,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 3,
    },
    text:{
        fontSize: 16,
        color: 'white'
    }
})

export { primary }