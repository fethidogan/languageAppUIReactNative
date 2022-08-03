// React
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/RegisterStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"

const ResetPassConfirmed = () => {
    const [focused, setFocused] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.whiteContainer}>
                <Text style={styles.createAccountText}>Reset Password</Text>
                <View style={styles.emailInputContainer}>

                    {/* Password Input */}
                    <Input
                        placeholder='New Password'
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

                    {/* Password Input */}
                    <Input
                        placeholder='Confirm Password'
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
                        inputContainerStyle={{ marginTop: -5 }}

                    />

                </View>

                {/* Sign in button */}
                <View style={styles.registerButtonContainer}>
                    <Text style={styles.registerText}>Reset Password</Text>
                </View>


            </View>
        </View>
    )
}

export default ResetPassConfirmed