import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

function MemberDetails({navigation}) {
    return (

        <SafeAreaView>
            <Text style={{color:'white', fontSize:20}}>Welcome to MemberDetails Screen</Text>
            <Button title="Update Details" onPress={()=> navigation.navigate('MemberUpdateScreen')} />

       </SafeAreaView>
    );
};


export default MemberDetails;