import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import  Home  from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tickets from './Tickets';
import Contact from './Contact';
import PurchaseTicket from './PurchaseTicket';
import News from './News';


const Stack = createStackNavigator();

const App: ()=> React$Node = ()=> {
    return(
        <>
            <StatusBar barStyle="dark-content" hidden />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    headerMode='screen'
                >
                    <Stack.Screen
                        name='Home'
                        options={{
                            headerShown: false
                        }}
                    >
                        {(props) => <Home {...props} username="Sports Fan"/>}

                    </Stack.Screen>
                    <Stack.Screen
                        name='Tickets'
                        component={Tickets}
                        options={{
                            headerTitleAlign: 'center',
                            headerTitleStyle: {fontFamily: 'Ubuntu-Regular'}
                        }}
                    />
                    <Stack.Screen
                        name='Contact'
                        component={Contact}
                        options={{
                            headerTitleAlign: 'center',
                            headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
                            headerTitle: 'Contact US'
                        }}
                    />
                    <Stack.Screen
                        name='Purchase'
                        component={PurchaseTicket}
                        options={{
                            headerTitleAlign: 'center',
                            headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
                            headerTitle: 'Purchase Tickets'
                        }}
                    />
                    <Stack.Screen
                        name='News'
                        component={News}
                        options={{
                            headerTitleAlign:'center',
                            headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
                            headerTitle: 'Latest News'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </>

    );
};

export default App;