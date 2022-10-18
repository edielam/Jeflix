import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD_rGdW6LaBCAczrlKe8ysMMFoYWMfhy1I",
    authDomain: "jeflix-704a5.firebaseapp.com",
    projectId: "jeflix-704a5",
    storageBucket: "jeflix-704a5.appspot.com",
    messagingSenderId: "345047554569",
    appId: "1:345047554569:web:0c9467b036fe6c32e736d8",
    measurementId: "G-6M677W05ZR"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();

export default storage;
