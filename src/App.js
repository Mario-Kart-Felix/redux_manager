import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{
	componentDidMount(){
			const firebaseConfig = {
		    apiKey: "AIzaSyDnrYpUVNiZMvEX6--HO4hwksvvqmr3UIg",
			  authDomain: "manager-76dcd.firebaseapp.com",
			  databaseURL: "https://manager-76dcd.firebaseio.com",
			  projectId: "manager-76dcd",
			  storageBucket: "",
			  messagingSenderId: "569505619762",
			  appId: "1:569505619762:web:0dedc4f08789e34d"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
	}
	render(){
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return(
				<Provider store={store}>
					<LoginForm></LoginForm>
				</Provider>
			);
	}
}

export default App;
