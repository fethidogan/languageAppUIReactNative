// React
import React from 'react'
import { Image, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../assets/styles/FriendRequestsStyles"
import { colors } from '../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';

// Redux
import { useSelector, useDispatch } from "react-redux"
import { rejectFriendRequest, acceptFriendRequest } from '../redux/userSlice';

const FriendRequests = ({ navigation }) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    // Deny Friend Requests
    const denyRequest = (rejectedUsername) => {
        dispatch(rejectFriendRequest(rejectedUsername))
    }

    // Accept Friend Requests
    const acceptRequest = (
        acceptedUsername, acceptedProfile, acceptedFrom, acceptedRating,
        acceptedAge, acceptedGender, acceptedStatus
    ) => {
        var userWillAdded = {
            friendUsername: acceptedUsername,
            friendPic: acceptedProfile,
            friendFrom: acceptedFrom,
            friendRating: acceptedRating,
            friendAge: acceptedAge,
            friendGender: acceptedGender,
            friendStatus: acceptedStatus,
        }
        dispatch(acceptFriendRequest(userWillAdded))
    }

    return (
        <View style={styles.container}>

            {/* Friend Title */}
            <View style={styles.requestsTextContainer}>
                <Text style={styles.requestsText}>Friend Requests</Text>
            </View>

            <ScrollView>

                {/* Individual Request */}
                {user.friendRequests.map((item, index) => {
                    return (
                        <View key={item.requestedUsername} style={styles.allFriendReqContainer} >
                            {/* User Information */}
                            <View style={styles.individualRequestsLeftContainer}>
                                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                    <Image source={{ uri: item.requestedProfile }} style={styles.avatarImage} />
                                </TouchableOpacity>

                                <View style={styles.messageInfoContainer}>
                                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                        <Text style={styles.msgText}><Text style={styles.requestBoldUserText}>{item.requestedUsername}</Text> wants to be your friend.</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Accept or Deny Buttons */}
                            <View style={styles.individualRequestsRightContainer}>
                                <TouchableOpacity onPress={() => acceptRequest(
                                    item.requestedUsername,
                                    item.requestedProfile,
                                    item.requestedFrom,
                                    item.requestedRating,
                                    item.requestedAge,
                                    item.requestedGender,
                                    item.requestedStatus
                                )}>
                                    <Icon name='done' size={38} color={colors.textDark} style={styles.verifyRequest} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => denyRequest(item.requestedUsername)}>
                                    <Icon name='close' size={38} color={colors.textDark} style={styles.cancelRequest} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}

            </ScrollView>

        </View>
    )
}

export default FriendRequests