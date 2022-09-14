// React
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/RegisterStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"

const ResetPassword = ({ navigation }) => {
    // Regular expression
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    // Email States
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")


    // Validate Email
    const validateEmail = () => {
        if (reg.test(email) === false) {
            return setError("Please enter valid email")
        }
        setError("")
    }

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
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        inputStyle={{ color: colors.textDark }}
                        style={styles.emailInput}
                        placeholderTextColor={colors.mainBlue}
                        errorMessage={error}
                    />

                </View>

                {/* Sign in button */}
                <TouchableOpacity onPress={() => validateEmail()}>
                    <View style={styles.registerButtonContainer}>
                        <Text style={styles.registerText}>Reset</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ResetPassword