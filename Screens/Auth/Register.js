// React
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

// Assets
import { styles } from "../../assets/styles/RegisterStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from "react-native-elements"
import { firebase } from '../../src/firebase/config';


const Register = ({ navigation }) => {
    // Regular expression
    let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    var passwordregex = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Email States
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    // Password States
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    // Handle Signup
    const handleSignUp = () => {
        if (emailregex.test(email) === false) {
            return setEmailError("Please enter valid email")
        }
        setEmailError("")

        if (passwordregex.test(password) === false) {
            return setPasswordError("Please use\n Min 8 Characters, 1 Uppercase and 1 Symbol\n in your password")
        }
        setPasswordError("")

        if (password !== confirmPassword) {
            return setConfirmPasswordError("Passwords doesn't match.")
        }
        setConfirmPasswordError("")
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        // navigation.navigate("SignUpUserDetails")
    }

    // Google register
    const registerwithGoogle = () => {
        alert("Google")
    }

    // Apple register
    const registerwithApple = () => {
        alert("Google")
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.whiteContainer}>
                    <Text style={styles.createAccountText}>Create Account</Text>
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
                        {/* Password Confirm Input */}
                        <Input
                            placeholder='Confirm Password'
                            leftIcon={
                                <Icon
                                    name='done'
                                    size={20}
                                    color={colors.mainBlue}
                                />
                            }
                            onChangeText={(e) => setConfirmPassword(e)}
                            secureTextEntry={true}
                            inputStyle={{ color: colors.textDark }}
                            style={styles.emailInput}
                            placeholderTextColor={colors.mainBlue}
                            inputContainerStyle={{ marginTop: -10 }}
                            errorMessage={confirmPasswordError}
                        />

                    </View>

                    {/* Sign Up */}
                    <TouchableOpacity onPress={() => handleSignUp()}>
                        <View style={styles.registerButtonContainer}>
                            <Text style={styles.registerText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Have an account --> Login */}
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>
                        <Text style={styles.haveAnAccountText}>Have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                            <Text style={styles.signInHereText}>Sign in here</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignSelf: "center", marginTop: 7 }}>
                        <Text style={styles.haveAnAccountText}>Register with</Text>
                    </View>

                    {/* Sign In with google and apple */}
                    <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", marginTop: 10 }}>

                        <TouchableOpacity onPress={() => registerwithGoogle()}>
                            <Image source={require("../../assets/images/google-logo.png")} style={{ width: 50, height: 50, marginRight: 10 }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => registerwithGoogle()}>
                            <Image source={require("../../assets/images/apple-logo.png")} style={{ width: 50, height: 50, marginLeft: 10 }} />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default Register