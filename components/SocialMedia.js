import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { styles } from "../assets/styles/SettingsStyles"

const SocialMedia = () => {
    return (
        <>
            {/* Social Media Accounts */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, marginTop: 30 }}>
                <Text style={styles.followUsText}>Follow Us</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.discord.com")}>
                        <Image source={require("../assets/images/discord-logo.png")} style={{ width: 30, height: 30, marginRight: 15 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com")}>
                        <Image source={require("../assets/images/facebook-logo.png")} style={{ width: 30, height: 30, marginRight: 10 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Linking.openURL("https://www.twitter.com")}>
                        <Image source={require("../assets/images/twitter-logo.png")} style={{ width: 40, height: 40, marginRight: 5 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com")}>
                        <Image source={require("../assets/images/instagram-logo.png")} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default SocialMedia