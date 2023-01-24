//
// JS entry file
// --------------------------------------------------

// import svgs to build sprite
const svgs = import.meta.globEager('../svg/*.svg')
svgs;

// module imports
import './modules/fontfaceobserver';
import './modules/topbar';
import './modules/reveal-animations';
import './modules/smooth-scroll';
import './modules/cookieconsent';
import './modules/checkbox-group';
import Menu from './modules/menu';

// init modules
new Menu();
