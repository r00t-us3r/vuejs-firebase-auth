"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Login = _interopRequireDefault(require("../components/Login"));

var _Register = _interopRequireDefault(require("../components/Register"));

var _Dashboard = _interopRequireDefault(require("../components/Dashboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    name: 'login',
    component: _Login["default"]
  }, {
    path: '/register',
    name: 'Register',
    component: _Register["default"]
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: _Dashboard["default"]
  }]
});
var _default = router;
exports["default"] = _default;