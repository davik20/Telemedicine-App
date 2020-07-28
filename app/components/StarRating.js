import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'


const StarRating = ({rating}) => {

    const getStars = (rating) => {
        let stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(<MaterialCommunityIcons size={15} color="orange" name="star-outline"/>)

        }
        return stars
    }


    return (
        getStars(rating)
    )
}

export default StarRating

const styles = StyleSheet.create({})
