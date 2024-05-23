import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVDMKX_P86vpa3bJUuaesQTFx63TWdmys",
    authDomain: "react-chat-app-1840a.firebaseapp.com",
    projectId: "react-chat-app-1840a",
    storageBucket: "react-chat-app-1840a.appspot.com",
    messagingSenderId: "261416951661",
    appId: "1:261416951661:web:fe7947d80ea7bf1ec0c464"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  export const auth = getAuth(app);
  

