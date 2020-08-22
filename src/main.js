import Vue from 'vue'
import App from './App.vue'
import router from "./routes/index";

import * as firebase from "firebase";
import store from "./store";

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyA8OSLRwIuqTwYGjG1JoPJRUSABqY1x-sE",
    authDomain: "learning-vue-6daf0.firebaseapp.com",
    databaseURL: "https://learning-vue-6daf0.firebaseio.com",
    projectId: "learning-vue-6daf0",
    storageBucket: "learning-vue-6daf0.appspot.com",
    messagingSenderId: "670933560537",
    appId: "1:670933560537:web:be507b5a4408c2bd4e22c8",
    measurementId: "G-91Z9V4EGQN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')