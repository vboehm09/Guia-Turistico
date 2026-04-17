import { View, FlatList, StyleSheet } from 'react-native';
import db from '../data/db.json';
import CardItem from '../components/CardItem';
import { useCidade } from '../context/CidadeContext';

export default function Restaurantes({ navigation }) {
    const { cidadeSelecionada } = useCidade();

    const dados = cidadeSelecionada
        ? db.restaurantes.filter((item) => item.cidade === cidadeSelecionada.nome)
        : db.restaurantes;

    return (
        <View style={styles.container}>
            <FlatList
                data={dados}
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
