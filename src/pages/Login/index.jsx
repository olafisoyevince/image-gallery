import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>This is a login page </h1>
      <button
        className=" bg-slate-500 text-white p-1 rounded-md"
        onClick={logGoogleUser}
      >
        Sign in with Google Popup
      </button>
    </div>
  );
};

export default Login;
