"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user: function user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN: function SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER: function SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser: function fetchUser(_ref, user) {
      var commit = _ref.commit;
      commit("SET_LOGGED_IN", user !== null);

      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});

exports["default"] = _default;