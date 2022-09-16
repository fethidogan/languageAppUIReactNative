// React
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, Modal, ScrollView } from 'react-native'

// Assets
import { styles } from "../../assets/styles/AfterSignOneStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements'
import EditSaveButton from '../../components/EditSaveButton';

// UUID
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

// Toast
import DropdownAlert from 'react-native-dropdownalert';

// Redux
import { useSelector, useDispatch } from "react-redux"
import { changeWantsToLearn } from '../../redux/userSlice';

const SignUpWantsToLearn = ({ navigation }) => {
    // Redux
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    // States
    const [selectedLang, setSelectedLang] = useState("")
    const [selectedProficiency, setSelectedProficiency] = useState("A1 - Beginner")
    const [checkedLevel, setCheckedlevel] = useState(1);
    const [modal, setModal] = useState(false);
    const [languagesArray, setLanguagesArray] = useState([])
    var langLevels = ['A1 - Beginner', 'A2 - Elementary', 'B1 - Intermediate', "B2 - Upper Intermediate", "C1 - Advanced", "C2 - Proficiency"]
    const [selectedLanguages, setSelectedLanguages] = useState(user.wantstolearn)

    // Load Initial Languages at first render
    useEffect(() => {
        var startLanguages = ['English', 'Spanish', 'German', "Portuguese", "French", "Arabic", "Hindi", "Turkish", "Italian"]
        setLanguagesArray(startLanguages)
        for (let i = 0; i < selectedLanguages.length; i++) {
            var filtered = startLanguages.filter(item => item !== selectedLanguages[i].language)
            startLanguages = filtered
            setLanguagesArray(startLanguages)
        }
    }, [])


    // Select language & Proficiency
    const selectProficiency = () => {
        setSelectedLanguages([...selectedLanguages, { language: selectedLang, proficiency: selectedProficiency.substring(0, 2) }])
        var filteredArray = languagesArray.filter(item => item !== selectedLang)
        setLanguagesArray(filteredArray)
        setSelectedLang("")
        setSelectedProficiency("A1 - Beginner")
        setCheckedlevel(1)
        setModal(false)
    }


    // Delete selected Language
    const deleteSelected = (language) => {
        setLanguagesArray([...languagesArray, language.language])
        var filteredArray = selectedLanguages.filter(item => item !== language)
        setSelectedLanguages(filteredArray)
    }


    // Save languageSelections
    const saveSelectedLangs = () => {
        if (selectedLanguages.length === 0) {
            return dropDownAlertRef.alertWithType('error', 'Error', "You should select at least a language");
        }
        dispatch(changeWantsToLearn(selectedLanguages))
        navigation.navigate("Home")
    }


    // Check Languages Selections
    const checkLanguageSelection = (item) => {
        if (selectedLanguages.length === 3) {
            return dropDownAlertRef.alertWithType('error', 'Error', "You can select Max 3 Languages");
        }
        setSelectedLang(item)
        setModal(true)
    }


    return (
        <View style={styles.container}>

            <View style={{ zIndex: 1 }}>
                <DropdownAlert
                    ref={(ref) => {
                        if (ref) {
                            dropDownAlertRef = ref;
                        }
                    }}
                />
            </View>

            <View>
                {/* Language Proficiency Modal */}
                <Modal
                    transparent={true}
                    visible={modal}
                    // geri basarsa a1 olarak ekle
                    onRequestClose={() => setModal(false)}
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <View style={styles.modalContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 10, marginBottom: 10 }}>
                            <Text style={styles.modalHeading}>Choose Proficiency</Text>
                        </View>

                        {/* Level Options */}
                        {langLevels.map((item, index) => (
                            <CheckBox
                                key={item}
                                title={item}
                                fontFamily={"Montserrat_500Medium"}
                                textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                                containerStyle={{ backgroundColor: 'white', borderWidth: 0, marginTop: -5 }}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                checked={checkedLevel === index + 1}
                                onPress={() => {
                                    setCheckedlevel(index + 1)
                                    setSelectedProficiency(item)
                                }}
                            />
                        ))}

                        {/* Save Button -- Modal */}
                        <TouchableOpacity onPress={() => selectProficiency()}>
                            <View style={styles.seeAllFeedbacksButton}>
                                <Text style={styles.seeAllFeedbacksText}>Save</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </Modal>

                {/* Language Options */}
                <View style={{ marginTop: 50, borderWidth: 1, borderColor: colors.mainBlue, marginHorizontal: 20, borderRadius: 10, maxHeight: 250 }}>
                    <ScrollView>
                        {languagesArray.map((item, index) => (
                            <TouchableOpacity key={uuidv4()} onPress={() => checkLanguageSelection(item)} >
                                <View >
                                    <Text
                                        style={{
                                            paddingHorizontal: 20,
                                            fontFamily: "Montserrat_600SemiBold",
                                            fontSize: 17,
                                            paddingTop: index === 0 ? 5 : 16,
                                            color: colors.textDark
                                        }}
                                    >{item}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* language - Level */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 40, marginTop: 20 }}>
                    <Text style={styles.nameText}>Language</Text>
                    <Text style={styles.nameText}>Proficiency</Text>
                </View>

                {/* Horizontal Line */}
                <View style={{ paddingTop: 1, backgroundColor: colors.textDark, marginHorizontal: 20, marginTop: 5, }}></View>


                {/* Selected Languages - Level */}
                {selectedLanguages.map((item, index) => (
                    <View key={uuidv4()} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 40, marginTop: 15 }}>
                        <View style={styles.languageButtonContainer}>
                            <Text style={styles.languageButtonText}>{item.language}</Text>
                            <TouchableOpacity onPress={() => deleteSelected(item)}>
                                <Icon
                                    name='close'
                                    size={25}
                                    color={colors.cancelRequest}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.proficiencyButtonContainer}>
                            <Text style={styles.languageButtonText}>{item.proficiency}</Text>
                        </View>
                    </View>
                ))}

                {/* Save Button */}
                <TouchableOpacity onPress={() => saveSelectedLangs()}>
                    <View style={{ paddingTop: 30 }}>
                        <EditSaveButton buttonText="Complete" />
                    </View>
                </TouchableOpacity>

            </View>

        </View >

    )
}

export default SignUpWantsToLearn