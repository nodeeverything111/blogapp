(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LoginForm = (function (_React$Component) {
	_inherits(LoginForm, _React$Component);

	function LoginForm(props) {
		_classCallCheck(this, LoginForm);

		_get(Object.getPrototypeOf(LoginForm.prototype), 'constructor', this).call(this, props);
		this.state = { account: '', passwd: '', passwdtip: 'logintiphide' };
	}

	_createClass(LoginForm, [{
		key: 'handleClick',
		value: function handleClick(ev) {
			var _this = this;

			debugger;
			$.ajax({
				type: 'POST',
				url: '/login/loginaction',
				data: { account: this.state.account, passwd: this.state.passwd }
			}).done(function (data) {
				debugger;
				window.sessionStorage.setItem('token', data.token);
				window.sessionStorage.setItem('account', data.account);

				window.location.href = "/";
			}).fail(function (jqXhr) {
				debugger;
				_this.setState({ passwdtip: 'col-xs-6 loginPasswd' });
			});
		}
	}, {
		key: 'updateAccount',
		value: function updateAccount(ev) {
			debugger;
			this.setState({ account: event.target.value });
		}
	}, {
		key: 'updatePasswd',
		value: function updatePasswd(ev) {
			debugger;
			this.setState({ passwd: event.target.value });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2['default'].createElement(
				'div',
				{ className: 'loginForm' },
				_react2['default'].createElement(
					'div',
					{ className: 'loginTitle' },
					'Welcome to blog'
				),
				_react2['default'].createElement('br', null),
				_react2['default'].createElement('br', null),
				_react2['default'].createElement(
					'div',
					{ className: 'col-md-offset-4' },
					_react2['default'].createElement(
						'div',
						{ className: 'input-group input-group-lg col-xs-6' },
						_react2['default'].createElement(
							'span',
							{ className: 'input-group-addon', id: 'basic-addon1' },
							'Account:'
						),
						_react2['default'].createElement('input', { type: 'text', value: this.state.account, onChange: function (ev) {
								_this2.updateAccount(ev);
							}, className: 'form-control', placeholder: 'Username', 'aria-describedby': 'basic-addon1' })
					),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement(
						'div',
						{ className: 'input-group input-group-lg col-xs-6' },
						_react2['default'].createElement(
							'span',
							{ className: 'input-group-addon', id: 'basic-addon2' },
							'Passwd:'
						),
						_react2['default'].createElement('input', { type: 'text', value: this.state.passwd, onChange: function (ev) {
								_this2.updatePasswd(ev);
							}, className: 'form-control', placeholder: 'Passwd', 'aria-describedby': 'basic-addon2' })
					),
					_react2['default'].createElement(
						'div',
						{ className: this.state.passwdtip },
						'password is not correct'
					),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement(
						'div',
						{ className: 'col-xs-6' },
						_react2['default'].createElement(
							'button',
							{ className: 'btn btn-block btn-success', onClick: function (ev) {
									_this2.handleClick(ev);
								} },
							'submit'
						)
					)
				)
			);
		}
	}]);

	return LoginForm;
})(_react2['default'].Component);

exports['default'] = LoginForm;
module.exports = exports['default'];

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentLoginLoginForm = require('./component/login/LoginForm');

var _componentLoginLoginForm2 = _interopRequireDefault(_componentLoginLoginForm);

_react2['default'].render(_react2['default'].createElement(_componentLoginLoginForm2['default'], null), document.getElementById('app'));

},{"./component/login/LoginForm":1,"react":"react"}]},{},[2]);
