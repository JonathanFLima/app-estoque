import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDYy3Xa8JhaoQgg3yXYMopa4G16RAVq1mo",
  authDomain: "app-estoque-2088b.firebaseapp.com",
  projectId: "app-estoque-2088b",
  storageBucket: "app-estoque-2088b.appspot.com",
  messagingSenderId: "314044161536",
  appId: "1:314044161536:web:16a1de3fc3154e2df502e5"
};

const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app)
export { app as firebase }