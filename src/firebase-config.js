import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC8l3TJjZQ_wrEmXkhq7295AdKJqOwA40E",
  authDomain: "banshee-user-login.firebaseapp.com",
  projectId: "banshee-user-login",
  storageBucket: "banshee-user-login.appspot.com",
  messagingSenderId: "468689597538",
  appId: "1:468689597538:web:461e6fb676d295b69b4d3b",
  measurementId: "G-9VPFBHF1WG",
};

//   make envfile for apiKey and authDomain

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
