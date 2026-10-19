import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAEE9A8KVaYYescQaZIqqll0N-shR35V5I",
    authDomain: "kodomo-stock-count.firebaseapp.com",
    projectId: "kodomo-stock-count",
    storageBucket: "kodomo-stock-count.firebasestorage.app",
    messagingSenderId: "592258548445",
    appId: "1:592258548445:web:beefd0ef76b23e4f689134",
    measurementId: "G-68MB6J7EJJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
