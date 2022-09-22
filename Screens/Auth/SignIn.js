// React
import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/RegisterStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"

const SignIn = ({ navigation }) => {
    // Regular expression
    let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    // Email States
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    // Password States
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    // Sigin User
    const handleSignUp = () => {
        if (emailregex.test(email) === false) {
            return setEmailError("Please enter valid email")
        }
        setEmailError("")
        alert("success")
    }

    // Google Signin
    const googleSignIn = () => {
        alert("google")
    }

    // Apple Signin
    const appleSignIn = () => {
        alert("apple")
    }


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
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        inputStyle={{ color: colors.textDark }}
                        style={styles.emailInput}
                        placeholderTextColor={colors.mainBlue}
                        errorMessage={emailError}
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
                        autoCapitalize="none"
                        onChangeText={(e) => setPassword(e)}
                        secureTextEntry={true}
                        inputStyle={{ color: colors.textDark }}
                        style={styles.emailInput}
                        placeholderTextColor={colors.mainBlue}
                        inputContainerStyle={{ marginTop: -10 }}
                        errorMessage={passwordError}
                    />

                </View>

                {/* Sign in button */}
                <TouchableOpacity onPress={() => handleSignUp()}>
                    <View style={styles.registerButtonContainer}>
                        <Text style={styles.registerText}>Sign In</Text>
                    </View>
                </TouchableOpacity>

                {/* Dont have an account */}
                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>
                    <Text style={styles.haveAnAccountText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.signInHereText}>Register</Text>
                    </TouchableOpacity>
                </View>

                {/* Reset Password */}
                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>
                    <Text style={styles.haveAnAccountText}>Forget your password?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
                        <Text style={styles.signInHereText}>Reset Password</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: "center", marginTop: 10 }}>
                    <Text style={styles.haveAnAccountText}>Sign in with</Text>
                </View>

                {/* Google & Apple Sign */}
                <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", marginTop: 10 }}>

                    <TouchableOpacity onPress={() => googleSignIn()}>
                        <Image source={require("../../assets/images/google-logo.png")} style={{ width: 50, height: 50, marginRight: 10 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => appleSignIn()}>
                        <Image source={require("../../assets/images/apple-logo.png")} style={{ width: 50, height: 50, marginLeft: 10 }} />
                    </TouchableOpacity>

                </View>


            </View>
        </View>
    )
}

export default SignIn