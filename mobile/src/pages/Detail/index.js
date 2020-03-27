
import React from 'react';
import {  Father }  from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá, ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', { style: currency, currency: 'BRL' }).format(incident.value)}`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Heroi no caso ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return(
        <View styles={styles.container}>
            <View styles={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Father name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>


            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.description}}</Text>
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: currency, currency: 'BRL' }).format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={style.heroTitle}>Salve o dia</Text>
                <Text style={style.heroTitle}>Seja o heroi desse caso.</Text>
                <Text style={style.heroDescription}>Entre em contato:</Text>
                <View style={styles.actons}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
}
