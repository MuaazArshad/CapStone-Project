import { signInWithGooglePopup } from '../../Utils/firebase/firebase.utils';

const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
	};

	return (
		<div>
			<h1>I am Sign in element</h1>
			<button onClick={logGoogleUser}>Sign In</button>
		</div>
	);
};

export default SignIn;
