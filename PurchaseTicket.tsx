import React, {useState} from 'react';
import {View,
        Text,
        StyleSheet,
        TextInput,
        Alert,
        Image,
        TouchableOpacity} from 'react-native';

import globoTickets from './TicketsDB';


const PurchaseTicket =({navigation, route })=>{
    const [ticketQuantity, setTicketQuantity] = useState('1');
    const { ticketId} = route.params;
    const selectedEvent = globoTickets.find(tickets => tickets.eventId === ticketId);

    const purchase = ()=> {
        let price = selectedEvent.price * ticketQuantity;
        Alert.alert(`Your total cost is: ${price}`);
        navigation.navigate('Home');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedEvent.event}</Text>
            <Image style={styles.ticketImage} source={selectedEvent.image}/>
            <Text style={styles.shortDescriptionLabel}>{selectedEvent.shortDescription}</Text>
            <Text style={styles.descriptionText}>{selectedEvent.description}</Text>
            <View style={styles.purchaseRow}>
                <Text style={styles.shortDescriptionLabel}>Quantity: </Text>
                <TextInput
                    style={styles.quantityInput}
                    onChangeText={quantity => setTicketQuantity(quantity)}
                    value={ticketQuantity}
                    selectTextOnFocus={true}
                    keyboardType='numeric'
               />
            </View>
            <Text style={styles.price}> Total Price: ${selectedEvent.price * ticketQuantity}</Text>
            <TouchableOpacity
                onPress={purchase}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10
    },
    purchaseRow:{
        flexDirection: 'row'
    },
    price: {
        fontFamily: 'Ubuntu-Regular',
        paddingTop: 5,
        paddingBottom: 10
    },
    shortDescriptionLabel: {
        fontFamily: 'Ubuntu-Regular',
        paddingTop: 5,
        textAlignVertical: 'center'
    },
    ticketImage: {
        width: '100%',
        height: 180
    },
    descriptionText: {
        textAlign: 'left',
        fontFamily: 'Ubuntu-Light',
        fontWeight: '600',
        padding: 10
    },
    title: {
        fontFamily: 'Ubuntu-Regular',
        paddingBottom: 10
    },
    quantityInput: {
        borderBottomWidth: 1,
        fontFamily: 'Ubuntu-Regular',
        height: 38,
        width: 40,
        marginLeft: 25
    },
    button: {
        borderTopWith: 1,
        borderBottomWidth: 1,
        width: '60%'
    },
    buttonText: {
        fontFamily: 'Ubuntu-Regular',
        textAlign: 'center',
        padding: 5
    }
});

export default PurchaseTicket;