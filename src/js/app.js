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
import './modules/object-fit-images';
import './modules/fontfaceobserver';
import './modules/topbar';
import './modules/reveal-animations';
import './modules/smooth-scroll';
import './modules/cookieconsent';
import './modules/checkbox-group';
import Menu from './modules/menu';

// init modules
new Menu();
