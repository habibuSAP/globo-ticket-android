import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';

const Menu = ()=>{

    const navigation = useNavigation();
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={()=> navigation.navigate('Tickets')}
                                style={styles.button}
            >
                <Text style={styles.textButton}>
                    Event
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Contact')} style={styles.button}>
                <Text style={styles.textButton}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('News')} style={styles.button}>
                <Text style={styles.textButton}>News</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row'
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginRight: 5,
        marginLeft: 5
    },
    textButton: {
        fontFamily: 'Ubuntu-Regular'
    }
});
export default Menu;