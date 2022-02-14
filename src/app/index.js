import '../style/foundation.scss';
import '../style/app.scss';

// You can import 'foundation-sites' which includes all the components or each component separately
// import { Foundation } from 'foundation-sites';

import { Foundation } from 'foundation-sites/js/foundation.core';
import { DropdownMenu } from 'foundation-sites/js/foundation.dropdownMenu';
import { Slider } from 'foundation-sites/js/foundation.slider';

import logo_foundation from '../public/images/foundation-logo.png';
import logo_webpack from '../public/images/webpack-logo.png';

console.log('Entry Loaded');

Foundation.addToJquery($);

Foundation.plugin(DropdownMenu, 'DropdownMenu');
Foundation.plugin(Slider, 'Slider');

document.addEventListener("DOMContentLoaded", function() {
	$(document).foundation();
	$("#foundationLogo")[0].src = logo_foundation;
	$("#webpackLogo")[0].src = logo_webpack;
});
