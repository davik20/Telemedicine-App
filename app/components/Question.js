import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../common/colors'
import Paragraph from '../common/Paragraph'
import SmallText from '../common/SmallText'
import defaultSettings from '../common/defaultSettings'
import {TouchableOpacity} from 'react-native-gesture-handler'
import StarRating from './StarRating'

const Question = ({
    doctorName,
    doctorRating,
    question,
    answer,
    daysAgo,
    patientAge,
    patientSex,
    doctorImage
}) => {
    return (
        <View style={
            styles.container
        }>
            <View style={
                styles.questionContainer
            }>
                <View style={
                    styles.question
                }>
                    <Paragraph>{question} </Paragraph>
                </View>
                <View style={
                    styles.questionDetails
                }>
                    <SmallText style={
                        styles.name
                    }>
                        {
                        `${patientSex}, ${patientAge}`
                    } </SmallText>
                    <SmallText style={
                        styles.date
                    }>
                        {daysAgo} </SmallText>
                </View>
            </View>

            <View style={
                styles.answerContainer
            }>
                <View style={
                    styles.doctorProfile
                }>
                    <Image style={
                            styles.doctorPicture
                        }
                        source={doctorImage}/>
                    <View style={
                        styles.doctorDetails
                    }>
                        <Text style={
                            styles.doctorName
                        }>
                            {doctorName} </Text>
                        <Text style={
                            styles.doctorRating
                        }>

                            <StarRating rating={doctorRating}/>
                        </Text>
                    </View>

                </View>

                <View style={
                    styles.answer
                }>
                    <SmallText> {answer} </SmallText>
                    <TouchableOpacity style={
                        {alignSelf: 'flex-end'}
                    }>
                        <Text style={
                            {color: colors.lightBlue}
                        }>Detail</Text>
                    </TouchableOpacity>
                </View>

                <View style={
                    styles.interactionContainer
                }>
                    <View style={
                        styles.shareContainer
                    }>
                        <Paragraph style={
                            {
                                color: colors.lightGrey,
                                marginRight: 6
                            }
                        }>
                            Share
                        </Paragraph>
                        <MaterialCommunityIcons name="share"
                            color={
                                colors.lightBlue
                            }
                            size={20}/>
                    </View>

                    <View style={
                        styles.thanksContainer
                    }>
                        <Paragraph style={
                            {
                                color: colors.lightGrey,
                                marginRight: 6
                            }
                        }>
                            Thanks
                        </Paragraph>
                        <MaterialCommunityIcons name="thumb-up-outline"
                            color={
                                colors.lightBlue
                            }
                            size={20}/>
                    </View>


                </View>

            </View>
        </View>
    )
}

export default Question

const styles = StyleSheet.create({


    answer: {
        marginTop: 10
    },

    answerContainer: {

        paddingRight: 15
    },

    container: {},

    doctorDetails: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    doctorName: {
        color: colors.primaryFaded,
        marginBottom: 5
    },
    doctorPicture: {
        width: 60,
        height: 60,
        borderRadius: 20

    },
    doctorProfile: {
        flexDirection: 'row'
    },

    interactionContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    marginTop: {},
    shareContainer: {
        flexDirection: 'row'
    },
    thanksContainer: {
        flexDirection: 'row'
    },
    questionContainer: {
        borderWidth: .5,
        borderColor: colors.lightGrey,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 15,

        borderRadius: 15,
        marginBottom: 15
    },

    questionDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }


})
