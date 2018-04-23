//
// JS entry file
// --------------------------------------------------

// SVG <use> polyfill
import 'svgxuse';

// Babel polyfill
// This import will transpile to single core-js module imports. Only the polyfills needed for our target browsers will be imported.
// Powered by `useBuiltIns: usage` in .babelrc
import 'babel-polyfill'; // eslint-disable-line import/no-unresolved

// module imports
import Testmodule from './modules/testmodule';

// init modules
let testmodule = new Testmodule();
testmodule.logMe();
