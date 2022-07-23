import React from 'react'
import { Image, InteractionManager, ScrollView, Text, TouchableOpacity, View, Modal } from 'react-native'
import { styles } from "../assets/styles/ProfileStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { colors } from '../assets/colors/colors';
import { useEffect, useState } from 'react';
import { CheckBox } from 'react-native-elements'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'

const UserProfile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [afterInteractions, setAfterInteractions] = useState(false)
    const [isSelected, setSelection] = useState(false);

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            setAfterInteractions(true)
        })
    })


    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                style={{ justifyContent: "center", alignItems: "center" }}
            >
                <View style={styles.modalContainer}>
                    <ScrollView>


                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 10, marginBottom: 10 }}>
                            <Text style={styles.modalHeading}>Report User</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Icon name="close" size={35} color={colors.cancelRequest} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                title='Improper behavior'
                                onPress={() => setSelection(!isSelected)}
                                checked={isSelected}
                                disabled={true}
                                fontFamily={"Montserrat_500Medium"}
                                textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                                containerStyle={{ opacity: 0.5, flex: 1, borderRadius: 10 }}
                            />
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                title='Inappropriate photo'
                                onPress={() => setSelection(!isSelected)}
                                fontFamily={"Montserrat_500Medium"}
                                textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                                containerStyle={{ flex: 1, borderRadius: 10 }}
                            />
                        </View>

                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                title='Other'
                                onPress={() => setSelection(!isSelected)}
                                fontFamily={"Montserrat_500Medium"}
                                textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                                containerStyle={{ flex: 1, borderRadius: 10 }}
                            />
                        </View>

                        <View style={styles.emailInputContainer}>
                            <AutoGrowingTextInput
                                style={styles.textInput}
                                placeholder='Please tell more.'
                                placeholderTextColor='#66737C'
                                minHeight={45}
                                enableScrollToCaret
                            />

                        </View>

                        <View style={styles.reportButtonContainer}>
                            <Text style={styles.reportText}>Report</Text>
                        </View>
                    </ScrollView>
                </View>

            </Modal>
            {afterInteractions &&
                <ScrollView>
                    {/* Navigate and user text */}
                    <View style={{ flexDirection: "row", paddingTop: 30, alignItems: "center" }}>
                        <View style={{ flex: 0.1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Lobby")}>
                                <Icon name='chevron-left' size={50} color={colors.textDark} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Top Image */}
                    <View>
                        <View style={styles.avatarShadow}>
                            <Image source={require("../assets/images/mary.png")} style={styles.avatarImage} />
                        </View>
                    </View>

                    {/* Profile Owner Name Text */}
                    <Text style={styles.profileNameText}>Mary Neagen</Text>
                    <Text style={styles.userAboutText}>Hello i am mary and i want to learn many language that will help me </Text>

                    {/* Online Text and Circle */}
                    <View style={styles.onlineTextAndCircle}>
                        <View style={styles.onlineCircle}></View>
                        <Text style={styles.onlineText}>Online</Text>
                    </View>

                    {/* Buttons Container */}
                    <View style={styles.buttonContainer}>
                        {/* Add Friend Button */}
                        <TouchableOpacity onPress={() => alert("Friend Added")}>
                            <View style={styles.addAsFriend}>
                                <Text style={styles.buttonText}>Add as friend</Text>
                                <Icon name='person-add-alt-1' size={25} color="white" style={{ marginLeft: 4 }} />
                            </View>
                        </TouchableOpacity>

                        {/* Call Now Button */}
                        <TouchableOpacity onPress={() => alert("Calling")}>
                            <View style={styles.callNow}>
                                <Text style={styles.buttonText}>Call Now</Text>
                                <Icon name='call' size={25} color="white" />
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

                    {/* User Info Text */}
                    <Text style={styles.userInfoText}>User Info</Text>

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

                    {/* Feedbacks Text */}
                    <Text style={styles.userInfoText}>Feedbacks</Text>

                    {/* Feedbacks --> Navigated*/}
                    <TouchableOpacity onPress={() => navigation.navigate("Lobby")}>
                        <View style={styles.feedbackContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image source={require("../assets/images/mary.png")} style={styles.feedbackAvatarImage} />
                                <View style={{ flexDirection: "column", width: 225, paddingLeft: 10 }}>
                                    <Text style={styles.feedbackSender}>Nick Hon</Text>
                                    <Text style={styles.feedbackText}>this was an super chat with an very nice person. I hope we can meet again.</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon name='grade' size={30} color={colors.ratingColor} />
                                <Text style={styles.feedbackratingNum}>4</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.feedbackContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={styles.feedbackAvatarShadow}>
                                <Image source={require("../assets/images/mariana.png")} style={styles.feedbackAvatarImage} />
                            </View>
                            <View style={{ flexDirection: "column", width: 225, paddingLeft: 10 }}>
                                <Text style={styles.feedbackSender}>Mariana holanda</Text>
                                <Text style={styles.feedbackText}>this is the one of the best chat i did.</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name='grade' size={30} color={colors.ratingColor} />
                            <Text style={styles.feedbackratingNum}>5</Text>
                        </View>
                    </View>

                    <View style={styles.feedbackContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={styles.feedbackAvatarShadow}>
                                <Image source={require("../assets/images/mariana.png")} style={styles.feedbackAvatarImage} />
                            </View>
                            <View style={{ flexDirection: "column", width: 225, paddingLeft: 10 }}>
                                <Text style={styles.feedbackSender}>Mariana holanda</Text>
                                <Text style={styles.feedbackText}>this is the one of the best chat i did.</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name='grade' size={30} color={colors.ratingColor} />
                            <Text style={styles.feedbackratingNum}>5</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("AllFeedbacks")}>
                        <View style={styles.seeAllFeedbacksButton}>
                            <Text style={styles.seeAllFeedbacksText}>See all feedbacks</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.reportUserButton}>
                            <Text style={styles.reportUserText}>Report user</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("blocked")}>
                        <View style={styles.blockUserButton}>
                            <Text style={styles.blockUserText}>Block user</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ paddingBottom: 40 }}></View>

                </ScrollView>
            }
        </View>

    )
}

export default UserProfile