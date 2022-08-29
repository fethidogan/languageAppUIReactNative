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

// Redux
import { useSelector } from "react-redux"

const ChangePassword = ({ navigation }) => {
    // Redux
    const user = useSelector(state => state.user)

    // Change Password States
    const [oldPassword, setOldPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState("")

    // Create Password States
    const [createPassword, setCreatePassword] = useState(null)
    const [createPasswordConfirm, setCreatePasswordConfirm] = useState(null)
    const [createError, setCreateError] = useState("")

    // Regex
    // with digit version
    // var reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var reg = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Validate Existing Password and Change it
    const validateAndChange = () => {
        if (reg.test(newPassword) === false) {
            return setError("Please use\n Min 8 Characters, 1 Uppercase and 1 Symbol\n in your password")
        }

        if (newPassword !== confirmPassword) {
            return setError("Passwords didn't match!")
        }
        setError("")
    }

    // Validate New Created Password and Change it
    const createAndSetPassword = () => {
        if (reg.test(createPassword) === false) {
            return setCreateError("Please use\n Min 8 Characters, 1 Uppercase and 1 Symbol\n in your password")
        }

        if (createPassword !== createPasswordConfirm) {
            return setCreateError("Passwords didn't match!")
        }
        setCreateError("")
    }



    return (
        <View style={styles.container}>

            {/* Change Password Title & back Button */}
            <TopTitle name={user.isPasswordSet ? "Change Password" : "Set Password"} navigation={navigation} backto="Settings" paddingTop={30} />

            {/* If user's password isn't set */}
            {user.isPasswordSet === false &&
                <>
                    {/* If user is authenticated with google or apple */}
                    <View style={{ paddingTop: 20 }}>
                        <View style={styles.emailInputContainer}>
                            {/* Create New Password */}
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
                                value={createPassword}
                                onChangeText={e => setCreatePassword(e)}
                            />

                            {/* Create Confirm Password */}
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
                                value={createPasswordConfirm}
                                onChangeText={e => setCreatePasswordConfirm(e)}
                            />
                            <Text style={{ fontFamily: "Montserrat_500Medium", textAlign: "center", fontSize: 16, color: colors.cancelRequest }}>{createError}</Text>
                            {/* Change Password Button*/}
                            <TouchableOpacity onPress={() => createAndSetPassword()}>
                                <View style={styles.registerButtonContainer}>
                                    <Text style={styles.registerText}>Create Password</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            }

            {/* If user's password is set */}
            {user.isPasswordSet === true &&
                <>
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
                            value={oldPassword}
                            onChangeText={e => setOldPassword(e)}

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
                            value={newPassword}
                            onChangeText={e => setNewPassword(e)}

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
                            value={confirmPassword}
                            onChangeText={e => setConfirmPassword(e)}
                        />

                    </View>

                    <Text style={{ fontFamily: "Montserrat_500Medium", textAlign: "center", fontSize: 16, color: colors.cancelRequest }}>{error}</Text>

                    {/* Change Password Button*/}
                    <TouchableOpacity onPress={() => validateAndChange()}>
                        <View style={styles.registerButtonContainer}>
                            <Text style={styles.registerText}>Change Password</Text>
                        </View>
                    </TouchableOpacity>
                </>
            }
        </View>
    )
}

export default ChangePassword