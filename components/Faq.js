import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/FaqStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../assets/colors/colors';

const Faq = ({ navigation }) => {
    const [selected, setSelected] = useState("")
    return (
        <View style={styles.container}>

            {/* Navigate and user text */}
            <View style={{ flexDirection: "row", paddingTop: 50, alignItems: "center" }}>
                <View style={{ flex: 0.1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                        <Icon name='chevron-left' size={50} color={colors.textDark} />
                    </TouchableOpacity>
                </View>
                {/* Settings Text*/}
                <View style={styles.pageNameContainer}>
                    <Text style={styles.pageNameText}>FAQ</Text>
                </View>
            </View>


            <ScrollView>


                <View style={styles.faqContainer}>
                    <Text style={styles.question}>What are the benefits of Speakoo?</Text>
                    <TouchableOpacity onPress={() => setSelected("1")}>
                        {selected === "1" ?
                            <TouchableOpacity onPress={() => setSelected("")}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </TouchableOpacity>
                </View>

                {selected === "1" &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>
                            Speakoo is a application that will make you phone calls with people from different countries. This application is
                            made for people that wants to improve English, German, French, Chinese, Russian speaking skills.
                        </Text>
                    </View>
                }



                <View style={styles.faqContainer}>
                    <Text style={styles.question}>Is Speakoo good for learning a new language ?</Text>
                    <TouchableOpacity onPress={() => setSelected("2")}>
                        {selected === "2" ?
                            <TouchableOpacity onPress={() => setSelected("")}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </TouchableOpacity>
                </View>

                {selected === "2" &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>Speakoo is the best mobile application for to learn new languages and improve speaking skills.</Text>
                    </View>
                }

                <View style={styles.faqContainer}>
                    <Text style={styles.question}>Am i going to pay for calls ?</Text>
                    <TouchableOpacity onPress={() => setSelected("3")}>
                        {selected === "3" ?
                            <TouchableOpacity onPress={() => setSelected("")}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </TouchableOpacity>
                </View>

                {selected === "3" &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>No, you will not pay anything to your provider for to calls that you had on Speakoo.
                            You will just need a internet connection for to call people. All calls are made over internet. </Text>
                    </View>
                }

                <View style={styles.faqContainer}>
                    <Text style={styles.question}>What are the benefits of premium Speakoo account ?</Text>
                    <TouchableOpacity onPress={() => setSelected("4")}>
                        {selected === "4" ?
                            <TouchableOpacity onPress={() => setSelected("")}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </TouchableOpacity>
                </View>

                {selected === "4" &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>With Premium Speakoo account you will have{"\n"}
                            - Unlimited calls{"\n"}
                            - Special badge on your profile picture{"\n"}
                            - Custom filtering option{"\n"}
                            - No ads</Text>
                    </View>
                }

                <View style={styles.faqContainer}>
                    <Text style={styles.question}>What should i do if my partner behaves improperly ?</Text>
                    <TouchableOpacity onPress={() => setSelected("5")}>
                        {selected === "5" ?
                            <TouchableOpacity onPress={() => setSelected("")}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </TouchableOpacity>
                </View>

                {selected === "5" &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>If your partner behaves improperly please end your call and block him / her with block user button. 
                        You can also report this user to us and our admins will send him / her warning message.</Text>
                    </View>
                }

                <View style={styles.faqContainer}>
                    <Text style={styles.question}>Which languages that i can talk in Speakoo ?</Text>
                    <TouchableOpacity onPress={() => setSelected("6")}>
                        {selected === "6" ?
                            <TouchableOpacity onPress={() => setSelected("")}>
                                <Icon name='expand-less' size={35} color={colors.mainBlue} />
                            </TouchableOpacity>
                            :
                            <Icon name='expand-more' size={35} color={colors.mainBlue} />
                        }
                    </TouchableOpacity>
                </View>

                {selected === "6" &&
                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                        <Text style={styles.answer}>You can find partners that speaks English, German, French, Chinese, Spanish, Arabic, Turkish and much more.</Text>
                    </View>
                }

            </ScrollView>


        </View >

    )
}

export default Faq