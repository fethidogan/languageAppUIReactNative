// React
import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../assets/styles/ProfileStyles"
import { colors } from '../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';


// Redux
import { useSelector } from "react-redux"

const MyProfile = ({ navigation }) => {
    const user = useSelector(state => state.user)

    return (
        <View style={styles.container}>

            <ScrollView>
                {/* Navigate and user text */}
                <View style={{ flexDirection: "row", paddingTop: 35, alignItems: "center", justifyContent: "flex-end", paddingHorizontal: 20 }}>

                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                        <FaIcon name='settings' size={35} color={colors.mainBlue} />
                    </TouchableOpacity>

                </View>

                {/* Top Image */}
                <View>
                    <View style={styles.myAvatarShadow}>
                        <Image source={{ uri: user.userpic }} style={styles.avatarImage} />
                    </View>
                </View>

                {/* Profile Owner Name Text */}
                <Text style={styles.profileNameText}>{user.username}</Text>
                <Text style={styles.userAboutText}>{user.aboutme}</Text>

                {/* Buttons Container */}
                <View style={styles.buttonContainer}>
                    {/* Add Friend Button */}
                    <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                        <View style={styles.editbutton}>
                            <Text style={styles.editButtonText}>Edit profile</Text>
                            <Icon name='edit' size={25} color={colors.textDark} style={{ marginLeft: 4 }} />
                        </View>
                    </TouchableOpacity>

                </View>

                {/* Feedback, Talk , Rating Container */}
                <View style={styles.feedbackTalkRateContainer}>
                    {/* Feedback */}
                    <View>
                        <Text style={styles.subheadingTexts}>Feedbacks</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 5 }}>
                            <FaIcon name="message-circle" size={23} color={colors.textDark} />
                            <Text style={styles.subheadingNumTexts}>{user.userFeedbacks.length}</Text>
                        </View>
                    </View>

                    {/* Talk */}
                    <View>
                        <Text style={styles.subheadingTexts}>Talks</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 5 }}>
                            <FaIcon name="phone" size={23} color={colors.onlineCircle} />
                            <Text style={styles.subheadingNumTexts}>{user.usersCall}</Text>
                        </View>
                    </View>

                    {/* Rate */}
                    <View>
                        <Text style={styles.subheadingTexts}>Rating</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 5 }}>
                            <Icon name="grade" size={23} color={colors.ratingColor} />
                            <Text style={styles.subheadingNumTexts}>{user.averageRating}</Text>
                        </View>
                    </View>

                </View>

                {/* User Info Text */}
                <Text style={styles.userInfoText}>User Information</Text>



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
                            <Text style={styles.userInfoSubHeading}>{user.age}</Text>
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
                            <Text style={styles.userInfoSubHeading}>{user.location}</Text>
                        </View>
                    </View>
                </View>

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
                            <Text style={styles.userInfoSubHeading}>{user.nativelanguage}</Text>
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
                                {user.wantstolearn.map(item => {
                                    return (
                                        <View key={item.language}>
                                            <Text style={{ color: colors.mainBlue, fontFamily: "Montserrat_700Bold" }}>{item.language}, </Text>
                                        </View>
                                    )
                                })}

                            </Text>
                        </View>
                    </View>
                </View>

                {/* Feedbacks Text */}
                <Text style={styles.userInfoText}>Feedbacks</Text>

                {/* Feedbacks --> Navigated --> Will only show 3 elements */}
                {user.userFeedbacks.slice(0, 3).map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate("Profile")}>
                            <View style={styles.feedbackContainer}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={{ uri: item.frompic }} style={styles.feedbackAvatarImage} />
                                    <View style={{ flexDirection: "column", width: 225, paddingLeft: 10 }}>
                                        <Text style={styles.feedbackSender}>{item.from}</Text>
                                        <Text style={styles.feedbackText}>{item.feedback}</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Icon name='grade' size={30} color={colors.ratingColor} />
                                    <Text style={styles.feedbackratingNum}>{item.rating}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}


                {/* All Feedbacks Button */}
                <TouchableOpacity onPress={() => navigation.navigate("AllFeedbacks")}>
                    <View style={styles.seeAllFeedbacksButton}>
                        <Text style={styles.seeAllFeedbacksText}>See all feedbacks</Text>
                    </View>
                </TouchableOpacity>



                <View style={{ paddingBottom: 40 }}></View>

            </ScrollView>

        </View>

    )
}

export default MyProfile