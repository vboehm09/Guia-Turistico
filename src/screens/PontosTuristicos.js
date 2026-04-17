import { View, FlatList, StyleSheet } from 'react-native';
import db from '../data/db.json';
import CardItem from '../components/CardItem';

export default function PontosTuristicos({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={db.pontos}
                keyExtractor={(item) => item.id}
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

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#F3F4F6' } });
