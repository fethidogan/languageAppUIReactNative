// React
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../assets/styles/ProfileStyles"
import { colors } from '../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

// Gradient
import { LinearGradient } from 'expo-linear-gradient';


const InConversation = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={{ paddingTop: 40 }}>

                {/* Top Image */}
                <View>
                    <View style={styles.ConversationAvatarShadow}>
                        <Image source={require("../assets/images/mary.png")} style={styles.ConversationAvatarImage} />
                    </View>
                </View>

                {/* User Name */}
                <Text style={styles.profileNameText}>Mary Neagen</Text>

                {/* Add Friend Button */}
                <View style={styles.InConversationButtonContainer}>
                    <TouchableOpacity onPress={() => alert("Friend Added")}>
                        <View style={styles.addAsFriend}>
                            <Text style={styles.buttonText}>Add as friend</Text>
                            <Icon name='person-add-alt-1' size={25} color="white" style={{ marginLeft: 4 }} />
                        </View>
                    </TouchableOpacity>

                </View>

                {/* Feedback, Talk , Rating Container Information*/}
                <View style={styles.ConversationFeedbackTalkRateContainer}>
                    {/* Feedback */}
                    <View>
                        <Text style={styles.subheadingTexts}>Feedbacks</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 5 }}>
                            <FaIcon name="message-circle" size={23} color={colors.textDark} />
                            <Text style={styles.subheadingNumTexts}>3</Text>
                        </View>
                    </View>

                    {/* Talk */}
                    <View>
                        <Text style={styles.subheadingTexts}>Talks</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 5 }}>
                            <FaIcon name="phone" size={23} color={colors.onlineCircle} />
                            <Text style={styles.subheadingNumTexts}>33</Text>
                        </View>
                    </View>

                    {/* Rate */}
                    <View>
                        <Text style={styles.subheadingTexts}>Rating</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 5 }}>
                            <Icon name="grade" size={23} color={colors.ratingColor} />
                            <Text style={styles.subheadingNumTexts}>4.5</Text>
                        </View>
                    </View>

                </View>

                {/* User Detailed Information */}
                {/* Native Language */}
                <View style={{ paddingHorizontal: 25, paddingTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                        <View>
                            <Icon
                                name='language'
                                size={30}
                                style={styles.languageIcon}
                            />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={styles.userInfoHeading}>Native Language</Text>
                            <Text style={styles.userInfoSubHeading}>English</Text>
                        </View>
                    </View>
                </View>

                {/* Wants To learn */}
                <View style={{ paddingHorizontal: 25, paddingTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                        <View>
                            <FaIcon
                                name='book'
                                size={30}
                                style={styles.languageIcon}
                            />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={styles.userInfoHeading}>Wants to learn</Text>
                            <Text style={styles.userInfoSubHeading}>
                                German-<Text style={{ color: colors.mainBlue, fontFamily: "Montserrat_700Bold" }}>B2</Text>,
                                Dutch-<Text style={{ color: colors.mainBlue, fontFamily: "Montserrat_700Bold" }}>C1</Text></Text>
                        </View>
                    </View>
                </View>

                {/* Gender */}
                <View style={{ paddingHorizontal: 25, paddingTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                        <View>
                            {/* male-outline ve female-outline*/}
                            <IonIcon
                                name='female-outline'
                                size={30}
                                style={styles.languageIcon}
                            />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={styles.userInfoHeading}>Gender</Text>
                            <Text style={styles.userInfoSubHeading}>Female</Text>
                        </View>
                    </View>
                </View>

                {/* Age */}
                <View style={{ paddingHorizontal: 25, paddingTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                        <View>
                            <IonIcon
                                name='calendar'
                                size={30}
                                style={styles.languageIcon}
                            />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={styles.userInfoHeading}>Age</Text>
                            <Text style={styles.userInfoSubHeading}>23</Text>
                        </View>
                    </View>
                </View>

                {/* Location */}
                <View style={{ paddingHorizontal: 25, paddingTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                        <View>
                            <IonIcon
                                name='location'
                                size={30}
                                style={styles.languageIcon}
                            />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={styles.userInfoHeading}>Location</Text>
                            <Text style={styles.userInfoSubHeading}>United States</Text>
                        </View>
                    </View>
                </View>

            </View>

            {/* Conversation Duration & Options*/}
            <LinearGradient
                // Button Linear Gradient
                colors={['#DDD6F3', '#FFDDE1', '#FFFFFF']}
                style={{ minWidth: 300, borderRadius: 20, alignItems: "center", flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "space-around" }}
            >

                <View style={{ flexDirection: "row" }}>
                    {/* Switch to Speakers */}
                    <Icon
                        name='volume-up'
                        size={35}
                        style={{
                            padding: 6,
                            borderRadius: 35,
                            backgroundColor: colors.textDark,
                            color: "white",
                            alignSelf: "center"
                        }}
                    />

                    {/* Mute Microphone*/}
                    <Icon
                        name='mic-off'
                        size={35}
                        style={{
                            padding: 6,
                            borderRadius: 35,
                            backgroundColor: colors.textDark,
                            color: "white",
                            alignSelf: "center",
                            marginLeft: 15
                        }}
                    />
                </View>

                {/* Conversation Duration */}
                <View>
                    <Text style={styles.ConversationDurationText}>12 : 57</Text>
                </View>

                {/* End Call Button */}
                <View>
                    <Icon
                        name='phone-disabled'
                        size={35}
                        style={{
                            padding: 6,
                            borderRadius: 35,
                            backgroundColor: colors.cancelRequest,
                            color: "white",
                            alignSelf: "center"
                        }}
                    />
                </View>



            </LinearGradient>
        </View>

    )
}

export default InConversation