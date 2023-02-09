import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import globoTickets from './TicketsDB';

const Tickets = ({navigation})=> {
    const ticketItem = ({item}) => {
        return (
            <View style={styles.tickets}>
                <View>
                    <Image style={styles.img} source={item.image}/>
                </View>
                <View>
                    <Text style={styles.ticketTitle}>
                        {item.event}
                    </Text>
                    <Text style={styles.ticketShortDescription}>
                        {item.shortDescription}
                    </Text>
                    <Text style={styles.ticketDescription} numberOfLines={2} ellipsizeMode='tail'>
                        {item.description}
                    </Text>
                    <Text style={styles.ticketPrice}>{item.price}</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Purchase', {ticketId: item.eventId})
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.ticketButton}>Get Ticket</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList data={globoTickets} renderItem={ticketItem} keyExtractor={(item)=>item.eventId} />
        </View>
    );

};
const styles = StyleSheet.create({
   container: {
    paddingTop: 15,
    paddingBottom: 15
   },
   tickets: {
    flexDirection: 'column'
   },
   img: {
    height: 180,
    width: '100%'
   },
   ticketTitle: {
        fontFamily: 'Ubuntu-Regular',
        fontWeight: 'bold',
        textAlign: 'center'
   },
   ticketShortDescription: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '600',
        padding: 5
   },
   ticketDescription: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    padding: 15
   },
   ticketPrice: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    padding:5
   },
   ticketButton: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 5
   },
   button: {
        textAlign: 'center',
        fontFamily: 'Ubuntu-Regular'
   }
});
export default Tickets;