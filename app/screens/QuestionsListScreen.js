// importing react and third party libraries
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView
} from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

import _ from 'lodash'


import Heading from '../common/heading'
import ScreenTemplate from './ScreenTemplate'
import colors from '../common/colors'
import Search from '../components/Search'
import defaultSettings from '../common/defaultSettings'
import Question from '../components/Question'
import {TouchableWithoutFeedback} from 'react-native-gesture-handler'
import CategorySelector from '../components/CategorySelector'


// question lists screen
class QuestionsListScreen extends React.Component {

    state = {
        value: 'Search for Post',
        categories: [
            {
                id: 0,
                name: 'all'
            },
            {
                id: 1,
                name: 'Internal Medicine'
            },
            {
                id: 2,
                name: 'Surgery'
            },
            {
                id: 3,
                name: 'Family Medicine'
            }, {
                id: 4,

                name: 'Psychiatry'
            }, {
                id: 5,
                name: 'Microbiology'
            }, {
                id: 6,
                name: 'Cardio Thoracic Surgery'
            }, {
                id: 7,
                name: 'Gynaecology'
            },

        ],
        selected: 'all',

        questions: [
            {
                id: 1,
                question: 'Help Doctor , My lower back hurts, i\'ve tried taking few analgesics to no avail, pls help',
                field: 'Surgery',
                answer: 'Lower Back pain is a very common problem among the working class, you need to make sure that you ...',
                daysAgo: '5 days ago',
                doctorName: 'Dr Onyeji Victor',
                doctorRating: 5,
                patientAge: '30 Years old',
                patientSex: 'male',
                doctorImage: require('../assets/bg_6.jpg')
            }, {
                id: 2,
                question: 'Doctor, i have been having shortness of breath, i am an asthmatic, although i haven\'t  taken my inhaler for a while',
                field: 'Internal Medicine',
                answer: 'You need to go and get your inhaler immediately, i would write a prescription for you, remember, your health is extremely important....',
                daysAgo: '3 days ago',
                doctorName: 'Dr Onoja Stanley',
                doctorRating: 5,
                patientAge: '26 Years old',
                patientSex: 'female',
                doctorImage: require('../assets/profile_2.jpg')
            }, {
                id: 3,
                question: 'I want to be a doctor',
                field: 'Family Medicine',
                answer: 'Go to medical school',
                daysAgo: '7 days ago',
                doctorName: 'Dr Nnenna Ndu',
                doctorRating: 4,
                patientAge: '16 Years old',
                patientSex: 'male',
                doctorImage: require('../assets/ayomikun.jpg')
            }
        ]
    }

    handleCategoryPress = (category) => {

        console.log(category)
        this.setState({selected: category})
    }

    handleSearchPress = () => { // console.log(this.state.value)
    }

    handleKeyPress = (value) => {

        this.setState({value: value})
        // console.log(this.state.value)
    }

    filterByField = (questions) => {
        const {selected} = this.state

        return questions.filter(question => question.field == selected)
    }

    render() {
        const {value, selected, categories} = this.state
        let {questions} = this.state

        // filtering
        if (selected != 'all') {
            questions = this.filterByField(questions)
        }


        return (


            <ScreenTemplate>
                <View style={
                    styles.container
                }>
                    <View style={
                        styles.headerBox
                    }>
                        <Heading>Community</Heading>
                        <MaterialCommunityIcons size={35}
                            color={
                                colors.primaryFaded
                            }
                            name="view-dashboard-outline"/>
                    </View>
                    <View style={
                        styles.searchContainer
                    }>
                        <Search value={value}
                            handleKeyPress={
                                this.handleKeyPress
                            }
                            onPress={
                                this.handleSearchPress
                            }/>
                    </View>


                    <View style={
                        styles.categoriesContainer
                    }>

                        <CategorySelector categories={categories}
                            selected={selected}
                            onPress={
                                this.handleCategoryPress
                            }/>

                    </View>


                    <View style={
                        [
                            styles.questionsContainer, {
                                flex: 1
                            }
                        ]
                    }>

                        <FlatList data={questions}


                            keyExtractor={
                                item => item.id.toString()
                            }
                            renderItem={
                                ({item}) => (
                                    <TouchableWithoutFeedback onPress={
                                        () => {}
                                    }>
                                        <Question doctorImage={
                                                item.doctorImage
                                            }
                                            doctorName={
                                                item.doctorName
                                            }
                                            question={
                                                item.question
                                            }
                                            answer={
                                                item.answer
                                            }
                                            daysAgo={
                                                item.daysAgo
                                            }
                                            doctorRating={
                                                item.doctorRating
                                            }
                                            patientAge={
                                                item.patientAge
                                            }
                                            patientSex={
                                                item.patientSex
                                            }/>
                                    </TouchableWithoutFeedback>
                                )
                            }
                            ItemSeparatorComponent={
                                () => (
                                    <View style={
                                        {
                                            width: 1000,
                                            height: .2,
                                            marginVertical: 50
                                        }
                                    }></View>
                                )
                        }></FlatList>

            </View>


        </View>
    </ScreenTemplate>


        )

    }

}

export default QuestionsListScreen;
const styles = StyleSheet.create({
    categoriesContainer: {
        marginVertical: 20
    },

    container: { // backgroundColor: colors.lightGrey
        flex: 1


    },


    headerBox: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 30,
        paddingHorizontal: 10,
        alignContent: 'center',
        backgroundColor: colors.white
    },
    searchContainer: {
        marginLeft: 20,
        marginRight: 20,
        // backgroundColor: colors.white
    },

    questionsContainer: {
        paddingHorizontal: 15,
        marginBottom: 40


        // backgroundColor: colors.white
    }


})
