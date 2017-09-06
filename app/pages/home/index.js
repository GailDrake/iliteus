// This just fires on index.html
import Handlebars from 'handlebars';
import { renderHandlebars } from 'lib/helpers.js';

console.log('index.js (home page)')
const context = { name: 'Mickey', occupation: 'mouse' };

renderHandlebars('handlebars__demo', 'handlebars__demo__target', context);
