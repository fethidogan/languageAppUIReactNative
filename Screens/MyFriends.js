// React
import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../assets/styles/MyFriendsStyles"

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';

// Redux
import { useSelector, useDispatch } from "react-redux"

import { colors } from '../assets/colors/colors';

const MyFriends = ({ navigation }) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [sortedUser, setSortedUser] = useState([])

    useEffect(() => {
        var onlineStatus = []
        var offlineStatus = []
        
        // detach onlines and offlines
        for (let i = 0; i < user.friends.length; i++) {
            if (user.friends[i].friendStatus === "Online") {
                onlineStatus.push(user.friends[i])
            } else {
                offlineStatus.push(user.friends[i])
            }
        }

        // add offlines to online array
        for (let i = 0; i < offlineStatus.length; i++) {
            onlineStatus.push(offlineStatus[i])
        }

        setSortedUser(onlineStatus)
    }, [])

    return (
        <View style={styles.container}>

            {/* Messages Text */}
            <SafeAreaView>
                <View style={styles.friendsHeadingContainer}>
                    <Text style={styles.friendsheadingText}>Friends</Text>
                </View>
            </SafeAreaView>

            {/* Individual Friends Container */}
            {sortedUser.map((item, index) => {
                return (
                    <View key={item.friendUsername} style={styles.individualFriendContainer} >
                        {/* Left Side */}
                        <View style={styles.individualFriendLeftContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    {/* User Image */}
                                    <Image source={{ uri: item.friendPic }} style={styles.avatarImage} />

                                    {/* User Information */}
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={styles.userName}>{item.friendUsername}</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                            <Text style={styles.countryName}>{item.friendFrom}</Text>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Icon
                                                    name='grade'
                                                    size={25}
                                                    color="#FFD700"
                                                />
                                                <Text style={styles.rating}>{item.friendRating}</Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            <Text style={styles.ageGender}>{item.friendAge} / {item.friendGender}</Text>
                                            {item.friendStatus === "Online" &&
                                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                                                    <View style={styles.onlineCircle}></View>
                                                    <Text style={styles.onlineText}>{item.friendStatus}</Text>
                                                </View>
                                            }
                                            {item.friendStatus === "Offline" &&
                                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                                                    <View style={styles.offlineCircle}></View>
                                                    <Text style={styles.offlineText}>{item.friendStatus}</Text>
                                                </View>
                                            }
                                        </View>

                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Right Container */}
                        {item.friendStatus === "Online" &&
                            <View style={styles.individualFriendRightContainer}>
                                <TouchableOpacity onPress={() => alert("hey")}>
                                    <View >
                                        <Icon
                                            name='phone'
                                            size={40}
                                            color={colors.mainBlue}
                                            style={styles.speakCircle}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <Text style={styles.callNow}>Call User</Text>
                            </View>
                        }
                    </View>
                )
            })}

        </View>
    )
}

export default MyFriends