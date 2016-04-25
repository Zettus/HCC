webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _fluxibleAddonsReact = __webpack_require__(86);
	
	var _fluxibleRouter = __webpack_require__(104);
	
	var _app = __webpack_require__(291);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _reactTapEventPlugin = __webpack_require__(596);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _executeMultiple = __webpack_require__(215);
	
	var _executeMultiple2 = _interopRequireDefault(_executeMultiple);
	
	var _GetItemsStateAction = __webpack_require__(286);
	
	var _GetItemsStateAction2 = _interopRequireDefault(_GetItemsStateAction);
	
	var _loadConfigAction = __webpack_require__(288);
	
	var _loadConfigAction2 = _interopRequireDefault(_loadConfigAction);
	
	var _connectWSAction = __webpack_require__(287);
	
	var _connectWSAction2 = _interopRequireDefault(_connectWSAction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.appDebug = __webpack_require__(28);
	var debug = window.appDebug('HCC:client');
	
	var dehydratedState = {};
	
	window.React = _reactDom2.default; // For chrome dev tool support
	// Needed for onTouchTap
	// Can go away when react 1.0 release
	// Check this repo:
	// https://github.com/zilverline/react-tap-event-plugin
	(0, _reactTapEventPlugin2.default)();
	
	debug('rehydrating app');
	
	// pass in the dehydrated server state from server.js
	_app2.default.rehydrate(dehydratedState, function (err, context) {
	    if (err) {
	        throw err;
	    }
	
	    (0, _executeMultiple2.default)(context, {
	        loadConfig: { action: _loadConfigAction2.default, isCritical: true },
	        getItemsState: ['loadConfig', { action: _GetItemsStateAction2.default, isCritical: true }],
	        connectWebSocket: ['getItemsState', { action: _connectWSAction2.default }]
	    });
	
	    context.executeAction(_fluxibleRouter.navigateAction, { url: location.pathname }).then(function () {
	        window.context = context;
	        var mountNode = document.getElementById('reactContent');
	
	        _reactDom2.default.render((0, _fluxibleAddonsReact.createElementWithContext)(context), mountNode, function () {
	            return debug('React Rendered');
	        });
	    });
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(248);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * This mixin isn't necessary and will be removed soon. DO NOT USE!
	 *
	 * All internal components that use this mixin should be switched to the
	 * `styleUtils` that this mixin now wraps. Notice the method signature of
	 * the `prepareStyles()` function of this mixin is different than the method
	 * signature of the `prepareStyles()` function in `styleUtils`.
	 *
	 * See `../utils/styles.js` for more details.
	 */
	exports.default = {
	
	  propTypes: {
	    style: _react2.default.PropTypes.object
	  },
	
	  mergeStyles: _styles.mergeStyles,
	
	  mergeAndPrefix: _styles.mergeAndPrefix,
	
	  prepareStyles: function prepareStyles() {
	    var _ref = this.state && this.state.muiTheme || this.context && this.context.muiTheme || this.props && this.props.muiTheme || {};
	
	    var _ref$prepareStyles = _ref.prepareStyles;
	    var prepareStyles = _ref$prepareStyles === undefined ? function (style) {
	      return style;
	    } : _ref$prepareStyles;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return prepareStyles(_styles.mergeStyles.apply(undefined, [{}].concat(args)));
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getMuiTheme;
	
	var _lodash = __webpack_require__(231);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _colorManipulator = __webpack_require__(107);
	
	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);
	
	var _autoPrefix = __webpack_require__(60);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _lightBaseTheme = __webpack_require__(151);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _zIndex = __webpack_require__(243);
	
	var _zIndex2 = _interopRequireDefault(_zIndex);
	
	var _transformers = __webpack_require__(575);
	
	var _lodash3 = __webpack_require__(551);
	
	var _lodash4 = _interopRequireDefault(_lodash3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Get the MUI theme corresponding to a base theme.
	 * It's possible to override the computed theme values
	 * by providing a second argument. The calculated
	 * theme will be deeply merged with the second argument.
	 */
	function getMuiTheme(baseTheme, muiTheme) {
	  baseTheme = (0, _lodash2.default)({}, _lightBaseTheme2.default, baseTheme);
	  var _baseTheme = baseTheme;
	  var palette = _baseTheme.palette;
	  var spacing = _baseTheme.spacing;
	
	  muiTheme = (0, _lodash2.default)({
	    isRtl: false,
	    userAgent: undefined,
	    zIndex: _zIndex2.default,
	    baseTheme: baseTheme,
	    rawTheme: baseTheme, // To provide backward compatibility.
	    appBar: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      height: spacing.desktopKeylineIncrement
	    },
	    avatar: {
	      borderColor: 'rgba(0, 0, 0, 0.08)'
	    },
	    badge: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.accent1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryTextColor: palette.alternateTextColor
	    },
	    button: {
	      height: 36,
	      minWidth: 88,
	      iconButtonSize: spacing.iconSize * 2
	    },
	    cardText: {
	      textColor: palette.textColor
	    },
	    checkbox: {
	      boxColor: palette.textColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    datePicker: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      calendarTextColor: palette.textColor,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    dropDownMenu: {
	      accentColor: palette.borderColor
	    },
	    flatButton: {
	      color: _colors2.default.transparent,
	      buttonFilterColor: '#999999',
	      disabledTextColor: _colorManipulator2.default.fade(palette.textColor, 0.3),
	      textColor: palette.textColor,
	      primaryTextColor: palette.accent1Color,
	      secondaryTextColor: palette.primary1Color
	    },
	    floatingActionButton: {
	      buttonSize: 56,
	      miniSize: 40,
	      color: palette.accent1Color,
	      iconColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryIconColor: palette.alternateTextColor,
	      disabledTextColor: palette.disabledColor
	    },
	    gridTile: {
	      textColor: _colors2.default.white
	    },
	    inkBar: {
	      backgroundColor: palette.accent1Color
	    },
	    leftNav: {
	      width: spacing.desktopKeylineIncrement * 4,
	      color: palette.canvasColor
	    },
	    listItem: {
	      nestedLevelDepth: 18
	    },
	    menu: {
	      backgroundColor: palette.canvasColor,
	      containerBackgroundColor: palette.canvasColor
	    },
	    menuItem: {
	      dataHeight: 32,
	      height: 48,
	      hoverColor: 'rgba(0, 0, 0, .035)',
	      padding: spacing.desktopGutter,
	      selectedTextColor: palette.accent1Color
	    },
	    menuSubheader: {
	      padding: spacing.desktopGutter,
	      borderColor: palette.borderColor,
	      textColor: palette.primary1Color
	    },
	    paper: {
	      backgroundColor: palette.canvasColor,
	      zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
	        return '0 ' + d[0] + 'px ' + d[1] + 'px ' + _colorManipulator2.default.fade(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + _colorManipulator2.default.fade(palette.shadowColor, d[5]);
	      })
	    },
	    radioButton: {
	      borderColor: palette.textColor,
	      backgroundColor: palette.alternateTextColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      size: 24,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    raisedButton: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.accent1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      disabledColor: _colorManipulator2.default.darken(palette.alternateTextColor, 0.1),
	      disabledTextColor: _colorManipulator2.default.fade(palette.textColor, 0.3)
	    },
	    refreshIndicator: {
	      strokeColor: palette.borderColor,
	      loadingStrokeColor: palette.primary1Color
	    },
	    slider: {
	      trackSize: 2,
	      trackColor: palette.primary3Color,
	      trackColorSelected: palette.accent3Color,
	      handleSize: 12,
	      handleSizeDisabled: 8,
	      handleSizeActive: 18,
	      handleColorZero: palette.primary3Color,
	      handleFillColor: palette.alternateTextColor,
	      selectionColor: palette.primary1Color,
	      rippleColor: palette.primary1Color
	    },
	    snackbar: {
	      textColor: palette.alternateTextColor,
	      backgroundColor: palette.textColor,
	      actionColor: palette.accent1Color
	    },
	    table: {
	      backgroundColor: palette.canvasColor
	    },
	    tableHeader: {
	      borderColor: palette.borderColor
	    },
	    tableHeaderColumn: {
	      textColor: palette.accent3Color,
	      height: 56,
	      spacing: 24
	    },
	    tableFooter: {
	      borderColor: palette.borderColor,
	      textColor: palette.accent3Color
	    },
	    tableRow: {
	      hoverColor: palette.accent2Color,
	      stripeColor: _colorManipulator2.default.lighten(palette.primary1Color, 0.55),
	      selectedColor: palette.borderColor,
	      textColor: palette.textColor,
	      borderColor: palette.borderColor,
	      height: 48
	    },
	    tableRowColumn: {
	      height: 48,
	      spacing: 24
	    },
	    timePicker: {
	      color: palette.alternateTextColor,
	      textColor: palette.accent3Color,
	      accentColor: palette.primary1Color,
	      clockColor: palette.textColor,
	      clockCircleColor: palette.clockCircleColor,
	      headerColor: palette.pickerHeaderColor || palette.primary1Color,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    toggle: {
	      thumbOnColor: palette.primary1Color,
	      thumbOffColor: palette.accent2Color,
	      thumbDisabledColor: palette.borderColor,
	      thumbRequiredColor: palette.primary1Color,
	      trackOnColor: _colorManipulator2.default.fade(palette.primary1Color, 0.5),
	      trackOffColor: palette.primary3Color,
	      trackDisabledColor: palette.primary3Color,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor,
	      trackRequiredColor: _colorManipulator2.default.fade(palette.primary1Color, 0.5)
	    },
	    toolbar: {
	      backgroundColor: _colorManipulator2.default.darken(palette.accent2Color, 0.05),
	      height: 56,
	      titleFontSize: 20,
	      iconColor: 'rgba(0, 0, 0, .40)',
	      separatorColor: 'rgba(0, 0, 0, .175)',
	      menuHoverColor: 'rgba(0, 0, 0, .10)'
	    },
	    tabs: {
	      backgroundColor: palette.primary1Color,
	      textColor: _colorManipulator2.default.fade(palette.alternateTextColor, 0.7),
	      selectedTextColor: palette.alternateTextColor
	    },
	    textField: {
	      textColor: palette.textColor,
	      hintColor: palette.disabledColor,
	      floatingLabelColor: palette.textColor,
	      disabledTextColor: palette.disabledColor,
	      errorColor: _colors2.default.red500,
	      focusColor: palette.primary1Color,
	      backgroundColor: 'transparent',
	      borderColor: palette.borderColor
	    }
	  }, muiTheme);
	
	  var transformers = [_transformers.autoprefixer, _transformers.rtl, _transformers.callOnce].map(function (t) {
	    return t(muiTheme);
	  }).filter(function (t) {
	    return t;
	  });
	  muiTheme.prefix = _autoPrefix2.default.getTransform(muiTheme.userAgent);
	  muiTheme.prepareStyles = _lodash4.default.apply(undefined, _toConsumableArray(transformers));
	
	  return muiTheme;
	}
	module.exports = exports['default'];

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(609);

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  red50: '#ffebee',
	  red100: '#ffcdd2',
	  red200: '#ef9a9a',
	  red300: '#e57373',
	  red400: '#ef5350',
	  red500: '#f44336',
	  red600: '#e53935',
	  red700: '#d32f2f',
	  red800: '#c62828',
	  red900: '#b71c1c',
	  redA100: '#ff8a80',
	  redA200: '#ff5252',
	  redA400: '#ff1744',
	  redA700: '#d50000',
	
	  pink50: '#fce4ec',
	  pink100: '#f8bbd0',
	  pink200: '#f48fb1',
	  pink300: '#f06292',
	  pink400: '#ec407a',
	  pink500: '#e91e63',
	  pink600: '#d81b60',
	  pink700: '#c2185b',
	  pink800: '#ad1457',
	  pink900: '#880e4f',
	  pinkA100: '#ff80ab',
	  pinkA200: '#ff4081',
	  pinkA400: '#f50057',
	  pinkA700: '#c51162',
	
	  purple50: '#f3e5f5',
	  purple100: '#e1bee7',
	  purple200: '#ce93d8',
	  purple300: '#ba68c8',
	  purple400: '#ab47bc',
	  purple500: '#9c27b0',
	  purple600: '#8e24aa',
	  purple700: '#7b1fa2',
	  purple800: '#6a1b9a',
	  purple900: '#4a148c',
	  purpleA100: '#ea80fc',
	  purpleA200: '#e040fb',
	  purpleA400: '#d500f9',
	  purpleA700: '#aa00ff',
	
	  deepPurple50: '#ede7f6',
	  deepPurple100: '#d1c4e9',
	  deepPurple200: '#b39ddb',
	  deepPurple300: '#9575cd',
	  deepPurple400: '#7e57c2',
	  deepPurple500: '#673ab7',
	  deepPurple600: '#5e35b1',
	  deepPurple700: '#512da8',
	  deepPurple800: '#4527a0',
	  deepPurple900: '#311b92',
	  deepPurpleA100: '#b388ff',
	  deepPurpleA200: '#7c4dff',
	  deepPurpleA400: '#651fff',
	  deepPurpleA700: '#6200ea',
	
	  indigo50: '#e8eaf6',
	  indigo100: '#c5cae9',
	  indigo200: '#9fa8da',
	  indigo300: '#7986cb',
	  indigo400: '#5c6bc0',
	  indigo500: '#3f51b5',
	  indigo600: '#3949ab',
	  indigo700: '#303f9f',
	  indigo800: '#283593',
	  indigo900: '#1a237e',
	  indigoA100: '#8c9eff',
	  indigoA200: '#536dfe',
	  indigoA400: '#3d5afe',
	  indigoA700: '#304ffe',
	
	  blue50: '#e3f2fd',
	  blue100: '#bbdefb',
	  blue200: '#90caf9',
	  blue300: '#64b5f6',
	  blue400: '#42a5f5',
	  blue500: '#2196f3',
	  blue600: '#1e88e5',
	  blue700: '#1976d2',
	  blue800: '#1565c0',
	  blue900: '#0d47a1',
	  blueA100: '#82b1ff',
	  blueA200: '#448aff',
	  blueA400: '#2979ff',
	  blueA700: '#2962ff',
	
	  lightBlue50: '#e1f5fe',
	  lightBlue100: '#b3e5fc',
	  lightBlue200: '#81d4fa',
	  lightBlue300: '#4fc3f7',
	  lightBlue400: '#29b6f6',
	  lightBlue500: '#03a9f4',
	  lightBlue600: '#039be5',
	  lightBlue700: '#0288d1',
	  lightBlue800: '#0277bd',
	  lightBlue900: '#01579b',
	  lightBlueA100: '#80d8ff',
	  lightBlueA200: '#40c4ff',
	  lightBlueA400: '#00b0ff',
	  lightBlueA700: '#0091ea',
	
	  cyan50: '#e0f7fa',
	  cyan100: '#b2ebf2',
	  cyan200: '#80deea',
	  cyan300: '#4dd0e1',
	  cyan400: '#26c6da',
	  cyan500: '#00bcd4',
	  cyan600: '#00acc1',
	  cyan700: '#0097a7',
	  cyan800: '#00838f',
	  cyan900: '#006064',
	  cyanA100: '#84ffff',
	  cyanA200: '#18ffff',
	  cyanA400: '#00e5ff',
	  cyanA700: '#00b8d4',
	
	  teal50: '#e0f2f1',
	  teal100: '#b2dfdb',
	  teal200: '#80cbc4',
	  teal300: '#4db6ac',
	  teal400: '#26a69a',
	  teal500: '#009688',
	  teal600: '#00897b',
	  teal700: '#00796b',
	  teal800: '#00695c',
	  teal900: '#004d40',
	  tealA100: '#a7ffeb',
	  tealA200: '#64ffda',
	  tealA400: '#1de9b6',
	  tealA700: '#00bfa5',
	
	  green50: '#e8f5e9',
	  green100: '#c8e6c9',
	  green200: '#a5d6a7',
	  green300: '#81c784',
	  green400: '#66bb6a',
	  green500: '#4caf50',
	  green600: '#43a047',
	  green700: '#388e3c',
	  green800: '#2e7d32',
	  green900: '#1b5e20',
	  greenA100: '#b9f6ca',
	  greenA200: '#69f0ae',
	  greenA400: '#00e676',
	  greenA700: '#00c853',
	
	  lightGreen50: '#f1f8e9',
	  lightGreen100: '#dcedc8',
	  lightGreen200: '#c5e1a5',
	  lightGreen300: '#aed581',
	  lightGreen400: '#9ccc65',
	  lightGreen500: '#8bc34a',
	  lightGreen600: '#7cb342',
	  lightGreen700: '#689f38',
	  lightGreen800: '#558b2f',
	  lightGreen900: '#33691e',
	  lightGreenA100: '#ccff90',
	  lightGreenA200: '#b2ff59',
	  lightGreenA400: '#76ff03',
	  lightGreenA700: '#64dd17',
	
	  lime50: '#f9fbe7',
	  lime100: '#f0f4c3',
	  lime200: '#e6ee9c',
	  lime300: '#dce775',
	  lime400: '#d4e157',
	  lime500: '#cddc39',
	  lime600: '#c0ca33',
	  lime700: '#afb42b',
	  lime800: '#9e9d24',
	  lime900: '#827717',
	  limeA100: '#f4ff81',
	  limeA200: '#eeff41',
	  limeA400: '#c6ff00',
	  limeA700: '#aeea00',
	
	  yellow50: '#fffde7',
	  yellow100: '#fff9c4',
	  yellow200: '#fff59d',
	  yellow300: '#fff176',
	  yellow400: '#ffee58',
	  yellow500: '#ffeb3b',
	  yellow600: '#fdd835',
	  yellow700: '#fbc02d',
	  yellow800: '#f9a825',
	  yellow900: '#f57f17',
	  yellowA100: '#ffff8d',
	  yellowA200: '#ffff00',
	  yellowA400: '#ffea00',
	  yellowA700: '#ffd600',
	
	  amber50: '#fff8e1',
	  amber100: '#ffecb3',
	  amber200: '#ffe082',
	  amber300: '#ffd54f',
	  amber400: '#ffca28',
	  amber500: '#ffc107',
	  amber600: '#ffb300',
	  amber700: '#ffa000',
	  amber800: '#ff8f00',
	  amber900: '#ff6f00',
	  amberA100: '#ffe57f',
	  amberA200: '#ffd740',
	  amberA400: '#ffc400',
	  amberA700: '#ffab00',
	
	  orange50: '#fff3e0',
	  orange100: '#ffe0b2',
	  orange200: '#ffcc80',
	  orange300: '#ffb74d',
	  orange400: '#ffa726',
	  orange500: '#ff9800',
	  orange600: '#fb8c00',
	  orange700: '#f57c00',
	  orange800: '#ef6c00',
	  orange900: '#e65100',
	  orangeA100: '#ffd180',
	  orangeA200: '#ffab40',
	  orangeA400: '#ff9100',
	  orangeA700: '#ff6d00',
	
	  deepOrange50: '#fbe9e7',
	  deepOrange100: '#ffccbc',
	  deepOrange200: '#ffab91',
	  deepOrange300: '#ff8a65',
	  deepOrange400: '#ff7043',
	  deepOrange500: '#ff5722',
	  deepOrange600: '#f4511e',
	  deepOrange700: '#e64a19',
	  deepOrange800: '#d84315',
	  deepOrange900: '#bf360c',
	  deepOrangeA100: '#ff9e80',
	  deepOrangeA200: '#ff6e40',
	  deepOrangeA400: '#ff3d00',
	  deepOrangeA700: '#dd2c00',
	
	  brown50: '#efebe9',
	  brown100: '#d7ccc8',
	  brown200: '#bcaaa4',
	  brown300: '#a1887f',
	  brown400: '#8d6e63',
	  brown500: '#795548',
	  brown600: '#6d4c41',
	  brown700: '#5d4037',
	  brown800: '#4e342e',
	  brown900: '#3e2723',
	
	  blueGrey50: '#eceff1',
	  blueGrey100: '#cfd8dc',
	  blueGrey200: '#b0bec5',
	  blueGrey300: '#90a4ae',
	  blueGrey400: '#78909c',
	  blueGrey500: '#607d8b',
	  blueGrey600: '#546e7a',
	  blueGrey700: '#455a64',
	  blueGrey800: '#37474f',
	  blueGrey900: '#263238',
	
	  grey50: '#fafafa',
	  grey100: '#f5f5f5',
	  grey200: '#eeeeee',
	  grey300: '#e0e0e0',
	  grey400: '#bdbdbd',
	  grey500: '#9e9e9e',
	  grey600: '#757575',
	  grey700: '#616161',
	  grey800: '#424242',
	  grey900: '#212121',
	
	  black: '#000000',
	  white: '#ffffff',
	
	  transparent: 'rgba(0, 0, 0, 0)',
	  fullBlack: 'rgba(0, 0, 0, 1)',
	  darkBlack: 'rgba(0, 0, 0, 0.87)',
	  lightBlack: 'rgba(0, 0, 0, 0.54)',
	  minBlack: 'rgba(0, 0, 0, 0.26)',
	  faintBlack: 'rgba(0, 0, 0, 0.12)',
	  fullWhite: 'rgba(255, 255, 255, 1)',
	  darkWhite: 'rgba(255, 255, 255, 0.87)',
	  lightWhite: 'rgba(255, 255, 255, 0.54)'
	};
	module.exports = exports['default'];

/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
	
	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;
	
	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }
	
	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';
	
	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inlineStylePrefixer = __webpack_require__(527);
	
	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);
	
	var _warning = __webpack_require__(90);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var prefixers = {};
	
	var hasWarnedAboutUserAgent = false;
	
	exports.default = {
	  getTransform: function getTransform(userAgent) {
	    if (userAgent === undefined && typeof navigator !== 'undefined') {
	      userAgent = navigator.userAgent;
	    }
	
	    if (userAgent === undefined && !hasWarnedAboutUserAgent) {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n        for server-side rendering.') : undefined;
	
	      hasWarnedAboutUserAgent = true;
	    }
	
	    if (userAgent === false) {
	      // Disabled autoprefixer
	      return function (style) {
	        return style;
	      };
	    } else if (userAgent === 'all' || userAgent === undefined) {
	      // Prefix for all user agent
	      return _inlineStylePrefixer2.default.prefixAll;
	    } else {
	      var _ret = function () {
	        var prefixer = new _inlineStylePrefixer2.default({
	          userAgent: userAgent
	        });
	
	        return {
	          v: function v(style) {
	            return prefixer.prefix(style);
	          }
	        };
	      }();
	
	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	  },
	  getPrefixer: function getPrefixer() {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: getPrefixer() is no longer used. Do not use it.') : undefined;
	
	    if (typeof navigator === 'undefined') {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI expects the global navigator.userAgent to be defined\n        for server-side rendering. Set this property when receiving the request headers.') : undefined;
	
	      return null;
	    }
	
	    var userAgent = navigator.userAgent;
	
	    // Get prefixing instance for this user agent
	    var prefixer = prefixers[userAgent];
	    // None found, create a new instance
	    if (!prefixer) {
	      prefixer = new _inlineStylePrefixer2.default({ userAgent: userAgent });
	      prefixers[userAgent] = prefixer;
	    }
	
	    return prefixer;
	  },
	  all: function all(style) {
	    if (!style) {
	      return {};
	    }
	
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: all() is no longer used, it will be removed. Do not use it') : undefined;
	
	    var prefixer = this.getPrefixer();
	
	    if (prefixer) {
	      return prefixer.prefix(style);
	    } else {
	      return _inlineStylePrefixer2.default.prefixAll(style);
	    }
	  },
	  set: function set(style, key, value, muiTheme) {
	    style[key] = value;
	
	    if (muiTheme) {
	      style = muiTheme.prefix(style);
	    } else {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: you need to provide the muiTheme to the autoPrefix.set()') : undefined;
	
	      var prefixer = this.getPrefixer();
	
	      if (prefixer) {
	        style = prefixer.prefix(style);
	      } else {
	        style = _inlineStylePrefixer2.default.prefixAll(style);
	      }
	    }
	  },
	  getPrefix: function getPrefix(key) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: getPrefix() is no longer used, it will be removed. Do not use it') : undefined;
	
	    var style = {};
	    style[key] = true;
	
	    var prefixer = this.getPrefixer();
	    var prefixes = undefined;
	
	    if (prefixer) {
	      prefixes = Object.keys(prefixer.prefix(style));
	    } else {
	      prefixes = Object.keys(_inlineStylePrefixer2.default.prefixAll(style));
	    }
	
	    return prefixes ? prefixes[0] : key;
	  }
	};
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var horizontal = _react2.default.PropTypes.oneOf(['left', 'middle', 'right']);
	var vertical = _react2.default.PropTypes.oneOf(['top', 'center', 'bottom']);
	
	exports.default = {
	
	  corners: _react2.default.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
	
	  horizontal: horizontal,
	
	  vertical: vertical,
	
	  origin: _react2.default.PropTypes.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),
	
	  cornersAndCenter: _react2.default.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),
	
	  stringOrNumber: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	
	  zDepth: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4, 5])
	
	};
	module.exports = exports['default'];

/***/ },
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var SvgIcon = _react2.default.createClass({
	  displayName: 'SvgIcon',
	
	  propTypes: {
	    /**
	     * Elements passed into the SVG Icon.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * This is the fill color of the svg icon.
	     * If not specified, this component will default
	     * to muiTheme.palette.textColor.
	     */
	    color: _react2.default.PropTypes.string,
	
	    /**
	     * This is the icon color when the mouse hovers over the icon.
	     */
	    hoverColor: _react2.default.PropTypes.string,
	
	    /**
	     * Function called when mouse enters this element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,
	
	    /**
	     * Function called when mouse leaves this element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * Allows you to redifine what the coordinates
	     * without units mean inside an svg element. For example,
	     * if the SVG element is 500 (width) by 200 (height), and you
	     * pass viewBox="0 0 50 20", this means that the coordinates inside
	     * the svg will go from the top left corner (0,0) to bottom right (50,20)
	     * and each unit will be worth 10px.
	     */
	    viewBox: _react2.default.PropTypes.string
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      viewBox: '0 0 24 24'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var color = _props.color;
	    var hoverColor = _props.hoverColor;
	    var onMouseEnter = _props.onMouseEnter;
	    var onMouseLeave = _props.onMouseLeave;
	    var style = _props.style;
	    var viewBox = _props.viewBox;
	
	    var other = _objectWithoutProperties(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
	
	    var offColor = color ? color : style && style.fill ? style.fill : this.state.muiTheme.rawTheme.palette.textColor;
	    var onColor = hoverColor ? hoverColor : offColor;
	
	    var mergedStyles = this.mergeStyles({
	      display: 'inline-block',
	      height: 24,
	      width: 24,
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }, style, {
	      // Make sure our fill color overrides fill provided in props.style
	      fill: this.state.hovered ? onColor : offColor
	    });
	
	    var events = hoverColor ? {
	      onMouseEnter: this._handleMouseEnter,
	      onMouseLeave: this._handleMouseLeave
	    } : {};
	
	    return _react2.default.createElement(
	      'svg',
	      _extends({}, other, events, {
	        style: this.prepareStyles(mergedStyles),
	        viewBox: viewBox
	      }),
	      children
	    );
	  }
	});
	
	exports.default = SvgIcon;
	module.exports = exports['default'];

/***/ },
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var headerColor = '#888';
	var stateColor = '#ccc';
	var stateFontSize = 28;
	var alertColor = '#f00';
	var infoColor = '#0f0';
	var warnColor = '#E2CA0C';
	
	var cardStyle = exports.cardStyle = {
	    height: 200,
	    width: 200,
	    margin: 15,
	    borderRadius: 10,
	    border: 'solid 1px #444',
	    display: 'inline-block',
	    cursor: 'pointer',
	    userSelect: 'none'
	};
	
	var headerTitleStyle = exports.headerTitleStyle = {
	    fontSize: 20,
	    textShadow: '2px 2px #111',
	    color: headerColor
	};
	
	var cardTitleStyle = exports.cardTitleStyle = {
	    backgroundColor: '#333',
	    textShadow: '2px 2px #111',
	    border: 'solid 1px #444',
	    borderRadius: 15,
	    display: 'flex',
	    height: 90,
	    fontSize: stateFontSize,
	    alignItems: 'center',
	    textAlign: 'center',
	    userSelect: 'none'
	};
	
	var cardTitleStyleSmall = exports.cardTitleStyleSmall = { fontSize: 20, lineHeight: '43px' };
	var cardTitleRowStyleSmall = exports.cardTitleRowStyleSmall = { borderBottom: 'solid 1px #555', height: '50%' };
	
	var cardTitleRowLabelSmall = exports.cardTitleRowLabelSmall = { fontSize: 14, textTransform: 'uppercase', float: 'left', marginLeft: '8px', color: headerColor };
	var cardTitleLastRowStyleSmall = exports.cardTitleLastRowStyleSmall = { border: 'none' };
	var stateStyleSmall = exports.stateStyleSmall = { width: 'initial', float: 'right', marginRight: '8px' };
	
	var stateStyle = exports.stateStyle = { width: '100%', textAlign: 'center' };
	
	var defaultStyle = exports.defaultStyle = { color: stateColor };
	var alertStyle = exports.alertStyle = { color: alertColor };
	var infoStyle = exports.infoStyle = { color: infoColor };
	var warningStyle = exports.warningStyle = { color: warnColor };
	
	var editButtonStyle = exports.editButtonStyle = { color: headerColor, padding: '3px', fontSize: 22 };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _addons = __webpack_require__(145);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var debug = __webpack_require__(28)('HCC:ConfigStore');
	
	var ConfigStore = function (_BaseStore) {
	    _inherits(ConfigStore, _BaseStore);
	
	    function ConfigStore(dispatcher) {
	        _classCallCheck(this, ConfigStore);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConfigStore).call(this, dispatcher));
	
	        _this.openHabURL = {};
	        _this.fullScreen = false;
	        return _this;
	    }
	
	    _createClass(ConfigStore, [{
	        key: 'getOpenHabUrl',
	        value: function getOpenHabUrl() {
	            return this.openHabURL;
	        }
	    }, {
	        key: 'setFullScreen',
	        value: function setFullScreen(value) {
	            this.fullScreen = value;
	            this.emitChange();
	        }
	    }, {
	        key: 'isFullscreen',
	        value: function isFullscreen() {
	            return this.fullScreen;
	        }
	    }, {
	        key: 'handleConfigLoaded',
	        value: function handleConfigLoaded(payload) {
	            this.openHabURL = payload.openHabURL;
	            debug('config loaded');
	            this.emitChange();
	        }
	    }]);
	
	    return ConfigStore;
	}(_addons.BaseStore);
	
	ConfigStore.storeName = 'ConfigStore';
	ConfigStore.handlers = {
	    'CONFIG_LOADED': 'handleConfigLoaded',
	    'SET_FULLSCREEN': 'setFullScreen'
	};
	
	exports.default = ConfigStore;
	module.exports = exports['default'];

/***/ },
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _propTypes = __webpack_require__(61);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Paper = _react2.default.createClass({
	  displayName: 'Paper',
	
	  propTypes: {
	    /**
	     * Children passed into the paper element.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * Set to true to generate a circlular paper container.
	     */
	    circle: _react2.default.PropTypes.bool,
	
	    /**
	     * By default, the paper container will have a border radius.
	     * Set this to false to generate a container with sharp corners.
	     */
	    rounded: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * Set to false to disable CSS transitions for the paper element.
	     */
	    transitionEnabled: _react2.default.PropTypes.bool,
	
	    /**
	     * This number represents the zDepth of the paper shadow.
	     */
	    zDepth: _propTypes2.default.zDepth
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      circle: false,
	      rounded: true,
	      transitionEnabled: true,
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var circle = _props.circle;
	    var rounded = _props.rounded;
	    var style = _props.style;
	    var transitionEnabled = _props.transitionEnabled;
	    var zDepth = _props.zDepth;
	
	    var other = _objectWithoutProperties(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
	
	    var styles = {
	      backgroundColor: this.state.muiTheme.paper.backgroundColor,
	      transition: transitionEnabled && _transitions2.default.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	      boxShadow: this.state.muiTheme.paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    };
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(styles, style) }),
	      children
	    );
	  }
	});
	
	exports.default = Paper;
	module.exports = exports['default'];

/***/ },
/* 89 */,
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isArguments;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _warning = __webpack_require__(90);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	  /**
	   * The relative brightness of any point in a colorspace, normalized to 0 for
	   * darkest black and 1 for lightest white. RGB colors only. Does not take
	   * into account alpha values.
	   *
	   * TODO:
	   * - Take into account alpha values.
	   * - Identify why there are minor discrepancies for some use cases
	   *   (i.e. #F0F & #FFF). Note that these cases rarely occur.
	   *
	   * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	   */
	
	  _luminance: function _luminance(color) {
	    color = this._decomposeColor(color);
	
	    if (color.type.indexOf('rgb') > -1) {
	      var rgb = color.values.map(function (val) {
	        val /= 255; // normalized
	        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	      });
	
	      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
	    } else {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Calculating the relative luminance is not available\n        for HSL and HSLA.') : undefined;
	
	      return -1;
	    }
	  },
	
	  /**
	   * @params:
	   * additionalValue = An extra value that has been calculated but not included
	   *                   with the original color object, such as an alpha value.
	   */
	  _convertColorToString: function _convertColorToString(color, additonalValue) {
	    var str = color.type + '(' + parseInt(color.values[0]) + ',' + parseInt(color.values[1]) + ',' + parseInt(color.values[2]);
	
	    if (additonalValue !== undefined) {
	      str += ',' + additonalValue + ')';
	    } else if (color.values.length === 4) {
	      str += ',' + color.values[3] + ')';
	    } else {
	      str += ')';
	    }
	
	    return str;
	  },
	
	  // Converts a color from hex format to rgb format.
	  _convertHexToRGB: function _convertHexToRGB(color) {
	    if (color.length === 4) {
	      var extendedColor = '#';
	      for (var i = 1; i < color.length; i++) {
	        extendedColor += color.charAt(i) + color.charAt(i);
	      }
	      color = extendedColor;
	    }
	
	    var values = {
	      r: parseInt(color.substr(1, 2), 16),
	      g: parseInt(color.substr(3, 2), 16),
	      b: parseInt(color.substr(5, 2), 16)
	    };
	
	    return 'rgb(' + values.r + ',' + values.g + ',' + values.b + ')';
	  },
	
	  // Returns the type and values of a color of any given type.
	  _decomposeColor: function _decomposeColor(color) {
	    if (color.charAt(0) === '#') {
	      return this._decomposeColor(this._convertHexToRGB(color));
	    }
	
	    var marker = color.indexOf('(');
	    var type = color.substring(0, marker);
	    var values = color.substring(marker + 1, color.length - 1).split(',');
	
	    return { type: type, values: values };
	  },
	
	  // Set the absolute transparency of a color.
	  // Any existing alpha values are overwritten.
	  fade: function fade(color, amount) {
	    color = this._decomposeColor(color);
	    if (color.type === 'rgb' || color.type === 'hsl') color.type += 'a';
	    return this._convertColorToString(color, amount);
	  },
	
	  // Desaturates rgb and sets opacity to 0.15
	  lighten: function lighten(color, amount) {
	    color = this._decomposeColor(color);
	
	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 + amount;
	        if (color.values[i] > 255) color.values[i] = 255;
	      }
	    }
	
	    if (color.type.indexOf('a') <= -1) color.type += 'a';
	
	    return this._convertColorToString(color, '0.15');
	  },
	  darken: function darken(color, amount) {
	    color = this._decomposeColor(color);
	
	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 - amount;
	        if (color.values[i] < 0) color.values[i] = 0;
	      }
	    }
	
	    return this._convertColorToString(color);
	  },
	
	  // Calculates the contrast ratio between two colors.
	  //
	  // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	  contrastRatio: function contrastRatio(background, foreground) {
	    var lumA = this._luminance(background);
	    var lumB = this._luminance(foreground);
	
	    if (lumA >= lumB) {
	      return ((lumA + 0.05) / (lumB + 0.05)).toFixed(2);
	    } else {
	      return ((lumB + 0.05) / (lumA + 0.05)).toFixed(2);
	    }
	  },
	
	  /**
	   * Determines how readable a color combination is based on its level.
	   * Levels are defined from @LeaVerou:
	   * https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/contrast-ratio.js
	   */
	  contrastRatioLevel: function contrastRatioLevel(background, foreground) {
	    var levels = {
	      'fail': {
	        range: [0, 3],
	        color: 'hsl(0, 100%, 40%)'
	      },
	      'aa-large': {
	        range: [3, 4.5],
	        color: 'hsl(40, 100%, 45%)'
	      },
	      'aa': {
	        range: [4.5, 7],
	        color: 'hsl(80, 60%, 45%)'
	      },
	      'aaa': {
	        range: [7, 22],
	        color: 'hsl(95, 60%, 41%)'
	      }
	    };
	
	    var ratio = this.contrastRatio(background, foreground);
	
	    for (var level in levels) {
	      var range = levels[level].range;
	      if (ratio >= range[0] && ratio <= range[1]) return level;
	    }
	  }
	};
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(e) {
	      e.target.removeEventListener(e.type, recursiveFunction);
	      return callback(e);
	    };
	
	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(e) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(e.type) !== -1;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(656);

/***/ },
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _addons = __webpack_require__(145);
	
	var _lodash = __webpack_require__(87);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _dateTime = __webpack_require__(179);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var debug = __webpack_require__(28)('HCC:ItemStore');
	
	var ItemStore = function (_BaseStore) {
	    _inherits(ItemStore, _BaseStore);
	
	    function ItemStore(dispatcher) {
	        _classCallCheck(this, ItemStore);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ItemStore).call(this, dispatcher));
	
	        _this.itemsConfig = [];
	        _this.lastUpdate = (0, _dateTime.getTime)();
	        _this.navItems = [{ label: 'Home', icon: 'home', items: [] }];
	        return _this;
	    }
	
	    _createClass(ItemStore, [{
	        key: 'getLastUpdate',
	        value: function getLastUpdate() {
	            return this.lastUpdate;
	        }
	    }, {
	        key: 'getAllItems',
	        value: function getAllItems(items) {
	            var _this2 = this;
	
	            var sensors = [];
	            if (!items) items = this.itemsConfig;
	            items.forEach(function (i) {
	                sensors.push.apply(sensors, i.sensors);
	                if (i.items) sensors.push.apply(sensors, _this2.getAllItems(i.items));
	                if (i.name) sensors.push(i);
	            });
	            return sensors;
	        }
	    }, {
	        key: 'getNavItems',
	        value: function getNavItems() {
	            return this.navItems;
	        }
	    }, {
	        key: 'getCurrentItem',
	        value: function getCurrentItem() {
	            return this.navItems[this.navItems.length - 1];
	        }
	    }, {
	        key: 'handleConfigLoaded',
	        value: function handleConfigLoaded(payload) {
	            this.itemsConfig = payload.items;
	            this.navItems[0].items = payload.items;
	        }
	    }, {
	        key: 'handleItemUpdated',
	        value: function handleItemUpdated(updatedItem) {
	            var items = this.getAllItems();
	            items.forEach(function (item) {
	                if (item.name === updatedItem.name) {
	                    item.state = updatedItem.state;
	                    debug("Item Updated", updatedItem.name);
	                }
	            });
	            this.lastUpdate = (0, _dateTime.getTime)();
	            this.emitChange();
	        }
	    }, {
	        key: 'handleItemsLoaded',
	        value: function handleItemsLoaded(loadedItems) {
	            function updateItem(item) {
	                var loadedItem = _lodash2.default.find(loadedItems, { 'name': item.name });
	                if (loadedItem) _lodash2.default.assign(item, loadedItem);
	                if (item.thresholds) {
	                    item.thresholds = _lodash2.default.orderBy(item.thresholds, ['threshold'], ['desc']);
	                }
	                debug("item loaded", item);
	            }
	
	            function updateItems(items) {
	                items.forEach(function (configItem) {
	                    if (configItem.stateGroup) updateItems(configItem.stateGroup);
	                    if (configItem.name) updateItem(configItem);
	                    if (configItem.items) updateItems(configItem.items);
	                });
	            }
	            updateItems(this.itemsConfig);
	            this.emitChange();
	        }
	    }, {
	        key: 'handleNavigationUp',
	        value: function handleNavigationUp(item) {
	            this.navItems.splice(this.navItems.indexOf(item) + 1, this.navItems.length);
	            this.emitChange();
	        }
	    }, {
	        key: 'handleNavigationDown',
	        value: function handleNavigationDown(item) {
	            this.navItems.push(item);
	            this.emitChange();
	        }
	    }]);
	
	    return ItemStore;
	}(_addons.BaseStore);
	
	ItemStore.storeName = 'ItemStore';
	ItemStore.handlers = {
	    "ITEM_UPDATED": 'handleItemUpdated',
	    'ITEMS_LOADED': 'handleItemsLoaded',
	    'CONFIG_LOADED': 'handleConfigLoaded',
	    'NAV_UP': 'handleNavigationUp',
	    'NAV_DOWN': 'handleNavigationDown'
	};
	
	exports.default = ItemStore;
	module.exports = exports['default'];

/***/ },
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	module.exports = {
	    BaseStore: __webpack_require__(522),
	    createStore: __webpack_require__(224)
	};


/***/ },
/* 146 */,
/* 147 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(239);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _avatar = __webpack_require__(558);
	
	var _avatar2 = _interopRequireDefault(_avatar);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CardHeader = _react2.default.createClass({
	  displayName: 'CardHeader',
	
	  propTypes: {
	    actAsExpander: _react2.default.PropTypes.bool,
	    avatar: _react2.default.PropTypes.node,
	    children: _react2.default.PropTypes.node,
	    expandable: _react2.default.PropTypes.bool,
	    showExpandableButton: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    subtitle: _react2.default.PropTypes.node,
	    subtitleColor: _react2.default.PropTypes.string,
	    subtitleStyle: _react2.default.PropTypes.object,
	    textStyle: _react2.default.PropTypes.object,
	    title: _react2.default.PropTypes.node,
	    titleColor: _react2.default.PropTypes.string,
	    titleStyle: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      titleColor: _styles2.default.Colors.darkBlack,
	      subtitleColor: _styles2.default.Colors.lightBlack,
	      avatar: null
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        height: 72,
	        padding: 16,
	        fontWeight: _styles2.default.Typography.fontWeightMedium,
	        boxSizing: 'border-box',
	        position: 'relative'
	      },
	      text: {
	        display: 'inline-block',
	        verticalAlign: 'top'
	      },
	      avatar: {
	        marginRight: 16
	      },
	      title: {
	        color: this.props.titleColor,
	        display: 'block',
	        fontSize: 15
	      },
	      subtitle: {
	        color: this.props.subtitleColor,
	        display: 'block',
	        fontSize: 14
	      }
	    };
	  },
	  render: function render() {
	    var styles = this.getStyles();
	    var rootStyle = this.mergeStyles(styles.root, this.props.style);
	    var textStyle = this.mergeStyles(styles.text, this.props.textStyle);
	    var titleStyle = this.mergeStyles(styles.title, this.props.titleStyle);
	    var subtitleStyle = this.mergeStyles(styles.subtitle, this.props.subtitleStyle);
	
	    var avatar = this.props.avatar;
	    if (_react2.default.isValidElement(this.props.avatar)) {
	      var avatarMergedStyle = this.mergeStyles(styles.avatar, avatar.props.style);
	      avatar = _react2.default.cloneElement(avatar, { style: avatarMergedStyle });
	    } else if (avatar !== null) {
	      avatar = _react2.default.createElement(_avatar2.default, { src: this.props.avatar, style: styles.avatar });
	    }
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { style: this.prepareStyles(rootStyle) }),
	      avatar,
	      _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(textStyle) },
	        _react2.default.createElement(
	          'span',
	          { style: this.prepareStyles(titleStyle) },
	          this.props.title
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: this.prepareStyles(subtitleStyle) },
	          this.props.subtitle
	        )
	      ),
	      this.props.children
	    );
	  }
	});
	
	exports.default = CardHeader;
	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _paper = __webpack_require__(88);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _cardExpandable = __webpack_require__(559);
	
	var _cardExpandable2 = _interopRequireDefault(_cardExpandable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Card = _react2.default.createClass({
	  displayName: 'Card',
	
	  propTypes: {
	    /**
	     * Whether a click on this card component expands the card. Can be set on any child of the Card component.
	     */
	    actAsExpander: _react2.default.PropTypes.bool,
	
	    /**
	     * Can be used to render elements inside the Card.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * Whether this card component is expandable. Can be set on any child of the Card component.
	     */
	    expandable: _react2.default.PropTypes.bool,
	
	    /**
	     * Whether this card is initially expanded.
	     */
	    initiallyExpanded: _react2.default.PropTypes.bool,
	
	    /**
	     * Fired when the expandable state changes.
	     */
	    onExpandChange: _react2.default.PropTypes.func,
	
	    /**
	     * Whether this card component include a button to expand the card. CardTitle,
	     * CardHeader and CardActions implement showExpandableButton. Any child component
	     * of Card can implements showExpandableButton or forwards the property to a child
	     * component supporting it.
	     */
	    showExpandableButton: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      expandable: false,
	      initiallyExpanded: false,
	      actAsExpander: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      expanded: this.props.initiallyExpanded ? true : false
	    };
	  },
	  _onExpandable: function _onExpandable(event) {
	    event.preventDefault();
	    var newExpandedState = !(this.state.expanded === true);
	    this.setState({ expanded: newExpandedState });
	    if (this.props.onExpandChange) this.props.onExpandChange(newExpandedState);
	  },
	  render: function render() {
	    var _this = this;
	
	    var lastElement = undefined;
	    var newChildren = _react2.default.Children.map(this.props.children, function (currentChild) {
	      var doClone = false;
	      var newChild = undefined;
	      var newProps = {};
	      var element = currentChild;
	      if (!currentChild || !currentChild.props) {
	        return null;
	      }
	      if (_this.state.expanded === false && currentChild.props.expandable === true) return;
	      if (currentChild.props.actAsExpander === true) {
	        doClone = true;
	        newProps.onTouchTap = _this._onExpandable;
	        newProps.style = _this.mergeStyles({ cursor: 'pointer' }, currentChild.props.style);
	      }
	      if (currentChild.props.showExpandableButton === true) {
	        doClone = true;
	        newChild = _react2.default.createElement(_cardExpandable2.default, { expanded: _this.state.expanded, onExpanding: _this._onExpandable });
	      }
	      if (doClone) {
	        element = _react2.default.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
	      }
	      return element;
	    }, this);
	
	    // If the last element is text or a title we should add
	    // 8px padding to the bottom of the card
	    var addBottomPadding = lastElement && (lastElement.type.displayName === 'CardText' || lastElement.type.displayName === 'CardTitle');
	    var _props = this.props;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['style']);
	
	    var mergedStyles = this.mergeStyles({
	      overflow: 'hidden',
	      zIndex: 1
	    }, style);
	
	    return _react2.default.createElement(
	      _paper2.default,
	      _extends({}, other, { style: mergedStyles }),
	      _react2.default.createElement(
	        'div',
	        { style: { paddingBottom: addBottomPadding ? 8 : 0 } },
	        newChildren
	      )
	    );
	  }
	});
	
	exports.default = Card;
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _contextPure = __webpack_require__(236);
	
	var _contextPure2 = _interopRequireDefault(_contextPure);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _propTypes = __webpack_require__(61);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _enhancedButton = __webpack_require__(233);
	
	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);
	
	var _fontIcon = __webpack_require__(560);
	
	var _fontIcon2 = _interopRequireDefault(_fontIcon);
	
	var _tooltip = __webpack_require__(585);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _children = __webpack_require__(246);
	
	var _children2 = _interopRequireDefault(_children);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var IconButton = _react2.default.createClass({
	  displayName: 'IconButton',
	
	  propTypes: {
	    /**
	     * Can be used to pass a font icon as the icon for the button.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	
	    /**
	     * Disables the icon button.
	     */
	    disabled: _react2.default.PropTypes.bool,
	
	    /**
	     * If you are using a stylesheet for your
	     * icons, enter the class name for the icon to be used here.
	     */
	    iconClassName: _react2.default.PropTypes.string,
	
	    /**
	     * Overrides the inline-styles of the icon element.
	     */
	    iconStyle: _react2.default.PropTypes.object,
	
	    /**
	     * Callback function for when the component loses focus.
	     */
	    onBlur: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function for when the component gains focus.
	     */
	    onFocus: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function for when the component
	     * receives keyboard focus.
	     */
	    onKeyboardFocus: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function for when mouse enters element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function for when mouse leaves element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * The tooltip text to show.
	     */
	    tooltip: _react2.default.PropTypes.node,
	
	    /**
	     * Allows the tooltip to be viewed with different
	     * alignments: "bottom-center", "top-center",
	     * "bottom-right", "top-right", "bottom-left" and "top-left".
	     */
	    tooltipPosition: _propTypes2.default.cornersAndCenter,
	
	    /**
	     * Styles prop passed down to the tooltip.
	     */
	    tooltipStyles: _react2.default.PropTypes.object,
	
	    /**
	     * Prop for tooltip to make it larger for mobile.
	     */
	    touch: _react2.default.PropTypes.bool
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default, _contextPure2.default],
	
	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      var spacing = muiTheme.rawTheme.spacing;
	      var palette = muiTheme.rawTheme.palette;
	
	      return {
	        iconSize: spacing.iconSize,
	        textColor: palette.textColor,
	        disabledColor: palette.disabledColor
	      };
	    },
	    getChildrenClasses: function getChildrenClasses() {
	      return [_enhancedButton2.default, _fontIcon2.default, _tooltip2.default];
	    }
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      iconStyle: {},
	      tooltipPosition: 'bottom-center',
	      touch: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      tooltipShown: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    var _constructor$getRelev = this.constructor.getRelevantContextKeys(this.state.muiTheme);
	
	    var iconSize = _constructor$getRelev.iconSize;
	    var textColor = _constructor$getRelev.textColor;
	    var disabledColor = _constructor$getRelev.disabledColor;
	
	    var styles = {
	      root: {
	        position: 'relative',
	        boxSizing: 'border-box',
	        transition: _transitions2.default.easeOut(),
	        padding: iconSize / 2,
	        width: iconSize * 2,
	        height: iconSize * 2,
	        fontSize: 0
	      },
	      tooltip: {
	        boxSizing: 'border-box'
	      },
	      icon: {
	        color: textColor,
	        fill: textColor
	      },
	      overlay: {
	        position: 'relative',
	        top: 0,
	        width: '100%',
	        height: '100%',
	        background: disabledColor
	      },
	      disabled: {
	        color: disabledColor,
	        fill: disabledColor
	      }
	    };
	
	    return styles;
	  },
	  setKeyboardFocus: function setKeyboardFocus() {
	    this.refs.button.setKeyboardFocus();
	  },
	  _showTooltip: function _showTooltip() {
	    if (this.props.tooltip) {
	      this.setState({ tooltipShown: true });
	    }
	  },
	  _hideTooltip: function _hideTooltip() {
	    if (this.props.tooltip) this.setState({ tooltipShown: false });
	  },
	  _handleBlur: function _handleBlur(e) {
	    this._hideTooltip();
	    if (this.props.onBlur) this.props.onBlur(e);
	  },
	  _handleFocus: function _handleFocus(e) {
	    this._showTooltip();
	    if (this.props.onFocus) this.props.onFocus(e);
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.refs.button.isKeyboardFocused()) this._hideTooltip();
	    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this._showTooltip();
	    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },
	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (keyboardFocused && !this.props.disabled) {
	      this._showTooltip();
	      if (this.props.onFocus) this.props.onFocus(e);
	    } else if (!this.state.hovered) {
	      this._hideTooltip();
	      if (this.props.onBlur) this.props.onBlur(e);
	    }
	
	    if (this.props.onKeyboardFocus) this.props.onKeyboardFocus(e, keyboardFocused);
	  },
	  render: function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var iconClassName = _props.iconClassName;
	    var tooltip = _props.tooltip;
	    var touch = _props.touch;
	    var iconStyle = _props.iconStyle;
	
	    var other = _objectWithoutProperties(_props, ['disabled', 'iconClassName', 'tooltip', 'touch', 'iconStyle']);
	
	    var fonticon = undefined;
	
	    var styles = this.getStyles();
	    var tooltipPosition = this.props.tooltipPosition.split('-');
	
	    var tooltipElement = tooltip ? _react2.default.createElement(_tooltip2.default, {
	      ref: 'tooltip',
	      label: tooltip,
	      show: this.state.tooltipShown,
	      touch: touch,
	      style: this.mergeStyles(styles.tooltip, this.props.tooltipStyles),
	      verticalPosition: tooltipPosition[0],
	      horizontalPosition: tooltipPosition[1]
	    }) : null;
	
	    if (iconClassName) {
	      var iconHoverColor = iconStyle.iconHoverColor;
	
	      var iconStyleFontIcon = _objectWithoutProperties(iconStyle, ['iconHoverColor']);
	
	      fonticon = _react2.default.createElement(
	        _fontIcon2.default,
	        {
	          className: iconClassName,
	          hoverColor: disabled ? null : iconHoverColor,
	          style: this.mergeStyles(styles.icon, disabled ? styles.disabled : {}, iconStyleFontIcon)
	        },
	        this.props.children
	      );
	    }
	
	    var childrenStyle = disabled ? this.mergeStyles(iconStyle, styles.disabled) : iconStyle;
	
	    return _react2.default.createElement(
	      _enhancedButton2.default,
	      _extends({}, other, {
	        ref: 'button',
	        centerRipple: true,
	        disabled: disabled,
	        style: this.mergeStyles(styles.root, this.props.style),
	        onBlur: this._handleBlur,
	        onFocus: this._handleFocus,
	        onMouseLeave: this._handleMouseLeave,
	        onMouseEnter: this._handleMouseEnter,
	        onKeyboardFocus: this._handleKeyboardFocus
	      }),
	      tooltipElement,
	      fonticon,
	      _children2.default.extend(this.props.children, {
	        style: childrenStyle
	      })
	    );
	  }
	});
	
	exports.default = IconButton;
	module.exports = exports['default'];

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _colorManipulator = __webpack_require__(107);
	
	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);
	
	var _spacing = __webpack_require__(152);
	
	var _spacing2 = _interopRequireDefault(_spacing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */
	
	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors2.default.cyan500,
	    primary2Color: _colors2.default.cyan700,
	    primary3Color: _colors2.default.grey400,
	    accent1Color: _colors2.default.pinkA200,
	    accent2Color: _colors2.default.grey100,
	    accent3Color: _colors2.default.grey500,
	    textColor: _colors2.default.darkBlack,
	    alternateTextColor: _colors2.default.white,
	    canvasColor: _colors2.default.white,
	    borderColor: _colors2.default.grey300,
	    disabledColor: _colorManipulator2.default.fade(_colors2.default.darkBlack, 0.3),
	    pickerHeaderColor: _colors2.default.cyan500,
	    clockCircleColor: _colorManipulator2.default.fade(_colors2.default.darkBlack, 0.07),
	    shadowColor: _colors2.default.fullBlack
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 152 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  iconSize: 24,
	
	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopLeftNavMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};
	module.exports = exports['default'];

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Typography = function Typography() {
	  _classCallCheck(this, Typography);
	
	  // text colors
	  this.textFullBlack = _colors2.default.fullBlack;
	  this.textDarkBlack = _colors2.default.darkBlack;
	  this.textLightBlack = _colors2.default.lightBlack;
	  this.textMinBlack = _colors2.default.minBlack;
	  this.textFullWhite = _colors2.default.fullWhite;
	  this.textDarkWhite = _colors2.default.darkWhite;
	  this.textLightWhite = _colors2.default.lightWhite;
	
	  // font weight
	  this.fontWeightLight = 300;
	  this.fontWeightNormal = 400;
	  this.fontWeightMedium = 500;
	
	  this.fontStyleButtonFontSize = 14;
	};
	
	exports.default = new Typography();
	module.exports = exports['default'];

/***/ },
/* 154 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;
	
	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	
	    return false;
	  },
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  },
	
	  getStyleAttributeAsNumber: function getStyleAttributeAsNumber(el, attr) {
	    var attrStyle = el.style[attr];
	    var attrNum = 0;
	    if (attrStyle && attrStyle.length) {
	      attrNum = parseInt(attrStyle);
	    }
	
	    return attrNum;
	  },
	
	  addClass: function addClass(el, className) {
	    if (el.classList) el.classList.add(className);else el.className += ' ' + className;
	  },
	  removeClass: function removeClass(el, className) {
	    if (el.classList) {
	      el.classList.remove(className);
	    } else {
	      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	    }
	  },
	  hasClass: function hasClass(el, className) {
	    if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	  },
	  toggleClass: function toggleClass(el, className) {
	    if (this.hasClass(el, className)) this.removeClass(el, className);else this.addClass(el, className);
	  },
	  forceRedraw: function forceRedraw(el) {
	    var originalDisplay = el.style.display;
	
	    el.style.display = 'none';
	    el.style.display = originalDisplay;
	  },
	  withoutTransition: function withoutTransition(el, callback) {
	    var originalTransition = el.style.transition;
	
	    //turn off transition
	    el.style.transition = null;
	
	    callback();
	
	    //force a redraw
	    this.forceRedraw(el);
	
	    //put the transition back
	    el.style.transition = originalTransition;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = setItemStateAction;
	
	var _superagent = __webpack_require__(176);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _ConfigStore = __webpack_require__(81);
	
	var _ConfigStore2 = _interopRequireDefault(_ConfigStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var debug = __webpack_require__(28)('HCC:setItemStateAction');
	
	var debouncedFuncs = [];
	
	function setItemStateAction(context, payload, done) {
	    var item = payload.item;
	    var newState = payload.newState;
	    var debounced = payload.debounced;
	    var debounceTimeout = payload.debounceTimeout;
	
	    var config = context.getStore(_ConfigStore2.default);
	    var url = 'http://' + config.getOpenHabUrl() + '/rest/items/' + item.name;
	
	    function sendRequest(requestUrl, requestState) {
	        _superagent2.default.post(requestUrl).send(requestState).set('Accept', 'text/plain').set('Content-Type', 'text/plain').end(function (err, res) {
	            if (err || !res.ok) {
	                console.log("Error! " + err);
	            } else {
	                debug('State sent successfully', requestState);
	            }
	            done();
	        });
	    }
	
	    if (!debouncedFuncs[item.name]) {
	        debouncedFuncs[item.name] = _.debounce(function (url, state) {
	            sendRequest(url, state);
	        }, debounceTimeout ? debounceTimeout : 1000);
	    }
	
	    debouncedFuncs[item.name](url, newState);
	    if (!debounced) debouncedFuncs[item.name].flush();
	
	    item.state = newState;
	    context.dispatch('ITEM_UPDATED', { item: item });
	}
	module.exports = exports['default'];

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(87);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ToolbarComponent = function (_React$Component) {
	    _inherits(ToolbarComponent, _React$Component);
	
	    function ToolbarComponent() {
	        _classCallCheck(this, ToolbarComponent);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ToolbarComponent).call(this));
	    }
	
	    _createClass(ToolbarComponent, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return {
	                root: {
	                    paddingRight: this.context.muiTheme.rawTheme.spacing.desktopGutterLess,
	                    lineHeight: this.context.muiTheme.toolbar.height + 'px',
	                    fontSize: this.context.muiTheme.toolbar.titleFontSize + 'px',
	                    display: 'inline-block',
	                    position: 'relative'
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var content = _props.content;
	
	            var other = _objectWithoutProperties(_props, ['className', 'content']);
	
	            var styles = _lodash2.default.merge(this.getStyles().root, this.props.style);
	
	            return _react2.default.createElement(
	                'span',
	                _extends({}, other, { className: className, style: styles }),
	                content
	            );
	        }
	    }]);
	
	    return ToolbarComponent;
	}(_react2.default.Component);
	
	;
	
	ToolbarComponent.contextTypes = {
	    muiTheme: _react2.default.PropTypes.object
	};
	
	exports.default = ToolbarComponent;
	module.exports = exports['default'];

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getTime = getTime;
	exports.getDay = getDay;
	
	var _sprintfJs = __webpack_require__(281);
	
	function getTime() {
	    var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    var s = today.getSeconds();
	    return (0, _sprintfJs.sprintf)('%02u:%02u:%02u', h, m, s);
	}
	
	function getDay() {
	    var d = new Date();
	    var weekday = new Array(7);
	    weekday[0] = "Sunday";
	    weekday[1] = "Monday";
	    weekday[2] = "Tuesday";
	    weekday[3] = "Wednesday";
	    weekday[4] = "Thursday";
	    weekday[5] = "Friday";
	    weekday[6] = "Saturday";
	
	    var dd = d.getDate();
	    var mm = d.getMonth() + 1;
	    var yyyy = d.getFullYear();
	
	    return (0, _sprintfJs.sprintf)('%s, %02u.%02u.%04u', weekday[d.getDay()], dd, mm, yyyy);
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _addons = __webpack_require__(145);
	
	var _RouteStore = __webpack_require__(181);
	
	var _RouteStore2 = _interopRequireDefault(_RouteStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ApplicationStore = function (_BaseStore) {
	    _inherits(ApplicationStore, _BaseStore);
	
	    function ApplicationStore(dispatcher) {
	        _classCallCheck(this, ApplicationStore);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ApplicationStore).call(this, dispatcher));
	
	        _this.pageTitle = '';
	        return _this;
	    }
	
	    _createClass(ApplicationStore, [{
	        key: 'handlePageTitle',
	        value: function handlePageTitle(currentRoute) {
	            var _this2 = this;
	
	            this.dispatcher.waitFor(_RouteStore2.default, function () {
	                if (currentRoute && currentRoute.get('title')) {
	                    _this2.pageTitle = currentRoute.get('title');
	                    _this2.emitChange();
	                }
	            });
	        }
	    }, {
	        key: 'getPageTitle',
	        value: function getPageTitle() {
	            return this.pageTitle;
	        }
	    }, {
	        key: 'dehydrate',
	        value: function dehydrate() {
	            return {
	                pageTitle: this.pageTitle
	            };
	        }
	    }, {
	        key: 'rehydrate',
	        value: function rehydrate(state) {
	            this.pageTitle = state.pageTitle;
	        }
	    }]);
	
	    return ApplicationStore;
	}(_addons.BaseStore);
	
	ApplicationStore.storeName = 'ApplicationStore';
	ApplicationStore.handlers = {
	    'NAVIGATE_SUCCESS': 'handlePageTitle'
	};
	
	exports.default = ApplicationStore;
	module.exports = exports['default'];

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fluxibleRouter = __webpack_require__(104);
	
	var _routes = __webpack_require__(302);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _fluxibleRouter.RouteStore.withStaticRoutes(_routes2.default);
	module.exports = exports['default'];

/***/ },
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */
/***/ function(module, exports) {

	// helper to capitalize strings
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	module.exports = exports["default"];

/***/ },
/* 229 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(106),
	    isArray = __webpack_require__(147);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.3.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var arrayCopy = __webpack_require__(543),
	    arrayEach = __webpack_require__(544),
	    createAssigner = __webpack_require__(548),
	    isArguments = __webpack_require__(106),
	    isArray = __webpack_require__(147),
	    isPlainObject = __webpack_require__(552),
	    isTypedArray = __webpack_require__(553),
	    keys = __webpack_require__(554),
	    toPlainObject = __webpack_require__(557);
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.merge` without support for argument juggling,
	 * multiple sources, and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {Object} Returns `object`.
	 */
	function baseMerge(object, source, customizer, stackA, stackB) {
	  if (!isObject(object)) {
	    return object;
	  }
	  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	      props = isSrcArr ? undefined : keys(source);
	
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObjectLike(srcValue)) {
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	    }
	    else {
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;
	
	      if (isCommon) {
	        result = srcValue;
	      }
	      if ((result !== undefined || (isSrcArr && !(key in object))) &&
	          (isCommon || (result === result ? (result !== value) : (value === value)))) {
	        object[key] = result;
	      }
	    }
	  });
	  return object;
	}
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	  var length = stackA.length,
	      srcValue = source[key];
	
	  while (length--) {
	    if (stackA[length] == srcValue) {
	      object[key] = stackB[length];
	      return;
	    }
	  }
	  var value = object[key],
	      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	      isCommon = result === undefined;
	
	  if (isCommon) {
	    result = srcValue;
	    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	      result = isArray(value)
	        ? value
	        : (isArrayLike(value) ? arrayCopy(value) : []);
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      result = isArguments(value)
	        ? toPlainObject(value)
	        : (isPlainObject(value) ? value : {});
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate
	  // it with its merged value.
	  stackA.push(srcValue);
	  stackB.push(result);
	
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	  } else if (result === result ? (result !== value) : (value === value)) {
	    object[key] = result;
	  }
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Recursively merges own enumerable properties of the source object(s), that
	 * don't resolve to `undefined` into the destination object. Subsequent sources
	 * overwrite property assignments of previous sources. If `customizer` is
	 * provided it is invoked to produce the merged values of the destination and
	 * source properties. If `customizer` returns `undefined` merging is handled
	 * by the method instead. The `customizer` is bound to `thisArg` and invoked
	 * with five arguments: (objectValue, sourceValue, key, object, source).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var users = {
	 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	 * };
	 *
	 * var ages = {
	 *   'data': [{ 'age': 36 }, { 'age': 40 }]
	 * };
	 *
	 * _.merge(users, ages);
	 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	 *
	 * // using a customizer callback
	 * var object = {
	 *   'fruits': ['apple'],
	 *   'vegetables': ['beet']
	 * };
	 *
	 * var other = {
	 *   'fruits': ['banana'],
	 *   'vegetables': ['carrot']
	 * };
	 *
	 * _.merge(object, other, function(a, b) {
	 *   if (_.isArray(a)) {
	 *     return a.concat(b);
	 *   }
	 * });
	 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	 */
	var merge = createAssigner(baseMerge);
	
	module.exports = merge;


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(239);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CardTitle = _react2.default.createClass({
	  displayName: 'CardTitle',
	
	  propTypes: {
	    actAsExpander: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    expandable: _react2.default.PropTypes.bool,
	    showExpandableButton: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    subtitle: _react2.default.PropTypes.node,
	    subtitleColor: _react2.default.PropTypes.string,
	    subtitleStyle: _react2.default.PropTypes.object,
	    title: _react2.default.PropTypes.node,
	    titleColor: _react2.default.PropTypes.string,
	    titleStyle: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      titleColor: _styles2.default.Colors.darkBlack,
	      subtitleColor: _styles2.default.Colors.lightBlack
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      muiTheme: newMuiTheme
	    });
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        padding: 16,
	        position: 'relative'
	      },
	      title: {
	        fontSize: 24,
	        color: this.props.titleColor,
	        display: 'block',
	        lineHeight: '36px'
	      },
	      subtitle: {
	        fontSize: 14,
	        color: this.props.subtitleColor,
	        display: 'block'
	      }
	    };
	  },
	  render: function render() {
	    var styles = this.getStyles();
	    var rootStyle = this.mergeStyles(styles.root, this.props.style);
	    var titleStyle = this.mergeStyles(styles.title, this.props.titleStyle);
	    var subtitleStyle = this.mergeStyles(styles.subtitle, this.props.subtitleStyle);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { style: this.prepareStyles(rootStyle) }),
	      _react2.default.createElement(
	        'span',
	        { style: this.prepareStyles(titleStyle) },
	        this.props.title
	      ),
	      _react2.default.createElement(
	        'span',
	        { style: this.prepareStyles(subtitleStyle) },
	        this.props.subtitle
	      ),
	      this.props.children
	    );
	  }
	});
	
	exports.default = CardTitle;
	module.exports = exports['default'];

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _children = __webpack_require__(246);
	
	var _children2 = _interopRequireDefault(_children);
	
	var _events = __webpack_require__(108);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _keyCode = __webpack_require__(247);
	
	var _keyCode2 = _interopRequireDefault(_keyCode);
	
	var _focusRipple = __webpack_require__(570);
	
	var _focusRipple2 = _interopRequireDefault(_focusRipple);
	
	var _touchRipple = __webpack_require__(571);
	
	var _touchRipple2 = _interopRequireDefault(_touchRipple);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var styleInjected = false;
	var listening = false;
	var tabPressed = false;
	
	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';
	
	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}
	
	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (e) {
	      tabPressed = e.keyCode === _keyCode2.default.TAB;
	    });
	    listening = true;
	  }
	}
	
	var EnhancedButton = _react2.default.createClass({
	  displayName: 'EnhancedButton',
	
	  propTypes: {
	    centerRipple: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    containerElement: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
	    disableFocusRipple: _react2.default.PropTypes.bool,
	    disableKeyboardFocus: _react2.default.PropTypes.bool,
	    disableTouchRipple: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    focusRippleColor: _react2.default.PropTypes.string,
	    focusRippleOpacity: _react2.default.PropTypes.number,
	    keyboardFocused: _react2.default.PropTypes.bool,
	    linkButton: _react2.default.PropTypes.bool,
	    onBlur: _react2.default.PropTypes.func,
	    onFocus: _react2.default.PropTypes.func,
	    onKeyDown: _react2.default.PropTypes.func,
	    onKeyUp: _react2.default.PropTypes.func,
	    onKeyboardFocus: _react2.default.PropTypes.func,
	    onTouchTap: _react2.default.PropTypes.func,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    tabIndex: _react2.default.PropTypes.number,
	    touchRippleColor: _react2.default.PropTypes.string,
	    touchRippleOpacity: _react2.default.PropTypes.number,
	    type: _react2.default.PropTypes.string
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      containerElement: 'button',
	      onBlur: function onBlur() {},
	      onFocus: function onFocus() {},
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onKeyDown: function onKeyDown() {},
	      onKeyUp: function onKeyUp() {},
	      onTouchTap: function onTouchTap() {},
	      tabIndex: 0,
	      type: 'button'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      isKeyboardFocused: !this.props.disabled && this.props.keyboardFocused && !this.props.disableKeyboardFocus,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    injectStyle();
	    listenForTabPresses();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	
	    if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: false });
	      if (nextProps.onKeyboardFocus) {
	        nextProps.onKeyboardFocus(null, false);
	      }
	    }
	  },
	  isKeyboardFocused: function isKeyboardFocused() {
	    return this.state.isKeyboardFocused;
	  },
	  removeKeyboardFocus: function removeKeyboardFocus(e) {
	    if (this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: false });
	      this.props.onKeyboardFocus(e, false);
	    }
	  },
	  setKeyboardFocus: function setKeyboardFocus(e) {
	    if (!this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: true });
	      this.props.onKeyboardFocus(e, true);
	    }
	  },
	  _cancelFocusTimeout: function _cancelFocusTimeout() {
	    if (this._focusTimeout) {
	      clearTimeout(this._focusTimeout);
	      this._focusTimeout = null;
	    }
	  },
	  _createButtonChildren: function _createButtonChildren() {
	    var _props = this.props;
	    var centerRipple = _props.centerRipple;
	    var children = _props.children;
	    var disabled = _props.disabled;
	    var disableFocusRipple = _props.disableFocusRipple;
	    var disableKeyboardFocus = _props.disableKeyboardFocus;
	    var disableTouchRipple = _props.disableTouchRipple;
	    var focusRippleColor = _props.focusRippleColor;
	    var focusRippleOpacity = _props.focusRippleOpacity;
	    var touchRippleColor = _props.touchRippleColor;
	    var touchRippleOpacity = _props.touchRippleOpacity;
	    var isKeyboardFocused = this.state.isKeyboardFocused;
	
	    //Focus Ripple
	
	    var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_focusRipple2.default, {
	      color: focusRippleColor,
	      muiTheme: this.state.muiTheme,
	      opacity: focusRippleOpacity,
	      show: isKeyboardFocused
	    }) : undefined;
	
	    //Touch Ripple
	    var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	      _touchRipple2.default,
	      {
	        centerRipple: centerRipple,
	        color: touchRippleColor,
	        muiTheme: this.state.muiTheme,
	        opacity: touchRippleOpacity
	      },
	      children
	    ) : undefined;
	
	    return _children2.default.create({
	      focusRipple: focusRipple,
	      touchRipple: touchRipple,
	      children: touchRipple ? undefined : children
	    });
	  },
	  _handleKeyDown: function _handleKeyDown(e) {
	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      if (e.keyCode === _keyCode2.default.ENTER && this.state.isKeyboardFocused) {
	        this._handleTouchTap(e);
	      }
	    }
	    this.props.onKeyDown(e);
	  },
	  _handleKeyUp: function _handleKeyUp(e) {
	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      if (e.keyCode === _keyCode2.default.SPACE && this.state.isKeyboardFocused) {
	        this._handleTouchTap(e);
	      }
	    }
	    this.props.onKeyUp(e);
	  },
	  _handleBlur: function _handleBlur(e) {
	    this._cancelFocusTimeout();
	    this.removeKeyboardFocus(e);
	    this.props.onBlur(e);
	  },
	  _handleFocus: function _handleFocus(e) {
	    var _this = this;
	
	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      //setTimeout is needed because the focus event fires first
	      //Wait so that we can capture if this was a keyboard focus
	      //or touch focus
	      this._focusTimeout = setTimeout(function () {
	        if (tabPressed) {
	          _this.setKeyboardFocus(e);
	        }
	      }, 150);
	
	      this.props.onFocus(e);
	    }
	  },
	  _handleTouchTap: function _handleTouchTap(e) {
	    this._cancelFocusTimeout();
	    if (!this.props.disabled) {
	      tabPressed = false;
	      this.removeKeyboardFocus(e);
	      this.props.onTouchTap(e);
	    }
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var centerRipple = _props2.centerRipple;
	    var children = _props2.children;
	    var containerElement = _props2.containerElement;
	    var disabled = _props2.disabled;
	    var disableFocusRipple = _props2.disableFocusRipple;
	    var disableKeyboardFocus = _props2.disableKeyboardFocus;
	    var disableTouchRipple = _props2.disableTouchRipple;
	    var focusRippleColor = _props2.focusRippleColor;
	    var focusRippleOpacity = _props2.focusRippleOpacity;
	    var linkButton = _props2.linkButton;
	    var touchRippleColor = _props2.touchRippleColor;
	    var touchRippleOpacity = _props2.touchRippleOpacity;
	    var onBlur = _props2.onBlur;
	    var onFocus = _props2.onFocus;
	    var onKeyUp = _props2.onKeyUp;
	    var onKeyDown = _props2.onKeyDown;
	    var onTouchTap = _props2.onTouchTap;
	    var style = _props2.style;
	    var tabIndex = _props2.tabIndex;
	    var type = _props2.type;
	
	    var other = _objectWithoutProperties(_props2, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'linkButton', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onFocus', 'onKeyUp', 'onKeyDown', 'onTouchTap', 'style', 'tabIndex', 'type']);
	
	    var mergedStyles = this.mergeStyles({
	      border: 10,
	      background: 'none',
	      boxSizing: 'border-box',
	      display: 'inline-block',
	      font: 'inherit',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      tapHighlightColor: _colors2.default.transparent,
	      appearance: linkButton ? null : 'button',
	      cursor: disabled ? 'default' : 'pointer',
	      textDecoration: 'none',
	      outline: 'none',
	      /*
	        This is needed so that ripples do not bleed
	        past border radius.
	        See: http://stackoverflow.com/questions/17298739/
	          css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
	       */
	      transform: disableTouchRipple && disableFocusRipple ? null : 'translate3d(0, 0, 0)',
	      verticalAlign: other.hasOwnProperty('href') ? 'middle' : null
	    }, style);
	
	    if (disabled && linkButton) {
	      return _react2.default.createElement(
	        'span',
	        _extends({}, other, {
	          style: mergedStyles
	        }),
	        children
	      );
	    }
	
	    var buttonProps = _extends({}, other, {
	      style: this.prepareStyles(mergedStyles),
	      disabled: disabled,
	      onBlur: this._handleBlur,
	      onFocus: this._handleFocus,
	      onTouchTap: this._handleTouchTap,
	      onKeyUp: this._handleKeyUp,
	      onKeyDown: this._handleKeyDown,
	      tabIndex: tabIndex,
	      type: type
	    });
	    var buttonChildren = this._createButtonChildren();
	
	    // Provides backward compatibity. Added to support wrapping around <a> element.
	    var targetLinkElement = buttonProps.hasOwnProperty('href') ? 'a' : 'span';
	
	    return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, buttonProps, buttonChildren) : _react2.default.createElement(linkButton ? targetLinkElement : containerElement, buttonProps, buttonChildren);
	  }
	});
	
	exports.default = EnhancedButton;
	module.exports = exports['default'];

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _propTypes = __webpack_require__(61);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _typography = __webpack_require__(153);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	var _paper = __webpack_require__(88);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var List = _react2.default.createClass({
	  displayName: 'List',
	
	  propTypes: {
	    /**
	     * These are usually ListItems that are passed to
	     * be part of the list.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * If true, the subheader will be indented by 72px.
	     */
	    insetSubheader: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * The subheader string that will be displayed at the top of the list.
	     */
	    subheader: _react2.default.PropTypes.node,
	
	    /**
	     * The style object to override subheader styles.
	     */
	    subheaderStyle: _react2.default.PropTypes.object,
	
	    /**
	     * The zDepth prop passed to the Paper element inside list.
	     */
	    zDepth: _propTypes2.default.zDepth
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      insetSubheader: false,
	      zDepth: 0
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var insetSubheader = _props.insetSubheader;
	    var style = _props.style;
	    var subheader = _props.subheader;
	    var subheaderStyle = _props.subheaderStyle;
	    var zDepth = _props.zDepth;
	
	    var other = _objectWithoutProperties(_props, ['children', 'insetSubheader', 'style', 'subheader', 'subheaderStyle', 'zDepth']);
	
	    var styles = {
	      root: {
	        padding: 0,
	        paddingBottom: 8,
	        paddingTop: subheader ? 0 : 8
	      },
	
	      subheader: {
	        color: _typography2.default.textLightBlack,
	        fontSize: 14,
	        fontWeight: _typography2.default.fontWeightMedium,
	        lineHeight: '48px',
	        paddingLeft: insetSubheader ? 72 : 16
	      }
	    };
	
	    var subheaderElement = undefined;
	    if (subheader) {
	      var mergedSubheaderStyles = this.mergeStyles(styles.subheader, subheaderStyle);
	      subheaderElement = _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(mergedSubheaderStyles) },
	        subheader
	      );
	    }
	
	    return _react2.default.createElement(
	      _paper2.default,
	      _extends({}, other, {
	        style: this.mergeStyles(styles.root, style),
	        zDepth: zDepth
	      }),
	      subheaderElement,
	      children
	    );
	  }
	});
	
	exports.default = List;
	module.exports = exports['default'];

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsUpdate = __webpack_require__(109);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _clickAwayable = __webpack_require__(565);
	
	var _clickAwayable2 = _interopRequireDefault(_clickAwayable);
	
	var _autoPrefix = __webpack_require__(60);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _keyCode = __webpack_require__(247);
	
	var _keyCode2 = _interopRequireDefault(_keyCode);
	
	var _propTypes = __webpack_require__(61);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _list = __webpack_require__(234);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _paper = __webpack_require__(88);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Menu = _react2.default.createClass({
	  displayName: 'Menu',
	
	  propTypes: {
	    /**
	     * If true, the menu will apply transitions when added it
	     * gets added to the DOM. In order for transitions to
	     * work, wrap the menu inside a ReactTransitionGroup.
	     */
	    animated: _react2.default.PropTypes.bool,
	
	    /**
	     * If true, the width will automatically be
	     * set according to the items inside the menu
	     * using the proper keyline increment.
	     */
	    autoWidth: _react2.default.PropTypes.bool,
	
	    /**
	     * Children for the Menu. Usually MenuItems.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * Indicates if the menu should render with compact desktop styles.
	     */
	    desktop: _react2.default.PropTypes.bool,
	
	    /**
	     * True if this item should be focused by the keyboard initially.
	     */
	    initiallyKeyboardFocused: _react2.default.PropTypes.bool,
	
	    /**
	     * The style object to use to override underlying list style.
	     */
	    listStyle: _react2.default.PropTypes.object,
	
	    /**
	     * The maxHeight of the menu in pixels. If
	     * specified, the menu will scroll if larger than the maxHeight.
	     */
	    maxHeight: _react2.default.PropTypes.number,
	
	    /**
	     * If true, the value can an array and allow the menu to be a multi-select.
	     */
	    multiple: _react2.default.PropTypes.bool,
	
	    /**
	     * Fired when a menu item is touchTapped and the menu item
	     * value is not equal to the current menu value.
	     */
	    onChange: _react2.default.PropTypes.func,
	
	    /**
	     * Fired when an Esc key is keyed down.
	     */
	    onEscKeyDown: _react2.default.PropTypes.func,
	
	    /**
	     * Fired when a menu item is touchTapped.
	     */
	    onItemTouchTap: _react2.default.PropTypes.func,
	
	    /**
	     * Fired when a key is pressed.
	     */
	    onKeyDown: _react2.default.PropTypes.func,
	
	    /**
	     * This is the placement of the menu relative to the IconButton.
	     */
	    openDirection: _propTypes2.default.corners,
	
	    /**
	     * Style for the selected Menu Item.
	     */
	    selectedMenuItemStyle: _react2.default.PropTypes.object,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * The value of the selected menu item. If passed in,
	     * this will make the menu a controlled component.
	     * This component also supports valueLink.
	     */
	    value: _react2.default.PropTypes.any,
	
	    /**
	     * ValueLink for this component when controlled.
	     */
	    valueLink: _react2.default.PropTypes.object,
	
	    /**
	     * Sets the width of the menu. If not specified, the menu
	     * width will be dictated by its children. The rendered
	     * width will always be a keyline increment
	     * (64px for desktop, 56px otherwise).
	     */
	    width: _propTypes2.default.stringOrNumber,
	
	    /**
	     * Sets the width of the menu. If not specified,
	     * the menu width will be dictated by its children.
	     * The rendered width will always be a keyline increment
	     * (64px for desktop, 56px otherwise).
	     */
	    zDepth: _propTypes2.default.zDepth
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default, _clickAwayable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animated: false,
	      autoWidth: true,
	      desktop: false,
	      initiallyKeyboardFocused: false,
	      maxHeight: null,
	      multiple: false,
	      onChange: function onChange() {},
	      onEscKeyDown: function onEscKeyDown() {},
	      onItemTouchTap: function onItemTouchTap() {},
	      onKeyDown: function onKeyDown() {},
	      openDirection: 'bottom-left',
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    var filteredChildren = this._getFilteredChildren(this.props.children);
	    var selectedIndex = this._getSelectedIndex(this.props, filteredChildren);
	
	    return {
	      focusIndex: selectedIndex >= 0 ? selectedIndex : 0,
	      isKeyboardFocused: this.props.initiallyKeyboardFocused,
	      keyWidth: this.props.desktop ? 64 : 56,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.autoWidth) this._setWidth();
	    if (!this.props.animated) this._animateOpen();
	    this._setScollPosition();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var filteredChildren = this._getFilteredChildren(nextProps.children);
	    var selectedIndex = this._getSelectedIndex(nextProps, filteredChildren);
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	
	    this.setState({
	      focusIndex: selectedIndex >= 0 ? selectedIndex : 0,
	      keyWidth: nextProps.desktop ? 64 : 56,
	      muiTheme: newMuiTheme
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.autoWidth) this._setWidth();
	  },
	  componentClickAway: function componentClickAway(e) {
	    if (e.defaultPrevented) return;
	    this._setFocusIndex(-1, false);
	  },
	
	  // Do not use outside of this component, it will be removed once valueLink is deprecated
	  getValueLink: function getValueLink(props) {
	    return props.valueLink || {
	      value: props.value,
	      requestChange: props.onChange
	    };
	  },
	  setKeyboardFocused: function setKeyboardFocused(keyboardFocused) {
	    this.setState({
	      isKeyboardFocused: keyboardFocused
	    });
	  },
	  _getFilteredChildren: function _getFilteredChildren(children) {
	    var filteredChildren = [];
	    _react2.default.Children.forEach(children, function (child) {
	      if (child) {
	        filteredChildren.push(child);
	      }
	    });
	    return filteredChildren;
	  },
	  _animateOpen: function _animateOpen() {
	    var rootStyle = _reactDom2.default.findDOMNode(this).style;
	    var scrollContainerStyle = _reactDom2.default.findDOMNode(this.refs.scrollContainer).style;
	    var menuContainers = _reactDom2.default.findDOMNode(this.refs.list).childNodes;
	
	    _autoPrefix2.default.set(rootStyle, 'transform', 'scaleX(1)', this.state.muiTheme);
	    _autoPrefix2.default.set(scrollContainerStyle, 'transform', 'scaleY(1)', this.state.muiTheme);
	    scrollContainerStyle.opacity = 1;
	
	    for (var i = 0; i < menuContainers.length; ++i) {
	      menuContainers[i].style.opacity = 1;
	    }
	  },
	  _cloneMenuItem: function _cloneMenuItem(child, childIndex, styles) {
	    var _this = this;
	
	    var _props = this.props;
	    var desktop = _props.desktop;
	    var selectedMenuItemStyle = _props.selectedMenuItemStyle;
	
	    var selected = this._isChildSelected(child, this.props);
	    var selectedChildrenStyles = {};
	
	    if (selected) {
	      selectedChildrenStyles = this.mergeStyles(styles.selectedMenuItem, selectedMenuItemStyle);
	    }
	
	    var mergedChildrenStyles = this.mergeStyles(child.props.style || {}, selectedChildrenStyles);
	
	    var isFocused = childIndex === this.state.focusIndex;
	    var focusState = 'none';
	    if (isFocused) {
	      focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
	    }
	
	    return _react2.default.cloneElement(child, {
	      desktop: desktop,
	      focusState: focusState,
	      onTouchTap: function onTouchTap(e) {
	        _this._handleMenuItemTouchTap(e, child);
	        if (child.props.onTouchTap) child.props.onTouchTap(e);
	      },
	      ref: isFocused ? 'focusedMenuItem' : null,
	      style: mergedChildrenStyles
	    });
	  },
	  _decrementKeyboardFocusIndex: function _decrementKeyboardFocusIndex() {
	    var index = this.state.focusIndex;
	
	    index--;
	    if (index < 0) index = 0;
	
	    this._setFocusIndex(index, true);
	  },
	  _getCascadeChildrenCount: function _getCascadeChildrenCount(filteredChildren) {
	    var _props2 = this.props;
	    var desktop = _props2.desktop;
	    var maxHeight = _props2.maxHeight;
	
	    var count = 1;
	    var currentHeight = desktop ? 16 : 8;
	    var menuItemHeight = desktop ? 32 : 48;
	
	    //MaxHeight isn't set - cascade all of the children
	    if (!maxHeight) return filteredChildren.length;
	
	    //Count all the children that will fit inside the
	    //max menu height
	    filteredChildren.forEach(function (child) {
	      if (currentHeight < maxHeight) {
	        var childIsADivider = child.type && child.type.displayName === 'Divider';
	
	        currentHeight += childIsADivider ? 16 : menuItemHeight;
	        count++;
	      }
	    });
	
	    return count;
	  },
	  _getMenuItemCount: function _getMenuItemCount(filteredChildren) {
	    var menuItemCount = 0;
	    filteredChildren.forEach(function (child) {
	      var childIsADivider = child.type && child.type.displayName === 'Divider';
	      var childIsDisabled = child.props.disabled;
	      if (!childIsADivider && !childIsDisabled) menuItemCount++;
	    });
	    return menuItemCount;
	  },
	  _getSelectedIndex: function _getSelectedIndex(props, filteredChildren) {
	    var _this2 = this;
	
	    var selectedIndex = -1;
	    var menuItemIndex = 0;
	
	    filteredChildren.forEach(function (child) {
	      var childIsADivider = child.type && child.type.displayName === 'Divider';
	
	      if (_this2._isChildSelected(child, props)) selectedIndex = menuItemIndex;
	      if (!childIsADivider) menuItemIndex++;
	    });
	
	    return selectedIndex;
	  },
	  _handleKeyDown: function _handleKeyDown(e) {
	    var filteredChildren = this._getFilteredChildren(this.props.children);
	    switch (e.keyCode) {
	      case _keyCode2.default.DOWN:
	        e.preventDefault();
	        this._incrementKeyboardFocusIndex(filteredChildren);
	        break;
	      case _keyCode2.default.ESC:
	        this.props.onEscKeyDown(e);
	        break;
	      case _keyCode2.default.TAB:
	        e.preventDefault();
	        if (e.shiftKey) {
	          this._decrementKeyboardFocusIndex();
	        } else {
	          this._incrementKeyboardFocusIndex(filteredChildren);
	        }
	        break;
	      case _keyCode2.default.UP:
	        e.preventDefault();
	        this._decrementKeyboardFocusIndex();
	        break;
	    }
	    this.props.onKeyDown(e);
	  },
	  _handleMenuItemTouchTap: function _handleMenuItemTouchTap(e, item) {
	    var children = this.props.children;
	    var multiple = this.props.multiple;
	    var valueLink = this.getValueLink(this.props);
	    var menuValue = valueLink.value;
	    var itemValue = item.props.value;
	    var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);
	
	    this._setFocusIndex(focusIndex, false);
	
	    if (multiple) {
	      var index = menuValue.indexOf(itemValue);
	      var newMenuValue = index === -1 ? (0, _reactAddonsUpdate2.default)(menuValue, { $push: [itemValue] }) : (0, _reactAddonsUpdate2.default)(menuValue, { $splice: [[index, 1]] });
	
	      valueLink.requestChange(e, newMenuValue);
	    } else if (!multiple && itemValue !== menuValue) {
	      valueLink.requestChange(e, itemValue);
	    }
	
	    this.props.onItemTouchTap(e, item);
	  },
	  _incrementKeyboardFocusIndex: function _incrementKeyboardFocusIndex(filteredChildren) {
	    var index = this.state.focusIndex;
	    var maxIndex = this._getMenuItemCount(filteredChildren) - 1;
	
	    index++;
	    if (index > maxIndex) index = maxIndex;
	
	    this._setFocusIndex(index, true);
	  },
	  _isChildSelected: function _isChildSelected(child, props) {
	    var multiple = props.multiple;
	    var menuValue = this.getValueLink(props).value;
	    var childValue = child.props.value;
	
	    return multiple && menuValue.length && menuValue.indexOf(childValue) !== -1 || !multiple && menuValue && menuValue === childValue;
	  },
	  _setFocusIndex: function _setFocusIndex(newIndex, isKeyboardFocused) {
	    this.setState({
	      focusIndex: newIndex,
	      isKeyboardFocused: isKeyboardFocused
	    });
	  },
	  _setScollPosition: function _setScollPosition() {
	    var desktop = this.props.desktop;
	    var focusedMenuItem = this.refs.focusedMenuItem;
	    var menuItemHeight = desktop ? 32 : 48;
	
	    if (focusedMenuItem) {
	      var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;
	
	      //Make the focused item be the 2nd item in the list the
	      //user sees
	      var scrollTop = selectedOffSet - menuItemHeight;
	      if (scrollTop < menuItemHeight) scrollTop = 0;
	
	      _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
	    }
	  },
	  _setWidth: function _setWidth() {
	    var el = _reactDom2.default.findDOMNode(this);
	    var listEl = _reactDom2.default.findDOMNode(this.refs.list);
	    var elWidth = el.offsetWidth;
	    var keyWidth = this.state.keyWidth;
	    var minWidth = keyWidth * 1.5;
	    var keyIncrements = elWidth / keyWidth;
	    var newWidth = undefined;
	
	    keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
	    newWidth = keyIncrements * keyWidth;
	
	    if (newWidth < minWidth) newWidth = minWidth;
	
	    el.style.width = newWidth + 'px';
	    listEl.style.width = newWidth + 'px';
	  },
	  render: function render() {
	    var _this3 = this;
	
	    var _props3 = this.props;
	    var animated = _props3.animated;
	    var autoWidth = _props3.autoWidth;
	    var children = _props3.children;
	    var desktop = _props3.desktop;
	    var initiallyKeyboardFocused = _props3.initiallyKeyboardFocused;
	    var listStyle = _props3.listStyle;
	    var maxHeight = _props3.maxHeight;
	    var multiple = _props3.multiple;
	    var openDirection = _props3.openDirection;
	    var selectedMenuItemStyle = _props3.selectedMenuItemStyle;
	    var style = _props3.style;
	    var value = _props3.value;
	    var valueLink = _props3.valueLink;
	    var width = _props3.width;
	    var zDepth = _props3.zDepth;
	
	    var other = _objectWithoutProperties(_props3, ['animated', 'autoWidth', 'children', 'desktop', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'openDirection', 'selectedMenuItemStyle', 'style', 'value', 'valueLink', 'width', 'zDepth']);
	
	    var openDown = openDirection.split('-')[0] === 'bottom';
	    var openLeft = openDirection.split('-')[1] === 'left';
	
	    var muiTheme = this.state.muiTheme;
	    var rawTheme = muiTheme.rawTheme;
	
	    var styles = {
	      root: {
	        //Nested div bacause the List scales x faster than
	        //it scales y
	        transition: animated ? _transitions2.default.easeOut('250ms', 'transform') : null,
	        zIndex: muiTheme.zIndex.menu,
	        top: openDown ? 0 : null,
	        bottom: !openDown ? 0 : null,
	        left: !openLeft ? 0 : null,
	        right: openLeft ? 0 : null,
	        transform: 'scaleX(0)',
	        transformOrigin: openLeft ? 'right' : 'left'
	      },
	
	      divider: {
	        marginTop: 7,
	        marginBottom: 8
	      },
	
	      list: {
	        display: 'table-cell',
	        paddingBottom: desktop ? 16 : 8,
	        paddingTop: desktop ? 16 : 8,
	        userSelect: 'none',
	        width: width
	      },
	
	      menuItemContainer: {
	        transition: animated ? _transitions2.default.easeOut(null, 'opacity') : null,
	        opacity: 0
	      },
	
	      paper: {
	        transition: animated ? _transitions2.default.easeOut('500ms', ['transform', 'opacity']) : null,
	        transform: 'scaleY(0)',
	        transformOrigin: openDown ? 'top' : 'bottom',
	        opacity: 0,
	        maxHeight: maxHeight,
	        overflowY: maxHeight ? 'auto' : null
	      },
	
	      selectedMenuItem: {
	        color: rawTheme.palette.accent1Color
	      }
	    };
	
	    var mergedRootStyles = this.mergeStyles(styles.root, style);
	    var mergedListStyles = this.mergeStyles(styles.list, listStyle);
	
	    var filteredChildren = this._getFilteredChildren(children);
	
	    //Cascade children opacity
	    var cumulativeDelay = openDown ? 175 : 325;
	    var cascadeChildrenCount = this._getCascadeChildrenCount(filteredChildren);
	    var cumulativeDelayIncrement = Math.ceil(150 / cascadeChildrenCount);
	
	    var menuItemIndex = 0;
	    var newChildren = _react2.default.Children.map(filteredChildren, function (child) {
	      var childIsADivider = child.type && child.type.displayName === 'Divider';
	      var childIsDisabled = child.props.disabled;
	      var childrenContainerStyles = {};
	
	      if (animated) {
	        var focusIndex = _this3.state.focusIndex;
	        var transitionDelay = 0;
	
	        //Only cascade the visible menu items
	        if (menuItemIndex >= focusIndex - 1 && menuItemIndex <= focusIndex + cascadeChildrenCount - 1) {
	          cumulativeDelay = openDown ? cumulativeDelay + cumulativeDelayIncrement : cumulativeDelay - cumulativeDelayIncrement;
	          transitionDelay = cumulativeDelay;
	        }
	
	        childrenContainerStyles = _this3.mergeStyles(styles.menuItemContainer, {
	          transitionDelay: transitionDelay + 'ms'
	        });
	      }
	
	      var clonedChild = childIsADivider ? _react2.default.cloneElement(child, { style: styles.divider }) : childIsDisabled ? _react2.default.cloneElement(child, { desktop: desktop }) : _this3._cloneMenuItem(child, menuItemIndex, styles);
	
	      if (!childIsADivider && !childIsDisabled) menuItemIndex++;
	
	      return animated ? _react2.default.createElement(
	        'div',
	        { style: _this3.prepareStyles(childrenContainerStyles) },
	        clonedChild
	      ) : clonedChild;
	    });
	
	    return _react2.default.createElement(
	      'div',
	      {
	        onKeyDown: this._handleKeyDown,
	        style: this.prepareStyles(mergedRootStyles)
	      },
	      _react2.default.createElement(
	        _paper2.default,
	        {
	          ref: 'scrollContainer',
	          style: styles.paper,
	          zDepth: zDepth
	        },
	        _react2.default.createElement(
	          _list2.default,
	          _extends({}, other, {
	            ref: 'list',
	            style: mergedListStyles
	          }),
	          newChildren
	        )
	      )
	    );
	  }
	});
	
	exports.default = Menu;
	module.exports = exports['default'];

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _shallowEqual = __webpack_require__(588);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function relevantContextKeysEqual(classObject, currentContext, nextContext) {
	
	  //Get those keys from current object's context that we care
	  //about and check whether those keys have changed or not
	  if (classObject.getRelevantContextKeys) {
	    var currentContextKeys = classObject.getRelevantContextKeys(currentContext);
	    var nextContextKeys = classObject.getRelevantContextKeys(nextContext);
	
	    if (!(0, _shallowEqual2.default)(currentContextKeys, nextContextKeys)) {
	      return false;
	    }
	  }
	
	  //Check if children context keys changed
	  if (classObject.getChildrenClasses) {
	    var childrenArray = classObject.getChildrenClasses();
	    for (var i = 0; i < childrenArray.length; i++) {
	      if (!relevantContextKeysEqual(childrenArray[i], currentContext, nextContext)) {
	        return false;
	      }
	    }
	  }
	
	  //context keys are equal
	  return true;
	}
	
	exports.default = {
	
	  //Don't update if state, prop, and context are equal
	
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	
	    //If either the props or state have changed, component should update
	    if (!(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState)) {
	      return true;
	    }
	
	    //If current theme and next theme are both undefined, do not update
	    if (!this.context.muiTheme && !nextContext.muiTheme) {
	      return false;
	    }
	
	    //If both themes exist, compare keys only if current theme is not static
	    if (this.context.muiTheme && nextContext.muiTheme) {
	      return !this.context.muiTheme.static && !relevantContextKeysEqual(this.constructor, this.context.muiTheme, nextContext.muiTheme);
	    }
	
	    //At this point it is guaranteed that exactly one theme is undefined so simply update
	    return true;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _windowListenable = __webpack_require__(566);
	
	var _windowListenable2 = _interopRequireDefault(_windowListenable);
	
	var _renderToLayer = __webpack_require__(568);
	
	var _renderToLayer2 = _interopRequireDefault(_renderToLayer);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _propTypes = __webpack_require__(61);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _paper = __webpack_require__(88);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	var _lodash = __webpack_require__(556);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _popoverDefaultAnimation = __webpack_require__(567);
	
	var _popoverDefaultAnimation2 = _interopRequireDefault(_popoverDefaultAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Popover = _react2.default.createClass({
	  displayName: 'Popover',
	
	  propTypes: {
	    /**
	     * This is the DOM element that will be used to set the position of the
	     * component.
	     */
	    anchorEl: _react2.default.PropTypes.object,
	
	    /**
	     * This is the point on the anchor where the popover
	     * targetOrigin will stick to.
	     * Options:
	     * vertical: [top, middle, bottom]
	     * horizontal: [left, center, right]
	     */
	    anchorOrigin: _propTypes2.default.origin,
	
	    /**
	     * If true, the popover will apply transitions when
	     * added it gets added to the DOM.
	     */
	    animated: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the default animation component used.
	     */
	    animation: _react2.default.PropTypes.func,
	
	    /**
	     * If true, the popover will hide when the anchor scrolls off the screen
	     */
	    autoCloseWhenOffScreen: _react2.default.PropTypes.bool,
	
	    /**
	     * If true, the popover (potentially) ignores targetOrigin
	     * and anchorOrigin to make itself fit on screen,
	     * which is useful for mobile devices.
	     */
	    canAutoPosition: _react2.default.PropTypes.bool,
	
	    /**
	     * Use this property to render your component inside the `Popover`.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	
	    /**
	     * This is a callback that fires when the popover
	     * thinks it should close. (e.g. clickAway or offScreen)
	     *
	     * @param {string} reason Determines what triggered this request.
	     */
	    onRequestClose: _react2.default.PropTypes.func,
	
	    /**
	     * Controls the visibility of the popover.
	     */
	    open: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * This is the point on the popover which will stick to
	     * the anchors origin.
	     * Options:
	     * vertical: [top, middle, bottom]
	     * horizontal: [left, center, right]
	     */
	    targetOrigin: _propTypes2.default.origin,
	
	    /**
	     * If true, the popover will render on top of an invisible
	     * layer, which will prevent clicks to the underlying
	     * elements, and trigger an onRequestClose(clickAway) event.
	     */
	    useLayerForClickAway: _react2.default.PropTypes.bool,
	
	    /**
	     * This number represents the zDepth of the paper shadow.
	     */
	    zDepth: _propTypes2.default.zDepth
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default, _windowListenable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      anchorOrigin: {
	        vertical: 'bottom',
	        horizontal: 'left'
	      },
	      animated: true,
	      autoCloseWhenOffScreen: true,
	      canAutoPosition: true,
	      onRequestClose: function onRequestClose() {},
	      open: false,
	      style: {
	        overflowY: 'auto'
	      },
	      targetOrigin: {
	        vertical: 'top',
	        horizontal: 'left'
	      },
	      useLayerForClickAway: true,
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.setPlacementThrottled = (0, _lodash2.default)(this.setPlacement, 100);
	    this.setPlacementThrottledScrolled = (0, _lodash2.default)(this.setPlacement.bind(this, true), 100);
	
	    return {
	      open: this.props.open,
	      closing: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var _this = this;
	
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	
	    if (nextProps.open !== this.state.open) {
	      if (nextProps.open) {
	        this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
	        this.setState({
	          open: true,
	          closing: false,
	          muiTheme: newMuiTheme
	        });
	      } else {
	        if (nextProps.animated) {
	          this.setState({ closing: true });
	          this._timeout = setTimeout(function () {
	            if (_this.isMounted()) {
	              _this.setState({
	                open: false,
	                muiTheme: newMuiTheme
	              });
	            }
	          }, 500);
	        } else {
	          this.setState({
	            open: false,
	            muiTheme: newMuiTheme
	          });
	        }
	      }
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.setPlacement();
	  },
	
	  windowListeners: {
	    resize: 'setPlacementThrottled',
	    scroll: 'setPlacementThrottledScrolled'
	  },
	
	  renderLayer: function renderLayer() {
	    var _props = this.props;
	    var animated = _props.animated;
	    var animation = _props.animation;
	    var children = _props.children;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['animated', 'animation', 'children', 'style']);
	
	    var Animation = animation || _popoverDefaultAnimation2.default;
	
	    if (!Animation) {
	      Animation = _paper2.default;
	      style = {
	        position: 'fixed'
	      };
	      if (!this.state.open) {
	        return null;
	      }
	    }
	
	    return _react2.default.createElement(
	      Animation,
	      _extends({}, other, { style: style, open: this.state.open && !this.state.closing }),
	      children
	    );
	  },
	  requestClose: function requestClose(reason) {
	    if (this.props.onRequestClose) {
	      this.props.onRequestClose(reason);
	    }
	  },
	  componentClickAway: function componentClickAway() {
	    this.requestClose('clickAway');
	  },
	  _resizeAutoPosition: function _resizeAutoPosition() {
	    this.setPlacement();
	  },
	  getAnchorPosition: function getAnchorPosition(el) {
	    if (!el) {
	      el = _reactDom2.default.findDOMNode(this);
	    }
	
	    var rect = el.getBoundingClientRect();
	    var a = {
	      top: rect.top,
	      left: rect.left,
	      width: el.offsetWidth,
	      height: el.offsetHeight
	    };
	
	    a.right = rect.right || a.left + a.width;
	    a.bottom = rect.bottom || a.top + a.height;
	    a.middle = a.left + (a.right - a.left) / 2;
	    a.center = a.top + (a.bottom - a.top) / 2;
	
	    return a;
	  },
	  getTargetPosition: function getTargetPosition(targetEl) {
	    return {
	      top: 0,
	      center: targetEl.offsetHeight / 2,
	      bottom: targetEl.offsetHeight,
	      left: 0,
	      middle: targetEl.offsetWidth / 2,
	      right: targetEl.offsetWidth
	    };
	  },
	  setPlacement: function setPlacement(scrolling) {
	    if (!this.state.open) {
	      return;
	    }
	
	    var anchorEl = this.props.anchorEl || this.anchorEl;
	
	    if (!this.refs.layer.getLayer()) {
	      return;
	    }
	
	    var targetEl = this.refs.layer.getLayer().children[0];
	    if (!targetEl) {
	      return;
	    }
	
	    var _props2 = this.props;
	    var targetOrigin = _props2.targetOrigin;
	    var anchorOrigin = _props2.anchorOrigin;
	
	    var anchor = this.getAnchorPosition(anchorEl);
	    var target = this.getTargetPosition(targetEl);
	
	    var targetPosition = {
	      top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
	      left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
	    };
	
	    if (scrolling && this.props.autoCloseWhenOffScreen) {
	      this.autoCloseWhenOffScreen(anchor);
	    }
	
	    if (this.props.canAutoPosition) {
	      target = this.getTargetPosition(targetEl); // update as height may have changed
	      targetPosition = this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
	    }
	
	    targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
	    targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
	    targetEl.style.maxHeight = window.innerHeight + 'px';
	  },
	  autoCloseWhenOffScreen: function autoCloseWhenOffScreen(anchorPosition) {
	    if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWith) {
	      this.requestClose('offScreen');
	    }
	  },
	  getOverlapMode: function getOverlapMode(anchor, target, median) {
	    if ([anchor, target].indexOf(median) >= 0) return 'auto';
	    if (anchor === target) return 'inclusive';
	    return 'exclusive';
	  },
	  getPositions: function getPositions(anchor, target) {
	    var a = _extends({}, anchor);
	    var t = _extends({}, target);
	
	    var positions = {
	      x: ['left', 'right'].filter(function (p) {
	        return p !== t.horizontal;
	      }),
	      y: ['top', 'bottom'].filter(function (p) {
	        return p !== t.vertical;
	      })
	    };
	
	    var overlap = {
	      x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
	      y: this.getOverlapMode(a.vertical, t.vertical, 'center')
	    };
	
	    positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
	    positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');
	
	    if (overlap.y !== 'auto') {
	      a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
	      if (overlap.y === 'inclusive') {
	        t.vertical = t.vertical;
	      }
	    }
	
	    if (overlap.x !== 'auto') {
	      a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
	      if (overlap.y === 'inclusive') {
	        t.horizontal = t.horizontal;
	      }
	    }
	
	    return {
	      positions: positions,
	      anchorPos: a
	    };
	  },
	  applyAutoPositionIfNeeded: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
	    var _getPositions = this.getPositions(anchorOrigin, targetOrigin);
	
	    var positions = _getPositions.positions;
	    var anchorPos = _getPositions.anchorPos;
	
	    if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
	      var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
	      if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);else {
	        newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
	        if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);
	      }
	    }
	    if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
	      var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
	      if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);else {
	        newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
	        if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);
	      }
	    }
	    return targetPosition;
	  },
	  render: function render() {
	    return _react2.default.createElement(_renderToLayer2.default, {
	      ref: 'layer',
	      open: this.state.open,
	      componentClickAway: this.componentClickAway,
	      useLayerForClickAway: this.props.useLayerForClickAway,
	      render: this.renderLayer
	    });
	  }
	});
	
	exports.default = Popover;
	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _colorManipulator = __webpack_require__(107);
	
	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);
	
	var _spacing = __webpack_require__(152);
	
	var _spacing2 = _interopRequireDefault(_spacing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors2.default.cyan700,
	    primary2Color: _colors2.default.cyan700,
	    primary3Color: _colors2.default.grey600,
	    accent1Color: _colors2.default.pinkA200,
	    accent2Color: _colors2.default.pinkA400,
	    accent3Color: _colors2.default.pinkA100,
	    textColor: _colors2.default.fullWhite,
	    alternateTextColor: '#303030',
	    canvasColor: '#303030',
	    borderColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.3),
	    disabledColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.3),
	    pickerHeaderColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.12),
	    clockCircleColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.12)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ZIndex = exports.getMuiTheme = exports.ThemeDecorator = exports.DarkRawTheme = exports.LightRawTheme = exports.lightBaseTheme = exports.Typography = exports.Transitions = exports.ThemeManager = exports.Spacing = exports.Colors = exports.AutoPrefix = undefined;
	
	var _autoPrefix = __webpack_require__(60);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _spacing = __webpack_require__(152);
	
	var _spacing2 = _interopRequireDefault(_spacing);
	
	var _themeManager = __webpack_require__(242);
	
	var _themeManager2 = _interopRequireDefault(_themeManager);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _typography = __webpack_require__(153);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	var _lightRawTheme = __webpack_require__(572);
	
	var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);
	
	var _lightBaseTheme = __webpack_require__(151);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _darkRawTheme = __webpack_require__(240);
	
	var _darkRawTheme2 = _interopRequireDefault(_darkRawTheme);
	
	var _darkBaseTheme = __webpack_require__(238);
	
	var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);
	
	var _themeDecorator = __webpack_require__(241);
	
	var _themeDecorator2 = _interopRequireDefault(_themeDecorator);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _zIndex = __webpack_require__(243);
	
	var _zIndex2 = _interopRequireDefault(_zIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.AutoPrefix = _autoPrefix2.default;
	exports.Colors = _colors2.default;
	exports.Spacing = _spacing2.default;
	exports.ThemeManager = _themeManager2.default;
	exports.Transitions = _transitions2.default;
	exports.Typography = _typography2.default;
	exports.lightBaseTheme = _lightBaseTheme2.default;
	exports.LightRawTheme = _lightRawTheme2.default;
	exports.DarkRawTheme = _darkRawTheme2.default;
	exports.ThemeDecorator = _themeDecorator2.default;
	exports.getMuiTheme = _getMuiTheme2.default;
	exports.ZIndex = _zIndex2.default;
	exports.default = {
	  AutoPrefix: _autoPrefix2.default,
	  Colors: _colors2.default,
	  Spacing: _spacing2.default,
	  ThemeManager: _themeManager2.default,
	  Transitions: _transitions2.default,
	  Typography: _typography2.default,
	  lightBaseTheme: _lightBaseTheme2.default,
	  LightRawTheme: _lightRawTheme2.default,
	  darkBaseTheme: _darkBaseTheme2.default,
	  DarkRawTheme: _darkRawTheme2.default,
	  ThemeDecorator: _themeDecorator2.default,
	  getMuiTheme: _getMuiTheme2.default,
	  ZIndex: _zIndex2.default
	};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _darkBaseTheme = __webpack_require__(238);
	
	var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _darkBaseTheme2.default;
	
	// import deprecatedExport from '../../utils/deprecatedExport';
	
	// export default deprecatedExport(
	//   darkBaseTheme,
	//   'material-ui/lib/styles/raw-themes/dark-raw-theme',
	//   'material-ui/lib/styles/baseThemes/darkBaseTheme'
	// );
	
	module.exports = exports['default'];

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (customTheme) {
	
	  return function (Component) {
	
	    return _react2.default.createClass({
	
	      childContextTypes: {
	        muiTheme: _react2.default.PropTypes.object
	      },
	
	      getChildContext: function getChildContext() {
	        return {
	          muiTheme: customTheme
	        };
	      },
	      render: function render() {
	        return _react2.default.createElement(Component, this.props);
	      }
	    });
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactAddonsUpdate = __webpack_require__(109);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _lodash = __webpack_require__(231);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import deprecatedExport from '../utils/deprecatedExport';
	
	exports.default = // deprecatedExport(
	{
	  getMuiTheme: _getMuiTheme2.default,
	  modifyRawThemeSpacing: function modifyRawThemeSpacing(muiTheme, spacing) {
	    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { spacing: { $set: spacing } }));
	  },
	  modifyRawThemePalette: function modifyRawThemePalette(muiTheme, palette) {
	    var newPalette = (0, _lodash2.default)(muiTheme.baseTheme.palette, palette);
	    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { palette: { $set: newPalette } }));
	  },
	  modifyRawThemeFontFamily: function modifyRawThemeFontFamily(muiTheme, fontFamily) {
	    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { fontFamily: { $set: fontFamily } }));
	  }
	}; // ,
	//  'material-ui/lib/styles/theme-manager',
	//  'material-ui/lib/styles/themeManager'
	//);
	
	module.exports = exports['default'];

/***/ },
/* 243 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  menu: 1000,
	  appBar: 1100,
	  leftNavOverlay: 1200,
	  leftNav: 1300,
	  dialogOverlay: 1400,
	  dialog: 1500,
	  layer: 2000,
	  popover: 2100,
	  snackbar: 2900,
	  tooltip: 3000
	};
	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var ToolbarGroup = _react2.default.createClass({
	  displayName: 'ToolbarGroup',
	
	  propTypes: {
	    /**
	     * Can be any node or number of nodes.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	
	    /**
	     * Set this to true for if the `ToolbarGroup` is the first child of `Toolbar`
	     * to prevent setting the left gap.
	     */
	    firstChild: _react2.default.PropTypes.bool,
	
	    /**
	     * Determines the side the `ToolbarGroup` will snap to. Either 'left' or 'right'.
	     */
	    float: _react2.default.PropTypes.oneOf(['left', 'right']),
	
	    /**
	     * Set this to true for if the `ToolbarGroup` is the last child of `Toolbar`
	     * to prevent setting the right gap.
	     */
	    lastChild: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      firstChild: false,
	      float: 'left',
	      lastChild: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.toolbar;
	  },
	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },
	  getStyles: function getStyles() {
	    var _props = this.props;
	    var firstChild = _props.firstChild;
	    var float = _props.float;
	    var lastChild = _props.lastChild;
	
	    var marginHorizontal = this.getSpacing().desktopGutter;
	    var marginVertical = (this.getTheme().height - this.state.muiTheme.button.height) / 2;
	    var styles = {
	      root: {
	        float: float,
	        position: 'relative',
	        marginLeft: firstChild ? -marginHorizontal : undefined,
	        marginRight: lastChild ? -marginHorizontal : undefined
	      },
	      dropDownMenu: {
	        root: {
	          float: 'left',
	          color: _colors2.default.lightBlack, // removes hover color change, we want to keep it
	          display: 'inline-block',
	          marginRight: this.getSpacing().desktopGutter
	        },
	        controlBg: {
	          backgroundColor: this.getTheme().menuHoverColor,
	          borderRadius: 0
	        },
	        underline: {
	          display: 'none'
	        }
	      },
	      button: {
	        float: 'left',
	        margin: marginVertical + 'px ' + marginHorizontal + 'px',
	        position: 'relative'
	      },
	      icon: {
	        root: {
	          float: 'left',
	          cursor: 'pointer',
	          color: this.getTheme().iconColor,
	          lineHeight: this.getTheme().height + 'px',
	          paddingLeft: this.getSpacing().desktopGutter
	        },
	        hover: {
	          color: _colors2.default.darkBlack
	        }
	      },
	      span: {
	        float: 'left',
	        color: this.getTheme().iconColor,
	        lineHeight: this.getTheme().height + 'px'
	      }
	    };
	
	    return styles;
	  },
	  _handleMouseEnterDropDownMenu: function _handleMouseEnterDropDownMenu(e) {
	    e.target.style.zIndex = this.getStyles().icon.hover.zIndex;
	    e.target.style.color = this.getStyles().icon.hover.color;
	  },
	  _handleMouseLeaveDropDownMenu: function _handleMouseLeaveDropDownMenu(e) {
	    e.target.style.zIndex = 'auto';
	    e.target.style.color = this.getStyles().icon.root.color;
	  },
	  _handleMouseEnterFontIcon: function _handleMouseEnterFontIcon(e) {
	    e.target.style.zIndex = this.getStyles().icon.hover.zIndex;
	    e.target.style.color = this.getStyles().icon.hover.color;
	  },
	  _handleMouseLeaveFontIcon: function _handleMouseLeaveFontIcon(e) {
	    e.target.style.zIndex = 'auto';
	    e.target.style.color = this.getStyles().icon.root.color;
	  },
	  render: function render() {
	    var _this = this;
	
	    var _props2 = this.props;
	    var children = _props2.children;
	    var className = _props2.className;
	    var style = _props2.style;
	
	    var other = _objectWithoutProperties(_props2, ['children', 'className', 'style']);
	
	    var styles = this.getStyles();
	    var newChildren = _react2.default.Children.map(children, function (currentChild) {
	      if (!currentChild) {
	        return null;
	      }
	      if (!currentChild.type) {
	        return currentChild;
	      }
	      switch (currentChild.type.displayName) {
	        case 'DropDownMenu':
	          return _react2.default.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.dropDownMenu.root, currentChild.props.style),
	            styleControlBg: styles.dropDownMenu.controlBg,
	            styleUnderline: styles.dropDownMenu.underline
	          });
	        case 'DropDownIcon':
	          return _react2.default.cloneElement(currentChild, {
	            style: _this.mergeStyles({ float: 'left' }, currentChild.props.style),
	            iconStyle: styles.icon.root,
	            onMouseEnter: _this._handleMouseEnterDropDownMenu,
	            onMouseLeave: _this._handleMouseLeaveDropDownMenu
	          });
	        case 'RaisedButton':
	        case 'FlatButton':
	          return _react2.default.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.button, currentChild.props.style)
	          });
	        case 'FontIcon':
	          return _react2.default.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.icon.root, currentChild.props.style),
	            onMouseEnter: _this._handleMouseEnterFontIcon,
	            onMouseLeave: _this._handleMouseLeaveFontIcon
	          });
	        case 'ToolbarSeparator':
	        case 'ToolbarTitle':
	          return _react2.default.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.span, currentChild.props.style)
	          });
	        default:
	          return currentChild;
	      }
	    }, this);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { className: className, style: this.prepareStyles(styles.root, style) }),
	      newChildren
	    );
	  }
	});
	
	exports.default = ToolbarGroup;
	module.exports = exports['default'];

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Toolbar = _react2.default.createClass({
	  displayName: 'Toolbar',
	
	  propTypes: {
	    /**
	     * Can be a `ToolbarGroup` to render a group of related items.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	
	    /**
	     * Do not apply `desktopGutter` to the `Toolbar`.
	     */
	    noGutter: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      noGutter: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.toolbar;
	  },
	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        boxSizing: 'border-box',
	        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	        backgroundColor: this.getTheme().backgroundColor,
	        height: this.getTheme().height,
	        width: '100%',
	        padding: this.props.noGutter ? 0 : '0px ' + this.getSpacing().desktopGutter + 'px'
	      }
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['children', 'className', 'style']);
	
	    var styles = this.getStyles();
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { className: className, style: this.prepareStyles(styles.root, style) }),
	      children
	    );
	  }
	});
	
	exports.default = Toolbar;
	module.exports = exports['default'];

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCreateFragment = __webpack_require__(591);
	
	var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  create: function create(fragments) {
	    var newFragments = {};
	    var validChildrenCount = 0;
	    var firstKey = undefined;
	
	    //Only create non-empty key fragments
	    for (var key in fragments) {
	      var currentChild = fragments[key];
	
	      if (currentChild) {
	        if (validChildrenCount === 0) firstKey = key;
	        newFragments[key] = currentChild;
	        validChildrenCount++;
	      }
	    }
	
	    if (validChildrenCount === 0) return undefined;
	    if (validChildrenCount === 1) return newFragments[firstKey];
	    return (0, _reactAddonsCreateFragment2.default)(newFragments);
	  },
	  extend: function extend(children, extendedProps, extendedChildren) {
	
	    return _react2.default.isValidElement(children) ? _react2.default.Children.map(children, function (child) {
	
	      var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;
	
	      var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;
	
	      return _react2.default.cloneElement(child, newProps, newChildren);
	    }) : children;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 247 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  DOWN: 40,
	  ESC: 27,
	  ENTER: 13,
	  LEFT: 37,
	  RIGHT: 39,
	  SPACE: 32,
	  TAB: 9,
	  UP: 38
	};
	module.exports = exports['default'];

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mergeStyles = mergeStyles;
	exports.mergeAndPrefix = mergeAndPrefix;
	exports.prepareStyles = prepareStyles;
	
	var _autoPrefix = __webpack_require__(60);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _reactAddonsUpdate = __webpack_require__(109);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _warning = __webpack_require__(90);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
	
	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;
	
	function mergeSingle(objA, objB) {
	  if (!objA) return objB;
	  if (!objB) return objA;
	  return (0, _reactAddonsUpdate2.default)(objA, { $merge: objB });
	}
	
	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function ensureDirection(muiTheme, style) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!style.didFlip, 'You\'re calling ensureDirection() on the same style\n      object twice.') : undefined;
	
	    style = mergeStyles({
	      didFlip: 'true'
	    }, style);
	  }
	
	  // Left to right is the default. No need to flip anything.
	  if (!muiTheme || !muiTheme.isRtl) return style;
	
	  var flippedAttributes = {
	    // Keys and their replacements.
	    right: 'left',
	    left: 'right',
	    marginRight: 'marginLeft',
	    marginLeft: 'marginRight',
	    paddingRight: 'paddingLeft',
	    paddingLeft: 'paddingRight',
	    borderRight: 'borderLeft',
	    borderLeft: 'borderRight'
	  };
	
	  var newStyle = {};
	
	  Object.keys(style).forEach(function (attribute) {
	    var value = style[attribute];
	    var key = attribute;
	
	    if (flippedAttributes.hasOwnProperty(attribute)) {
	      key = flippedAttributes[attribute];
	    }
	
	    switch (attribute) {
	      case 'float':
	      case 'textAlign':
	        if (value === 'right') {
	          value = 'left';
	        } else if (value === 'left') {
	          value = 'right';
	        }
	        break;
	
	      case 'direction':
	        if (value === 'ltr') {
	          value = 'rtl';
	        } else if (value === 'rtl') {
	          value = 'ltr';
	        }
	        break;
	
	      case 'transform':
	        var matches = undefined;
	        if (matches = value.match(reTranslate)) {
	          value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	        }
	        if (matches = value.match(reSkew)) {
	          value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
	        }
	        break;
	
	      case 'transformOrigin':
	        if (value.indexOf('right') > -1) {
	          value = value.replace('right', 'left');
	        } else if (value.indexOf('left') > -1) {
	          value = value.replace('left', 'right');
	        }
	        break;
	    }
	
	    newStyle[key] = value;
	  });
	
	  return newStyle;
	}
	
	function mergeStyles(base) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  for (var i = 0; i < args.length; i++) {
	    if (args[i]) {
	      base = mergeSingle(base, args[i]);
	    }
	  }
	  return base;
	}
	
	/**
	 * `mergeAndPrefix` is used to merge styles and autoprefix them. It has has been deprecated
	 *  and should no longer be used.
	 */
	function mergeAndPrefix() {
	  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Use of mergeAndPrefix() has been deprecated. ' + 'Please use mergeStyles() for merging styles, and then prepareStyles() for prefixing and ensuring direction.') : undefined;
	  return _autoPrefix2.default.all(mergeStyles.apply(undefined, arguments));
	}
	
	/**
	 * `prepareStyles` is used to merge multiple styles, make sure they are flipped
	 * to rtl if needed, and then autoprefix them.
	 *
	 * Never call this on the same style object twice. As a rule of thumb, only
	 * call it when passing style attribute to html elements.
	 *
	 * If this method detects you called it twice on the same style object, it
	 * will produce a warning in the console.
	 */
	function prepareStyles(muiTheme) {
	  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  for (var _len2 = arguments.length, styles = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    styles[_key2 - 2] = arguments[_key2];
	  }
	
	  if (styles) {
	    //warning(false, 'Providing more than one style argument to prepareStyles has been deprecated. ' +
	    //  'Please pass a single style, such as the result from mergeStyles(...styles).');
	    style = mergeStyles.apply(undefined, [style].concat(styles));
	  }
	
	  var flipped = ensureDirection(muiTheme, style);
	  return muiTheme.prefix(flipped);
	}
	
	exports.default = {
	  mergeStyles: mergeStyles,
	  mergeAndPrefix: mergeAndPrefix,
	  prepareStyles: prepareStyles
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(634);

/***/ },
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	(function(window) {
	    var re = {
	        not_string: /[^s]/,
	        number: /[diefg]/,
	        json: /[j]/,
	        not_json: /[^j]/,
	        text: /^[^\x25]+/,
	        modulo: /^\x25{2}/,
	        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
	        key: /^([a-z_][a-z_\d]*)/i,
	        key_access: /^\.([a-z_][a-z_\d]*)/i,
	        index_access: /^\[(\d+)\]/,
	        sign: /^[\+\-]/
	    }
	
	    function sprintf() {
	        var key = arguments[0], cache = sprintf.cache
	        if (!(cache[key] && cache.hasOwnProperty(key))) {
	            cache[key] = sprintf.parse(key)
	        }
	        return sprintf.format.call(null, cache[key], arguments)
	    }
	
	    sprintf.format = function(parse_tree, argv) {
	        var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length, is_positive = true, sign = ""
	        for (i = 0; i < tree_length; i++) {
	            node_type = get_type(parse_tree[i])
	            if (node_type === "string") {
	                output[output.length] = parse_tree[i]
	            }
	            else if (node_type === "array") {
	                match = parse_tree[i] // convenience purposes only
	                if (match[2]) { // keyword argument
	                    arg = argv[cursor]
	                    for (k = 0; k < match[2].length; k++) {
	                        if (!arg.hasOwnProperty(match[2][k])) {
	                            throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]))
	                        }
	                        arg = arg[match[2][k]]
	                    }
	                }
	                else if (match[1]) { // positional argument (explicit)
	                    arg = argv[match[1]]
	                }
	                else { // positional argument (implicit)
	                    arg = argv[cursor++]
	                }
	
	                if (get_type(arg) == "function") {
	                    arg = arg()
	                }
	
	                if (re.not_string.test(match[8]) && re.not_json.test(match[8]) && (get_type(arg) != "number" && isNaN(arg))) {
	                    throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)))
	                }
	
	                if (re.number.test(match[8])) {
	                    is_positive = arg >= 0
	                }
	
	                switch (match[8]) {
	                    case "b":
	                        arg = arg.toString(2)
	                    break
	                    case "c":
	                        arg = String.fromCharCode(arg)
	                    break
	                    case "d":
	                    case "i":
	                        arg = parseInt(arg, 10)
	                    break
	                    case "j":
	                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)
	                    break
	                    case "e":
	                        arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential()
	                    break
	                    case "f":
	                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
	                    break
	                    case "g":
	                        arg = match[7] ? parseFloat(arg).toPrecision(match[7]) : parseFloat(arg)
	                    break
	                    case "o":
	                        arg = arg.toString(8)
	                    break
	                    case "s":
	                        arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg)
	                    break
	                    case "u":
	                        arg = arg >>> 0
	                    break
	                    case "x":
	                        arg = arg.toString(16)
	                    break
	                    case "X":
	                        arg = arg.toString(16).toUpperCase()
	                    break
	                }
	                if (re.json.test(match[8])) {
	                    output[output.length] = arg
	                }
	                else {
	                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
	                        sign = is_positive ? "+" : "-"
	                        arg = arg.toString().replace(re.sign, "")
	                    }
	                    else {
	                        sign = ""
	                    }
	                    pad_character = match[4] ? match[4] === "0" ? "0" : match[4].charAt(1) : " "
	                    pad_length = match[6] - (sign + arg).length
	                    pad = match[6] ? (pad_length > 0 ? str_repeat(pad_character, pad_length) : "") : ""
	                    output[output.length] = match[5] ? sign + arg + pad : (pad_character === "0" ? sign + pad + arg : pad + sign + arg)
	                }
	            }
	        }
	        return output.join("")
	    }
	
	    sprintf.cache = {}
	
	    sprintf.parse = function(fmt) {
	        var _fmt = fmt, match = [], parse_tree = [], arg_names = 0
	        while (_fmt) {
	            if ((match = re.text.exec(_fmt)) !== null) {
	                parse_tree[parse_tree.length] = match[0]
	            }
	            else if ((match = re.modulo.exec(_fmt)) !== null) {
	                parse_tree[parse_tree.length] = "%"
	            }
	            else if ((match = re.placeholder.exec(_fmt)) !== null) {
	                if (match[2]) {
	                    arg_names |= 1
	                    var field_list = [], replacement_field = match[2], field_match = []
	                    if ((field_match = re.key.exec(replacement_field)) !== null) {
	                        field_list[field_list.length] = field_match[1]
	                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
	                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
	                                field_list[field_list.length] = field_match[1]
	                            }
	                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
	                                field_list[field_list.length] = field_match[1]
	                            }
	                            else {
	                                throw new SyntaxError("[sprintf] failed to parse named argument key")
	                            }
	                        }
	                    }
	                    else {
	                        throw new SyntaxError("[sprintf] failed to parse named argument key")
	                    }
	                    match[2] = field_list
	                }
	                else {
	                    arg_names |= 2
	                }
	                if (arg_names === 3) {
	                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")
	                }
	                parse_tree[parse_tree.length] = match
	            }
	            else {
	                throw new SyntaxError("[sprintf] unexpected placeholder")
	            }
	            _fmt = _fmt.substring(match[0].length)
	        }
	        return parse_tree
	    }
	
	    var vsprintf = function(fmt, argv, _argv) {
	        _argv = (argv || []).slice(0)
	        _argv.splice(0, 0, fmt)
	        return sprintf.apply(null, _argv)
	    }
	
	    /**
	     * helpers
	     */
	    function get_type(variable) {
	        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
	    }
	
	    function str_repeat(input, multiplier) {
	        return Array(multiplier + 1).join(input)
	    }
	
	    /**
	     * export to either browser or node.js
	     */
	    if (true) {
	        exports.sprintf = sprintf
	        exports.vsprintf = vsprintf
	    }
	    else {
	        window.sprintf = sprintf
	        window.vsprintf = vsprintf
	
	        if (typeof define === "function" && define.amd) {
	            define(function() {
	                return {
	                    sprintf: sprintf,
	                    vsprintf: vsprintf
	                }
	            })
	        }
	    }
	})(typeof window === "undefined" ? this : window);


/***/ },
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ApplicationStore = __webpack_require__(180);
	
	var _ApplicationStore2 = _interopRequireDefault(_ApplicationStore);
	
	var _fluxibleAddonsReact = __webpack_require__(86);
	
	var _fluxibleRouter = __webpack_require__(104);
	
	var _themeManager = __webpack_require__(242);
	
	var _themeManager2 = _interopRequireDefault(_themeManager);
	
	var _themeDecorator = __webpack_require__(241);
	
	var _themeDecorator2 = _interopRequireDefault(_themeDecorator);
	
	var _darkRawTheme = __webpack_require__(240);
	
	var _darkRawTheme2 = _interopRequireDefault(_darkRawTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Application = (_dec = (0, _themeDecorator2.default)(_themeManager2.default.getMuiTheme(_darkRawTheme2.default)), _dec(_class = function (_React$Component) {
	    _inherits(Application, _React$Component);
	
	    function Application() {
	        _classCallCheck(this, Application);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Application).apply(this, arguments));
	    }
	
	    _createClass(Application, [{
	        key: 'render',
	        value: function render() {
	            var Handler = this.props.currentRoute.get('handler');
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(Handler, null)
	            );
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            var newProps = this.props;
	            if (newProps.pageTitle === prevProps.pageTitle) {
	                return;
	            }
	            document.title = newProps.pageTitle;
	        }
	    }]);
	
	    return Application;
	}(_react2.default.Component)) || _class);
	exports.default = (0, _fluxibleAddonsReact.provideContext)((0, _fluxibleRouter.handleHistory)((0, _fluxibleAddonsReact.connectToStores)(Application, [_ApplicationStore2.default], function (context, props) {
	    var appStore = context.getStore(_ApplicationStore2.default);
	    return {
	        pageTitle: appStore.getPageTitle()
	    };
	})));
	module.exports = exports['default'];

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = GetItemsStateAction;
	
	var _superagent = __webpack_require__(176);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _ConfigStore = __webpack_require__(81);
	
	var _ConfigStore2 = _interopRequireDefault(_ConfigStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function GetItemsStateAction(context, payload, done) {
	
	    var config = context.getStore(_ConfigStore2.default);
	    var url = 'http://' + config.getOpenHabUrl() + '/rest/items/';
	
	    _superagent2.default.get(url).set('Accept', 'application/json').end(function (err, res) {
	        if (err || !res.ok) {
	            console.log("Error! " + err);
	        } else {
	            context.dispatch('ITEMS_LOADED', res.body.item);
	        }
	        done();
	    });
	}
	module.exports = exports['default'];

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (context) {
	
	    var config = context.getStore(_ConfigStore2.default);
	
	    // seems that ws for groups are currently not supported by openHAB (1.8)
	    // therefore a subscription for all items is needed in any case
	    var url = 'ws://' + config.getOpenHabUrl() + '/rest/items';
	    var socket = atmosphere;
	    var subSocket = void 0;
	
	    var request = {
	        url: url,
	        logLevel: 'info',
	        contentType: "application/json",
	        transport: 'websocket',
	        fallbackTransport: 'long-polling',
	        timeout: 300000,
	        reconnectInterval: 10000,
	        maxReconnectOnClose: 500,
	        enableProtocol: true,
	        headers: { 'Accept': 'application/json', 'type': 'json' }
	    };
	
	    request.onOpen = function (response) {
	        debug('Socket opened (' + request.url + ')');
	        request.uuid = response.request.uuid;
	    };
	
	    request.onClientTimeout = function () {
	        debug('Client closed connection after timeout. Reconnecting in ' + request.reconnectInterval);
	        setTimeout(function () {
	            subSocket = socket.subscribe(request);
	        }, request.reconnectInterval);
	    };
	
	    request.onReopen = function () {
	        debug('Socket re-connected');
	    };
	
	    request.onClose = function () {
	        debug('Socket closed');
	    };
	
	    request.onError = function () {
	        debug('Error occured!');
	    };
	
	    request.onMessage = function (response) {
	        if (response.status == 200) {
	            var item = $.parseJSON(response.responseBody);
	            debug("received state update: ", item);
	            context.dispatch('ITEM_UPDATED', item);
	        } else {
	            debug("Error receiving message", response);
	        }
	    };
	
	    // connect
	    subSocket = socket.subscribe(request);
	};
	
	var _ConfigStore = __webpack_require__(81);
	
	var _ConfigStore2 = _interopRequireDefault(_ConfigStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var debug = __webpack_require__(28)('HCC:connectWSAction');
	
	module.exports = exports['default'];

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = loadConfigAction;
	
	var _config = __webpack_require__(301);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function loadConfigAction(context, payload, done) {
	    context.dispatch('CONFIG_LOADED', _config2.default);
	    done();
	}
	module.exports = exports['default'];

/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = navigate;
	function navigate(context, payload, done) {
	    var navItem = payload.navItem;
	    var drillDown = payload.drillDown;
	
	
	    if (drillDown) context.dispatch('NAV_DOWN', navItem);else context.dispatch('NAV_UP', navItem);
	
	    done();
	}
	module.exports = exports['default'];

/***/ },
/* 290 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (context, payload, done) {
	    context.dispatch('SET_FULLSCREEN', payload.value);
	    done();
	};
	
	module.exports = exports['default'];

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _fluxible = __webpack_require__(225);
	
	var _fluxible2 = _interopRequireDefault(_fluxible);
	
	var _Application = __webpack_require__(285);
	
	var _Application2 = _interopRequireDefault(_Application);
	
	var _ApplicationStore = __webpack_require__(180);
	
	var _ApplicationStore2 = _interopRequireDefault(_ApplicationStore);
	
	var _RouteStore = __webpack_require__(181);
	
	var _RouteStore2 = _interopRequireDefault(_RouteStore);
	
	var _ItemStore = __webpack_require__(118);
	
	var _ItemStore2 = _interopRequireDefault(_ItemStore);
	
	var _ConfigStore = __webpack_require__(81);
	
	var _ConfigStore2 = _interopRequireDefault(_ConfigStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// create new fluxible instance
	var app = new _fluxible2.default({
	    component: _Application2.default
	});
	
	// register stores
	app.registerStore(_RouteStore2.default);
	app.registerStore(_ApplicationStore2.default);
	app.registerStore(_ItemStore2.default);
	app.registerStore(_ConfigStore2.default);
	
	module.exports = app;

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _toolbar = __webpack_require__(245);
	
	var _toolbar2 = _interopRequireDefault(_toolbar);
	
	var _toolbarTitle = __webpack_require__(584);
	
	var _toolbarTitle2 = _interopRequireDefault(_toolbarTitle);
	
	var _toolbarGroup = __webpack_require__(244);
	
	var _toolbarGroup2 = _interopRequireDefault(_toolbarGroup);
	
	var _fluxibleAddonsReact = __webpack_require__(86);
	
	var _ItemStore = __webpack_require__(118);
	
	var _ItemStore2 = _interopRequireDefault(_ItemStore);
	
	var _Clock = __webpack_require__(298);
	
	var _Clock2 = _interopRequireDefault(_Clock);
	
	var _ToolbarComponent = __webpack_require__(178);
	
	var _ToolbarComponent2 = _interopRequireDefault(_ToolbarComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var appBarStyle = {
	    backgroundColor: 'rgba(48, 48, 48, 0.39)',
	    position: 'fixed',
	    bottom: 0,
	    borderTop: 'solid 1px #444',
	    height: '40px'
	};
	
	var toolbarTitleStyle = {
	    color: '#888',
	    fontSize: '16px',
	    lineHeight: '40px'
	};
	
	var Footer = (_dec = (0, _fluxibleAddonsReact.connectToStores)([_ItemStore2.default], function (context) {
	    return {
	        lastUpdate: context.getStore(_ItemStore2.default).getLastUpdate()
	    };
	}), _dec(_class = function (_React$Component) {
	    _inherits(Footer, _React$Component);
	
	    function Footer() {
	        _classCallCheck(this, Footer);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	    }
	
	    _createClass(Footer, [{
	        key: 'render',
	        value: function render() {
	
	            var clock = _react2.default.createElement(_Clock2.default, null);
	            var lastUpdateText = 'Last Update: ' + this.props.lastUpdate;
	
	            return _react2.default.createElement(
	                _toolbar2.default,
	                { style: appBarStyle },
	                _react2.default.createElement(
	                    _toolbarGroup2.default,
	                    { float: 'left' },
	                    _react2.default.createElement(_ToolbarComponent2.default, { content: clock, style: toolbarTitleStyle })
	                ),
	                _react2.default.createElement(
	                    _toolbarGroup2.default,
	                    { float: 'right' },
	                    _react2.default.createElement(_toolbarTitle2.default, { text: lastUpdateText, style: toolbarTitleStyle })
	                )
	            );
	        }
	    }]);
	
	    return Footer;
	}(_react2.default.Component)) || _class);
	exports.default = Footer;
	module.exports = exports['default'];

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _iconMenu = __webpack_require__(563);
	
	var _iconMenu2 = _interopRequireDefault(_iconMenu);
	
	var _iconButton = __webpack_require__(150);
	
	var _iconButton2 = _interopRequireDefault(_iconButton);
	
	var _moreVert = __webpack_require__(582);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _menuItem = __webpack_require__(564);
	
	var _menuItem2 = _interopRequireDefault(_menuItem);
	
	var _toolbar = __webpack_require__(245);
	
	var _toolbar2 = _interopRequireDefault(_toolbar);
	
	var _toolbarGroup = __webpack_require__(244);
	
	var _toolbarGroup2 = _interopRequireDefault(_toolbarGroup);
	
	var _toolbarSeparator = __webpack_require__(583);
	
	var _toolbarSeparator2 = _interopRequireDefault(_toolbarSeparator);
	
	var _ToolbarComponent = __webpack_require__(178);
	
	var _ToolbarComponent2 = _interopRequireDefault(_ToolbarComponent);
	
	var _HeaderStyles = __webpack_require__(294);
	
	var styles = _interopRequireWildcard(_HeaderStyles);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	    onFullscreen: _react.PropTypes.func.isRequired
	},
	    menuItems = {
	    fullScreen: 'Toggle Fullscreen'
	};
	
	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header() {
	        _classCallCheck(this, Header);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this));
	
	        _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(Header, [{
	        key: "handleMenuItemClick",
	        value: function handleMenuItemClick(target, element) {
	            if (element.props.primaryText == menuItems.fullScreen) {
	                this.props.onFullscreen();
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var navItems = this.props.navItems.map(function (n, index) {
	                var text, separator;
	                if (index > 0) separator = _react2.default.createElement(
	                    _toolbarSeparator2.default,
	                    { style: styles.separatorStyle },
	                    ">"
	                );
	                if (n.icon) text = _react2.default.createElement(
	                    "span",
	                    null,
	                    _react2.default.createElement(
	                        "i",
	                        { className: "material-icons md-24", style: styles.iconStyle },
	                        n.icon
	                    ),
	                    n.label
	                );else text = _react2.default.createElement(
	                    "span",
	                    null,
	                    n.label
	                );
	
	                return _react2.default.createElement(
	                    _toolbarGroup2.default,
	                    { key: index, float: "left" },
	                    separator,
	                    _react2.default.createElement(_ToolbarComponent2.default, { content: text, style: styles.titleStyle,
	                        onClick: _this2.props.onNavClick.bind(null, n) })
	                );
	            });
	
	            return _react2.default.createElement(
	                _toolbar2.default,
	                { style: styles.appBarStyle },
	                navItems,
	                _react2.default.createElement(
	                    _toolbarGroup2.default,
	                    { float: "right" },
	                    _react2.default.createElement(
	                        _iconMenu2.default,
	                        { iconButtonElement: _react2.default.createElement(
	                                _iconButton2.default,
	                                { touch: true },
	                                _react2.default.createElement(_moreVert2.default, null)
	                            ),
	                            onItemTouchTap: this.handleMenuItemClick },
	                        _react2.default.createElement(_menuItem2.default, { primaryText: menuItems.fullScreen })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Header;
	}(_react2.default.Component);
	
	Header.propTypes = propTypes;
	
	exports.default = Header;
	module.exports = exports['default'];

/***/ },
/* 294 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var appBarStyle = exports.appBarStyle = {
	    backgroundColor: 'rgba(55, 55, 55, 0.39)',
	    position: 'fixed',
	    top: 0,
	    zIndex: 100,
	    borderBottom: 'solid 1px #444'
	};
	
	var titleStyle = exports.titleStyle = {
	    color: '#aaa',
	    cursor: 'pointer',
	    fontSize: '18px'
	};
	
	var separatorStyle = exports.separatorStyle = {
	    backgroundColor: 'initial',
	    color: '#aaa',
	    width: '12px',
	    top: 0,
	    fontSize: '20px',
	    marginLeft: 0,
	    marginRight: '15px'
	};
	
	var iconStyle = exports.iconStyle = {
	    verticalAlign: 'sub',
	    marginRight: '5px'
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GroupCard = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _card = __webpack_require__(149);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _cardHeader = __webpack_require__(148);
	
	var _cardHeader2 = _interopRequireDefault(_cardHeader);
	
	var _CardStyles = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	    item: _react2.default.PropTypes.object.isRequired,
	    onCardClick: _react2.default.PropTypes.func
	};
	
	var GroupCard = exports.GroupCard = function (_React$Component) {
	    _inherits(GroupCard, _React$Component);
	
	    function GroupCard() {
	        _classCallCheck(this, GroupCard);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(GroupCard).apply(this, arguments));
	    }
	
	    _createClass(GroupCard, [{
	        key: 'render',
	        value: function render() {
	            var item = this.props.item;
	            return _react2.default.createElement(
	                _card2.default,
	                { style: _CardStyles.cardStyle, zDepth: 4, onClick: this.props.onCardClick },
	                _react2.default.createElement(_cardHeader2.default, { title: item.label, titleStyle: _CardStyles.headerTitleStyle })
	            );
	        }
	    }]);
	
	    return GroupCard;
	}(_react2.default.Component);
	
	GroupCard.propTypes = propTypes;
	
	exports.default = GroupCard;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SensorCard = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _card = __webpack_require__(149);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _cardHeader = __webpack_require__(148);
	
	var _cardHeader2 = _interopRequireDefault(_cardHeader);
	
	var _StateVisualizer = __webpack_require__(299);
	
	var _StateVisualizer2 = _interopRequireDefault(_StateVisualizer);
	
	var _CardStyles = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	    item: _react2.default.PropTypes.object.isRequired,
	    onCardClick: _react2.default.PropTypes.func
	};
	
	var SensorCard = exports.SensorCard = function (_React$Component) {
	    _inherits(SensorCard, _React$Component);
	
	    function SensorCard() {
	        _classCallCheck(this, SensorCard);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SensorCard).apply(this, arguments));
	    }
	
	    _createClass(SensorCard, [{
	        key: "render",
	        value: function render() {
	            var item = this.props.item;
	
	            return _react2.default.createElement(
	                _card2.default,
	                { style: _CardStyles.cardStyle, zDepth: 4, onClick: this.props.onCardClick },
	                _react2.default.createElement(_cardHeader2.default, { title: item.label, titleStyle: _CardStyles.headerTitleStyle }),
	                _react2.default.createElement(_StateVisualizer2.default, { item: item })
	            );
	        }
	    }]);
	
	    return SensorCard;
	}(_react2.default.Component);
	
	SensorCard.propTypes = propTypes;
	
	exports.default = SensorCard;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SwitchCard = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _card = __webpack_require__(149);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _cardHeader = __webpack_require__(148);
	
	var _cardHeader2 = _interopRequireDefault(_cardHeader);
	
	var _SwitchItemVisualizer = __webpack_require__(300);
	
	var _SwitchItemVisualizer2 = _interopRequireDefault(_SwitchItemVisualizer);
	
	var _CardStyles = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	    item: _react2.default.PropTypes.object.isRequired
	};
	
	var SwitchCard = exports.SwitchCard = function (_React$Component) {
	    _inherits(SwitchCard, _React$Component);
	
	    function SwitchCard() {
	        _classCallCheck(this, SwitchCard);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SwitchCard).apply(this, arguments));
	    }
	
	    _createClass(SwitchCard, [{
	        key: "render",
	        value: function render() {
	            var item = this.props.item;
	
	            return _react2.default.createElement(
	                _card2.default,
	                { style: _CardStyles.cardStyle, zDepth: 4 },
	                _react2.default.createElement(_cardHeader2.default, { title: item.label, titleStyle: _CardStyles.headerTitleStyle }),
	                _react2.default.createElement(_SwitchItemVisualizer2.default, { item: item, icon: "power_settings_new" })
	            );
	        }
	    }]);
	
	    return SwitchCard;
	}(_react2.default.Component);
	
	SwitchCard.propTypes = propTypes;
	
	exports.default = SwitchCard;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _dateTime = __webpack_require__(179);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Clock = function (_React$Component) {
	    _inherits(Clock, _React$Component);
	
	    function Clock(props) {
	        _classCallCheck(this, Clock);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Clock).call(this, props));
	
	        _this.state = { time: (0, _dateTime.getTime)(), day: (0, _dateTime.getDay)() };
	
	        setInterval(function () {
	            _this.setState({ time: (0, _dateTime.getTime)(), day: (0, _dateTime.getDay)() });
	        }, 1000);
	        return _this;
	    }
	
	    _createClass(Clock, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    this.state.day
	                ),
	                ' ',
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    this.state.time
	                )
	            );
	        }
	    }]);
	
	    return Clock;
	}(_react2.default.Component);
	
	exports.default = Clock;
	module.exports = exports['default'];

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.StateVisualizer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _cardTitle = __webpack_require__(232);
	
	var _cardTitle2 = _interopRequireDefault(_cardTitle);
	
	var _CardStyles = __webpack_require__(80);
	
	var styles = _interopRequireWildcard(_CardStyles);
	
	var _lodash = __webpack_require__(87);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _sprintfJs = __webpack_require__(281);
	
	var _setItemStateAction = __webpack_require__(177);
	
	var _setItemStateAction2 = _interopRequireDefault(_setItemStateAction);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	    icon: _react2.default.PropTypes.string
	};
	
	var StateVisualizer = exports.StateVisualizer = function (_React$Component) {
	    _inherits(StateVisualizer, _React$Component);
	
	    function StateVisualizer(props, context) {
	        _classCallCheck(this, StateVisualizer);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StateVisualizer).call(this, props, context));
	
	        _this.stateStyles = {
	            info: styles.infoStyle,
	            alert: styles.alertStyle,
	            warning: styles.warningStyle,
	            default: styles.defaultStyle
	        };
	        return _this;
	    }
	
	    _createClass(StateVisualizer, [{
	        key: "getFormattedState",
	        value: function getFormattedState(item) {
	            return item.format && item.state && item.state != 'Uninitialized' ? (0, _sprintfJs.sprintf)(item.format, item.state) : item.state;
	        }
	    }, {
	        key: "applyThresholdStyle",
	        value: function applyThresholdStyle(item, destStyle, state) {
	            var _this2 = this;
	
	            if (item.thresholds) {
	                item.thresholds.some(function (t) {
	                    if (state >= t.threshold) {
	                        _lodash2.default.assign(destStyle, _this2.stateStyles[t.style]);
	                        return true;
	                    }
	                });
	            }
	        }
	    }, {
	        key: "handleStateChange",
	        value: function handleStateChange(increase) {
	            var item = this.props.item,
	                currentState = parseFloat(item.state);
	            if (isNaN(currentState)) currentState = 0;
	            var newState = increase ? currentState + 1 : currentState - 1;
	            context.executeAction(_setItemStateAction2.default, { item: item, newState: newState, debounced: true, debounceTimeout: 2000 });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this3 = this;
	
	            var state,
	                stateStyleResolved = {},
	                titleStyleResolved = {};
	            _lodash2.default.assign(titleStyleResolved, styles.cardTitleStyle);
	            _lodash2.default.assign(stateStyleResolved, styles.defaultStyle, styles.stateStyle);
	
	            if (this.props.item) {
	                var stateGroup;
	
	                (function () {
	                    var item = _this3.props.item;
	
	                    if (item.stateGroup) {
	                        _lodash2.default.assign(titleStyleResolved, styles.cardTitleStyleSmall);
	                        stateGroup = item.stateGroup.map(function (stateItem, i) {
	                            var itemStyle = {};
	                            _lodash2.default.assign(itemStyle, stateStyleResolved, styles.stateStyleSmall);
	                            _this3.applyThresholdStyle(item, itemStyle, stateItem.state);
	                            _this3.applyThresholdStyle(stateItem, itemStyle, stateItem.state);
	                            return _react2.default.createElement(
	                                "div",
	                                { key: i,
	                                    style: i < item.stateGroup.length - 1 ? styles.cardTitleRowStyleSmall : styles.cardTitleLastRowStyleSmall },
	                                _react2.default.createElement(
	                                    "span",
	                                    { style: styles.cardTitleRowLabelSmall },
	                                    stateItem.label
	                                ),
	                                _react2.default.createElement(
	                                    "span",
	                                    { style: itemStyle },
	                                    _this3.getFormattedState(stateItem)
	                                )
	                            );
	                        });
	
	                        state = _react2.default.createElement(
	                            "div",
	                            { style: { width: '100%', height: '100%' } },
	                            stateGroup
	                        );
	                    } else {
	                        _this3.applyThresholdStyle(item, stateStyleResolved, item.state);
	                        state = _react2.default.createElement(
	                            "span",
	                            { style: stateStyleResolved },
	                            _this3.getFormattedState(item)
	                        );
	                        if (item.editable) {
	                            state = _react2.default.createElement(
	                                "div",
	                                { style: styles.stateStyle },
	                                _react2.default.createElement(
	                                    "i",
	                                    { onClick: _this3.handleStateChange.bind(_this3, true), className: "material-icons md-16", style: styles.editButtonStyle },
	                                    "add_circle_outline"
	                                ),
	                                state,
	                                _react2.default.createElement(
	                                    "i",
	                                    { onClick: _this3.handleStateChange.bind(_this3, false), className: "material-icons md-16", style: styles.editButtonStyle },
	                                    "remove_circle_outline"
	                                )
	                            );
	                        }
	                    }
	                })();
	            }
	
	            return _react2.default.createElement(_cardTitle2.default, { title: state, titleStyle: titleStyleResolved });
	        }
	    }]);
	
	    return StateVisualizer;
	}(_react2.default.Component);
	
	StateVisualizer.propTypes = propTypes;
	
	exports.default = StateVisualizer;

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SwitchItemVisualizer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _cardTitle = __webpack_require__(232);
	
	var _cardTitle2 = _interopRequireDefault(_cardTitle);
	
	var _CardStyles = __webpack_require__(80);
	
	var styles = _interopRequireWildcard(_CardStyles);
	
	var _lodash = __webpack_require__(87);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _setItemStateAction = __webpack_require__(177);
	
	var _setItemStateAction2 = _interopRequireDefault(_setItemStateAction);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	    item: _react2.default.PropTypes.object
	};
	
	var SwitchItemVisualizer = exports.SwitchItemVisualizer = function (_React$Component) {
	    _inherits(SwitchItemVisualizer, _React$Component);
	
	    function SwitchItemVisualizer(props, context) {
	        _classCallCheck(this, SwitchItemVisualizer);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SwitchItemVisualizer).call(this, props, context));
	    }
	
	    _createClass(SwitchItemVisualizer, [{
	        key: "handleClick",
	        value: function handleClick() {
	            var item = this.props.item;
	            var newState = item.state === 'ON' ? 'OFF' : 'ON';
	            context.executeAction(_setItemStateAction2.default, { item: item, newState: newState, debounced: true, debounceTimeout: 500 });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var state,
	                stateStyleResolved = {},
	                titleStyleResolved = {};
	            _lodash2.default.assign(titleStyleResolved, styles.cardTitleStyle);
	            _lodash2.default.assign(stateStyleResolved, styles.defaultStyle, styles.stateStyle);
	
	            if (this.props.item) {
	                var item = this.props.item;
	
	                if (this.props.icon) {
	                    state = _react2.default.createElement(
	                        "i",
	                        { className: "material-icons md-48", style: stateStyleResolved },
	                        this.props.icon
	                    );
	                } else {
	                    state = _react2.default.createElement(
	                        "span",
	                        { style: stateStyleResolved },
	                        item.state
	                    );
	                }
	
	                if (item.state === 'ON') titleStyleResolved.backgroundColor = '#228855';
	            }
	
	            return _react2.default.createElement(_cardTitle2.default, { onClick: this.handleClick.bind(this), title: state, titleStyle: titleStyleResolved });
	        }
	    }]);
	
	    return SwitchItemVisualizer;
	}(_react2.default.Component);
	
	SwitchItemVisualizer.propTypes = propTypes;
	exports.default = SwitchItemVisualizer;

/***/ },
/* 301 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    openHabURL: "192.168.1.200:8080",
	    items: [{
	        label: 'Heizung Wohnzimmer', thresholds: [{ threshold: 20, style: 'alert' }],
	        stateGroup: [{
	            name: 'Heating_LivingRoom', label: 'Soll', format: '%.1f °C',
	            thresholds: [{ threshold: 18, style: 'warning' }]
	        }, { name: 'Heating_LivingRoomTemp', label: 'Ist', format: '%.1f °C' }]
	    }, { name: 'Heating_LivingRoomValve', label: 'Wohnzimmer Ventil', format: '%i %%' }, { label: 'LED Switch', name: 'power_led_office' }, {
	        name: 'fritz_power_office',
	        label: 'Energie Büro',
	        format: '%.1f W',
	        thresholds: [{ threshold: 160, style: 'warning' }, { threshold: 170, style: 'alert' }]
	    }, {
	        name: 'Heating_LivingRoom',
	        label: 'Wohnzimmer Temp Soll',
	        editable: true,
	        format: '%.1f °C',
	        thresholds: [{ threshold: 180, style: 'warning' }, { threshold: 190, style: 'alert' }]
	    }, {
	        name: 'Heating_Kitchen',
	        label: 'Küche Temp Soll',
	        editable: true,
	        format: '%.1f °C',
	        thresholds: [{ threshold: 180, style: 'warning' }, { threshold: 190, style: 'alert' }]
	    }, { name: 'TestNumber', label: 'Test Me', editable: true, format: '%.1f °C' }, { name: 'TestNumber2', label: 'Test Me2', editable: true, format: '%.1f °C' }, { name: 'Heating_LivingRoomTemp', label: 'Wohnzimmer Temp Ist', format: '%.1f °C' }, { name: 'Heating_LivingRoomValve', label: 'Wohnzimmer Ventil', format: '%i %%', items: [{ name: 'Heating_LivingRoomValve', label: 'Wohnzimmer Ventil', format: '%i %%', items: [{ name: 'fritz_power_office', label: 'Nasenzimmer', format: '%.1f W' }] }] }]
	};
	module.exports = exports['default'];

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    home: {
	        path: '/',
	        method: 'get',
	        page: 'home',
	        title: 'Home',
	        handler: __webpack_require__(304)
	    }
	
	};
	module.exports = exports['default'];

/***/ },
/* 303 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.enterFullscreen = enterFullscreen;
	exports.exitFullscreen = exitFullscreen;
	function enterFullscreen(element) {
	    if (element.requestFullscreen) {
	        element.requestFullscreen();
	    } else if (element.mozRequestFullScreen) {
	        element.mozRequestFullScreen();
	    } else if (element.webkitRequestFullscreen) {
	        element.webkitRequestFullscreen();
	    } else if (element.msRequestFullscreen) {
	        element.msRequestFullscreen();
	    }
	}
	
	function exitFullscreen() {
	    if (document.exitFullscreen) {
	        document.exitFullscreen();
	    } else if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen();
	    } else if (document.webkitExitFullscreen) {
	        document.webkitExitFullscreen();
	    }
	}

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fluxibleAddonsReact = __webpack_require__(86);
	
	var _ItemStore = __webpack_require__(118);
	
	var _ItemStore2 = _interopRequireDefault(_ItemStore);
	
	var _ConfigStore = __webpack_require__(81);
	
	var _ConfigStore2 = _interopRequireDefault(_ConfigStore);
	
	var _SensorCard = __webpack_require__(296);
	
	var _SensorCard2 = _interopRequireDefault(_SensorCard);
	
	var _SwitchCard = __webpack_require__(297);
	
	var _SwitchCard2 = _interopRequireDefault(_SwitchCard);
	
	var _GroupCard = __webpack_require__(295);
	
	var _GroupCard2 = _interopRequireDefault(_GroupCard);
	
	var _Header = __webpack_require__(293);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(292);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _navigateAction = __webpack_require__(289);
	
	var _navigateAction2 = _interopRequireDefault(_navigateAction);
	
	var _setFullscreenAction = __webpack_require__(290);
	
	var _setFullscreenAction2 = _interopRequireDefault(_setFullscreenAction);
	
	var _fullscreen = __webpack_require__(303);
	
	__webpack_require__(494);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = (_dec = (0, _fluxibleAddonsReact.connectToStores)([_ItemStore2.default, _ConfigStore2.default], function (context) {
	    return {
	        navItems: context.getStore(_ItemStore2.default).getNavItems(),
	        currentItem: context.getStore(_ItemStore2.default).getCurrentItem(),
	        isFullscreen: context.getStore(_ConfigStore2.default).isFullscreen()
	    };
	}), _dec(_class = function (_React$Component) {
	    _inherits(Home, _React$Component);
	
	    function Home() {
	        _classCallCheck(this, Home);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
	    }
	
	    _createClass(Home, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.isFullscreen) (0, _fullscreen.enterFullscreen)(document.documentElement);else (0, _fullscreen.exitFullscreen)();
	        }
	    }, {
	        key: "handleNavClick",
	        value: function handleNavClick(item) {
	            context.executeAction(_navigateAction2.default, { navItem: item, drillDown: false });
	        }
	    }, {
	        key: "handleClick",
	        value: function handleClick(item) {
	            if (item.items) {
	                context.executeAction(_navigateAction2.default, { navItem: item, drillDown: true });
	            }
	        }
	    }, {
	        key: "handleFullscreen",
	        value: function handleFullscreen() {
	            context.executeAction(_setFullscreenAction2.default, { value: !this.props.isFullscreen });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var items = this.props.currentItem.items;
	
	            if (items) {
	                var renderedItems = items.map(function (item, i) {
	                    switch (item.type) {
	                        case 'Group':
	                            return _react2.default.createElement(_GroupCard2.default, { key: i, item: item, onCardClick: _this2.handleClick.bind(_this2, item) });
	                        case 'SwitchItem':
	                            return _react2.default.createElement(_SwitchCard2.default, { key: i, item: item });
	                        default:
	                            return _react2.default.createElement(_SensorCard2.default, { key: i, item: item, onCardClick: _this2.handleClick.bind(_this2, item) });
	                    }
	                });
	            }
	
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_Header2.default, { navItems: this.props.navItems, onNavClick: this.handleNavClick.bind(this),
	                    onFullscreen: this.handleFullscreen.bind(this) }),
	                _react2.default.createElement(
	                    "div",
	                    { className: "home" },
	                    renderedItems
	                ),
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);
	
	    return Home;
	}(_react2.default.Component)) || _class);
	exports.default = Home;
	module.exports = exports['default'];

/***/ },
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bowser - a browser detector
	  * https://github.com/ded/bowser
	  * MIT License | (c) Dustin Diaz 2015
	  */
	
	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */
	
	  var t = true
	
	  function detect(ua) {
	
	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }
	
	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }
	
	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , chromeBook = /CrOS/.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , result
	
	    if (/opera|opr/i.test(ua)) {
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/windows phone/i.test(ua)) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeBook) {
	      result = {
	        name: 'Chrome'
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (/sailfish/i.test(ua)) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (/silk/i.test(ua)) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	      , version: versionIdentifier
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/(web|hpw)os/i.test(ua)) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (/tizen/i.test(ua)) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/safari/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      , version: versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }
	
	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      result.name = result.name || "Webkit"
	      result.webkit = t
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }
	
	    // set OS flags for platforms that have multiple browsers
	    if (!result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    }
	
	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }
	
	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
	      result.tablet = t
	    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
	      result.mobile = t
	    }
	
	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
	        (result.chrome && result.version >= 20) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        ) {
	      result.c = t
	    } else result.x = t
	
	    return result
	  }
	
	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')
	
	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }
	
	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;
	
	  return bowser
	});


/***/ },
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	module.exports = __webpack_require__(208);


/***/ },
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _pluginsCalc = __webpack_require__(529);
	
	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);
	
	var _pluginsCursor = __webpack_require__(530);
	
	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);
	
	var _pluginsFlex = __webpack_require__(531);
	
	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);
	
	var _pluginsSizing = __webpack_require__(535);
	
	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);
	
	var _pluginsGradient = __webpack_require__(534);
	
	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);
	
	var _pluginsTransition = __webpack_require__(536);
	
	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);
	
	// special flexbox specifications
	
	var _pluginsFlexboxIE = __webpack_require__(532);
	
	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);
	
	var _pluginsFlexboxOld = __webpack_require__(533);
	
	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);
	
	exports['default'] = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'],
	// this must be run AFTER the flexbox specs
	_pluginsFlex2['default']];
	module.exports = exports['default'];

/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utilsGetBrowserInformation = __webpack_require__(539);
	
	var _utilsGetBrowserInformation2 = _interopRequireDefault(_utilsGetBrowserInformation);
	
	var _utilsGetPrefixedKeyframes = __webpack_require__(540);
	
	var _utilsGetPrefixedKeyframes2 = _interopRequireDefault(_utilsGetPrefixedKeyframes);
	
	var _utilsCapitalizeString = __webpack_require__(228);
	
	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);
	
	var _utilsAssign = __webpack_require__(537);
	
	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);
	
	var _utilsWarn = __webpack_require__(541);
	
	var _utilsWarn2 = _interopRequireDefault(_utilsWarn);
	
	var _caniuseData = __webpack_require__(528);
	
	var _caniuseData2 = _interopRequireDefault(_caniuseData);
	
	var _Plugins = __webpack_require__(526);
	
	var _Plugins2 = _interopRequireDefault(_Plugins);
	
	var browserWhitelist = ['phantom'];
	
	var Prefixer = (function () {
	  /**
	   * Instantiante a new prefixer
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   * @param {string} keepUnprefixed - keeps unprefixed properties and values
	   */
	
	  function Prefixer() {
	    var _this = this;
	
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Prefixer);
	
	    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
	
	    this._userAgent = options.userAgent || defaultUserAgent;
	    this._keepUnprefixed = options.keepUnprefixed || false;
	
	    this._browserInfo = (0, _utilsGetBrowserInformation2['default'])(this._userAgent);
	
	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      // set additional prefix information
	      this.cssPrefix = this._browserInfo.prefix.css;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _utilsGetPrefixedKeyframes2['default'])(this._browserInfo);
	    } else {
	      this._hasPropsRequiringPrefix = false;
	      (0, _utilsWarn2['default'])('Either the global navigator was undefined or an invalid userAgent was provided.', 'Using a valid userAgent? Please let us know and create an issue at https://github.com/rofrischmann/inline-style-prefixer/issues');
	      return false;
	    }
	
	    var data = this._browserInfo.browser && _caniuseData2['default'][this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        return _extends({}, result, _defineProperty({}, name, true));
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      // check for whitelisted browsers
	      browserWhitelist.forEach(function (browser) {
	        if (_this._browserInfo[browser]) {
	          _this._isWhitelisted = true;
	        }
	      });
	      this._hasPropsRequiringPrefix = false;
	
	      // Do not throw a warning if whitelisted
	      if (this._isWhitelisted) {
	        return true;
	      }
	      (0, _utilsWarn2['default'])('Your userAgent seems to be not supported by inline-style-prefixer. Feel free to open an issue.');
	      return false;
	    }
	  }
	
	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */
	
	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;
	
	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }
	
	      styles = (0, _utilsAssign2['default'])({}, styles);
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
	            if (!_this2._keepUnprefixed) {
	              delete styles[property];
	            }
	          }
	
	          // resolve plugins
	          _Plugins2['default'].forEach(function (plugin) {
	            // generates a new plugin interface with current data
	            var resolvedStyles = plugin({
	              property: property,
	              value: value,
	              styles: styles,
	              browserInfo: _this2._browserInfo,
	              prefix: {
	                js: _this2.jsPrefix,
	                css: _this2.cssPrefix,
	                keyframes: _this2.prefixedKeyframes
	              },
	              keepUnprefixed: _this2._keepUnprefixed,
	              requiresPrefix: _this2._requiresPrefix,
	              forceRun: false
	            });
	            (0, _utilsAssign2['default'])(styles, resolvedStyles);
	          });
	        }
	      });
	
	      return styles;
	    }
	
	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      var prefixes = {};
	      var browserInfo = (0, _utilsGetBrowserInformation2['default'])('*');
	
	      browserInfo.browsers.forEach(function (browser) {
	        var data = _caniuseData2['default'][browser];
	        if (data) {
	          (0, _utilsAssign2['default'])(prefixes, data);
	        }
	      });
	
	      // there should always be at least one prefixed style, but just incase
	      if (!Object.keys(prefixes).length > 0) {
	        return styles;
	      }
	
	      styles = (0, _utilsAssign2['default'])({}, styles);
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = Prefixer.prefixAll(value);
	        } else {
	          var browsers = Object.keys(browserInfo.prefixes);
	          browsers.forEach(function (browser) {
	            var style = browserInfo.prefixes[browser];
	            // add prefixes if needed
	            if (prefixes[property]) {
	              styles[style.inline + (0, _utilsCapitalizeString2['default'])(property)] = value;
	            }
	
	            // resolve plugins for each browser
	            _Plugins2['default'].forEach(function (plugin) {
	              var resolvedStyles = plugin({
	                property: property,
	                value: value,
	                styles: styles,
	                browserInfo: {
	                  name: browser,
	                  prefix: style,
	                  version: 0 // assume lowest
	                },
	                prefix: {},
	                keepUnprefixed: true,
	                requiresPrefix: prefixes,
	                forceRun: true
	              });
	              (0, _utilsAssign2['default'])(styles, resolvedStyles);
	            });
	          });
	        }
	      });
	
	      return styles;
	    }
	  }]);
	
	  return Prefixer;
	})();
	
	exports['default'] = Prefixer;
	module.exports = exports['default'];

/***/ },
/* 528 */
/***/ function(module, exports) {

	var caniuseData = {"chrome":{"transform":35,"transformOrigin":35,"transformOriginX":35,"transformOriginY":35,"backfaceVisibility":35,"perspective":35,"perspectiveOrigin":35,"transformStyle":35,"transformOriginZ":35,"animation":42,"animationDelay":42,"animationDirection":42,"animationFillMode":42,"animationDuration":42,"animationIterationCount":42,"animationName":42,"animationPlayState":42,"animationTimingFunction":42,"appearance":50,"userSelect":50,"fontKerning":32,"textEmphasisPosition":50,"textEmphasis":50,"textEmphasisStyle":50,"textEmphasisColor":50,"boxDecorationBreak":50,"clipPath":50,"maskImage":50,"maskMode":50,"maskRepeat":50,"maskPosition":50,"maskClip":50,"maskOrigin":50,"maskSize":50,"maskComposite":50,"mask":50,"maskBorderSource":50,"maskBorderMode":50,"maskBorderSlice":50,"maskBorderWidth":50,"maskBorderOutset":50,"maskBorderRepeat":50,"maskBorder":50,"maskType":50,"textDecorationStyle":50,"textDecorationSkip":50,"textDecorationLine":50,"textDecorationColor":50,"filter":50,"fontFeatureSettings":47,"breakAfter":50,"breakBefore":50,"breakInside":50,"columnCount":50,"columnFill":50,"columnGap":50,"columnRule":50,"columnRuleColor":50,"columnRuleStyle":50,"columnRuleWidth":50,"columns":50,"columnSpan":50,"columnWidth":50},"safari":{"flex":8,"flexBasis":8,"flexDirection":8,"flexGrow":8,"flexFlow":8,"flexShrink":8,"flexWrap":8,"alignContent":8,"alignItems":8,"alignSelf":8,"justifyContent":8,"order":8,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8,"transformOrigin":8,"transformOriginX":8,"transformOriginY":8,"backfaceVisibility":8,"perspective":8,"perspectiveOrigin":8,"transformStyle":8,"transformOriginZ":8,"animation":8,"animationDelay":8,"animationDirection":8,"animationFillMode":8,"animationDuration":8,"animationIterationCount":8,"animationName":8,"animationPlayState":8,"animationTimingFunction":8,"appearance":9.1,"userSelect":9.1,"backdropFilter":9.1,"fontKerning":9.1,"scrollSnapType":9.1,"scrollSnapPointsX":9.1,"scrollSnapPointsY":9.1,"scrollSnapDestination":9.1,"scrollSnapCoordinate":9.1,"textEmphasisPosition":7,"textEmphasis":7,"textEmphasisStyle":7,"textEmphasisColor":7,"boxDecorationBreak":9.1,"clipPath":9.1,"maskImage":9.1,"maskMode":9.1,"maskRepeat":9.1,"maskPosition":9.1,"maskClip":9.1,"maskOrigin":9.1,"maskSize":9.1,"maskComposite":9.1,"mask":9.1,"maskBorderSource":9.1,"maskBorderMode":9.1,"maskBorderSlice":9.1,"maskBorderWidth":9.1,"maskBorderOutset":9.1,"maskBorderRepeat":9.1,"maskBorder":9.1,"maskType":9.1,"textDecorationStyle":9.1,"textDecorationSkip":9.1,"textDecorationLine":9.1,"textDecorationColor":9.1,"shapeImageThreshold":9.1,"shapeImageMargin":9.1,"shapeImageOutside":9.1,"filter":9,"hyphens":9.1,"flowInto":9.1,"flowFrom":9.1,"breakBefore":8,"breakAfter":8,"breakInside":8,"regionFragment":9.1,"columnCount":8,"columnFill":8,"columnGap":8,"columnRule":8,"columnRuleColor":8,"columnRuleStyle":8,"columnRuleWidth":8,"columns":8,"columnSpan":8,"columnWidth":8},"firefox":{"appearance":46,"userSelect":46,"boxSizing":28,"textAlignLast":46,"textDecorationStyle":35,"textDecorationSkip":35,"textDecorationLine":35,"textDecorationColor":35,"tabSize":46,"hyphens":42,"fontFeatureSettings":33,"breakAfter":46,"breakBefore":46,"breakInside":46,"columnCount":46,"columnFill":46,"columnGap":46,"columnRule":46,"columnRuleColor":46,"columnRuleStyle":46,"columnRuleWidth":46,"columns":46,"columnSpan":46,"columnWidth":46},"opera":{"flex":16,"flexBasis":16,"flexDirection":16,"flexGrow":16,"flexFlow":16,"flexShrink":16,"flexWrap":16,"alignContent":16,"alignItems":16,"alignSelf":16,"justifyContent":16,"order":16,"transform":22,"transformOrigin":22,"transformOriginX":22,"transformOriginY":22,"backfaceVisibility":22,"perspective":22,"perspectiveOrigin":22,"transformStyle":22,"transformOriginZ":22,"animation":29,"animationDelay":29,"animationDirection":29,"animationFillMode":29,"animationDuration":29,"animationIterationCount":29,"animationName":29,"animationPlayState":29,"animationTimingFunction":29,"appearance":36,"userSelect":36,"fontKerning":19,"textEmphasisPosition":36,"textEmphasis":36,"textEmphasisStyle":36,"textEmphasisColor":36,"boxDecorationBreak":36,"clipPath":36,"maskImage":36,"maskMode":36,"maskRepeat":36,"maskPosition":36,"maskClip":36,"maskOrigin":36,"maskSize":36,"maskComposite":36,"mask":36,"maskBorderSource":36,"maskBorderMode":36,"maskBorderSlice":36,"maskBorderWidth":36,"maskBorderOutset":36,"maskBorderRepeat":36,"maskBorder":36,"maskType":36,"filter":36,"fontFeatureSettings":36,"breakAfter":36,"breakBefore":36,"breakInside":36,"columnCount":36,"columnFill":36,"columnGap":36,"columnRule":36,"columnRuleColor":36,"columnRuleStyle":36,"columnRuleWidth":36,"columns":36,"columnSpan":36,"columnWidth":36},"ie":{"gridArea":11,"gridGap":11,"gridColumnStart":11,"userSelect":11,"grid":11,"breakInside":11,"hyphens":11,"gridTemplateAreas":11,"breakAfter":11,"scrollSnapCoordinate":11,"gridRowStart":11,"gridAutoFlow":11,"scrollSnapDestination":11,"gridTemplate":11,"gridTemplateColumns":11,"transformOrigin":9,"gridAutoRows":11,"gridColumnEnd":11,"transformOriginY":9,"scrollSnapPointsY":11,"breakBefore":11,"gridRowGap":11,"scrollSnapPointsX":11,"regionFragment":11,"flexWrap":10,"wrapFlow":11,"gridRowEnd":11,"flex":10,"flexDirection":10,"flowInto":11,"touchAction":10,"gridColumn":11,"transform":9,"gridTemplateRows":11,"flexFlow":10,"transformOriginX":9,"flowFrom":11,"scrollSnapType":11,"wrapMargin":11,"gridColumnGap":11,"gridRow":11,"wrapThrough":11,"gridAutoColumns":11,"textSizeAdjust":11},"edge":{"userSelect":14,"wrapFlow":14,"wrapThrough":14,"wrapMargin":14,"scrollSnapType":14,"scrollSnapPointsX":14,"scrollSnapPointsY":14,"scrollSnapDestination":14,"scrollSnapCoordinate":14,"hyphens":14,"flowInto":14,"flowFrom":14,"breakBefore":14,"breakAfter":14,"breakInside":14,"regionFragment":14,"gridTemplateColumns":14,"gridTemplateRows":14,"gridTemplateAreas":14,"gridTemplate":14,"gridAutoColumns":14,"gridAutoRows":14,"gridAutoFlow":14,"grid":14,"gridRowStart":14,"gridColumnStart":14,"gridRowEnd":14,"gridRow":14,"gridColumn":14,"gridColumnEnd":14,"gridColumnGap":14,"gridRowGap":14,"gridArea":14,"gridGap":14},"ios_saf":{"flex":8.1,"flexBasis":8.1,"flexDirection":8.1,"flexGrow":8.1,"flexFlow":8.1,"flexShrink":8.1,"flexWrap":8.1,"alignContent":8.1,"alignItems":8.1,"alignSelf":8.1,"justifyContent":8.1,"order":8.1,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8.1,"transformOrigin":8.1,"transformOriginX":8.1,"transformOriginY":8.1,"backfaceVisibility":8.1,"perspective":8.1,"perspectiveOrigin":8.1,"transformStyle":8.1,"transformOriginZ":8.1,"animation":8.1,"animationDelay":8.1,"animationDirection":8.1,"animationFillMode":8.1,"animationDuration":8.1,"animationIterationCount":8.1,"animationName":8.1,"animationPlayState":8.1,"animationTimingFunction":8.1,"appearance":9.3,"userSelect":9.3,"backdropFilter":9.3,"fontKerning":9.3,"scrollSnapType":9.3,"scrollSnapPointsX":9.3,"scrollSnapPointsY":9.3,"scrollSnapDestination":9.3,"scrollSnapCoordinate":9.3,"boxDecorationBreak":9.3,"clipPath":9.3,"maskImage":9.3,"maskMode":9.3,"maskRepeat":9.3,"maskPosition":9.3,"maskClip":9.3,"maskOrigin":9.3,"maskSize":9.3,"maskComposite":9.3,"mask":9.3,"maskBorderSource":9.3,"maskBorderMode":9.3,"maskBorderSlice":9.3,"maskBorderWidth":9.3,"maskBorderOutset":9.3,"maskBorderRepeat":9.3,"maskBorder":9.3,"maskType":9.3,"textSizeAdjust":9.3,"textDecorationStyle":9.3,"textDecorationSkip":9.3,"textDecorationLine":9.3,"textDecorationColor":9.3,"shapeImageThreshold":9.3,"shapeImageMargin":9.3,"shapeImageOutside":9.3,"filter":9,"hyphens":9.3,"flowInto":9.3,"flowFrom":9.3,"breakBefore":8.1,"breakAfter":8.1,"breakInside":8.1,"regionFragment":9.3,"columnCount":8.1,"columnFill":8.1,"columnGap":8.1,"columnRule":8.1,"columnRuleColor":8.1,"columnRuleStyle":8.1,"columnRuleWidth":8.1,"columns":8.1,"columnSpan":8.1,"columnWidth":8.1},"android":{"borderImage":4.2,"borderImageOutset":4.2,"borderImageRepeat":4.2,"borderImageSlice":4.2,"borderImageSource":4.2,"borderImageWidth":4.2,"flex":4.2,"flexBasis":4.2,"flexDirection":4.2,"flexGrow":4.2,"flexFlow":4.2,"flexShrink":4.2,"flexWrap":4.2,"alignContent":4.2,"alignItems":4.2,"alignSelf":4.2,"justifyContent":4.2,"order":4.2,"transition":4.2,"transitionDelay":4.2,"transitionDuration":4.2,"transitionProperty":4.2,"transitionTimingFunction":4.2,"transform":4.4,"transformOrigin":4.4,"transformOriginX":4.4,"transformOriginY":4.4,"backfaceVisibility":4.4,"perspective":4.4,"perspectiveOrigin":4.4,"transformStyle":4.4,"transformOriginZ":4.4,"animation":4.4,"animationDelay":4.4,"animationDirection":4.4,"animationFillMode":4.4,"animationDuration":4.4,"animationIterationCount":4.4,"animationName":4.4,"animationPlayState":4.4,"animationTimingFunction":4.4,"appearance":46,"userSelect":46,"fontKerning":4.4,"textEmphasisPosition":46,"textEmphasis":46,"textEmphasisStyle":46,"textEmphasisColor":46,"boxDecorationBreak":46,"clipPath":46,"maskImage":46,"maskMode":46,"maskRepeat":46,"maskPosition":46,"maskClip":46,"maskOrigin":46,"maskSize":46,"maskComposite":46,"mask":46,"maskBorderSource":46,"maskBorderMode":46,"maskBorderSlice":46,"maskBorderWidth":46,"maskBorderOutset":46,"maskBorderRepeat":46,"maskBorder":46,"maskType":46,"filter":46,"fontFeatureSettings":46,"breakAfter":46,"breakBefore":46,"breakInside":46,"columnCount":46,"columnFill":46,"columnGap":46,"columnRule":46,"columnRuleColor":46,"columnRuleStyle":46,"columnRuleWidth":46,"columns":46,"columnSpan":46,"columnWidth":46},"and_chr":{"appearance":47,"userSelect":47,"textEmphasisPosition":47,"textEmphasis":47,"textEmphasisStyle":47,"textEmphasisColor":47,"boxDecorationBreak":47,"clipPath":47,"maskImage":47,"maskMode":47,"maskRepeat":47,"maskPosition":47,"maskClip":47,"maskOrigin":47,"maskSize":47,"maskComposite":47,"mask":47,"maskBorderSource":47,"maskBorderMode":47,"maskBorderSlice":47,"maskBorderWidth":47,"maskBorderOutset":47,"maskBorderRepeat":47,"maskBorder":47,"maskType":47,"textDecorationStyle":47,"textDecorationSkip":47,"textDecorationLine":47,"textDecorationColor":47,"filter":47,"fontFeatureSettings":47,"breakAfter":47,"breakBefore":47,"breakInside":47,"columnCount":47,"columnFill":47,"columnGap":47,"columnRule":47,"columnRuleColor":47,"columnRuleStyle":47,"columnRuleWidth":47,"columns":47,"columnSpan":47,"columnWidth":47},"and_uc":{"flex":9.9,"flexBasis":9.9,"flexDirection":9.9,"flexGrow":9.9,"flexFlow":9.9,"flexShrink":9.9,"flexWrap":9.9,"alignContent":9.9,"alignItems":9.9,"alignSelf":9.9,"justifyContent":9.9,"order":9.9,"transition":9.9,"transitionDelay":9.9,"transitionDuration":9.9,"transitionProperty":9.9,"transitionTimingFunction":9.9,"transform":9.9,"transformOrigin":9.9,"transformOriginX":9.9,"transformOriginY":9.9,"backfaceVisibility":9.9,"perspective":9.9,"perspectiveOrigin":9.9,"transformStyle":9.9,"transformOriginZ":9.9,"animation":9.9,"animationDelay":9.9,"animationDirection":9.9,"animationFillMode":9.9,"animationDuration":9.9,"animationIterationCount":9.9,"animationName":9.9,"animationPlayState":9.9,"animationTimingFunction":9.9,"appearance":9.9,"userSelect":9.9,"fontKerning":9.9,"textEmphasisPosition":9.9,"textEmphasis":9.9,"textEmphasisStyle":9.9,"textEmphasisColor":9.9,"maskImage":9.9,"maskMode":9.9,"maskRepeat":9.9,"maskPosition":9.9,"maskClip":9.9,"maskOrigin":9.9,"maskSize":9.9,"maskComposite":9.9,"mask":9.9,"maskBorderSource":9.9,"maskBorderMode":9.9,"maskBorderSlice":9.9,"maskBorderWidth":9.9,"maskBorderOutset":9.9,"maskBorderRepeat":9.9,"maskBorder":9.9,"maskType":9.9,"textSizeAdjust":9.9,"filter":9.9,"hyphens":9.9,"flowInto":9.9,"flowFrom":9.9,"breakBefore":9.9,"breakAfter":9.9,"breakInside":9.9,"regionFragment":9.9,"fontFeatureSettings":9.9,"columnCount":9.9,"columnFill":9.9,"columnGap":9.9,"columnRule":9.9,"columnRuleColor":9.9,"columnRuleStyle":9.9,"columnRuleWidth":9.9,"columns":9.9,"columnSpan":9.9,"columnWidth":9.9},"op_mini":{"borderImage":5,"borderImageOutset":5,"borderImageRepeat":5,"borderImageSlice":5,"borderImageSource":5,"borderImageWidth":5,"tabSize":5,"objectFit":5,"objectPosition":5}}; module.exports = caniuseData

/***/ },
/* 529 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function calc(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (forceRun || browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    }).join(';' + property + ':') :
	    // default
	    value.replace(/calc\(/g, prefix.css + 'calc(');
	    return _defineProperty({}, property, newValue + (keepUnprefixed ? ';' + property + ':' + value : ''));
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 530 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = cursor;
	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};
	
	function cursor(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (property === 'cursor' && values[value] && (forceRun || browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return prefix + value;
	    }).join(';' + property + ':') :
	    // default
	    prefix.css + value;
	    return {
	      cursor: newValue + (keepUnprefixed ? ';' + property + ':' + value : '')
	    };
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 531 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flex;
	var values = { flex: true, 'inline-flex': true };
	
	function flex(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (property === 'display' && values[value] && (forceRun || browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value].join(';' + property + ':') :
	    // default
	    '-webkit-' + value;
	    return {
	      display: newValue + (keepUnprefixed ? ';' + property + ':' + value : '')
	    };
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 532 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = flexboxIE;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: '-ms-flexbox',
	  'inline-flex': '-ms-inline-flexbox'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};
	
	var properties = Object.keys(alternativeProps).concat('display').reduce(function (result, prop) {
	  return _extends({}, result, _defineProperty({}, prop, true));
	}, {});
	
	function flexboxIE(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var styles = pluginInterface.styles;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (properties[property] && (forceRun || (browser === 'ie_mob' || browser === 'ie') && version == 10)) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	    if (alternativeValues[value]) {
	      return _defineProperty({}, property, alternativeValues[value] + (keepUnprefixed ? ';' + property + ':' + value : ''));
	    }
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 533 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = flexboxOld;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	var properties = Object.keys(alternativeProps).concat(['alignContent', 'alignSelf', 'display', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection']).reduce(function (result, prop) {
	  return _extends({}, result, _defineProperty({}, prop, true));
	}, {});
	
	function flexboxOld(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var styles = pluginInterface.styles;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (properties[property] && (forceRun || browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: prefix.css + alternativeValues[value] + (keepUnprefixed ? ';' + property + ':' + value : '')
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	    if (alternativeValues[value]) {
	      return _defineProperty({}, property, alternativeValues[value] + (keepUnprefixed ? ';' + property + ':' + value : ''));
	    }
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 534 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = gradient;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	function gradient(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (typeof value === 'string' && value.match(values) !== null && (forceRun || browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return prefix + value;
	    }).join(';' + property + ':') :
	    // default
	    prefix.css + value;
	    return _defineProperty({}, property, newValue + (keepUnprefixed ? ';' + property + ':' + value : ''));
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 535 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = sizing;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};
	
	function sizing(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  // This might change in the future
	  // Keep an eye on it
	  if (properties[property] && values[value]) {
	    var newValue = forceRun ?
	    // prefix all
	    ['-webkit-', '-moz-'].map(function (prefix) {
	      return prefix + value;
	    }).join(';' + property + ':') :
	    // default
	    prefix.css + value;
	    return _defineProperty({}, property, newValue + (keepUnprefixed ? ';' + property + ':' + value : ''));
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _utilsCamelToDashCase = __webpack_require__(538);
	
	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);
	
	var _utilsCapitalizeString = __webpack_require__(228);
	
	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);
	
	function calc(pluginInterface) {
	  var property = pluginInterface.property;
	  var value = pluginInterface.value;
	  var browserInfo = pluginInterface.browserInfo;
	  var prefix = pluginInterface.prefix;
	  var keepUnprefixed = pluginInterface.keepUnprefixed;
	  var forceRun = pluginInterface.forceRun;
	  var requiresPrefix = pluginInterface.requiresPrefix;
	  var browser = browserInfo.browser;
	  var version = browserInfo.version;
	
	  if (
	  // also check for already prefixed transitions
	  typeof value === 'string' && (property.toLowerCase().indexOf('transition') > -1 || property.toLowerCase().indexOf('transitionproperty') > -1)) {
	    var _ref;
	
	    var _ret = (function () {
	      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (property) {
	        return (0, _utilsCamelToDashCase2['default'])(property);
	      });
	      var newValue = value;
	
	      // only split multi values, not cubic beziers
	      var multipleValues = newValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	      requiresPrefixDashCased.forEach(function (property) {
	        multipleValues.forEach(function (val, index) {
	          if (val.indexOf(property) > -1) {
	            var newVal = forceRun ?
	            // prefix all
	            ['-webkit-', '-moz-', '-ms-'].map(function (prefix) {
	              return val.replace(property, prefix + property);
	            }).join(',') :
	            // default
	            val.replace(property, prefix.css + property);
	            multipleValues[index] = newVal + (keepUnprefixed ? ',' + val : '');
	          }
	        });
	      });
	      var outputValue = multipleValues.join(',');
	      if (forceRun) {
	        return {
	          v: (_ref = {}, _defineProperty(_ref, 'Webkit' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, 'Moz' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, 'ms' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, property, outputValue), _ref)
	        };
	      }
	      return {
	        v: _defineProperty({}, property, outputValue)
	      };
	    })();
	
	    if (typeof _ret === 'object') return _ret.v;
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 537 */
/***/ function(module, exports) {

	// leight polyfill for Object.assign
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  Object.keys(extend).forEach(function (key) {
	    return base[key] = extend[key];
	  });
	  return base;
	};
	
	module.exports = exports["default"];

/***/ },
/* 538 */
/***/ function(module, exports) {

	/**
	 * Converts a camel-case string to a dash-case string
	 * @param {string} str - str that gets converted to dash-case
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (str) {
	  return str.replace(/([a-z]|^)([A-Z])/g, function (match, p1, p2) {
	    return p1 + '-' + p2.toLowerCase();
	  }).replace('ms-', '-ms-');
	};
	
	module.exports = exports['default'];

/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _bowser = __webpack_require__(485);
	
	var _bowser2 = _interopRequireDefault(_bowser);
	
	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};
	
	var browsers = {
	  chrome: [['chrome']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  ie: [['msie']],
	  edge: [['msedge']],
	  opera: [['opera']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie_mob: [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};
	
	/**
	 * Returns an object containing prefix data associated with a browser
	 * @param {string} browser - browser to find a prefix for
	 */
	var getPrefixes = function getPrefixes(browser) {
	  var prefixKeys = undefined;
	  var prefix = undefined;
	  var vendors = undefined;
	  var conditions = undefined;
	  var prefixVendor = undefined;
	  var browserVendors = undefined;
	
	  // Find the prefix for this browser (if any)
	  prefixKeys = Object.keys(vendorPrefixes);
	  for (var i = 0; i < prefixKeys.length; i++) {
	    prefix = prefixKeys[i];
	
	    // Find a matching vendor
	    vendors = vendorPrefixes[prefix];
	    conditions = browsers[browser];
	
	    for (var j = 0; j < vendors.length; j++) {
	      prefixVendor = vendors[j];
	
	      for (var k = 0; k < conditions.length; k++) {
	        browserVendors = conditions[k];
	
	        if (browserVendors.indexOf(prefixVendor) !== -1) {
	          return {
	            inline: prefix,
	            css: '-' + prefix.toLowerCase() + '-'
	          };
	        }
	      }
	    }
	  }
	
	  // No prefix found for this browser
	  return { inline: '', css: '' };
	};
	
	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */
	
	exports['default'] = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }
	
	  var info = {};
	
	  // Special user agent, return all supported prefixes
	  // instead of returning a string browser name and a prefix object
	  // we return an array of browser names and map of prefixes for each browser
	  if (userAgent === '*') {
	    // Return an array of supported browsers
	    info.browsers = Object.keys(browsers);
	
	    // Return prefixes associated by browser
	    info.prefixes = {};
	
	    // Iterate browser list, assign prefix to each
	    info.browsers.forEach(function (browser) {
	      info.prefixes[browser] = getPrefixes(browser);
	    });
	
	    return info;
	  }
	
	  // Normal user agent, detect browser
	  info = _bowser2['default']._detect(userAgent);
	
	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          css: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });
	
	  var name = '';
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });
	
	  info.browser = name;
	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);
	
	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (info.browser === 'android' && info.chrome && info.version > 37) {
	    info.browser = 'and_chr';
	  }
	  info.version = parseFloat(info.version);
	  info.osversion = parseFloat(info.osversion);
	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (info.browser === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }
	
	  return info;
	};
	
	module.exports = exports['default'];

/***/ },
/* 540 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;
	
	  var prefixedKeyframes = 'keyframes';
	
	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.css + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};
	
	module.exports = exports['default'];

/***/ },
/* 541 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// only throw warnings if devmode is enabled
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    console.warn.apply(console, arguments);
	  }
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 542 */,
/* 543 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = arrayCopy;


/***/ },
/* 544 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands or `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 545 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 546 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = baseFor;


/***/ },
/* 547 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = bindCallback;


/***/ },
/* 548 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var bindCallback = __webpack_require__(547),
	    isIterateeCall = __webpack_require__(549),
	    restParam = __webpack_require__(555);
	
	/**
	 * Creates a function that assigns properties of source object(s) to a given
	 * destination object.
	 *
	 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 549 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(229);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');
	
	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }
	
	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }
	
	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }
	
	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }
	
	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);
	
	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;
	
	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = debounce;


/***/ },
/* 551 */
/***/ function(module, exports) {

	/**
	 * lodash 3.2.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a `_.flow` or `_.flowRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new flow function.
	 */
	function createFlow(fromRight) {
	  return function() {
	    var length = arguments.length,
	        index = fromRight ? length : -1,
	        leftIndex = 0,
	        funcs = Array(length);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var func = funcs[leftIndex++] = arguments[index];
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	    }
	    return function() {
	      var index = 0,
	          result = length ? funcs[index].apply(this, arguments) : arguments[0];
	
	      while (++index < length) {
	        result = funcs[index].call(this, result);
	      }
	      return result;
	    };
	  };
	}
	
	/**
	 * This method is like `_.flow` except that it creates a function that
	 * invokes the provided functions from right to left.
	 *
	 * @static
	 * @memberOf _
	 * @alias backflow, compose
	 * @category Function
	 * @param {...Function} [funcs] Functions to invoke.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var addSquare = _.flowRight(square, _.add);
	 * addSquare(1, 2);
	 * // => 9
	 */
	var flowRight = createFlow(true);
	
	module.exports = flowRight;


/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(546),
	    isArguments = __webpack_require__(106),
	    keysIn = __webpack_require__(230);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;
	
	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 553 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.5 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(229),
	    isArguments = __webpack_require__(106),
	    isArray = __webpack_require__(147);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ },
/* 555 */
/***/ function(module, exports) {

	/**
	 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(550);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed invocations. Provide an options object to indicate
	 * that `func` should be invoked on the leading and/or trailing edge of the
	 * `wait` timeout. Subsequent calls to the throttled function return the
	 * result of the last `func` call.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the throttled function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=true] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // avoid excessively updating the position while scrolling
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	 * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	 *   'trailing': false
	 * }));
	 *
	 * // cancel a trailing throttled call
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (options === false) {
	    leading = false;
	  } else if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = throttle;


/***/ },
/* 557 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseCopy = __webpack_require__(545),
	    keysIn = __webpack_require__(230);
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable
	 * properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return baseCopy(value, keysIn(value));
	}
	
	module.exports = toPlainObject;


/***/ },
/* 558 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Avatar = _react2.default.createClass({
	  displayName: 'Avatar',
	
	  propTypes: {
	    /**
	     * The backgroundColor of the avatar. Does not apply to image avatars.
	     */
	    backgroundColor: _react2.default.PropTypes.string,
	
	    /**
	     * Can be used, for instance, to render a letter inside the avatar.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * The css class name of the root `div` or `img` element.
	     */
	    className: _react2.default.PropTypes.string,
	
	    /**
	     * The icon or letter's color.
	     */
	    color: _react2.default.PropTypes.string,
	
	    /**
	     * This is the SvgIcon or FontIcon to be used inside the avatar.
	     */
	    icon: _react2.default.PropTypes.element,
	
	    /**
	     * This is the size of the avatar in pixels.
	     */
	    size: _react2.default.PropTypes.number,
	
	    /**
	     * If passed in, this component will render an img element. Otherwise, a div will be rendered.
	     */
	    src: _react2.default.PropTypes.string,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      backgroundColor: _colors2.default.grey400,
	      color: _colors2.default.white,
	      size: 40
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var backgroundColor = _props.backgroundColor;
	    var color = _props.color;
	    var icon = _props.icon;
	    var size = _props.size;
	    var src = _props.src;
	    var style = _props.style;
	    var className = _props.className;
	
	    var other = _objectWithoutProperties(_props, ['backgroundColor', 'color', 'icon', 'size', 'src', 'style', 'className']);
	
	    var styles = {
	      root: {
	        height: size,
	        width: size,
	        userSelect: 'none',
	        borderRadius: '50%',
	        display: 'inline-block'
	      }
	    };
	
	    if (src) {
	      var borderColor = this.state.muiTheme.avatar.borderColor;
	
	      if (borderColor) {
	        styles.root = this.mergeStyles(styles.root, {
	          height: size - 2,
	          width: size - 2,
	          border: 'solid 1px ' + borderColor
	        });
	      }
	
	      return _react2.default.createElement('img', _extends({}, other, {
	        src: src,
	        style: this.prepareStyles(styles.root, style),
	        className: className
	      }));
	    } else {
	      styles.root = this.mergeStyles(styles.root, {
	        backgroundColor: backgroundColor,
	        textAlign: 'center',
	        lineHeight: size + 'px',
	        fontSize: size / 2 + 4,
	        color: color
	      });
	
	      var styleIcon = {
	        margin: 8
	      };
	
	      var iconElement = icon ? _react2.default.cloneElement(icon, {
	        color: color,
	        style: this.mergeStyles(styleIcon, icon.props.style)
	      }) : null;
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, {
	          style: this.prepareStyles(styles.root, style),
	          className: className
	        }),
	        iconElement,
	        this.props.children
	      );
	    }
	  }
	});
	
	exports.default = Avatar;
	module.exports = exports['default'];

/***/ },
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _keyboardArrowUp = __webpack_require__(578);
	
	var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);
	
	var _keyboardArrowDown = __webpack_require__(577);
	
	var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);
	
	var _iconButton = __webpack_require__(150);
	
	var _iconButton2 = _interopRequireDefault(_iconButton);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _contextPure = __webpack_require__(236);
	
	var _contextPure2 = _interopRequireDefault(_contextPure);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CardExpandable = _react2.default.createClass({
	  displayName: 'CardExpandable',
	
	  propTypes: {
	    expanded: _react2.default.PropTypes.bool,
	    onExpanding: _react2.default.PropTypes.func.isRequired,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default, _contextPure2.default],
	
	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      return {
	        isRtl: muiTheme.isRtl
	      };
	    },
	    getChildrenClasses: function getChildrenClasses() {
	      return [_iconButton2.default];
	    }
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    var contextKeys = this.constructor.getRelevantContextKeys(this.state.muiTheme);
	
	    var directionStyle = contextKeys.isRtl ? {
	      left: 4
	    } : {
	      right: 4
	    };
	
	    return {
	      root: this.mergeStyles({
	        top: 0,
	        bottom: 0,
	        margin: 'auto',
	        position: 'absolute'
	      }, directionStyle)
	    };
	  },
	  render: function render() {
	    var styles = this.getStyles();
	
	    var expandable = undefined;
	    if (this.props.expanded === true) expandable = _react2.default.createElement(_keyboardArrowUp2.default, null);else expandable = _react2.default.createElement(_keyboardArrowDown2.default, null);
	
	    var mergedStyles = this.mergeStyles(styles.root, this.props.style);
	
	    var expandableBtn = _react2.default.createElement(
	      _iconButton2.default,
	      {
	        style: mergedStyles,
	        onTouchTap: this.props.onExpanding
	      },
	      expandable
	    );
	
	    return expandableBtn;
	  }
	});
	
	exports.default = CardExpandable;
	module.exports = exports['default'];

/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var FontIcon = _react2.default.createClass({
	  displayName: 'FontIcon',
	
	  propTypes: {
	    /**
	     * This is the font color of the font icon. If not specified,
	     * this component will default to muiTheme.palette.textColor.
	     */
	    color: _react2.default.PropTypes.string,
	
	    /**
	     * This is the icon color when the mouse hovers over the icon.
	     */
	    hoverColor: _react2.default.PropTypes.string,
	
	    /**
	     * Function called when mouse enters this element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,
	
	    /**
	     * Function called when mouse leaves this element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    // hover is needed only when a hoverColor is defined
	    if (this.props.hoverColor !== undefined) this.setState({ hovered: false });
	    if (this.props.onMouseLeave) {
	      this.props.onMouseLeave(e);
	    }
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    // hover is needed only when a hoverColor is defined
	    if (this.props.hoverColor !== undefined) this.setState({ hovered: true });
	    if (this.props.onMouseEnter) {
	      this.props.onMouseEnter(e);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var hoverColor = _props.hoverColor;
	    var onMouseLeave = _props.onMouseLeave;
	    var onMouseEnter = _props.onMouseEnter;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['color', 'hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
	
	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var offColor = color ? color : style && style.color ? style.color : this.state.muiTheme.rawTheme.palette.textColor;
	    var onColor = hoverColor ? hoverColor : offColor;
	
	    var mergedStyles = this.mergeStyles({
	      position: 'relative',
	      fontSize: spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }, style, {
	      color: this.state.hovered ? onColor : offColor
	    });
	
	    return _react2.default.createElement('span', _extends({}, other, {
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      style: this.prepareStyles(mergedStyles)
	    }));
	  }
	});
	
	exports.default = FontIcon;
	module.exports = exports['default'];

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _colorManipulator = __webpack_require__(107);
	
	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _typography = __webpack_require__(153);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	var _enhancedButton = __webpack_require__(233);
	
	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);
	
	var _iconButton = __webpack_require__(150);
	
	var _iconButton2 = _interopRequireDefault(_iconButton);
	
	var _arrowDropUp = __webpack_require__(580);
	
	var _arrowDropUp2 = _interopRequireDefault(_arrowDropUp);
	
	var _arrowDropDown = __webpack_require__(579);
	
	var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);
	
	var _nestedList = __webpack_require__(562);
	
	var _nestedList2 = _interopRequireDefault(_nestedList);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var ListItem = _react2.default.createClass({
	  displayName: 'ListItem',
	
	  propTypes: {
	    /**
	     * Generate a nested list indicator icon when
	     * nested list items are detected. Set to false
	     * if you do not want an indicator auto-generated.
	     * Note that an indicator will not be created if a
	     * rightIcon/Button has been specified.
	     */
	    autoGenerateNestedIndicator: _react2.default.PropTypes.bool,
	
	    /**
	     * Children passed into the ListItem.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * Does not allow the element to be focused by the keyboard.
	     */
	    disableKeyboardFocus: _react2.default.PropTypes.bool,
	
	    /**
	     * If true, the list-item will not be clickable
	     * and will not display hover affects.
	     * This is automatically disabled if leftCheckbox
	     * or rightToggle is set.
	     */
	    disabled: _react2.default.PropTypes.bool,
	
	    /**
	     * Controls whether or not the child ListItems are initially displayed.
	     */
	    initiallyOpen: _react2.default.PropTypes.bool,
	
	    /**
	     * Style prop for the innder div element.
	     */
	    innerDivStyle: _react2.default.PropTypes.object,
	
	    /**
	     * If true, the children will be indented by 72px.
	     * Only needed if there is no left avatar or left icon.
	     */
	    insetChildren: _react2.default.PropTypes.bool,
	
	    /**
	     * This is the Avatar element to be displayed on the left side.
	     */
	    leftAvatar: _react2.default.PropTypes.element,
	
	    /**
	     * This is the Checkbox element to be displayed on the left side.
	     */
	    leftCheckbox: _react2.default.PropTypes.element,
	
	    /**
	     * This is the SvgIcon or FontIcon to be displayed on the left side.
	     */
	    leftIcon: _react2.default.PropTypes.element,
	
	    /**
	     * An array of ListItems to nest underneath the current ListItem.
	     */
	    nestedItems: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element),
	
	    /**
	     * Controls how deep a ListItem appears.
	     * This property is automatically managed so modify at your own risk.
	     */
	    nestedLevel: _react2.default.PropTypes.number,
	
	    /**
	     * Override the inline-styles of the nestedItems NestedList.
	     */
	    nestedListStyle: _react2.default.PropTypes.object,
	
	    /**
	     * Called when the ListItem has keyboard focus.
	     */
	    onKeyboardFocus: _react2.default.PropTypes.func,
	
	    /**
	     * Called when the mouse is over the ListItem.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,
	
	    /**
	     * Called when the mouse is no longer over the ListItem.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,
	
	    /**
	     * Called when the ListItem toggles its nested ListItems.
	     */
	    onNestedListToggle: _react2.default.PropTypes.func,
	
	    /**
	     * Called when touches start.
	     */
	    onTouchStart: _react2.default.PropTypes.func,
	
	    /**
	     * Called when a touch tap event occures on the component.
	     */
	    onTouchTap: _react2.default.PropTypes.func,
	
	    /**
	     * This is the block element that contains the primary text.
	     * If a string is passed in, a div tag will be rendered.
	     */
	    primaryText: _react2.default.PropTypes.node,
	
	    /**
	     * If provided, tapping on the primary text
	     * of the item toggles the nested list.
	     */
	    primaryTogglesNestedList: _react2.default.PropTypes.bool,
	
	    /**
	     * This is the avatar element to be displayed on the right side.
	     */
	    rightAvatar: _react2.default.PropTypes.element,
	
	    /**
	     * This is the SvgIcon or FontIcon to be displayed on the right side.
	     */
	    rightIcon: _react2.default.PropTypes.element,
	
	    /**
	     * This is the IconButton to be displayed on the right side.
	     * Hovering over this button will remove the ListItem hover.
	     * Also, clicking on this button will not trigger a
	     * ListItem ripple. The event will be stopped and prevented
	     * from bubbling up to cause a ListItem click.
	     */
	    rightIconButton: _react2.default.PropTypes.element,
	
	    /**
	     * This is the Toggle element to display on the right side.
	     */
	    rightToggle: _react2.default.PropTypes.element,
	
	    /**
	     * This is the block element that contains the secondary text.
	     * If a string is passed in, a div tag will be rendered.
	     */
	    secondaryText: _react2.default.PropTypes.node,
	
	    /**
	     * Can be 1 or 2. This is the number of secondary
	     * text lines before ellipsis will show.
	     */
	    secondaryTextLines: _react2.default.PropTypes.oneOf([1, 2]),
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoGenerateNestedIndicator: true,
	      disableKeyboardFocus: false,
	      disabled: false,
	      initiallyOpen: false,
	      insetChildren: false,
	      nestedItems: [],
	      nestedLevel: 0,
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      onNestedListToggle: function onNestedListToggle() {},
	      onTouchStart: function onTouchStart() {},
	      primaryTogglesNestedList: false,
	      secondaryTextLines: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      isKeyboardFocused: false,
	      open: this.props.initiallyOpen,
	      rightIconButtonHovered: false,
	      rightIconButtonKeyboardFocused: false,
	      touch: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  applyFocusState: function applyFocusState(focusState) {
	    var button = this.refs.enhancedButton;
	    var buttonEl = _reactDom2.default.findDOMNode(button);
	
	    if (button) {
	      switch (focusState) {
	        case 'none':
	          buttonEl.blur();
	          break;
	        case 'focused':
	          buttonEl.focus();
	          break;
	        case 'keyboard-focused':
	          button.setKeyboardFocus();
	          buttonEl.focus();
	          break;
	      }
	    }
	  },
	  _createDisabledElement: function _createDisabledElement(styles, contentChildren, additionalProps) {
	    var _props = this.props;
	    var innerDivStyle = _props.innerDivStyle;
	    var style = _props.style;
	
	    var mergedDivStyles = this.mergeStyles(styles.root, styles.innerDiv, innerDivStyle, style);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, additionalProps, {
	        style: this.prepareStyles(mergedDivStyles)
	      }),
	      contentChildren
	    );
	  },
	  _createLabelElement: function _createLabelElement(styles, contentChildren, additionalProps) {
	    var _props2 = this.props;
	    var innerDivStyle = _props2.innerDivStyle;
	    var style = _props2.style;
	
	    var mergedLabelStyles = this.mergeStyles(styles.root, styles.innerDiv, innerDivStyle, styles.label, style);
	
	    return _react2.default.createElement(
	      'label',
	      _extends({}, additionalProps, {
	        style: this.prepareStyles(mergedLabelStyles)
	      }),
	      contentChildren
	    );
	  },
	  _createTextElement: function _createTextElement(styles, data, key) {
	    var isAnElement = _react2.default.isValidElement(data);
	    var mergedStyles = isAnElement ? this.mergeStyles(styles, data.props.style) : null;
	
	    return isAnElement ? _react2.default.cloneElement(data, {
	      key: key,
	      style: this.prepareStyles(mergedStyles)
	    }) : _react2.default.createElement(
	      'div',
	      { key: key, style: this.prepareStyles(styles) },
	      data
	    );
	  },
	  _handleKeyboardFocus: function _handleKeyboardFocus(e, isKeyboardFocused) {
	    this.setState({ isKeyboardFocused: isKeyboardFocused });
	    this.props.onKeyboardFocus(e, isKeyboardFocused);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    if (!this.state.touch) this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },
	  _handleNestedListToggle: function _handleNestedListToggle(e) {
	    e.stopPropagation();
	    this.setState({ open: !this.state.open });
	    this.props.onNestedListToggle(this);
	  },
	  _handleRightIconButtonKeyboardFocus: function _handleRightIconButtonKeyboardFocus(e, isKeyboardFocused) {
	    var iconButton = this.props.rightIconButton;
	    var newState = {};
	
	    newState.rightIconButtonKeyboardFocused = isKeyboardFocused;
	    if (isKeyboardFocused) newState.isKeyboardFocused = false;
	    this.setState(newState);
	
	    if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(e, isKeyboardFocused);
	  },
	  _handleRightIconButtonMouseDown: function _handleRightIconButtonMouseDown(e) {
	    var iconButton = this.props.rightIconButton;
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onMouseDown) iconButton.props.onMouseDown(e);
	  },
	  _handleRightIconButtonMouseLeave: function _handleRightIconButtonMouseLeave(e) {
	    var iconButton = this.props.rightIconButton;
	    this.setState({ rightIconButtonHovered: false });
	    if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(e);
	  },
	  _handleRightIconButtonMouseEnter: function _handleRightIconButtonMouseEnter(e) {
	    var iconButton = this.props.rightIconButton;
	    this.setState({ rightIconButtonHovered: true });
	    if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(e);
	  },
	  _handleRightIconButtonMouseUp: function _handleRightIconButtonMouseUp(e) {
	    var iconButton = this.props.rightIconButton;
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(e);
	  },
	  _handleRightIconButtonTouchTap: function _handleRightIconButtonTouchTap(e) {
	    var iconButton = this.props.rightIconButton;
	
	    //Stop the event from bubbling up to the list-item
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onTouchTap) iconButton.props.onTouchTap(e);
	  },
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({ touch: true });
	    this.props.onTouchStart(e);
	  },
	  _pushElement: function _pushElement(children, element, baseStyles, additionalProps) {
	    if (element) {
	      var styles = this.mergeStyles(baseStyles, element.props.style);
	      children.push(_react2.default.cloneElement(element, _extends({
	        key: children.length,
	        style: styles
	      }, additionalProps)));
	    }
	  },
	  render: function render() {
	    var _props3 = this.props;
	    var autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator;
	    var children = _props3.children;
	    var disabled = _props3.disabled;
	    var disableKeyboardFocus = _props3.disableKeyboardFocus;
	    var innerDivStyle = _props3.innerDivStyle;
	    var insetChildren = _props3.insetChildren;
	    var leftAvatar = _props3.leftAvatar;
	    var leftCheckbox = _props3.leftCheckbox;
	    var leftIcon = _props3.leftIcon;
	    var nestedItems = _props3.nestedItems;
	    var nestedLevel = _props3.nestedLevel;
	    var nestedListStyle = _props3.nestedListStyle;
	    var onKeyboardFocus = _props3.onKeyboardFocus;
	    var onMouseLeave = _props3.onMouseLeave;
	    var onMouseEnter = _props3.onMouseEnter;
	    var onTouchStart = _props3.onTouchStart;
	    var onTouchTap = _props3.onTouchTap;
	    var rightAvatar = _props3.rightAvatar;
	    var rightIcon = _props3.rightIcon;
	    var rightIconButton = _props3.rightIconButton;
	    var rightToggle = _props3.rightToggle;
	    var primaryText = _props3.primaryText;
	    var primaryTogglesNestedList = _props3.primaryTogglesNestedList;
	    var secondaryText = _props3.secondaryText;
	    var secondaryTextLines = _props3.secondaryTextLines;
	    var style = _props3.style;
	
	    var other = _objectWithoutProperties(_props3, ['autoGenerateNestedIndicator', 'children', 'disabled', 'disableKeyboardFocus', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'onMouseLeave', 'onMouseEnter', 'onTouchStart', 'onTouchTap', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
	
	    var textColor = this.state.muiTheme.rawTheme.palette.textColor;
	    var hoverColor = _colorManipulator2.default.fade(textColor, 0.1);
	    var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
	    var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
	    var twoLine = secondaryText && secondaryTextLines === 1;
	    var threeLine = secondaryText && secondaryTextLines > 1;
	    var hasCheckbox = leftCheckbox || rightToggle;
	
	    var styles = {
	      root: {
	        backgroundColor: (this.state.isKeyboardFocused || this.state.hovered) && !this.state.rightIconButtonHovered && !this.state.rightIconButtonKeyboardFocused ? hoverColor : null,
	        color: textColor,
	        display: 'block',
	        fontSize: 16,
	        lineHeight: '16px',
	        position: 'relative',
	        transition: _transitions2.default.easeOut()
	      },
	
	      //This inner div is needed so that ripples will span the entire container
	      innerDiv: {
	        marginLeft: nestedLevel * this.state.muiTheme.listItem.nestedLevelDepth,
	        paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
	        paddingRight: rightIcon || rightAvatar || rightIconButton ? 56 : rightToggle ? 72 : 16,
	        paddingBottom: singleAvatar ? 20 : 16,
	        paddingTop: singleNoAvatar || threeLine ? 16 : 20,
	        position: 'relative'
	      },
	
	      icons: {
	        height: 24,
	        width: 24,
	        display: 'block',
	        position: 'absolute',
	        top: twoLine ? 12 : singleAvatar ? 4 : 0,
	        margin: 12
	      },
	
	      leftIcon: {
	        color: _colors2.default.grey600,
	        fill: _colors2.default.grey600,
	        left: 4
	      },
	
	      rightIcon: {
	        color: _colors2.default.grey400,
	        fill: _colors2.default.grey400,
	        right: 4
	      },
	
	      avatars: {
	        position: 'absolute',
	        top: singleAvatar ? 8 : 16
	      },
	
	      label: {
	        cursor: 'pointer'
	      },
	
	      leftAvatar: {
	        left: 16
	      },
	
	      rightAvatar: {
	        right: 16
	      },
	
	      leftCheckbox: {
	        position: 'absolute',
	        display: 'block',
	        width: 24,
	        top: twoLine ? 24 : singleAvatar ? 16 : 12,
	        left: 16
	      },
	
	      primaryText: {},
	
	      rightIconButton: {
	        position: 'absolute',
	        display: 'block',
	        top: twoLine ? 12 : singleAvatar ? 4 : 0,
	        right: 4
	      },
	
	      rightToggle: {
	        position: 'absolute',
	        display: 'block',
	        width: 54,
	        top: twoLine ? 25 : singleAvatar ? 17 : 13,
	        right: 8
	      },
	
	      secondaryText: {
	        fontSize: 14,
	        lineHeight: threeLine ? '18px' : '16px',
	        height: threeLine ? 36 : 16,
	        margin: 0,
	        marginTop: 4,
	        color: _typography2.default.textLightBlack,
	
	        //needed for 2 and 3 line ellipsis
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        whiteSpace: threeLine ? null : 'nowrap',
	        display: threeLine ? '-webkit-box' : null,
	        WebkitLineClamp: threeLine ? 2 : null,
	        WebkitBoxOrient: threeLine ? 'vertical' : null
	      }
	    };
	
	    var contentChildren = [children];
	
	    if (leftIcon) {
	      this._pushElement(contentChildren, leftIcon, this.mergeStyles(styles.icons, styles.leftIcon));
	    }
	
	    if (rightIcon) {
	      this._pushElement(contentChildren, rightIcon, this.mergeStyles(styles.icons, styles.rightIcon));
	    }
	
	    if (leftAvatar) {
	      this._pushElement(contentChildren, leftAvatar, this.mergeStyles(styles.avatars, styles.leftAvatar));
	    }
	
	    if (rightAvatar) {
	      this._pushElement(contentChildren, rightAvatar, this.mergeStyles(styles.avatars, styles.rightAvatar));
	    }
	
	    if (leftCheckbox) {
	      this._pushElement(contentChildren, leftCheckbox, this.mergeStyles(styles.leftCheckbox));
	    }
	
	    //RightIconButtonElement
	    var hasNestListItems = nestedItems.length;
	    var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
	    var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;
	
	    if (rightIconButton || needsNestedIndicator) {
	      var rightIconButtonElement = rightIconButton;
	      var rightIconButtonHandlers = {
	        onKeyboardFocus: this._handleRightIconButtonKeyboardFocus,
	        onMouseEnter: this._handleRightIconButtonMouseEnter,
	        onMouseLeave: this._handleRightIconButtonMouseLeave,
	        onTouchTap: this._handleRightIconButtonTouchTap,
	        onMouseDown: this._handleRightIconButtonMouseUp,
	        onMouseUp: this._handleRightIconButtonMouseUp
	      };
	
	      // Create a nested list indicator icon if we don't have an icon on the right
	      if (needsNestedIndicator) {
	        rightIconButtonElement = this.state.open ? _react2.default.createElement(
	          _iconButton2.default,
	          null,
	          _react2.default.createElement(_arrowDropUp2.default, null)
	        ) : _react2.default.createElement(
	          _iconButton2.default,
	          null,
	          _react2.default.createElement(_arrowDropDown2.default, null)
	        );
	        rightIconButtonHandlers.onTouchTap = this._handleNestedListToggle;
	      }
	
	      this._pushElement(contentChildren, rightIconButtonElement, this.mergeStyles(styles.rightIconButton), rightIconButtonHandlers);
	    }
	
	    if (rightToggle) {
	      this._pushElement(contentChildren, rightToggle, this.mergeStyles(styles.rightToggle));
	    }
	
	    if (primaryText) {
	      var secondaryTextElement = this._createTextElement(styles.primaryText, primaryText, 'primaryText');
	      contentChildren.push(secondaryTextElement);
	    }
	
	    if (secondaryText) {
	      var secondaryTextElement = this._createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
	      contentChildren.push(secondaryTextElement);
	    }
	
	    var nestedList = nestedItems.length ? _react2.default.createElement(
	      _nestedList2.default,
	      { nestedLevel: nestedLevel + 1, open: this.state.open, style: nestedListStyle },
	      nestedItems
	    ) : undefined;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      hasCheckbox ? this._createLabelElement(styles, contentChildren, other) : disabled ? this._createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
	        _enhancedButton2.default,
	        _extends({}, other, {
	          disabled: disabled,
	          disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
	          linkButton: true,
	          onKeyboardFocus: this._handleKeyboardFocus,
	          onMouseLeave: this._handleMouseLeave,
	          onMouseEnter: this._handleMouseEnter,
	          onTouchStart: this._handleTouchStart,
	          onTouchTap: primaryTogglesNestedList ? this._handleNestedListToggle : onTouchTap,
	          ref: 'enhancedButton',
	          style: this.mergeStyles(styles.root, style)
	        }),
	        _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(styles.innerDiv, innerDivStyle) },
	          contentChildren
	        )
	      ),
	      nestedList
	    );
	  }
	});
	
	exports.default = ListItem;
	module.exports = exports['default'];

/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(248);
	
	var _list = __webpack_require__(234);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NestedList = function (_React$Component) {
	  _inherits(NestedList, _React$Component);
	
	  function NestedList() {
	    _classCallCheck(this, NestedList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NestedList).apply(this, arguments));
	  }
	
	  _createClass(NestedList, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var open = _props.open;
	      var nestedLevel = _props.nestedLevel;
	      var style = _props.style;
	
	      var styles = {
	        root: {
	          display: open ? null : 'none'
	        }
	      };
	
	      return _react2.default.createElement(
	        _list2.default,
	        { style: (0, _styles.mergeStyles)(styles.root, style) },
	        _react2.default.Children.map(children, function (child) {
	          return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, {
	            nestedLevel: nestedLevel + 1
	          }) : child;
	        })
	      );
	    }
	  }]);
	
	  return NestedList;
	}(_react2.default.Component);
	
	NestedList.propTypes = {
	  children: _react2.default.PropTypes.node,
	  nestedLevel: _react2.default.PropTypes.number,
	  open: _react2.default.PropTypes.bool,
	
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};
	NestedList.defaultProps = {
	  nestedLevel: 1,
	  open: false
	};
	exports.default = NestedList;
	module.exports = exports['default'];

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _events = __webpack_require__(108);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _propTypes = __webpack_require__(61);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _menu = __webpack_require__(235);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _popover = __webpack_require__(237);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _warning = __webpack_require__(90);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var IconMenu = _react2.default.createClass({
	  displayName: 'IconMenu',
	
	  propTypes: {
	    /**
	     * This is the point on the icon where the menu
	     * targetOrigin will stick to.
	     * Options:
	     * vertical: [top, middle, bottom]
	     * horizontal: [left, center, right].
	     */
	    anchorOrigin: _propTypes2.default.origin,
	
	    /**
	     * Should be used to pass `MenuItem` components.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	
	    /**
	     * If true, menu will close after an item is touchTapped.
	     */
	    closeOnItemTouchTap: _react2.default.PropTypes.bool,
	
	    /**
	     * This is the IconButton to render. This button will open the menu.
	     */
	    iconButtonElement: _react2.default.PropTypes.element.isRequired,
	
	    /**
	     * The style object to use to override underlying icon style.
	     */
	    iconStyle: _react2.default.PropTypes.object,
	
	    /**
	     * The style object to use to override underlying menu style.
	     */
	    menuStyle: _react2.default.PropTypes.object,
	
	    /**
	     * Fired when a menu item is touchTapped.
	     */
	    onItemTouchTap: _react2.default.PropTypes.func,
	
	    /**
	     * Fired when keyobard focuses on element.
	     */
	    onKeyboardFocus: _react2.default.PropTypes.func,
	
	    /**
	     * Fired when mouse is pressed on element.
	     */
	    onMouseDown: _react2.default.PropTypes.func,
	
	    /**
	     * Fired when mouse enters the element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,
	
	    /**
	     * Fired when mouse leaves the element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,
	
	    /**
	     * Fired when mouse is lifted inside the element.
	     */
	    onMouseUp: _react2.default.PropTypes.func,
	
	    /**
	     * Callback function that is fired when the open state
	     * of the menu is requested to be changed. The provided
	     * open argument determines whether the menu is requested
	     * to be opened or closed. Also, the reason argument states
	     * why the menu got closed or opened. It can be 'keyboard',
	     * 'iconTap' for open action and 'enter', 'escape', 'itemTap',
	     * 'clickAway' for close action.
	     */
	    onRequestChange: _react2.default.PropTypes.func,
	
	    /**
	     * Fired when element is touch tapped.
	     */
	    onTouchTap: _react2.default.PropTypes.func,
	
	    /**
	     * Controls whether the IconMenu is opened or not.
	     */
	    open: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * This is the point on the menu which will stick to the menu
	     * origin.
	     * Options:
	     * vertical: [top, middle, bottom]
	     * horizontal: [left, center, right].
	     */
	    targetOrigin: _propTypes2.default.origin,
	
	    /**
	     * Sets the delay in milliseconds before closing the
	     * menu when an item is clicked.
	     */
	    touchTapCloseDelay: _react2.default.PropTypes.number
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      closeOnItemTouchTap: true,
	      open: null,
	      onItemTouchTap: function onItemTouchTap() {},
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onMouseDown: function onMouseDown() {},
	      onMouseLeave: function onMouseLeave() {},
	      onMouseEnter: function onMouseEnter() {},
	      onMouseUp: function onMouseUp() {},
	      onTouchTap: function onTouchTap() {},
	      onRequestChange: function onRequestChange() {},
	      anchorOrigin: {
	        vertical: 'top',
	        horizontal: 'left'
	      },
	      targetOrigin: {
	        vertical: 'top',
	        horizontal: 'left'
	      },
	      touchTapCloseDelay: 200
	    };
	  },
	  getInitialState: function getInitialState() {
	    if (process.env.NODE_ENV !== 'production') {
	      this._warningIfNeeded();
	    }
	
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      iconButtonRef: this.props.iconButtonElement.props.ref || 'iconButton',
	      menuInitiallyKeyboardFocused: false,
	      open: false
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    if (process.env.NODE_ENV !== 'production') {
	      this._warningIfNeeded();
	    }
	
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	
	    if (nextProps.open === true || nextProps.open === false) {
	      this.setState({ open: nextProps.open });
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._timeout) clearTimeout(this._timeout);
	  },
	  _warningIfNeeded: function _warningIfNeeded() {
	    if (this.props.hasOwnProperty('open')) {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(this.props.hasOwnProperty('closeOnItemTouchTap'), 'closeOnItemTouchTap has been deprecated in favor of open, onRequestChange') : undefined;
	    }
	  },
	  isOpen: function isOpen() {
	    return this.state.open;
	  },
	  close: function close(reason, isKeyboard) {
	    var _this = this;
	
	    if (!this.state.open) {
	      return;
	    }
	
	    if (this.props.open !== null) {
	      this.props.onRequestChange(false, reason);
	    }
	
	    this.setState({ open: false }, function () {
	      //Set focus on the icon button when the menu close
	      if (isKeyboard) {
	        var iconButton = _this.refs[_this.state.iconButtonRef];
	        _reactDom2.default.findDOMNode(iconButton).focus();
	        iconButton.setKeyboardFocus();
	      }
	    });
	  },
	  open: function open(reason, event) {
	    if (this.props.open !== null) {
	      this.props.onRequestChange(true, reason);
	
	      return this.setState({
	        menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
	        anchorEl: event.currentTarget
	      });
	    }
	
	    this.setState({
	      open: true,
	      menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
	      anchorEl: event.currentTarget
	    });
	
	    event.preventDefault();
	  },
	  _handleItemTouchTap: function _handleItemTouchTap(event, child) {
	    var _this2 = this;
	
	    if (this.props.closeOnItemTouchTap) {
	      (function () {
	        var isKeyboard = _events2.default.isKeyboard(event);
	        _this2._timeout = setTimeout(function () {
	          if (!_this2.isMounted()) {
	            return;
	          }
	
	          _this2.close(isKeyboard ? 'enter' : 'itemTap', isKeyboard);
	        }, _this2.props.touchTapCloseDelay);
	      })();
	    }
	
	    this.props.onItemTouchTap(event, child);
	  },
	  _handleMenuEscKeyDown: function _handleMenuEscKeyDown(event) {
	    this.close('escape', event);
	  },
	  render: function render() {
	    var _this3 = this;
	
	    var _props = this.props;
	    var anchorOrigin = _props.anchorOrigin;
	    var className = _props.className;
	    var closeOnItemTouchTap = _props.closeOnItemTouchTap;
	    var iconButtonElement = _props.iconButtonElement;
	    var iconStyle = _props.iconStyle;
	    var onItemTouchTap = _props.onItemTouchTap;
	    var onKeyboardFocus = _props.onKeyboardFocus;
	    var onMouseDown = _props.onMouseDown;
	    var onMouseLeave = _props.onMouseLeave;
	    var onMouseEnter = _props.onMouseEnter;
	    var onMouseUp = _props.onMouseUp;
	    var onTouchTap = _props.onTouchTap;
	    var menuStyle = _props.menuStyle;
	    var style = _props.style;
	    var targetOrigin = _props.targetOrigin;
	
	    var other = _objectWithoutProperties(_props, ['anchorOrigin', 'className', 'closeOnItemTouchTap', 'iconButtonElement', 'iconStyle', 'onItemTouchTap', 'onKeyboardFocus', 'onMouseDown', 'onMouseLeave', 'onMouseEnter', 'onMouseUp', 'onTouchTap', 'menuStyle', 'style', 'targetOrigin']);
	
	    var _state = this.state;
	    var open = _state.open;
	    var anchorEl = _state.anchorEl;
	
	    var styles = {
	      root: {
	        display: 'inline-block',
	        position: 'relative'
	      },
	
	      menu: {
	        position: 'relative'
	      }
	    };
	
	    var mergedRootStyles = this.mergeStyles(styles.root, style);
	    var mergedMenuStyles = this.mergeStyles(styles.menu, menuStyle);
	
	    var iconButton = _react2.default.cloneElement(iconButtonElement, {
	      onKeyboardFocus: this.props.onKeyboardFocus,
	      iconStyle: this.mergeStyles(iconStyle, iconButtonElement.props.iconStyle),
	      onTouchTap: function onTouchTap(e) {
	        _this3.open(_events2.default.isKeyboard(e) ? 'keyboard' : 'iconTap', e);
	        if (iconButtonElement.props.onTouchTap) iconButtonElement.props.onTouchTap(e);
	      },
	      ref: this.state.iconButtonRef
	    });
	
	    var menu = _react2.default.createElement(
	      _menu2.default,
	      _extends({}, other, {
	        animateOpen: true,
	        initiallyKeyboardFocused: this.state.menuInitiallyKeyboardFocused,
	        onEscKeyDown: this._handleMenuEscKeyDown,
	        onItemTouchTap: this._handleItemTouchTap,
	        zDepth: 0,
	        style: mergedMenuStyles
	      }),
	      this.props.children
	    );
	
	    return _react2.default.createElement(
	      'div',
	      {
	        className: className,
	        onMouseDown: onMouseDown,
	        onMouseLeave: onMouseLeave,
	        onMouseEnter: onMouseEnter,
	        onMouseUp: onMouseUp,
	        onTouchTap: onTouchTap,
	        style: this.prepareStyles(mergedRootStyles)
	      },
	      iconButton,
	      _react2.default.createElement(
	        _popover2.default,
	        {
	          anchorOrigin: anchorOrigin,
	          targetOrigin: targetOrigin,
	          open: open,
	          anchorEl: anchorEl,
	          childContextTypes: this.constructor.childContextTypes,
	          useLayerForClickAway: false,
	          onRequestClose: this.close,
	          context: this.context
	        },
	        menu
	      )
	    );
	  }
	});
	
	exports.default = IconMenu;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _popover = __webpack_require__(237);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _check = __webpack_require__(581);
	
	var _check2 = _interopRequireDefault(_check);
	
	var _listItem = __webpack_require__(561);
	
	var _listItem2 = _interopRequireDefault(_listItem);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _menu = __webpack_require__(235);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var nestedMenuStyle = {
	  position: 'relative'
	};
	
	var MenuItem = _react2.default.createClass({
	  displayName: 'MenuItem',
	
	  propTypes: {
	    /**
	     * If true, a left check mark will be rendered.
	     */
	    checked: _react2.default.PropTypes.bool,
	
	    /**
	     * Elements passed as children to inner ListItem.
	     */
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * Indicates if the menu should render with compact desktop styles.
	     */
	    desktop: _react2.default.PropTypes.bool,
	
	    /**
	     * Disables a menu item.
	     */
	    disabled: _react2.default.PropTypes.bool,
	
	    /**
	     * Prop passed down to ListItem that tells it what kind of focus it has.
	     */
	    focusState: _react2.default.PropTypes.oneOf(['none', 'focused', 'keyboard-focused']),
	
	    /**
	     * Style overrides for the inner div.
	     */
	    innerDivStyle: _react2.default.PropTypes.object,
	
	    /**
	     * If true, the children will be indented.
	     * Only needed when there is no leftIcon.
	     */
	    insetChildren: _react2.default.PropTypes.bool,
	
	    /**
	     * This is the SvgIcon or FontIcon to be displayed on the left side.
	     */
	    leftIcon: _react2.default.PropTypes.element,
	
	    /**
	     * Nested MenuItems for this MenuItem. Used to make nested menus.
	     */
	    menuItems: _react2.default.PropTypes.node,
	
	    /**
	     * Fired when the element is touchTapped.
	     */
	    onTouchTap: _react2.default.PropTypes.func,
	
	    /**
	     * This is the SvgIcon or FontIcon to be displayed on the right side.
	     */
	    rightIcon: _react2.default.PropTypes.element,
	
	    /**
	     * This is the block element that contains the secondary text.
	     * If a string is passed in, a div tag will be rendered.
	     */
	    secondaryText: _react2.default.PropTypes.node,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * The value of the menu item.
	     */
	    value: _react2.default.PropTypes.any
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      checked: false,
	      desktop: false,
	      disabled: false,
	      focusState: 'none',
	      insetChildren: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      open: false
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._applyFocusState();
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	
	    if (this.state.open && nextProps.focusState === 'none') {
	      this._onRequestClose();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._applyFocusState();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.state.open) {
	      this.setState({
	        open: false
	      });
	    }
	  },
	  _applyFocusState: function _applyFocusState() {
	    this.refs.listItem.applyFocusState(this.props.focusState);
	  },
	  _cloneMenuItem: function _cloneMenuItem(item) {
	    var _this = this;
	
	    return _react2.default.cloneElement(item, {
	      onTouchTap: function onTouchTap(event) {
	        if (!item.props.menuItems) {
	          _this._onRequestClose();
	        }
	
	        if (item.props.onTouchTap) {
	          item.props.onTouchTap(event);
	        }
	      },
	      onRequestClose: this._onRequestClose
	    });
	  },
	  _onTouchTap: function _onTouchTap(event) {
	    event.preventDefault();
	
	    this.setState({
	      open: true,
	      anchorEl: _reactDom2.default.findDOMNode(this)
	    });
	
	    if (this.props.onTouchTap) {
	      this.props.onTouchTap(event);
	    }
	  },
	  _onRequestClose: function _onRequestClose() {
	    this.setState({
	      open: false,
	      anchorEl: null
	    });
	  },
	  render: function render() {
	    var _props = this.props;
	    var checked = _props.checked;
	    var children = _props.children;
	    var desktop = _props.desktop;
	    var disabled = _props.disabled;
	    var focusState = _props.focusState;
	    var innerDivStyle = _props.innerDivStyle;
	    var insetChildren = _props.insetChildren;
	    var leftIcon = _props.leftIcon;
	    var menuItems = _props.menuItems;
	    var rightIcon = _props.rightIcon;
	    var secondaryText = _props.secondaryText;
	    var style = _props.style;
	    var value = _props.value;
	
	    var other = _objectWithoutProperties(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'value']);
	
	    var disabledColor = this.state.muiTheme.rawTheme.palette.disabledColor;
	    var textColor = this.state.muiTheme.rawTheme.palette.textColor;
	    var leftIndent = desktop ? 64 : 72;
	    var sidePadding = desktop ? 24 : 16;
	
	    var styles = {
	      root: {
	        color: disabled ? disabledColor : textColor,
	        lineHeight: desktop ? '32px' : '48px',
	        fontSize: desktop ? 15 : 16,
	        whiteSpace: 'nowrap'
	      },
	
	      innerDivStyle: {
	        paddingLeft: leftIcon || insetChildren || checked ? leftIndent : sidePadding,
	        paddingRight: sidePadding,
	        paddingBottom: 0,
	        paddingTop: 0
	      },
	
	      secondaryText: {
	        float: 'right'
	      },
	
	      leftIconDesktop: {
	        margin: 0,
	        left: 24,
	        top: 4
	      },
	
	      rightIconDesktop: {
	        margin: 0,
	        right: 24,
	        top: 4,
	        fill: _colors2.default.grey600
	      }
	    };
	
	    var mergedRootStyles = this.mergeStyles(styles.root, style);
	    var mergedInnerDivStyles = this.mergeStyles(styles.innerDivStyle, innerDivStyle);
	
	    //Left Icon
	    var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
	    if (leftIconElement && desktop) {
	      var mergedLeftIconStyles = this.mergeStyles(styles.leftIconDesktop, leftIconElement.props.style);
	      leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
	    }
	
	    //Right Icon
	    var rightIconElement = undefined;
	    if (rightIcon) {
	      var mergedRightIconStyles = desktop ? this.mergeStyles(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
	      rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
	    }
	
	    //Secondary Text
	    var secondaryTextElement = undefined;
	    if (secondaryText) {
	      var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
	      var mergedSecondaryTextStyles = secondaryTextIsAnElement ? this.mergeStyles(styles.secondaryText, secondaryText.props.style) : null;
	
	      secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(styles.secondaryText) },
	        secondaryText
	      );
	    }
	    var childMenuPopover = undefined;
	    if (menuItems) {
	      childMenuPopover = _react2.default.createElement(
	        _popover2.default,
	        {
	          anchorOrigin: { horizontal: 'right', vertical: 'top' },
	          anchorEl: this.state.anchorEl,
	          open: this.state.open,
	          useLayerForClickAway: false,
	          onRequestClose: this._onRequestClose
	        },
	        _react2.default.createElement(
	          _menu2.default,
	          { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
	          _react2.default.Children.map(menuItems, this._cloneMenuItem)
	        )
	      );
	      other.onTouchTap = this._onTouchTap;
	    }
	
	    return _react2.default.createElement(
	      _listItem2.default,
	      _extends({}, other, {
	        disabled: disabled,
	        innerDivStyle: mergedInnerDivStyles,
	        insetChildren: insetChildren,
	        leftIcon: leftIconElement,
	        ref: 'listItem',
	        rightIcon: rightIconElement,
	        style: mergedRootStyles
	      }),
	      children,
	      secondaryTextElement,
	      childMenuPopover
	    );
	  }
	});
	
	exports.default = MenuItem;
	module.exports = exports['default'];

/***/ },
/* 565 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _events = __webpack_require__(108);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _dom = __webpack_require__(154);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	  //When the component mounts, listen to click events and check if we need to
	  //Call the componentClickAway function.
	
	  componentDidMount: function componentDidMount() {
	    if (!this.manuallyBindClickAway) this._bindClickAway();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._unbindClickAway();
	  },
	  _checkClickAway: function _checkClickAway(event) {
	    if (this.isMounted()) {
	      var el = _reactDom2.default.findDOMNode(this);
	
	      // Check if the target is inside the current component
	      if (event.target !== el && !_dom2.default.isDescendant(el, event.target) && document.documentElement.contains(event.target)) {
	        if (this.componentClickAway) this.componentClickAway(event);
	      }
	    }
	  },
	  _bindClickAway: function _bindClickAway() {
	    // On touch-enabled devices, both events fire, and the handler is called twice,
	    // but it's fine since all operations for which the mixin is used
	    // are idempotent.
	    _events2.default.on(document, 'mouseup', this._checkClickAway);
	    _events2.default.on(document, 'touchend', this._checkClickAway);
	  },
	  _unbindClickAway: function _unbindClickAway() {
	    _events2.default.off(document, 'mouseup', this._checkClickAway);
	    _events2.default.off(document, 'touchend', this._checkClickAway);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _events = __webpack_require__(108);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  componentDidMount: function componentDidMount() {
	    var listeners = this.windowListeners;
	
	    for (var eventName in listeners) {
	      var callbackName = listeners[eventName];
	      _events2.default.on(window, eventName, this[callbackName]);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var listeners = this.windowListeners;
	
	    for (var eventName in listeners) {
	      var callbackName = listeners[eventName];
	      _events2.default.off(window, eventName, this[callbackName]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(61);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _paper = __webpack_require__(88);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PopoverDefaultAnimation = _react2.default.createClass({
	  displayName: 'PopoverDefaultAnimation',
	
	  propTypes: {
	    children: _react2.default.PropTypes.node,
	
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	    open: _react2.default.PropTypes.bool.isRequired,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    targetOrigin: _propTypes2.default.origin,
	    zDepth: _propTypes2.default.zDepth
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      style: {},
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      open: false
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({ open: true }); //eslint-disable-line react/no-did-mount-set-state
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	
	    this.setState({
	      open: nextProps.open,
	      muiTheme: newMuiTheme
	    });
	  },
	  getStyles: function getStyles() {
	    var targetOrigin = this.props.targetOrigin;
	
	    var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');
	
	    return {
	      base: {
	        opacity: 0,
	        transform: 'scale(0, 0)',
	        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	        position: 'fixed',
	        zIndex: this.state.muiTheme.zIndex.popover,
	        transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
	        maxHeight: '100%'
	
	      },
	      horizontal: {
	        maxHeight: '100%',
	        overflowY: 'auto',
	        transform: 'scaleX(0)',
	        opacity: 0,
	        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	        transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
	      },
	      vertical: {
	        opacity: 0,
	        transform: 'scaleY(0)',
	        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	        transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
	      }
	    };
	  },
	  getOpenStyles: function getOpenStyles() {
	    return {
	      base: {
	        opacity: 1,
	        transform: 'scale(1, 1)'
	      },
	      horizontal: {
	        opacity: 1,
	        transform: 'scaleX(1)'
	      },
	      vertical: {
	        opacity: 1,
	        transform: 'scaleY(1)'
	      }
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var style = _props.style;
	    var zDepth = _props.zDepth;
	
	    var styles = this.getStyles();
	    var openStyles = {};
	    if (this.state.open) openStyles = this.getOpenStyles();
	
	    return _react2.default.createElement(
	      _paper2.default,
	      {
	        style: this.mergeStyles(styles.base, style, openStyles.base),
	        zDepth: zDepth,
	        className: className
	      },
	      _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(styles.horizontal, openStyles.horizontal) },
	        _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(styles.vertical, openStyles.vertical) },
	          this.props.children
	        )
	      )
	    );
	  }
	});
	
	exports.default = PopoverDefaultAnimation;
	module.exports = exports['default'];

/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _dom = __webpack_require__(154);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
	var RenderToLayer = _react2.default.createClass({
	  displayName: 'RenderToLayer',
	
	  propTypes: {
	    componentClickAway: _react2.default.PropTypes.func,
	    open: _react2.default.PropTypes.bool.isRequired,
	    render: _react2.default.PropTypes.func.isRequired,
	    useLayerForClickAway: _react2.default.PropTypes.bool
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      useLayerForClickAway: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._renderLayer();
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      muiTheme: newMuiTheme
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderLayer();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._unrenderLayer();
	  },
	  onClickAway: function onClickAway(event) {
	    if (event.defaultPrevented) {
	      return;
	    }
	
	    if (!this.props.componentClickAway) {
	      return;
	    }
	
	    if (!this.props.open) {
	      return;
	    }
	
	    var el = this._layer;
	    if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
	      this.props.componentClickAway(event);
	    }
	  },
	  getLayer: function getLayer() {
	    return this._layer;
	  },
	
	  _unrenderLayer: function _unrenderLayer() {
	    if (!this._layer) {
	      return;
	    }
	
	    if (this.props.useLayerForClickAway) {
	      this._layer.style.position = 'relative';
	      this._layer.removeEventListener('touchstart', this.onClickAway);
	      this._layer.removeEventListener('click', this.onClickAway);
	    } else {
	      window.removeEventListener('touchstart', this.onClickAway);
	      window.removeEventListener('click', this.onClickAway);
	    }
	
	    _reactDom2.default.unmountComponentAtNode(this._layer);
	    document.body.removeChild(this._layer);
	    this._layer = null;
	  },
	
	  _renderLayer: function _renderLayer() {
	    var _this = this;
	
	    var _props = this.props;
	    var open = _props.open;
	    var render = _props.render;
	
	    if (open) {
	      if (!this._layer) {
	        this._layer = document.createElement('div');
	        document.body.appendChild(this._layer);
	
	        if (this.props.useLayerForClickAway) {
	          this._layer.addEventListener('touchstart', this.onClickAway);
	          this._layer.addEventListener('click', this.onClickAway);
	          this._layer.style.position = 'fixed';
	          this._layer.style.top = 0;
	          this._layer.style.bottom = 0;
	          this._layer.style.left = 0;
	          this._layer.style.right = 0;
	          this._layer.style.zIndex = this.state.muiTheme.zIndex.layer;
	        } else {
	          setTimeout(function () {
	            window.addEventListener('touchstart', _this.onClickAway);
	            window.addEventListener('click', _this.onClickAway);
	          }, 0);
	        }
	      }
	
	      // By calling this method in componentDidMount() and
	      // componentDidUpdate(), you're effectively creating a "wormhole" that
	      // funnels React's hierarchical updates through to a DOM node on an
	      // entirely different part of the page.
	
	      var layerElement = render();
	
	      if (layerElement === null) {
	        this.layerElement = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, null, this._layer);
	      } else {
	        this.layerElement = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, layerElement, this._layer);
	      }
	    } else {
	      this._unrenderLayer();
	    }
	  },
	  render: function render() {
	    return null;
	  }
	});
	
	exports.default = RenderToLayer;
	module.exports = exports['default'];

/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _autoPrefix = __webpack_require__(60);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var CircleRipple = _react2.default.createClass({
	  displayName: 'CircleRipple',
	
	  propTypes: {
	    color: _react2.default.PropTypes.string,
	
	    /**
	     * The material-ui theme applied to this component.
	     */
	    muiTheme: _react2.default.PropTypes.object.isRequired,
	
	    opacity: _react2.default.PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: _colors2.default.darkBlack,
	      opacity: 0.16
	    };
	  },
	  componentWillAppear: function componentWillAppear(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentWillEnter: function componentWillEnter(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentDidAppear: function componentDidAppear() {
	    this._animate();
	  },
	  componentDidEnter: function componentDidEnter() {
	    this._animate();
	  },
	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;
	
	    var style = _reactDom2.default.findDOMNode(this).style;
	    style.opacity = 0;
	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 2000);
	  },
	  _animate: function _animate() {
	    var style = _reactDom2.default.findDOMNode(this).style;
	    var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ',' + _transitions2.default.easeOut('1s', 'transform');
	    _autoPrefix2.default.set(style, 'transition', transitionValue, this.props.muiTheme);
	    _autoPrefix2.default.set(style, 'transform', 'scale(1)', this.props.muiTheme);
	  },
	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;
	
	    var style = _reactDom2.default.findDOMNode(this).style;
	    style.opacity = this.props.opacity;
	    _autoPrefix2.default.set(style, 'transform', 'scale(0)', this.props.muiTheme);
	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, 0);
	  },
	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var opacity = _props.opacity;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['color', 'opacity', 'style']);
	
	    var mergedStyles = this.mergeStyles({
	      position: 'absolute',
	      top: 0,
	      left: 0,
	      height: '100%',
	      width: '100%',
	      borderRadius: '50%',
	      backgroundColor: color
	    }, style);
	
	    return _react2.default.createElement('div', _extends({}, other, { style: this.prepareStyles(mergedStyles) }));
	  }
	});
	
	exports.default = CircleRipple;
	module.exports = exports['default'];

/***/ },
/* 570 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _autoPrefix = __webpack_require__(60);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _scaleIn = __webpack_require__(587);
	
	var _scaleIn2 = _interopRequireDefault(_scaleIn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pulsateDuration = 750;
	
	var FocusRipple = _react2.default.createClass({
	  displayName: 'FocusRipple',
	
	  propTypes: {
	    color: _react2.default.PropTypes.string,
	    innerStyle: _react2.default.PropTypes.object,
	
	    /**
	     * The material-ui theme applied to this component.
	     */
	    muiTheme: _react2.default.PropTypes.object.isRequired,
	
	    opacity: _react2.default.PropTypes.number,
	    show: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: _colors2.default.darkBlack
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this._setRippleSize();
	      this._pulsate();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.show) {
	      this._setRippleSize();
	      this._pulsate();
	    } else {
	      if (this._timeout) clearTimeout(this._timeout);
	    }
	  },
	  _getRippleElement: function _getRippleElement(props) {
	    var color = props.color;
	    var innerStyle = props.innerStyle;
	    var opacity = props.opacity;
	
	    var innerStyles = this.mergeStyles({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      borderRadius: '50%',
	      opacity: opacity ? opacity : 0.16,
	      backgroundColor: color,
	      transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	    }, innerStyle);
	
	    return _react2.default.createElement('div', { ref: 'innerCircle', style: this.prepareStyles(innerStyles) });
	  },
	  _pulsate: function _pulsate() {
	    if (!this.isMounted()) return;
	
	    var innerCircle = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	    if (!innerCircle) return;
	
	    var startScale = 'scale(1)';
	    var endScale = 'scale(0.85)';
	    var currentScale = innerCircle.style.transform;
	    var nextScale = undefined;
	
	    currentScale = currentScale || startScale;
	    nextScale = currentScale === startScale ? endScale : startScale;
	
	    _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale, this.props.muiTheme);
	    this._timeout = setTimeout(this._pulsate, pulsateDuration);
	  },
	  _setRippleSize: function _setRippleSize() {
	    var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	    var height = el.offsetHeight;
	    var width = el.offsetWidth;
	    var size = Math.max(height, width);
	
	    var oldTop = 0;
	    // For browsers that don't support endsWith()
	    if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	      oldTop = parseInt(el.style.top);
	    }
	    el.style.height = size + 'px';
	    el.style.top = height / 2 - size / 2 + oldTop + 'px';
	  },
	  render: function render() {
	    var _props = this.props;
	    var show = _props.show;
	    var style = _props.style;
	
	    var mergedRootStyles = this.mergeStyles({
	      height: '100%',
	      width: '100%',
	      position: 'absolute',
	      top: 0,
	      left: 0
	    }, style);
	
	    var ripple = show ? this._getRippleElement(this.props) : null;
	
	    return _react2.default.createElement(
	      _scaleIn2.default,
	      {
	        maxScale: 0.85,
	        style: mergedRootStyles
	      },
	      ripple
	    );
	  }
	});
	
	exports.default = FocusRipple;
	module.exports = exports['default'];

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _reactAddonsTransitionGroup = __webpack_require__(249);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _dom = __webpack_require__(154);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _circleRipple = __webpack_require__(569);
	
	var _circleRipple2 = _interopRequireDefault(_circleRipple);
	
	var _reactAddonsUpdate = __webpack_require__(109);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function push(array, obj) {
	  var newObj = Array.isArray(obj) ? obj : [obj];
	  return (0, _reactAddonsUpdate2.default)(array, { $push: newObj });
	}
	
	function shift(array) {
	  return (0, _reactAddonsUpdate2.default)(array, { $splice: [[0, 1]] });
	}
	
	var TouchRipple = _react2.default.createClass({
	  displayName: 'TouchRipple',
	
	  propTypes: {
	    centerRipple: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    color: _react2.default.PropTypes.string,
	
	    /**
	     * The material-ui theme applied to this component.
	     */
	    muiTheme: _react2.default.PropTypes.object.isRequired,
	
	    opacity: _react2.default.PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],
	
	  getInitialState: function getInitialState() {
	    //Touch start produces a mouse down event for compat reasons. To avoid
	    //showing ripples twice we skip showing a ripple for the first mouse down
	    //after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    //to avoid re-rendering when we change it
	    this._ignoreNextMouseDown = false;
	
	    return {
	      //This prop allows us to only render the ReactTransitionGroup
	      //on the first click of the component, making the inital
	      //render faster
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	  },
	  start: function start(e, isRippleTouchGenerated) {
	    if (this._ignoreNextMouseDown && !isRippleTouchGenerated) {
	      this._ignoreNextMouseDown = false;
	      return;
	    }
	
	    var ripples = this.state.ripples;
	
	    //Add a ripple to the ripples array
	    ripples = push(ripples, _react2.default.createElement(_circleRipple2.default, {
	      key: this.state.nextKey,
	      muiTheme: this.props.muiTheme,
	      style: !this.props.centerRipple ? this._getRippleStyle(e) : {},
	      color: this.props.color,
	      opacity: this.props.opacity,
	      touchGenerated: isRippleTouchGenerated
	    }));
	
	    this._ignoreNextMouseDown = isRippleTouchGenerated;
	    this.setState({
	      hasRipples: true,
	      nextKey: this.state.nextKey + 1,
	      ripples: ripples
	    });
	  },
	  end: function end() {
	    var currentRipples = this.state.ripples;
	    this.setState({
	      ripples: shift(currentRipples)
	    });
	  },
	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) this.start(e, false);
	  },
	  _handleMouseUp: function _handleMouseUp() {
	    this.end();
	  },
	  _handleMouseLeave: function _handleMouseLeave() {
	    this.end();
	  },
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.start(e, true);
	  },
	  _handleTouchEnd: function _handleTouchEnd() {
	    this.end();
	  },
	  _getRippleStyle: function _getRippleStyle(e) {
	    var style = {};
	    var el = _reactDom2.default.findDOMNode(this);
	    var elHeight = el.offsetHeight;
	    var elWidth = el.offsetWidth;
	    var offset = _dom2.default.offset(el);
	    var isTouchEvent = e.touches && e.touches.length;
	    var pageX = isTouchEvent ? e.touches[0].pageX : e.pageX;
	    var pageY = isTouchEvent ? e.touches[0].pageY : e.pageY;
	    var pointerX = pageX - offset.left;
	    var pointerY = pageY - offset.top;
	    var topLeftDiag = this._calcDiag(pointerX, pointerY);
	    var topRightDiag = this._calcDiag(elWidth - pointerX, pointerY);
	    var botRightDiag = this._calcDiag(elWidth - pointerX, elHeight - pointerY);
	    var botLeftDiag = this._calcDiag(pointerX, elHeight - pointerY);
	    var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	    var rippleSize = rippleRadius * 2;
	    var left = pointerX - rippleRadius;
	    var top = pointerY - rippleRadius;
	
	    style.height = rippleSize + 'px';
	    style.width = rippleSize + 'px';
	    style.top = top + 'px';
	    style.left = left + 'px';
	
	    return style;
	  },
	  _calcDiag: function _calcDiag(a, b) {
	    return Math.sqrt(a * a + b * b);
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var style = _props.style;
	    var _state = this.state;
	    var hasRipples = _state.hasRipples;
	    var ripples = _state.ripples;
	
	    var rippleGroup = undefined;
	    if (hasRipples) {
	      var mergedStyles = this.mergeStyles({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        overflow: 'hidden'
	      }, style);
	
	      rippleGroup = _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        { style: this.prepareStyles(mergedStyles) },
	        ripples
	      );
	    }
	
	    return _react2.default.createElement(
	      'div',
	      {
	        onMouseUp: this._handleMouseUp,
	        onMouseDown: this._handleMouseDown,
	        onMouseLeave: this._handleMouseLeave,
	        onTouchStart: this._handleTouchStart,
	        onTouchEnd: this._handleTouchEnd
	      },
	      rippleGroup,
	      children
	    );
	  }
	});
	
	exports.default = TouchRipple;
	module.exports = exports['default'];

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lightBaseTheme = __webpack_require__(151);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _lightBaseTheme2.default;
	
	// import deprecatedExport from '../../utils/deprecatedExport';
	
	// export default deprecatedExport(
	//   lightBaseTheme,
	//   'material-ui/lib/styles/raw-themes/light-raw-theme',
	//   'material-ui/lib/styles/baseThemes/lightBaseTheme'
	// );
	
	module.exports = exports['default'];

/***/ },
/* 573 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (muiTheme) {
	  if (muiTheme.userAgent !== false) {
	    return function (style) {
	      return muiTheme.prefix(style);
	    };
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = callOnce;
	
	var _warning = __webpack_require__(90);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CALLED_ONCE = 'muiPrepared';
	
	function callOnce() {
	  if (process.env.NODE_ENV !== 'production') {
	    return function (style) {
	      if (style[CALLED_ONCE]) {
	        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'You cannot call prepareStyles() on the same style object more than once.') : undefined;
	      }
	      style[CALLED_ONCE] = true;
	      return style;
	    };
	  }
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.rtl = exports.callOnce = exports.autoprefixer = undefined;
	
	var _autoprefixer = __webpack_require__(573);
	
	var _autoprefixer2 = _interopRequireDefault(_autoprefixer);
	
	var _callOnce = __webpack_require__(574);
	
	var _callOnce2 = _interopRequireDefault(_callOnce);
	
	var _rtl = __webpack_require__(576);
	
	var _rtl2 = _interopRequireDefault(_rtl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.autoprefixer = _autoprefixer2.default;
	exports.callOnce = _callOnce2.default;
	exports.rtl = _rtl2.default;

/***/ },
/* 576 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = rtl;
	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;
	
	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function rtl(muiTheme) {
	  if (muiTheme.isRtl) {
	    return function (style) {
	      var flippedAttributes = {
	        // Keys and their replacements.
	        right: 'left',
	        left: 'right',
	        marginRight: 'marginLeft',
	        marginLeft: 'marginRight',
	        paddingRight: 'paddingLeft',
	        paddingLeft: 'paddingRight',
	        borderRight: 'borderLeft',
	        borderLeft: 'borderRight'
	      };
	
	      var newStyle = {};
	
	      Object.keys(style).forEach(function (attribute) {
	        var value = style[attribute];
	        var key = attribute;
	
	        if (flippedAttributes.hasOwnProperty(attribute)) {
	          key = flippedAttributes[attribute];
	        }
	
	        switch (attribute) {
	          case 'float':
	          case 'textAlign':
	            if (value === 'right') {
	              value = 'left';
	            } else if (value === 'left') {
	              value = 'right';
	            }
	            break;
	
	          case 'direction':
	            if (value === 'ltr') {
	              value = 'rtl';
	            } else if (value === 'rtl') {
	              value = 'ltr';
	            }
	            break;
	
	          case 'transform':
	            var matches = undefined;
	            if (matches = value.match(reTranslate)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	            }
	            if (matches = value.match(reSkew)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
	            }
	            break;
	
	          case 'transformOrigin':
	            if (value.indexOf('right') > -1) {
	              value = value.replace('right', 'left');
	            } else if (value.indexOf('left') > -1) {
	              value = value.replace('left', 'right');
	            }
	            break;
	        }
	
	        newStyle[key] = value;
	      });
	
	      return newStyle;
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _svgIcon = __webpack_require__(75);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HardwareKeyboardArrowDown = _react2.default.createClass({
	  displayName: 'HardwareKeyboardArrowDown',
	
	  mixins: [_reactAddonsPureRenderMixin2.default],
	
	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
	    );
	  }
	});
	
	exports.default = HardwareKeyboardArrowDown;
	module.exports = exports['default'];

/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _svgIcon = __webpack_require__(75);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HardwareKeyboardArrowUp = _react2.default.createClass({
	  displayName: 'HardwareKeyboardArrowUp',
	
	  mixins: [_reactAddonsPureRenderMixin2.default],
	
	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
	    );
	  }
	});
	
	exports.default = HardwareKeyboardArrowUp;
	module.exports = exports['default'];

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _svgIcon = __webpack_require__(75);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationArrowDropDown = _react2.default.createClass({
	  displayName: 'NavigationArrowDropDown',
	
	  mixins: [_reactAddonsPureRenderMixin2.default],
	
	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
	    );
	  }
	});
	
	exports.default = NavigationArrowDropDown;
	module.exports = exports['default'];

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _svgIcon = __webpack_require__(75);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationArrowDropUp = _react2.default.createClass({
	  displayName: 'NavigationArrowDropUp',
	
	  mixins: [_reactAddonsPureRenderMixin2.default],
	
	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M7 14l5-5 5 5z' })
	    );
	  }
	});
	
	exports.default = NavigationArrowDropUp;
	module.exports = exports['default'];

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _svgIcon = __webpack_require__(75);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationCheck = _react2.default.createClass({
	  displayName: 'NavigationCheck',
	
	  mixins: [_reactAddonsPureRenderMixin2.default],
	
	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
	    );
	  }
	});
	
	exports.default = NavigationCheck;
	module.exports = exports['default'];

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _svgIcon = __webpack_require__(75);
	
	var _svgIcon2 = _interopRequireDefault(_svgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationMoreVert = _react2.default.createClass({
	  displayName: 'NavigationMoreVert',
	
	  mixins: [_reactAddonsPureRenderMixin2.default],
	
	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
	    );
	  }
	});
	
	exports.default = NavigationMoreVert;
	module.exports = exports['default'];

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var ToolbarSeparator = _react2.default.createClass({
	  displayName: 'ToolbarSeparator',
	
	  propTypes: {
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.toolbar;
	  },
	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        backgroundColor: this.getTheme().separatorColor,
	        display: 'inline-block',
	        height: this.getSpacing().desktopGutterMore,
	        marginLeft: this.getSpacing().desktopGutter,
	        position: 'relative',
	        top: (this.getTheme().height - this.getSpacing().desktopGutterMore) / 2,
	        width: 1
	      }
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['className', 'style']);
	
	    var styles = this.getStyles();
	
	    return _react2.default.createElement('span', _extends({}, other, { className: className, style: this.prepareStyles(styles.root, style) }));
	  }
	});
	
	exports.default = ToolbarSeparator;
	module.exports = exports['default'];

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var ToolbarTitle = _react2.default.createClass({
	  displayName: 'ToolbarTitle',
	
	  propTypes: {
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	
	    /**
	     * The text to be displayed.
	     */
	    text: _react2.default.PropTypes.string
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.toolbar;
	  },
	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        paddingRight: this.getSpacing().desktopGutterLess,
	        lineHeight: this.getTheme().height + 'px',
	        fontSize: this.getTheme().titleFontSize + 'px',
	        display: 'inline-block',
	        position: 'relative'
	      }
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var style = _props.style;
	    var text = _props.text;
	
	    var other = _objectWithoutProperties(_props, ['className', 'style', 'text']);
	
	    var styles = this.getStyles();
	
	    return _react2.default.createElement(
	      'span',
	      _extends({}, other, { className: className, style: this.prepareStyles(styles.root, style) }),
	      text
	    );
	  }
	});
	
	exports.default = ToolbarTitle;
	module.exports = exports['default'];

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colors = __webpack_require__(29);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Tooltip = _react2.default.createClass({
	  displayName: 'Tooltip',
	
	  propTypes: {
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	    horizontalPosition: _react2.default.PropTypes.oneOf(['left', 'right', 'center']),
	    label: _react2.default.PropTypes.node.isRequired,
	    show: _react2.default.PropTypes.bool,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    touch: _react2.default.PropTypes.bool,
	    verticalPosition: _react2.default.PropTypes.oneOf(['top', 'bottom'])
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_stylePropable2.default],
	
	  getInitialState: function getInitialState() {
	    return {
	      offsetWidth: null,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._setRippleSize();
	    this._setTooltipPosition();
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    this._setTooltipPosition();
	
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._setRippleSize();
	  },
	  getStyles: function getStyles() {
	    var verticalPosition = this.props.verticalPosition;
	    var horizontalPosition = this.props.horizontalPosition;
	    var touchMarginOffset = this.props.touch ? 10 : 0;
	    var touchOffsetTop = this.props.touch ? -20 : -10;
	    var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;
	
	    var muiTheme = this.state.muiTheme;
	    var rawTheme = muiTheme.rawTheme;
	
	    var styles = {
	      root: {
	        position: 'absolute',
	        fontFamily: rawTheme.fontFamily,
	        fontSize: '10px',
	        lineHeight: '22px',
	        padding: '0 8px',
	        zIndex: muiTheme.zIndex.tooltip,
	        color: _colors2.default.white,
	        overflow: 'hidden',
	        top: -10000,
	        borderRadius: 2,
	        userSelect: 'none',
	        opacity: 0,
	        right: horizontalPosition === 'left' ? 12 : null,
	        left: horizontalPosition === 'center' ? (this.state.offsetWidth - 48) / 2 * -1 : null,
	        transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ',' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	      },
	      label: {
	        position: 'relative',
	        whiteSpace: 'nowrap'
	      },
	      ripple: {
	        position: 'absolute',
	        left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	        top: verticalPosition === 'bottom' ? 0 : '100%',
	        transform: 'translate(-50%, -50%)',
	        borderRadius: '50%',
	        backgroundColor: 'transparent',
	        transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ',' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ',' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	      },
	      rootWhenShown: {
	        top: verticalPosition === 'top' ? touchOffsetTop : 36,
	        opacity: 0.9,
	        transform: 'translate3d(0px, ' + offset + 'px, 0px)',
	        transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	      },
	      rootWhenTouched: {
	        fontSize: '14px',
	        lineHeight: '32px',
	        padding: '0 16px'
	      },
	      rippleWhenShown: {
	        backgroundColor: _colors2.default.grey700,
	        transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	      }
	    };
	
	    return styles;
	  },
	  _setRippleSize: function _setRippleSize() {
	    var ripple = _reactDom2.default.findDOMNode(this.refs.ripple);
	    var tooltip = window.getComputedStyle(_reactDom2.default.findDOMNode(this));
	    var tooltipWidth = parseInt(tooltip.getPropertyValue('width'), 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	    var tooltipHeight = parseInt(tooltip.getPropertyValue('height'), 10);
	
	    var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	    if (this.props.show) {
	      ripple.style.height = rippleDiameter + 'px';
	      ripple.style.width = rippleDiameter + 'px';
	    } else {
	      ripple.style.width = '0px';
	      ripple.style.height = '0px';
	    }
	  },
	  _setTooltipPosition: function _setTooltipPosition() {
	    var tooltip = _reactDom2.default.findDOMNode(this);
	    this.setState({ offsetWidth: tooltip.offsetWidth });
	  },
	  render: function render() {
	    var _props = this.props;
	    var label = _props.label;
	
	    var other = _objectWithoutProperties(_props, ['label']);
	
	    var styles = this.getStyles();
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, {
	        style: this.prepareStyles(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style)
	      }),
	      _react2.default.createElement('div', {
	        ref: 'ripple',
	        style: this.prepareStyles(styles.ripple, this.props.show && styles.rippleWhenShown)
	      }),
	      _react2.default.createElement(
	        'span',
	        { style: this.prepareStyles(styles.label) },
	        label
	      )
	    );
	  }
	});
	
	exports.default = Tooltip;
	module.exports = exports['default'];

/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _autoPrefix = __webpack_require__(60);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(33);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var ScaleInChild = _react2.default.createClass({
	  displayName: 'ScaleInChild',
	
	  propTypes: {
	    children: _react2.default.PropTypes.node,
	    enterDelay: _react2.default.PropTypes.number,
	    maxScale: _react2.default.PropTypes.number,
	    minScale: _react2.default.PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0,
	      maxScale: 1,
	      minScale: 0
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  componentWillAppear: function componentWillAppear(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentWillEnter: function componentWillEnter(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentDidAppear: function componentDidAppear() {
	    this._animate();
	  },
	  componentDidEnter: function componentDidEnter() {
	    this._animate();
	  },
	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;
	
	    var style = _reactDom2.default.findDOMNode(this).style;
	
	    style.opacity = '0';
	    _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')', this.state.muiTheme);
	
	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 450);
	  },
	  _animate: function _animate() {
	    var style = _reactDom2.default.findDOMNode(this).style;
	
	    style.opacity = '1';
	    _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')', this.state.muiTheme);
	  },
	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;
	
	    var style = _reactDom2.default.findDOMNode(this).style;
	
	    style.opacity = '0';
	    _autoPrefix2.default.set(style, 'transform', 'scale(0)', this.state.muiTheme);
	
	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, this.props.enterDelay);
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var enterDelay = _props.enterDelay;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'style']);
	
	    var mergedRootStyles = this.mergeStyles({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: 0,
	      transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	    }, style);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(mergedRootStyles) }),
	      children
	    );
	  }
	});
	
	exports.default = ScaleInChild;
	module.exports = exports['default'];

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(19);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _reactAddonsTransitionGroup = __webpack_require__(249);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _stylePropable = __webpack_require__(10);
	
	var _stylePropable2 = _interopRequireDefault(_stylePropable);
	
	var _scaleInChild = __webpack_require__(586);
	
	var _scaleInChild2 = _interopRequireDefault(_scaleInChild);
	
	var _getMuiTheme = __webpack_require__(12);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var ScaleIn = _react2.default.createClass({
	  displayName: 'ScaleIn',
	
	  propTypes: {
	    childStyle: _react2.default.PropTypes.object,
	    children: _react2.default.PropTypes.node,
	    enterDelay: _react2.default.PropTypes.number,
	    maxScale: _react2.default.PropTypes.number,
	    minScale: _react2.default.PropTypes.number,
	
	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },
	
	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },
	
	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	
	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var childStyle = _props.childStyle;
	    var enterDelay = _props.enterDelay;
	    var maxScale = _props.maxScale;
	    var minScale = _props.minScale;
	    var style = _props.style;
	
	    var other = _objectWithoutProperties(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
	
	    var mergedRootStyles = this.mergeStyles({
	      position: 'relative',
	      overflow: 'hidden',
	      height: '100%'
	    }, style);
	
	    var newChildren = _react2.default.Children.map(children, function (child) {
	      return _react2.default.createElement(
	        _scaleInChild2.default,
	        {
	          key: child.key,
	          enterDelay: enterDelay,
	          maxScale: maxScale,
	          minScale: minScale,
	          style: childStyle
	        },
	        child
	      );
	    });
	
	    return _react2.default.createElement(
	      _reactAddonsTransitionGroup2.default,
	      _extends({}, other, {
	        style: this.prepareStyles(mergedRootStyles),
	        component: 'div'
	      }),
	      newChildren
	    );
	  }
	});
	
	exports.default = ScaleIn;
	module.exports = exports['default'];

/***/ },
/* 588 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	module.exports = exports['default'];

/***/ },
/* 589 */,
/* 590 */,
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(623).create;

/***/ },
/* 592 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";
	
	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(43);
	var EventPluginUtils = __webpack_require__(253);
	var EventPropagators = __webpack_require__(77);
	var SyntheticUIEvent = __webpack_require__(79);
	var TouchEventUtils = __webpack_require__(594);
	var ViewportMetrics = __webpack_require__(164);
	
	var keyOf = __webpack_require__(592);
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;
	
	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    topLevelTypes.topTouchCancel,
	    topLevelTypes.topTouchEnd,
	    topLevelTypes.topTouchStart,
	    topLevelTypes.topTouchMove
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}
	
	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;
	
	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};
	
	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}
	
	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}
	
	var touchEvents = [
	  topLevelTypes.topTouchStart,
	  topLevelTypes.topTouchCancel,
	  topLevelTypes.topTouchEnd,
	  topLevelTypes.topTouchMove,
	];
	
	var dependencies = [
	  topLevelTypes.topMouseDown,
	  topLevelTypes.topMouseMove,
	  topLevelTypes.topMouseUp,
	].concat(touchEvents);
	
	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};
	
	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();
	
	function createTapEventPlugin(shouldRejectClick) {
	  return {
	
	    tapMoveThreshold: tapMoveThreshold,
	
	    ignoreMouseThreshold: ignoreMouseThreshold,
	
	    eventTypes: eventTypes,
	
	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} topLevelTarget The listening component root node.
	     * @param {string} topLevelTargetID ID of `topLevelTarget`.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID,
	        nativeEvent,
	        nativeEventTarget) {
	
	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }
	
	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }
	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          topLevelTargetID,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }
	
	  };
	}
	
	module.exports = createTapEventPlugin;


/***/ },
/* 594 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */
	
	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;
	
	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};
	
	module.exports = TouchEventUtils;


/***/ },
/* 595 */
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	var defaultClickRejectionStrategy = __webpack_require__(595);
	
	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;
	
	  __webpack_require__(76).injection.injectEventPluginsByName({
	    "TapEventPlugin":       __webpack_require__(593)(shouldRejectClick)
	  });
	};


/***/ },
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */
	
	'use strict';
	
	var shallowCompare = __webpack_require__(655);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFragment
	 */
	
	'use strict';
	
	var ReactChildren = __webpack_require__(158);
	var ReactElement = __webpack_require__(23);
	
	var emptyFunction = __webpack_require__(32);
	var invariant = __webpack_require__(4);
	var warning = __webpack_require__(8);
	
	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set a fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */
	
	var numericPropertyRegex = /^\d+$/;
	
	var warnedAboutNumeric = false;
	
	var ReactFragment = {
	  // Wrap a keyed object in an opaque proxy that warns you if you access any
	  // of its properties.
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : undefined;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : undefined;
	      return object;
	    }
	
	    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(false) : undefined;
	
	    var result = [];
	
	    for (var key in object) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : undefined;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }
	
	    return result;
	  }
	};
	
	module.exports = ReactFragment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(275);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;

/***/ },
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */
	
	'use strict';
	
	var React = __webpack_require__(254);
	var ReactTransitionChildMapping = __webpack_require__(633);
	
	var assign = __webpack_require__(6);
	var emptyFunction = __webpack_require__(32);
	
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',
	
	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },
	
	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },
	
	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  },
	
	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },
	
	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];
	
	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },
	
	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});
	
	module.exports = ReactTransitionGroup;

/***/ },
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/
	
	'use strict';
	
	var shallowEqual = __webpack_require__(143);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },
/* 656 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var assign = __webpack_require__(6);
	var keyOf = __webpack_require__(48);
	var invariant = __webpack_require__(4);
	var hasOwnProperty = ({}).hasOwnProperty;
	
	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}
	
	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });
	
	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
	
	var ALL_COMMANDS_SET = {};
	
	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});
	
	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
	}
	
	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;
	
	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;
	
	    return spec[COMMAND_SET];
	  }
	
	  var nextValue = shallowCopy(value);
	
	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }
	
	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }
	
	  return nextValue;
	}
	
	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }
]);
//# sourceMappingURL=bundle.js.map