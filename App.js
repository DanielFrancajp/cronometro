import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { clear } from 'react-native/Libraries/LogBox/Data/LogBoxData';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'Iniciar',
      ultimo: null

    };

    // Variavel do timer do relogio
    this.timer = null;

    this.iniciar = this.iniciar.bind(this)
    this.encerrar = this.encerrar.bind(this)

  };



  iniciar() {

    if (this.timer != null) {
      // Aqui vai ser o comando de parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: 'Continuar' })
    } else {
      // Começa a girar o timer
      this.timer = setInterval(() => {

        this.setState({ numero: this.state.numero + 0.1 })

      }, 100);
      this.setState({ botao: 'Pausar' })

    }


  }

  encerrar() {
    if (this.timer != null) {
      // Aqui vai ser o comando de parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'Iniciar'
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

        <View style={styles.btnArea}>


          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <Text style={styles.btnTexto}> {this.state.botao} </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.btn} onPress={this.encerrar}>
            <Text style={styles.btnTexto}> Limpar </Text>
          </TouchableOpacity>





        </View>

        <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? ' Ultimo tempo:' + this.state.ultimo.toFixed(2) + ' Segundos' : ''}


          </Text>


        </View>




      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },

  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 12
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima: {
    marginTop: 40,
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF',
  }

})


export default App;
