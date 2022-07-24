// React
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View, Linking } from 'react-native'

// Assets
import { styles } from "../../assets/styles/SettingsStyles"
import { colors } from '../../assets/colors/colors';

// Native Elements
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Switch } from '@rneui/themed';
import TopTitle from '../../components/TopTitle';

// Fixes
// 1- Settings Title & back Button will turn into component
// 2- Logout and social media will be component

const Settings = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>

            {/* Settings title and back button */}
            <TopTitle name="Settings" navigation={navigation} backto="MyProfile" paddingTop={30} />

            <ScrollView>

                {/* Change Email */}
                <TouchableOpacity onPress={() => navigation.navigate("ChangeEmail")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 }}>

                        <View>
                            <Icon name='mail-outline' size={30} color={colors.mainBlue} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.settingSubTitleText}>Change Email</Text>
                            <Text style={styles.settingSubTitleDescText}>mytest@gmail.com</Text>
                        </View>
                        <View>
                            <Icon name='chevron-right' size={30} color={colors.mainBlue} />
                        </View>

                    </View>
                </TouchableOpacity>

                {/* Change Password */}
                <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 }}>

                        <View>
                            <Icon name='lock' size={30} color={colors.mainBlue} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.settingSubTitleText}>Change Password</Text>
                            <Text style={styles.settingSubTitleDescText}>***************</Text>
                        </View>
                        <View>
                            <Icon name='chevron-right' size={30} color={colors.mainBlue} />
                        </View>

                    </View>
                </TouchableOpacity>

                {/* Invite Friends */}
                <TouchableOpacity onPress={() => navigation.navigate("InviteFriends")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 }}>

                        <View>
                            <Icon name='group-add' size={30} color={colors.mainBlue} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.settingSubTitleText}>Invite Friends</Text>
                            <Text style={styles.settingSubTitleDescText}>Invite your friends and get premium membership.</Text>
                        </View>
                        <View>
                            <Icon name='chevron-right' size={30} color={colors.mainBlue} />
                        </View>

                    </View>
                </TouchableOpacity>

                {/* Rate App */}
                <TouchableOpacity onPress={() => Linking.openURL("https://play.google.com/store/apps/details?id=com.netflix.mediaclient&hl=tr&gl=US")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 }}>

                        <View>
                            <Icon name='star-outline' size={30} color={colors.mainBlue} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.settingSubTitleText}>Rate App</Text>
                        </View>
                        <View>
                            <Icon name='chevron-right' size={30} color={colors.mainBlue} />
                        </View>

                    </View>
                </TouchableOpacity>

                {/* Notification */}
                <TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 }}>

                        <View>
                            <Icon name='notifications' size={30} color={colors.mainBlue} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.settingSubTitleText}>Notifications</Text>
                        </View>
                        <View>
                            <Switch
                                value={checked}
                                onValueChange={(value) => setChecked(value)}
                            />
                        </View>

                    </View>
                </TouchableOpacity>


                {/* FAQ */}
                <TouchableOpacity onPress={() => navigation.navigate("Faq")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 }}>

                        <View>
                            <Icon name='question-answer' size={30} color={colors.mainBlue} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.settingSubTitleText}>FAQ</Text>
                        </View>
                        <View>
                            <Icon name='chevron-right' size={30} color={colors.mainBlue} />
                        </View>

                    </View>
                </TouchableOpacity>

                {/* Report Bug */}
                <TouchableOpacity onPress={() => navigation.navigate("ReportBug")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 }}>

                        <View>
                            <Icon name='bug-report' size={30} color={colors.mainBlue} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.settingSubTitleText}>Report Bug</Text>
                        </View>
                        <View>
                            <Icon name='chevron-right' size={30} color={colors.mainBlue} />
                        </View>

                    </View>
                </TouchableOpacity>

                {/* Delete Account */}
                <TouchableOpacity onPress={() => navigation.navigate("DeleteAccount")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 }}>

                        <View>
                            <Icon name='delete' size={30} color={colors.mainBlue} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.settingSubTitleText}>Delete Account</Text>
                        </View>
                        <View>
                            <Icon name='chevron-right' size={30} color={colors.mainBlue} />
                        </View>

                    </View>
                </TouchableOpacity>

                {/* Logout Button */}
                <TouchableOpacity>
                    <View style={styles.logoutButton}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </View>
                </TouchableOpacity>

                {/* Social Media Accounts */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, marginTop: 30 }}>
                    <Text style={styles.followUsText}>Follow Us</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image source={require("../../assets/images/discord-logo.png")} style={{ width: 30, height: 30, marginRight: 15 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../assets/images/facebook-logo.png")} style={{ width: 30, height: 30, marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../assets/images/twitter-logo.png")} style={{ width: 40, height: 40, marginRight: 5 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../assets/images/instagram-logo.png")} style={{ width: 40, height: 40 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Bottom Padding */}
                <View style={{ paddingBottom: 30 }}></View>

            </ScrollView>
        </View>

    )
}

export default Settings