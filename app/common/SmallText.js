import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import defaultSettings from './defaultSettings'
import colors from './colors'

const SmallText = ({children}) => {
    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default SmallText

const styles = StyleSheet.create({text: {
    fontSize: defaultSettings.smallFontSize,
    color: colors.lightGrey,
    fontFamily: defaultSettings.fontFamily

}})
