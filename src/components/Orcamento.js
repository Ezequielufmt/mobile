import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';


const btnVoltar = require('../img/arrow.png');

export default class Orcamento extends React.Component {

  //constructor(props) {
  //  super(props);
  // this.state = {text: ''};
  //};

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.viewTitle}>
          <TouchableOpacity  style={styles.btnVoltar} 
            onPress={() => {
              this.props.varNavigator.pop();
            }}
          >
            <Image source={btnVoltar} />
          </TouchableOpacity>        
          <Text style={styles.viewTitleText}>Orçamento</Text>          
        </View>

        <View style={styles.viewMain}>
          <Text style={styles.SubTitle}>Adicione produto</Text>
          <TextInput style={styles.imputBox}
            placeholder="Nome do cliente"
           
           />        
          <Text style={styles.SubTitle}>Adicione produto</Text>
          <TextInput style={styles.imputBox}
            placeholder="Descrição do produto"
           
           />
          <TextInput style={styles.imputBox}
            placeholder="R$ --"
           />
           <TextInput style={styles.imputBox}
            placeholder="Qtd"
           />
           <TextInput style={styles.imputBox}
            placeholder="Sub-total"
           />
          
          <Text style={styles.labelTotalGeral}>Total geral:</Text>
          <Text style={styles.textTotalGeral}> R$ 0,00</Text>


        </View>
        <TouchableOpacity  style={styles.btnSalvar}>          
          <Text style={styles.btnText}>Finalizar</Text>
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
    backgroundColor: '#BF3A81',
  },
  btnVoltar: {
    marginHorizontal: 10,
    paddingVertical: 20,    
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
  viewTitleText: {
    marginLeft: 40,
    paddingVertical: 20,
    fontSize: 30,
    color: 'white',
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
  labelTotalGeral: {
    textAlign: 'center',
    fontSize: 20,
  },
  textTotalGeral: {
    textAlign: 'center',
    fontSize: 30,
  },

  
});
