import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Button from '../components/Button';

function Welcome(props) {

    function goToMemberSign(){
        props.navigation.navigate('MemberSignScreen');
    };

    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Miele Fitness Salonu</Text>
            <Button text='Uye Kaydi Olustur' onPress={goToMemberSign} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },

    header: {
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin:10,
    },
});
export default Welcome;