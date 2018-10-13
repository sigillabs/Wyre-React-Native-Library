const Web3 = require('web3');

window.web3 = new Web3({
  sendAsync: function(payload, cb) {
    postMessage(payload);

    let timer = setInterval(() => {
      if (window.web3.messages.length > 0) {
        cb(window.web3.messages.pop());
        clearTimeout(timer);
      }
    }, 100);
  }
});

web3.messages = [];
