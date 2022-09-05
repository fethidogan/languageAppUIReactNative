// React
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput, Modal } from 'react-native'

// Assets
import { styles } from "../../assets/styles/AfterSignOneStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements'


const SignUpUserDetails = () => {
    // Name States
    const [username, setUsername] = useState("")
    const [nameError, setNameError] = useState("")

    // Age States
    const [age, setAge] = useState(null)
    const [ageError, setAgeError] = useState("")

    // Gender States
    const [gender, setGender] = useState("Male")


    // Handle Name Change
    const handleNameChange = (e) => {
        // Regex
        var newName = e.replace(/[^a-z0-9_]/g, "")
        if (newName.length > 6) {
            setNameError("")
        }
        setUsername(newName)
    }

    // Handle Age Change
    const handleAgeChange = (e) => {
        var newAge = e.replace(/[^0-9]/g, "")
        if (parseInt(newAge, 10) < 12) {
            setAgeError("Age can't be smaller than 12")
        } else {
            setAgeError("")
        }
        setAge(newAge)
    }

    // Go To Second Page
    const goToSecondPage = () => {
        if (username.length < 6) {
            return setNameError("Username length can't be less than 6")
        }
        if (age === null) {
            return setAgeError("Age can't be blank")
        }
        if (parseInt(age, 10) < 12) {
            return setAgeError("Age can't be smaller than 12")
        }
        
    }

    return (
        <>
            {/* Username container */}
            <View style={styles.nameInputContainer}>
                <Text style={styles.nameText}>Username</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Please enter your name.'
                    placeholderTextColor='#66737C'
                    autoCapitalize='none'
                    maxHeight={200}
                    minHeight={45}
                    maxLength={25}
                    value={username}
                    onChangeText={e => handleNameChange(e)}
                    enableScrollToCaret
                />
            </View>

            <Text style={{ paddingHorizontal: 20, color: colors.cancelRequest, marginTop: 5 }}>{nameError}</Text>

            {/* Age container */}
            <View style={styles.ageInputContainer}>
                <Text style={styles.nameText}>Age</Text>
                <Input
                    placeholder='Your Age'
                    leftIcon={
                        <IonIcon
                            name='calendar'
                            size={30}
                            color={colors.mainBlue}
                        />
                    }
                    value={age}
                    maxLength={2}
                    keyboardType="number-pad"
                    onChangeText={handleAgeChange}
                    inputStyle={{ color: colors.textDark }}
                    style={styles.emailInput}
                    placeholderTextColor={colors.mainBlue}
                />
            </View>
            <Text style={{ paddingHorizontal: 20, color: colors.cancelRequest, marginTop: -15 }}>{ageError}</Text>

            <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>


                {/* Male Image */}
                <TouchableOpacity onPress={() => setGender("Male")}>
                    <View style={{
                        marginRight: 15,
                        alignItems: "center",
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderWidth: gender === "Male" ? 1 : 0,
                        borderRadius: 10,
                        borderColor: colors.mainBlue,
                        padding: 5
                    }}>
                        <Image source={require("../../assets/images/male-emoji.png")} style={styles.emojiImage} />
                        <Text style={styles.genderText}>Male</Text>
                    </View>
                </TouchableOpacity>

                {/* Female Image */}
                <TouchableOpacity onPress={() => setGender("Female")}>
                    <View style={{
                        marginRight: 15,
                        alignItems: "center",
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderWidth: gender === "Female" ? 1 : 0,
                        borderRadius: 10,
                        borderColor: colors.mainBlue,
                        padding: 5
                    }}>
                        <Image source={require("../../assets/images/female-emoji.png")} style={styles.emojiImage} />
                        <Text style={styles.genderText}>Female</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Continue Button */}
            <TouchableOpacity onPress={() => goToSecondPage()} style={{ marginTop: 50 }} >
                <View style={styles.registerButtonContainer}>
                    <Text style={styles.registerText}>Continue</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default SignUpUserDetails