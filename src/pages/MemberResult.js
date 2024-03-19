import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import Button from '../components/Button';

function MemberResult({ route, navigation }) {
    console.log(route);

    const { user } = route.params;



    const handlePress = () => {
        navigation.navigate('WelcomeScreen');
    };


    return (
        <SafeAreaView>
            <Text style={styles.label} >Üye Adı: {user.userName} </Text>
            <Text style={styles.label} >Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label} >Üye Yaşı: {user.userAge}</Text>
            <Text style={styles.label} >Üye E-postası: {user.userMail}</Text>

            <Button text={'Basa don'} onPress={handlePress} />
        </SafeAreaView>



    )
};

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,

    },
});



export default MemberResult;