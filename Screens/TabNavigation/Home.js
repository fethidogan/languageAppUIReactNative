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
const Tab = createBottomTabNavigator();

export function Home() {
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
                    <Icon name="notifications" color={color} size={30} />
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
