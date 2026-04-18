import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FALLBACK = require('../../assets/sem fundo.png');

export default function CardItem({ data, onPress }) {
    const [imgError, setImgError] = useState(false);

    const imageSource = imgError || !data.imagemUrl
        ? FALLBACK
        : { uri: data.imagemUrl };

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image
                source={imageSource}
                style={styles.image}
                onError={() => setImgError(true)}
            />

            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {data.nome}
                </Text>
                <Text style={styles.description} numberOfLines={2}>
                    {data.descricao}
                </Text>

                <View style={styles.locationContainer}>
                    <Ionicons name="location-outline" size={14} color="#6B7280" />
                    <Text style={styles.address} numberOfLines={1}>
                        {data.endereco}
                    </Text>
                </View>
            </View>

            <Ionicons name="chevron-forward" size={18} color="#D1D5DB" style={styles.arrow} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        marginHorizontal: 16,
        marginTop: 12,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    infoContainer: {
        flex: 1,
        padding: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 4,
    },
    description: {
        fontSize: 13,
        color: '#4B5563',
        marginBottom: 6,
        lineHeight: 18,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    address: {
        fontSize: 12,
        color: '#6B7280',
        marginLeft: 4,
    },
    arrow: {
        paddingRight: 10,
    },
});
