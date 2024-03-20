import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

function Profile({ navigation }) {
    return (

        <SafeAreaView>
            <Text style={{ color: 'white', fontSize: 20 }}>Welcome to Profile Screen</Text>
            <Button title="Update Profile" onPress={()=> navigation.navigate('ProfileEditScreen')} />

        </SafeAreaView>
    );
};


export default Profile;