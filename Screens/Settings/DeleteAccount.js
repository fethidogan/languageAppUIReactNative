// React
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ReportBugStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements & Text Input
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import TopTitle from '../../components/TopTitle';

// Fixes
// 1- Delete Account Title & back Button will turn into component

const DeleteAccount = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* Delete Account Title & back Button */}
            <TopTitle name="Delete Account" navigation={navigation} backto="Settings" paddingTop={30} />

            {/* Write DELETE Input --> Change to textInput instead of autogrowing*/}
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

            {/* Delete Account Button */}
            <TouchableOpacity>
                <View style={styles.reportButtonContainer}>
                    <Text style={styles.registerText}>Delete Account</Text>
                </View>
            </TouchableOpacity>

            {/* Account Deleted Text and Redirect to Sign up page */}
            <Text style={styles.accountDeletedText}>Account Deleted</Text>

        </View >

    )
}

export default DeleteAccount