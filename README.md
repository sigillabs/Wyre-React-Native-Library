This is the React.js component for Wyre Verification.

## Installation

`npm install wyre-react-library`

## Usage

import the library

```
import WyreVerification from 'wyre-react-library';
```

The network you are using is decided base on metamask through [web3-webpacked-react](https://github.com/NoahHydro/web3-webpacked-react). If you are on mainnet it will go to production where tokens can be viewed [here](https://etherscan.io/address/0x9f2a7b5e6280727cd6c8486f5f96e5f76164f2df), on any testnet it will go to sandbox (currently sends tokens to kovan which can be viewed [here](https://kovan.etherscan.io/address/0xb14fa2276d8bd26713a6d98871b2d63da9eefe6f)

render the component
```
<WyreVerification myButton={myButton} apiKey={apiKey}/>
```

You will need to generate your own button and pass it in as a prop. One example implementation using the Material-Ui Button would be:

```
const myButton = OurButton

...then make a function to render it

const OurButton = (props) => {
  return (
    <Button {...props} variant="contained" color="primary">Open Wyre</Button>
  );
}
```
