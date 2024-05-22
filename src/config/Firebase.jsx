import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAvbb3FZU1pdW9OBFXDhBcj9A2aHIuIB8Y",
    authDomain: "blog-page-b5a7b.firebaseapp.com",
    projectId: "blog-page-b5a7b",
    storageBucket: "blog-page-b5a7b.appspot.com",
    messagingSenderId: "1005854589975",
    appId: "1:1005854589975:web:accd13423dfdf4486bc852",
    measurementId: "G-BFHTSNXW2F"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
