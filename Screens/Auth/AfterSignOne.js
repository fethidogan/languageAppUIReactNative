// React
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput, Modal } from 'react-native'

// Assets
import { styles } from "../../assets/styles/AfterSignOneStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements'

const AfterSignOne = ({ navigation }) => {
    const [page, setpage] = useState(4)
    const [checked, setChecked] = useState(1);
    const [checkedLevel, setCheckedlevel] = useState(1);
    const [modal, setModal] = useState(false);

    return (
        <View style={styles.container}>

            {/* First Page */}
            {page === 1 &&
                <>
                    {/* Name container */}
                    <View style={styles.nameInputContainer}>
                        <Text style={styles.nameText}>Name</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Please enter your name.'
                            placeholderTextColor='#66737C'
                            maxHeight={200}
                            minHeight={45}
                            enableScrollToCaret
                        />
                    </View>

                    {/* Age container */}
                    <View style={styles.ageInputContainer}>
                        <Text style={styles.nameText}>Age</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Please enter your age.'
                            placeholderTextColor='#66737C'
                            maxHeight={200}
                            minHeight={45}
                            enableScrollToCaret

                        />
                    </View>

                    {/* Gender Images */}
                    <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <View style={{
                            marginRight: 15,
                            alignItems: "center",
                            paddingTop: 10,
                            paddingBottom: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: colors.mainBlue
                        }}>
                            <Image source={require("../../assets/images/male-emoji.png")} style={styles.emojiImage} />
                            <Text style={styles.genderText}>Male</Text>
                        </View>
                        <View style={{ marginRight: 15, alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>
                            <Image source={require("../../assets/images/female-emoji.png")} style={styles.emojiImage} />
                            <Text style={styles.genderText}>Female</Text>
                        </View>
                    </View>

                    {/* Continue Button */}
                    <View style={styles.registerButtonContainer}>
                        <Text style={styles.registerText}>Continue</Text>
                    </View>

                </>
            }


            {/* Second page */}
            {page === 2 &&
                <>
                    {/* Native Language Filtering Input */}
                    <View style={styles.nameInputContainer}>
                        <Text style={styles.nameText}>Native Language</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Your native language Ex. English'
                            placeholderTextColor='#66737C'
                            maxHeight={200}
                            minHeight={45}
                            enableScrollToCaret
                        />
                    </View>

                    {/* Native Language Options */}
                    <View style={{ marginTop: 10, borderWidth: 1, borderColor: colors.mainBlue, marginHorizontal: 20, borderRadius: 10 }}>
                        {['English', 'German', 'Spanish', "French", "Arabic", "Russian", "Portuguese", "Turkish"].map((l, i) => (
                            <CheckBox
                                key={i}
                                title={l} // l is language text
                                fontFamily={"Montserrat_500Medium"}
                                textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, marginTop: -5 }}
                                checkedIcon="check-square-o"
                                uncheckedIcon="square-o"
                                checked={checked === i + 1}
                                onPress={() => setChecked(i + 1)}
                            />
                        ))}
                    </View>

                    {/* Continue Button */}
                    <View style={styles.secondpageButtonContainer}>
                        <Text style={styles.registerText}>Continue</Text>
                    </View>

                </>
            }

            {/* Third page */}
            {page === 3 &&
                <>
                    {/* Select Level Modal */}
                    <Modal
                        transparent={true}
                        visible={modal}
                        onRequestClose={() => setModal(false)}
                        style={{ justifyContent: "center", alignItems: "center" }}
                    >
                        <View style={styles.modalContainer}>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 10, marginBottom: 10 }}>
                                <Text style={styles.modalHeading}>Choose Level</Text>
                            </View>

                            {/* Level Options */}
                            {['A1 - Beginner', 'A2 - Elementary', 'B1 - Intermediate', "B2 - Upper Intermediate", "C1 - Advanced", "C2 - Proficiency"].map((l, i) => (
                                <CheckBox
                                    key={i}
                                    title={l}
                                    fontFamily={"Montserrat_500Medium"}
                                    textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                                    containerStyle={{ backgroundColor: 'white', borderWidth: 0, marginTop: -5 }}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checked={checkedLevel === i + 1}
                                    onPress={() => setCheckedlevel(i + 1)}
                                />
                            ))}
                            {/* Close Button */}
                            <TouchableOpacity onPress={() => setModal(false)}>
                                <View style={styles.seeAllFeedbacksButton}>
                                    <Text style={styles.seeAllFeedbacksText}>Close</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </Modal>

                    {/* Languages wish to learn Filtering Input*/}
                    <View style={styles.nameInputContainer}>
                        <Text style={styles.nameText}>Languages you wish to learn ?</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Please type language Ex. English'
                            placeholderTextColor='#66737C'
                            maxHeight={200}
                            minHeight={45}
                            enableScrollToCaret
                        />
                    </View>

                    {/* Languages wish to learn Options */}
                    <View style={{ marginTop: 10, borderWidth: 1, borderColor: colors.mainBlue, marginHorizontal: 20, borderRadius: 10 }}>
                        {['English', 'German', 'Spanish', "French"].map((l, i) => (
                            <CheckBox
                                key={i}
                                title={l} // l is language text
                                fontFamily={"Montserrat_500Medium"}
                                textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, marginTop: -5 }}
                                checkedIcon="check-square-o"
                                uncheckedIcon="square-o"
                                checked={checked === i + 1}
                                onPress={() => setChecked(i + 1)}
                            />
                        ))}
                    </View>

                    {/* language - Level */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 40, marginTop: 20 }}>
                        <Text style={styles.nameText}>Language</Text>
                        <Text style={styles.nameText}>Level</Text>
                    </View>

                    {/* Horizontal Line */}
                    <View style={{ paddingTop: 1, backgroundColor: colors.textDark, marginHorizontal: 20, marginTop: 5, }}></View>

                    {/* Individual Language - Level */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 40, marginTop: 15 }}>
                        <View style={styles.languageButtonContainer}>
                            <Text style={styles.languageButtonText}>English </Text>
                            <Icon
                                name='close'
                                size={25}
                                color={colors.cancelRequest}
                            />
                        </View>
                        {/* Pick Level Button */}
                        <TouchableOpacity onPress={() => setModal(true)}>
                            <View style={styles.languageButtonContainer}>
                                <Text style={styles.languageButtonText}>Pick Level </Text>
                                <Icon
                                    name='chevron-right'
                                    size={25}
                                    color="white"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.secondpageButtonContainer}>
                        <Text style={styles.registerText}>Continue</Text>
                    </View>


                </>
            }

            {/* Fourth page */}
            {page === 4 &&
                <>
                    {/* Location Filtering Input */}
                    <View style={styles.firstpageLocInputContainer}>
                        <Text style={styles.nameText}>Your Location</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Type Location Ex. Germany'
                            placeholderTextColor='#66737C'
                            maxHeight={200}
                            minHeight={45}
                            enableScrollToCaret
                        />
                    </View>

                    {/* Location Options */}
                    <View style={{ marginTop: 10, borderWidth: 1, borderColor: colors.mainBlue, marginHorizontal: 20, borderRadius: 10 }}>
                        {['United Kingdom', 'Germany', 'Spain', "Ukraine", "Russia", "Netherlands"].map((l, i) => (
                            <CheckBox
                                key={i}
                                title={l} // l is language text
                                fontFamily={"Montserrat_500Medium"}
                                textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, marginTop: -5 }}
                                checkedIcon="check-square-o"
                                uncheckedIcon="square-o"
                                checked={checked === i + 1}
                                onPress={() => setChecked(i + 1)}
                            />
                        ))}
                    </View>

                    {/* Finish Register */}
                    <TouchableOpacity onPress={() => navigation.navigate("Lobby")}>
                        <View style={styles.secondpageButtonContainer}>
                            <Text style={styles.registerText}>Finish Sign Up</Text>
                        </View>
                    </TouchableOpacity>

                </>
            }


        </View >

    )
}

export default AfterSignOne