exports.ids = [8];
exports.modules = {

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(275);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("b1411cfa", content, true, context)
};

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("63c9496b", content, true)

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-440db40c]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-440db40c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-440db40c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-440db40c]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-440db40c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-440db40c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-440db40c]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-440db40c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-440db40c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-440db40c]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-440db40c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-440db40c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-440db40c],.use-text-paragraph[data-v-440db40c]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-440db40c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-440db40c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-440db40c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-440db40c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-440db40c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-440db40c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-440db40c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-440db40c]{display:none}}.notification[data-v-440db40c]{width:95%;margin:0 auto}@media(min-width:1280px){.notification[data-v-440db40c]{width:80%}}.notification[data-v-440db40c]  .v-snack__wrapper{width:100%;margin-bottom:16px;max-width:none;font-size:16px;color:#fff;background:#424242}@media(min-width:600px){.notification[data-v-440db40c]  .v-snack__wrapper{padding:4px 16px}}.notification[data-v-440db40c]  .v-snack__wrapper>div:first-child{display:flex;align-items:center}@media(min-width:600px){.notification[data-v-440db40c]  .v-snack__wrapper>div:first-child .action{flex:1}[dir=ltr] .notification[data-v-440db40c]  .v-snack__wrapper>div:first-child .action{margin-right:16px}[dir=rtl] .notification[data-v-440db40c]  .v-snack__wrapper>div:first-child .action{margin-left:16px}}@media(max-width:599px){.notification[data-v-440db40c]  .v-snack__wrapper>div:first-child .action{text-align:center}}.notification .button.v-btn[data-v-440db40c]{width:100%;box-shadow:none}@media(min-width:600px){.notification .button.v-btn[data-v-440db40c]{width:150px}}@media(max-width:599px){.notification .button.v-btn[data-v-440db40c]{margin:16px 0}}@media(max-width:599px){.action[data-v-440db40c]{width:100%;padding:0;margin:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(323);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("44c45d32", content, true, context)
};

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Notification; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=template&id=440db40c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-snackbar',{staticClass:"notification",attrs:{"timeout":-1},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('div',{staticClass:"action"},[_vm._v("\n    We appreciate you took time took your time to visit our website! May you have some good time.\n  ")]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"color":"secondary"},on:{"click":function($event){_vm.snackbar = false}}},[_vm._v("\n    Close\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=template&id=440db40c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  data() {
    return {
      snackbar: true
    };
  }

});
// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var Notification_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(245);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(282);

// CONCATENATED MODULE: ./components/Notification/Notification.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(274)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Notification_Notificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "440db40c",
  "68c07cd4"
  
)

/* harmony default export */ var Notification = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VSnackbar: VSnackbar["a" /* default */]})

// CONCATENATED MODULE: ./components/Notification/index.js


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(250);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */
).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },

    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },

    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },

    styles() {
      // Styles are not needed when
      // using the absolute prop.
      if (this.absolute) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application; // Should always move for y-axis
      // applicationable components.

      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(bottom + footer + insetFooter),
        paddingLeft: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(left),
        paddingRight: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "f"])(bar + top)
      };
    }

  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },

  mounted() {
    if (this.isActive) this.setTimeout();
  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq


    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },

  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "n"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "n"])(this)]);
    },

    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },

    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },

    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);

      if (!this.isActive || // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }

      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }

}));

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_5762b9a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_5762b9a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_5762b9a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_5762b9a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_5762b9a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_5762b9a0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-5762b9a0]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-5762b9a0]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5762b9a0]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5762b9a0]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-5762b9a0]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5762b9a0]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5762b9a0]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-5762b9a0]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5762b9a0]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5762b9a0]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5762b9a0]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5762b9a0]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5762b9a0],.use-text-paragraph[data-v-5762b9a0]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5762b9a0]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-5762b9a0]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5762b9a0]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5762b9a0]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5762b9a0]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5762b9a0]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5762b9a0]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5762b9a0]{display:none}}.main-wrap[data-v-5762b9a0]{position:relative;width:100%;overflow:hidden}.theme--light .main-wrap[data-v-5762b9a0]{color:rgba(0,0,0,.87)}.theme--dark .main-wrap[data-v-5762b9a0]{color:#fff;background-color:#303030}.theme--light .main-wrap[data-v-5762b9a0]{background-color:#fff}.space-bottom[data-v-5762b9a0]{margin-bottom:160px}.space-top[data-v-5762b9a0]{margin-top:160px}.container-wrap[data-v-5762b9a0]{margin-top:80px;padding:32px}.container-wrap>section[data-v-5762b9a0]{position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blank-page.vue?vue&type=template&id=5762b9a0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section id=\"home\" data-v-5762b9a0></section> "),_vm._ssrNode("<div class=\"main-wrap\" data-v-5762b9a0>","</div>",[_c('main-header',{attrs:{"invert":""}}),_vm._ssrNode(" <div class=\"container-wrap\" data-v-5762b9a0><section class=\"space-top space-bottom\" data-v-5762b9a0><h2 class=\"display-3 text-center mb-4\" data-v-5762b9a0>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t('common.title'))+"\n        ")+"</h2> <h4 class=\"display-1 text-center\" data-v-5762b9a0>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t('common.subtitle'))+"\n        ")+"</h4></section></div> "),_vm._ssrNode("<section class=\"spaceTop\" data-v-5762b9a0>","</section>",[_c('main-footer',{attrs:{"invert":""}})],1),_vm._ssrNode(" "),_c('notification')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blank-page.vue?vue&type=template&id=5762b9a0&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 26 modules
var Header = __webpack_require__(87);

// EXTERNAL MODULE: ./components/Footer/index.js
var Footer = __webpack_require__(92);

// EXTERNAL MODULE: ./components/Notification/index.js + 5 modules
var Notification = __webpack_require__(279);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blank-page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var blank_pagevue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    Notification: Notification["a" /* default */],
    'main-footer': Footer["a" /* default */]
  },

  head() {
    return {
      title: brand["a" /* default */].mobile.name + ' - Blank Page'
    };
  }

});
// CONCATENATED MODULE: ./pages/blank-page.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blank_pagevue_type_script_lang_js_ = (blank_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/blank-page.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(322)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blank_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5762b9a0",
  "45145a11"
  
)

/* harmony default export */ var blank_page = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blank-page.js.map