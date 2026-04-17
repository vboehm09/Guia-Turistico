import { View, Text, StyleSheet, TouchableOpacity, Pressable, SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const locais = [
    {
        title: 'Brasil 🇧🇷',
        data: [
            { id: '1', nome: 'Rio de Janeiro', estado: 'RJ' },
            { id: '2', nome: 'São Paulo', estado: 'SP' },
            { id: '3', nome: 'Gramado', estado: 'RS' },
        ],
    },
    {
        title: 'França 🇫🇷',
        data: [
            { id: '4', nome: 'Paris', estado: 'Île-de-France' },
            { id: '5', nome: 'Nice', estado: 'Alpes-Marítimos' },
        ],
    },
    {
        title: 'Estados Unidos 🇺🇸',
        data: [
            { id: '6', nome: 'Nova York', estado: 'NY' },
            { id: '7', nome: 'Orlando', estado: 'FL' },
        ],
    },
    {
        title: 'Itália 🇮🇹',
        data: [
            { id: '8', nome: 'Roma', estado: 'Lazio' },
            { id: '9', nome: 'Milão', estado: 'MI' },
        ],
    },
    {
        title: 'Japão 🇯🇵',
        data: [
            { id: '10', nome: 'Tóquio', estado: 'Tóquio' },
            { id: '11', nome: 'Osaka', estado: 'Osaka' },
        ],
    },  
    {
        title: 'Portugal PT',
        data: [
            { id: '12', nome: 'Lisboa', estado: 'Lisboa' },
            { id: '13', nome: 'Porto', estado: 'Porto' },
        ],
    },
    {
        title: 'Espanha ES',
        data: [
            { id: '14', nome: 'Madrid', estado: 'Madrid' },
            { id: '15', nome: 'Barcelona', estado: 'Catalunha' },
        ],
    },
    {
        title: 'Inglaterra GB',
        data: [
            { id: '16', nome: 'Londres', estado: 'Grande Londres' },
            { id: '17', nome: 'Liverpool', estado: 'Merseyside' },
        ],
    },
    {
        title: 'Alemanha DE',
        data: [
            { id: '18', nome: 'Berlim', estado: 'Berlim' },
            { id: '19', nome: 'Munique', estado: 'Baviera' },
        ],
    },
    {
        title: 'Argentina AR',
        data: [
            { id: '20', nome: 'Buenos Aires', estado: 'Capital Federal' },
            { id: '21', nome: 'Mendoza', estado: 'Mendoza' },
        ],
    },
    {
        title: 'México MX',
        data: [
            { id: '22', nome: 'Cidade do México', estado: 'CDMX' },
            { id: '23', nome: 'Cancún', estado: 'Quintana Roo' },
        ],
    },
    {
        title: 'Canadá CA',
        data: [
            { id: '24', nome: 'Toronto', estado: 'Ontário' },
            { id: '25', nome: 'Vancouver', estado: 'Colúmbia Britânica' },
        ],
    },
    {
        title: 'Austrália AU',
        data: [
            { id: '26', nome: 'Sydney', estado: 'Nova Gales do Sul' },
            { id: '27', nome: 'Melbourne', estado: 'Victoria' },
        ],
    },
    {
        title: 'Grécia GR',
        data: [
            { id: '28', nome: 'Atenas', estado: 'Ática' },
            { id: '29', nome: 'Santorini', estado: 'Cíclades' },
        ],
    },
    {
        title: 'Suíça CH',
        data: [
            { id: '30', nome: 'Zurique', estado: 'Zurique' },
            { id: '31', nome: 'Genebra', estado: 'Genebra' },
        ],
    },
];

export default function MudarLocalizacao({ navigation }) {
    const selecionarCidade = (cidade) => {
        navigation.replace('DestinoPontos', { destino: cidade });
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

                <SectionList
                    sections={locais}
                    keyExtractor={(item) => item.id}
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
                                <View>
                                    <Text style={styles.cityName}>{item.nome}</Text>
                                    <Text style={styles.cityState}>{item.estado}</Text>
                                </View>
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
    cityState: {
        fontSize: 13,
        color: '#6B7280',
    },
});
