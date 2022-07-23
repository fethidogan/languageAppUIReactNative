import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/MyFriendsStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyFriends = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Messages Text */}
            <SafeAreaView>
                <View style={styles.friendsHeadingContainer}>
                    <Text style={styles.friendsheadingText}>Friends</Text>
                </View>
            </SafeAreaView>


            <View style={styles.individualFriendContainer} >

                {/* Left Container */}
                <View style={styles.individualFriendLeftContainer}>
                    {/* First Left Row */}
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
                        <View style={{ flexDirection: "row", alignItems:"center" }}>
                            <Image source={require("../assets/images/mary.png")} style={styles.avatarImage} />

                            {/* Second Left Row */}
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={styles.userName}>mary_neagendaxew</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={styles.countryName}>United States </Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Icon
                                            name='grade'
                                            size={25}
                                            color="#FFD700"
                                        />
                                        <Text style={styles.rating}>4.9</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={styles.ageGender}>22 / Female</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <View style={styles.onlineCircle}></View>
                                        <Text style={styles.onlineText}>Online</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Right Container */}
                <View style={styles.individualFriendRightContainer}>
                    <TouchableOpacity onPress={() => alert("hey")}>
                        <View >
                            <Icon
                                name='phone'
                                size={40}
                                style={styles.speakCircle}
                            />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.callNow}>Call Now</Text>
                </View>

            </View>

            
        </View>
    )
}

export default MyFriends