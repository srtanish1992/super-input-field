"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InputField = _styledComponents["default"].input.withConfig({
  displayName: "InputField",
  componentId: "n9j51x-0"
})(["&[type=\"text\"]{width:100%;color:black !important}font-family:Helvetica;font-size:16px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.47;letter-spacing:normal;border-radius:0px;width:", ";height:", ";margin-bottom:15px;opacity:", ";"], function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.disabled ? 0.5 : 1.0;
});

InputField.propTypes = {
  type: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  id: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  width: _propTypes["default"].string,
  height: _propTypes["default"].string
};
var _default = InputField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dEZpZWxkLmpzIl0sIm5hbWVzIjpbIklucHV0RmllbGQiLCJzdHlsZWQiLCJpbnB1dCIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNhYmxlZCIsInByb3BUeXBlcyIsInR5cGUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbkNoYW5nZSIsImZ1bmMiLCJpZCIsInBsYWNlaG9sZGVyIiwiZXJyb3IiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDZCQUFPQyxLQUFWO0FBQUE7QUFBQTtBQUFBLDBRQWdCSixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FoQkQsRUFpQkgsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsTUFBVjtBQUFBLENBakJGLEVBbUJILFVBQUFGLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNHLFFBQU4sR0FBaUIsR0FBakIsR0FBdUIsR0FBNUI7QUFBQSxDQW5CRixDQUFoQjs7QUFzQkFOLFVBQVUsQ0FBQ08sU0FBWCxHQUF1QjtBQUNyQkMsRUFBQUEsSUFBSSxFQUFFQyxzQkFBVUMsTUFESztBQUVyQkMsRUFBQUEsUUFBUSxFQUFFRixzQkFBVUcsSUFGQztBQUdyQkMsRUFBQUEsRUFBRSxFQUFFSixzQkFBVUMsTUFITztBQUlyQkksRUFBQUEsV0FBVyxFQUFFTCxzQkFBVUMsTUFKRjtBQUtyQkssRUFBQUEsS0FBSyxFQUFFTixzQkFBVU8sSUFMSTtBQU1yQlosRUFBQUEsS0FBSyxFQUFFSyxzQkFBVUMsTUFOSTtBQU9yQkwsRUFBQUEsTUFBTSxFQUFFSSxzQkFBVUM7QUFQRyxDQUF2QjtlQVVlVixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY29uc3QgSW5wdXRGaWVsZCA9IHN0eWxlZC5pbnB1dGBcbiAgJlt0eXBlPVwidGV4dFwiXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnRcbiAgXG4gIH1cblxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ3O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB3aWR0aCA6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICBoZWlnaHQgOiAke3Byb3BzID0+IHByb3BzLmhlaWdodH07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC41IDogMS4wKX07XG5gO1xuXG5JbnB1dEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZDsiXX0=