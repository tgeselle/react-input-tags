'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTagExample = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reverseString = function reverseString(string) {
  return string.split('').reverse().join('');
};

var ReverseTag = function ReverseTag(_ref) {
  var value = _ref.value,
      handleRemove = _ref.handleRemove;
  return _react2.default.createElement(
    'span',
    { className: 'react-input-tags-tag' },
    _react2.default.createElement(
      'span',
      null,
      reverseString(value)
    ),
    _react2.default.createElement(
      'button',
      {
        onClick: handleRemove
      },
      'x'
    )
  );
};

ReverseTag.propTypes = {
  value: _propTypes2.default.string.isRequired,
  handleRemove: _propTypes2.default.func.isRequired
};

var CustomTagExample = exports.CustomTagExample = function (_React$Component) {
  _inherits(CustomTagExample, _React$Component);

  function CustomTagExample() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomTagExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = CustomTagExample.__proto__ || Object.getPrototypeOf(CustomTagExample)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      tags: []
    }, _this.handleUpdateTags = function (newTags) {
      _this.setState({ tags: newTags });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomTagExample, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_index.InputTagsContainer, {
        tags: this.state.tags,
        handleUpdateTags: this.handleUpdateTags,
        TagImplementation: ReverseTag
      });
    }
  }]);

  return CustomTagExample;
}(_react2.default.Component);