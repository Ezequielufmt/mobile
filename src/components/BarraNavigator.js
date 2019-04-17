import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class BarraNavigator extends Component {
  render() {
    return (      
      <View style={styles.containerTopo}>
        <Text style={styles.textoTopo}> UFR - Dispositivo Mobile </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerTopo: {
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#767675',
    fontFamily: 'arial',
  },
  textoTopo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
  },

});
