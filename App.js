import firebase from 'firebase';
import React, { Component } from 'react';
import { } from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import Home from './src/components/Home';
import Orcamento from './src/components/Orcamento';
import Produto from './src/components/Produto';


export default class App extends Component {

	
	render() {
		return (
			<Navigator
				initialRoute={{ id: 'a' }}
				renderScene={(route, navigator ) => {
					if (route.id === 'a') {
						// inicio
						return (<Home varNavigator={navigator} />);
					}
					if (route.id === 'b') {
						// orcamento
						return (<Orcamento varNavigator={navigator} />);
					}
					if (route.id === 'c') {
						// orcamento
						return (<Produto varNavigator={navigator} />);
					}	
				}}
			/>
		);
	}
}
