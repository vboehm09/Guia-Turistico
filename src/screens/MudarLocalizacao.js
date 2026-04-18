import { View, Text, StyleSheet, TouchableOpacity, Pressable, SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import db from '../data/db.json';
import { useCidade } from '../context/CidadeContext';

// Gera as seções dinamicamente a partir do db.json — sem dados duplicados
function gerarSecoes() {
    const mapa = {};

    [...db.pontos, ...db.restaurantes].forEach((item) => {
        const chave = item.pais;
        if (!mapa[chave]) {
            mapa[chave] = { title: `${item.pais} ${item.bandeira}`, data: [] };
        }
        const jaExiste = mapa[chave].data.some((c) => c.nome === item.cidade);
        if (!jaExiste) {
            mapa[chave].data.push({ nome: item.cidade, pais: item.pais });
        }
    });

    return Object.values(mapa).sort((a, b) => a.title.localeCompare(b.title));
}

const secoes = gerarSecoes();

export default function MudarLocalizacao({ navigation }) {
    const { cidadeSelecionada, setCidadeSelecionada } = useCidade();

    const selecionarCidade = (cidade) => {
        setCidadeSelecionada(cidade);
        navigation.replace('DestinoPontos', { destino: cidade });
    };

    const verTodos = () => {
        setCidadeSelecionada(null);
        navigation.navigate('Início', { screen: 'HomeTabs' });
    };

    return (
        <Pressable style={styles.overlay} onPress={() => navigation.goBack()}>
            <Pressable style={styles.popup}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Onde você quer ir?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close-circle" size={28} color="#9CA3AF" />
                    </TouchableOpacity>
                </View>

                {cidadeSelecionada && (
                    <TouchableOpacity style={styles.verTodosBtn} onPress={verTodos}>
                        <Ionicons name="globe-outline" size={16} color="#2563EB" />
                        <Text style={styles.verTodosText}>Ver todos os destinos</Text>
                    </TouchableOpacity>
                )}

                <SectionList
                    sections={secoes}
                    keyExtractor={(item) => item.nome}
                    showsVerticalScrollIndicator={false}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.countryHeader}>{title}</Text>
                    )}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.cityCard}
                            onPress={() => selecionarCidade(item)}>
                            <View style={styles.cityInfo}>
                                <Ionicons
                                    name="location-sharp"
                                    size={22}
                                    color="#EF4444"
                                    style={styles.icon}
                                />
                                <Text style={styles.cityName}>{item.nome}</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={18} color="#D1D5DB" />
                        </TouchableOpacity>
                    )}
                />
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        width: '85%',
        maxHeight: '75%',
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 20,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    verTodosBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: '#EFF6FF',
        borderWidth: 1,
        borderColor: '#BFDBFE',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    verTodosText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2563EB',
    },
    countryHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2563EB',
        backgroundColor: '#FFF',
        paddingVertical: 8,
        marginTop: 10,
    },
    cityCard: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cityInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 12,
        backgroundColor: '#FEE2E2',
        padding: 6,
        borderRadius: 8,
    },
    cityName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#374151',
    },
});
