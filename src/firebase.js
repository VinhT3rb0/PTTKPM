import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBIREhz1m0j8FFtBQdRblnmE3U0UmY3yXo",
  authDomain: "data-web-76487.firebaseapp.com",
  projectId: "data-web-76487",
  storageBucket: "data-web-76487.appspot.com",
  messagingSenderId: "1030416258679",
  appId: "1:1030416258679:web:451d73b6ff1a595d601872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };