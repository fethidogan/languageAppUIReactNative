// React
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Share } from 'react-native'

// Assets
import { styles } from "../../assets/styles/InviteFriendsStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopTitle from '../../components/TopTitle';

// Redux
import { useSelector } from "react-redux"

const InviteFriends = ({ navigation }) => {
    const user = useSelector(state => state.user)

    // Sharing Options
    const shareOptions = {
        title: 'Speakoo',
        message: 'Hello join speakoo for https://www.facebook.com', // Note that according to the documentation at least one of "message" or "url" fields is required
        url: 'https://www.example.com',
        subject: 'Speakoo app'
    };

    const onSharePress = () => Share.share(shareOptions);
    return (
        <View style={styles.container}>

            {/* Invite Friends Title & back Button */}
            <TopTitle name="Invite Friends" navigation={navigation} backto="Settings" paddingTop={30} />

            {/* Information Text */}
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Text style={styles.infoText}>
                    Invite your friends and get premium membership.
                    You will get your premium membership after <Text style={{ fontFamily: "Montserrat_600SemiBold", color: colors.mainBlue, fontSize: 15 }}>3</Text> of your friend sign up using your referral link.
                </Text>
            </View>

            {/* Referral Url Of User */}
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text style={styles.refText}>
                    www.speakoo.com/invite?ref={user.username}
                </Text>
            </View>

            {/* Share Link Button */}
            <TouchableOpacity onPress={() => onSharePress()}>
                <View style={styles.shareButtonContainer}>
                    <Text style={styles.shareText}>Share Link</Text>
                </View>
            </TouchableOpacity>

        </View >

    )
}

export default InviteFriends