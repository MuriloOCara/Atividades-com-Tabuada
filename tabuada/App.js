import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import TelaInicio from './components/TelaInicio/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaErrada from './components/TelaErrada/index';
import TelaTabuada from './components/TelaTabuada/index';
import TelaCerta from './components/TelaCerta/index';

const Navegacao = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator screenOptions={{ headerShown: false }}>
        <Navegacao.Screen name="Inicio" component={TelaInicio} />
        <Navegacao.Screen name="Certa" component={TelaCerta} />
        <Navegacao.Screen name="Errada" component={TelaErrada} />
        <Navegacao.Screen name="Tabuada" component={TelaTabuada} />
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
