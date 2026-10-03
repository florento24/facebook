import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Facebook</Text>

      <TextInput
        style={styles.input}
        placeholder="Numéro de téléphone ou e-mail"
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="gray"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Créer un nouveau compte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 30, justifyContent: 'center' },
  logo: { fontSize: 40, fontWeight: 'bold', color: '#1877F2', textAlign: 'center', marginBottom: 40 },
  input: { backgroundColor: '#F0F2F5', borderRadius: 6, padding: 15, fontSize: 16, marginBottom: 15, borderWidth: 1, borderColor: '#ddd' },
  loginButton: { backgroundColor: '#1877F2', borderRadius: 6, padding: 15, alignItems: 'center', marginBottom: 20 },
  loginButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  forgotPassword: { alignItems: 'center', marginBottom: 30 },
  forgotPasswordText: { color: '#1877F2', fontSize: 16 },
  separator: { height: 1, backgroundColor: '#ddd', marginBottom: 20 },
  createAccountButton: { backgroundColor: '#42B72A', borderRadius: 6, padding: 15, alignItems: 'center', alignSelf: 'center', width: '80%' },
  createAccountText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});