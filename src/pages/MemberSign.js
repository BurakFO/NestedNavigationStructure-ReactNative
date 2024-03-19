import React, { useState } from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";

import Input from '../components/Input';
import Button from '../components/Button';


function MemberSign({ navigation }) {

    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    // console.log(userName);
    // console.log(userSurname);
    // console.log(userAge);
    // console.log(userMail);


    function handleSubmit() {

        if (!userName || !userSurname || !userMail || !userAge) {
            Alert.alert('Miele Fitness Salonu', 'Bilgiler bos birakilamaz!')
            return;
        }


        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
        };

        navigation.navigate('MemberResultScreen', { user });
        //burada {userObj:user} yazarak da ilerlenilebilir. Key yazmak okunabilirliği arttırır.


    };

    return (
        <SafeAreaView>
            <Input
                label='Üye Adı'
                placeholder={'Üye adını giriniz...'}
                onChangeText={setUserName}
            />

            <Input
                label='Üye Soyadı'
                placeholder={'Üye soyismini giriniz...'}
                onChangeText={setUserSurname}
            />

            <Input
                label='Üye Yaşı'
                placeholder={'Üye yaşını giriniz...'}
                onChangeText={setUserAge}
            />

            <Input
                label='Üye E-posta'
                placeholder={'Üye e-posta adresini giriniz...'}
                onChangeText={setUserMail}
            />

            <Button text='Kaydı Tamamla' onPress={handleSubmit} />
        </SafeAreaView>
    );
};

export default MemberSign;