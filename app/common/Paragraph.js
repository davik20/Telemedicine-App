import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from './colors'
import defaultSettings from './defaultSettings'

const Paragraph = ({children, style}) => {
    return (
        <View>
            <Text style={[styles.text, style]}>{children}</Text>
        </View>
    )
}

export default Paragraph

const styles = StyleSheet.create({text: {
    color: colors.primary,
    fontSize: defaultSettings.paragraphFontSize,
    fontFamily: defaultSettings.fontFamily
}})
