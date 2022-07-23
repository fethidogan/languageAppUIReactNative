import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from "../assets/styles/AllFeedbacksStyles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../assets/colors/colors';


const AllFeedbacks = ({ navigation }) => {
    return (
        <View style={styles.container}>

            {/* Navigate and user text */}
            <View style={{ flexDirection: "row", paddingTop: 50 }}>
                <View style={{ flex: 0.1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
                        <Icon name='chevron-left' size={50} color={colors.textDark} />
                    </TouchableOpacity>
                </View>
                {/* User Name and Feedback Count*/}
                <View style={styles.userNameFeedback}>
                    <Text style={styles.profileNameText}>Mary Neagen</Text>
                    <Text style={styles.reviewCountText}>10 Feedbacks</Text>
                </View>
            </View>

            <ScrollView>

                {/* Feedbacks */}
                <View style={styles.feedbackContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.feedbackAvatarShadow}>
                            <Image source={require("../assets/images/mary.png")} style={styles.feedbackAvatarImage} />
                        </View>
                        {/* Commenter Name and comment */}
                        <View style={{ flexDirection: "column", width: 225, paddingLeft: 5 }}>
                            <Text style={styles.feedbackSender}>Nick Hon</Text>
                            <Text style={styles.feedbackText}>this was an super chat with an very nice person. I hope we can meet again.</Text>
                        </View>
                    </View>
                    {/* Rating */}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name='grade' size={30} color={colors.ratingColor} />
                        <Text style={styles.feedbackratingNum}>4</Text>
                    </View>
                </View>

                <View style={styles.feedbackContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.feedbackAvatarShadow}>
                            <Image source={require("../assets/images/mariana.png")} style={styles.feedbackAvatarImage} />
                        </View>
                        {/* Commenter Name and comment */}
                        <View style={{ flexDirection: "column", width: 225, paddingLeft: 5 }}>
                            <Text style={styles.feedbackSender}>Mariana holanda</Text>
                            <Text style={styles.feedbackText}>No Comment Left.</Text>
                        </View>
                    </View>
                    {/* Rating */}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name='grade' size={30} color={colors.ratingColor} />
                        <Text style={styles.feedbackratingNum}>5</Text>
                    </View>
                </View>

                <View style={styles.feedbackContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.feedbackAvatarShadow}>
                            <Image source={require("../assets/images/mariana.png")} style={styles.feedbackAvatarImage} />
                        </View>
                        {/* Commenter Name and comment */}
                        <View style={{ flexDirection: "column", width: 225, paddingLeft: 5 }}>
                            <Text style={styles.feedbackSender}>Mariana holanda</Text>
                            <Text style={styles.feedbackText}>this is the one of the best chat i did.</Text>
                        </View>
                    </View>
                    {/* Rating */}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name='grade' size={30} color={colors.ratingColor} />
                        <Text style={styles.feedbackratingNum}>5</Text>
                    </View>
                </View>


                <View style={{ paddingBottom: 40 }}></View>

            </ScrollView>

        </View>

    )
}

export default AllFeedbacks