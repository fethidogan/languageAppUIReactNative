// React
import React, { useState, useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ProfileStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import TopTitle from '../../components/TopTitle';

// Redux
import { useSelector } from "react-redux"

const EditProfile = ({ navigation }) => {
    const user = useSelector(state => state.user)
    return (
        <View style={styles.container}>

            <ScrollView>
                {/* Edit Profile Text and back button */}
                <TopTitle name="Profile" navigation={navigation} backto="MyProfile" paddingTop={30} />

                {/* Top Image */}
                <View>
                    <View style={styles.myAvatarShadow}>
                        <Image source={{ uri: user.userpic }} style={styles.avatarImage} />
                    </View>
                </View>

                {/* Profile Owner Name Text */}
                <Text style={styles.profileNameText}>{user.username}</Text>
                <Text style={styles.userAboutText}>{user.aboutme}</Text>

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
                            <Text style={styles.userInfoHeading}>Username</Text>
                            <Text style={styles.userInfoSubHeading}>{user.username}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("EditName")}>
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
                        <TouchableOpacity onPress={() => navigation.navigate("EditAbout")}>
                            <Icon
                                name='edit'
                                size={30}
                                color={colors.mainBlue}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* User Details */}
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
                            <Text style={styles.userInfoSubHeading}>{user.nativelanguage}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("EditNativeLang")}>
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
                        <TouchableOpacity onPress={() => navigation.navigate("EditWantsToLearn")}>
                            <Icon
                                name='edit'
                                size={30}
                                color={colors.mainBlue}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Gender */}
                <View style={{ paddingHorizontal: 25, paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                        <View>
                            {/* male-outline ve female-outline depending on user gender */}
                            <IonIcon
                                name='female-outline'
                                size={30}
                                style={styles.languageIcon}
                            />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={styles.userInfoHeading}>Gender</Text>
                            <Text style={styles.userInfoSubHeading}>{user.gender}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("EditGender")}>
                            <Icon
                                name='edit'
                                size={30}
                                color={colors.mainBlue}
                            />
                        </TouchableOpacity>
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
                            <Text style={styles.userInfoSubHeading}>{user.age}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("EditAge")}>
                            <Icon
                                name='edit'
                                size={30}
                                color={colors.mainBlue}
                            />
                        </TouchableOpacity>
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
                            <Text style={styles.userInfoSubHeading}>{user.location}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("EditLocation")}>
                            <Icon
                                name='edit'
                                size={30}
                                color={colors.mainBlue}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Padding Bottom*/}
                <View style={{ paddingBottom: 40 }}></View>

            </ScrollView>

        </View>

    )
}

export default EditProfile