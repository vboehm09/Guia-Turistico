import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Contato() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
            <Text style={styles.headerTitle}>Entre em Contato</Text>
            <Text style={styles.headerSubtitle}>
                Tem alguma dúvida, sugestão ou feedback? Adoraríamos ouvir você!
            </Text>

            <View style={styles.contactCard}>
                <View style={styles.iconContainer}>
                    <Ionicons name="mail" size={24} color="#3B82F6" />
                </View>
                <View>
                    <Text style={styles.cardTitle}>Email</Text>
                    <Text style={styles.cardText}>contato@nomade.com.br</Text>
                </View>
            </View>

            <View style={styles.contactCard}>
                <View style={[styles.iconContainer, { backgroundColor: '#D1FAE5' }]}>
                    <Ionicons name="call" size={24} color="#10B981" />
                </View>
                <View>
                    <Text style={styles.cardTitle}>Telefone</Text>
                    <Text style={styles.cardText}>(21) 98765-4321</Text>
                </View>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Envie uma Mensagem</Text>
                <Text style={styles.label}>Nome</Text>
                <TextInput style={styles.input} placeholder="Seu nome completo" />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="seu@email.com"
                    keyboardType="email-address"
                />
                <Text style={styles.label}>Mensagem</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Como podemos ajudar?"
                    multiline
                    numberOfLines={4}
                />
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="send" size={18} color="#FFF" style={{ marginRight: 8 }} />
                    <Text style={styles.buttonText}>Enviar Mensagem</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginBottom: 8 },
    headerSubtitle: { fontSize: 16, color: '#4B5563', marginBottom: 24 },
    contactCard: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
        elevation: 2,
    },
    iconContainer: { backgroundColor: '#DBEAFE', padding: 12, borderRadius: 50, marginRight: 16 },
    cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
    cardText: { fontSize: 14, color: '#4B5563', marginTop: 2 },
    formContainer: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 12,
        marginTop: 12,
        elevation: 2,
    },
    formTitle: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginBottom: 16 },
    label: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 6 },
    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        color: '#1F2937',
        marginBottom: 16,
        backgroundColor: '#FFF',
    },
    textArea: { height: 100, textAlignVertical: 'top' },
    button: {
        backgroundColor: '#2563EB',
        flexDirection: 'row',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
