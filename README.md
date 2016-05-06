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
Indicator.open({ modal: true });
```

Then close it:
```Javascript
Indicator.close();
```

# API
| Option            | Description                                                     | Value      | Default |
|-------------------|-----------------------------------------------------------------|------------|---------|
| text              | content of the indicator                                        |            |         |
| modal             | decides if a modal layer appears behind the indicator           | true false | false   | 
| closeOnClickModal | decides if the indicator should be closed when modal is clicked | true false | true    |

# License
MIT
