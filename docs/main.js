(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 599:
/*!*******************************!*\
  !*** ./src/app/api-config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APPID: () => (/* binding */ APPID),
/* harmony export */   OPENWEATHER_API_URL: () => (/* binding */ OPENWEATHER_API_URL),
/* harmony export */   RESERVE_APPID: () => (/* binding */ RESERVE_APPID)
/* harmony export */ });
const APPID = '5a4b2d457ecbef9eb2a71e480b947604';
const RESERVE_APPID = 'e2372ded71d9c8b786f0b623783e0452';
const OPENWEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _interseptor_openweather_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interseptor/openweather.interceptor */ 3230);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_2__.appRoutes), _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
  })],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
    useClass: _interseptor_openweather_interceptor__WEBPACK_IMPORTED_MODULE_3__.OpenweatherInterceptor,
    multi: true
  }]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _features_forecasts_list_forecasts_list_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/forecasts-list/forecasts-list.resolver */ 9193);
/* harmony import */ var _features_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/main-page/main-page.component */ 5259);
/* harmony import */ var _features_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/forecasts-list/forecasts-list.component */ 5563);



const appRoutes = [{
  path: '',
  component: _features_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _features_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_2__.ForecastsListComponent,
  resolve: {
    forecast: _features_forecasts_list_forecasts_list_resolver__WEBPACK_IMPORTED_MODULE_0__.forecastsListResolver
  }
}];

/***/ }),

/***/ 5563:
/*!*********************************************************************!*\
  !*** ./src/app/features/forecasts-list/forecasts-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 8269);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 4204);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var app_pipes_weather_icon_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pipes/weather-icon.pipe */ 9409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ForecastsListComponent = class ForecastsListComponent {
  constructor(route) {
    this.forecast = route.snapshot.data.forecast;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, app_pipes_weather_icon_pipe__WEBPACK_IMPORTED_MODULE_2__.WeatherIconPipe, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 9193:
/*!********************************************************************!*\
  !*** ./src/app/features/forecasts-list/forecasts-list.resolver.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forecastsListResolver: () => (/* binding */ forecastsListResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var app_services_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/weather.service */ 1125);


const forecastsListResolver = (route, state) => {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(app_services_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService).getForecast(route.params['zipcode']);
};

/***/ }),

/***/ 1274:
/*!*************************************************************************************!*\
  !*** ./src/app/features/main-page/current-condition/current-condition.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_condition_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-condition.component.html?ngResource */ 5436);
/* harmony import */ var _current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-condition.component.css?ngResource */ 6363);
/* harmony import */ var _current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var app_pipes_weather_icon_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pipes/weather-icon.pipe */ 9409);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CurrentConditionsComponent = class CurrentConditionsComponent {
  static #_ = this.propDecorators = {
    condition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-current-condition',
  template: _current_condition_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, app_pipes_weather_icon_pipe__WEBPACK_IMPORTED_MODULE_2__.WeatherIconPipe],
  styles: [(_current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 5259:
/*!***********************************************************!*\
  !*** ./src/app/features/main-page/main-page.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var app_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/location.service */ 5434);
/* harmony import */ var app_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/weather.service */ 1125);
/* harmony import */ var app_shared_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/tabs/tabs.module */ 9735);
/* harmony import */ var _current_condition_current_condition_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-condition/current-condition.component */ 1274);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 4398);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let MainPageComponent = class MainPageComponent {
  constructor() {
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(app_services_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(app_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.currentConditionsByZip = this.weatherService.currentConditions;
  }
  addLocation(zipcode) {
    this.locationService.addLocation(zipcode);
  }
  removeLocation(zipcode) {
    this.locationService.removeLocation(zipcode);
  }
};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _current_condition_current_condition_component__WEBPACK_IMPORTED_MODULE_4__.CurrentConditionsComponent, _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_5__.ZipcodeEntryComponent, app_shared_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__.TabsModule]
})], MainPageComponent);


/***/ }),

/***/ 4398:
/*!*****************************************************************************!*\
  !*** ./src/app/features/main-page/zipcode-entry/zipcode-entry.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 3544);
/* harmony import */ var _zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry.component.css?ngResource */ 8066);
/* harmony import */ var _zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _zipcode_unique_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zipcode-unique.validator */ 764);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor() {
    this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    //we can also add async validator to check if the zipcode is valid
    this.input = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, (0,_zipcode_unique_validator__WEBPACK_IMPORTED_MODULE_2__.CheckDuplicates)()]);
  }
  addLocation() {
    if (this.input.valid) {
      this.add.emit(this.input.value);
      this.input.reset();
    } else {
      this.input.markAsTouched();
    }
  }
  static #_ = this.propDecorators = {
    add: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  };
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
  styles: [(_zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ZipcodeEntryComponent);


/***/ }),

/***/ 764:
/*!******************************************************************************!*\
  !*** ./src/app/features/main-page/zipcode-entry/zipcode-unique.validator.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckDuplicates: () => (/* binding */ CheckDuplicates)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var app_services_location_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/location.service */ 5434);


function CheckDuplicates() {
  const locationsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(app_services_location_service__WEBPACK_IMPORTED_MODULE_0__.LocationService);
  return control => {
    return locationsService.hasLocation(control.value) ? {
      duplicate: true
    } : null;
  };
}

/***/ }),

/***/ 3230:
/*!********************************************************!*\
  !*** ./src/app/interseptor/openweather.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenweatherInterceptor: () => (/* binding */ OpenweatherInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var app_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/api-config */ 599);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let OpenweatherInterceptor = class OpenweatherInterceptor {
  intercept(req, next) {
    if (req.url.includes(app_api_config__WEBPACK_IMPORTED_MODULE_0__.OPENWEATHER_API_URL)) {
      const newReq = req.clone({
        params: (req.params ? req.params : new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()).set('appid', app_api_config__WEBPACK_IMPORTED_MODULE_0__.APPID)
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
};
OpenweatherInterceptor = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], OpenweatherInterceptor);


/***/ }),

/***/ 9409:
/*!********************************************!*\
  !*** ./src/app/pipes/weather-icon.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherIconPipe: () => (/* binding */ WeatherIconPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
let WeatherIconPipe = class WeatherIconPipe {
  transform(id) {
    if (id >= 200 && id <= 232) return ICON_URL + 'art_storm.png';else if (id >= 501 && id <= 511) return ICON_URL + 'art_rain.png';else if (id === 500 || id >= 520 && id <= 531) return ICON_URL + 'art_light_rain.png';else if (id >= 600 && id <= 622) return ICON_URL + 'art_snow.png';else if (id >= 801 && id <= 804) return ICON_URL + 'art_clouds.png';else if (id === 741 || id === 761) return ICON_URL + 'art_fog.png';else return ICON_URL + 'art_clear.png';
  }
};
WeatherIconPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'appWeatherIcon',
  standalone: true
})], WeatherIconPipe);


/***/ }),

/***/ 5434:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 462);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1063);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const LOCATIONS = 'locations';
let LocationService = class LocationService {
  constructor() {
    this._locations$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.loadLocations());
    this.locations$ = this._locations$.asObservable();
    this._locations$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.skip)(1)).subscribe(locations => {
      localStorage.setItem(LOCATIONS, JSON.stringify(locations));
    });
  }
  addLocation(zipcode) {
    this._locations$.next([...this._locations$.getValue(), zipcode]);
  }
  removeLocation(zipcode) {
    const updatedLocations = this._locations$.getValue().filter(loc => loc !== zipcode);
    this._locations$.next(updatedLocations);
  }
  hasLocation(zipcode) {
    return this._locations$.getValue().includes(zipcode);
  }
  loadLocations() {
    const locString = localStorage.getItem(LOCATIONS);
    return locString ? JSON.parse(locString) : [];
  }
  static #_ = this.ctorParameters = () => [];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], LocationService);


/***/ }),

/***/ 9140:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const EXPIRATION_TIME = 2 * 60 * 60 * 1000; // 2 hours
let StorageService = class StorageService {
  setItem(key, value) {
    const storageItem = {
      value,
      timestamp: Date.now()
    };
    try {
      localStorage.setItem(key, JSON.stringify(storageItem));
    } catch (error) {
      console.error(`Error setting item for key ${key}:`, error);
    }
  }
  getItem(key) {
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    try {
      const {
        value,
        timestamp
      } = JSON.parse(item);
      if (Date.now() - timestamp > EXPIRATION_TIME) {
        localStorage.removeItem(key);
        return null;
      }
      return value;
    } catch (error) {
      console.error(`Error parsing item for key ${key}:`, error);
      return null;
    }
  }
};
StorageService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ }),

/***/ 1125:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.service */ 5434);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 9140);
/* harmony import */ var app_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/api-config */ 599);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const WEATHER_KEY = 'weather';
const FORECAST_KEY = 'forecast';
let WeatherService = class WeatherService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_0__.LocationService);
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService);
    this.currentConditions = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.toSignal)(this.locationService.locations$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(locations => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(locations.map(loc => this.getCurrentConditions(loc))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.defaultIfEmpty)([])))));
  }
  getCurrentConditions(zipcode) {
    return this.requestData(`${app_api_config__WEBPACK_IMPORTED_MODULE_2__.OPENWEATHER_API_URL}/weather?zip=${zipcode},us&units=imperial`, `${WEATHER_KEY}-${zipcode}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(data => ({
      zip: zipcode,
      data
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
        zip: zipcode,
        error: error.message ?? `Something went wrong durning request for that zipcode - ${zipcode}`
      });
    }));
  }
  getForecast(zipcode) {
    return this.requestData(`${app_api_config__WEBPACK_IMPORTED_MODULE_2__.OPENWEATHER_API_URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5`, `${FORECAST_KEY}-${zipcode}`);
  }
  requestData(url, keyInStorage) {
    if (keyInStorage) {
      const cached = this.storageService.getItem(keyInStorage);
      return cached ? (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(cached) : this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(data => this.storageService.setItem(keyInStorage, data)));
    }
    //not caching the storage if there is no key
    return this.http.get(url);
  }
};
WeatherService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], WeatherService);


/***/ }),

/***/ 2601:
/*!****************************************************************!*\
  !*** ./src/app/shared/tabs/tab-header/tab-header.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabHeaderDirective: () => (/* binding */ TabHeaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TabHeaderDirective = class TabHeaderDirective {};
TabHeaderDirective = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: 'app-tab-header'
})], TabHeaderDirective);


/***/ }),

/***/ 7842:
/*!**************************************************!*\
  !*** ./src/app/shared/tabs/tab/tab.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabComponent: () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component.html?ngResource */ 9788);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component.css?ngResource */ 1206);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabComponent = class TabComponent {
  constructor() {
    this._active = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
  }
  get active() {
    return this._active();
  }
  set active(value) {
    this._active.set(value);
  }
  static #_ = this.propDecorators = {
    tabTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    headerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['header']
    }]
  };
};
TabComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab',
  template: _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  styles: [(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabComponent);


/***/ }),

/***/ 1213:
/*!***********************************************!*\
  !*** ./src/app/shared/tabs/tabs.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsComponent: () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 1803);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.css?ngResource */ 9608);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab/tab.component */ 7842);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabsComponent = class TabsComponent {
  constructor() {
    this.isFirstLoad = true;
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef);
  }
  ngAfterContentChecked() {
    this.preselectActiveTabOnFirstLoad();
    this.cdr.markForCheck();
  }
  selectTab(tab, event) {
    //avoid selecting tab when clicking in a button inside app-tab-header ng-content
    if (event?.target && event.target instanceof HTMLButtonElement) {
      return;
    }
    this.tabs.toArray().forEach(t => t.active = t === tab);
  }
  preselectActiveTabOnFirstLoad() {
    if (this.isFirstLoad && this.tabs.length > 0) {
      const activeTab = this.tabs.toArray().find(tab => tab.active) ?? this.tabs.first;
      this.selectTab(activeTab);
      this.isFirstLoad = false;
    }
  }
  static #_ = this.propDecorators = {
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent]
    }]
  };
};
TabsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tabs',
  template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  styles: [(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsComponent);


/***/ }),

/***/ 9735:
/*!********************************************!*\
  !*** ./src/app/shared/tabs/tabs.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsModule: () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab/tab.component */ 7842);
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component */ 1213);
/* harmony import */ var _tab_header_tab_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-header/tab-header.directive */ 2601);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let TabsModule = class TabsModule {};
TabsModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TabsComponent, _tab_tab_component__WEBPACK_IMPORTED_MODULE_0__.TabComponent, _tab_header_tab_header_directive__WEBPACK_IMPORTED_MODULE_2__.TabHeaderDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  exports: [_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TabsComponent, _tab_tab_component__WEBPACK_IMPORTED_MODULE_0__.TabComponent, _tab_header_tab_header_directive__WEBPACK_IMPORTED_MODULE_2__.TabHeaderDirective]
})], TabsModule);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 4204:
/*!*********************************************************************************!*\
  !*** ./src/app/features/forecasts-list/forecasts-list.component.css?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/features/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6363:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/main-page/current-condition/current-condition.component.css?ngResource ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: block;
}

.flex {
  display: flex;
  justify-content: space-between;
}
.error-message {
  color: red;
  padding: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/app/features/main-page/current-condition/current-condition.component.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,aAAa;AACf","sourcesContent":[":host {\r\n  display: block;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.error-message {\r\n  color: red;\r\n  padding: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8066:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/main-page/zipcode-entry/zipcode-entry.component.css?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.form-control.ng-touched.ng-invalid {
  border-color: #dc3545;
}
`, "",{"version":3,"sources":["webpack://./src/app/features/main-page/zipcode-entry/zipcode-entry.component.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;AACvB","sourcesContent":[".form-control.ng-touched.ng-invalid {\r\n  border-color: #dc3545;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1206:
/*!**************************************************************!*\
  !*** ./src/app/shared/tabs/tab/tab.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: block;
}
`, "",{"version":3,"sources":["webpack://./src/app/shared/tabs/tab/tab.component.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB","sourcesContent":[":host {\n  display: block;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9608:
/*!***********************************************************!*\
  !*** ./src/app/shared/tabs/tabs.component.css?ngResource ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: block;
}

.tabs {
  display: flex;
  gap: 5px;
}

.tabs__item {
  background: lightblue;
  color: #000;
  padding: 5px;
  cursor: pointer;
}

.tabs__item--active {
  background: burlywood;
}
`, "",{"version":3,"sources":["webpack://./src/app/shared/tabs/tabs.component.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[":host {\n  display: block;\n}\n\n.tabs {\n  display: flex;\n  gap: 5px;\n}\n\n.tabs__item {\n  background: lightblue;\n  color: #000;\n  padding: 5px;\n  cursor: pointer;\n}\n\n.tabs__item--active {\n  background: burlywood;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8269:
/*!**********************************************************************************!*\
  !*** ./src/app/features/forecasts-list/forecasts-list.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">5-day forecast for {{ forecast?.city.name }}</h3>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ dailyForecast.dt * 1000 | date : 'EEEE, MMM d' }}:\r\n        {{ dailyForecast.weather[0].main }}\r\n        - Min: {{ dailyForecast.temp.min | number : '.0-0' }} - Max:\r\n        {{ dailyForecast.temp.max | number : '.0-0' }}\r\n\r\n        <img\r\n          [src]=\"dailyForecast.weather[0].id | appWeatherIcon\"\r\n          class=\"icon\"\r\n        />\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<button class=\"btn btn-success\" [routerLink]=\"'/'\">< Back to main page</button>\r\n";

/***/ }),

/***/ 5436:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/main-page/current-condition/current-condition.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if(condition.data){\r\n<div class=\"well flex\">\r\n  <div>\r\n    <h3>{{ condition.data.name }} ({{ condition.zip }})</h3>\r\n    <h4>Current conditions: {{ condition.data.weather[0].main }}</h4>\r\n    <h4>Temperatures today:</h4>\r\n    <p>\r\n      Current {{ condition.data.main.temp | number : '.0-0' }} - Max\r\n      {{ condition.data.main.temp_max | number : '.0-0' }} - Min\r\n      {{ condition.data.main.temp_min | number : '.0-0' }}\r\n    </p>\r\n    <p>\r\n      <a [routerLink]=\"['/forecast', condition.zip]\"\r\n        >Show 5-day forecast for {{ condition.data.name }}</a\r\n      >\r\n    </p>\r\n  </div>\r\n  <div>\r\n    <img [src]=\"condition.data.weather[0].id | appWeatherIcon\" />\r\n  </div>\r\n</div>\r\n} @if(condition.error){\r\n<div class=\"error-message\">\r\n  {{ condition.error }}\r\n</div>\r\n}\r\n";

/***/ }),

/***/ 920:
/*!************************************************************************!*\
  !*** ./src/app/features/main-page/main-page.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n  <app-zipcode-entry (add)=\"addLocation($event)\"> </app-zipcode-entry>\r\n\r\n  <app-tabs>\r\n    @for (item of currentConditionsByZip(); track item.zip) {\r\n    <app-tab>\r\n      <app-tab-header>\r\n        {{ item.data?.name }} {{ item.zip }}\r\n\r\n        <button\r\n          class=\"btn btn-danger btn-xs\"\r\n          (click)=\"removeLocation(item.zip)\"\r\n        >\r\n          remove\r\n        </button>\r\n      </app-tab-header>\r\n      <app-current-condition [condition]=\"item\"></app-current-condition>\r\n    </app-tab>\r\n    }\r\n  </app-tabs>\r\n</div>\r\n";

/***/ }),

/***/ 3544:
/*!******************************************************************************************!*\
  !*** ./src/app/features/main-page/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <input\r\n    type=\"text\"\r\n    [formControl]=\"input\"\r\n    placeholder=\"Zipcode\"\r\n    class=\"form-control\"\r\n  />\r\n  <div class=\"error\" *ngIf=\"input.touched && input.hasError('duplicate')\">\r\n    Location already exists\r\n  </div>\r\n  <br />\r\n  <button class=\"btn btn-primary\" (click)=\"addLocation()\">Add location</button>\r\n</div>\r\n";

/***/ }),

/***/ 9788:
/*!***************************************************************!*\
  !*** ./src/app/shared/tabs/tab/tab.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-template #header>\r\n  <ng-content select=\"app-tab-header\"></ng-content>\r\n</ng-template>\r\n<div *ngIf=\"active\">\r\n  <ng-content></ng-content>\r\n</div>\r\n";

/***/ }),

/***/ 1803:
/*!************************************************************!*\
  !*** ./src/app/shared/tabs/tabs.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"tabs\">\r\n  <div\r\n    *ngFor=\"let tab of tabs\"\r\n    class=\"tabs__item\"\r\n    [class.tabs__item--active]=\"tab.active\"\r\n    (click)=\"selectTab(tab, $event)\"\r\n  >\r\n    {{ tab.tabTitle }}\r\n\r\n    <ng-container *ngTemplateOutlet=\"tab.headerRef\"></ng-container>\r\n  </div>\r\n</div>\r\n<ng-content></ng-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map