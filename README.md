# Overview
vue-indicator is a mobile loading indicator plugin for vue.js.

# Installation
First, install `vue-indicator` from npm:
```bash
$ npm install vue-indicator
```

Then use it:
```Javascript
// ES6 mudule
import Indicator from 'vue-indicator';

// CommonJS
const Indicator = require('vue-indicator').default;
```

# Usage
Open an indicator:
```Javascript
Indicator.open();
```

Or open an indicator with text:
```Javascript
Indicator.open('Loading...');
```

Then close it:
```Javascript
Indicator.close();
```

# License
MIT
