import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Config from 'react-native-config';

const firebaseConfig = {
	apiKey: Config.REACT_APP_FIREBASE_API_KEY,
	authDomain: Config.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: Config.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: Config.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: Config.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: Config.REACT_APP_FIREBASE_APP_ID,
};

const firebaseConnection = firebase.initializeApp(firebaseConfig);

export default firebaseConnection;
