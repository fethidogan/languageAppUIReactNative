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


const ChangeEmail = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* Change Email Title & back Button */}
            <TopTitle name="Change Email" navigation={navigation} backto="Settings" paddingTop={30} />

            {/* Email Input */}
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
                // errorMessage='Error'
                />

            </View>

            {/* Change Mail Button*/}
            <View style={styles.registerButtonContainer}>
                <Text style={styles.registerText}>Change Mail</Text>
            </View>

            {/* Verify Pin Inputs */}
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 30 }}>

                <View>
                    <Input
                        inputStyle={{ color: colors.textDark }}
                        style={styles.verifyInput}
                        inputContainerStyle={{ width: 40 }}

                    />
                </View>
                <View>
                    <Input
                        inputStyle={{ color: colors.textDark }}
                        style={styles.verifyInput}
                        inputContainerStyle={{ width: 40 }}

                    />
                </View>
                <View>
                    <Input
                        inputStyle={{ color: colors.textDark }}
                        style={styles.verifyInput}
                        inputContainerStyle={{ width: 40 }}

                    />
                </View>
                <View>
                    <Input
                        inputStyle={{ color: colors.textDark }}
                        style={styles.verifyInput}
                        inputContainerStyle={{ width: 40 }}
                    />
                </View>

            </View>

            {/* Verify pin Button */}
            <View style={styles.registerButtonContainer}>
                <Text style={styles.registerText}>Verify Pin</Text>
            </View>

            {/* Mail changed text & Redirection in 3 seconds or show back button*/}
            <Text style={styles.mailChangedText}>Mail succesfully changed</Text>
            <View style={{ paddingHorizontal: 60 }}>
                <Text style={styles.willRedirectedText}>You will be redirected to lobby in <Text style={{ color: "red" }}>3</Text> seconds.</Text>
            </View>


        </View >

    )
}

export default ChangeEmail