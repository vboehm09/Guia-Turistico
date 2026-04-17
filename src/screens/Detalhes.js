import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Detalhes({ route }) {
    const { item } = route.params;

    const imageSource = item.imagemUrl
        ? { uri: item.imagemUrl }
        : { uri: 'https://via.placeholder.com/400x300.png?text=Sem+Foto' };

    const textoDescricao = item.descricao || item.descricaoCurta || 'Descrição não disponível.';

    return (
        <ScrollView style={styles.container} bounces={false}>
            <Image source={imageSource} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>{item.nome}</Text>

                <View style={styles.locationContainer}>
                    <Ionicons name="location-outline" size={20} color="#2563EB" />
                    <Text style={styles.address}>{item.endereco}</Text>
                </View>

                <View style={styles.divider} />

                <Text style={styles.sectionTitle}>Sobre o local</Text>

                <Text style={styles.description}>{textoDescricao}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        padding: 24,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 12,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    address: {
        fontSize: 16,
        color: '#4B5563',
        marginLeft: 8,
        flex: 1,
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E7EB',
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#4B5563',
        lineHeight: 24,
    },
});
