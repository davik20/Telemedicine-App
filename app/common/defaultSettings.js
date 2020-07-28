import {StyleSheet, Text, View, Platform} from 'react-native'
import Constants from 'expo-constants'

export default {
    safeAreaView: {
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : ''

    },
    fontFamily: Platform.OS === 'android' ? 'roboto' : 'Avenir',
    paragraphFontSize: 16,
    headingFontSize: 30,
    smallFontSize: 13

}


const styles = StyleSheet.create({})
