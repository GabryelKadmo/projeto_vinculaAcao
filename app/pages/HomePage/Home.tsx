import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import styles from './styles';
const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* Carrossel de Imagens */}
      <PagerView style={styles.pagerView} initialPage={0}>
        <View key="1">
          <Image
            source={{ uri: 'https://example.com/instituicao1.jpg' }}
            style={styles.image}
          />
        </View>
        <View key="2">
          <Image
            source={{ uri: 'https://example.com/instituicao2.jpg' }}
            style={styles.image}
          />
        </View>
        <View key="3">
          <Image
            source={{ uri: 'https://example.com/instituicao3.jpg' }}
            style={styles.image}
          />
        </View>
      </PagerView>

      {/* Título e Descrição */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>VinculAção</Text>
        <Text style={styles.subtitle}>Aproximando corações de quem precisa</Text>
        <Text style={styles.description}>
          Nosso aplicativo conecta doadores com instituições necessitadas, promovendo boas ações e transformando a sociedade.
        </Text>
      </View>

      {/* Botões de Ação */}
      <View style={styles.buttonContainer}>
        <Button title="Conheça as Instituições" onPress={() => { /* navegação */ }} />
        <Button title="Faça uma Doação" onPress={() => { /* navegação */ }} />
      </View>
    </View>
  );
};



export default HomePage;
