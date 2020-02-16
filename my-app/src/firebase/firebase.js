var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyDjDDDIG10CmTj1wPU2TWFJimpHZrvAEUU",
    authDomain: "gecko-8200b.firebaseapp.com",
    databaseURL: "https://gecko-8200b.firebaseio.com",
    projectId: "gecko-8200b",
    storageBucket: "gecko-8200b.appspot.com",
    messagingSenderId: "431834289261",
    appId: "1:431834289261:web:a718683e8962c937c75b64",
    measurementId: "G-EPCHRB9503"
};

firebase.initializeApp(config);
firebase.firestore.settings({timestampsInSnapshots : true});

export default firebase;