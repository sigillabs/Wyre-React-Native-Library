import * as PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, WebView } from 'react-native';
import text from '../dist/script.txt';

export default class WyreVerification extends Component {
  componentDidMount() {}

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
        injectedJavaScript={text}
        onMessage={e => {
          console.warn(e);
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
  apiKey: PropTypes.string.isRequired
};
