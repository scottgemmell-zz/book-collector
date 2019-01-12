import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyDlS39S0IqphnNCscw1TV7WV9mWtst6tQw",
	authDomain: "books-collector.firebaseapp.com",
	databaseURL: "https://books-collector.firebaseio.com",
	projectId: "books-collector",
	storageBucket: "books-collector.appspot.com",
	messagingSenderId: "565699442392",
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };