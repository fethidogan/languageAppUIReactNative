import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import FriendRequests from './components/FriendRequests';
import MyFriends from './components/MyFriends';
import UserProfile from './components/UserProfile';
import AllFeedbacks from './components/AllFeedbacks';
import Settings from './components/Settings';
import Lobby from './components/Lobby';
import MyProfile from './components/MyProfile';
import ChangeEmail from './components/ChangeEmail';
import Register from './components/Register';
import SignIn from './components/SignIn';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from './assets/colors/colors';
import ChangePassword from './components/ChangePassword';
import ReportBug from './components/ReportBug';
import DeleteAccount from './components/DeleteAccount';
import Faq from './components/Faq';
import InviteFriends from './components/InviteFriends';
import EditProfile from './components/EditProfile';
import InConversation from './components/InConversation';
import AfterSignOne from './components/AfterSignOne';
import ConversationFeedback from './components/ConversationFeedback';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
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


export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer >
      <Stack.Navigator >

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}

        />

        <Stack.Screen
          name="Profile"
          component={UserProfile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AllFeedbacks"
          component={AllFeedbacks}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ChangeEmail"
          component={ChangeEmail}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ReportBug"
          component={ReportBug}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DeleteAccount"
          component={DeleteAccount}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Faq"
          component={Faq}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="InviteFriends"
          component={InviteFriends}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="InConversation"
          component={InConversation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AfterSignOne"
          component={AfterSignOne}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ConversationFeedback"
          component={ConversationFeedback}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    // <FriendRequests />
    // <MyFriends/>
    // <Settings />
    // <Register />
    // <SignIn />
  )

}

