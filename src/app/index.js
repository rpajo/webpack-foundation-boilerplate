
import '../style/foundation.scss';
import '../style/app.scss';

// Either import everything
// import 'foundation-sites'

// Or import individual modules
import 'foundation-sites/dist/js/plugins/foundation.core';
import 'foundation-sites/dist/js/plugins/foundation.dropdownMenu.min.js';
import 'foundation-sites/dist/js/plugins/foundation.util.keyboard.min.js';
import 'foundation-sites/dist/js/plugins/foundation.util.box.min.js';
import 'foundation-sites/dist/js/plugins/foundation.util.nest.min.js';

import logo_foundation from '../public/images/foundation-logo.png';
import logo_webpack from '../public/images/webpack-logo.png';

document.addEventListener("DOMContentLoaded", function(){
	$("#foundationLogo")[0].src = logo_foundation;
	$("#webpackLogo")[0].src = logo_webpack;
});
