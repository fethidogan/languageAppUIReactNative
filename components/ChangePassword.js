import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/ChangePasswordStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import AweIcon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../assets/colors/colors';
import { Input } from "react-native-elements"

const ChangePassword = ({ navigation }) => {

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
                    <Text style={styles.pageNameText}>Change Password</Text>
                </View>
            </View>

            <View style={styles.emailInputContainer}>
                <Input
                    placeholder='Old Password'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={20}
                            color={colors.mainBlue}
                        />
                    }
                    secureTextEntry={true}
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                    inputContainerStyle={{ marginTop: 10 }}

                />

                <Input
                    placeholder='New Password'
                    leftIcon={
                        <AweIcon
                            name='key'
                            size={20}
                            color={colors.mainBlue}
                        />
                    }
                    secureTextEntry={true}
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                    inputContainerStyle={{ marginTop: -10 }}

                />

                <Input
                    placeholder='Confirm Password'
                    leftIcon={
                        <Icon
                            name='done'
                            size={20}
                            color={colors.mainBlue}
                        />
                    }
                    secureTextEntry={true}
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                    inputContainerStyle={{ marginTop: -10 }}
                />

            </View>

            <View style={styles.registerButtonContainer}>
                <Text style={styles.registerText}>Change Password</Text>
            </View>




        </View>
    )
}

export default ChangePassword