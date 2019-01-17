import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: process.env.API_KEY,
	authDomain: "books-collector.firebaseapp.com",
	databaseURL: "https://books-collector.firebaseio.com",
	projectId: "books-collector",
	storageBucket: "books-collector.appspot.com",
	messagingSenderId: "565699442392",
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };