import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import styles from './style';
import imagemFundo from '../../assets/estudante.jpg';

export default function TelaInicio(props) {
  const [valorUm, setValorUm] = useState(2);
  const [valorDois, setValorDois] = useState(1);
  const [resposta, setResposta] = useState('');

  const [highscore, setHighscore] = useState(0);
  const [pular, setPular] = useState(3)

  function updateValores() {
  
    setValorUm(Math.floor(Math.random() * 11));
    setValorDois(Math.floor(Math.random() * 11));
 
   
  }

  function abrirTelaCerta() {
    props.navigation.navigate('Certa');
    setHighscore(highscore + 1);
  }

  function abrirTelaErrada() {
    props.navigation.navigate('Errada');
    setHighscore(0);
  }

  function abrirTelaTabuada() {
    props.navigation.navigate('Tabuada');
    setHighscore(0)
  }

  function calcular() {
    const conta = valorUm * valorDois;
    return conta;
  }

  function testarChances() {
    if(pular > 0){
      return (   <TouchableOpacity onPress={() => {

              if(pular > 0){
                updateValores()
            setPular(pular - 1)
              }
            }}>
              <Text style={styles.botaoPular}>Pular ({pular})</Text>
            </TouchableOpacity>)
    } else{
  
            return (  <Text style={styles.botaoPular}>Sem chances</Text>)

    }
  }

  return (
    <View>
      <ImageBackground source={imagemFundo} blurRadius={4}>
        <View style={styles.fundo}>
          <View style={styles.box}>
            <Text style={styles.message}>Duvido você acertar!</Text>
            <View style={styles.calculo}>
              <Text style={styles.numeros}>
                {valorUm} x {valorDois} ={' '}
              </Text>
              <TextInput
                textAlign="center"
                onChangeText={setResposta}
                keyboardType="numeric"
                autoFocus={true}
                value={resposta.toString()}
                maxLength={3}
                style={styles.numeros}
              />
            </View>
          </View>
          <View style={styles.boxBotao}>
          <View style={styles.alinharBotoes}>
            <TouchableOpacity
              onPress={() => {
                if (resposta == calcular()) {
                  updateValores();
                  setResposta('');
                  return abrirTelaCerta();
                } else {
                  updateValores();
                  setResposta('')
                  return abrirTelaErrada();
                }
              }}>
              <Text style={styles.botaoResponder}>Responder</Text>
            </TouchableOpacity>

  {   testarChances() }

            <TouchableOpacity onPress={abrirTelaTabuada}>
              <Text style={styles.verTabuada}>Ver Tabuada</Text>
            </TouchableOpacity>
             </View>
          </View>
          <View style={styles.highscoreBox}>
            <Text style={styles.highscore}>Highscore: {highscore}</Text>
          </View>
     
        </View>
      </ImageBackground>
    </View>
  );
}
