import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "some_api_key",
  authDomain: "some_auth_domain",
  projectId: "some_project_id",
  storageBucket: "some_storage_bucket",
  messagingSenderId: "some_messaging_sender",
  appId: "some_app_id"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

export default DB