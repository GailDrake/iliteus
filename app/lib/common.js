// This code will be shared across ALL pages. Make sure all code is absolutely
//    necessary, and will not clash with any code on any page.

import Handlebars from 'handlebars';
import { renderHandlebars, registerPartial } from 'lib/helpers.js';
import navbar from 'components/navbar';
import footer from 'components/footer';
import navigationbox from 'index/components/navigationbox';

// This is the only entry point for less - no need to import less files into JS anywhere else
import './../less/main.less';

// See helpers.js for API
registerPartial(footer);
renderHandlebars('handlebars__footer', 'handlebars__footer--target');
registerPartial(navigationbox);
renderHandlebars('handlebars__navigationbox', 'handlebars__navigationbox--target');
registerPartial(navbar);
renderHandlebars('handlebars__navbar', 'handlebars__navbar__target');


console.log('common.js - For every page')
