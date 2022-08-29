import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

// Navigation
import { Home } from './Screens/TabNavigation/Home';  // --> Bottom Tab navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Other Users Screens
import UserProfile from './Screens/UserProfile';

// Settings Screens
import Settings from './Screens/Settings/MySettings';
import ChangeEmail from './Screens/Settings/ChangeEmail';
import ChangePassword from './Screens/Settings/ChangePassword';
import InviteFriends from './Screens/Settings/InviteFriends';
import Faq from './Screens/Settings/Faq';
import ReportBug from './Screens/Settings/ReportBug';
import DeleteAccount from './Screens/Settings/DeleteAccount';

// Edit Screens
import EditProfile from './Screens/EditUser/EditProfile';
import EditName from './Screens/EditUser/EditName';
import EditAbout from './Screens/EditUser/EditAbout';
import EditAge from './Screens/EditUser/EditAge';
import EditGender from './Screens/EditUser/EditGender';
import EditNativeLang from './Screens/EditUser/EditNativeLang';
import EditWantsToLearn from './Screens/EditUser/EditWantsToLearn';
import EditLocation from './Screens/EditUser/EditLocation';

// Authentication Screens
import Register from './Screens/Auth/Register';
import SignIn from './Screens/Auth/SignIn';
import AfterSignOne from './Screens/Auth/AfterSignOne';

// User Feedback & Leaving Feedback Screens
import AllFeedbacks from './Screens/Feedbacks/AllFeedbacks';
import ConversationFeedback from './Screens/Feedbacks/ConversationFeedback';

// While In Conversation Screen
import InConversation from './Screens/InConversation';

// Auth
import ResetPassword from './Screens/Auth/ResetPassword';
import EmailSent from './Screens/Auth/EmailSent';

// Redux
import store from './redux/store';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
let persistor = persistStore(store);


const Stack = createNativeStackNavigator();

export default function App() {

  // Fonts
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  // App Loading For fonts
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (


    // <PersistGate loading={null} persistor={persistor}>
    //   <Provider store={store}>

    //     <NavigationContainer >
    //       <Stack.Navigator >

    //         <Stack.Screen
    //           name="Home"
    //           component={Home}
    //           options={{ headerShown: false }}

    //         />

    //         <Stack.Screen
    //           name="Profile"
    //           component={UserProfile}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="AllFeedbacks"
    //           component={AllFeedbacks}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="Settings"
    //           component={Settings}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="ChangeEmail"
    //           component={ChangeEmail}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="ChangePassword"
    //           component={ChangePassword}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="ReportBug"
    //           component={ReportBug}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="DeleteAccount"
    //           component={DeleteAccount}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="Faq"
    //           component={Faq}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="InviteFriends"
    //           component={InviteFriends}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="EditProfile"
    //           component={EditProfile}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="InConversation"
    //           component={InConversation}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="AfterSignOne"
    //           component={AfterSignOne}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="ConversationFeedback"
    //           component={ConversationFeedback}
    //           options={{ headerShown: false }}
    //         />
    //         <Stack.Screen
    //           name="EditName"
    //           component={EditName}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="EditAbout"
    //           component={EditAbout}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="EditAge"
    //           component={EditAge}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="EditGender"
    //           component={EditGender}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="EditNativeLang"
    //           component={EditNativeLang}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="EditWantsToLearn"
    //           component={EditWantsToLearn}
    //           options={{ headerShown: false }}
    //         />

    //         <Stack.Screen
    //           name="EditLocation"
    //           component={EditLocation}
    //           options={{ headerShown: false }}
    //         />


    //       </Stack.Navigator>
    //     </NavigationContainer>

    //   </Provider>
    // </PersistGate>

    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <AfterSignOne />
      </Provider>
    </PersistGate>

    // <SignIn />
    // <ResetPassword />
    // <EmailSent />
  )

}

