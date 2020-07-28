import React from 'react'
import {StyleSheet, Text, SafeAreaView} from 'react-native'
import defaultSettings from '../common/defaultSettings'

const ScreenTemplate = ({children}) => {
    return (
        <SafeAreaView style={[defaultSettings.safeAreaView, styles.safeAreaView ]}>{children}</SafeAreaView>
    )
}

export default ScreenTemplate

const styles = StyleSheet.create({
    safeAreaView: {
       
        
        flex: 1,
    
    }
})
