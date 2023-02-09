import React, {useState} from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View
} from 'react-native'

const CustomModal = ()=> {

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.centeredView}>
            <Modal
                          animationType='slide'
                          transparent={true}
                          visible={modalVisible}
                          onRequestClose={ ()=>{
                              Alert.alert('Modal has been closed');
                              setModalVisible(!modalVisible);
                              }}
                      >
                          <View style={styles.centeredView}>
                              <View style={styles.modalView}>
                                  <Text style={styles.modalText}>Welcome to the game arena!</Text>
                                  <Pressable
                                      style={
                                          [styles.button, styles.buttonClose]}
                                          onPress = { ()=> setModalVisible(!modalVisible)}>
                                      <Text style={styles.textStyle}>Hide</Text>
                                  </Pressable>
                              </View>
                          </View>
                      </Modal>
                      <Pressable
                          style={[styles.button, styles.buttonOpen]}
                          onPress ={ ()=> setModalVisible(true)}>
                          <Text style={styles.textStyle}>Show Modal</Text>
                      </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#f194ff'
    },
    buttonOpen: {
        backgroundColor: '#2196f3'
    },
    textStyle: {
        fontFamily: 'Ubuntu-regular',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginButton: 15,
        textAlign: 'center'
    },
});

export default CustomModal;