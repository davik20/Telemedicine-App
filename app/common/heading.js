import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types';


import colors from './colors'
import defaultSettings from './defaultSettings';


// Reusable  Heading Component 
// can Recieve the Style props


const Heading = ({children, style}) => {
    return (
        <View>
            <Text style={[styles.text, style]}> {children} </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    text: {
        color: colors.primary,
        fontSize: defaultSettings.headingFontSize,
        fontWeight: 'bold'
        
    }
})




export default Heading
