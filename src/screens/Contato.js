import { useState } from 'react';
import {
    View, Text, StyleSheet, TextInput,
    TouchableOpacity, ScrollView, Alert, ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [erros, setErros] = useState({});
    const [enviando, setEnviando] = useState(false);

    const validar = () => {
        const novosErros = {};
        if (!nome.trim()) novosErros.nome = 'Nome é obrigatório.';
        if (!email.trim()) novosErros.email = 'Email é obrigatório.';
        else if (!validarEmail(email)) novosErros.email = 'Email inválido.';
        if (!mensagem.trim()) novosErros.mensagem = 'Mensagem é obrigatória.';
        setErros(novosErros);
        return Object.keys(novosErros).length === 0;
    };

    const enviar = () => {
        if (!validar()) return;

        setEnviando(true);
        // Simula envio — aqui você pode integrar uma API real
        setTimeout(() => {
            setEnviando(false);
            setNome('');
            setEmail('');
            setMensagem('');
            setErros({});
            Alert.alert('Mensagem enviada!', 'Entraremos em contato em breve.');
        }, 1500);
    };

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
                <TextInput
                    style={[styles.input, erros.nome && styles.inputErro]}
                    placeholder="Seu nome completo"
                    value={nome}
                    onChangeText={setNome}
                />
                {erros.nome && <Text style={styles.textoErro}>{erros.nome}</Text>}

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={[styles.input, erros.email && styles.inputErro]}
                    placeholder="seu@email.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                {erros.email && <Text style={styles.textoErro}>{erros.email}</Text>}

                <Text style={styles.label}>Mensagem</Text>
                <TextInput
                    style={[styles.input, styles.textArea, erros.mensagem && styles.inputErro]}
                    placeholder="Como podemos ajudar?"
                    multiline
                    numberOfLines={4}
                    value={mensagem}
                    onChangeText={setMensagem}
                />
                {erros.mensagem && <Text style={styles.textoErro}>{erros.mensagem}</Text>}

                <TouchableOpacity
                    style={[styles.button, enviando && styles.buttonDesabilitado]}
                    onPress={enviar}
                    disabled={enviando}>
                    {enviando ? (
                        <ActivityIndicator color="#FFF" style={{ marginRight: 8 }} />
                    ) : (
                        <Ionicons name="send" size={18} color="#FFF" style={{ marginRight: 8 }} />
                    )}
                    <Text style={styles.buttonText}>
                        {enviando ? 'Enviando...' : 'Enviar Mensagem'}
                    </Text>
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
        marginBottom: 4,
        backgroundColor: '#FFF',
    },
    inputErro: {
        borderColor: '#EF4444',
        marginBottom: 4,
    },
    textoErro: {
        fontSize: 12,
        color: '#EF4444',
        marginBottom: 12,
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
    buttonDesabilitado: {
        backgroundColor: '#93C5FD',
    },
    buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
