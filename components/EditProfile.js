import React from 'react'
import { Image, InteractionManager, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/ProfileStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { colors } from '../assets/colors/colors';
import { useState } from 'react';
import { useEffect } from 'react';


const EditProfile = ({ navigation }) => {
    const [afterInteractions, setAfterInteractions] = useState(false)
    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            setAfterInteractions(true)
        })
    })
    return (
        <View style={styles.container}>
            {afterInteractions &&
                <ScrollView>

                    <View style={{ flexDirection: "row", paddingTop: 30, alignItems: "center" }}>
                        <View style={{ flex: 0.1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
                                <Icon name='chevron-left' size={50} color={colors.textDark} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pageNameContainer}>
                            <Text style={styles.pageNameText}>Edit Profile</Text>
                        </View>
                    </View>

                    {/* Top Image */}
                    <View>
                        <View style={styles.myAvatarShadow}>
                            <Image source={require("../assets/images/mary.png")} style={styles.avatarImage} />
                        </View>
                    </View>

                    {/* Profile Owner Name Text */}
                    <Text style={styles.profileNameText}>Mary Neagen</Text>
                    <Text style={styles.userAboutText}>Hello i am mary and i want to learn many language that will help me </Text>

                    {/* Name */}
                    <View style={{ paddingHorizontal: 25, paddingTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                            <View>
                                <Icon
                                    name='account-circle'
                                    size={30}
                                    style={styles.languageIcon}
                                />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={styles.userInfoHeading}>Name</Text>
                                <Text style={styles.userInfoSubHeading}>Mary Neagen</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("InConversation")}>
                                <Icon
                                    name='edit'
                                    size={30}
                                    color={colors.mainBlue}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* About Me */}
                    <View style={{ paddingHorizontal: 25, paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                            <View>
                                <Icon
                                    name='chat-bubble-outline'
                                    size={30}
                                    style={styles.languageIcon}
                                />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={styles.userInfoHeading}>About Me</Text>
                                <Text style={styles.userInfoSubHeading}>Write about yourself </Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("AfterSignOne")}>
                                <Icon
                                    name='edit'
                                    size={30}
                                    color={colors.mainBlue}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* Native Language */}
                    <View style={{ paddingHorizontal: 25, paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
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
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("ConversationFeedback")}>
                                <Icon
                                    name='edit'
                                    size={30}
                                    color={colors.mainBlue}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Wants To learn */}
                    <View style={{ paddingHorizontal: 25, paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
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
                                <Text style={styles.userInfoSubHeading}>Languages you wish to learn.</Text>
                            </View>
                        </View>
                        <View>
                            <Icon
                                name='edit'
                                size={30}
                                color={colors.mainBlue}
                            />
                        </View>
                    </View>

                    {/* Gender */}
                    <View style={{ paddingHorizontal: 25, paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
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
                        <View>
                            <Icon
                                name='edit'
                                size={30}
                                color={colors.mainBlue}
                            />
                        </View>
                    </View>

                    {/* Age */}
                    <View style={{ paddingHorizontal: 25, paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
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
                        <View>
                            <Icon
                                name='edit'
                                size={30}
                                color={colors.mainBlue}
                            />
                        </View>
                    </View>

                    {/* Location */}
                    <View style={{ paddingHorizontal: 25, paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
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
                        <View>
                            <Icon
                                name='edit'
                                size={30}
                                color={colors.mainBlue}
                            />
                        </View>
                    </View>



                    <View style={{ paddingBottom: 40 }}></View>

                </ScrollView>
            }
        </View>

    )
}

export default EditProfile