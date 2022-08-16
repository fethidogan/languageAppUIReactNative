// React
import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../assets/styles/MyFriendsStyles"

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';

// Redux
import { useSelector, useDispatch } from "react-redux"

const MyFriends = ({ navigation }) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>

            {/* Messages Text */}
            <SafeAreaView>
                <View style={styles.friendsHeadingContainer}>
                    <Text style={styles.friendsheadingText}>Friends</Text>
                </View>
            </SafeAreaView>

            {/* Individual Friends Container */}
            {user.friends.map((item, index) => {
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
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <View style={styles.onlineCircle}></View>
                                                {/* User Status */}
                                                <Text style={styles.onlineText}>{item.friendStatus}</Text>
                                            </View>
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
                                            name='add'
                                            size={40}
                                            style={styles.speakCircle}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <Text style={styles.callNow}>Invite</Text>
                            </View>
                        }
                    </View>
                )
            })}

        </View>
    )
}

export default MyFriends