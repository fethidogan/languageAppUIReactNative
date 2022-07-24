// React
import React from 'react'
import { Image, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../assets/styles/FriendRequestsStyles"
import { colors } from '../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';

const FriendRequests = ({ navigation }) => {
    return (
        <View style={styles.container}>

            {/* Friend Title */}
            <View style={styles.requestsTextContainer}>
                <Text style={styles.requestsText}>Friend Requests</Text>
            </View>

            <ScrollView>

                {/* Individual Request */}
                <View style={styles.allFriendReqContainer} >
                    {/* User Information */}
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

                    {/* Accept or Deny Buttons */}
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