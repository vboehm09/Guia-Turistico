import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import CardItem from '../components/CardItem';
import db from '../data/db.json';

const Tab = createMaterialTopTabNavigator();

export default function DestinoPontos({ route, navigation }) {
    const { destino } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `Explorando ${destino.nome}`,
        });
    }, [navigation, destino]);

    const pontosDaCidade = db.pontos.filter((item) => item.cidade === destino.nome);
    const restaurantesDaCidade = db.restaurantes.filter((item) => item.cidade === destino.nome);

    const ListaVazia = () => (
        <View style={styles.emptyContainer}>
            <Ionicons name="search-outline" size={50} color="#9CA3AF" />
            <Text style={styles.emptyText}>
                Ainda não temos locais cadastrados para {destino.nome}.
            </Text>
        </View>
    );

    const AbaPontos = () => (
        <View style={styles.container}>
            <FlatList
                data={pontosDaCidade}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={ListaVazia}
                renderItem={({ item }) => (
                    <CardItem
                        data={item}
                        onPress={() => navigation.navigate('Detalhes', { item })}
                    />
                )}
            />
        </View>
    );

    const AbaRestaurantes = () => (
        <View style={styles.container}>
            <FlatList
                data={restaurantesDaCidade}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={ListaVazia}
                renderItem={({ item }) => (
                    <CardItem
                        data={item}
                        onPress={() => navigation.navigate('Detalhes', { item })}
                    />
                )}
            />
        </View>
    );

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
                component={AbaPontos}
                options={{ title: 'Pontos Turísticos' }}
            />
            <Tab.Screen name="Restaurantes" component={AbaRestaurantes} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        paddingHorizontal: 20,
    },
    emptyText: {
        marginTop: 10,
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
    },
});
