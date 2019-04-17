import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

//import BarraNavigator from './BarraNavigator';

const btnProduto = require('../img/btnProduto.png');
const btnOrcamento = require('../img/btnOrcamento.png');

export default class Home extends Component {
render() {
    return (

      <View style={styles.containerHome}>   

        <Text style={styles.welcome}> Menu </Text>

        <TouchableOpacity
          onPress={() => {
            this.props.varNavigator.push({ id: 'c' });
          }}
        >
          <Image style={styles.btnProduto} source={btnProduto} />
        </TouchableOpacity>
          
        <TouchableOpacity
           onPress={() => {
            this.props.varNavigator.push({ id: 'b' });
          }}
        >    
          <Image style={styles.btnOrcamento} source={btnOrcamento} />      
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHome: {   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8BE68',
    fontFamily: 'arial',
  },
  welcome: {
    fontWeight: 'bold',
    color: '#515150',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
  },
  btnProduto: {
    marginBottom: 10,

  },
  btnOrcamento: {

  },
  textBtn: {
    alignSelf: 'center',
    fontSize: 27,
    fontWeight: 'bold',       
    color: 'white',
  },
});
