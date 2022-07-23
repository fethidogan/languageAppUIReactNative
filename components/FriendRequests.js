import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/FriendRequestsStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../assets/colors/colors';

const FriendRequests = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Requests Heading Container */}
            <SafeAreaView>
                <View style={styles.requestsTextContainer}>
                    <Text style={styles.requestsText}>Friend Requests</Text>
                </View>
            </SafeAreaView>

            <ScrollView>

                {/* All Friend Requests */}
                <View style={styles.allFriendReqContainer} >
                    {/* Left Side of Messages */}

                    <View style={styles.individualRequestsLeftContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image source={require("../assets/images/mary.png")} style={styles.avatarImage} />
                        </TouchableOpacity>

                        <View style={styles.messageInfoContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                <Text style={styles.msgText}><Text style={styles.requestBoldUserText}>mary_neagendes</Text> wants to be your friend.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Right Side Of Messages */}
                    <View style={styles.individualRequestsRightContainer}>
                        <TouchableOpacity onPress={() => alert("yes")}>
                            <Icon name='done' size={38} color={colors.textDark} style={styles.verifyRequest} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert("nope")}>
                            <Icon name='close' size={38} color={colors.textDark} style={styles.cancelRequest} />
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}

export default FriendRequests