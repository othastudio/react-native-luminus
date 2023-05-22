import {StyleSheet, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const global = StyleSheet.create({
    container:{
        width: windowWidth,
        height: windowHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})