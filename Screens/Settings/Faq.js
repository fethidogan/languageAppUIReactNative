// React
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/FaqStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopTitle from '../../components/TopTitle';



const Faq = ({ navigation }) => {
    const [firstSelected, setFirstSelected] = useState(false)
    const [secondSelected, setSecondSelected] = useState(false)
    const [thirdSelected, setThirdSelected] = useState(false)
    const [fourthSelected, setFourthSelected] = useState(false)
    const [fifthSelected, setFifthSelected] = useState(false)
    const [sixthSelected, setSixthSelected] = useState(false)
    const [selected, setSelected] = useState(false)
    return (
        <View style={styles.container}>

            {/* FAQ Title & back Button */}
            <TopTitle name="Faq" navigation={navigation} backto="Settings" paddingTop={30} />

            <ScrollView>
                {/* First Question */}
                <TouchableOpacity onPress={() => setFirstSelected(!firstSelected)}>
                    <View style={styles.faqContainer}>
                        <Text style={styles.question}>What are the benefits of Speakoo?</Text>
                        {firstSelected ?
                            <TouchableOpacity onPress={() => setFirstSelected(!firstSelected)}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </View>
                </TouchableOpacity>

                {firstSelected &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>
                            Speakoo is a application that will make you phone calls with people from different countries. This application is
                            made for people that wants to improve English, German, French, Chinese, Russian speaking skills.
                        </Text>
                    </View>
                }


                {/* Second Question */}
                <TouchableOpacity onPress={() => setSecondSelected(!secondSelected)}>
                    <View style={styles.faqContainer}>
                        <Text style={styles.question}>Is Speakoo good for learning a new language ?</Text>
                        {secondSelected ?
                            <TouchableOpacity onPress={() => setSecondSelected(!secondSelected)}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </View>
                </TouchableOpacity>

                {secondSelected &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>Speakoo is the best mobile application for to learn new languages and improve speaking skills.</Text>
                    </View>
                }

                {/* Third Question */}
                <TouchableOpacity onPress={() => setThirdSelected(!thirdSelected)}>
                    <View style={styles.faqContainer}>
                        <Text style={styles.question}>Am i going to pay for calls ?</Text>
                        {thirdSelected ?
                            <TouchableOpacity onPress={() => setThirdSelected(!thirdSelected)}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </View>
                </TouchableOpacity>

                {thirdSelected &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>No, you will not pay anything to your provider for to calls that you had on Speakoo.
                            You will just need a internet connection for to call people. All calls are made over internet. </Text>
                    </View>
                }

                {/* Fourth Question */}
                <TouchableOpacity onPress={() => setFourthSelected(!fourthSelected)}>
                    <View style={styles.faqContainer}>
                        <Text style={styles.question}>What are the benefits of premium Speakoo account ?</Text>
                        {fourthSelected ?
                            <TouchableOpacity onPress={() => setFourthSelected(!fourthSelected)}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </View>
                </TouchableOpacity>

                {fourthSelected &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>With Premium Speakoo account you will have{"\n"}
                            - Unlimited calls{"\n"}
                            - Special badge on your profile picture{"\n"}
                            - Custom filtering option{"\n"}
                            - No ads</Text>
                    </View>
                }

                {/* Fifth Question */}
                <TouchableOpacity onPress={() => setFifthSelected(!fifthSelected)}>
                    <View style={styles.faqContainer}>
                        <Text style={styles.question}>What should i do if my partner behaves improperly ?</Text>
                        {fifthSelected ?
                            <TouchableOpacity onPress={() => setFifthSelected(!fifthSelected)}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </View>
                </TouchableOpacity>

                {fifthSelected &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>If your partner behaves improperly please end your call and block him / her with block user button.
                            You can also report this user to us and our admins will send him / her warning message.</Text>
                    </View>
                }

                {/* Sixth Question */}
                <TouchableOpacity onPress={() => setSixthSelected(!sixthSelected)}>
                    <View style={styles.faqContainer}>
                        <Text style={styles.question}>Which languages that i can talk in Speakoo ?</Text>
                        {sixthSelected ?
                            <TouchableOpacity onPress={() => setSixthSelected(!sixthSelected)}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </View>
                </TouchableOpacity>

                {sixthSelected &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>You can find partners that speaks English, German, French, Chinese, Spanish, Arabic, Turkish and much more.</Text>
                    </View>
                }

            </ScrollView>


        </View >

    )
}

export default Faq