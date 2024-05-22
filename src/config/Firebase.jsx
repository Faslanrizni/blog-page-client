import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "5a7b.appspot.com",
    messagingSenderId: "",
    appId: "2",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
