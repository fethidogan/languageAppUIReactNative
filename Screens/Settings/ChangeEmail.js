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
import { timeOutThree } from '../../functions/timeoutThree';


const ChangeEmail = ({ navigation }) => {
    // Regular expression
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    // Page Number
    const [pageNumber, setPageNumber] = useState(1)

    // Email States
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    // Pin States
    const [pin, setPin] = useState({
        first: null,
        second: null,
        third: null,
        fourth: null
    })

    // Validate Email
    const validateEmail = () => {
        if (reg.test(email) === false) {
            return setError("Please enter valid email")
        }
        setError("")
        setPageNumber(2)
    }

    // Pin validation
    const validatePin = () => {
        setPageNumber(3)

    }


    return (
        <View style={styles.container}>

            {/* Change Email Title & back Button */}
            <TopTitle name="Change Email" navigation={navigation} backto="Settings" paddingTop={30} />

            {/* Email Input */}
            {pageNumber === 1 &&
                <>
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
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(e) => setEmail(e)}
                            inputStyle={{ color: colors.textDark }}
                            style={styles.emailInput}
                            placeholderTextColor={colors.mainBlue}
                            errorMessage={error}
                        />

                    </View>

                    {/* Change Mail Button*/}
                    <TouchableOpacity onPress={() => validateEmail()}>
                        <View style={styles.registerButtonContainer}>
                            <Text style={styles.registerText}>Change Mail</Text>
                        </View>
                    </TouchableOpacity>
                </>
            }

            {pageNumber === 2 &&
                <>
                    <Text style={{ textAlign: "center", fontFamily: "Montserrat_500Medium", fontSize: 18, color: colors.textDark }}>Please Check your email</Text>

                    {/* Verify Pin Inputs */}
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 30 }}>

                        <View>
                            <Input
                                inputStyle={{ color: colors.textDark }}
                                style={styles.verifyInput}
                                inputContainerStyle={{ width: 40 }}
                                value={pin.first}
                                onChangeText={e => setPin({ ...pin, first: e })}

                            />
                        </View>
                        <View>
                            <Input
                                inputStyle={{ color: colors.textDark }}
                                style={styles.verifyInput}
                                inputContainerStyle={{ width: 40 }}
                                value={pin.second}
                                onChangeText={e => setPin({ ...pin, second: e })}
                            />
                        </View>
                        <View>
                            <Input
                                inputStyle={{ color: colors.textDark }}
                                style={styles.verifyInput}
                                inputContainerStyle={{ width: 40 }}
                                value={pin.third}
                                onChangeText={e => setPin({ ...pin, third: e })}
                            />
                        </View>
                        <View>
                            <Input
                                inputStyle={{ color: colors.textDark }}
                                style={styles.verifyInput}
                                inputContainerStyle={{ width: 40 }}
                                value={pin.fourth}
                                onChangeText={e => setPin({ ...pin, fourth: e })}
                            />
                        </View>

                    </View>

                    {/* Verify pin Button */}
                    <TouchableOpacity onPress={() => validatePin()}>
                        <View style={styles.registerButtonContainer}>
                            <Text style={styles.registerText}>Verify Pin</Text>
                        </View>
                    </TouchableOpacity>

                </>
            }

            {pageNumber === 3 &&
                <>
                    {/* Mail changed text & Redirection in 3 seconds or show back button*/}
                    <Text style={styles.mailChangedText}>Mail succesfully changed</Text>
                    <View style={{ paddingHorizontal: 60 }}>
                        <Text style={styles.willRedirectedText}>You will be redirected to settings in <Text style={{ color: "red" }}>3</Text> seconds.</Text>
                    </View>
                    {/* navigate to settings after 3 seconds */}
                    {timeOutThree(navigation)}
                </>
            }

        </View >

    )
}

export default ChangeEmail