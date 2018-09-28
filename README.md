This is the React.js component for Wyre Verification.

## Installation

`npm install wyre-react-library`

## Usage

import the library

```
import WyreVerification from 'wyre-react-library';
```

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
