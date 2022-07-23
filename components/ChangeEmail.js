import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/ChangeEmailStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../assets/colors/colors';
import { Input } from "react-native-elements"

const ChangeEmail = ({ navigation }) => {

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
                    <Text style={styles.pageNameText}>Change Email</Text>
                </View>
            </View>

            <View style={styles.emailInputContainer}>
                <Input
                    placeholder='Email'
                    leftIcon={
                        <Icon
                            name='mail-outline'
                            size={20}
                            color={colors.mainBlue}
                        />
                    }
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                // errorMessage='Error'
                />

            </View>

            {/* Change Mail */}
            <View style={styles.registerButtonContainer}>
                <Text style={styles.registerText}>Change Mail</Text>
            </View>

            {/* Verify Inputs */}
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop:30 }}>

                <View>
                    <Input
                        inputStyle={{ color: colors.textDark }}
                        style={styles.verifyInput}
                        inputContainerStyle={{ width: 40 }}

                    />
                </View>
                <View>
                    <Input
                        inputStyle={{ color: colors.textDark }}
                        style={styles.verifyInput}
                        inputContainerStyle={{ width: 40 }}

                    />
                </View>
                <View>
                    <Input
                        inputStyle={{ color: colors.textDark }}
                        style={styles.verifyInput}
                        inputContainerStyle={{ width: 40 }}

                    />
                </View>
                <View>
                    <Input
                        inputStyle={{ color: colors.textDark }}
                        style={styles.verifyInput}
                        inputContainerStyle={{ width: 40 }}
                    />
                </View>

            </View>

            <View style={styles.registerButtonContainer}>
                <Text style={styles.registerText}>Verify Pin</Text>
            </View>

            <Text style={styles.mailChangedText}>Mail succesfully changed</Text>
            <View style={{ paddingHorizontal: 60 }}>
                <Text style={styles.willRedirectedText}>You will be redirected to lobby in <Text style={{color:"red"}}>3</Text> seconds.</Text>
            </View>


        </View >

    )
}

export default ChangeEmail