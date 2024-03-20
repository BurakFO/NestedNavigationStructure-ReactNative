import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

function Member ({navigation}) {
    return (

        <SafeAreaView>
            <Text style={{color:'white', fontSize:20}}>Welcome to Member Screen</Text>
            <Button title="Go to Details" onPress={()=> navigation.navigate('MemberDetailScreen')} />
        </SafeAreaView>
    );
};


export default Member;