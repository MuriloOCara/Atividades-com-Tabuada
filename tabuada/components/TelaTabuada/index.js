import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

import styles from './style';
import imagem from '../../assets/Livros.jpg';
import tabuada from '../../assets/tabuada.jpg'

export default function TelaCerta(props) {
  return (
    <View>
      <ImageBackground
        source={imagem}
        resizeMode="cover"
        blurRadius={2}
        style={{ width: '100%', height: '100%' }}>
        <View style={styles.centro}>
          <Text style={styles.text}>Tabuada</Text>
<Image source={tabuada} style={{width:'80%', height:'80%'}} resizeMode="contain"/>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Inicio');
            }}>
            <Text style={styles.button}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
