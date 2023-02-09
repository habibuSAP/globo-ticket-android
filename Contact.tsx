import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


const Contact = ({navigation})=>{

    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPhoneNumber, setFormPhoneNumber] = useState('');
    const [formMessage, setFormMessage] = useState('');

    const submit = ()=> {
        if(!formName.trim() || !formEmail.trim() || !formMessage.trim()){
            Alert.alert('Please enter info in all required fields');
        }else{
            Alert.alert(`Thank you ${formName}`);
            navigation.navigate('Home');
        }
    }

    return (
        <View style={styles.form}>
            <Text style={styles.labels}> Name: *required </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={name => setFormName(name)}
                value={formName}
                autoCapitalize='words'
                selectTextOnFocus={true}
                placeholder='Enter your name'

           />
           <Text style={styles.labels}> Email: * required</Text>
           <TextInput
            style={styles.textInput}
            onChangeText={email => setFormEmail(email)}
            value={formEmail}
            selectTextOnFocus={true}
            placeholder='Enter your email'
          />
          <Text style={styles.labels}>Phone Number:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={phone => setFormPhoneNumber(phone)}
            value={formPhoneNumber}
            selectTextOnFocus={true}
            placeholder='Enter your phone number'
         />
         <Text style={styles.labels}>Message: *required</Text>
         <TextInput
            style={styles.multiLineText}
            onChangeText={message => setFormMessage(message)}
            value={formMessage}
            multiline={true}
            numberOfLines={3}
            selectTextOnFocus={true}
            placeholder='Enter your message, we loved to hear your opinions.'
        />
         <Button onPress={submit} color="#708090" title="Contact Us"/>
        </View>
    );


};
const styles = StyleSheet.create({
    form: {
        flexDirection: 'column',
        padding: 18
    },
    labels: {
        fontFamily: 'Ubuntu-Regular'
    },
    textInput: {
        borderWidth: 1,
        fontFamily: 'Ubuntu-Regular',
        width: '80%',
        paddingBottom: 15
    },
    multiLineText: {
        borderWidth: 1,
        fontFamily: 'Ubuntu-Regular',
        width: '90%',
        height: 120,
        marginBottom: 50
    }
});

export default Contact;