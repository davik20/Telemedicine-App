import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../common/colors'
import AppTextInput from './AppTextInput'
import {TouchableHighlight} from 'react-native-gesture-handler'

// Recieves [onPress ] as props

// destructuring the prop parameters
const Search = ({
    onPress,
    handleKeyPress,
    value,
    style,
    placeholder,
    textInputStyle
}) => { // initializing state


    const handle = (value) => {
        handleKeyPress(value)
    }


    return (

        <View style={
            styles.searchBox
        }>
            <TextInput style={
                    [styles.textInput, style]
                }
                placeholder={placeholder}
                value={value}
                onKeyPress={handle}/>
            <TouchableHighlight onPress={onPress}
                underlayColor={
                    colors.secondary
            }>
                <MaterialCommunityIcons size={20}
                    style={
                        styles.searchIcon
                    }
                    name="magnify"/>
            </TouchableHighlight>
        </View>

    )
}

const styles = StyleSheet.create({
    searchBox: {


        borderColor: colors.lightGrey,
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 7,
        paddingLeft: 9,
        paddingRight: 9,
        flexDirection: 'row',
        justifyContent: "space-between"

    },
    searchIcon: {
        color: colors.lightGrey

    },
    textInput: {
        color: colors.lightGrey,
        flex: 1

    }
});export default Search;
