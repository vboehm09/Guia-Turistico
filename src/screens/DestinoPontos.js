import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import CardItem from '../components/CardItem';
import db from '../data/db.json';

const Tab = createMaterialTopTabNavigator();

// Componentes definidos FORA da função pai — não são recriados a cada render
function ListaVazia({ cidade }) {
    return (
        <View style={styles.emptyContainer}>
            <Ionicons name="search-outline" size={50} color="#9CA3AF" />
            <Text style={styles.emptyText}>
                Ainda não temos locais cadastrados para {cidade}.
            </Text>
        </View>
    );
}

function AbaPontos({ dados, navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={dados}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<ListaVazia cidade={dados?.cidade} />}
                renderItem={({ item }) => (
                    <CardItem
                        data={item}
                        onPress={() => navigation.navigate('Detalhes', { item })}
                    />
                )}
            />
        </View>
    );
}

function AbaRestaurantes({ dados, navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={dados}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<ListaVazia />}
                renderItem={({ item }) => (
                    <CardItem
                        data={item}
                        onPress={() => navigation.navigate('Detalhes', { item })}
                    />
                )}
            />
        </View>
    );
}

export default function DestinoPontos({ route, navigation }) {
    const { destino } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({ title: `Explorando ${destino.nome}` });
    }, [navigation, destino]);

    const pontosDaCidade = db.pontos.filter((item) => item.cidade === destino.nome);
    const restaurantesDaCidade = db.restaurantes.filter((item) => item.cidade === destino.nome);

    const tabOptions = {
        screenOptions: ({ route }) => ({
            tabBarIcon: ({ color }) => {
                const iconName = route.name === 'Pontos' ? 'location-outline' : 'restaurant-outline';
                return <Ionicons name={iconName} size={20} color={color} />;
            },
            tabBarActiveTintColor: '#2563EB',
            tabBarInactiveTintColor: '#6B7280',
            tabBarIndicatorStyle: { backgroundColor: '#2563EB', height: 3 },
            tabBarLabelStyle: { fontWeight: 'bold', textTransform: 'capitalize' },
            tabBarStyle: { backgroundColor: '#FFF' },
        }),
    };

    return (
        <Tab.Navigator {...tabOptions}>
            <Tab.Screen name="Pontos" options={{ title: 'Pontos Turísticos' }}>
                {() => <AbaPontos dados={pontosDaCidade} navigation={navigation} />}
            </Tab.Screen>
            <Tab.Screen name="Restaurantes">
                {() => <AbaRestaurantes dados={restaurantesDaCidade} navigation={navigation} />}
            </Tab.Screen>
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
