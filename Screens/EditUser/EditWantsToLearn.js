// React
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TextInput, Modal, ScrollView } from 'react-native'

// Assets
import { styles } from "../../assets/styles/AfterSignOneStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements'
import TopTitle from '../../components/TopTitle';
import EditSaveButton from '../../components/EditSaveButton';

// UUID
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const EditWantsToLearn = ({ navigation }) => {
    const [selectedLang, setSelectedLang] = useState("")
    const [selectedProficiency, setSelectedProficiency] = useState("A1 - Beginner")
    const [checkedLevel, setCheckedlevel] = useState(1);
    const [modal, setModal] = useState(false);
    const [languagesArray, setLanguagesArray] = useState(['English', 'Spanish', 'German', "Portuguese", "French", "Arabic", "Hindi", "Turkish", "Italian"])
    var langLevels = ['A1 - Beginner', 'A2 - Elementary', 'B1 - Intermediate', "B2 - Upper Intermediate", "C1 - Advanced", "C2 - Proficiency"]
    const [selectedLanguages, setSelectedLanguages] = useState([])

    // Select language & Proficiency
    const selectProficiency = () => {
        setSelectedLanguages([...selectedLanguages, { langName: selectedLang, level: selectedProficiency }])
        var filteredArray = languagesArray.filter(item => item !== selectedLang)
        setLanguagesArray(filteredArray)
        setSelectedLang("")
        setSelectedProficiency("A1 - Beginner")
        setCheckedlevel(1)
        setModal(false)
    }

    // Delete selected Language
    const deleteSelected = (language) => {
        setLanguagesArray([...languagesArray, language.langName])
        var filteredArray = selectedLanguages.filter(item => item !== language)
        setSelectedLanguages(filteredArray)
    }


    return (
        <View style={styles.container}>

            <>
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
                                key={uuidv4()}
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

                {/* Edit Languages and back button */}
                <TopTitle name="Languages" navigation={navigation} backto="EditProfile" paddingTop={30} />


                {/* Language Options */}
                <View style={{ marginTop: 10, borderWidth: 1, borderColor: colors.mainBlue, marginHorizontal: 20, borderRadius: 10, maxHeight: 250 }}>
                    <ScrollView>
                        {languagesArray.map((item, index) => (
                            <TouchableOpacity onPress={() => {
                                setSelectedLang(item)
                                setModal(true)
                            }} >
                                <View key={uuidv4()}>
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
                    <Text style={styles.nameText}>Level</Text>
                </View>

                {/* Horizontal Line */}
                <View style={{ paddingTop: 1, backgroundColor: colors.textDark, marginHorizontal: 20, marginTop: 5, }}></View>


                {/* Selected Languages - Level */}
                {selectedLanguages.map((item, index) => (
                    <View key={uuidv4()} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 40, marginTop: 15 }}>
                        <View style={styles.languageButtonContainer}>
                            <Text style={styles.languageButtonText}>{item.langName}</Text>
                            <TouchableOpacity onPress={() => deleteSelected(item)}>
                                <Icon
                                    name='close'
                                    size={25}
                                    color={colors.cancelRequest}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.proficiencyButtonContainer}>
                            <Text style={styles.languageButtonText}>{item.level}</Text>
                        </View>
                    </View>
                ))}

                {/* Save Button */}
                <View style={{ marginTop: 20 }}>
                    <EditSaveButton navigation={navigation} backto="EditProfile" buttonText="Save" />
                </View>

            </>

        </View >

    )
}

export default EditWantsToLearn