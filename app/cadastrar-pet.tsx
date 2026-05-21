import { Stack } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CadastrarPetScreen() {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [peso, setPeso] = useState('');

  function handleSalvarPet() {
    Alert.alert('Pet cadastrado!', 'Em breve vamos salvar no banco de dados.');
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Cadastrar pet' }} />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Text style={styles.logo}>🐾 AuMigo</Text>
          <Text style={styles.title}>Cadastre seu pet</Text>
          <Text style={styles.subtitle}>
            Preencha as primeiras informações para organizar a rotina de cuidados.
          </Text>

          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>Nome do pet</Text>
              <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Ex: Mel"
                placeholderTextColor="#8A9A91"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Espécie</Text>
              <TextInput
                style={styles.input}
                value={especie}
                onChangeText={setEspecie}
                placeholder="Ex: Cachorro"
                placeholderTextColor="#8A9A91"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Raça</Text>
              <TextInput
                style={styles.input}
                value={raca}
                onChangeText={setRaca}
                placeholder="Ex: Vira-lata"
                placeholderTextColor="#8A9A91"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Data de nascimento</Text>
              <TextInput
                style={styles.input}
                value={dataNascimento}
                onChangeText={setDataNascimento}
                placeholder="Ex: 10/03/2022"
                placeholderTextColor="#8A9A91"
                keyboardType="numbers-and-punctuation"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Peso</Text>
              <TextInput
                style={styles.input}
                value={peso}
                onChangeText={setPeso}
                placeholder="Ex: 8,5 kg"
                placeholderTextColor="#8A9A91"
                keyboardType="decimal-pad"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={handleSalvarPet}>
            <Text style={styles.buttonText}>Salvar pet</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FFF9',
  },
  content: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 32,
  },
  logo: {
    marginBottom: 18,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
    color: '#183B2D',
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
    color: '#183B2D',
  },
  subtitle: {
    marginBottom: 28,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    color: '#4F6358',
  },
  form: {
    gap: 16,
    marginBottom: 24,
  },
  field: {
    gap: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#183B2D',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8EBDD',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    color: '#183B2D',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#2FBF71',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
