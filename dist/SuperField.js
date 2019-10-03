"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _InputField = _interopRequireDefault(require("./InputField"));

var _fuse = _interopRequireDefault(require("fuse.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputContainer = _styledComponents["default"].div.withConfig({
  displayName: "SuperField__InputContainer",
  componentId: "sc-35dw4r-0"
})(["width:", ";height:", ";background:#eee;margin-bottom:15px;", ";input{padding-left:10px;width:100%;height:100%;margin:0px;border:1px solid #ccc;", ";}"], function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.css && props.css;
}, function (props) {
  return props.open && "border-bottom: 0px;";
});

var _StyledInputContainer = (0, _styledComponents["default"])(InputContainer).withConfig({
  displayName: "SuperField___StyledInputContainer",
  componentId: "sc-35dw4r-1"
})(["", ""], function (p) {
  return p._css;
});

var Options = _styledComponents["default"].div.withConfig({
  displayName: "SuperField__Options",
  componentId: "sc-35dw4r-2"
})(["width:100%;border:1px solid #ccc;background-color:white;"]);

var Option = _styledComponents["default"].div.withConfig({
  displayName: "SuperField__Option",
  componentId: "sc-35dw4r-3"
})(["height:80px;position:relative;", " div.copy{position:absolute;top:50%;transform:translateY(-50%);padding-left:10px;font-size:14px;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:0px;color:rgb(255,255,255);span{display:block;&.name{font-size:16px;font-weight:normal;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#000000;}&.title{font-size:12px;font-weight:normal;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#000000;}&.department{font-size:10px;font-weight:normal;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#000000;}}}background-color:rgb(255,255,255);&.hoverAddName:hover{background-color:rgb(237,245,247);cursor:pointer;}"], function (props) {
  return props.index > 0 ? "border-top: 1px solid #ccc;" : "border: none;";
});

var ImageCircle = _styledComponents["default"].div.withConfig({
  displayName: "SuperField__ImageCircle",
  componentId: "sc-35dw4r-4"
})(["width:69px;height:69px;background-color:#3d627b;border-radius:50%;position:absolute;right:10px;top:50%;transform:translateY(-50%);background-image:url(", ");background-size:contain;background-position:center center;background-repeat:no-repeat;"], function (props) {
  return props.src && props.src;
});

var SuperField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SuperField, _React$Component);

  function SuperField(props) {
    var _this;

    _classCallCheck(this, SuperField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SuperField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleSearchPane", function () {
      return _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_this), "searchValues", function (term) {
      var options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["firstName"]
      };
      var fuse = new _fuse["default"](_this.props.options, options); // "list" is the item array

      var suggestions = fuse.search(term);

      _this.setState({
        suggestions: suggestions,
        value: term
      }, function () {
        term ? _this.setState({
          open: true
        }) : _this.setState({
          open: false,
          value: ""
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setValue", function (sug) {
      _this.setState({
        value: sug.firstName + " " + sug.lastName,
        open: false
      });
    });

    _this.state = {
      suggestions: [],
      open: false
    };
    return _this;
  }

  _createClass(SuperField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        suggestions: this.props.options,
        value: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          height = _this$props.height,
          width = _this$props.width,
          css = _this$props.css;
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_StyledInputContainer, {
        height: height ? height : "35px",
        width: width ? width : "100%",
        open: this.state.open,
        _css: css && css
      }, this.state.open ? _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_InputField["default"], {
        type: "text",
        onChange: function onChange(e) {
          return _this2.searchValues(e.target.value);
        }
      }), _react["default"].createElement(Options, null, this.state.suggestions.map(function (sug, i) {
        return _react["default"].createElement(Option, {
          className: "hoverAddName",
          key: i,
          onClick: function onClick() {
            return _this2.setValue(sug);
          },
          index: i
        }, _react["default"].createElement("div", {
          className: "copy"
        }, _react["default"].createElement("span", {
          className: "name"
        }, sug.firstName, "\xA0", sug.lastName), _react["default"].createElement("span", {
          className: "title"
        }, sug.title), _react["default"].createElement("span", {
          className: "department"
        }, sug.department)), _react["default"].createElement(ImageCircle, {
          src: ""
        }));
      }))) : _react["default"].createElement(_InputField["default"], {
        type: "text",
        value: this.state.value,
        onChange: function onChange(e) {
          return _this2.searchValues(e.target.value);
        },
        placeholder: "Search here ..."
      })));
    }
  }]);

  return SuperField;
}(_react["default"].Component);

var _default = SuperField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TdXBlckZpZWxkLmpzIl0sIm5hbWVzIjpbIklucHV0Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsImNzcyIsIm9wZW4iLCJPcHRpb25zIiwiT3B0aW9uIiwiaW5kZXgiLCJJbWFnZUNpcmNsZSIsInNyYyIsIlN1cGVyRmllbGQiLCJzZXRTdGF0ZSIsInN0YXRlIiwidGVybSIsIm9wdGlvbnMiLCJzaG91bGRTb3J0IiwidGhyZXNob2xkIiwibG9jYXRpb24iLCJkaXN0YW5jZSIsIm1heFBhdHRlcm5MZW5ndGgiLCJtaW5NYXRjaENoYXJMZW5ndGgiLCJrZXlzIiwiZnVzZSIsIkZ1c2UiLCJzdWdnZXN0aW9ucyIsInNlYXJjaCIsInZhbHVlIiwic3VnIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlIiwic2VhcmNoVmFsdWVzIiwidGFyZ2V0IiwibWFwIiwiaSIsInNldFZhbHVlIiwidGl0bGUiLCJkZXBhcnRtZW50IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFIQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU1BLGNBQWMsR0FBR0MsNkJBQU9DLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEpBQ1QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBVjtBQUFBLENBREksRUFFUixVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxNQUFWO0FBQUEsQ0FGRyxFQUtoQixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxHQUFOLElBQWFILEtBQUssQ0FBQ0csR0FBdkI7QUFBQSxDQUxXLEVBWWQsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0ksSUFBTixJQUFjLHFCQUFsQjtBQUFBLENBWlMsQ0FBcEI7Ozs7Ozs7OztBQWdCQSxJQUFNQyxPQUFPLEdBQUdQLDZCQUFPQyxHQUFWO0FB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YyxLQUZyQjtBQUdFLFFBQUEsUUFBUSxFQUFFLGtCQUFBSSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxZQUFMLENBQWtCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU04sS0FBM0IsQ0FBSjtBQUFBLFNBSGI7QUFJRSxRQUFBLFdBQVcsRUFBQztBQUpkLFFBckNKLENBREYsQ0FERjtBQWlERDs7OztFQWhIc0JZLGtCQUFNQyxTOztlQW1IaEI3QixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tIFwiLi9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgRnVzZSBmcm9tIFwiZnVzZS5qc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAke3Byb3BzID0+IHByb3BzLmNzcyAmJiBwcm9wcy5jc3N9O1xuICBpbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICR7cHJvcHMgPT4gcHJvcHMub3BlbiAmJiBcImJvcmRlci1ib3R0b206IDBweDtcIn07XG4gIH1cbmA7XG5cbmNvbnN0IE9wdGlvbnMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5gO1xuXG5jb25zdCBPcHRpb24gPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmluZGV4ID4gMFxuICAgICAgPyBcImJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1wiXG4gICAgICA6IFwiYm9yZGVyOiBub25lO1wifSBkaXYuY29weSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgJi5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAvLyBsaW5lLWhlaWdodDogMS4zODtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICB9XG4gICAgICAmLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAvLyBsaW5lLWhlaWdodDogMS44MztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICB9XG4gICAgICAmLmRlcGFydG1lbnQge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIC8vIGxpbmUtaGVpZ2h0OiAyLjI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICYuaG92ZXJBZGROYW1lOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAyNDUsIDI0Nyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZUNpcmNsZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA2OXB4O1xuICBoZWlnaHQ6IDY5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDYyN2I7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvcHMgPT4gcHJvcHMuc3JjICYmIHByb3BzLnNyY30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5gO1xuXG5jbGFzcyBTdXBlckZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3VnZ2VzdGlvbnM6IFtdLFxuICAgICAgb3BlbjogZmFsc2VcbiAgICB9O1xuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1Z2dlc3Rpb25zOiB0aGlzLnByb3BzLm9wdGlvbnMsXG4gICAgICB2YWx1ZTogXCJcIlxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlU2VhcmNoUGFuZSA9ICgpID0+XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuXG4gICAgfSk7XG5cbiAgc2VhcmNoVmFsdWVzID0gdGVybSA9PiB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBzaG91bGRTb3J0OiB0cnVlLFxuICAgICAgdGhyZXNob2xkOiAwLjYsXG4gICAgICBsb2NhdGlvbjogMCxcbiAgICAgIGRpc3RhbmNlOiAxMDAsXG4gICAgICBtYXhQYXR0ZXJuTGVuZ3RoOiAzMixcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgICAgIGtleXM6IFtcImZpcnN0TmFtZVwiXVxuICAgIH07XG4gICAgbGV0IGZ1c2UgPSBuZXcgRnVzZSh0aGlzLnByb3BzLm9wdGlvbnMsIG9wdGlvbnMpOyAvLyBcImxpc3RcIiBpcyB0aGUgaXRlbSBhcnJheVxuICAgIGxldCBzdWdnZXN0aW9ucyA9IGZ1c2Uuc2VhcmNoKHRlcm0pO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHN1Z2dlc3Rpb25zLFxuICAgICAgICB2YWx1ZTp0ZXJtXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0ZXJtXG4gICAgICAgICAgID9cbiAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UsIHZhbHVlOiBcIlwiIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgc2V0VmFsdWUgPSBzdWcgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBzdWcuZmlyc3ROYW1lICsgXCIgXCIgKyBzdWcubGFzdE5hbWUsXG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaGVpZ2h0LCB3aWR0aCwgY3NzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPElucHV0Q29udGFpbmVyXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHQgPyBoZWlnaHQgOiBcIjM1cHhcIn1cbiAgICAgICAgICB3aWR0aD17d2lkdGggPyB3aWR0aCA6IFwiMTAwJVwifVxuICAgICAgICAgIGNzcz17Y3NzICYmIGNzc31cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuID8gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNlYXJjaFZhbHVlcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxPcHRpb25zPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLm1hcCgoc3VnLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJob3ZlckFkZE5hbWVcIn1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFZhbHVlKHN1Zyl9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb3B5XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJuYW1lXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3N1Zy5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWcubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ0aXRsZVwifT57c3VnLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiZGVwYXJ0bWVudFwifT57c3VnLmRlcGFydG1lbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlQ2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L09wdGlvbnM+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPSB7dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZWFyY2hWYWx1ZXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlIC4uLlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VwZXJGaWVsZDsiXX0=