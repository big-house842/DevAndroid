import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { PrimeiroComponente, Saudacao, SaudacaoCompleta } from './components/PrimeiroComponente';
import Home from './components/Layout'; // Home com composição completa

export default function App() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>

        <Text style={styles.title}>Exemplo de Componente Simples</Text>
        <PrimeiroComponente />

        <Text style={styles.title}>Componente com Props</Text>
        <Saudacao nome="João" />
        <SaudacaoCompleta nome="Maria" idade={30} />

        <Text style={styles.title}>Composição de Componentes (Home)</Text>
        <Home />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  }
});