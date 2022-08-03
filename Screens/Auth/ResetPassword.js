// React
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/RegisterStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"

const ResetPassword = () => {
    const [focused, setFocused] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.whiteContainer}>
                <Text style={styles.createAccountText}>Reset Password</Text>
                <View style={styles.emailInputContainer}>
                    {/* Email Input */}
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
                        errorMessage='Error'
                    />

                </View>

                {/* Sign in button */}
                <View style={styles.registerButtonContainer}>
                    <Text style={styles.registerText}>Reset</Text>
                </View>
               
            </View>
        </View>
    )
}

export default ResetPassword