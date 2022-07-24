// React
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/RegisterStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"

const SignIn = () => {
    const [focused, setFocused] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.whiteContainer}>
                <Text style={styles.createAccountText}>Sign In</Text>
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

                    {/* Password Input */}
                    <Input
                        placeholder='Password'
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
                        inputContainerStyle={{ marginTop: -10 }}

                    />

                </View>

                {/* Sign in button */}
                <View style={styles.registerButtonContainer}>
                    <Text style={styles.registerText}>Sign In</Text>
                </View>

                {/* Reset Password */}
                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>
                    <Text style={styles.haveAnAccountText}>Forget your password?</Text>
                    <Text style={styles.signInHereText}>Reset Password</Text>
                </View>

                <View style={{ alignSelf: "center", marginTop: 7 }}>
                    <Text style={styles.haveAnAccountText}>Sign in with</Text>
                </View>

                {/* Google & Apple Sign */}
                <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", marginTop: 10 }}>
                    <Image source={require("../../assets/images/google-logo.png")} style={{ width: 50, height: 50, marginRight: 10 }} />
                    <Image source={require("../../assets/images/apple-logo.png")} style={{ width: 50, height: 50, marginLeft: 10 }} />
                </View>


            </View>
        </View>
    )
}

export default SignIn