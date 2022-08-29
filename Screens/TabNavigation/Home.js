// Assets
import { colors } from "../../assets/colors/colors";

// Screens
import Lobby from "../Lobby";
import MyFriends from "../MyFriends";
import FriendRequests from "../FriendRequests";
import MyProfile from "../MyProfile";

// Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

// Tab navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, View } from "react-native";
const Tab = createBottomTabNavigator();

// Redux
import { useSelector, useDispatch } from "react-redux"

export function Home() {
    const user = useSelector(state => state.user)


    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, animationEnabled: false,
            tabBarLabelStyle: {
                marginBottom: 3,
                fontSize: 11,
                fontFamily: "Montserrat_300Light",
                color: colors.textDark
            },
            tabBarStyle: { height: 55 }
        }}>
            <Tab.Screen name="Lobby" component={Lobby} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="meeting-room" color={color} size={30} />
                )
            }} />
            <Tab.Screen name="Friends" component={MyFriends} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="people" color={color} size={30} />
                ),
            }} />
            <Tab.Screen name="Requests" component={FriendRequests} options={{
                tabBarIcon: ({ color }) => (
                    <View style={{ flexDirection: "row" }}>
                        <Icon name="notifications" color={color} size={30} />
                        {user.friendRequests.length > 0 &&
                            <View style={{ marginLeft: -15, height: 25, width: 25, backgroundColor: colors.mainBlue, justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
                                <Text style={{ fontSize: 15, color: "white" }}>{user.friendRequests.length}</Text>
                            </View>
                        }
                    </View>
                ),
            }} />
            <Tab.Screen name="MyProfile" component={MyProfile} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="person" color={color} size={30} />
                ),
            }} />
        </Tab.Navigator>
    );
}
