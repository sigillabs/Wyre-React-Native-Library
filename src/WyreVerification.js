import * as PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, WebView } from 'react-native';
// import Web3Webview from 'react-native-web3-webview';

export default class WyreVerification extends Component {
  componentDidMount() {
    // window.web3 = new Web3({
    //   sendAsync: function(payload, cb) {
    //     postMessage('here');
    //   }
    // });postMessage('here1');
    const js = `postMessage(typeof window.web3);`;
    this.webview.injectJavaScript(js);
  }

  render() {
    const { apiKey, networkId } = this.props;
    const url =
      networkId === 1
        ? 'https://verify.sendwyre.com/?apiKey='
        : 'https://verify.testwyre.com/?apiKey=';
    const uri = `${url}${apiKey}`;

    return (
      <WebView
        {...this.props}
        ref={ref => (this.webview = ref)}
        // injectedJavaScript={`postMessage(typeof window.web3);`}
        onMessage={e => {
          console.warn(e);
        }}
        // onLoadStart={err => console.warn('Start')}
        // onLoad={err => console.warn('loaded')}
        // onLoadEnd={err => console.warn('Finished')}
        // onError={err => console.warn(err)}
        source={{ uri }}
        originWhitelist={['*']}
        useWebKit={true}
      />
    );
  }
}

WyreVerification.propTypes = {
  networkId: PropTypes.number.isRequired,
  apiKey: PropTypes.string.isRequired,
  web3: PropTypes.object.isRequired
};
