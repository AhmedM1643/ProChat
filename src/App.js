import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Chat from ".//Chat/Chat.js";
import Auth from "./Auth/Auth.js";

function App() {
  const [ user ] = useAuthState(auth);

  return (
    <>
      { user ? <Chat /> : <Auth />}
    </>
  );
}

export default App;
