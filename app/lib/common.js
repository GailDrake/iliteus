// This code will be shared across ALL pages. Make sure all code is absolutely
//    necessary, and will not clash with any code on any page.

import Handlebars from 'handlebars';
import { renderHandlebars, registerPartial } from 'lib/helpers.js';
import navbar from '../components/navbar';
import mediatiles from '../components/mediatiles';

// This is the only entry point for less - no need to import less files into JS anywhere else
import './../less/main.less';

// See helpers.js for API
registerPartial(navbar);
renderHandlebars('handlebars__navbar', 'handlebars__navbar--target');

registerPartial(mediatiles);
renderHandlebars('handlebars__mediatiles', 'handlebars__mediatiles--target');

console.log('common.js - For every page')
