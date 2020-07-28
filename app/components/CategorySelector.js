import React from 'react'
import {StyleSheet, Text, View, FlatList} from 'react-native'
import colors from '../common/colors';
import defaultSettings from '../common/defaultSettings'
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const CategorySelector = ({categories, selected, onPress}) => {
    return (
        <FlatList style={
                [{
                        paddingBottom: 10
                    }, styles.categories]
            }
            horizontal

            data={categories}
            keyExtractor={
                item => item.id.toString()
            }
            renderItem={
                ({item}) => (
                    <TouchableWithoutFeedback onPress={
                        () => {
                            onPress(item.name)
                        }
                    }>
                        <Text style={
                            [
                                styles.categoryItem,
                                item.name === selected ? styles.selected : ''
                            ]
                        }>
                            {
                            item.name
                        }</Text>
                    </TouchableWithoutFeedback>

                )
        }></FlatList>
    )
}

export default CategorySelector

const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 14,
        // backgroundColor: colors.white,


    },
    categoryItem: {
        marginHorizontal: 10,
        fontSize: 15,
        color: colors.primaryFaded,
        fontFamily: defaultSettings.fontFamily,
        textTransform: 'uppercase'

    },
    selected: {
        color: colors.lightBlue,
        fontWeight: 'bold',
        borderBottomColor: colors.lightBlue,
        borderBottomWidth: 2

    }
})
