// React
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TextInput, Modal } from 'react-native'

// Assets
import { styles } from "../../assets/styles/AfterSignOneStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements'
import TopTitle from '../../components/TopTitle';

// Fixes
// 2- Save Button will be component

const EditWantsToLearn = ({ navigation }) => {
    const [page, setpage] = useState(3)
    const [checked, setChecked] = useState(1);
    const [checkedLevel, setCheckedlevel] = useState(1);
    const [modal, setModal] = useState(false);

    return (
        <View style={styles.container}>

            <>
                {/* Language Level Modal */}
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

                {/* Edit Languages and back button */}
                <TopTitle name="Languages" navigation={navigation} backto="EditProfile" paddingTop={30} />

                {/* Language Name Filtering Input */}
                <View style={styles.wishedInputContainer}>
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

                {/* Language Options */}
                <View style={{ marginTop: 10, borderWidth: 1, borderColor: colors.mainBlue, marginHorizontal: 20, borderRadius: 10 }}>
                    {['English', 'German', 'Spanish'].map((l, i) => (
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

                {/* Selected Language - Level */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 40, marginTop: 15 }}>
                    <View style={styles.languageButtonContainer}>
                        <Text style={styles.languageButtonText}>English </Text>
                        <Icon
                            name='close'
                            size={25}
                            color={colors.cancelRequest}
                        />
                    </View>
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

                {/* Save Button */}
                <TouchableOpacity onPress={() => navigation.navigate("Lobby")}>
                    <View style={styles.secondpageButtonContainer}>
                        <Text style={styles.registerText}>Save</Text>
                    </View>
                </TouchableOpacity>

            </>

        </View >

    )
}

export default EditWantsToLearn