import * as PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, WebView } from 'react-native';
import text from '../dist/script.txt';

export default class WyreVerification extends Component {
  componentDidMount() {}

  render() {
    const { apiKey, networkId, web3 } = this.props;
    const url =
      networkId === 1
        ? 'https://verify.sendwyre.com/?apiKey='
        : 'https://verify.testwyre.com/?apiKey=';
    const uri = `${url}${apiKey}`;

    return (
      <WebView
        {...this.props}
        ref={ref => (this.webview = ref)}
        injectedJavaScript={text}
        onMessage={async (e) => {
          const { data } = e.nativeEvent;
          const { arg, cb } = data;
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];

          switch(data.action) {
            case 'accounts':
              console.warn('accounts');
              cb(null, accounts);
              break;

            case 'sign':
              console.warn('sign');
              const { raw, tx } = await web3.eth.signTransaction(arg, account);
              cb(null, raw);
              break;

            case 'processMessage':
              console.warn('process message', arg);
              break;
          }
        }}
        source={{ uri }}
        originWhitelist={['*']}
        useWebKit={true}
        {...this.props}
      />
    );
  }
}

WyreVerification.propTypes = {
  networkId: PropTypes.number.isRequired,
  apiKey: PropTypes.string.isRequired,
  web3: PropTypes.object.isRequired
};
