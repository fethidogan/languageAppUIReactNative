import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Share } from 'react-native'
import { styles } from "../assets/styles/InviteFriendsStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../assets/colors/colors';

const InviteFriends = ({ navigation }) => {
    const shareOptions = {
        title: 'Speakoo',
        message: 'Hello join speakoo for https://www.facebook.com', // Note that according to the documentation at least one of "message" or "url" fields is required
        url: 'https://www.example.com',
        subject: 'Speakoo app'
    };

    const onSharePress = () => Share.share(shareOptions);
    return (
        <View style={styles.container}>

            {/* Navigate and user text */}
            <View style={{ flexDirection: "row", paddingTop: 50, alignItems: "center" }}>
                <View style={{ flex: 0.1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                        <Icon name='chevron-left' size={50} color={colors.textDark} />
                    </TouchableOpacity>
                </View>
                {/* Settings Text*/}
                <View style={styles.pageNameContainer}>
                    <Text style={styles.pageNameText}>Invite Friends</Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Text style={styles.infoText}>
                    Invite your friends and get premium membership.
                    You will get your premium membership after <Text style={{ fontFamily: "Montserrat_600SemiBold", color:colors.mainBlue, fontSize:15}}>3</Text> of your friend sign up using your referral link.
                </Text>
            </View>


            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text style={styles.refText}>
                    www.speakoo.com/ref=username
                </Text>
            </View>

            <TouchableOpacity onPress={() => onSharePress()}>
                <View style={styles.shareButtonContainer}>
                    <Text style={styles.shareText}>Share Link</Text>
                </View>
            </TouchableOpacity>

        </View >

    )
}

export default InviteFriends