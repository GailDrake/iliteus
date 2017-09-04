import Handlebars from 'handlebars';
import { renderHandlebars, registerPartial } from 'lib/helpers.js';
import navbar from 'components/navbar';
// import { renderHandlebars } from 'lib/helpers.js';

// This is the only entry point for less - no need to import less files into JS anywhere else
import './../../style/less/main.less';

const context = { name: 'Dave', occupation: 'developer' };

registerPartial(navbar);
console.log(Handlebars.partials)
// See helpers.js for API
renderHandlebars('handlebars-navbar', 'handlebars-navbar__target');
renderHandlebars('handlebars-demo', 'handlebars-demo__target', context);
