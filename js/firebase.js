import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGP4VtoiurEyAdbazZ5hNHFZ3hzcVJz_E",
  authDomain: "kata-netizen.firebaseapp.com",
  databaseURL: "https://kata-netizen-default-rtdb.firebaseio.com/",
  projectId: "kata-netizen",
  storageBucket: "kata-netizen.firebasestorage.app",
  messagingSenderId: "572682044120",
  appId: "1:572682044120:web:dd626bbbb2f4cc44e20dad"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);