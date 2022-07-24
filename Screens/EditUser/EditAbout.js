// React
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// Assets 
import { styles } from "../../assets/styles/ChangeEmailStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"
import TopTitle from '../../components/TopTitle';

// Fixes
// 2- Change Button will be component

const EditAbout = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* Edit About and back button*/}
            <TopTitle name="About Me" navigation={navigation} backto="EditProfile" paddingTop={30} />

            {/* About Me Input */}
            <View style={styles.emailInputContainer}>
                <Input
                    placeholder='About Me'
                    leftIcon={
                        <Icon
                            name='chat-bubble-outline'
                            size={30}
                            color={colors.mainBlue}
                        />
                    }
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                    multiline={true}
                    numberOfLines={3}
                // errorMessage='Error'
                />

            </View>

            {/* Change About */}
            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                <View style={styles.registerButtonContainer}>
                    <Text style={styles.registerText}>Change About</Text>
                </View>
            </TouchableOpacity>




        </View >

    )
}

export default EditAbout