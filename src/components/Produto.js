import firebase from 'firebase';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';


const btnVoltar = require('../img/arrow.png');


export default class Produto extends Component {

ComponentWillMount() {
    // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyATe-aCEQEDgE6RK3ZY2pA1NHMLDTiO6BQ',
    authDomain: 'orcamento-26fd3.firebaseapp.com',
    databaseURL: 'https://orcamento-26fd3.firebaseio.com',
    projectId: 'orcamento-26fd3',
    storageBucket: 'orcamento-26fd3.appspot.com',
    messagingSenderId: '515763092611'
  };

  firebase.initializeApp(config);
}

  manutencaoDados() {
    const bdProdutos = firebase.database();
    bdProdutos.ref('produtos').set('100');    
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.viewTitle}>
          <TouchableOpacity
            style={styles.btnVoltar} 
            onPress={() => {
              this.props.varNavigator.pop();
            }}
          >
            <Image source={btnVoltar} />
          </TouchableOpacity>

          <Text style={styles.viewTitleText}>Produto</Text>
        </View>

        <View style={styles.viewMain}>        
          <Text style={styles.SubTitle}>Cadastre seu produto</Text>
          <TextInput
            style={styles.imputBox}
            placeholder="Descrição do produto"            
          />
          <TextInput
            style={styles.imputBox}
            placeholder="Valor de venda"
          />
        </View>
        <TouchableOpacity 
          style={styles.btnSalvar}
          onPress={() => { this.manutencaoDados(); }}
        >          
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#A9C959',
    
  },
  imputBox: {
    marginBottom: 10,
    borderRadius: 5,
    height: 40,
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  viewTitle: {
    flexDirection: 'row',
    backgroundColor: '#1976D2',
  },
  viewTitleText: {
    marginLeft: 40,
    paddingVertical: 20,
    fontSize: 30,
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
    btnVoltar: {
    marginHorizontal: 10,
    paddingVertical: 20,    
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
  viewMain: {
    flex: 10,
    backgroundColor: '#E7BC68',
  },
  SubTitle: {
    marginVertical: 20,
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center', 
  },
  btnSalvar: {
    backgroundColor: '#7EA135',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 10, 
    textAlign: 'center',
  },

  
});
