import 'react-native-gesture-handler';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importação das telas
import PontosTuristicos from './src/screens/PontosTuristicos';
import Restaurantes from './src/screens/Restaurantes';
import Detalhes from './src/screens/Detalhes';
import Sobre from './src/screens/Sobre';
import Contato from './src/screens/Contato';
import MudarLocalizacao from './src/screens/MudarLocalizacao';
import DestinoPontos from './src/screens/DestinoPontos';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName =
                        route.name === 'Pontos' ? 'location-outline' : 'restaurant-outline';
                    return <Ionicons name={iconName} size={20} color={color} />;
                },
                tabBarActiveTintColor: '#2563EB',
                tabBarInactiveTintColor: '#6B7280',
                tabBarIndicatorStyle: { backgroundColor: '#2563EB', height: 3 },
                tabBarLabelStyle: { fontWeight: 'bold', textTransform: 'capitalize' },
                tabBarStyle: { backgroundColor: '#FFF' },
            })}>
            <Tab.Screen
                name="Pontos"
                component={PontosTuristicos}
                options={{ title: 'Pontos Turísticos' }}
            />
            <Tab.Screen name="Restaurantes" component={Restaurantes} />
        </Tab.Navigator>
    );
}

function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTabs" component={TabNavigator} />

            <Stack.Screen
                name="Detalhes"
                component={Detalhes}
                options={{
                    headerShown: true,
                    title: 'Detalhes',
                    headerTintColor: '#FFF',
                    headerStyle: { backgroundColor: '#2563EB' },
                }}
            />

            <Stack.Screen
                name="MudarLocalizacao"
                component={MudarLocalizacao}
                options={{
                    headerShown: false,
                    presentation: 'transparentModal',
                    animation: 'fade',
                    contentStyle: { backgroundColor: 'transparent' },
                }}
            />

            <Stack.Screen
                name="DestinoPontos"
                component={DestinoPontos}
                options={{
                    headerShown: true,
                    title: 'Pontos Turísticos',
                    headerTintColor: '#FFF',
                    headerStyle: { backgroundColor: '#2563EB' },
                }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#2563EB' },
                    headerTintColor: '#FFF',
                    headerTitleAlign: 'center',
                    drawerActiveBackgroundColor: '#DBEAFE',
                    drawerActiveTintColor: '#2563EB',
                }}>
                <Drawer.Screen
                    name="Início"
                    component={MainStack}
                    options={({ navigation }) => ({
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                        headerTitle: () => (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('./assets/sem fundo.png')}
                                    style={{ width: 35, height: 75, marginRight: 8 }}
                                    resizeMode="contain"
                                />
                                <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>
                                    Zarp - Guia Turístico
                                </Text>
                            </View>
                        ),

                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('Início', { screen: 'MudarLocalizacao' })
                                }
                                style={{ marginRight: 15 }}>
                                <Ionicons name="location" size={24} color="#FFF" />
                            </TouchableOpacity>
                        ),
                    })}
                />

                <Drawer.Screen
                    name="Sobre"
                    component={Sobre}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="information-circle-outline" size={22} color={color} />
                        ),
                    }}
                />

                <Drawer.Screen
                    name="Contato"
                    component={Contato}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="mail-outline" size={22} color={color} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
