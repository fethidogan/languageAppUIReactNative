import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/RegisterStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../assets/colors/colors';
import { Input } from "react-native-elements"

const Register = () => {
    const [focused, setFocused] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.whiteContainer}>
                <Text style={styles.createAccountText}>Create Account</Text>
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
                        errorMessage='Error'
                    />

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
                    <Text style={styles.registerText}>Sign Up</Text>
                </View>

                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>
                    <Text style={styles.haveAnAccountText}>Have an account?</Text>
                    <Text style={styles.signInHereText}>Sign in here</Text>
                </View>

                <View style={{ alignSelf: "center", marginTop: 7 }}>
                    <Text style={styles.haveAnAccountText}>Sign in with</Text>
                </View>

                <View style={{ flexDirection: "row", alignSelf: "center", alignItems:"center", marginTop:10 }}>
                    <Image source={require("../assets/images/google-logo.png")} style={{ width: 50, height: 50, marginRight:10 }} />
                    <Image source={require("../assets/images/apple-logo.png")} style={{ width: 50, height: 50, marginLeft:10 }} />
                </View>


            </View>
        </View>
    )
}

export default Register