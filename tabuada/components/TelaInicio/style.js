import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  message: {
    fontSize: 30,
    fontWeight: 'bold',

    marginTop: 100,
    textAlign: 'center',
    color: 'ablack',
  },

  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculo: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    borderWidth: 1,
    borderColor: 'black',
    width: 175,
    padding: 10,
    marginVertical: 35,
  },

  numeros: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  fundo: {
    height: '100%',
  },
  botaoResponder: {
    backgroundColor: 'lightgreen',
    fontWeight: 'bold',
    fontSize: 30,
        textAlign:'center'
  },

  boxBotao: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 15,
    fontSize: 30,

  },
  botaoPular: {
    backgroundColor: 'red',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
        textAlign:'center'
  },

  verTabuada: {
    backgroundColor: 'lightgray',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
        textAlign:'center'
  },

  highscore: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    paddingHorizontal:30,
    marginTop: 50,
  },

  highscoreBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  alinharBotoes: {
    width:300
  }
});

export default styles;
