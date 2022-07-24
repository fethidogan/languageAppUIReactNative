// React
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Modal } from 'react-native'

// Assets
import { styles } from "../assets/styles/LobbyStyles"
import { colors } from '../assets/colors/colors';

// Native Elements
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';

// Slider & Gradient
import { RangeSlider } from '@sharcoux/slider'
import { LinearGradient } from 'expo-linear-gradient';


const Lobby = ({ navigation }) => {
    const [langmodalVisible, setLangModalVisible] = useState(false);
    const [lobbySettingsModal, setLobbySettingsModal] = useState(false);
    const [inviteModal, setInviteModal] = useState(false);
    const [ageRange, setAgeRange] = useState([16, 85]);
    const [checked, setChecked] = useState(1);
    const [gender, setGender] = useState(1);

    return (
        <View style={styles.container}>
            {/* Language Modal */}
            <Modal
                transparent={true}
                visible={langmodalVisible}
                onRequestClose={() => setLangModalVisible(false)}
                style={{ justifyContent: "center", alignItems: "center" }}
            >
                <View style={styles.modalContainer}>
                    {/* Choose Language Text */}
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 10, marginBottom: 10 }}>
                        <Text style={styles.modalHeading}>Choose Language</Text>

                    </View>

                    {/* Available languages --> Will be Scrollable */}
                    {['English', 'German', 'Spanish', "French", "Arabic", "Russian", "Portuguese", "Turkish"].map((l, i) => (
                        <CheckBox
                            key={i}
                            title={l}
                            fontFamily={"Montserrat_500Medium"}
                            textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                            containerStyle={{ backgroundColor: 'white', borderWidth: 0, marginTop: -5 }}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checked={checked === i + 1}
                            onPress={() => setChecked(i + 1)}
                        />
                    ))}

                    {/* Select language button */}
                    <TouchableOpacity onPress={() => setLangModalVisible(false)}>
                        <View style={styles.seeAllFeedbacksButton}>
                            <Text style={styles.seeAllFeedbacksText}>Select Language</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </Modal>

            {/* Settings Modal */}
            <Modal
                transparent={true}
                visible={lobbySettingsModal}
                onRequestClose={() => setLobbySettingsModal(false)}
                style={{ justifyContent: "center", alignItems: "center" }}
            >
                <View style={styles.modalContainer}>
                    {/* Filter Title */}
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 10, marginBottom: 10 }}>
                        <Text style={styles.modalHeading}>Filter</Text>
                    </View>
                    {/* Age Between Text */}
                    <Text style={styles.ageBetweenText}>Age Between : {ageRange[0]} - {ageRange[1]}</Text>

                    {/* Age Slider */}
                    <View style={{ alignItems: "center", marginBottom: 10 }}>
                        <RangeSlider
                            range={[ageRange[0], ageRange[1]]}     // butonların hangi konumda durdugu
                            minimumValue={16}
                            maximumValue={85}
                            step={1}
                            crossingAllowed={false}
                            outboundColor={colors.cancelRequest}
                            inboundColor={colors.mainBlue}
                            thumbTintColor='darkcyan'
                            trackHeight={4}
                            thumbSize={25}
                            style={{ width: 250 }}
                            onSlidingStart={(e) => setAgeRange(e)}
                            onSlidingComplete={(e) => setAgeRange(e)}
                        />
                    </View>

                    {/* Gender Title */}
                    <Text style={styles.genderText}>Gender</Text>
                    {/* Gender Options */}
                    <View style={{ marginTop: 8, marginBottom: 10 }}>
                        {['All', 'Female', 'Male'].map((l, i) => (
                            <CheckBox
                                key={i}
                                title={l}
                                fontFamily={"Montserrat_500Medium"}
                                textStyle={{ color: colors.textDark, fontSize: 15, fontWeight: "normal" }}
                                containerStyle={{ backgroundColor: 'white', borderWidth: 0, marginTop: -5 }}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                checked={gender === i + 1}
                                onPress={() => setGender(i + 1)}
                            />
                        ))}
                    </View>
                    {/* Apply Filter Button */}
                    <TouchableOpacity onPress={() => setLobbySettingsModal(false)}>
                        <View style={styles.seeAllFeedbacksButton}>
                            <Text style={styles.seeAllFeedbacksText}>Apply Filter</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </Modal>

            {/* Invite Modal --> When Someone Invites you */}
            <Modal
                transparent={true}
                visible={inviteModal}
                style={{ justifyContent: "center", alignItems: "center" }}
            >

                <View style={styles.inviteModalContainer}>
                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#DDD6F3', '#FFDDE1', '#FFFFFF']}
                        style={{ minWidth: 300, borderRadius: 20, alignItems: "center" }}
                    >
                        {/* Inviter Information  */}
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            {/* User image */}
                            <Image source={require("../assets/images/mary.png")} style={styles.modalAvatarImage} />

                            {/* User Details */}
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={styles.userName}>mary_neagendaxew</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={styles.countryName}>United States </Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Icon
                                            name='grade'
                                            size={25}
                                            color="#FFD700"
                                        />
                                        <Text style={styles.rating}>4.9</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={styles.ageGender}>22 / Female</Text>
                                    <Text style={styles.ageGender}>3 Talks</Text>
                                </View>

                            </View>


                        </View>

                        <Text style={styles.wantsToTalkText}>Wants to talk with you </Text>
                        {/* Accept or Deny Buttons */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity onPress={() => setInviteModal(false)}>
                                <View style={styles.inviteDenyButton}>
                                    <Text style={styles.inviteProposalText}>Deny</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.inviteAcceptButton}>
                                <Text style={styles.inviteProposalText}>Accept</Text>
                            </View>
                        </View>
                    </LinearGradient>

                </View>
            </Modal>



            <View style={styles.topContainer}>

                {/* Choose Language Modal */}
                <TouchableOpacity onPress={() => setLangModalVisible(true)}>
                    <View style={styles.chooseLanguage}>
                        <Text style={styles.chooseLanguageText}>Choose Language</Text>
                    </View>
                </TouchableOpacity>

                {/* Selected Language Text*/}
                <View style={styles.selectedLanguageContainer}>
                    <Text style={styles.selectedLanguageText}>English</Text>
                </View>

                {/* Filtering Modal */}
                <View style={styles.optionContainer}>
                    <TouchableOpacity onPress={() => setLobbySettingsModal(true)}>
                        <Icon name='tune' size={35} color={colors.textDark} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Find Random Partner Button*/}
            <TouchableOpacity>
                <View style={styles.findPartnerContainer}>
                    <Icon
                        name='auto-fix-normal'
                        size={25}
                        color="white"
                    />
                    <Text style={styles.findPartnerText}>Find Partner</Text>
                </View>
            </TouchableOpacity>

            {/* Online Users Title*/}
            <Text style={styles.onlineUserText}>Online Users</Text>

            {/* Individual Online user List will Mapped */}
            <View style={styles.individualFriendContainer} >

                {/* Individual Online user COntainer */}
                <View style={styles.individualFriendLeftContainer}>
                    {/* User Info */}
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            {/* User Image */}
                            <Image source={require("../assets/images/mary.png")} style={styles.avatarImage} />

                            {/* User Details */}
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={styles.userName}>mary_neagendaxew</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={styles.countryName}>United States </Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Icon
                                            name='grade'
                                            size={25}
                                            color="#FFD700"
                                        />
                                        <Text style={styles.rating}>4.9</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={styles.ageGender}>22 / Female</Text>
                                    <Text style={styles.ageGender}>3 Talks</Text>
                                </View>

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Speak Now Button */}
                <View style={styles.individualFriendRightContainer}>
                    <TouchableOpacity onPress={() => alert("hey")}>
                        <View >
                            <Icon
                                name='phone'
                                size={40}
                                style={styles.speakCircle}
                            />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.callNow}>Speak Now</Text>
                </View>
                {/* Invite Button */}
                {/* <View style={styles.individualFriendRightContainer}>
                    <TouchableOpacity onPress={() => alert("hey")}>
                        <View >
                            <Icon
                                name='add'
                                size={40}
                                style={styles.inviteCircle}
                            />
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.callNow}>Invite</Text>
                </View> */}

            </View>



        </View >


    )
}

export default Lobby