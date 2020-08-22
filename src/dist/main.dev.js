"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _index = _interopRequireDefault(require("./routes/index"));

var firebase = _interopRequireWildcard(require("firebase"));

var _store = _interopRequireDefault(require("./store"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function (user) {
  _store["default"].dispatch("fetchUser", user);
});
_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _index["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');