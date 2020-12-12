

import '../style/foundation.scss';
import '../style/app.scss';

import { Dropdown } from 'foundation-sites/js/foundation';

import logo_foundation from '../public/images/foundation-logo.png';
import logo_webpack from '../public/images/webpack-logo.png';

console.log('Entry Loaded');
document.addEventListener("DOMContentLoaded", function() {
	$(document).foundation();
	$("#foundationLogo")[0].src = logo_foundation;
	$("#webpackLogo")[0].src = logo_webpack;
});
