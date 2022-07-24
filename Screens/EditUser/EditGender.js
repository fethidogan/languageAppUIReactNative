// React
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ChangeEmailStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"
import TopTitle from '../../components/TopTitle';

// Fixes
// 2- Change Button will be component

const EditGender = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* Edit gender text and back button */}
            <TopTitle name="Gender" navigation={navigation} backto="EditProfile" paddingTop={30} />

            {/* Edit Gender Input */}
            <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <View style={{
                    marginRight: 15,
                    alignItems: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: colors.mainBlue
                }}>
                    <Image source={require("../../assets/images/male-emoji.png")} style={styles.emojiImage} />
                    <Text style={styles.genderText}>Male</Text>
                </View>
                <View style={{ marginRight: 15, alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>
                    <Image source={require("../../assets/images/female-emoji.png")} style={styles.emojiImage} />
                    <Text style={styles.genderText}>Female</Text>
                </View>
            </View>

            {/* Save Gender */}
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                    <View style={styles.registerButtonContainer}>
                        <Text style={styles.registerText}>Save Gender</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View >

    )
}

export default EditGender