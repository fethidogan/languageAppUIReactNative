// React
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/ChangePasswordStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import AweIcon from 'react-native-vector-icons/FontAwesome5';
import { Input } from "react-native-elements"
import TopTitle from '../../components/TopTitle';


const ChangePassword = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* Change Password Title & back Button */}
            <TopTitle name="Change Password" navigation={navigation} backto="Settings" paddingTop={30} />

            <View style={styles.emailInputContainer}>
                {/* Old Password */}
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
                {/* New Password */}
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
                {/* Confirm Password */}
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

            {/* Change Password Button*/}
            <View style={styles.registerButtonContainer}>
                <Text style={styles.registerText}>Change Password</Text>
            </View>

        </View>
    )
}

export default ChangePassword