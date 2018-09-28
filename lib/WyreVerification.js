"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIframe = _interopRequireDefault(require("react-iframe"));

var _web3WebpackedReact = require("web3-webpacked-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const styles = {
  zIndex: "999999",
  backgroundColor: "transparent",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0"
};

class WyreVerification extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      wyreIframeOpen: false
    };
  }

  componentDidMount() {
    let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    let messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
    window[eventMethod](messageEvent, e => {
      switch (e.data) {
        case "close":
          this.setState({
            wyreIframeOpen: false
          });
          break;

        case "complete":
          this.setState({
            wyreIframeOpen: false
          });
          break;

        default:
      }
    }, false);
  }

  render() {
    const MyButton = this.props.myButton;
    const apiKey = this.props.apiKey;
    const url = this.props.w3w.networkId === "1" ? "https://verify.sendwyre.com/?apiKey=" : "https://verify.testwyre.com/?apiKey=";
    const buttonDisplay = !this.state.wyreIframeOpen ? "block" : "none";
    const display = this.state.wyreIframeOpen ? "block" : "none";
    return _react.default.createElement("div", {
      id: "wyre-div",
      style: {
        height: "570px"
      }
    }, _react.default.createElement(MyButton, {
      style: {
        display: buttonDisplay
      },
      onClick: () => {
        this.setState({
          wyreIframeOpen: true
        });
      }
    }), _react.default.createElement(_reactIframe.default, {
      url: url + apiKey,
      display: display,
      styles: {
        styles
      },
      position: "relative"
    }));
  }

}

var _default = (0, _web3WebpackedReact.withWeb3)(WyreVerification);

exports.default = _default;