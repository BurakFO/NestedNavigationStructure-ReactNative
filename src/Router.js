import React, { Profiler, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//Member Screens
import Member from "./pages/member/Member";
import MemberDetail from "./pages/member/MemberDetail";
import MemberUpdate from "./pages/member/MemberUpdate";

//Profile Screens
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile/ProfileEdit";






const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MemberStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="MemberScreen" component={Member} />
            <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
            <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate} />
        </Stack.Navigator>
    );
};

const ProfileStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={Profile} />
            <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
        </Stack.Navigator>
    );
};

function App() {

    return (
        <NavigationContainer theme={DarkTheme}>
            <Tab.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Tab.Screen name="MemberStack" component={MemberStack}  />
                <Tab.Screen name="ProfileStack" component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;