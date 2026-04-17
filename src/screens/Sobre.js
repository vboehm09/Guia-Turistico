import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Sobre = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.headerIconContainer}>
                <View style={styles.circuloAzulClaro}>
                    <MaterialCommunityIcons name="map-marker" size={30} color="#2196F3" />
                </View>
            </View>

            <Text style={styles.tituloPrincipal}>Sobre o Zarp</Text>
            <Text style={styles.tagline}>
                Seu companheiro perfeito para descobrir as maravilhas da cidade
            </Text>

            <View style={styles.section}>
                <Text style={styles.tituloSecao}>Nossa Missão</Text>
                <Text style={styles.textoDescritivo}>
                    Nosso aplicativo de Guia Turístico foi criado com o objetivo de facilitar a vida
                    de turistas e moradores locais que desejam explorar as belezas e sabores da
                    cidade. Reunimos informações essenciais sobre os principais pontos turísticos e
                    os melhores restaurantes da região em um só lugar.
                </Text>
            </View>

            <View style={styles.containerDiferenciais}>
                <View style={styles.itemDiferencial}>
                    <View style={[styles.circuloIcone, { backgroundColor: '#E8F5E9' }]}>
                        <MaterialCommunityIcons name="heart-outline" size={24} color="#00C853" />
                    </View>
                    <Text style={styles.tituloDiferencial}>Curadoria</Text>
                    <Text style={styles.textoDiferencial}>
                        Selecionamos cuidadosamente os melhores lugares das cidades
                    </Text>
                </View>

                <View style={styles.itemDiferencial}>
                    <View style={[styles.circuloIcone, { backgroundColor: '#F3E5F5' }]}>
                        <MaterialCommunityIcons
                            name="account-group-outline"
                            size={24}
                            color="#9C27B0"
                        />
                    </View>
                    <Text style={styles.tituloDiferencial}>Para Todos</Text>
                    <Text style={styles.textoDiferencial}>
                        Informações úteis tanto para turistas quanto para moradores
                    </Text>
                </View>

                <View style={styles.itemDiferencial}>
                    <View style={[styles.circuloIcone, { backgroundColor: '#FFF8E1' }]}>
                        <MaterialCommunityIcons name="star-outline" size={24} color="#FFB300" />
                    </View>
                    <Text style={styles.tituloDiferencial}>Qualidade</Text>
                    <Text style={styles.textoDiferencial}>
                        Descrições detalhadas e informações sempre atualizadas
                    </Text>
                </View>
            </View>

            <View style={styles.containerOferecemos}>
                <Text style={styles.tituloOferecemos}>O Que Oferecemos</Text>

                <View style={styles.listaItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.itemTexto}>
                        Informações detalhadas sobre pontos turísticos icônicos
                    </Text>
                </View>

                <View style={styles.listaItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.itemTexto}>
                        Guia completo de restaurantes com diversas culinárias
                    </Text>
                </View>

                <View style={styles.listaItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.itemTexto}>Endereços e localizações precisas</Text>
                </View>

                <View style={styles.listaItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.itemTexto}>Interface intuitiva e fácil de usar</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 20,
        alignItems: 'center',
    },
    headerIconContainer: {
        marginTop: 20,
        marginBottom: 10,
    },
    circuloAzulClaro: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloPrincipal: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1A237E',
        marginTop: 10,
    },
    tagline: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    section: {
        width: '100%',
        marginBottom: 20,
    },
    tituloSecao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    textoDescritivo: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
        textAlign: 'justify',
    },
    containerDiferenciais: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 20,
    },
    itemDiferencial: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    circuloIcone: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    tituloDiferencial: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    textoDiferencial: {
        fontSize: 10,
        color: '#777',
        textAlign: 'center',
    },
    containerOferecemos: {
        width: '100%',
        backgroundColor: '#F5F9FF',
        padding: 20,
        borderRadius: 15,
        marginTop: 10,
    },
    tituloOferecemos: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1A237E',
        marginBottom: 15,
    },
    listaItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    bullet: {
        fontSize: 16,
        color: '#2196F3',
        marginRight: 10,
    },
    itemTexto: {
        fontSize: 14,
        color: '#555',
        flex: 1,
    },
});

export default Sobre;
