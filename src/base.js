import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCjUFCInvsAEXft1xE9FFHoW7c3xO7q0Kc",
    authDomain: "catch-of-the-day-greg-perry.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-greg-perry-default-rtdb.firebaseio.com",
    
)};

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;