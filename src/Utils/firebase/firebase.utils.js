import { initializeApp } from 'firebase/app';

import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAOgEaG3Ov8zXEJOkOxFsT5TPeZxnTvCGw',
	authDomain: 'capstone-cad0a.firebaseapp.com',
	projectId: 'capstone-cad0a',
	storageBucket: 'capstone-cad0a.appspot.com',
	messagingSenderId: '180856250363',
	appId: '1:180856250363:web:71493074e058a56583355e',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
