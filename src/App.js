import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{
	componentDidMount(){
			const firebaseConfig = {
		    apiKey: 'AIzaSyDlcQy6qjMBjuw90Lt0hMqfHT4mE37iXmE',
		    authDomain: 'authentication-491ab.firebaseapp.com',
		    databaseURL: 'https://authentication-491ab.firebaseio.com',
		    projectId: 'authentication-491ab',
		    storageBucket: '',
		    messagingSenderId: '1047052287027',
		    appId: '1:1047052287027:web:763eb3b3896429d1'
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
	}
	render(){
		return(
				<Provider store={createStore(reducers)}>
					<View>
						<LoginForm></LoginForm>
					</View>
				</Provider>
			);
	}
}

export default App;
