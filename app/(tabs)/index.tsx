import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🐾 AuMigo</Text>

      <Text style={styles.title}>Cuide da rotina do seu pet sem esquecer nada</Text>

      <Text style={styles.subtitle}>
        Organize vacinas, remédios, consultas, banho e outros cuidados em um só lugar.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>Próximo passo: cadastre seu primeiro pet</Text>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.85}>
        <Text style={styles.buttonText}>Cadastrar meu pet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F7FFF9',
  },
  logo: {
    marginBottom: 24,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '800',
    color: '#183B2D',
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 34,
    color: '#183B2D',
  },
  subtitle: {
    marginBottom: 32,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    color: '#4F6358',
  },
  card: {
    marginBottom: 16,
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D8EBDD',
    backgroundColor: '#FFFFFF',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
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
