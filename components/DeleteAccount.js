import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/ReportBugStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../assets/colors/colors';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

const DeleteAccount = ({ navigation }) => {

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
                    <Text style={styles.pageNameText}>Delete Account</Text>
                </View>
            </View>

            <View style={styles.emailInputContainer}>
                <AutoGrowingTextInput
                    style={styles.textInput}
                    placeholder='Please write Delete to confirm.'
                    placeholderTextColor='#66737C'
                    maxHeight={200}
                    minHeight={45}
                    enableScrollToCaret
                />

            </View>

            {/* Report Bug */}
    
                <TouchableOpacity>
                    <View style={styles.reportButtonContainer}>
                        <Text style={styles.registerText}>Delete Account</Text>
                    </View>
                </TouchableOpacity>

            <Text style={styles.accountDeletedText}>Account Deleted</Text>

        </View >

    )
}

export default DeleteAccount