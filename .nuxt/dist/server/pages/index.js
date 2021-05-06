exports.ids = [10];
exports.modules = Array(247).concat([
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0f5d2562", content, true, context)
};

/***/ }),
/* 248 */
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
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VCardActions */
/* unused harmony export VCardSubtitle */
/* unused harmony export VCardText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "g"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("63c9496b", content, true)

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Large.vue?vue&type=template&id=57b8fb7c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap"},[(_vm.loaded)?_vm._ssrNode("<div class=\"inner-parallax large\" data-v-57b8fb7c>","</div>",[_c('parallax',{attrs:{"speed-factor":0,"section-height":400,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('svg',{staticClass:"triangle"},[_c('use',{attrs:{"xlink:href":"/images/mobile/triangle.svg#main"}})])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0,"section-height":400,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('svg',{staticClass:"circle"},[_c('use',{attrs:{"xlink:href":"/images/mobile/circle.svg#main"}})])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0,"section-height":300,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('div',{staticClass:"square-dot"},[_c('svg',{staticClass:"square"},[_c('use',{attrs:{"xlink:href":"/images/mobile/square.svg#main"}})]),_vm._v(" "),_c('svg',{staticClass:"dot"},[_c('use',{attrs:{"xlink:href":"/images/mobile/dot.svg#main"}})])])])])],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/Large.vue?vue&type=template&id=57b8fb7c&scoped=true&

// EXTERNAL MODULE: external "vue-parallaxy"
var external_vue_parallaxy_ = __webpack_require__(226);
var external_vue_parallaxy_default = /*#__PURE__*/__webpack_require__.n(external_vue_parallaxy_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Large.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Largevue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Large.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Largevue_type_script_lang_js_ = (Largevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Parallax/Large.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(263)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Parallax_Largevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "57b8fb7c",
  "0c0941ce"
  
)

/* harmony default export */ var Large = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("32a24a64", content, true, context)
};

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(287);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e82dff78", content, true, context)
};

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(289);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("8464d3de", content, true, context)
};

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c86e53fc", content, true, context)
};

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6ecd4468", content, true, context)
};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("74d2959b", content, true, context)
};

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("229e1f1c", content, true, context)
};

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("e23b7040", content, true)

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_57b8fb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_57b8fb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_57b8fb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_57b8fb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_57b8fb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Large_vue_vue_type_style_index_0_id_57b8fb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-57b8fb7c]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-57b8fb7c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-57b8fb7c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-57b8fb7c]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-57b8fb7c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-57b8fb7c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-57b8fb7c]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-57b8fb7c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-57b8fb7c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-57b8fb7c]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-57b8fb7c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-57b8fb7c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-57b8fb7c],.use-text-paragraph[data-v-57b8fb7c]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-57b8fb7c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-57b8fb7c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-57b8fb7c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-57b8fb7c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-57b8fb7c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-57b8fb7c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-57b8fb7c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-57b8fb7c]{display:none}}.parallax-wrap[data-v-57b8fb7c]{position:absolute;width:100%;height:100%;top:0;z-index:0}[dir=ltr] .parallax-wrap[data-v-57b8fb7c]{left:0}[dir=rtl] .parallax-wrap[data-v-57b8fb7c]{right:0}.parallax-wrap.dots-wrap[data-v-57b8fb7c]{z-index:40}@media(max-width:1279px){.parallax-wrap[data-v-57b8fb7c]{display:none}}.inner-parallax[data-v-57b8fb7c]{height:800px}.inner-parallax[data-v-57b8fb7c],.inner-parallax>div[data-v-57b8fb7c]{width:100%;position:absolute;display:block}.inner-parallax>div[data-v-57b8fb7c]{height:500px}.inner-parallax>div svg[data-v-57b8fb7c]{position:absolute;z-index:2}.inner-parallax[data-v-57b8fb7c]  .Masthead,.inner-parallax[data-v-57b8fb7c]  .Masthead__image{overflow:visible}.inner-parallax .figure>div[data-v-57b8fb7c]{display:block;position:absolute;top:200px;width:100%;height:700px}.inner-parallax .figure>div svg[data-v-57b8fb7c]{position:absolute}.triangle[data-v-57b8fb7c]{opacity:.2;width:60px;height:60px}.theme--light .triangle[data-v-57b8fb7c]{stroke:var(--v-primary-base)}.theme--dark .triangle[data-v-57b8fb7c]{stroke:var(--v-primarylight-base)}.circle[data-v-57b8fb7c]{stroke:var(--v-secondary-base);width:150px;height:150px;opacity:.2}.square[data-v-57b8fb7c]{fill:var(--v-primarylight-base);width:110px;height:110px;opacity:.2}[dir=ltr] .square[data-v-57b8fb7c]{left:-10px}[dir=rtl] .square[data-v-57b8fb7c]{right:-10px}.dot[data-v-57b8fb7c]{fill:var(--v-primarylight-base);width:140px;height:140px;top:-15px}[dir=ltr] .dot[data-v-57b8fb7c]{left:-10px}[dir=rtl] .dot[data-v-57b8fb7c]{right:-10px}.dot-many[data-v-57b8fb7c]{width:510px;height:510px;top:0;transform:rotate(30deg);transform-origin:left center}.theme--light .dot-many[data-v-57b8fb7c]{fill:var(--v-primary-base)}.theme--dark .dot-many[data-v-57b8fb7c]{fill:var(--v-primarylight-base)}[dir=ltr] .dot-many[data-v-57b8fb7c]{left:120px}[dir=rtl] .dot-many[data-v-57b8fb7c]{right:120px}.dot-many-small[data-v-57b8fb7c]{width:510px;height:510px;top:0;transform:rotate(30deg);transform-origin:left center;opacity:.4}.theme--light .dot-many-small[data-v-57b8fb7c]{fill:var(--v-primary-base)}.theme--dark .dot-many-small[data-v-57b8fb7c]{fill:var(--v-primarylight-base)}[dir=ltr] .dot-many-small[data-v-57b8fb7c]{left:-120px}[dir=rtl] .dot-many-small[data-v-57b8fb7c]{right:-120px}.square-dot[data-v-57b8fb7c]{position:absolute}.large .triangle[data-v-57b8fb7c]{top:400px}[dir=ltr] .large .triangle[data-v-57b8fb7c]{left:40px}[dir=rtl] .large .triangle[data-v-57b8fb7c]{right:40px}.large .circle[data-v-57b8fb7c]{top:600px}[dir=ltr] .large .circle[data-v-57b8fb7c]{left:70%}[dir=rtl] .large .circle[data-v-57b8fb7c]{right:70%}.large .square-dot[data-v-57b8fb7c]{top:600px!important}[dir=ltr] .large .square-dot[data-v-57b8fb7c]{left:50px}[dir=rtl] .large .square-dot[data-v-57b8fb7c]{right:50px}.medium .triangle[data-v-57b8fb7c]{top:-100px}[dir=ltr] .medium .triangle[data-v-57b8fb7c]{left:-100px}[dir=rtl] .medium .triangle[data-v-57b8fb7c]{right:-100px}.medium .circle[data-v-57b8fb7c]{top:-250px;transform:scale(.8)}[dir=ltr] .medium .circle[data-v-57b8fb7c]{right:-120px}[dir=rtl] .medium .circle[data-v-57b8fb7c]{left:-120px}[dir=ltr] .medium .square-dot[data-v-57b8fb7c]{left:0}[dir=rtl] .medium .square-dot[data-v-57b8fb7c]{right:0}.medium .square-dot .dot-many[data-v-57b8fb7c]{top:-550px;fill:var(--v-primarylight-base);opacity:.4}.small .triangle[data-v-57b8fb7c]{top:0}[dir=ltr] .small .triangle[data-v-57b8fb7c]{left:30px}[dir=rtl] .small .triangle[data-v-57b8fb7c]{right:30px}.small .circle[data-v-57b8fb7c]{top:-250px;transform:scale(.8)}[dir=ltr] .small .circle[data-v-57b8fb7c]{right:120px}[dir=rtl] .small .circle[data-v-57b8fb7c]{left:120px}.small .square-dot[data-v-57b8fb7c]{top:-50px}[dir=ltr] .small .square-dot[data-v-57b8fb7c]{left:0}[dir=rtl] .small .square-dot[data-v-57b8fb7c]{right:0}.small .square-dot .dot-many[data-v-57b8fb7c]{opacity:.4}.extra-small .triangle[data-v-57b8fb7c]{top:1600px;transform:scale(.8)}[dir=ltr] .extra-small .triangle[data-v-57b8fb7c]{left:10px}[dir=rtl] .extra-small .triangle[data-v-57b8fb7c]{right:10px}.extra-small .circle[data-v-57b8fb7c]{top:1400px;transform:scale(.8)}[dir=ltr] .extra-small .circle[data-v-57b8fb7c]{left:250px}[dir=rtl] .extra-small .circle[data-v-57b8fb7c]{right:250px}.extra-small .square-dot[data-v-57b8fb7c]{top:800px!important;transform:scale(.7)}[dir=ltr] .extra-small .square-dot[data-v-57b8fb7c]{left:30px}[dir=rtl] .extra-small .square-dot[data-v-57b8fb7c]{right:30px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(301);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("052d87ba", content, true, context)
};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(303);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2319795e", content, true, context)
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(305);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6ce54622", content, true, context)
};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9fd761f0", content, true, context)
};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(309);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("dc80ec9a", content, true, context)
};

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("685a8c12", content, true, context)
};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5ce8bebb", content, true, context)
};

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5872ce18", content, true, context)
};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9d36687e", content, true, context)
};

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_440db40c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-440db40c]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-440db40c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-440db40c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-440db40c]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-440db40c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-440db40c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-440db40c]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-440db40c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-440db40c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-440db40c]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-440db40c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-440db40c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-440db40c],.use-text-paragraph[data-v-440db40c]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-440db40c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-440db40c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-440db40c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-440db40c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-440db40c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-440db40c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-440db40c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-440db40c]{display:none}}.notification[data-v-440db40c]{width:95%;margin:0 auto}@media(min-width:1280px){.notification[data-v-440db40c]{width:80%}}.notification[data-v-440db40c]  .v-snack__wrapper{width:100%;margin-bottom:16px;max-width:none;font-size:16px;color:#fff;background:#424242}@media(min-width:600px){.notification[data-v-440db40c]  .v-snack__wrapper{padding:4px 16px}}.notification[data-v-440db40c]  .v-snack__wrapper>div:first-child{display:flex;align-items:center}@media(min-width:600px){.notification[data-v-440db40c]  .v-snack__wrapper>div:first-child .action{flex:1}[dir=ltr] .notification[data-v-440db40c]  .v-snack__wrapper>div:first-child .action{margin-right:16px}[dir=rtl] .notification[data-v-440db40c]  .v-snack__wrapper>div:first-child .action{margin-left:16px}}@media(max-width:599px){.notification[data-v-440db40c]  .v-snack__wrapper>div:first-child .action{text-align:center}}.notification .button.v-btn[data-v-440db40c]{width:100%;box-shadow:none}@media(min-width:600px){.notification .button.v-btn[data-v-440db40c]{width:150px}}@media(max-width:599px){.notification .button.v-btn[data-v-440db40c]{margin:16px 0}}@media(max-width:599px){.action[data-v-440db40c]{width:100%;padding:0;margin:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c101472e", content, true, context)
};

/***/ }),
/* 277 */,
/* 278 */,
/* 279 */
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
/* 280 */,
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/play-store.4b91a12.png";

/***/ }),
/* 282 */
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
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/app-store.307a2b6.png";

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59783c4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(253);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59783c4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59783c4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59783c4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59783c4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59783c4d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-59783c4d]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-59783c4d]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-59783c4d]{font-size:28px;line-height:44px}}.use-text-title2[data-v-59783c4d]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-59783c4d]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-59783c4d]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-59783c4d]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-59783c4d]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-59783c4d]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-59783c4d]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-59783c4d]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-59783c4d]{font-size:16px;line-height:24px}}.use-text-caption[data-v-59783c4d],.use-text-paragraph[data-v-59783c4d]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-59783c4d]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-59783c4d]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-59783c4d]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-59783c4d]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-59783c4d]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-59783c4d]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-59783c4d]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-59783c4d]{display:none}}.root[data-v-59783c4d]{position:relative;display:block}.background[data-v-59783c4d]{position:absolute;height:720px;top:0;width:55%}[dir=ltr] .background[data-v-59783c4d]{right:0}[dir=rtl] .background[data-v-59783c4d]{left:0}@media(min-width:1280px){.background[data-v-59783c4d]{width:50%}}@media(max-width:959px){.background[data-v-59783c4d]{height:260px}}@media(max-width:599px){.background[data-v-59783c4d]{display:none}}.background img[data-v-59783c4d]{position:absolute;top:0}[dir=ltr] .background img[data-v-59783c4d]{right:0}[dir=rtl] .background img[data-v-59783c4d]{left:0}.deco-inner[data-v-59783c4d]{position:absolute;top:0;opacity:.2}[dir=ltr] .deco-inner[data-v-59783c4d]{right:0}[dir=rtl] .deco-inner[data-v-59783c4d]{left:0}@media(max-width:1279px){.deco-inner[data-v-59783c4d]{display:none}}.gradient[data-v-59783c4d]{background-image:linear-gradient(30deg,var(--v-primary-base) 50%,var(--v-secondary-base) 140%);width:100%;height:100%}.gradient img[data-v-59783c4d]{display:block}.text[data-v-59783c4d]{height:680px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:10}@media(min-width:600px){[dir=ltr] .text[data-v-59783c4d]{padding-left:40px}[dir=rtl] .text[data-v-59783c4d]{padding-right:40px}[dir=ltr] .text[data-v-59783c4d]{padding-right:32px}[dir=rtl] .text[data-v-59783c4d]{padding-left:32px}}@media(max-width:599px){.text[data-v-59783c4d]{justify-content:flex-start;padding-top:160px;height:560px}}.text h3[data-v-59783c4d]{margin-top:64px}@media(max-width:599px){.text h3[data-v-59783c4d]{margin-top:0;text-align:center}}.text h3 strong[data-v-59783c4d]{font-weight:var(--font-bold)}.theme--light .text h3 strong[data-v-59783c4d]{color:var(--v-primary-base)}.theme--dark .text h3 strong[data-v-59783c4d]{color:var(--v-primarylight-base)}.text h5[data-v-59783c4d]{margin:32px 0}.theme--light .text h5[data-v-59783c4d]{color:rgba(0,0,0,.54)}.theme--dark .text h5[data-v-59783c4d]{color:hsla(0,0%,100%,.7)}@media(max-width:599px){.text h5[data-v-59783c4d]{text-align:center}}.btn-area[data-v-59783c4d]{text-align:center;display:flex}@media(max-width:599px){.btn-area[data-v-59783c4d]{justify-content:space-around}}@media(min-width:600px){[dir=ltr] .btn-area a[data-v-59783c4d]{margin-right:16px}[dir=rtl] .btn-area a[data-v-59783c4d]{margin-left:16px}}@media(max-width:599px){.btn-area a[data-v-59783c4d]{margin:4px}}.btn-area a img[data-v-59783c4d]{width:160px}@media(max-width:599px){.btn-area a img[data-v-59783c4d]{width:100%}}.decoration[data-v-59783c4d]{position:relative;height:100%}.deco-wave[data-v-59783c4d]{position:absolute;top:40px;width:102%;height:100%;background-repeat:no-repeat;background-position:0 0;background-size:100% 720px}[dir=ltr] .deco-wave[data-v-59783c4d]{left:-1px}[dir=rtl] .deco-wave[data-v-59783c4d]{right:-1px}.v-application--is-rtl .deco-wave[data-v-59783c4d]{transform:scaleX(-1)}.theme--light .deco-wave[data-v-59783c4d]{background-image:url(/images/mobile/deco-wave-light.png)}.theme--dark .deco-wave[data-v-59783c4d]{background-image:url(/images/mobile/deco-wave-dark.png)}@media(max-width:959px){.deco-wave[data-v-59783c4d]{background-size:100% 240px}}.deco-line[data-v-59783c4d]{position:absolute;top:-10px;opacity:.56;width:100%;height:100%;background-repeat:no-repeat;background-position:0 0;background-size:100% 700px}[dir=ltr] .deco-line[data-v-59783c4d]{left:-10px}[dir=rtl] .deco-line[data-v-59783c4d]{right:-10px}.v-application--is-rtl .deco-line[data-v-59783c4d]{transform:scaleX(-1)}.theme--light .deco-line[data-v-59783c4d]{background-image:url(/images/mobile/deco-line-light.png)}.theme--dark .deco-line[data-v-59783c4d]{background-image:url(/images/mobile/deco-line-dark.png)}.phone-illustration[data-v-59783c4d]{position:relative;height:100%}@media(max-width:1279px){[dir=ltr] .phone-illustration[data-v-59783c4d]{right:-80px}[dir=rtl] .phone-illustration[data-v-59783c4d]{left:-80px}}@media(max-width:959px){.phone-illustration[data-v-59783c4d]{top:200px}.theme--light .phone-illustration[data-v-59783c4d]{opacity:.8}.theme--dark .phone-illustration[data-v-59783c4d]{opacity:.4}[dir=ltr] .phone-illustration[data-v-59783c4d]{right:0}[dir=rtl] .phone-illustration[data-v-59783c4d]{left:0}}@media(max-width:599px){[dir=ltr] .phone-illustration[data-v-59783c4d]{right:-20px}[dir=rtl] .phone-illustration[data-v-59783c4d]{left:-20px}.theme--light .phone-illustration[data-v-59783c4d]{opacity:.4}.theme--dark .phone-illustration[data-v-59783c4d]{opacity:.2}}.phone-illustration img[data-v-59783c4d]{position:absolute}.phone[data-v-59783c4d]{width:600px;bottom:0}[dir=ltr] .phone[data-v-59783c4d]{right:-40px}[dir=rtl] .phone[data-v-59783c4d]{left:-40px}.widget-top[data-v-59783c4d]{width:150px;bottom:330px}[dir=ltr] .widget-top[data-v-59783c4d]{left:130px}[dir=rtl] .widget-top[data-v-59783c4d]{right:130px}.widget-top.fragment-fadeUp[data-v-59783c4d]{transition-delay:.2s}.widget-left[data-v-59783c4d]{width:170px;bottom:180px}[dir=ltr] .widget-left[data-v-59783c4d]{left:110px}[dir=rtl] .widget-left[data-v-59783c4d]{right:110px}.widget-left.fragment-fadeUp[data-v-59783c4d]{transition-delay:.3s}.widget-right[data-v-59783c4d]{width:170px;bottom:240px}[dir=ltr] .widget-right[data-v-59783c4d]{right:80px}[dir=rtl] .widget-right[data-v-59783c4d]{left:80px}.widget-right.fragment-fadeUp[data-v-59783c4d]{transition-delay:.4s}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_9d5d46e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_9d5d46e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_9d5d46e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_9d5d46e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_9d5d46e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_9d5d46e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-9d5d46e4]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-9d5d46e4]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-9d5d46e4]{font-size:28px;line-height:44px}}.use-text-title2[data-v-9d5d46e4]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-9d5d46e4]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-9d5d46e4]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-9d5d46e4]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-9d5d46e4]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-9d5d46e4]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-9d5d46e4]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-9d5d46e4]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-9d5d46e4]{font-size:16px;line-height:24px}}.use-text-caption[data-v-9d5d46e4],.use-text-paragraph[data-v-9d5d46e4]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-9d5d46e4]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-9d5d46e4]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-9d5d46e4]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-9d5d46e4]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-9d5d46e4]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-9d5d46e4]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-9d5d46e4]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-9d5d46e4]{display:none}}.counter-wrap[data-v-9d5d46e4]{margin:32px 0}@media(max-width:1279px){.counter-wrap[data-v-9d5d46e4]{margin:0}}.counter-item[data-v-9d5d46e4]{align-items:center;justify-content:center}.counter-item p[data-v-9d5d46e4]{text-transform:capitalize}.theme--light .counter-item p[data-v-9d5d46e4]{color:rgba(0,0,0,.54)}.theme--dark .counter-item p[data-v-9d5d46e4]{color:hsla(0,0%,100%,.7)}@media(max-width:599px){.counter-item p[data-v-9d5d46e4]{display:flex;justify-content:center}}.counter-item p i[data-v-9d5d46e4]{font-size:36px;line-height:42px}[dir=ltr] .counter-item p i[data-v-9d5d46e4]{margin-right:16px}[dir=rtl] .counter-item p i[data-v-9d5d46e4]{margin-left:16px}@media(max-width:599px){.counter-item p i[data-v-9d5d46e4]{font-size:28px;line-height:28px}}@media(min-width:960px){.counter-item[data-v-9d5d46e4]{display:flex}}.counter-item .text[data-v-9d5d46e4]{text-align:center}.counter-item .text h3[data-v-9d5d46e4]{position:relative;padding-bottom:16px}.theme--light .counter-item .text h3[data-v-9d5d46e4]{color:var(--v-primary-base)}.theme--dark .counter-item .text h3[data-v-9d5d46e4]{color:var(--v-primarylight-base)}.counter-inner>div[data-v-9d5d46e4]{position:relative}.counter-inner>div[data-v-9d5d46e4]:after{content:\"\";height:60px;position:absolute;top:30px}[dir=ltr] .counter-inner>div[data-v-9d5d46e4]:after{right:0}[dir=rtl] .counter-inner>div[data-v-9d5d46e4]:after{left:0}@media(min-width:600px){.counter-inner>div[data-v-9d5d46e4]:after{border-left:2px solid var(--v-primarylight-base)}}.counter-inner>div[data-v-9d5d46e4]:last-child:after{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Small_vue_vue_type_style_index_0_id_1a4d659c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Small_vue_vue_type_style_index_0_id_1a4d659c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Small_vue_vue_type_style_index_0_id_1a4d659c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Small_vue_vue_type_style_index_0_id_1a4d659c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Small_vue_vue_type_style_index_0_id_1a4d659c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Small_vue_vue_type_style_index_0_id_1a4d659c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-1a4d659c]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-1a4d659c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-1a4d659c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-1a4d659c]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-1a4d659c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-1a4d659c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-1a4d659c]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-1a4d659c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-1a4d659c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-1a4d659c]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-1a4d659c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-1a4d659c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-1a4d659c],.use-text-paragraph[data-v-1a4d659c]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-1a4d659c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-1a4d659c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-1a4d659c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-1a4d659c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-1a4d659c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-1a4d659c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-1a4d659c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-1a4d659c]{display:none}}.parallax-wrap[data-v-1a4d659c]{position:absolute;width:100%;height:100%;top:0;z-index:0}[dir=ltr] .parallax-wrap[data-v-1a4d659c]{left:0}[dir=rtl] .parallax-wrap[data-v-1a4d659c]{right:0}.parallax-wrap.dots-wrap[data-v-1a4d659c]{z-index:40}@media(max-width:1279px){.parallax-wrap[data-v-1a4d659c]{display:none}}.inner-parallax[data-v-1a4d659c]{height:800px}.inner-parallax[data-v-1a4d659c],.inner-parallax>div[data-v-1a4d659c]{width:100%;position:absolute;display:block}.inner-parallax>div[data-v-1a4d659c]{height:500px}.inner-parallax>div svg[data-v-1a4d659c]{position:absolute;z-index:2}.inner-parallax[data-v-1a4d659c]  .Masthead,.inner-parallax[data-v-1a4d659c]  .Masthead__image{overflow:visible}.inner-parallax .figure>div[data-v-1a4d659c]{display:block;position:absolute;top:200px;width:100%;height:700px}.inner-parallax .figure>div svg[data-v-1a4d659c]{position:absolute}.triangle[data-v-1a4d659c]{opacity:.2;width:60px;height:60px}.theme--light .triangle[data-v-1a4d659c]{stroke:var(--v-primary-base)}.theme--dark .triangle[data-v-1a4d659c]{stroke:var(--v-primarylight-base)}.circle[data-v-1a4d659c]{stroke:var(--v-secondary-base);width:150px;height:150px;opacity:.2}.square[data-v-1a4d659c]{fill:var(--v-primarylight-base);width:110px;height:110px;opacity:.2}[dir=ltr] .square[data-v-1a4d659c]{left:-10px}[dir=rtl] .square[data-v-1a4d659c]{right:-10px}.dot[data-v-1a4d659c]{fill:var(--v-primarylight-base);width:140px;height:140px;top:-15px}[dir=ltr] .dot[data-v-1a4d659c]{left:-10px}[dir=rtl] .dot[data-v-1a4d659c]{right:-10px}.dot-many[data-v-1a4d659c]{width:510px;height:510px;top:0;transform:rotate(30deg);transform-origin:left center}.theme--light .dot-many[data-v-1a4d659c]{fill:var(--v-primary-base)}.theme--dark .dot-many[data-v-1a4d659c]{fill:var(--v-primarylight-base)}[dir=ltr] .dot-many[data-v-1a4d659c]{left:120px}[dir=rtl] .dot-many[data-v-1a4d659c]{right:120px}.dot-many-small[data-v-1a4d659c]{width:510px;height:510px;top:0;transform:rotate(30deg);transform-origin:left center;opacity:.4}.theme--light .dot-many-small[data-v-1a4d659c]{fill:var(--v-primary-base)}.theme--dark .dot-many-small[data-v-1a4d659c]{fill:var(--v-primarylight-base)}[dir=ltr] .dot-many-small[data-v-1a4d659c]{left:-120px}[dir=rtl] .dot-many-small[data-v-1a4d659c]{right:-120px}.square-dot[data-v-1a4d659c]{position:absolute}.large .triangle[data-v-1a4d659c]{top:400px}[dir=ltr] .large .triangle[data-v-1a4d659c]{left:40px}[dir=rtl] .large .triangle[data-v-1a4d659c]{right:40px}.large .circle[data-v-1a4d659c]{top:600px}[dir=ltr] .large .circle[data-v-1a4d659c]{left:70%}[dir=rtl] .large .circle[data-v-1a4d659c]{right:70%}.large .square-dot[data-v-1a4d659c]{top:600px!important}[dir=ltr] .large .square-dot[data-v-1a4d659c]{left:50px}[dir=rtl] .large .square-dot[data-v-1a4d659c]{right:50px}.medium .triangle[data-v-1a4d659c]{top:-100px}[dir=ltr] .medium .triangle[data-v-1a4d659c]{left:-100px}[dir=rtl] .medium .triangle[data-v-1a4d659c]{right:-100px}.medium .circle[data-v-1a4d659c]{top:-250px;transform:scale(.8)}[dir=ltr] .medium .circle[data-v-1a4d659c]{right:-120px}[dir=rtl] .medium .circle[data-v-1a4d659c]{left:-120px}[dir=ltr] .medium .square-dot[data-v-1a4d659c]{left:0}[dir=rtl] .medium .square-dot[data-v-1a4d659c]{right:0}.medium .square-dot .dot-many[data-v-1a4d659c]{top:-550px;fill:var(--v-primarylight-base);opacity:.4}.small .triangle[data-v-1a4d659c]{top:0}[dir=ltr] .small .triangle[data-v-1a4d659c]{left:30px}[dir=rtl] .small .triangle[data-v-1a4d659c]{right:30px}.small .circle[data-v-1a4d659c]{top:-250px;transform:scale(.8)}[dir=ltr] .small .circle[data-v-1a4d659c]{right:120px}[dir=rtl] .small .circle[data-v-1a4d659c]{left:120px}.small .square-dot[data-v-1a4d659c]{top:-50px}[dir=ltr] .small .square-dot[data-v-1a4d659c]{left:0}[dir=rtl] .small .square-dot[data-v-1a4d659c]{right:0}.small .square-dot .dot-many[data-v-1a4d659c]{opacity:.4}.extra-small .triangle[data-v-1a4d659c]{top:1600px;transform:scale(.8)}[dir=ltr] .extra-small .triangle[data-v-1a4d659c]{left:10px}[dir=rtl] .extra-small .triangle[data-v-1a4d659c]{right:10px}.extra-small .circle[data-v-1a4d659c]{top:1400px;transform:scale(.8)}[dir=ltr] .extra-small .circle[data-v-1a4d659c]{left:250px}[dir=rtl] .extra-small .circle[data-v-1a4d659c]{right:250px}.extra-small .square-dot[data-v-1a4d659c]{top:800px!important;transform:scale(.7)}[dir=ltr] .extra-small .square-dot[data-v-1a4d659c]{left:30px}[dir=rtl] .extra-small .square-dot[data-v-1a4d659c]{right:30px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_4dc82364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_4dc82364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_4dc82364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_4dc82364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_4dc82364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Medium_vue_vue_type_style_index_0_id_4dc82364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-4dc82364]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4dc82364]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4dc82364]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4dc82364]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-4dc82364]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4dc82364]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4dc82364]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4dc82364]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4dc82364]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4dc82364]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4dc82364]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4dc82364]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4dc82364],.use-text-paragraph[data-v-4dc82364]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4dc82364]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4dc82364]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4dc82364]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4dc82364]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4dc82364]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4dc82364]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4dc82364]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4dc82364]{display:none}}.parallax-wrap[data-v-4dc82364]{position:absolute;width:100%;height:100%;top:0;z-index:0}[dir=ltr] .parallax-wrap[data-v-4dc82364]{left:0}[dir=rtl] .parallax-wrap[data-v-4dc82364]{right:0}.parallax-wrap.dots-wrap[data-v-4dc82364]{z-index:40}@media(max-width:1279px){.parallax-wrap[data-v-4dc82364]{display:none}}.inner-parallax[data-v-4dc82364]{height:800px}.inner-parallax[data-v-4dc82364],.inner-parallax>div[data-v-4dc82364]{width:100%;position:absolute;display:block}.inner-parallax>div[data-v-4dc82364]{height:500px}.inner-parallax>div svg[data-v-4dc82364]{position:absolute;z-index:2}.inner-parallax[data-v-4dc82364]  .Masthead,.inner-parallax[data-v-4dc82364]  .Masthead__image{overflow:visible}.inner-parallax .figure>div[data-v-4dc82364]{display:block;position:absolute;top:200px;width:100%;height:700px}.inner-parallax .figure>div svg[data-v-4dc82364]{position:absolute}.triangle[data-v-4dc82364]{opacity:.2;width:60px;height:60px}.theme--light .triangle[data-v-4dc82364]{stroke:var(--v-primary-base)}.theme--dark .triangle[data-v-4dc82364]{stroke:var(--v-primarylight-base)}.circle[data-v-4dc82364]{stroke:var(--v-secondary-base);width:150px;height:150px;opacity:.2}.square[data-v-4dc82364]{fill:var(--v-primarylight-base);width:110px;height:110px;opacity:.2}[dir=ltr] .square[data-v-4dc82364]{left:-10px}[dir=rtl] .square[data-v-4dc82364]{right:-10px}.dot[data-v-4dc82364]{fill:var(--v-primarylight-base);width:140px;height:140px;top:-15px}[dir=ltr] .dot[data-v-4dc82364]{left:-10px}[dir=rtl] .dot[data-v-4dc82364]{right:-10px}.dot-many[data-v-4dc82364]{width:510px;height:510px;top:0;transform:rotate(30deg);transform-origin:left center}.theme--light .dot-many[data-v-4dc82364]{fill:var(--v-primary-base)}.theme--dark .dot-many[data-v-4dc82364]{fill:var(--v-primarylight-base)}[dir=ltr] .dot-many[data-v-4dc82364]{left:120px}[dir=rtl] .dot-many[data-v-4dc82364]{right:120px}.dot-many-small[data-v-4dc82364]{width:510px;height:510px;top:0;transform:rotate(30deg);transform-origin:left center;opacity:.4}.theme--light .dot-many-small[data-v-4dc82364]{fill:var(--v-primary-base)}.theme--dark .dot-many-small[data-v-4dc82364]{fill:var(--v-primarylight-base)}[dir=ltr] .dot-many-small[data-v-4dc82364]{left:-120px}[dir=rtl] .dot-many-small[data-v-4dc82364]{right:-120px}.square-dot[data-v-4dc82364]{position:absolute}.large .triangle[data-v-4dc82364]{top:400px}[dir=ltr] .large .triangle[data-v-4dc82364]{left:40px}[dir=rtl] .large .triangle[data-v-4dc82364]{right:40px}.large .circle[data-v-4dc82364]{top:600px}[dir=ltr] .large .circle[data-v-4dc82364]{left:70%}[dir=rtl] .large .circle[data-v-4dc82364]{right:70%}.large .square-dot[data-v-4dc82364]{top:600px!important}[dir=ltr] .large .square-dot[data-v-4dc82364]{left:50px}[dir=rtl] .large .square-dot[data-v-4dc82364]{right:50px}.medium .triangle[data-v-4dc82364]{top:-100px}[dir=ltr] .medium .triangle[data-v-4dc82364]{left:-100px}[dir=rtl] .medium .triangle[data-v-4dc82364]{right:-100px}.medium .circle[data-v-4dc82364]{top:-250px;transform:scale(.8)}[dir=ltr] .medium .circle[data-v-4dc82364]{right:-120px}[dir=rtl] .medium .circle[data-v-4dc82364]{left:-120px}[dir=ltr] .medium .square-dot[data-v-4dc82364]{left:0}[dir=rtl] .medium .square-dot[data-v-4dc82364]{right:0}.medium .square-dot .dot-many[data-v-4dc82364]{top:-550px;fill:var(--v-primarylight-base);opacity:.4}.small .triangle[data-v-4dc82364]{top:0}[dir=ltr] .small .triangle[data-v-4dc82364]{left:30px}[dir=rtl] .small .triangle[data-v-4dc82364]{right:30px}.small .circle[data-v-4dc82364]{top:-250px;transform:scale(.8)}[dir=ltr] .small .circle[data-v-4dc82364]{right:120px}[dir=rtl] .small .circle[data-v-4dc82364]{left:120px}.small .square-dot[data-v-4dc82364]{top:-50px}[dir=ltr] .small .square-dot[data-v-4dc82364]{left:0}[dir=rtl] .small .square-dot[data-v-4dc82364]{right:0}.small .square-dot .dot-many[data-v-4dc82364]{opacity:.4}.extra-small .triangle[data-v-4dc82364]{top:1600px;transform:scale(.8)}[dir=ltr] .extra-small .triangle[data-v-4dc82364]{left:10px}[dir=rtl] .extra-small .triangle[data-v-4dc82364]{right:10px}.extra-small .circle[data-v-4dc82364]{top:1400px;transform:scale(.8)}[dir=ltr] .extra-small .circle[data-v-4dc82364]{left:250px}[dir=rtl] .extra-small .circle[data-v-4dc82364]{right:250px}.extra-small .square-dot[data-v-4dc82364]{top:800px!important;transform:scale(.7)}[dir=ltr] .extra-small .square-dot[data-v-4dc82364]{left:30px}[dir=rtl] .extra-small .square-dot[data-v-4dc82364]{right:30px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7e24a080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7e24a080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7e24a080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7e24a080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7e24a080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_7e24a080_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-7e24a080]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-7e24a080]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-7e24a080]{font-size:28px;line-height:44px}}.use-text-title2[data-v-7e24a080]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-7e24a080]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-7e24a080]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-7e24a080]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-7e24a080]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-7e24a080]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-7e24a080]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-7e24a080]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-7e24a080]{font-size:16px;line-height:24px}}.use-text-caption[data-v-7e24a080],.use-text-paragraph[data-v-7e24a080]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-7e24a080]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-7e24a080]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-7e24a080]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-7e24a080]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-7e24a080]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-7e24a080]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-7e24a080]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-7e24a080]{display:none}}[dir=ltr] .left[data-v-7e24a080]{text-align:left}[dir=rtl] .left[data-v-7e24a080]{text-align:right}[dir=ltr] .left[data-v-7e24a080]:after{left:0}[dir=rtl] .left[data-v-7e24a080]:after{right:0}[dir=ltr] .right[data-v-7e24a080]{text-align:right}[dir=rtl] .right[data-v-7e24a080]{text-align:left}[dir=ltr] .right[data-v-7e24a080]:after{right:0}[dir=rtl] .right[data-v-7e24a080]:after{left:0}.center[data-v-7e24a080]{text-align:center}[dir=ltr] .center[data-v-7e24a080]:after{left:50%}[dir=rtl] .center[data-v-7e24a080]:after{right:50%}[dir=ltr] .center[data-v-7e24a080]:after{margin-left:-35px}[dir=rtl] .center[data-v-7e24a080]:after{margin-right:-35px}.title-main[data-v-7e24a080]{display:block;position:relative;margin-bottom:80px}@media(max-width:599px){.title-main[data-v-7e24a080]{padding:0 24px}}.title-main h3[data-v-7e24a080]{font-weight:var(--font-bold);font-size:46px;text-transform:capitalize}.theme--light .title-main h3[data-v-7e24a080]{color:rgba(0,0,0,.87)}.theme--dark .title-main h3[data-v-7e24a080]{color:#fff}@media(max-width:1279px){.title-main h3[data-v-7e24a080]{font-size:38px;line-height:50px}}@media(max-width:599px){.title-main h3[data-v-7e24a080]{font-size:32px;line-height:42px}}.theme--light .title-main h3 span[data-v-7e24a080]{color:rgba(0,0,0,.54)}.theme--dark .title-main h3 span[data-v-7e24a080]{color:hsla(0,0%,100%,.7)}.title-main[data-v-7e24a080]:after{content:\"\";width:70px;height:12px;bottom:-32px;border-radius:12px;background-image:linear-gradient(-20deg,var(--v-primarylight-base),var(--v-secondarylight-base));position:absolute}.theme--light .title-main strong[data-v-7e24a080]{color:rgba(0,0,0,.87)}.theme--dark .title-main strong[data-v-7e24a080]{color:#fff}[dir=ltr] .title-main.left[data-v-7e24a080]:after{left:0}[dir=ltr] .title-main.right[data-v-7e24a080]:after,[dir=rtl] .title-main.left[data-v-7e24a080]:after{right:0}[dir=rtl] .title-main.right[data-v-7e24a080]:after{left:0}[dir=ltr] .title-main.center[data-v-7e24a080]:after{left:50%}[dir=rtl] .title-main.center[data-v-7e24a080]:after{right:50%}[dir=ltr] .title-main.center[data-v-7e24a080]:after{margin-left:-35px}[dir=rtl] .title-main.center[data-v-7e24a080]:after{margin-right:-35px}.title-main.dark h3[data-v-7e24a080]{color:#fff}.title-secondary[data-v-7e24a080]{display:block;position:relative;margin:32px 0}@media(max-width:959px){.title-secondary[data-v-7e24a080]{margin:0 0 32px}}.title-secondary h4[data-v-7e24a080]{font-size:32px;font-weight:var(--font-medium)}.theme--light .title-secondary h4[data-v-7e24a080]{color:rgba(0,0,0,.87)}.theme--dark .title-secondary h4[data-v-7e24a080]{color:#fff}@media(max-width:599px){.title-secondary h4[data-v-7e24a080]{font-size:24px;line-height:36px}}.title-secondary[data-v-7e24a080]:after{content:\"\";width:17px;height:17px;border-radius:50%;position:absolute}.theme--light .title-secondary[data-v-7e24a080]:after{background:var(--v-secondarylight-base)}.theme--dark .title-secondary[data-v-7e24a080]:after{background:var(--v-secondarydark-base)}[dir=ltr] .title-secondary.left[data-v-7e24a080]{padding-left:32px}[dir=rtl] .title-secondary.left[data-v-7e24a080]{padding-right:32px}.title-secondary.left[data-v-7e24a080]:after{top:12px}[dir=ltr] .title-secondary.left[data-v-7e24a080]:after{left:0}[dir=rtl] .title-secondary.left[data-v-7e24a080]:after{right:0}[dir=ltr] .title-secondary.right[data-v-7e24a080]{padding-right:32px}[dir=rtl] .title-secondary.right[data-v-7e24a080]{padding-left:32px}.title-secondary.right[data-v-7e24a080]:after{top:12px}[dir=ltr] .title-secondary.right[data-v-7e24a080]:after{right:0}[dir=rtl] .title-secondary.right[data-v-7e24a080]:after{left:0}.title-secondary.center[data-v-7e24a080]{margin-bottom:48px}.title-secondary.center[data-v-7e24a080]:after{bottom:-35px}[dir=ltr] .title-secondary.center[data-v-7e24a080]:after{left:50%}[dir=rtl] .title-secondary.center[data-v-7e24a080]:after{right:50%}[dir=ltr] .title-secondary.center[data-v-7e24a080]:after{margin-left:-8px}[dir=rtl] .title-secondary.center[data-v-7e24a080]:after{margin-right:-8px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_36931d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_36931d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_36931d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_36931d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_36931d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TitleSecondary_vue_vue_type_style_index_0_id_36931d3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-36931d3a]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-36931d3a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-36931d3a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-36931d3a]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-36931d3a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-36931d3a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-36931d3a]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-36931d3a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-36931d3a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-36931d3a]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-36931d3a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-36931d3a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-36931d3a],.use-text-paragraph[data-v-36931d3a]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-36931d3a]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-36931d3a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-36931d3a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-36931d3a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-36931d3a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-36931d3a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-36931d3a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-36931d3a]{display:none}}[dir=ltr] .left[data-v-36931d3a]{text-align:left}[dir=rtl] .left[data-v-36931d3a]{text-align:right}[dir=ltr] .left[data-v-36931d3a]:after{left:0}[dir=rtl] .left[data-v-36931d3a]:after{right:0}[dir=ltr] .right[data-v-36931d3a]{text-align:right}[dir=rtl] .right[data-v-36931d3a]{text-align:left}[dir=ltr] .right[data-v-36931d3a]:after{right:0}[dir=rtl] .right[data-v-36931d3a]:after{left:0}.center[data-v-36931d3a]{text-align:center}[dir=ltr] .center[data-v-36931d3a]:after{left:50%}[dir=rtl] .center[data-v-36931d3a]:after{right:50%}[dir=ltr] .center[data-v-36931d3a]:after{margin-left:-35px}[dir=rtl] .center[data-v-36931d3a]:after{margin-right:-35px}.title-main[data-v-36931d3a]{display:block;position:relative;margin-bottom:80px}@media(max-width:599px){.title-main[data-v-36931d3a]{padding:0 24px}}.title-main h3[data-v-36931d3a]{font-weight:var(--font-bold);font-size:46px;text-transform:capitalize}.theme--light .title-main h3[data-v-36931d3a]{color:rgba(0,0,0,.87)}.theme--dark .title-main h3[data-v-36931d3a]{color:#fff}@media(max-width:1279px){.title-main h3[data-v-36931d3a]{font-size:38px;line-height:50px}}@media(max-width:599px){.title-main h3[data-v-36931d3a]{font-size:32px;line-height:42px}}.theme--light .title-main h3 span[data-v-36931d3a]{color:rgba(0,0,0,.54)}.theme--dark .title-main h3 span[data-v-36931d3a]{color:hsla(0,0%,100%,.7)}.title-main[data-v-36931d3a]:after{content:\"\";width:70px;height:12px;bottom:-32px;border-radius:12px;background-image:linear-gradient(-20deg,var(--v-primarylight-base),var(--v-secondarylight-base));position:absolute}.theme--light .title-main strong[data-v-36931d3a]{color:rgba(0,0,0,.87)}.theme--dark .title-main strong[data-v-36931d3a]{color:#fff}[dir=ltr] .title-main.left[data-v-36931d3a]:after{left:0}[dir=ltr] .title-main.right[data-v-36931d3a]:after,[dir=rtl] .title-main.left[data-v-36931d3a]:after{right:0}[dir=rtl] .title-main.right[data-v-36931d3a]:after{left:0}[dir=ltr] .title-main.center[data-v-36931d3a]:after{left:50%}[dir=rtl] .title-main.center[data-v-36931d3a]:after{right:50%}[dir=ltr] .title-main.center[data-v-36931d3a]:after{margin-left:-35px}[dir=rtl] .title-main.center[data-v-36931d3a]:after{margin-right:-35px}.title-main.dark h3[data-v-36931d3a]{color:#fff}.title-secondary[data-v-36931d3a]{display:block;position:relative;margin:32px 0}@media(max-width:959px){.title-secondary[data-v-36931d3a]{margin:0 0 32px}}.title-secondary h4[data-v-36931d3a]{font-size:32px;font-weight:var(--font-medium)}.theme--light .title-secondary h4[data-v-36931d3a]{color:rgba(0,0,0,.87)}.theme--dark .title-secondary h4[data-v-36931d3a]{color:#fff}@media(max-width:599px){.title-secondary h4[data-v-36931d3a]{font-size:24px;line-height:36px}}.title-secondary[data-v-36931d3a]:after{content:\"\";width:17px;height:17px;border-radius:50%;position:absolute}.theme--light .title-secondary[data-v-36931d3a]:after{background:var(--v-secondarylight-base)}.theme--dark .title-secondary[data-v-36931d3a]:after{background:var(--v-secondarydark-base)}[dir=ltr] .title-secondary.left[data-v-36931d3a]{padding-left:32px}[dir=rtl] .title-secondary.left[data-v-36931d3a]{padding-right:32px}.title-secondary.left[data-v-36931d3a]:after{top:12px}[dir=ltr] .title-secondary.left[data-v-36931d3a]:after{left:0}[dir=rtl] .title-secondary.left[data-v-36931d3a]:after{right:0}[dir=ltr] .title-secondary.right[data-v-36931d3a]{padding-right:32px}[dir=rtl] .title-secondary.right[data-v-36931d3a]{padding-left:32px}.title-secondary.right[data-v-36931d3a]:after{top:12px}[dir=ltr] .title-secondary.right[data-v-36931d3a]:after{right:0}[dir=rtl] .title-secondary.right[data-v-36931d3a]:after{left:0}.title-secondary.center[data-v-36931d3a]{margin-bottom:48px}.title-secondary.center[data-v-36931d3a]:after{bottom:-35px}[dir=ltr] .title-secondary.center[data-v-36931d3a]:after{left:50%}[dir=rtl] .title-secondary.center[data-v-36931d3a]:after{right:50%}[dir=ltr] .title-secondary.center[data-v-36931d3a]:after{margin-left:-8px}[dir=rtl] .title-secondary.center[data-v-36931d3a]:after{margin-right:-8px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_48b0f333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(259);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_48b0f333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_48b0f333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_48b0f333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_48b0f333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Feature_vue_vue_type_style_index_0_id_48b0f333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-48b0f333]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-48b0f333]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-48b0f333]{font-size:28px;line-height:44px}}.use-text-title2[data-v-48b0f333]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-48b0f333]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-48b0f333]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-48b0f333]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-48b0f333]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-48b0f333]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-48b0f333]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-48b0f333]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-48b0f333]{font-size:16px;line-height:24px}}.use-text-caption[data-v-48b0f333],.use-text-paragraph[data-v-48b0f333]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-48b0f333]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-48b0f333]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-48b0f333]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-48b0f333]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-48b0f333]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-48b0f333]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-48b0f333]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-48b0f333]{display:none}}.deco-primary[data-v-48b0f333]{width:450px;height:450px;position:absolute;top:80px}.theme--light .deco-primary[data-v-48b0f333]{fill:var(--v-primarylight-base)}.theme--dark .deco-primary[data-v-48b0f333]{fill:var(--v-primarydark-base)}@media(max-width:959px){.deco-primary[data-v-48b0f333]{top:0}}[dir=ltr] .deco-primary[data-v-48b0f333]{right:40px}[dir=rtl] .deco-primary[data-v-48b0f333]{left:40px}.deco-secondary[data-v-48b0f333]{width:450px;height:450px;position:absolute;top:80px}.theme--light .deco-secondary[data-v-48b0f333]{fill:var(--v-secondarylight-base)}.theme--dark .deco-secondary[data-v-48b0f333]{fill:var(--v-secondarydark-base)}@media(max-width:959px){.deco-secondary[data-v-48b0f333]{top:0}}[dir=ltr] .deco-secondary[data-v-48b0f333]{right:40px}[dir=rtl] .deco-secondary[data-v-48b0f333]{left:40px}.first[data-v-48b0f333]{z-index:10}.first[data-v-48b0f333],.last[data-v-48b0f333]{position:relative}.last[data-v-48b0f333]{z-index:30;margin-bottom:-560px}@media(min-width:1920px){.last[data-v-48b0f333]{margin-bottom:-320px}}.deco-primary-big[data-v-48b0f333]{fill:var(--v-primarydark-base);width:500px;height:500px;top:-40px;position:absolute}[dir=ltr] .deco-primary-big[data-v-48b0f333]{left:80px}[dir=rtl] .deco-primary-big[data-v-48b0f333]{right:80px}@media(max-width:599px){.deco-primary-big[data-v-48b0f333]{top:-100px;transform:scale(.5)}}.bg-color[data-v-48b0f333]{padding:160px 0;margin-top:-160px}.bg-color[data-v-48b0f333],.theme--light .bg-color[data-v-48b0f333]{position:relative}.theme--light .bg-color[data-v-48b0f333]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:var(--v-primarylight-base);opacity:.2}.theme--dark .bg-color[data-v-48b0f333]{background-color:var(--v-primarylight-base);position:relative}.theme--dark .bg-color[data-v-48b0f333]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:.65}.deco-bg-top[data-v-48b0f333]{background-repeat:no-repeat;background-color:transparent;background-size:100% auto;position:absolute;width:100%;height:550px;top:0}.theme--light .deco-bg-top[data-v-48b0f333]{background-image:url(/images/mobile/deco-light-top.svg)}.theme--dark .deco-bg-top[data-v-48b0f333]{background-image:url(/images/mobile/deco-dark-top.svg)}[dir=ltr] .deco-bg-top[data-v-48b0f333]{left:0}[dir=rtl] .deco-bg-top[data-v-48b0f333]{right:0}.deco-bg-top[data-v-48b0f333]:after{content:\"\";background-repeat:no-repeat;background-color:transparent;background-size:100% auto;position:absolute;width:100%;height:550px;opacity:.5;top:20px}.theme--light .deco-bg-top[data-v-48b0f333]:after{background-image:url(/images/mobile/deco-light-top.svg)}.theme--dark .deco-bg-top[data-v-48b0f333]:after{background-image:url(/images/mobile/deco-dark-top.svg)}[dir=ltr] .deco-bg-top[data-v-48b0f333]:after{left:20px}[dir=rtl] .deco-bg-top[data-v-48b0f333]:after{right:20px}.item[data-v-48b0f333]{position:relative;padding-bottom:40px}.item p[data-v-48b0f333]{margin-bottom:8px}@media(max-width:599px){.item>div[data-v-48b0f333]{padding:0}}@media(min-width:960px){.text[data-v-48b0f333]{padding-top:96px}}@media(max-width:959px){.text[data-v-48b0f333]{text-align:center}}.screen[data-v-48b0f333]{position:relative}.screen img[data-v-48b0f333]{display:block;width:400px;margin:0 auto}@media(max-width:959px){.screen img[data-v-48b0f333]{width:320px;margin:0 auto}}.video[data-v-48b0f333]{overflow:hidden;font-weight:var(--font-bold);text-align:center;width:100%;position:relative;height:300px}@media(max-width:599px){.video[data-v-48b0f333]{height:180px}}.video img[data-v-48b0f333]{position:absolute;width:100%;min-height:100%}[dir=ltr] .video img[data-v-48b0f333]{left:0}[dir=rtl] .video img[data-v-48b0f333]{right:0}.video h6[data-v-48b0f333]{font-weight:var(--font-bold);text-align:center;position:relative;margin:64px 0 32px}@media(max-width:599px){.video h6[data-v-48b0f333]{margin:32px 0}}.video .button[data-v-48b0f333]{background:var(--v-primary-base);width:64px;height:64px;line-height:64px}.video .button i[data-v-48b0f333]{font-size:26px;color:#fff;transform:scale(1.7) translateX(2px)}.graphic[data-v-48b0f333]{position:absolute}.graphic img[data-v-48b0f333]{width:90%;display:block}.tab-content[data-v-48b0f333]{position:relative;padding:64px 32px}.tab-label[data-v-48b0f333]{font-size:18px;border-bottom:1px solid}.theme--light .tab-label[data-v-48b0f333]{border-bottom-color:rgba(0,0,0,.38)}.theme--dark .tab-label[data-v-48b0f333]{border-bottom-color:hsla(0,0%,100%,.5)}.illustration-left[data-v-48b0f333]{position:relative}.illustration-left .screen[data-v-48b0f333]{margin:0}@media(min-width:960px){.illustration-left .screen[data-v-48b0f333]{margin-top:-50px}}@media(max-width:959px){[dir=ltr] .illustration-left .screen[data-v-48b0f333]{margin-left:-160px}[dir=rtl] .illustration-left .screen[data-v-48b0f333]{margin-right:-160px}}@media(max-width:599px){[dir=ltr] .illustration-left .screen[data-v-48b0f333]{margin-left:8px}[dir=rtl] .illustration-left .screen[data-v-48b0f333]{margin-right:8px}}.illustration-right[data-v-48b0f333]{position:relative}@media(min-width:960px){.illustration-right .screen[data-v-48b0f333]{top:-40px}[dir=ltr] .illustration-right .screen[data-v-48b0f333]{left:20px}[dir=rtl] .illustration-right .screen[data-v-48b0f333]{right:20px}}@media(max-width:599px){[dir=ltr] .illustration-right .screen[data-v-48b0f333]{margin-left:8px}[dir=rtl] .illustration-right .screen[data-v-48b0f333]{margin-right:8px}}.illustration-center[data-v-48b0f333]{position:relative;margin-top:80px}@media(max-width:599px){.illustration-center[data-v-48b0f333]{margin-top:24px}}.video-popup[data-v-48b0f333]{max-width:none}@media(min-width:600px){.video-popup[data-v-48b0f333]{width:690px}}@media(max-width:599px){.video-popup[data-v-48b0f333] iframe{width:100%}}.headline .title-main[data-v-48b0f333]{font-size:1.25rem;font-weight:var(--font-medium);line-height:2rem;letter-spacing:.0125em;width:100%;display:flex;justify-content:space-between}.close-btn[data-v-48b0f333]{position:absolute;top:4px}[dir=ltr] .close-btn[data-v-48b0f333]{right:40px}[dir=rtl] .close-btn[data-v-48b0f333]{left:40px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(299);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("2065bca8", content, true)

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_4d86602e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_4d86602e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_4d86602e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_4d86602e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_4d86602e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_4d86602e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-4d86602e]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4d86602e]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4d86602e]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4d86602e]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-4d86602e]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4d86602e]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4d86602e]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4d86602e]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4d86602e]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4d86602e]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4d86602e]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4d86602e]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4d86602e],.use-text-paragraph[data-v-4d86602e]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4d86602e]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4d86602e]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4d86602e]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4d86602e]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4d86602e]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4d86602e]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4d86602e]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4d86602e]{display:none}}.root[data-v-4d86602e]{padding-top:640px}.theme--light .root[data-v-4d86602e]{background-image:linear-gradient(185deg,var(--v-primary-base) 50%,var(--v-secondary-base))}.theme--dark .root[data-v-4d86602e]{background-image:linear-gradient(185deg,var(--v-primarydark-base) 50%,var(--v-secondarydark-base))}@media(max-width:1279px){.root[data-v-4d86602e]{padding-top:560px}}@media(min-width:1920px){.root[data-v-4d86602e]{padding-top:400px}}@media(max-width:599px){.root[data-v-4d86602e]{padding:480px 24px 0}}@media only screen and (max-width:330px){.root[data-v-4d86602e]{padding:480px 0 0}}.deco-top[data-v-4d86602e]{height:300px;width:100%;position:absolute;top:-3px}[dir=ltr] .deco-top[data-v-4d86602e]{left:0}[dir=rtl] .deco-top[data-v-4d86602e]{right:0}.deco-top.back[data-v-4d86602e]{fill:var(--v-primarylight-base)}.theme--light .deco-top.cover[data-v-4d86602e]{fill:#fff}.theme--dark .deco-top.cover[data-v-4d86602e]{fill:#000}.theme--light .deco-top.cover[data-v-4d86602e]{opacity:.8}.theme--dark .deco-top.cover[data-v-4d86602e]{opacity:.65}@media(min-width:1280px){.deco-top[data-v-4d86602e]{transform:scaleX(1.5)}}@media(min-width:1920px){.deco-top[data-v-4d86602e]{display:none}}.deco-bottom[data-v-4d86602e]{height:300px;width:100%;position:absolute;bottom:-70px;z-index:21}@media(min-width:1280px){.deco-bottom[data-v-4d86602e]{transform:scaleX(1.5)}}@media(min-width:1920px){.deco-bottom[data-v-4d86602e]{display:none}}@media(max-width:959px){.deco-bottom[data-v-4d86602e]{width:1280px}[dir=ltr] .deco-bottom[data-v-4d86602e]{left:-50%}[dir=rtl] .deco-bottom[data-v-4d86602e]{right:-50%}}@media(max-width:599px){.deco-bottom[data-v-4d86602e]{display:none}}.deco-bottom.back[data-v-4d86602e]{fill:var(--v-primarylight-base)}.theme--light .deco-bottom.cover[data-v-4d86602e]{fill:#fff}.theme--dark .deco-bottom.cover[data-v-4d86602e]{fill:#000}.theme--light .deco-bottom.cover[data-v-4d86602e]{opacity:.8}.theme--dark .deco-bottom.cover[data-v-4d86602e]{opacity:.65}.deco-bottom-mobile[data-v-4d86602e]{display:none;height:140px;width:140%;position:absolute;bottom:-40px;border-radius:50%;z-index:21}[dir=ltr] .deco-bottom-mobile[data-v-4d86602e]{left:-20%}[dir=rtl] .deco-bottom-mobile[data-v-4d86602e]{right:-20%}.theme--light .deco-bottom-mobile[data-v-4d86602e]{background-color:var(--v-primarylight-base);position:relative}.theme--light .deco-bottom-mobile[data-v-4d86602e]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#fff;opacity:.8}.theme--dark .deco-bottom-mobile[data-v-4d86602e]{background-color:var(--v-primarylight-base);position:relative}.theme--dark .deco-bottom-mobile[data-v-4d86602e]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:.65}.deco-bottom-mobile[data-v-4d86602e]:before{border-radius:50%}@media(max-width:599px){.deco-bottom-mobile[data-v-4d86602e]{display:block}}.invert-parallax[data-v-4d86602e]{filter:brightness(0) invert(1);position:absolute;opacity:.5;bottom:600px;width:100%;height:100%}[dir=ltr] .invert-parallax[data-v-4d86602e]{left:0}[dir=rtl] .invert-parallax[data-v-4d86602e]{right:0}.carousel-wrap[data-v-4d86602e]{position:relative;z-index:20}@media(min-width:1280px){.carousel-wrap[data-v-4d86602e]{padding-top:80px}}@media(max-width:599px){.carousel-wrap[data-v-4d86602e]{padding-top:40px}}.item[data-v-4d86602e]{position:relative}.item[data-v-4d86602e]:focus{outline:none}.frame[data-v-4d86602e]{padding:8px;margin:0 auto;border-radius:20px;background:#fff!important}.frame img[data-v-4d86602e]{display:block;width:100%}@media(min-width:1920px){.carousel-side[data-v-4d86602e]{max-width:1440px;margin:0 auto}}@media(max-width:599px){.carousel-side[data-v-4d86602e]{display:none}}.carousel-side .frame[data-v-4d86602e]{width:200px;height:410px}@media(max-width:1279px){.carousel-side .frame[data-v-4d86602e]{width:166px;height:365px}}.carousel-center[data-v-4d86602e]{width:320px;overflow:hidden}@media(min-width:600px){.carousel-center[data-v-4d86602e]{position:absolute;bottom:0}[dir=ltr] .carousel-center[data-v-4d86602e]{left:50%}[dir=rtl] .carousel-center[data-v-4d86602e]{right:50%}.v-application--is-ltr .carousel-center[data-v-4d86602e]{transform:translateX(-50%)}.v-application--is-rtl .carousel-center[data-v-4d86602e]{transform:translateX(50%)}}@media(min-width:1280px){.carousel-center[data-v-4d86602e]{bottom:-60px}}@media(max-width:599px){.carousel-center[data-v-4d86602e]{margin:0 auto}}.carousel-center .frame[data-v-4d86602e]{width:249px;height:548px;position:relative}@media(min-width:600px)and (max-width:959px){.carousel-center .frame[data-v-4d86602e]{width:166px;height:365px}}@media(min-width:960px)and (max-width:1279px){.carousel-center .frame[data-v-4d86602e]{width:166px;height:365px}}.carousel-center .frame img[data-v-4d86602e]{transition:all .3s ease-out;transform:translateY(30px)}.carousel-center[data-v-4d86602e]  .slick-list{overflow:visible}.carousel-center[data-v-4d86602e]  .slick-active img{transform:translate(0)}.carousel-center[data-v-4d86602e]  .slick-active .widget{transform:scale(1.2);opacity:1}.widget[data-v-4d86602e]{position:absolute;top:30px;transform:scale(1);opacity:0;transition:all .4s ease-out;transition-delay:.3s;z-index:2}[dir=ltr] .widget[data-v-4d86602e]{left:0}[dir=rtl] .widget[data-v-4d86602e]{right:0}.widget img[data-v-4d86602e]{width:100%}.pagination[data-v-4d86602e]{z-index:90;position:relative}@media(max-width:599px){.pagination[data-v-4d86602e]{margin-top:-64px}}.pagination ul[data-v-4d86602e]{position:absolute;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center;bottom:-48px}.pagination ul li[data-v-4d86602e]{position:relative;display:inline-block;width:15px;height:15px;margin:0 5px;padding:0;background:var(--v-secondary-base);border-radius:15px;transition:all .5s ease-out}.pagination ul li.active[data-v-4d86602e]{width:40px}.pagination ul li[data-v-4d86602e]:hover{opacity:.5}.pagination ul li button[data-v-4d86602e]{opacity:0;cursor:pointer;padding:0;width:100%;height:100%;position:absolute;top:0;left:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_52f82234_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(266);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_52f82234_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_52f82234_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_52f82234_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_52f82234_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_52f82234_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-52f82234]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-52f82234]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-52f82234]{font-size:28px;line-height:44px}}.use-text-title2[data-v-52f82234]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-52f82234]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-52f82234]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-52f82234]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-52f82234]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-52f82234]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-52f82234]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-52f82234]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-52f82234]{font-size:16px;line-height:24px}}.use-text-caption[data-v-52f82234],.use-text-paragraph[data-v-52f82234]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-52f82234]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-52f82234]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-52f82234]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-52f82234]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-52f82234]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-52f82234]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-52f82234]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-52f82234]{display:none}}.root[data-v-52f82234]{position:relative;z-index:30;min-height:400px;padding-top:160px}.theme--light .root[data-v-52f82234]{background-color:var(--v-primarylight-base);position:relative}.theme--light .root[data-v-52f82234]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#fff;opacity:.8}.theme--dark .root[data-v-52f82234]{background-color:var(--v-primarylight-base);position:relative}.theme--dark .root[data-v-52f82234]:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:.65}.carousel-wrap[data-v-52f82234]{position:relative;z-index:1;text-align:center}.item[data-v-52f82234]:focus{outline:none}.content[data-v-52f82234]{font-style:italic;font-size:18px}@media(max-width:599px){.content[data-v-52f82234]{font-size:16px}}.name[data-v-52f82234]{margin:16px 0 32px}.theme--light .name[data-v-52f82234]{color:var(--v-primary-base)}.theme--dark .name[data-v-52f82234]{color:var(--v-primarylight-base)}.name strong[data-v-52f82234]{font-weight:var(--font-bold)}.carousel-text .item[data-v-52f82234]{position:relative}.carousel-avatar[data-v-52f82234]{margin:0 auto}@media(min-width:600px){.carousel-avatar[data-v-52f82234]{width:768px}}.carousel-avatar .item[data-v-52f82234]{cursor:pointer;height:140px;padding-top:16px}.carousel-avatar[data-v-52f82234]  .slick-center .avatar{opacity:1;transform:scale(1.4)}.avatar[data-v-52f82234]{border:4px solid #fff;width:80px!important;height:80px!important;margin:0 auto;opacity:.7;transition:all .3s ease}.deco-bg-bottom[data-v-52f82234]{background-repeat:no-repeat;background-color:transparent;background-size:100% auto;transform:rotate(180deg) scaleY(.4);position:absolute;width:100%;height:470px;bottom:-145px}.theme--light .deco-bg-bottom[data-v-52f82234]{background-image:url(/images/mobile/deco-light-top.svg)}.theme--dark .deco-bg-bottom[data-v-52f82234]{background-image:url(/images/mobile/deco-dark-top.svg)}[dir=ltr] .deco-bg-bottom[data-v-52f82234]{left:0}[dir=rtl] .deco-bg-bottom[data-v-52f82234]{right:0}.deco-bg-bottom[data-v-52f82234]:after{content:\"\";background-repeat:no-repeat;background-color:transparent;background-size:100% auto;position:absolute;width:100%;height:470px;opacity:.5;top:60px}.theme--light .deco-bg-bottom[data-v-52f82234]:after{background-image:url(/images/mobile/deco-light-top.svg)}.theme--dark .deco-bg-bottom[data-v-52f82234]:after{background-image:url(/images/mobile/deco-dark-top.svg)}[dir=ltr] .deco-bg-bottom[data-v-52f82234]:after{left:60px}[dir=rtl] .deco-bg-bottom[data-v-52f82234]:after{right:60px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraSmall_vue_vue_type_style_index_0_id_5b1703b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraSmall_vue_vue_type_style_index_0_id_5b1703b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraSmall_vue_vue_type_style_index_0_id_5b1703b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraSmall_vue_vue_type_style_index_0_id_5b1703b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraSmall_vue_vue_type_style_index_0_id_5b1703b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraSmall_vue_vue_type_style_index_0_id_5b1703b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-5b1703b0]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-5b1703b0]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5b1703b0]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5b1703b0]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-5b1703b0]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5b1703b0]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5b1703b0]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-5b1703b0]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5b1703b0]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5b1703b0]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5b1703b0]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5b1703b0]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5b1703b0],.use-text-paragraph[data-v-5b1703b0]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5b1703b0]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-5b1703b0]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5b1703b0]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5b1703b0]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5b1703b0]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5b1703b0]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5b1703b0]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5b1703b0]{display:none}}.parallax-wrap[data-v-5b1703b0]{position:absolute;width:100%;height:100%;top:0;z-index:0}[dir=ltr] .parallax-wrap[data-v-5b1703b0]{left:0}[dir=rtl] .parallax-wrap[data-v-5b1703b0]{right:0}.parallax-wrap.dots-wrap[data-v-5b1703b0]{z-index:40}@media(max-width:1279px){.parallax-wrap[data-v-5b1703b0]{display:none}}.inner-parallax[data-v-5b1703b0]{height:800px}.inner-parallax[data-v-5b1703b0],.inner-parallax>div[data-v-5b1703b0]{width:100%;position:absolute;display:block}.inner-parallax>div[data-v-5b1703b0]{height:500px}.inner-parallax>div svg[data-v-5b1703b0]{position:absolute;z-index:2}.inner-parallax[data-v-5b1703b0]  .Masthead,.inner-parallax[data-v-5b1703b0]  .Masthead__image{overflow:visible}.inner-parallax .figure>div[data-v-5b1703b0]{display:block;position:absolute;top:200px;width:100%;height:700px}.inner-parallax .figure>div svg[data-v-5b1703b0]{position:absolute}.triangle[data-v-5b1703b0]{opacity:.2;width:60px;height:60px}.theme--light .triangle[data-v-5b1703b0]{stroke:var(--v-primary-base)}.theme--dark .triangle[data-v-5b1703b0]{stroke:var(--v-primarylight-base)}.circle[data-v-5b1703b0]{stroke:var(--v-secondary-base);width:150px;height:150px;opacity:.2}.square[data-v-5b1703b0]{fill:var(--v-primarylight-base);width:110px;height:110px;opacity:.2}[dir=ltr] .square[data-v-5b1703b0]{left:-10px}[dir=rtl] .square[data-v-5b1703b0]{right:-10px}.dot[data-v-5b1703b0]{fill:var(--v-primarylight-base);width:140px;height:140px;top:-15px}[dir=ltr] .dot[data-v-5b1703b0]{left:-10px}[dir=rtl] .dot[data-v-5b1703b0]{right:-10px}.dot-many[data-v-5b1703b0]{width:510px;height:510px;top:0;transform:rotate(30deg);transform-origin:left center}.theme--light .dot-many[data-v-5b1703b0]{fill:var(--v-primary-base)}.theme--dark .dot-many[data-v-5b1703b0]{fill:var(--v-primarylight-base)}[dir=ltr] .dot-many[data-v-5b1703b0]{left:120px}[dir=rtl] .dot-many[data-v-5b1703b0]{right:120px}.dot-many-small[data-v-5b1703b0]{width:510px;height:510px;top:0;transform:rotate(30deg);transform-origin:left center;opacity:.4}.theme--light .dot-many-small[data-v-5b1703b0]{fill:var(--v-primary-base)}.theme--dark .dot-many-small[data-v-5b1703b0]{fill:var(--v-primarylight-base)}[dir=ltr] .dot-many-small[data-v-5b1703b0]{left:-120px}[dir=rtl] .dot-many-small[data-v-5b1703b0]{right:-120px}.square-dot[data-v-5b1703b0]{position:absolute}.large .triangle[data-v-5b1703b0]{top:400px}[dir=ltr] .large .triangle[data-v-5b1703b0]{left:40px}[dir=rtl] .large .triangle[data-v-5b1703b0]{right:40px}.large .circle[data-v-5b1703b0]{top:600px}[dir=ltr] .large .circle[data-v-5b1703b0]{left:70%}[dir=rtl] .large .circle[data-v-5b1703b0]{right:70%}.large .square-dot[data-v-5b1703b0]{top:600px!important}[dir=ltr] .large .square-dot[data-v-5b1703b0]{left:50px}[dir=rtl] .large .square-dot[data-v-5b1703b0]{right:50px}.medium .triangle[data-v-5b1703b0]{top:-100px}[dir=ltr] .medium .triangle[data-v-5b1703b0]{left:-100px}[dir=rtl] .medium .triangle[data-v-5b1703b0]{right:-100px}.medium .circle[data-v-5b1703b0]{top:-250px;transform:scale(.8)}[dir=ltr] .medium .circle[data-v-5b1703b0]{right:-120px}[dir=rtl] .medium .circle[data-v-5b1703b0]{left:-120px}[dir=ltr] .medium .square-dot[data-v-5b1703b0]{left:0}[dir=rtl] .medium .square-dot[data-v-5b1703b0]{right:0}.medium .square-dot .dot-many[data-v-5b1703b0]{top:-550px;fill:var(--v-primarylight-base);opacity:.4}.small .triangle[data-v-5b1703b0]{top:0}[dir=ltr] .small .triangle[data-v-5b1703b0]{left:30px}[dir=rtl] .small .triangle[data-v-5b1703b0]{right:30px}.small .circle[data-v-5b1703b0]{top:-250px;transform:scale(.8)}[dir=ltr] .small .circle[data-v-5b1703b0]{right:120px}[dir=rtl] .small .circle[data-v-5b1703b0]{left:120px}.small .square-dot[data-v-5b1703b0]{top:-50px}[dir=ltr] .small .square-dot[data-v-5b1703b0]{left:0}[dir=rtl] .small .square-dot[data-v-5b1703b0]{right:0}.small .square-dot .dot-many[data-v-5b1703b0]{opacity:.4}.extra-small .triangle[data-v-5b1703b0]{top:1600px;transform:scale(.8)}[dir=ltr] .extra-small .triangle[data-v-5b1703b0]{left:10px}[dir=rtl] .extra-small .triangle[data-v-5b1703b0]{right:10px}.extra-small .circle[data-v-5b1703b0]{top:1400px;transform:scale(.8)}[dir=ltr] .extra-small .circle[data-v-5b1703b0]{left:250px}[dir=rtl] .extra-small .circle[data-v-5b1703b0]{right:250px}.extra-small .square-dot[data-v-5b1703b0]{top:800px!important;transform:scale(.7)}[dir=ltr] .extra-small .square-dot[data-v-5b1703b0]{left:30px}[dir=rtl] .extra-small .square-dot[data-v-5b1703b0]{right:30px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_f781204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(268);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_f781204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_f781204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_f781204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_f781204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_f781204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-f781204a]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-f781204a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-f781204a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-f781204a]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-f781204a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-f781204a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-f781204a]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-f781204a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-f781204a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-f781204a]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-f781204a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-f781204a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-f781204a],.use-text-paragraph[data-v-f781204a]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-f781204a]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-f781204a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-f781204a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-f781204a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-f781204a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-f781204a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-f781204a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-f781204a]{display:none}}.root[data-v-f781204a]{z-index:56}.root[data-v-f781204a],.text[data-v-f781204a]{position:relative}.text[data-v-f781204a]{z-index:20}.illustration[data-v-f781204a]{position:relative;margin:48px 48px 0}@media(max-width:1279px){.illustration[data-v-f781204a]{display:none}}.illustration>div[data-v-f781204a]{top:-240px}.illustration img[data-v-f781204a]{display:block;width:280px;z-index:4;position:relative}.accordion[data-v-f781204a]{position:relative}.item[data-v-f781204a],.paper[data-v-f781204a]{margin-bottom:24px}.paper[data-v-f781204a]{border-radius:12px!important;overflow:hidden}.theme--dark .paper[data-v-f781204a]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .paper[data-v-f781204a]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.heading[data-v-f781204a]{display:block;font-weight:var(--font-medium);padding:8px 16px 8px 0;font-size:18px;line-height:1.5;margin-bottom:0}@media(max-width:599px){.heading[data-v-f781204a]{font-size:16px}}.content .icon[data-v-f781204a]{position:absolute;top:20px}[dir=ltr] .content .icon[data-v-f781204a]{right:16px}[dir=rtl] .content .icon[data-v-f781204a]{left:16px}.theme--light .expanded[data-v-f781204a]{background:linear-gradient(30deg,var(--v-primary-base),var(--v-secondary-base))}.theme--dark .expanded[data-v-f781204a]{background:linear-gradient(30deg,var(--v-primarydark-base),var(--v-secondarydark-base))}.expanded .heading[data-v-f781204a]{color:#fff;padding-top:0;padding-bottom:0}.expanded[data-v-f781204a]  .v-icon{color:#fff!important;transform:rotate(180deg)}.detail[data-v-f781204a]{padding-top:24px;border-radius:0 0 12px 12px}.theme--light .detail[data-v-f781204a]{background-color:#fff}.theme--dark .detail[data-v-f781204a]{background-color:#424242}.detail span[data-v-f781204a]{display:block;font-size:18px}@media(max-width:599px){.detail span[data-v-f781204a]{font-size:16px}}.theme--light .icon[data-v-f781204a]{color:var(--v-primary-base)}.theme--dark .icon[data-v-f781204a]{color:var(--v-primarylight-base)}.deco-primary[data-v-f781204a]{width:450px;height:450px;position:absolute;top:-20px;transform:scale(.6)}.theme--light .deco-primary[data-v-f781204a]{fill:var(--v-primarylight-base)}.theme--dark .deco-primary[data-v-f781204a]{fill:var(--v-secondarydark-base)}[dir=ltr] .deco-primary[data-v-f781204a]{left:-110px}[dir=rtl] .deco-primary[data-v-f781204a]{right:-110px}.deco-primary .v-application--is-rtl[data-v-f781204a]{transform-origin:right center}.deco-primary .v-application--is-ltr[data-v-f781204a]{transform-origin:left center}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_b81589a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(269);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_b81589a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_b81589a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_b81589a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_b81589a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_b81589a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-b81589a4]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-b81589a4]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-b81589a4]{font-size:28px;line-height:44px}}.use-text-title2[data-v-b81589a4]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-b81589a4]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-b81589a4]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-b81589a4]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-b81589a4]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-b81589a4]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-b81589a4]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-b81589a4]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-b81589a4]{font-size:16px;line-height:24px}}.use-text-caption[data-v-b81589a4],.use-text-paragraph[data-v-b81589a4]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-b81589a4]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-b81589a4]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-b81589a4]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-b81589a4]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-b81589a4]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-b81589a4]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-b81589a4]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-b81589a4]{display:none}}.title-main[data-v-b81589a4]{font-weight:var(--font-bold)}@media(max-width:599px){.title-main[data-v-b81589a4]{font-size:24px;line-height:36px}}.root[data-v-b81589a4]{display:flex;margin:40px 0 0;justify-content:center;position:relative;overflow:auto;z-index:95}@media(max-width:599px){.root[data-v-b81589a4]{justify-content:flex-start}}.root img[data-v-b81589a4]{height:64px;margin:32px;filter:grayscale(1) contrast(.5) brightness(1.5);transition:all .3s ease-out}.theme--light .root img[data-v-b81589a4]{opacity:1}.theme--dark .root img[data-v-b81589a4]{opacity:.5}.root img[data-v-b81589a4]:hover{filter:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_97ad56be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_97ad56be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_97ad56be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_97ad56be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_97ad56be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_style_index_0_id_97ad56be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-97ad56be]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-97ad56be]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-97ad56be]{font-size:28px;line-height:44px}}.use-text-title2[data-v-97ad56be]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-97ad56be]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-97ad56be]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-97ad56be]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-97ad56be]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-97ad56be]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-97ad56be]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-97ad56be]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-97ad56be]{font-size:16px;line-height:24px}}.use-text-caption[data-v-97ad56be],.use-text-paragraph[data-v-97ad56be]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-97ad56be]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-97ad56be]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-97ad56be]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-97ad56be]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-97ad56be]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-97ad56be]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-97ad56be]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-97ad56be]{display:none}}.landscape[data-v-97ad56be]{margin-bottom:40px;align-items:center;flex-direction:row}@media(max-width:599px){.landscape[data-v-97ad56be]{flex-direction:column}}.landscape figure[data-v-97ad56be]{width:150px;height:150px;margin:0}@media(max-width:599px){.landscape figure[data-v-97ad56be]{width:93%;margin:0 auto;height:180px}}.landscape figure img[data-v-97ad56be]{height:100%}@media(max-width:599px){.landscape figure img[data-v-97ad56be]{height:auto;min-width:100%;height:100%}}.landscape .desc[data-v-97ad56be]{height:185px;padding:24px 8px}@media(min-width:600px){.landscape .desc[data-v-97ad56be]{padding:24px}[dir=ltr] .landscape .desc[data-v-97ad56be]{margin-left:-96px}[dir=rtl] .landscape .desc[data-v-97ad56be]{margin-right:-96px}[dir=ltr] .landscape .desc[data-v-97ad56be]{padding-left:104px}[dir=rtl] .landscape .desc[data-v-97ad56be]{padding-right:104px}}@media(max-width:599px){.landscape .desc[data-v-97ad56be]{padding:230px 8px 24px;margin-top:-200px}}.potrait[data-v-97ad56be]{flex-direction:column}.potrait figure[data-v-97ad56be]{height:250px;width:93%;margin:0 auto}@media(max-width:599px){.potrait figure[data-v-97ad56be]{height:180px}}.potrait figure img[data-v-97ad56be]{width:100%;min-height:100%}.potrait .desc[data-v-97ad56be]{margin-top:-200px;padding:230px 24px 24px}@media(max-width:599px){.potrait .desc[data-v-97ad56be]{padding-left:8px;padding-right:8px}}.news[data-v-97ad56be]{display:flex}@media(max-width:599px){.news[data-v-97ad56be]{margin-bottom:64px}}.news figure[data-v-97ad56be]{overflow:hidden;border-radius:15px;z-index:1}.theme--dark .news figure[data-v-97ad56be]{box-shadow:0 4px 5px -2px rgba(50,50,50,.2),0 7px 10px 1px rgba(50,50,50,.14),0 2px 16px 1px rgba(50,50,50,.12)}.theme--light .news figure[data-v-97ad56be]{box-shadow:0 4px 5px -2px hsla(0,0%,50.2%,.2),0 7px 10px 1px hsla(0,0%,50.2%,.14),0 2px 16px 1px hsla(0,0%,50.2%,.12)}[dir=ltr] .news figure img[data-v-97ad56be]{margin-left:50%}[dir=rtl] .news figure img[data-v-97ad56be]{margin-right:50%}.v-application--is-rtl .news figure img[data-v-97ad56be]{transform:translateX(50%)}.v-application--is-ltr .news figure img[data-v-97ad56be]{transform:translateX(-50%)}.news p[data-v-97ad56be]{font-size:18px;font-weight:var(--font-medium)}.desc[data-v-97ad56be]{flex:1}.text[data-v-97ad56be]{padding:0 12px}.type[data-v-97ad56be]{font-weight:var(--font-bold);text-transform:uppercase}.theme--light .type[data-v-97ad56be]{color:rgba(0,0,0,.54)}.theme--dark .type[data-v-97ad56be]{color:hsla(0,0%,100%,.7)}.btn.v-btn[data-v-97ad56be]{margin-top:8px;text-transform:none;padding:0 12px!important}.theme--light .btn.v-btn[data-v-97ad56be]{color:var(--v-primary-base)}.theme--dark .btn.v-btn[data-v-97ad56be]{color:var(--v-primarylight-base)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_581f8656_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_581f8656_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_581f8656_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_581f8656_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_581f8656_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsEvent_vue_vue_type_style_index_0_id_581f8656_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-581f8656]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-581f8656]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-581f8656]{font-size:28px;line-height:44px}}.use-text-title2[data-v-581f8656]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-581f8656]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-581f8656]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-581f8656]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-581f8656]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-581f8656]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-581f8656]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-581f8656]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-581f8656]{font-size:16px;line-height:24px}}.use-text-caption[data-v-581f8656],.use-text-paragraph[data-v-581f8656]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-581f8656]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-581f8656]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-581f8656]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-581f8656]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-581f8656]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-581f8656]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-581f8656]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-581f8656]{display:none}}.root[data-v-581f8656]{position:relative;padding-bottom:240px;margin:0 auto -320px}.root[data-v-581f8656]:before{opacity:.2;content:\"\";position:absolute;top:0;left:0;width:100%;height:100%}.theme--light .root[data-v-581f8656]:before{background-image:linear-gradient(180deg,#fff 40%,var(--v-primarylight-base) 0)}.theme--dark .root[data-v-581f8656]:before{background-image:linear-gradient(180deg,#303030 40%,var(--v-primarylight-base) 0)}@media(max-width:959px){.root[data-v-581f8656]:before{top:-30px}}.deco-bg-top[data-v-581f8656]{background-repeat:no-repeat;background-color:transparent;background-size:100% auto;transform:scaleY(.4);position:absolute;width:100%;height:600px;top:220px}.theme--light .deco-bg-top[data-v-581f8656]{background-image:url(/images/mobile/deco-light-top.svg)}.theme--dark .deco-bg-top[data-v-581f8656]{background-image:url(/images/mobile/deco-dark-top.svg)}[dir=ltr] .deco-bg-top[data-v-581f8656]{left:0}[dir=rtl] .deco-bg-top[data-v-581f8656]{right:0}@media(max-width:959px){.deco-bg-top[data-v-581f8656]{top:400px}}.parallax-event[data-v-581f8656]{position:absolute;top:-320px;width:100%}[dir=ltr] .parallax-event[data-v-581f8656]{left:0}[dir=rtl] .parallax-event[data-v-581f8656]{right:0}.blog-wrap[data-v-581f8656]{position:relative;z-index:10;margin:80px 0}@media(max-width:599px){.list-news>div[data-v-581f8656]{padding-top:0!important;padding-bottom:0!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_109beaa7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_109beaa7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_109beaa7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_109beaa7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_109beaa7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterWithDeco_vue_vue_type_style_index_0_id_109beaa7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-109beaa7]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-109beaa7]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-109beaa7]{font-size:28px;line-height:44px}}.use-text-title2[data-v-109beaa7]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-109beaa7]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-109beaa7]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-109beaa7]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-109beaa7]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-109beaa7]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-109beaa7]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-109beaa7]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-109beaa7]{font-size:16px;line-height:24px}}.use-text-caption[data-v-109beaa7],.use-text-paragraph[data-v-109beaa7]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-109beaa7]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-109beaa7]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-109beaa7]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-109beaa7]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-109beaa7]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-109beaa7]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-109beaa7]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-109beaa7]{display:none}}.link[data-v-109beaa7]{margin:8px 12px}.footer[data-v-109beaa7]{margin-top:64px;padding-top:24px;padding-bottom:64px;color:#fff;position:relative;z-index:60}.footer ul[data-v-109beaa7]{margin:0;padding:0}.footer ul li[data-v-109beaa7]{list-style:none;line-height:32px}.footer ul li a[data-v-109beaa7]{text-decoration:none;font-size:14px;color:#fff}.footer ul li a[data-v-109beaa7]:hover{color:var(--v-primarylight-base)}.footer p[data-v-109beaa7]{color:#fff}@media(max-width:959px){.footer p[data-v-109beaa7]{padding:0 24px}}.footer .accordion-root[data-v-109beaa7]{margin:16px auto 0}.theme--light .footer.invert p[data-v-109beaa7]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert p[data-v-109beaa7]{color:#fff}.theme--light .footer.invert li a[data-v-109beaa7]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert li a[data-v-109beaa7]{color:#fff}.footer.invert .logo h6[data-v-109beaa7],.theme--light .footer.invert .title-nav[data-v-109beaa7]{color:var(--v-primarydark-base)}.theme--dark .footer.invert .title-nav[data-v-109beaa7]{color:var(--v-primarylight-base)}.theme--light .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-icon,.theme--light .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-select__selection,.theme--light .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-select__selections{color:rgba(0,0,0,.87)}.theme--dark .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-icon,.theme--dark .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-select__selection,.theme--dark .footer.invert .select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-select__selections{color:#fff}.footer-desc[data-v-109beaa7]{display:block;font-size:14px;margin-bottom:16px}.title-nav[data-v-109beaa7]{color:#fff;font-size:14px;text-transform:uppercase;font-weight:var(--font-bold)}.logo[data-v-109beaa7],.title-nav[data-v-109beaa7]{margin-bottom:24px}.logo[data-v-109beaa7]{text-align:center}.logo img[data-v-109beaa7]{width:64px}.logo h6[data-v-109beaa7]{color:#fff}.socmed[data-v-109beaa7]{display:flex;justify-content:center;margin-bottom:32px}.socmed button[data-v-109beaa7]{margin:8px;color:var(--v-primarydark-base);background:var(--v-secondary-base);width:36px;height:36px}.socmed button .icon[data-v-109beaa7]{color:#fff}.socmed .icon[data-v-109beaa7]{font-size:24px}.icon+div[data-v-109beaa7]{background:none!important;padding:12px 12px 12px 32px;width:calc(100% - 32px)}.select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]{width:200px;display:inherit;margin:16px auto 0}.select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-input__slot{min-height:43px}.select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-input__append-inner,.select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-input__prepend-inner{margin-top:10px}.select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-icon,.select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-select__selections{padding:0;color:var(--v-primarylight-base)}.select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  fieldset{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06);border-color:var(--v-primarylight-darken3)!important}.select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  fieldset legend{top:5px;position:relative}.select-lang.v-text-field.v-text-field--enclosed[data-v-109beaa7]  .v-select__selection{color:#fff}@media(max-width:1279px){.site-map-item[data-v-109beaa7]{padding-bottom:0!important;padding-top:0!important}}.accordion-root[data-v-109beaa7]{background:none;box-shadow:none;max-width:480px}#main-wrap .accordion-content.v-expansion-panel[data-v-109beaa7]{background-color:transparent}#main-wrap .accordion-content.v-expansion-panel[data-v-109beaa7]:after,#main-wrap .accordion-content.v-expansion-panel[data-v-109beaa7]:before{display:none}.accordion-icon[data-v-109beaa7]{padding:0}.deco-top[data-v-109beaa7]{height:300px;width:100%;position:absolute;top:-10px}.theme--light .deco-top.back[data-v-109beaa7]{fill:var(--v-primarylight-base)}.theme--dark .deco-top.back[data-v-109beaa7]{fill:#303030}.theme--light .deco-top.cover[data-v-109beaa7]{fill:#fff}.theme--dark .deco-top.cover[data-v-109beaa7]{fill:var(--v-primarylight-base)}.theme--light .deco-top.cover[data-v-109beaa7]{opacity:.8}.theme--dark .deco-top.cover[data-v-109beaa7]{opacity:.2}@media(min-width:1920px){.deco-top[data-v-109beaa7]{display:none}}@media(min-width:1280px){.deco-top[data-v-109beaa7]{transform:scaleX(1.5)}}@media(max-width:1279px){.deco-top[data-v-109beaa7]{transform:scale(1.2,.7);top:-80px}}@media(max-width:599px){.deco-top[data-v-109beaa7]{transform:scale(.5);top:-90px;width:1280px}[dir=ltr] .deco-top[data-v-109beaa7]{left:-330px}[dir=rtl] .deco-top[data-v-109beaa7]{right:-330px}}.footer-deco[data-v-109beaa7]{position:relative;top:0;padding-top:320px;margin-top:-360px}.theme--light .footer-deco[data-v-109beaa7]{background-image:linear-gradient(30deg,var(--v-primary-base) 50%,var(--v-secondary-base) 140%)}.theme--dark .footer-deco[data-v-109beaa7]{background-image:linear-gradient(30deg,var(--v-primarydark-base) 50%,var(--v-secondarydark-base) 140%)}@media(min-width:1920px){.footer-deco[data-v-109beaa7]{padding-top:160px;margin-top:160px}}@media(max-width:959px){.footer-deco[data-v-109beaa7]{padding-top:240px}}@media(max-width:599px){.footer-deco[data-v-109beaa7]{padding:80px 24px 0}}.footer-deco[data-v-109beaa7]:before{z-index:1;content:\"\";width:100%;height:500px;position:absolute;top:80px;opacity:.1;background:url(/images/mobile/deco-wave-footer.png) no-repeat transparent;background-size:100%}[dir=ltr] .footer-deco[data-v-109beaa7]:before{left:0}[dir=rtl] .footer-deco[data-v-109beaa7]:before{right:0}.decoration[data-v-109beaa7]{position:absolute;width:100%;height:100%;top:0;overflow:hidden;clip:rect(0,auto,auto,0)}[dir=ltr] .decoration[data-v-109beaa7]{left:0}[dir=rtl] .decoration[data-v-109beaa7]{right:0}.decoration svg[data-v-109beaa7]{fill:var(--v-secondary-base);opacity:.15;position:fixed;top:0}.action[data-v-109beaa7]{text-align:center;position:relative;z-index:1;padding-top:64px}@media(max-width:1279px){.action[data-v-109beaa7]{padding-top:0;padding-bottom:24px}}@media(max-width:599px){.action[data-v-109beaa7]{padding-top:120px;padding-bottom:0}}.action h4[data-v-109beaa7]{color:#fff;margin-bottom:48px}.btn-area[data-v-109beaa7]{margin:40px 0;justify-content:center;position:relative;display:flex}@media(max-width:599px){.btn-area[data-v-109beaa7]{justify-content:space-around}}@media(min-width:600px){[dir=ltr] .btn-area a[data-v-109beaa7]{margin-right:16px}[dir=rtl] .btn-area a[data-v-109beaa7]{margin-left:16px}}@media(max-width:599px){.btn-area a[data-v-109beaa7]{margin:4px}}.btn-area a img[data-v-109beaa7]{width:160px}@media(max-width:599px){.btn-area a img[data-v-109beaa7]{width:100%}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_14f78a3f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_14f78a3f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_14f78a3f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_14f78a3f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_14f78a3f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_style_index_0_id_14f78a3f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-14f78a3f]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-14f78a3f]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-14f78a3f]{font-size:28px;line-height:44px}}.use-text-title2[data-v-14f78a3f]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-14f78a3f]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-14f78a3f]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-14f78a3f]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-14f78a3f]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-14f78a3f]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-14f78a3f]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-14f78a3f]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-14f78a3f]{font-size:16px;line-height:24px}}.use-text-caption[data-v-14f78a3f],.use-text-paragraph[data-v-14f78a3f]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-14f78a3f]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-14f78a3f]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-14f78a3f]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-14f78a3f]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-14f78a3f]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-14f78a3f]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-14f78a3f]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-14f78a3f]{display:none}}.fab.v-btn[data-v-14f78a3f]{transform:scale(.5);transition:all .5s ease;opacity:0;background:var(--v-primarylight-base)!important;position:absolute;bottom:0;right:0;font-weight:var(--font-bold)}.fab.v-btn .icon[data-v-14f78a3f]{color:var(--v-primarydark-base);font-size:40px}.page-nav[data-v-14f78a3f]{z-index:200;position:fixed;bottom:40px;right:40px;width:56px}.page-nav nav[data-v-14f78a3f]{height:0;overflow:hidden;transition:height .5s ease;transition-delay:.5s}.page-nav.show .fab[data-v-14f78a3f]{opacity:1;transform:scale(1)}.page-nav .section-nav section[data-v-14f78a3f]{margin:0 0 76px 22px;padding:0;position:relative}.page-nav .section-nav a[data-v-14f78a3f]{margin-bottom:24px;opacity:0;position:relative;width:12px;height:12px;border-radius:50%;background:hsla(0,0%,100%,.3);border:1px solid var(--v-primarydark-base);display:block;transition:all .4s ease;color:transparent}.theme--dark .page-nav .section-nav a[data-v-14f78a3f]{box-shadow:0 1px 3px 0 rgba(50,50,50,.2),0 1px 1px 0 rgba(50,50,50,.14),0 2px 1px -1px rgba(50,50,50,.12)}.theme--light .page-nav .section-nav a[data-v-14f78a3f]{box-shadow:0 1px 3px 0 hsla(0,0%,50.2%,.2),0 1px 1px 0 hsla(0,0%,50.2%,.14),0 2px 1px -1px hsla(0,0%,50.2%,.12);border-color:rgba(0,0,0,.38)}.theme--dark .page-nav .section-nav a[data-v-14f78a3f]{border-color:hsla(0,0%,100%,.5)}.page-nav .section-nav a.active[data-v-14f78a3f]{background:var(--v-primarydark-base);border:1px solid var(--v-primarylight-base)}.page-nav:hover nav[data-v-14f78a3f]{transition-delay:0s;height:100%}.page-nav:hover .section-nav a[data-v-14f78a3f]{opacity:1;top:0!important}.tooltip[data-v-14f78a3f]{text-transform:capitalize;font-size:14px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("dc0628f2", content, true)

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_440b6657_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_440b6657_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_440b6657_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_440b6657_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_440b6657_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_440b6657_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".use-text-title[data-v-440b6657]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-440b6657]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-440b6657]{font-size:28px;line-height:44px}}.use-text-title2[data-v-440b6657]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-440b6657]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-440b6657]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-440b6657]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-440b6657]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-440b6657]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-440b6657]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-440b6657]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-440b6657]{font-size:16px;line-height:24px}}.use-text-caption[data-v-440b6657],.use-text-paragraph[data-v-440b6657]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-440b6657]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-440b6657]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-440b6657]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-440b6657]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-440b6657]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-440b6657]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-440b6657]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-440b6657]{display:none}}.main-wrap[data-v-440b6657]{position:relative;width:100%;overflow:hidden}.theme--light .main-wrap[data-v-440b6657]{color:rgba(0,0,0,.87)}.theme--dark .main-wrap[data-v-440b6657]{color:#fff;background-color:#303030}.theme--light .main-wrap[data-v-440b6657]{background-color:#fff}.space-bottom[data-v-440b6657]{margin-bottom:160px}@media(max-width:1279px){.space-bottom[data-v-440b6657]{margin-bottom:120px}}@media(max-width:959px){.space-bottom[data-v-440b6657]{margin-bottom:80px}}.space-top[data-v-440b6657]{margin-top:160px}@media(max-width:1279px){.space-top[data-v-440b6657]{margin-top:120px}}@media(max-width:959px){.space-top[data-v-440b6657]{margin-top:80px}}.space-top-short[data-v-440b6657]{margin-top:80px}@media(max-width:959px){.space-top-short[data-v-440b6657]{margin-top:40px}}.space-bottom-short[data-v-440b6657]{margin-bottom:80px}@media(max-width:959px){.space-bottom-short[data-v-440b6657]{margin-bottom:40px}}.container-wrap[data-v-440b6657]{margin-top:-40px}.container-wrap>section[data-v-440b6657]{position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),
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
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=440b6657&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"main-wrap\" data-v-440b6657>","</div>",[_c('main-header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-wrap\" data-v-440b6657>","</div>",[_vm._ssrNode("<section id=\"home\" data-v-440b6657>","</section>",[_vm._ssrNode("<div id=\"watched_counter\" data-v-440b6657></div> "),_c('banner')],2),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"counter\" data-v-440b6657>","</section>",[_c('counter')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"feature\" class=\"space-top\" data-v-440b6657>","</section>",[_c('feature')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"showcase\" data-v-440b6657>","</section>",[_c('showcase')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"testimonials\" data-v-440b6657>","</section>",[_c('testimonials')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"faq\" class=\"space-top-short\" data-v-440b6657>","</section>",[_c('faq')],1),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"space-top-short\" data-v-440b6657>","</section>",[_c('company-logo')],1),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"space-top-short\" data-v-440b6657>","</section>",[_c('news-event')],1)],2),_vm._ssrNode(" "),_c('footer-with-deco'),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('page-nav')],1),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('notification')],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=440b6657&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 26 modules
var Header = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner/Banner.vue?vue&type=template&id=59783c4d&scoped=true&
var Bannervue_type_template_id_59783c4d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_vm._ssrNode("<div class=\"background\" data-v-59783c4d>","</div>",[_vm._ssrNode("<div class=\"gradient\" data-v-59783c4d>","</div>",[_vm._ssrNode("<div class=\"deco-wave\" data-v-59783c4d></div> "),_c('hidden',{attrs:{"point":"smDown"}},[_c('div',{staticClass:"deco-line"})]),_vm._ssrNode(" <div class=\"deco-inner\" data-v-59783c4d><canvas id=\"particle_art_mobile\" width=\"500\" height=\"700\" data-v-59783c4d></canvas> <script type=\"text/javascript\" src=\"../../static/scripts/particles-spray.js\" data-v-59783c4d></script></div>")],2)]),_vm._ssrNode(" "),_c('v-container',{class:{ fixed: _vm.isDesktop }},[_c('v-row',[_c('v-col',{staticClass:"px-3",attrs:{"md":"7","cols":"12"}},[_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n            Welcome to QRMenu\n            "),_c('strong',[_vm._v("\n              Digital Menu System\n            ")])]),_vm._v(" "),_c('h5',{staticClass:"use-text-subtitle"},[_vm._v("\n            Its an all-in-one platform to help you upload menus for your customers.\n          ")]),_vm._v(" "),_c('div',{staticClass:"btn-area"},[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(283),"alt":"app store"}}),_vm._v(" "),_c('p',[_vm._v("Coming Soon!")])]),_vm._v(" "),_c('a',{attrs:{"href":"https://play.google.com/store/apps/details?id=org.eXpesa.Qrmenu"}},[_c('img',{attrs:{"src":__webpack_require__(281),"alt":"play store"}})]),_vm._v(" "),_c('div',{attrs:{"id":"watched_counter"}})],1)])]),_vm._v(" "),_c('v-col',{staticClass:"px-3",attrs:{"md":"5","cols":"12"}},[_c('div',{staticClass:"decoration"},[_c('div',{staticClass:"phone-illustration"},[_c('img',{staticClass:"phone",attrs:{"src":_vm.imgAPI.mobile[0],"alt":"illustration"}})])])])],1)],1)],2)}
var Bannervue_type_template_id_59783c4d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Banner/Banner.vue?vue&type=template&id=59783c4d&scoped=true&

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(83);

// CONCATENATED MODULE: ./static/images/imgAPI.js
const imgAPI = {
  avatar: ['/images/avatars/ribiro.jpeg', '/images/avatars/eric.jpeg', '/images/avatars/mwangi.jpeg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg'],
  updated: ['/images/updated/discover.jpg', '/images/updated/filter.jpg', '/images/updated/info.jpg', '/images/updated/item.jpg', '/images/updated/me.jpg', '/images/updated/qr.jpg', '/images/updated/web.jpg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  mobile: ['/images/new/banner_main.png', '/images/mobile/mobile_banner.png', '/images/mobile/widget-top.png', '/images/mobile/widget-left.png', '/images/mobile/widget-right.png', '/images/mobile/mobile_feature.png', '/images/mobile/mobile_feature2.png', 'https://via.placeholder.com/536x302/fbd2ff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', 'https://via.placeholder.com/518x1120/d2ffff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', 'https://via.placeholder.com/518x1120/d2ffff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', 'https://via.placeholder.com/518x1120/d2ffff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', '/images/mobile/widget_screen1.png', '/images/mobile/widget_screen2.png', '/images/mobile/widget_screen3.png', '/images/mobile/widget_screen4.png', '/images/mobile/widget_screen5.png', '/images/mobile/widget_screen6.png', '/images/mobile/widget_screen7.png', ''],
  new: ['/images/new/banner 1.png', '/images/new/banner2-preview.png', '/images/new/video_cover.jpeg', '/images/new/banner.png', '/images/new/customer.jpeg', '/images/new/enter_pin.jpeg', '/images/new/filter_items.jpeg', '/images/new/items.jpeg', '/images/new/me.jpeg', '/images/new/new_account.jpeg', '/images/new/photo_upload.jpeg', '/images/new/product.jpeg', '/images/new/qrcode.jpeg', '/images/new/sign_in.jpeg', '/images/new/update_phone.jpeg', '/images/new/upload_form.jpeg', '/images/new/upload_photo2.jpeg']
};
/* harmony default export */ var images_imgAPI = (imgAPI);
// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Banner/Banner.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */]
  },

  data() {
    return {
      link: text_link["a" /* default */],
      imgAPI: images_imgAPI
    };
  },

  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Banner/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Banner_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(15);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(246);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(243);

// CONCATENATED MODULE: ./components/Banner/Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(284)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Banner_Bannervue_type_script_lang_js_,
  Bannervue_type_template_id_59783c4d_scoped_true_render,
  Bannervue_type_template_id_59783c4d_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "59783c4d",
  "d872ff98"
  
)

/* harmony default export */ var Banner = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Banner/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Counter/Counter.vue?vue&type=template&id=9d5d46e4&scoped=true&
var Countervue_type_template_id_9d5d46e4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"counter-wrap"},[_c('v-container',{staticClass:"max-md"},[_c('v-row',{staticClass:"counter-inner spacing6",attrs:{"justify":"center","align":"center"}},[_c('v-col',{staticClass:"px-6",attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[(_vm.loaded)?_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 100,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 100,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]})]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle"},[_c('i',{staticClass:"ion-ios-cloud-download-outline"}),_vm._v("\n              "+_vm._s(_vm.$t('mobileLanding.counter_downloads'))+"\n            ")])]):_vm._e()])]),_vm._v(" "),_c('v-col',{staticClass:"px-6",attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[(_vm.loaded)?_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n              +"),_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 80,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 80,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]})]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle"},[_c('i',{staticClass:"ion-ios-checkmark-outline"}),_vm._v("\n              Happy clients\n            ")])]):_vm._e()])]),_vm._v(" "),_c('v-col',{staticClass:"px-6",attrs:{"md":"4"}},[_c('div',{staticClass:"counter-item"},[(_vm.loaded)?_c('div',{staticClass:"text"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n              +"),_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 80,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 80,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]})]),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle"},[_c('i',{staticClass:"ion-ios-star-outline"}),_vm._v("\n              "+_vm._s(_vm.$t('mobileLanding.counter_ratting'))+"\n            ")])]):_vm._e()])])],1)],1)],1)}
var Countervue_type_template_id_9d5d46e4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Counter/Counter.vue?vue&type=template&id=9d5d46e4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Counter/Counter.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Countervue_type_script_lang_js_ = ({
  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 200);
  }

});
// CONCATENATED MODULE: ./components/Counter/Counter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Counter_Countervue_type_script_lang_js_ = (Countervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Counter/Counter.vue



function Counter_injectStyles (context) {
  
  var style0 = __webpack_require__(286)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Counter_component = Object(componentNormalizer["a" /* default */])(
  Counter_Countervue_type_script_lang_js_,
  Countervue_type_template_id_9d5d46e4_scoped_true_render,
  Countervue_type_template_id_9d5d46e4_scoped_true_staticRenderFns,
  false,
  Counter_injectStyles,
  "9d5d46e4",
  "21b9452e"
  
)

/* harmony default export */ var Counter = (Counter_component.exports);

/* vuetify-loader */




installComponents_default()(Counter_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Counter/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature/Feature.vue?vue&type=template&id=48b0f333&scoped=true&
var Featurevue_type_template_id_48b0f333_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-dialog',{attrs:{"max-width":"690"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',{staticClass:"video-popup"},[_c('v-card-title',{staticClass:"headline"},[_c('h2',{staticClass:"title-main"},[_vm._v("\n            "+_vm._s(_vm.$t('mobileLanding.feature_video'))+"\n            "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.handleVideoClose()}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1)]),_vm._v(" "),(_vm.yt.use)?_c('div',{staticClass:"text-center"},[_c('youtube',{ref:"youtube",attrs:{"video-id":_vm.videoId,"player-vars":_vm.playerVars,"width":640,"height":360}})],1):_vm._e()],1)],1),_vm._ssrNode(" "),_c('title-main',{attrs:{"align":"center"}},[_vm._v("\n      Features\n    ")]),_vm._ssrNode(" "),_c('v-container',{staticClass:"fixed-width"},[_c('div',{staticClass:"item first"},[_c('v-row',{class:[_vm.isMobile ? 'column-reverse' : 'row']},[_c('v-col',{staticClass:"py-0",attrs:{"cols":"12","md":"6"}},[_c('div',{staticClass:"illustration-left"},[_c('parallax-small'),_vm._v(" "),_c('figure',{staticClass:"screen"},[_c('img',{attrs:{"src":_vm.imgAPI.new[0],"alt":"illustration"}})])],1)]),_vm._v(" "),_c('v-col',{staticClass:"py-0",attrs:{"md":"6","cols":"12"}},[_c('div',{staticClass:"text"},[_c('title-secondary',{attrs:{"align":_vm.isMobile ? 'center' : 'left',"text":"Create Menus Easily"}}),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle2"},[_vm._v("\n                QRMenu eliminates the physical menu system. Create your menus and update them with ease.\n              ")])],1)])],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"bg-color\" data-v-48b0f333>","</div>",[_vm._ssrNode("<div class=\"deco-bg-top\" data-v-48b0f333></div> "),_c('v-container',{staticClass:"fixed-width"},[_c('div',{staticClass:"item"},[_c('v-row',[_c('v-col',{staticClass:"py-0",attrs:{"md":"6","cols":"12"}},[_c('div',{staticClass:"text"},[_c('title-secondary',{attrs:{"text":"Generate Scannable QR Code","align":_vm.isMobile ? 'center' : 'left'}}),_vm._v(" "),_c('p',{staticClass:"use-text-subtitle2"},[_vm._v("\n                  Generate a QR Code to help customers scan to your menus. Provides better customer experience.\n                ")])],1)]),_vm._v(" "),_c('v-col',{staticClass:"py-0",attrs:{"md":"6","cols":"12"}},[_c('div',{staticClass:"illustration-right"},[_c('svg',{staticClass:"deco-secondary"},[_c('use',{attrs:{"xlink:href":"/images/mobile/deco-feature.svg#main"}})]),_vm._v(" "),_c('parallax-small'),_vm._v(" "),_c('figure',{staticClass:"screen"},[_c('img',{attrs:{"src":_vm.imgAPI.new[1],"alt":"screen"}})])],1)])],1)],1),_vm._v(" "),_c('div',{staticClass:"item last"},[_c('title-secondary',{attrs:{"align":"center","text":_vm.$t('mobileLanding.feature_title3')}}),_vm._v(" "),_c('p',{staticClass:"text-center use-text-subtitle2"},[_vm._v("\n            "+_vm._s(_vm.$t('mobileLanding.feature_desc3'))+"\n          ")]),_vm._v(" "),_c('v-container',{staticClass:"max-sm pa-0"},[_c('v-row',[_c('v-col',{staticClass:"py-0",attrs:{"sm":"12","cols":"12"}},[_c('div',{staticClass:"illustration-center"},[_c('svg',{staticClass:"deco-primary-big"},[_c('use',{attrs:{"xlink:href":"/images/mobile/deco-feature.svg#main"}})]),_vm._v(" "),_c('parallax-medium'),_vm._v(" "),_c('v-card',{staticClass:"video"},[_c('img',{attrs:{"src":_vm.imgAPI.new[2],"alt":"screen"}}),_vm._v(" "),_c('h6',{staticClass:"title"},[_vm._v("\n                      "+_vm._s(_vm.$t('mobileLanding.feature_watch'))+"\n                    ")]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"icon":"","large":""},on:{"click":function($event){return _vm.handleVideoOpen()}}},[_c('i',{staticClass:"ion-play"})])],1)],1)])],1)],1)],1)])],2)],2)}
var Featurevue_type_template_id_48b0f333_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Feature/Feature.vue?vue&type=template&id=48b0f333&scoped=true&

// CONCATENATED MODULE: ./youtube.js
const useYoutube = {
  use: true
};
/* harmony default export */ var youtube = (useYoutube);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Small.vue?vue&type=template&id=1a4d659c&scoped=true&
var Smallvue_type_template_id_1a4d659c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap"},[(_vm.loaded)?_vm._ssrNode("<div class=\"inner-parallax small\" data-v-1a4d659c>","</div>",[_c('parallax',{attrs:{"speed-factor":0.1,"section-height":200,"direction":"down"}},[_c('div',{staticClass:"figure"},[_c('svg',{staticClass:"triangle"},[_c('use',{attrs:{"xlink:href":"/images/mobile/triangle.svg#main"}})])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.15,"section-height":200,"direction":"down"}},[_c('div',{staticClass:"figure"},[_c('svg',{staticClass:"circle"},[_c('use',{attrs:{"xlink:href":"/images/mobile/circle.svg#main"}})])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.15,"section-height":300,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('div',{staticClass:"square-dot"},[_c('svg',{staticClass:"dot-many"},[_c('use',{attrs:{"xlink:href":"/images/mobile/dot-many.svg#main"}})])])])])],2):_vm._e()])}
var Smallvue_type_template_id_1a4d659c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/Small.vue?vue&type=template&id=1a4d659c&scoped=true&

// EXTERNAL MODULE: external "vue-parallaxy"
var external_vue_parallaxy_ = __webpack_require__(226);
var external_vue_parallaxy_default = /*#__PURE__*/__webpack_require__.n(external_vue_parallaxy_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Small.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Smallvue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Small.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Smallvue_type_script_lang_js_ = (Smallvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Parallax/Small.vue



function Small_injectStyles (context) {
  
  var style0 = __webpack_require__(288)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Small_component = Object(componentNormalizer["a" /* default */])(
  Parallax_Smallvue_type_script_lang_js_,
  Smallvue_type_template_id_1a4d659c_scoped_true_render,
  Smallvue_type_template_id_1a4d659c_scoped_true_staticRenderFns,
  false,
  Small_injectStyles,
  "1a4d659c",
  "7e17559a"
  
)

/* harmony default export */ var Small = (Small_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Medium.vue?vue&type=template&id=4dc82364&scoped=true&
var Mediumvue_type_template_id_4dc82364_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap"},[(_vm.loaded)?_vm._ssrNode("<div class=\"inner-parallax medium\" data-v-4dc82364>","</div>",[_c('parallax',{attrs:{"speed-factor":0.1,"section-height":300,"direction":"down"}},[_c('div',{staticClass:"figure"},[_c('svg',{staticClass:"triangle"},[_c('use',{attrs:{"xlink:href":"/images/mobile/triangle.svg#main"}})])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.15,"section-height":300,"direction":"down"}},[_c('div',{staticClass:"figure"},[_c('svg',{staticClass:"circle"},[_c('use',{attrs:{"xlink:href":"/images/mobile/circle.svg#main"}})])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.15,"section-height":400,"direction":"down"}},[_c('div',{staticClass:"figure"},[_c('div',{staticClass:"square-dot"},[_c('svg',{staticClass:"dot-many"},[_c('use',{attrs:{"xlink:href":"/images/mobile/dot-many.svg#main"}})])])])])],2):_vm._e()])}
var Mediumvue_type_template_id_4dc82364_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/Medium.vue?vue&type=template&id=4dc82364&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Medium.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Mediumvue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Medium.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Mediumvue_type_script_lang_js_ = (Mediumvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Parallax/Medium.vue



function Medium_injectStyles (context) {
  
  var style0 = __webpack_require__(290)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Medium_component = Object(componentNormalizer["a" /* default */])(
  Parallax_Mediumvue_type_script_lang_js_,
  Mediumvue_type_template_id_4dc82364_scoped_true_render,
  Mediumvue_type_template_id_4dc82364_scoped_true_staticRenderFns,
  false,
  Medium_injectStyles,
  "4dc82364",
  "d6ca751c"
  
)

/* harmony default export */ var Medium = (Medium_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=template&id=7e24a080&scoped=true&
var Titlevue_type_template_id_7e24a080_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title-main",class:[_vm.align, { dark: _vm.dark }]},[_vm._ssrNode("<h3 data-v-7e24a080>","</h3>",[_vm._t("default")],2)])}
var Titlevue_type_template_id_7e24a080_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=template&id=7e24a080&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/Title.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  props: {
    align: {
      type: String,
      default: 'left'
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/Title/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var Title_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Title/Title.vue



function Title_injectStyles (context) {
  
  var style0 = __webpack_require__(292)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Title_component = Object(componentNormalizer["a" /* default */])(
  Title_Titlevue_type_script_lang_js_,
  Titlevue_type_template_id_7e24a080_scoped_true_render,
  Titlevue_type_template_id_7e24a080_scoped_true_staticRenderFns,
  false,
  Title_injectStyles,
  "7e24a080",
  "0c576aa6"
  
)

/* harmony default export */ var Title = (Title_component.exports);
// CONCATENATED MODULE: ./components/Title/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/TitleSecondary.vue?vue&type=template&id=36931d3a&scoped=true&
var TitleSecondaryvue_type_template_id_36931d3a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title-secondary",class:_vm.align},[_vm._ssrNode("<h4 data-v-36931d3a>"+_vm._ssrEscape("\n    "+_vm._s(_vm.text)+"\n  ")+"</h4>")])}
var TitleSecondaryvue_type_template_id_36931d3a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Title/TitleSecondary.vue?vue&type=template&id=36931d3a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/TitleSecondary.vue?vue&type=script&lang=js&
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
/* harmony default export */ var TitleSecondaryvue_type_script_lang_js_ = ({
  props: {
    align: {
      type: String,
      default: 'left'
    },
    text: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Title/TitleSecondary.vue?vue&type=script&lang=js&
 /* harmony default export */ var Title_TitleSecondaryvue_type_script_lang_js_ = (TitleSecondaryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Title/TitleSecondary.vue



function TitleSecondary_injectStyles (context) {
  
  var style0 = __webpack_require__(294)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TitleSecondary_component = Object(componentNormalizer["a" /* default */])(
  Title_TitleSecondaryvue_type_script_lang_js_,
  TitleSecondaryvue_type_template_id_36931d3a_scoped_true_render,
  TitleSecondaryvue_type_template_id_36931d3a_scoped_true_staticRenderFns,
  false,
  TitleSecondary_injectStyles,
  "36931d3a",
  "46621cc4"
  
)

/* harmony default export */ var TitleSecondary = (TitleSecondary_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Feature/Feature.vue?vue&type=script&lang=js&
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






/* harmony default export */ var Featurevue_type_script_lang_js_ = ({
  components: {
    ParallaxSmall: Small,
    ParallaxMedium: Medium,
    TitleSecondary: TitleSecondary,
    'title-main': Title
  },

  data() {
    return {
      videoId: 'QFEduQQL9IU',
      imgAPI: images_imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8006'
      },
      yt: youtube,
      footers: [{
        title: 'Recommended Scanning Apps',
        description: ['Android', 'iOS'],
        link: ['https://play.google.com/store/apps/details?id=com.maqr.barcode.free.qrandbarcodescanner.mavach.qrcode.reader.qrcodereader.qrcodescanner.quickbarecodescanner', '#history']
      }]
    };
  },

  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false;
      }

      this.dialog = true;
      setTimeout(() => {
        this.player = this.$refs.youtube.player;
        this.player.playVideo();
      }, 100);
    },

    handleVideoClose() {
      this.dialog = false;
      this.player.pauseVideo();
    }

  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Feature/Feature.vue?vue&type=script&lang=js&
 /* harmony default export */ var Feature_Featurevue_type_script_lang_js_ = (Featurevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(245);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(260);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(249);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VDialog/VDialog.sass
var VDialog = __webpack_require__(298);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VThemeProvider/VThemeProvider.js
var VThemeProvider = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/activatable/index.js
var activatable = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/dependent/index.js
var dependent = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/detachable/index.js
var detachable = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/overlayable/index.js + 2 modules
var overlayable = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/returnable/index.js
var returnable = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/stackable/index.js
var stackable = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/click-outside/index.js
var click_outside = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
// Styles
 // Components

 // Mixins







 // Directives

 // Helpers




const baseMixins = Object(mixins["a" /* default */])(activatable["a" /* default */], dependent["a" /* default */], detachable["a" /* default */], overlayable["a" /* default */], returnable["a" /* default */], stackable["a" /* default */], toggleable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VDialog_VDialog = (baseMixins.extend({
  name: 'v-dialog',
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  props: {
    dark: Boolean,
    disabled: Boolean,
    fullscreen: Boolean,
    light: Boolean,
    maxWidth: {
      type: [String, Number],
      default: 'none'
    },
    noClickAnimation: Boolean,
    origin: {
      type: String,
      default: 'center center'
    },
    persistent: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    },
    width: {
      type: [String, Number],
      default: 'auto'
    }
  },

  data() {
    return {
      activatedBy: null,
      animate: false,
      animateTimeout: -1,
      isActive: !!this.value,
      stackMinZIndex: 200
    };
  },

  computed: {
    classes() {
      return {
        [`v-dialog ${this.contentClass}`.trim()]: true,
        'v-dialog--active': this.isActive,
        'v-dialog--persistent': this.persistent,
        'v-dialog--fullscreen': this.fullscreen,
        'v-dialog--scrollable': this.scrollable,
        'v-dialog--animated': this.animate
      };
    },

    contentClasses() {
      return {
        'v-dialog__content': true,
        'v-dialog__content--active': this.isActive
      };
    },

    hasActivator() {
      return Boolean(!!this.$slots.activator || !!this.$scopedSlots.activator);
    }

  },
  watch: {
    isActive(val) {
      if (val) {
        this.show();
        this.hideScroll();
      } else {
        this.removeOverlay();
        this.unbind();
      }
    },

    fullscreen(val) {
      if (!this.isActive) return;

      if (val) {
        this.hideScroll();
        this.removeOverlay(false);
      } else {
        this.showScroll();
        this.genOverlay();
      }
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('full-width')) {
      Object(console["e" /* removed */])('full-width', this);
    }
  },

  beforeMount() {
    this.$nextTick(() => {
      this.isBooted = this.isActive;
      this.isActive && this.show();
    });
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') this.unbind();
  },

  methods: {
    animateClick() {
      this.animate = false; // Needed for when clicking very fast
      // outside of the dialog

      this.$nextTick(() => {
        this.animate = true;
        window.clearTimeout(this.animateTimeout);
        this.animateTimeout = window.setTimeout(() => this.animate = false, 150);
      });
    },

    closeConditional(e) {
      const target = e.target; // Ignore the click if the dialog is closed or destroyed,
      // if it was on an element inside the content,
      // if it was dragged onto the overlay (#6969),
      // or if this isn't the topmost dialog (#9907)

      return !(this._isDestroyed || !this.isActive || this.$refs.content.contains(target) || this.overlay && target && !this.overlay.$el.contains(target)) && this.activeZIndex >= this.getMaxZIndex();
    },

    hideScroll() {
      if (this.fullscreen) {
        document.documentElement.classList.add('overflow-y-hidden');
      } else {
        overlayable["a" /* default */].options.methods.hideScroll.call(this);
      }
    },

    show() {
      !this.fullscreen && !this.hideOverlay && this.genOverlay();
      this.$nextTick(() => {
        this.$refs.content.focus();
        this.bind();
      });
    },

    bind() {
      window.addEventListener('focusin', this.onFocusin);
    },

    unbind() {
      window.removeEventListener('focusin', this.onFocusin);
    },

    onClickOutside(e) {
      this.$emit('click:outside', e);

      if (this.persistent) {
        this.noClickAnimation || this.animateClick();
      } else {
        this.isActive = false;
      }
    },

    onKeydown(e) {
      if (e.keyCode === helpers["r" /* keyCodes */].esc && !this.getOpenDependents().length) {
        if (!this.persistent) {
          this.isActive = false;
          const activator = this.getActivator();
          this.$nextTick(() => activator && activator.focus());
        } else if (!this.noClickAnimation) {
          this.animateClick();
        }
      }

      this.$emit('keydown', e);
    },

    // On focus change, wrap focus to stay inside the dialog
    // https://github.com/vuetifyjs/vuetify/issues/6892
    onFocusin(e) {
      if (!e || !this.retainFocus) return;
      const target = e.target;

      if (!!target && // It isn't the document or the dialog body
      ![document, this.$refs.content].includes(target) && // It isn't inside the dialog body
      !this.$refs.content.contains(target) && // We're the topmost dialog
      this.activeZIndex >= this.getMaxZIndex() && // It isn't inside a dependent element (like a menu)
      !this.getOpenDependentElements().some(el => el.contains(target)) // So we must have focused something outside the dialog and its children
      ) {
          // Find and focus the first available element inside the dialog
          const focusable = this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          const el = [...focusable].find(el => !el.hasAttribute('disabled'));
          el && el.focus();
        }
    },

    genContent() {
      return this.showLazyContent(() => [this.$createElement(VThemeProvider["a" /* default */], {
        props: {
          root: true,
          light: this.light,
          dark: this.dark
        }
      }, [this.$createElement('div', {
        class: this.contentClasses,
        attrs: {
          role: 'document',
          tabindex: this.isActive ? 0 : undefined,
          ...this.getScopeIdAttrs()
        },
        on: {
          keydown: this.onKeydown
        },
        style: {
          zIndex: this.activeZIndex
        },
        ref: 'content'
      }, [this.genTransition()])])]);
    },

    genTransition() {
      const content = this.genInnerContent();
      if (!this.transition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin,
          appear: true
        }
      }, [content]);
    },

    genInnerContent() {
      const data = {
        class: this.classes,
        ref: 'dialog',
        directives: [{
          name: 'click-outside',
          value: {
            handler: this.onClickOutside,
            closeConditional: this.closeConditional,
            include: this.getOpenDependentElements
          }
        }, {
          name: 'show',
          value: this.isActive
        }],
        style: {
          transformOrigin: this.origin
        }
      };

      if (!this.fullscreen) {
        data.style = { ...data.style,
          maxWidth: this.maxWidth === 'none' ? undefined : Object(helpers["f" /* convertToUnit */])(this.maxWidth),
          width: this.width === 'auto' ? undefined : Object(helpers["f" /* convertToUnit */])(this.width)
        };
      }

      return this.$createElement('div', data, this.getContentSlot());
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-dialog__container',
      class: {
        'v-dialog__container--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      },
      attrs: {
        role: 'dialog'
      }
    }, [this.genActivator(), this.genContent()]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(68);

// CONCATENATED MODULE: ./components/Feature/Feature.vue



function Feature_injectStyles (context) {
  
  var style0 = __webpack_require__(296)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Feature_component = Object(componentNormalizer["a" /* default */])(
  Feature_Featurevue_type_script_lang_js_,
  Featurevue_type_template_id_48b0f333_scoped_true_render,
  Featurevue_type_template_id_48b0f333_scoped_true_staticRenderFns,
  false,
  Feature_injectStyles,
  "48b0f333",
  "328249bc"
  
)

/* harmony default export */ var Feature = (Feature_component.exports);

/* vuetify-loader */









installComponents_default()(Feature_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["a" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDialog: VDialog_VDialog,VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Feature/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Showcase/Showcase.vue?vue&type=template&id=4d86602e&scoped=true&
var Showcasevue_type_template_id_4d86602e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_vm._ssrNode("<svg class=\"deco-top back\" data-v-4d86602e><use xlink:href=\"/images/mobile/deco-wave-top.svg#main\" data-v-4d86602e></use></svg> <svg class=\"deco-top cover\" data-v-4d86602e><use xlink:href=\"/images/mobile/deco-wave-top.svg#main\" data-v-4d86602e></use></svg> "),_c('title-main',{attrs:{"dark":"","align":"center"}},[_vm._v("\n      "+_vm._s(_vm.$t('mobileLanding.showcase_title'))+"\n    ")]),_vm._ssrNode(" "),(_vm.loaded)?_vm._ssrNode("<div class=\"carousel-wrap\" data-v-4d86602e>","</div>",[_vm._ssrNode("<div class=\"invert-parallax\" data-v-4d86602e>","</div>",[_c('parallax-large')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"carousel-side\" data-v-4d86602e>","</div>",[_c('slick',{ref:"sliderSide",staticClass:"slider-side",attrs:{"options":_vm.settingsSide}},[_c('div',{staticClass:"item"},[_c('v-card',{staticClass:"frame"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[0],"alt":"app"}})])],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('v-card',{staticClass:"frame"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[1],"alt":"app"}})])],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('v-card',{staticClass:"frame"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[2],"alt":"app"}})])],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('v-card',{staticClass:"frame"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[3],"alt":"app"}})])],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('v-card',{staticClass:"frame"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[4],"alt":"app"}})])],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('v-card',{staticClass:"frame"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[5],"alt":"app"}})])],1),_vm._v(" "),_c('div',{staticClass:"item"},[_c('v-card',{staticClass:"frame"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[6],"alt":"app"}})])],1)])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"carousel-center\" data-v-4d86602e>","</div>",[_c('v-card',{staticClass:"frame"},[_c('slick',{ref:"sliderCenter",staticClass:"slider-center",attrs:{"options":_vm.settingsCenter},on:{"afterChange":_vm.handleActiveSlide}},[_c('div',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[0],"alt":"app"}})]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[1],"alt":"app"}})]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[2],"alt":"app"}})]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[3],"alt":"app"}})]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[4],"alt":"app"}})]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[5],"alt":"app"}})]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[6],"alt":"app"}})]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[3],"alt":"app"}})]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('img',{attrs:{"src":_vm.imgAPI.updated[4],"alt":"app"}})])])],1)],1)],2):_vm._e(),_vm._ssrNode(" <svg class=\"deco-bottom back\" data-v-4d86602e><use xlink:href=\"/images/mobile/deco-wave-bottom.svg#main\" data-v-4d86602e></use></svg> <svg class=\"deco-bottom cover\" data-v-4d86602e><use xlink:href=\"/images/mobile/deco-wave-bottom.svg#main\" data-v-4d86602e></use></svg> <div class=\"deco-bottom-mobile\" data-v-4d86602e></div> <div class=\"pagination\" data-v-4d86602e><ul data-v-4d86602e>"+(_vm._ssrList((7),function(index){return ("<li"+(_vm._ssrClass(null,{ active: _vm.activeSlide === index }))+" data-v-4d86602e><button type=\"button\" data-v-4d86602e></button></li>")}))+"</ul></div>")],2)}
var Showcasevue_type_template_id_4d86602e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Showcase/Showcase.vue?vue&type=template&id=4d86602e&scoped=true&

// EXTERNAL MODULE: ./components/Parallax/Large.vue + 4 modules
var Large = __webpack_require__(252);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Showcase/Showcase.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Showcasevue_type_script_lang_js_ = ({
  components: {
    'title-main': Title,
    ParallaxLarge: Large["a" /* default */],
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 244, 7))
  },
  data: () => ({
    imgAPI: images_imgAPI,
    loaded: false,
    activeSlide: 0,
    settingsCenter: {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      arrows: false,
      asNavFor: '.slider-side'
    },
    settingsSide: {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      speed: 500,
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 5,
      arrows: false,
      asNavFor: '.slider-center',
      responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    }
  }),

  mounted() {
    this.loaded = true;
  },

  methods: {
    handleDotsNav(index) {
      this.$refs.sliderCenter.goTo(index);
    },

    handleActiveSlide(event, slick, currentSlide) {
      this.activeSlide = currentSlide;
    }

  }
});
// CONCATENATED MODULE: ./components/Showcase/Showcase.vue?vue&type=script&lang=js&
 /* harmony default export */ var Showcase_Showcasevue_type_script_lang_js_ = (Showcasevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Showcase/Showcase.vue



function Showcase_injectStyles (context) {
  
  var style0 = __webpack_require__(300)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Showcase_component = Object(componentNormalizer["a" /* default */])(
  Showcase_Showcasevue_type_script_lang_js_,
  Showcasevue_type_template_id_4d86602e_scoped_true_render,
  Showcasevue_type_template_id_4d86602e_scoped_true_staticRenderFns,
  false,
  Showcase_injectStyles,
  "4d86602e",
  "0a483614"
  
)

/* harmony default export */ var Showcase = (Showcase_component.exports);

/* vuetify-loader */


installComponents_default()(Showcase_component, {VCard: VCard["a" /* default */]})

// CONCATENATED MODULE: ./components/Showcase/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/Testimonials.vue?vue&type=template&id=52f82234&scoped=true&
var Testimonialsvue_type_template_id_52f82234_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('u-animate-container',[_c('u-animate',{attrs:{"offset":-50,"name":"fadeInUpShort","delay":"0.3s","duration":"0.5s"}},[_c('div',[_c('title-main',{attrs:{"align":"center"}},[_vm._v("\n          "+_vm._s(_vm.$t('mobileLanding.testimonial_title'))+"\n        ")])],1)]),_vm._v(" "),_c('div',{staticClass:"carousel-wrap"},[_c('u-animate',{attrs:{"offset":-150,"name":"fadeInUpShort","delay":"0.4s","duration":"0.5s"}},[_c('div',[_c('v-container',{staticClass:"max-sm"},[(_vm.loaded)?_c('div',{staticClass:"carousel-text"},[_c('slick',{ref:"sliderText",staticClass:"slider-text",attrs:{"options":_vm.settingsText}},_vm._l((_vm.testiContent),function(item,index){return _c('div',{key:index,staticClass:"item"},[_c('p',{staticClass:"content"},[_vm._v("\n                    "+_vm._s(item.text)+"\n                  ")]),_vm._v(" "),_c('p',{staticClass:"name"},[_c('strong',[_vm._v(_vm._s(item.name))]),_vm._v("\n                    -\n                    "+_vm._s(item.title)+"\n                  ")])])}),0)],1):_vm._e()]),_vm._v(" "),(_vm.loaded)?_c('div',{staticClass:"carousel-avatar"},[_c('slick',{ref:"sliderAvatar",staticClass:"slider-avatar",attrs:{"options":_vm.settingsAvatar}},_vm._l((_vm.testiContent),function(item,index){return _c('div',{key:index,staticClass:"item"},[_c('v-avatar',{staticClass:"avatar"},[_c('img',{attrs:{"alt":item.name,"src":item.avatar}})])],1)}),0)],1):_vm._e()],1)])],1),_vm._v(" "),_c('div',{staticClass:"deco-bg-bottom"})],1)],1)}
var Testimonialsvue_type_template_id_52f82234_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue?vue&type=template&id=52f82234&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials/Testimonials.vue?vue&type=script&lang=js&
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



const testiContent = [{
  text: 'The web app is well engineered to meet the needs of the customers. Give it a try and you wont regret',
  avatar: images_imgAPI.avatar[0],
  name: 'Ribiro',
  title: 'Web Developer'
}, {
  text: 'The hotel/resturant/club owners are well covered as well. the mobile app is well engineered to ensure easy uploading on menus.',
  avatar: images_imgAPI.avatar[1],
  name: 'Eric',
  title: 'Mobile Developer'
}, {
  text: 'Its one of a kind, going to change the lives of many around the globe. Qrmenu has incredible services that nobody wishes to miss. The app is AI-driven and makes no mistakes. It sends the right traffic to your business and your needs. Install this digital app and change the way you market your products.',
  avatar: images_imgAPI.avatar[2],
  name: "Henry Gathong'a",
  title: 'Research and Data Analyst'
}, {
  text: 'Testimonial goes here...',
  avatar: images_imgAPI.avatar[3],
  name: 'Name',
  title: 'title'
}, {
  text: 'Testimonial goes here...',
  avatar: images_imgAPI.avatar[4],
  name: 'Name',
  title: 'title'
}, {
  text: 'Testimonial goes here...',
  avatar: images_imgAPI.avatar[5],
  name: 'Name',
  title: 'title'
}, {
  text: 'Testimonial goes here...',
  avatar: images_imgAPI.avatar[6],
  name: 'Name',
  title: 'title'
}, {
  text: 'Testimonial goes here...',
  avatar: images_imgAPI.avatar[7],
  name: 'Name',
  title: 'title'
}, {
  text: 'Testimonial goes here...',
  avatar: images_imgAPI.avatar[8],
  name: 'Name',
  title: 'title'
}, {
  text: 'Testimonial goes here...',
  avatar: images_imgAPI.avatar[9],
  name: 'Name',
  title: 'title'
}];
/* harmony default export */ var Testimonialsvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */],
    'title-main': Title,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 244, 7))
  },

  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent: testiContent,
      settingsText: {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        asNavFor: '.slider-avatar'
      },
      settingsAvatar: {
        dots: false,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        autoplay: true,
        centerPadding: '2px',
        centerMode: true,
        autoplaySpeed: 5000,
        slidesToShow: 7,
        pauseOnHover: false,
        arrows: false,
        asNavFor: '.slider-text',
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      }
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue?vue&type=script&lang=js&
 /* harmony default export */ var Testimonials_Testimonialsvue_type_script_lang_js_ = (Testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(72);

// CONCATENATED MODULE: ./components/Testimonials/Testimonials.vue



function Testimonials_injectStyles (context) {
  
  var style0 = __webpack_require__(302)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Testimonials_component = Object(componentNormalizer["a" /* default */])(
  Testimonials_Testimonialsvue_type_script_lang_js_,
  Testimonialsvue_type_template_id_52f82234_scoped_true_render,
  Testimonialsvue_type_template_id_52f82234_scoped_true_staticRenderFns,
  false,
  Testimonials_injectStyles,
  "52f82234",
  "a63d8918"
  
)

/* harmony default export */ var Testimonials = (Testimonials_component.exports);

/* vuetify-loader */



installComponents_default()(Testimonials_component, {VAvatar: VAvatar["a" /* default */],VContainer: VContainer["a" /* default */]})

// CONCATENATED MODULE: ./components/Testimonials/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Faq/Faq.vue?vue&type=template&id=f781204a&scoped=true&
var Faqvue_type_template_id_f781204a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',{staticClass:"fixed-width"},[_c('v-row',{staticClass:"spacing6"},[_c('v-col',{staticClass:"pa-6",attrs:{"md":"6"}},[_c('title-main',{attrs:{"align":_vm.isMobile ? 'center' : 'left'}},[_c('strong',[_vm._v("\n            FAQ\n          ")])]),_vm._v(" "),_c('p',{staticClass:"text use-text-subtitle2",class:[_vm.isMobile ? 'text-center' : 'text-left']},[_vm._v("\n          "+_vm._s(_vm.$t('mobileLanding.faq_subtitle'))+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"illustration"},[_c('svg',{staticClass:"deco-primary"},[_c('use',{attrs:{"xlink:href":"/images/mobile/deco-feature.svg#main"}})]),_vm._v(" "),_c('parallax-extra-small'),_vm._v(" "),_c('img',{attrs:{"src":"/images/mobile/faq.png","alt":"illustration"}})],1)],1),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"md":"6","cols":"12"}},[_c('div',{staticClass:"accordion"},[_c('v-expansion-panels',{attrs:{"active-class":"expanded"},model:{value:(_vm.panel),callback:function ($$v) {_vm.panel=$$v},expression:"panel"}},_vm._l((_vm.faqData),function(item,index){return _c('v-expansion-panel',{key:index,staticClass:"paper"},[_c('v-expansion-panel-header',{staticClass:"content"},[_c('span',{staticClass:"heading"},[_vm._v("\n                  "+_vm._s(item.q)+"\n                ")])]),_vm._v(" "),_c('v-expansion-panel-content',{staticClass:"detail"},[_c('span',[_vm._v("\n                  "+_vm._s(item.a)+"\n                ")])])],1)}),1)],1)])],1)],1)],1)}
var Faqvue_type_template_id_f781204a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Faq/Faq.vue?vue&type=template&id=f781204a&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/ExtraSmall.vue?vue&type=template&id=5b1703b0&scoped=true&
var ExtraSmallvue_type_template_id_5b1703b0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap"},[(_vm.loaded)?_vm._ssrNode("<div class=\"inner-parallax extra-small\" data-v-5b1703b0>","</div>",[_c('parallax',{attrs:{"speed-factor":0.3,"section-height":1000,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('svg',{staticClass:"triangle"},[_c('use',{attrs:{"xlink:href":"/images/mobile/triangle.svg#main"}})])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.2,"section-height":1600,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('svg',{staticClass:"circle"},[_c('use',{attrs:{"xlink:href":"/images/mobile/circle.svg#main"}})])])]),_vm._ssrNode(" "),_c('parallax',{attrs:{"speed-factor":0.15,"section-height":1300,"direction":"up"}},[_c('div',{staticClass:"figure"},[_c('div',{staticClass:"square-dot"},[_c('svg',{staticClass:"dot-many-small"},[_c('use',{attrs:{"xlink:href":"/images/mobile/dot-many.svg#main"}})])])])])],2):_vm._e()])}
var ExtraSmallvue_type_template_id_5b1703b0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/ExtraSmall.vue?vue&type=template&id=5b1703b0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/ExtraSmall.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ExtraSmallvue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/ExtraSmall.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_ExtraSmallvue_type_script_lang_js_ = (ExtraSmallvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Parallax/ExtraSmall.vue



function ExtraSmall_injectStyles (context) {
  
  var style0 = __webpack_require__(304)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ExtraSmall_component = Object(componentNormalizer["a" /* default */])(
  Parallax_ExtraSmallvue_type_script_lang_js_,
  ExtraSmallvue_type_template_id_5b1703b0_scoped_true_render,
  ExtraSmallvue_type_template_id_5b1703b0_scoped_true_staticRenderFns,
  false,
  ExtraSmall_injectStyles,
  "5b1703b0",
  "10495558"
  
)

/* harmony default export */ var ExtraSmall = (ExtraSmall_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Faq/Faq.vue?vue&type=script&lang=js&
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
//
//



const faqData = [{
  q: 'Where is QRMenu applicable?',
  a: 'Feel free to use the app for hotels, eateries, restaurants, clubs, bars, etc'
}, {
  q: 'When is the iOS app coming out?',
  a: 'Development is still underway, we will notify you once it is completed. '
}, {
  q: 'Do you have a free trial?',
  a: 'Yes. You can use the app for free for 30 days. '
}, {
  q: 'What happens when the free trial is over?',
  a: 'You have to subscribe to continue using the QRMenu services. '
}, {
  q: 'How much to pay after the free trial?',
  a: 'Ksh.300 only, to be paid monthly. '
}];
/* harmony default export */ var Faqvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */],
    ParallaxExtraSmall: ExtraSmall,
    'title-main': Title
  },

  data() {
    return {
      panel: 0,
      faqData: faqData
    };
  },

  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Faq/Faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var Faq_Faqvue_type_script_lang_js_ = (Faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
var VExpansionPanel = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
var VExpansionPanelContent = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js
var VExpansionPanelHeader = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js
var VExpansionPanels = __webpack_require__(242);

// CONCATENATED MODULE: ./components/Faq/Faq.vue



function Faq_injectStyles (context) {
  
  var style0 = __webpack_require__(306)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Faq_component = Object(componentNormalizer["a" /* default */])(
  Faq_Faqvue_type_script_lang_js_,
  Faqvue_type_template_id_f781204a_scoped_true_render,
  Faqvue_type_template_id_f781204a_scoped_true_staticRenderFns,
  false,
  Faq_injectStyles,
  "f781204a",
  "3990b83c"
  
)

/* harmony default export */ var Faq = (Faq_component.exports);

/* vuetify-loader */








installComponents_default()(Faq_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VExpansionPanel: VExpansionPanel["a" /* default */],VExpansionPanelContent: VExpansionPanelContent["a" /* default */],VExpansionPanelHeader: VExpansionPanelHeader["a" /* default */],VExpansionPanels: VExpansionPanels["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Faq/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyLogo/CompanyLogo.vue?vue&type=template&id=b81589a4&scoped=true&
var CompanyLogovue_type_template_id_b81589a4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"fixed-width"})}
var CompanyLogovue_type_template_id_b81589a4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue?vue&type=template&id=b81589a4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyLogo/CompanyLogo.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CompanyLogovue_type_script_lang_js_ = ({
  data() {
    return {
      logos: ['/images/logos/architect.png', '/images/logos/cloud.png', '/images/logos/coin.png', '/images/logos/mobile.png', '/images/logos/profile.png', '/images/logos/saas.png']
    };
  }

});
// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue?vue&type=script&lang=js&
 /* harmony default export */ var CompanyLogo_CompanyLogovue_type_script_lang_js_ = (CompanyLogovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue



function CompanyLogo_injectStyles (context) {
  
  var style0 = __webpack_require__(308)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CompanyLogo_component = Object(componentNormalizer["a" /* default */])(
  CompanyLogo_CompanyLogovue_type_script_lang_js_,
  CompanyLogovue_type_template_id_b81589a4_scoped_true_render,
  CompanyLogovue_type_template_id_b81589a4_scoped_true_staticRenderFns,
  false,
  CompanyLogo_injectStyles,
  "b81589a4",
  "01f20f46"
  
)

/* harmony default export */ var CompanyLogo = (CompanyLogo_component.exports);

/* vuetify-loader */


installComponents_default()(CompanyLogo_component, {VContainer: VContainer["a" /* default */]})

// CONCATENATED MODULE: ./components/CompanyLogo/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsEvent/NewsEvent.vue?vue&type=template&id=581f8656&scoped=true&
var NewsEventvue_type_template_id_581f8656_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_vm._ssrNode("<div class=\"deco-bg-top\" data-v-581f8656></div> "),_vm._ssrNode("<div class=\"parallax-event\" data-v-581f8656>","</div>",[_c('parallax-large')],1),_vm._ssrNode(" "),_c('title-main',{attrs:{"align":"center"}},[_vm._v("\n    "+_vm._s(_vm.$t('mobileLanding.news_title'))+"\n  ")]),_vm._ssrNode(" <p align=\"center\" class=\"use-text-subtitle2\" data-v-581f8656>\n    Our latest news and events will appear here!\n  </p> "),_vm._ssrNode("<div class=\"blog-wrap\" data-v-581f8656>","</div>",[_c('v-container',{staticClass:"fixed-width"},[_c('v-row',{staticClass:"spacing6 list-news"},[_c('v-col',{staticClass:"pa-6",attrs:{"md":"6","cols":"12"}},[_c('news-card',{attrs:{"img":_vm.imgAPI.photo[11],"type":"potrait","caption":"headline","text":"No headline at the moment!"}})],1),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"md":"6","cols":"12"}},[_c('news-card',{attrs:{"type":_vm.isMobile ? 'potrait' : 'landscape',"img":_vm.imgAPI.photo[1],"caption":"news","text":"No news at the moment!"}}),_vm._v(" "),_c('news-card',{attrs:{"type":_vm.isMobile ? 'potrait' : 'landscape',"img":_vm.imgAPI.photo[2],"caption":"news","text":"No news at the moment!"}})],1)],1)],1)],1)],2)}
var NewsEventvue_type_template_id_581f8656_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.vue?vue&type=template&id=581f8656&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/News.vue?vue&type=template&id=97ad56be&scoped=true&
var Newsvue_type_template_id_97ad56be_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news",class:_vm.type},[_vm._ssrNode("<figure data-v-97ad56be><img"+(_vm._ssrAttr("src",_vm.img))+" alt=\"thumb\" data-v-97ad56be></figure> "),_c('v-card',{staticClass:"desc"},[_c('div',{staticClass:"text"},[_c('p',{staticClass:"type caption"},[_vm._v("\n        "+_vm._s(_vm.caption)+"\n      ")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.text))])]),_vm._v(" "),_c('v-btn',{staticClass:"btn",attrs:{"text":""}},[_vm._v("\n      Read more\n    ")])],1)],2)}
var Newsvue_type_template_id_97ad56be_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/News.vue?vue&type=template&id=97ad56be&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/News.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Newsvue_type_script_lang_js_ = ({
  props: {
    caption: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/News.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Newsvue_type_script_lang_js_ = (Newsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/News.vue



function News_injectStyles (context) {
  
  var style0 = __webpack_require__(310)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var News_component = Object(componentNormalizer["a" /* default */])(
  Cards_Newsvue_type_script_lang_js_,
  Newsvue_type_template_id_97ad56be_scoped_true_render,
  Newsvue_type_template_id_97ad56be_scoped_true_staticRenderFns,
  false,
  News_injectStyles,
  "97ad56be",
  "37d87a6c"
  
)

/* harmony default export */ var News = (News_component.exports);

/* vuetify-loader */



installComponents_default()(News_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsEvent/NewsEvent.vue?vue&type=script&lang=js&
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




/* harmony default export */ var NewsEventvue_type_script_lang_js_ = ({
  components: {
    NewsCard: News,
    ParallaxLarge: Large["a" /* default */],
    'title-main': Title,
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 244, 7))
  },
  data: () => ({
    imgAPI: images_imgAPI
  }),
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown;
      return xsDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewsEvent_NewsEventvue_type_script_lang_js_ = (NewsEventvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.vue



function NewsEvent_injectStyles (context) {
  
  var style0 = __webpack_require__(312)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var NewsEvent_component = Object(componentNormalizer["a" /* default */])(
  NewsEvent_NewsEventvue_type_script_lang_js_,
  NewsEventvue_type_template_id_581f8656_scoped_true_render,
  NewsEventvue_type_template_id_581f8656_scoped_true_staticRenderFns,
  false,
  NewsEvent_injectStyles,
  "581f8656",
  "f7e4f478"
  
)

/* harmony default export */ var NewsEvent = (NewsEvent_component.exports);

/* vuetify-loader */




installComponents_default()(NewsEvent_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/NewsEvent/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterWithDeco.vue?vue&type=template&id=109beaa7&scoped=true&
var FooterWithDecovue_type_template_id_109beaa7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer-deco"},[_vm._ssrNode("<svg class=\"deco-top back\" data-v-109beaa7><use xlink:href=\"/images/mobile/deco-wave-top.svg#main\" data-v-109beaa7></use></svg> <svg class=\"deco-top cover\" data-v-109beaa7><use xlink:href=\"/images/mobile/deco-wave-top.svg#main\" data-v-109beaa7></use></svg> <div class=\"decoration\" data-v-109beaa7></div> "),_vm._ssrNode("<div class=\"action\" data-v-109beaa7>","</div>",[_vm._ssrNode("<h4 class=\"use-text-subtitle\" data-v-109beaa7>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('mobileLanding.footer_text'))+"\n    ")+"</h4> "),_vm._ssrNode("<div class=\"btn-area\" data-v-109beaa7>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/mobile/app-store.png","alt":"app store"}}),_vm._v(" "),_c('p',{staticClass:"white--text"},[_vm._v("Coming Soon!")])]),_vm._ssrNode(" <a href=\"https://play.google.com/store/apps/details?id=org.eXpesa.Qrmenu\" data-v-109beaa7><img"+(_vm._ssrAttr("src",__webpack_require__(281)))+" alt=\"play store\" data-v-109beaa7></a>")],2)],2),_vm._ssrNode(" "),_c('footer-main')],2)}
var FooterWithDecovue_type_template_id_109beaa7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.vue?vue&type=template&id=109beaa7&scoped=true&

// EXTERNAL MODULE: ./components/Footer/Footer.vue + 10 modules
var Footer = __webpack_require__(88);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterWithDeco.vue?vue&type=script&lang=js&
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

/* harmony default export */ var FooterWithDecovue_type_script_lang_js_ = ({
  components: {
    'footer-main': Footer["a" /* default */]
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp;
      return mdUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    },

    langList: function () {
      const list = [];
      this.$i18n.locales.map(item => {
        list.push({
          text: this.$t('common.' + item.code),
          value: item.code
        });
      });
      return list;
    }
  }
});
// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.vue?vue&type=script&lang=js&
 /* harmony default export */ var Footer_FooterWithDecovue_type_script_lang_js_ = (FooterWithDecovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.vue



function FooterWithDeco_injectStyles (context) {
  
  var style0 = __webpack_require__(314)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FooterWithDeco_component = Object(componentNormalizer["a" /* default */])(
  Footer_FooterWithDecovue_type_script_lang_js_,
  FooterWithDecovue_type_template_id_109beaa7_scoped_true_render,
  FooterWithDecovue_type_template_id_109beaa7_scoped_true_staticRenderFns,
  false,
  FooterWithDeco_injectStyles,
  "109beaa7",
  "1fc24a87"
  
)

/* harmony default export */ var FooterWithDeco = (FooterWithDeco_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=template&id=14f78a3f&scoped=true&
var PageNavvue_type_template_id_14f78a3f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.handleScroll),expression:"handleScroll"}],staticClass:"page-nav",class:{ show: _vm.show }},[_vm._ssrNode("<nav class=\"section-nav\" data-v-14f78a3f>","</nav>",[_c('scrollactive',{attrs:{"offset":_vm.navOffset,"active-class":"active","tag":"section"}},_vm._l((_vm.menuList),function(item,index){return _c('a',{key:index,staticClass:"anchor-link scrollactive-item",style:({ top: 50 * (_vm.menu.length - item.id) + 'px' }),attrs:{"href":item.url},on:{"click":function($event){return _vm.setOffset(item.offset)}}},[_c('v-tooltip',{staticClass:"tooltip-wrap",attrs:{"nudge-top":18,"color":"primarydark","left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('span',_vm._g({},on),[_vm._v(_vm._s(_vm.$t('mobileLanding.header_'+item.name)))])]}}],null,true)},[_vm._v(" "),_c('span',{staticClass:"tooltip"},[_vm._v(_vm._s(_vm.$t('mobileLanding.header_'+item.name)))])])],1)}),0)],1),_vm._ssrNode(" "),_c('v-tooltip',{attrs:{"nudge-top":25,"color":"primarydark","left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('scrollactive',{attrs:{"tag":"div"}},[_c('v-btn',_vm._g({staticClass:"fab anchor-link scrollactive-item",attrs:{"fab":"","href":"#home"}},on),[_c('v-icon',{staticClass:"icon",attrs:{"dark":""}},[_vm._v("mdi-arrow-up")])],1)],1)]}}])},[_vm._v(" "),_c('span',{staticClass:"tooltip"},[_vm._v("To Top")])])],2)}
var PageNavvue_type_template_id_14f78a3f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=template&id=14f78a3f&scoped=true&

// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageNav/PageNav.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//

let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

/* harmony default export */ var PageNavvue_type_script_lang_js_ = ({
  data: () => ({
    menu: menu["a" /* default */],
    navOffset: 20,
    show: false,
    menuList: [createData(menu["a" /* default */][0], '#' + menu["a" /* default */][0]), createData(menu["a" /* default */][1], '#' + menu["a" /* default */][1]), createData(menu["a" /* default */][2], '#' + menu["a" /* default */][2]), createData(menu["a" /* default */][3], '#' + menu["a" /* default */][3], -40)]
  }),
  methods: {
    handleScroll: function () {
      if (window.scrollY > 500) {
        return this.show = true;
      }

      return this.show = false;
    },
    setOffset: function (offset) {
      this.navOffset = offset;
    }
  }
});
// CONCATENATED MODULE: ./components/PageNav/PageNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var PageNav_PageNavvue_type_script_lang_js_ = (PageNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTooltip/VTooltip.sass
var VTooltip = __webpack_require__(318);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/menuable/index.js
var menuable = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js
 // Mixins







 // Helpers




/* @vue/component */

/* harmony default export */ var VTooltip_VTooltip = (Object(mixins["a" /* default */])(colorable["a" /* default */], delayable["a" /* default */], dependent["a" /* default */], detachable["a" /* default */], menuable["a" /* default */], toggleable["a" /* default */]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    fixed: {
      type: Boolean,
      default: true
    },
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;

      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },

    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;

      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }

      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      return `${this.calcYOverflow(top + this.pageYOffset)}px`;
    },

    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },

    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },

    offsetY() {
      return this.top || this.bottom;
    },

    offsetX() {
      return this.left || this.right;
    },

    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(helpers["f" /* convertToUnit */])(this.maxWidth),
        minWidth: Object(helpers["f" /* convertToUnit */])(this.minWidth),
        opacity: this.isActive ? 0.9 : 0,
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },

  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },

  mounted() {
    if (Object(helpers["o" /* getSlotType */])(this, 'activator', true) === 'v-slot') {
      Object(console["b" /* consoleError */])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },

    deactivate() {
      this.runDelay('close');
    },

    genActivatorListeners() {
      const listeners = activatable["a" /* default */].options.methods.genActivatorListeners.call(this);

      listeners.focus = e => {
        this.getActivator(e);
        this.runDelay('open');
      };

      listeners.blur = e => {
        this.getActivator(e);
        this.runDelay('close');
      };

      listeners.keydown = e => {
        if (e.keyCode === helpers["r" /* keyCodes */].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };

      return listeners;
    },

    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, [content]);
    },

    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }

  },

  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.showLazyContent(() => [this.genTransition()]), this.genActivator()]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(91);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
var directives_scroll = __webpack_require__(51);

// CONCATENATED MODULE: ./components/PageNav/PageNav.vue



function PageNav_injectStyles (context) {
  
  var style0 = __webpack_require__(316)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PageNav_component = Object(componentNormalizer["a" /* default */])(
  PageNav_PageNavvue_type_script_lang_js_,
  PageNavvue_type_template_id_14f78a3f_scoped_true_render,
  PageNavvue_type_template_id_14f78a3f_scoped_true_staticRenderFns,
  false,
  PageNav_injectStyles,
  "14f78a3f",
  "2fb2ed44"
  
)

/* harmony default export */ var PageNav = (PageNav_component.exports);

/* vuetify-loader */




installComponents_default()(PageNav_component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VTooltip: VTooltip_VTooltip})


/* vuetify-loader */


installDirectives_default()(PageNav_component, {Scroll: directives_scroll["b" /* default */]})

// CONCATENATED MODULE: ./components/PageNav/index.js

// EXTERNAL MODULE: ./components/Notification/index.js + 5 modules
var Notification = __webpack_require__(279);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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














/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    Banner: Banner,
    Counter: Counter,
    Feature: Feature,
    Showcase: Showcase,
    Testimonials: Testimonials,
    CompanyLogo: CompanyLogo,
    Faq: Faq,
    NewsEvent: NewsEvent,
    FooterWithDeco: FooterWithDeco,
    PageNav: PageNav,
    Hidden: Hidden["a" /* default */],
    Notification: Notification["a" /* default */]
  },

  head() {
    return {
      title: brand["a" /* default */].mobile.name + ' - Home Page'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(320)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "440b6657",
  "674827b9"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })
]);;
//# sourceMappingURL=index.js.map