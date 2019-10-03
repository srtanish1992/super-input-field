"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SuperField = _interopRequireDefault(require("./SuperField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SuperInputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SuperInputField, _React$Component);

  function SuperInputField() {
    var _this;

    _classCallCheck(this, SuperInputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SuperInputField).call(this));
    _this.state = {
      options: [{
        "firstName": "John",
        "lastName": "Doe",
        "title": "Software Engineer",
        "department": "IT",
        "img": ""
      }, {
        "firstName": "Dan",
        "lastName": "Pitt",
        "title": "Building Supervisor",
        "department": "Administration",
        "img": ""
      }, {
        "firstName": "Carter",
        "lastName": "Finlay",
        "title": "Electrical Engineer",
        "department": "Energy",
        "img": ""
      }]
    };
    return _this;
  }

  _createClass(SuperInputField, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_SuperField["default"], {
        options: this.state.options,
        width: "30%"
      });
    }
  }]);

  return SuperInputField;
}(_react["default"].Component);

var _default = SuperInputField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TdXBlcklucHV0RmllbGQuanMiXSwibmFtZXMiOlsiU3VwZXJJbnB1dEZpZWxkIiwic3RhdGUiLCJvcHRpb25zIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxlOzs7OztBQUNGLDZCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFHLENBQ1I7QUFDSSxxQkFBYSxNQURqQjtBQUVJLG9CQUFZLEtBRmhCO0FBR0ksaUJBQVUsbUJBSGQ7QUFJSSxzQkFBZSxJQUpuQjtBQUtJLGVBQVE7QUFMWixPQURRLEVBUU47QUFDRSxxQkFBYSxLQURmO0FBRUUsb0JBQVksTUFGZDtBQUdFLGlCQUFVLHFCQUhaO0FBSUUsc0JBQWUsZ0JBSmpCO0FBS0UsZUFBUTtBQUxWLE9BUk0sRUFlTjtBQUNFLHFCQUFhLFFBRGY7QUFFRSxvQkFBWSxRQUZkO0FBR0UsaUJBQVUscUJBSFo7QUFJRSxzQkFBZSxRQUpqQjtBQUtFLGVBQVE7QUFMVixPQWZNO0FBREMsS0FBYjtBQUZVO0FBNEJYOzs7OzZCQUVRO0FBQ1AsYUFDUSxnQ0FBQyxzQkFBRDtBQUNFLFFBQUEsT0FBTyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsT0FEdEI7QUFFRSxRQUFBLEtBQUssRUFBRTtBQUZULFFBRFI7QUFLUTs7OztFQXJDY0Msa0JBQU1DLFM7O2VBd0NyQkosZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdXBlckZpZWxkIGZyb20gXCIuL1N1cGVyRmllbGRcIjtcblxuY2xhc3MgU3VwZXJJbnB1dEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBvcHRpb25zIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmlyc3ROYW1lXCI6IFwiSm9oblwiLFxuICAgICAgICAgICAgICAgIFwibGFzdE5hbWVcIjogXCJEb2VcIixcbiAgICAgICAgICAgICAgICBcInRpdGxlXCIgOiBcIlNvZnR3YXJlIEVuZ2luZWVyXCIsXG4gICAgICAgICAgICAgICAgXCJkZXBhcnRtZW50XCIgOiBcIklUXCIsXG4gICAgICAgICAgICAgICAgXCJpbWdcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmlyc3ROYW1lXCI6IFwiRGFuXCIsXG4gICAgICAgICAgICAgICAgXCJsYXN0TmFtZVwiOiBcIlBpdHRcIixcbiAgICAgICAgICAgICAgICBcInRpdGxlXCIgOiBcIkJ1aWxkaW5nIFN1cGVydmlzb3JcIixcbiAgICAgICAgICAgICAgICBcImRlcGFydG1lbnRcIiA6IFwiQWRtaW5pc3RyYXRpb25cIixcbiAgICAgICAgICAgICAgICBcImltZ1wiIDogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0ZXJcIixcbiAgICAgICAgICAgICAgICBcImxhc3ROYW1lXCI6IFwiRmlubGF5XCIsXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiIDogXCJFbGVjdHJpY2FsIEVuZ2luZWVyXCIsXG4gICAgICAgICAgICAgICAgXCJkZXBhcnRtZW50XCIgOiBcIkVuZXJneVwiLFxuICAgICAgICAgICAgICAgIFwiaW1nXCIgOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIFxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTdXBlckZpZWxkXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17XCIzMCVcIn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdXBlcklucHV0RmllbGQ7Il19