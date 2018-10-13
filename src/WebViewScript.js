import Web3 from 'web3';
import ZeroClientProvider from 'web3-provider-engine/zero';

function message(action, arg, cb) {
  window.postMessage({
    action,
    arg,
    cb
  });

  const timer = setInterval(() => {
    if (!window.web3.message) {
      cb(window.web3.message);
      window.web3.message = null;
      clearTimeout(timer);
    }
  }, 100);
}

const engine = ZeroClientProvider({
  getAccounts: cb => {
    message('accounts', null, cb);
  },
  signTransaction: (tx, cb) => {
    message('sign', tx, cb);
  },
  processMessage: (params, cb) => {
    message('processMessage', params, cb);
  }
});

window.web3 = new Web3(engine);

web3.message = null;
