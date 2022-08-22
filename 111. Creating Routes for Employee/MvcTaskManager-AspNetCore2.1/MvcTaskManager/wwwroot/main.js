(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/components/about/about.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/about/about.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>About</h1>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"

/***/ }),

/***/ "./src/app/admin/components/about/about.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/about/about.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/components/about/about.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/admin/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/admin/components/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/components/about/about.component */ "./src/app/admin/components/about/about.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _guards_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/can-deactivate-guard.service */ "./src/app/guards/can-deactivate-guard.service.ts");







var routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], data: { linkIndex: 2 } },
    { path: "signup", component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], canDeactivate: [_guards_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_6__["CanDeactivateGuardService"]], data: { linkIndex: 3 } },
    { path: "about", component: _admin_components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], data: { linkIndex: 1 } },
    { path: "admin", loadChildren: function () { return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts")).then(function (m) { return m.AdminModule; }); } },
    { path: "employee", loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./employee/employee.module */ "./src/app/employee/employee.module.ts")).then(function (m) { return m.EmployeeModule; }); } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true, enableTracing: false, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-success navbar-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n        Angular Task Manager\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mynav\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"mynav\">\n        <ul class=\"navbar-nav mr-auto\">\n\n            <ng-container *ngIf=\"loginService.currentUserName != null && loginService.currentUserRole == 'Admin'\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\" [ '/admin', 'dashboard' ] \">Dashboard</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\" [ '/admin', 'projects' ] \">Projects</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\" [ '/admin', 'masters' ] \">Masters</a>\n                </li>\n            </ng-container>\n\n            <ng-container *ngIf=\"loginService.currentUserName != null && loginService.currentUserRole == 'Employee'\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\" [ '/employee', 'tasks' ] \">Tasks</a>\n                </li>\n            </ng-container>\n\n            <ng-container *ngIf=\"loginService.currentUserName == null\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\" [ '/login' ] \">Login</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\" [ '/signup' ] \">Sign Up</a>\n                </li>\n            </ng-container>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\" [ '/about' ] \">About</a>\n            </li>\n\n            <ng-container *ngIf=\"loginService.currentUserName != null\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\" [ '/myprofile' ] \">{{loginService.currentUserName}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" (click)=\"loginService.Logout()\">Logout</a>\n                </li>\n            </ng-container>\n        </ul>\n\n        <form class=\"form-inline my-2 my-lg-0\">\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"search\"><i class=\"fa fa-search\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n            <button class=\"btn btn-warning my2- my-sm-0\" type=\"button\" (click)=\"onSearchClick()\">Search</button>\n        </form>\n    </div>\n</nav>\n\n<div class=\"container-fluid\" [@routeAnimations]=\"getState(outlet)\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_router_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/router-logger.service */ "./src/app/services/router-logger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-animations */ "./src/app/my-animations.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(loginService, domSanitizer, routerLoggerService, router) {
        this.loginService = loginService;
        this.domSanitizer = domSanitizer;
        this.routerLoggerService = routerLoggerService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                var userName = (_this.loginService.currentUserName) ? _this.loginService.currentUserName : "anonymous";
                var logMsg = new Date().toLocaleString() + ": " + userName + " navigates to " + event.url;
                _this.routerLoggerService.log(logMsg).subscribe();
            }
        });
    };
    AppComponent.prototype.onSearchClick = function () {
        console.log(this.loginService.currentUserName);
    };
    AppComponent.prototype.getState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute.snapshot.url[0].path && outlet.activatedRouteData["linkIndex"] : "none";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_my_animations__WEBPACK_IMPORTED_MODULE_6__["keyFrameAnimation"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _services_router_logger_service__WEBPACK_IMPORTED_MODULE_4__["RouterLoggerService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/jwt-interceptor.service */ "./src/app/interceptors/jwt-interceptor.service.ts");
/* harmony import */ var _interceptors_jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/jwt-un-authorized-interceptor.service */ "./src/app/interceptors/jwt-un-authorized-interceptor.service.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _directives_alert_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/alert.directive */ "./src/app/directives/alert.directive.ts");
/* harmony import */ var _directives_repeater_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/repeater.directive */ "./src/app/directives/repeater.directive.ts");
/* harmony import */ var _employee_employee_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee/employee.module */ "./src/app/employee/employee.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_components_about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/components/about/about.component */ "./src/app/admin/components/about/about.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _admin_components_about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"],
                _directives_alert_directive__WEBPACK_IMPORTED_MODULE_12__["AlertDirective"],
                _directives_repeater_directive__WEBPACK_IMPORTED_MODULE_13__["RepeaterDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _employee_employee_module__WEBPACK_IMPORTED_MODULE_14__["EmployeeModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () {
                            return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null);
                        }
                    }
                })
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["JwtUnAuthorizedInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-xl-5 col-md-9 mx-auto\">\n      <div class=\"card mt-4\">\n        <div class=\"card-header bg-secondary text-white\">\n          <h3>Login</h3>\n          <div appAlert [error]=\"loginError\" *ngIf=\"loginError\"></div>\n        </div>\n\n        <div class=\"card-body\">\n          <div class=\"form-group form-row\">\n            <label for=\"UserName\" class=\"col-md-4 col-form-label\">Username</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"loginViewModel.UserName\" name=\"UserName\" autofocus=\"autofocus\">\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"Password\" class=\"col-md-4 col-form-label\">Password</label>\n            <div class=\"col-md-8\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginViewModel.Password\" name=\"Password\">\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"card-footer text-right\">\n          <!-- <span class=\"text-danger\">{{loginError}}&nbsp;</span> -->\n          <button class=\"btn btn-primary\" (click)=\"onLoginClick($event)\">Login</button>\n\n          <!-- <div *appRepeater=\"5; let i\">\n            <a class=\"btn btn-primary\" data-toggle=\"collapse\" [href]=\" '#collapse' + i \" role=\"button\">Show Details</a>\n\n            <div class=\"collapse\" [id]=\" 'collapse' + i\">\n              <div class=\"card card-body\">\n                Actual details here\n              </div>\n            </div>\n          </div> -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/login-view-model */ "./src/app/models/login-view-model.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginViewModel = new _models_login_view_model__WEBPACK_IMPORTED_MODULE_2__["LoginViewModel"]();
        this.loginError = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginClick = function (event) {
        var _this = this;
        this.loginService.Login(this.loginViewModel).subscribe(function (response) {
            if (_this.loginService.currentUserRole == "Admin") {
                _this.router.navigate(["/admin", "dashboard"]);
            }
            else {
                _this.router.navigate(["/employee", "tasks"]);
            }
        }, function (error) {
            console.log(error);
            _this.loginError = "Invalid Username or Password";
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 col-xl-6 mx-auto\">\n\n    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmitClick()\">\n\n      <div class=\"card mt-1\">\n        <div class=\"card-header\">\n          <h4>Sign Up</h4>\n        </div>\n\n        <div class=\"card-body\">\n\n          <div class=\"form-group form-row\" formGroupName=\"personName\">\n            <label for=\"firstName\" class=\"col-md-4 col-form-label\">First Name:</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" name=\"firstName\" id=\"firstName\" placeholder=\"First Name\" class=\"form-control\" formControlName=\"firstName\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('personName.firstName').invalid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('personName.firstName').valid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.firstName').invalid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted) && signUpForm.get('personName.firstName').errors?.required\">First name can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.firstName').invalid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted) && signUpForm.get('personName.firstName').errors?.minlength\">First name should contain at least 2 characters</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\" formGroupName=\"personName\">\n            <label for=\"lastName\" class=\"col-md-4 col-form-label\">Last Name:</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" name=\"lastName\" id=\"lastName\" placeholder=\"Last Name\" class=\"form-control\" formControlName=\"lastName\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('personName.lastName').invalid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('personName.lastName').valid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.lastName').invalid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted) && signUpForm.get('personName.lastName').errors?.required\">Last name can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.lastName').invalid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted) && signUpForm.get('personName.lastName').errors?.minlength\">Last name should contain at least 2 characters</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"email\" class=\"col-md-4 col-form-label\">Email:</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('email').valid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) && signUpForm.get('email').errors?.required\">Email can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) && signUpForm.get('email').errors?.email\">Email is invalid</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) && signUpForm.get('email').errors?.uniqueEmail\">Email already exists</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"mobile\" class=\"col-md-4 col-form-label\">Mobile:</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" name=\"mobile\" id=\"mobile\" placeholder=\"Mobile\" class=\"form-control\" formControlName=\"mobile\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('mobile').invalid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('mobile').valid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('mobile').invalid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted) && signUpForm.get('mobile').errors?.required\">Mobile can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('mobile').invalid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted) && signUpForm.get('mobile').errors?.pattern\">Mobile is invalid</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"dateOfBirth\" class=\"col-md-4 col-form-label\">Date of Birth:</label>\n            <div class=\"col-md-8\">\n              <input type=\"date\" name=\"dateOfBirth\" id=\"dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\" formControlName=\"dateOfBirth\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('dateOfBirth').invalid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('dateOfBirth').valid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('dateOfBirth').invalid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted) && signUpForm.get('dateOfBirth').errors?.required\">Date of Birth can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('dateOfBirth').invalid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted) && signUpForm.get('dateOfBirth').errors?.minAge\">Minimum Age must be 18</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"password\" class=\"col-md-4 col-form-label\">Password:</label>\n            <div class=\"col-md-8\">\n              <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('password').invalid && (signUpForm.get('password').dirty || signUpForm.get('password').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('password').valid && (signUpForm.get('password').dirty || signUpForm.get('password').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('password').invalid && (signUpForm.get('password').dirty || signUpForm.get('password').touched || signUpForm.submitted) && signUpForm.get('password').errors?.required\">Password can't be blank</span>\n            </div>\n          </div>\n\n\n          <div class=\"form-group form-row\">\n            <label for=\"confirmPassword\" class=\"col-md-4 col-form-label\">Confirm Password:</label>\n            <div class=\"col-md-8\">\n              <input type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"Confirm Password\" class=\"form-control\" formControlName=\"confirmPassword\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('confirmPassword').invalid && (signUpForm.get('confirmPassword').dirty || signUpForm.get('confirmPassword').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('confirmPassword').valid && (signUpForm.get('confirmPassword').dirty || signUpForm.get('confirmPassword').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('confirmPassword').invalid && (signUpForm.get('confirmPassword').dirty || signUpForm.get('confirmPassword').touched || signUpForm.submitted) && signUpForm.get('confirmPassword').errors?.required\">Confirm Password can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.invalid && (signUpForm.dirty || signUpForm.touched || signUpForm.submitted) && signUpForm.errors?.compareValidator\">Password and Confirm Password do not match</span>\n            </div>\n          </div>\n\n\n          <div class=\"form-group form-row\">\n            <label class=\"col-md-4 col-form-label\">Gender:</label>\n            <div class=\"col-md-8\">\n\n              <div class=\"form-check-label form-check-inline\" *ngFor=\"let gender of genders\">\n                <input type=\"radio\" name=\"gender\" [id]=\"gender\" [value]=\"gender\" class=\"form-check-input\" formControlName=\"gender\">\n                <label [for]=\"gender\" class=\"form-check-label\">{{gender}}</label>\n              </div>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('gender').invalid && (signUpForm.get('gender').dirty || signUpForm.get('gender').touched || signUpForm.submitted) && signUpForm.get('gender').errors?.required\">Please select gender</span>\n\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"countryID\" class=\"col-md-4 col-form-label\">Country:</label>\n            <div class=\"col-md-8\">\n              <select name=\"countryID\" id=\"countryID\" class=\"form-control\" formControlName=\"countryID\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('countryID').invalid && (signUpForm.get('countryID').dirty || signUpForm.get('countryID').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('countryID').valid && (signUpForm.get('countryID').dirty || signUpForm.get('countryID').touched || signUpForm.submitted) }\">\n                <option value=\"null\">Please Select</option>\n                <option *ngFor=\"let country of countries\" [value]=\"country.countryID\">\n                  {{country.countryName}}\n                </option>\n              </select>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('countryID').invalid && (signUpForm.get('countryID').dirty || signUpForm.get('countryID').touched || signUpForm.submitted) && signUpForm.get('countryID').errors?.required\">Please select country</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label class=\"col-md-4 col-form-label\"></label>\n            <div class=\"col-md-8\">\n              <input type=\"checkbox\" name=\"receiveNewsLetters\" id=\"receiveNewsLetters\" value=\"true\" class=\"form-check-input\" formControlName=\"receiveNewsLetters\">\n              <label for=\"receiveNewsLetters\" class=\"form-check-label\">Receive News Letters</label>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label class=\"col-md-4 col-form-label\">Skills:</label>\n            <div class=\"col-md-8\" formArrayName=\"skills\">\n              <div class=\"row\" *ngFor=\"let skill of signUpForm.get('skills').controls; let i = index\" [formGroupName]=\"i\">\n\n                <div class=\"col-5\">\n                  <input type=\"text\" name=\"skillName\" id=\"skillName\" placeholder=\"Skill Name\" formControlName=\"skillName\" class=\"form-control\" [ngClass]=\"{\n                    'is-invalid': skill.get('skillName').invalid && (skill.get('skillName').dirty || skill.get('skillName').touched || signUpForm.submitted),\n    \n                    'is-valid': skill.get('skillName').valid && (skill.get('skillName').dirty || skill.get('skillName').touched || signUpForm.submitted) }\">\n                </div>\n\n                <div class=\"col-4\">\n                  <select name=\"level\" id=\"level\" formControlName=\"level\" class=\"form-control\" [ngClass]=\"{\n                    'is-invalid': skill.get('level').invalid && (skill.get('level').dirty || skill.get('level').touched || signUpForm.submitted),\n    \n                    'is-valid': skill.get('level').valid && (skill.get('level').dirty || skill.get('level').touched || signUpForm.submitted) }\">\n                    <option value=\"null\">Please Select</option>\n                    <option value=\"Beginner\">Beginner</option>\n                    <option value=\"Intermediate\">Intermediate</option>\n                    <option value=\"Professional\">Professional</option>\n                    <option value=\"Expert\">Expert</option>\n                  </select>\n                </div>\n\n                <div class=\"col-3\">\n                  <button class=\"btn btn-danger\" type=\"button\" (click)=\"onRemoveClick(i)\">Remove</button>\n                </div>\n              </div>\n\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"onAddSkill()\">Add Skill</button>\n            </div>\n\n          </div>\n\n          <!-- {{signUpForm.value | json}} -->\n        </div>\n\n        <div class=\"card-footer\">\n          <button class=\"btn btn-success float-right\">Create Account</button>\n          <div class=\"text-danger\">{{registerError}}</div>\n        </div>\n\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/countries.service */ "./src/app/services/countries.service.ts");
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/custom-validators.service */ "./src/app/services/custom-validators.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(countriesService, formBuilder, customValidatorsService, loginService, router) {
        this.countriesService = countriesService;
        this.formBuilder = formBuilder;
        this.customValidatorsService = customValidatorsService;
        this.loginService = loginService;
        this.router = router;
        this.genders = ["male", "female"];
        this.countries = [];
        this.registerError = null;
        this.canLeave = true;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countriesService.getCountries().subscribe(function (response) {
            _this.countries = response;
        });
        this.signUpForm = this.formBuilder.group({
            personName: this.formBuilder.group({
                firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            }),
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], [this.customValidatorsService.DuplicateEmailValidator()], { updateOn: 'blur' }],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[789]\d{9}$/)]],
            dateOfBirth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.customValidatorsService.minimumAgeValidator(18)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            countryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            receiveNewsLetters: [null],
            skills: this.formBuilder.array([])
        }, {
            validators: [
                this.customValidatorsService.compareValidator("confirmPassword", "password")
            ]
        });
        this.signUpForm.valueChanges.subscribe(function (value) {
            //console.log(value);
            _this.canLeave = false;
        });
    };
    SignUpComponent.prototype.onSubmitClick = function () {
        var _this = this;
        //Display current form value
        this.signUpForm["submitted"] = true;
        console.log(this.signUpForm);
        if (this.signUpForm.valid) {
            var signUpViewModel = this.signUpForm.value;
            this.loginService.Register(signUpViewModel).subscribe(function (response) {
                _this.canLeave = true;
                _this.router.navigate(["/employee", "tasks"]);
            }, function (error) {
                console.log(error);
                _this.registerError = "Unable to submit";
            });
        }
        //setValue
        // this.signUpForm.setValue({
        //   firstName: "Adam",
        //   lastName: "Smith",
        //   email: "smith@gmail.com",
        //   mobile: "9876543210",
        //   dateOfBirth: "2020-01-01",
        //   gender: "male",
        //   countryID: 3,
        //   receiveNewsLetters: true
        // });
        //patchValue
        // this.signUpForm.patchValue({
        //   firstName: "Adam",
        //   lastName: "Smith",
        //   email: "smith@gmail.com"
        // });
        //reset
        //this.signUpForm.reset();
        //reset with Parameters
        // this.signUpForm.reset({
        //   firstName: "Adam",
        //   lastName: "Smith",
        //   email: "smith@gmail.com"
        // });
    };
    SignUpComponent.prototype.onAddSkill = function () {
        var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            skillName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            skillLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.signUpForm.get("skills").push(formGroup);
    };
    SignUpComponent.prototype.onRemoveClick = function (index) {
        this.signUpForm.get("skills").removeAt(index);
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/components/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"], _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/directives/alert.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/alert.directive.ts ***!
  \***********************************************/
/*! exports provided: AlertDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDirective", function() { return AlertDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertDirective = /** @class */ (function () {
    function AlertDirective(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
    }
    AlertDirective.prototype.ngOnInit = function () {
        /* div */
        this.divElement = this.renderer2.createElement("div"); //<div></div>
        this.renderer2.setAttribute(this.divElement, "role", "alert"); //<div role="alert"> </div>
        this.renderer2.setAttribute(this.divElement, "class", "alert alert-danger fade show");
        //<div role="alert" class="alert alert-danger fade show"> </div>
        this.renderer2.setStyle(this.divElement, "transition", "transform 0.5s");
        //<div role="alert" class="alert alert-danger fade show" style="transition: transform 0.5s"> </div>
        /* span */
        this.spanElement = this.renderer2.createElement("span");
        this.renderer2.setAttribute(this.spanElement, "class", "message");
        //<span class="message"></span>
        /* spanText */
        this.spanText = this.renderer2.createText(this.error);
        this.renderer2.appendChild(this.spanElement, this.spanText);
        //<span class="message">${this.error}</span>
        this.renderer2.appendChild(this.divElement, this.spanElement);
        //<div role="alert" class="alert alert-danger fade show" style="transition: transform 0.5s"> <span class="message">${this.error}</span> </div>
        this.elementRef.nativeElement.appendChild(this.divElement);
        this.title = "Please try again!";
    };
    AlertDirective.prototype.onMouseEnter = function (event) {
        //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1.1)";
        this.renderer2.setStyle(this.divElement, "transform", "scale(1.1)");
    };
    AlertDirective.prototype.onMouseLeave = function () {
        //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1)";
        this.renderer2.setStyle(this.divElement, "transform", "scale(1)");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("error"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertDirective.prototype, "error", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("title"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertDirective.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AlertDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AlertDirective.prototype, "onMouseLeave", null);
    AlertDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAlert]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], AlertDirective);
    return AlertDirective;
}());



/***/ }),

/***/ "./src/app/directives/client-location-status-validator.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/directives/client-location-status-validator.directive.ts ***!
  \**************************************************************************/
/*! exports provided: ClientLocationStatusValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocationStatusValidatorDirective", function() { return ClientLocationStatusValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ClientLocationStatusValidatorDirective = /** @class */ (function () {
    function ClientLocationStatusValidatorDirective() {
    }
    ClientLocationStatusValidatorDirective_1 = ClientLocationStatusValidatorDirective;
    ClientLocationStatusValidatorDirective.prototype.validate = function (control) {
        var isValid = true;
        if (control.value.ClientLocation == 6 && control.value.Status == "Support") {
            isValid = false; //indicates invalid
        }
        if (isValid == true) {
            return null; //valid
        }
        else {
            return { clientLocationStatus: { valid: false } }; //invalid
        }
    };
    var ClientLocationStatusValidatorDirective_1;
    ClientLocationStatusValidatorDirective = ClientLocationStatusValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appClientLocationStatusValidator]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: ClientLocationStatusValidatorDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientLocationStatusValidatorDirective);
    return ClientLocationStatusValidatorDirective;
}());



/***/ }),

/***/ "./src/app/directives/component-loader.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/component-loader.directive.ts ***!
  \**********************************************************/
/*! exports provided: ComponentLoaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderDirective", function() { return ComponentLoaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentLoaderDirective = /** @class */ (function () {
    function ComponentLoaderDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ComponentLoaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appComponentLoader]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], ComponentLoaderDirective);
    return ComponentLoaderDirective;
}());



/***/ }),

/***/ "./src/app/directives/project-idunique-validator.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/directives/project-idunique-validator.directive.ts ***!
  \********************************************************************/
/*! exports provided: ProjectIDUniqueValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectIDUniqueValidatorDirective", function() { return ProjectIDUniqueValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProjectIDUniqueValidatorDirective = /** @class */ (function () {
    function ProjectIDUniqueValidatorDirective(projectsService) {
        this.projectsService = projectsService;
    }
    ProjectIDUniqueValidatorDirective_1 = ProjectIDUniqueValidatorDirective;
    ProjectIDUniqueValidatorDirective.prototype.validate = function (control) {
        return this.projectsService.getProjectByProjectID(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (existingProject) {
            if (existingProject != null) {
                return { uniqueProjectID: { valid: false } };
            }
            else {
                return null;
            }
        }));
    };
    var ProjectIDUniqueValidatorDirective_1;
    ProjectIDUniqueValidatorDirective = ProjectIDUniqueValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appProjectIDUniqueValidator]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_ASYNC_VALIDATORS"], useExisting: ProjectIDUniqueValidatorDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])
    ], ProjectIDUniqueValidatorDirective);
    return ProjectIDUniqueValidatorDirective;
}());



/***/ }),

/***/ "./src/app/directives/repeater.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/repeater.directive.ts ***!
  \**************************************************/
/*! exports provided: RepeaterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeaterDirective", function() { return RepeaterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RepeaterDirective = /** @class */ (function () {
    function RepeaterDirective(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.viewContainerRef.clear();
    }
    RepeaterDirective.prototype.ngOnInit = function () {
        for (var i = 0; i < this.n; i++) {
            this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: i });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appRepeater"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RepeaterDirective.prototype, "n", void 0);
    RepeaterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appRepeater]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], RepeaterDirective);
    return RepeaterDirective;
}());



/***/ }),

/***/ "./src/app/directives/team-size-validator.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/team-size-validator.directive.ts ***!
  \*************************************************************/
/*! exports provided: TeamSizeValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSizeValidatorDirective", function() { return TeamSizeValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TeamSizeValidatorDirective = /** @class */ (function () {
    function TeamSizeValidatorDirective() {
    }
    TeamSizeValidatorDirective_1 = TeamSizeValidatorDirective;
    TeamSizeValidatorDirective.prototype.validate = function (control) {
        var currentValue = control.value;
        var isValid = currentValue % this.n == 0;
        if (isValid) {
            return null; //valid
        }
        else {
            return { divisible: { valid: false } }; //indicates invalid
        }
    };
    var TeamSizeValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appTeamSizeValidator"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TeamSizeValidatorDirective.prototype, "n", void 0);
    TeamSizeValidatorDirective = TeamSizeValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTeamSizeValidator]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: TeamSizeValidatorDirective_1, multi: true }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamSizeValidatorDirective);
    return TeamSizeValidatorDirective;
}());



/***/ }),

/***/ "./src/app/employee/components/create-task/create-task.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/employee/components/create-task/create-task.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  create-task works!\n</p>\n"

/***/ }),

/***/ "./src/app/employee/components/create-task/create-task.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/employee/components/create-task/create-task.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2NvbXBvbmVudHMvY3JlYXRlLXRhc2svY3JlYXRlLXRhc2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employee/components/create-task/create-task.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/employee/components/create-task/create-task.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function() { return CreateTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent() {
    }
    CreateTaskComponent.prototype.ngOnInit = function () {
    };
    CreateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-task',
            template: __webpack_require__(/*! ./create-task.component.html */ "./src/app/employee/components/create-task/create-task.component.html"),
            styles: [__webpack_require__(/*! ./create-task.component.scss */ "./src/app/employee/components/create-task/create-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());



/***/ }),

/***/ "./src/app/employee/components/edit-task/edit-task.component.html":
/*!************************************************************************!*\
  !*** ./src/app/employee/components/edit-task/edit-task.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-task works!\n</p>\n"

/***/ }),

/***/ "./src/app/employee/components/edit-task/edit-task.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/employee/components/edit-task/edit-task.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2NvbXBvbmVudHMvZWRpdC10YXNrL2VkaXQtdGFzay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employee/components/edit-task/edit-task.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/employee/components/edit-task/edit-task.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent() {
    }
    EditTaskComponent.prototype.ngOnInit = function () {
    };
    EditTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-task',
            template: __webpack_require__(/*! ./edit-task.component.html */ "./src/app/employee/components/edit-task/edit-task.component.html"),
            styles: [__webpack_require__(/*! ./edit-task.component.scss */ "./src/app/employee/components/edit-task/edit-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "./src/app/employee/components/tasks/tasks.component.html":
/*!****************************************************************!*\
  !*** ./src/app/employee/components/tasks/tasks.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tasks works!\n</p>\n"

/***/ }),

/***/ "./src/app/employee/components/tasks/tasks.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/employee/components/tasks/tasks.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2NvbXBvbmVudHMvdGFza3MvdGFza3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employee/components/tasks/tasks.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee/components/tasks/tasks.component.ts ***!
  \**************************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/employee/components/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/employee/components/tasks/tasks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/employee/components/update-task-status/update-task-status.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/employee/components/update-task-status/update-task-status.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  update-task-status works!\n</p>\n"

/***/ }),

/***/ "./src/app/employee/components/update-task-status/update-task-status.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/employee/components/update-task-status/update-task-status.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2NvbXBvbmVudHMvdXBkYXRlLXRhc2stc3RhdHVzL3VwZGF0ZS10YXNrLXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employee/components/update-task-status/update-task-status.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/employee/components/update-task-status/update-task-status.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UpdateTaskStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTaskStatusComponent", function() { return UpdateTaskStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateTaskStatusComponent = /** @class */ (function () {
    function UpdateTaskStatusComponent() {
    }
    UpdateTaskStatusComponent.prototype.ngOnInit = function () {
    };
    UpdateTaskStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-task-status',
            template: __webpack_require__(/*! ./update-task-status.component.html */ "./src/app/employee/components/update-task-status/update-task-status.component.html"),
            styles: [__webpack_require__(/*! ./update-task-status.component.scss */ "./src/app/employee/components/update-task-status/update-task-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateTaskStatusComponent);
    return UpdateTaskStatusComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee-routing/employee-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/employee/employee-routing/employee-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../guards/can-activate-guard.service */ "./src/app/guards/can-activate-guard.service.ts");
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tasks/tasks.component */ "./src/app/employee/components/tasks/tasks.component.ts");
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/create-task/create-task.component */ "./src/app/employee/components/create-task/create-task.component.ts");
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/edit-task/edit-task.component */ "./src/app/employee/components/edit-task/edit-task.component.ts");
/* harmony import */ var _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/update-task-status/update-task-status.component */ "./src/app/employee/components/update-task-status/update-task-status.component.ts");








var routes = [
    { path: "", canActivate: [_guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateGuardService"]], data: { expectedRole: "Employee" }, children: [
            { path: "tasks", component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"], data: { linkIndex: 1 } },
            { path: "createtask", component: _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_5__["CreateTaskComponent"], data: { linkIndex: 2 } },
            { path: "edittask/:taskid", component: _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__["EditTaskComponent"], data: { linkIndex: 3 } },
            { path: "updatetaskstatus/:taskid", component: _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_7__["UpdateTaskStatusComponent"], data: { linkIndex: 4 } },
        ] },
];
var EmployeeRoutingModule = /** @class */ (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());



/***/ }),

/***/ "./src/app/employee/employee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tasks/tasks.component */ "./src/app/employee/components/tasks/tasks.component.ts");
/* harmony import */ var _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-routing/employee-routing.module */ "./src/app/employee/employee-routing/employee-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-task/create-task.component */ "./src/app/employee/components/create-task/create-task.component.ts");
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-task/edit-task.component */ "./src/app/employee/components/edit-task/edit-task.component.ts");
/* harmony import */ var _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/update-task-status/update-task-status.component */ "./src/app/employee/components/update-task-status/update-task-status.component.ts");








var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__["TasksComponent"],
                _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_5__["CreateTaskComponent"],
                _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__["EditTaskComponent"],
                _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_7__["UpdateTaskStatusComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"]
            ],
            exports: [
                _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__["TasksComponent"],
                _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_5__["CreateTaskComponent"],
                _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__["EditTaskComponent"],
                _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_7__["UpdateTaskStatusComponent"],
            ]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/guards/can-activate-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/guards/can-activate-guard.service.ts ***!
  \******************************************************/
/*! exports provided: CanActivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuardService", function() { return CanActivateGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var CanActivateGuardService = /** @class */ (function () {
    function CanActivateGuardService(loginService, router, jwtHelperService) {
        this.loginService = loginService;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
    }
    CanActivateGuardService.prototype.canActivate = function (route) {
        //console.log(this.router.url);
        var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
        if (this.loginService.isAuthenticated() && this.jwtHelperService.decodeToken(token).role == route.data.expectedRole) {
            return true; //the user can navigate to the particular route
        }
        else {
            this.router.navigate(["login"]);
            return false; //the user can't navigate to the particular route
        }
    };
    CanActivateGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], CanActivateGuardService);
    return CanActivateGuardService;
}());



/***/ }),

/***/ "./src/app/guards/can-deactivate-guard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/guards/can-deactivate-guard.service.ts ***!
  \********************************************************/
/*! exports provided: CanDeactivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuardService", function() { return CanDeactivateGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CanDeactivateGuardService = /** @class */ (function () {
    function CanDeactivateGuardService() {
    }
    CanDeactivateGuardService.prototype.canDeactivate = function (component) {
        if (component.canLeave == true) {
            return true; //user can leave the current route
        }
        else {
            return confirm("Do you want to discard changes?");
        }
    };
    CanDeactivateGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CanDeactivateGuardService);
    return CanDeactivateGuardService;
}());



/***/ }),

/***/ "./src/app/interceptors/jwt-interceptor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/interceptors/jwt-interceptor.service.ts ***!
  \*********************************************************/
/*! exports provided: JwtInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function() { return JwtInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtInterceptorService = /** @class */ (function () {
    function JwtInterceptorService() {
    }
    JwtInterceptorService.prototype.intercept = function (request, next) {
        var currentUser = { token: "" };
        if (sessionStorage.currentUser != null) {
            currentUser = JSON.parse(sessionStorage.currentUser);
        }
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + currentUser.token
            }
        });
        return next.handle(request);
    };
    JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JwtInterceptorService);
    return JwtInterceptorService;
}());



/***/ }),

/***/ "./src/app/interceptors/jwt-un-authorized-interceptor.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/interceptors/jwt-un-authorized-interceptor.service.ts ***!
  \***********************************************************************/
/*! exports provided: JwtUnAuthorizedInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUnAuthorizedInterceptorService", function() { return JwtUnAuthorizedInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var JwtUnAuthorizedInterceptorService = /** @class */ (function () {
    function JwtUnAuthorizedInterceptorService() {
    }
    JwtUnAuthorizedInterceptorService.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                //do something with response
            }
        }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (error.status == 401) {
                    console.log(error);
                    alert("401 UnAuthorized");
                }
            }
        }));
    };
    JwtUnAuthorizedInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JwtUnAuthorizedInterceptorService);
    return JwtUnAuthorizedInterceptorService;
}());



/***/ }),

/***/ "./src/app/models/login-view-model.ts":
/*!********************************************!*\
  !*** ./src/app/models/login-view-model.ts ***!
  \********************************************/
/*! exports provided: LoginViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginViewModel", function() { return LoginViewModel; });
var LoginViewModel = /** @class */ (function () {
    function LoginViewModel() {
    }
    return LoginViewModel;
}());



/***/ }),

/***/ "./src/app/my-animations.ts":
/*!**********************************!*\
  !*** ./src/app/my-animations.ts ***!
  \**********************************/
/*! exports provided: fadeAnimation, slideUpAnimation, zoomUpAnimation, zoomLeftAnimation, slideLeftOrRightAnimation, keyFrameAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUpAnimation", function() { return slideUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomUpAnimation", function() { return zoomUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomLeftAnimation", function() { return zoomLeftAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideLeftOrRightAnimation", function() { return slideLeftOrRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyFrameAnimation", function() { return keyFrameAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' }))
            ], { optional: true })
        ])
    ])
]);
var slideUpAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(-100%)" }))
            ], { optional: true })
        ])
    ])
]);
var zoomUpAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0) translateY(100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1) translateY(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1) translateY(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0) translateY(-100%)" }))
            ], { optional: true })
        ])
    ])
]);
var zoomLeftAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0) translateX(100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1) translateX(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(1) translateX(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "scale(0) translateX(-100%)" }))
            ], { optional: true })
        ])
    ])
]);
function slideLeft() {
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)" }))
            ], { optional: true })
        ])
    ];
}
function slideRight() {
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.6s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)" }))
            ], { optional: true })
        ])
    ];
}
var slideLeftOrRightAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 1", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 2", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 3", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 4", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 5", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("0 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 2", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 3", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 4", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 5", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("1 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 1", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 3", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 4", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 5", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("2 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 1", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 2", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 4", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 5", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("3 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 1", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 2", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 3", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 5", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("4 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 1", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 2", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 3", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 4", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("5 => 6", slideLeft()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 0", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 1", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 2", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 3", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 4", slideRight()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("6 => 5", slideRight()),
]);
var keyFrameAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* <=> *", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '98%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0, transform: "scale(0.5) translateX(-100%)", "transform-origin": "center left" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.3, transform: "scale(0.5) translateX(30%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.7, transform: "scale(0.5) translateX(30%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 1, transform: "scale(1) translateX(0%)" })
                ])),
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("1s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0, transform: "scale(1)", "transform-origin": "center right" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.3, transform: "scale(0.5) translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.7, transform: "scale(0.5) translateX(0%)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 1, transform: "scale(1) translateX(100%)" })
                ])),
            ], { optional: true })
        ])
    ])
]);


/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, searchBy, searchText) {
        if (value == null) {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (String(item[searchBy]).toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/number-to-words.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/number-to-words.pipe.ts ***!
  \***********************************************/
/*! exports provided: NumberToWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberToWordsPipe", function() { return NumberToWordsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumberToWordsPipe = /** @class */ (function () {
    function NumberToWordsPipe() {
        var _this = this;
        this.inWords = function (n, separator) {
            var a = [
                '', 'One', 'Two', 'Three', 'Four',
                'Five', 'Six', 'Seven', 'Eight', 'Nine',
                'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
                'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
            ];
            var b = [
                '', '', 'Twenty', 'Thirty', 'Forty',
                'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
            ];
            var g = [
                '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion',
                'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion'
            ];
            var arr = function (x) { return Array.from(x); };
            var num = function (x) { return Number(x) || 0; };
            var str = function (x) { return String(x); };
            var isEmpty = function (xs) { return xs.length === 0; };
            var take = function (n) { return function (xs) { return xs.slice(0, n); }; };
            var drop = function (n) { return function (xs) { return xs.slice(n); }; };
            var reverse = function (xs) { return xs.slice(0).reverse(); };
            var comp = function (f) { return function (g) { return function (x) { return f(g(x)); }; }; };
            var not = function (x) { return !x; };
            var chunk = function (n) { return function (xs) {
                return isEmpty(xs) ? [] : [take(n)(xs)].concat(chunk(n)(drop(n)(xs)));
            }; };
            var makeGroup = function (_a) {
                var ones = _a[0], tens = _a[1], huns = _a[2];
                return [
                    num(huns) === 0 ? '' : a[huns] + ' Hundred ',
                    num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
                    a[tens + ones] || a[ones]
                ].join('');
            };
            var thousand = function (group, i) { return group === '' ? group : group + " " + g[i]; };
            if (typeof n === 'number')
                return _this.inWords(str(n), separator);
            else if (n === '0')
                return 'Zero';
            else
                return comp(chunk(3))(reverse)(arr(n))
                    .map(makeGroup)
                    .map(thousand)
                    .filter(comp(not)(isEmpty))
                    .reverse()
                    .join(separator);
        };
    }
    NumberToWordsPipe.prototype.transform = function (value, separator) {
        if (separator === void 0) { separator = ", "; }
        if (value == null) {
            return null;
        }
        else {
            return this.inWords(value, separator);
        }
    };
    NumberToWordsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'numberToWords'
        })
    ], NumberToWordsPipe);
    return NumberToWordsPipe;
}());



/***/ }),

/***/ "./src/app/pipes/paging.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/paging.pipe.ts ***!
  \**************************************/
/*! exports provided: PagingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingPipe", function() { return PagingPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagingPipe = /** @class */ (function () {
    function PagingPipe() {
    }
    PagingPipe.prototype.transform = function (value, currentPageIndex, pageSize) {
        if (value == null) {
            return value;
        }
        var resultArray = [];
        for (var i = currentPageIndex * pageSize; i < (currentPageIndex + 1) * pageSize; i++) {
            if (value[i]) {
                resultArray.push(value[i]);
            }
        }
        return resultArray;
    };
    PagingPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'paging'
        })
    ], PagingPipe);
    return PagingPipe;
}());



/***/ }),

/***/ "./src/app/pipes/sort.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (value, sortBy, sortOrder) {
        if (value == null) {
            return null;
        }
        value.sort(function (a, b) {
            //less than 0        :   a comes before b
            //greater than 0  :   b comes before a
            //equal to 0         :   a and b are left unchanged
            if (a[sortBy] && b[sortBy]) {
                return a[sortBy].toString().toLowerCase()[0] - b[sortBy].toString().toLowerCase()[0];
                //a = cat  --> 99
                //b = dog --> 100
                //99 - 100 = -1     --> less than 0        :   a comes before b
            }
            else {
                return 0;
            }
        });
        if (sortOrder == "DESC") {
            value.reverse();
        }
        return value;
    };
    SortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "./src/app/services/countries.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/countries.service.ts ***!
  \***********************************************/
/*! exports provided: CountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesService", function() { return CountriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CountriesService = /** @class */ (function () {
    function CountriesService(httpClient) {
        this.httpClient = httpClient;
    }
    CountriesService.prototype.getCountries = function () {
        return this.httpClient.get("/api/countries", { responseType: "json" });
    };
    CountriesService.prototype.getCountryByCountryID = function (CountryID) {
        return this.httpClient.get("/api/countries/searchbycountryid/" + CountryID, { responseType: "json" });
    };
    CountriesService.prototype.insertCountry = function (newCountry) {
        return this.httpClient.post("/api/countries", newCountry, { responseType: "json" });
    };
    CountriesService.prototype.updateCountry = function (existingCountry) {
        return this.httpClient.put("/api/countries", existingCountry, { responseType: "json" });
    };
    CountriesService.prototype.deleteCountry = function (CountryID) {
        return this.httpClient.delete("/api/countries?CountryID=" + CountryID);
    };
    CountriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountriesService);
    return CountriesService;
}());



/***/ }),

/***/ "./src/app/services/custom-validators.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/custom-validators.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorsService", function() { return CustomValidatorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CustomValidatorsService = /** @class */ (function () {
    function CustomValidatorsService(loginService) {
        this.loginService = loginService;
    }
    CustomValidatorsService.prototype.minimumAgeValidator = function (minAge) {
        return function (control) {
            if (!control.value)
                return null; //return, if the date of birth is null
            var today = new Date();
            var dateOfBirth = new Date(control.value);
            var diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
            var diffYears = (diffMilliSeconds / (1000 * 60 * 60 * 24)) / 365.25;
            if (diffYears >= minAge)
                return null; //valid
            else
                return { minAge: { valid: false } }; //invalid
        };
    };
    CustomValidatorsService.prototype.compareValidator = function (controlToValidate, controlToCompare) {
        return function (formGroup) {
            if (!formGroup.get(controlToValidate).value)
                return null; //return, if the confirm password is null
            if (formGroup.get(controlToValidate).value == formGroup.get(controlToCompare).value)
                return null; //valid
            else {
                formGroup.get(controlToValidate).setErrors({ compareValidator: { valid: false } });
                return { compareValidator: { valid: false } }; //invalid
            }
        };
    };
    CustomValidatorsService.prototype.DuplicateEmailValidator = function () {
        var _this = this;
        return function (control) {
            return _this.loginService.getUserByEmail(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (existingUser) {
                if (existingUser != null) {
                    return { uniqueEmail: { valid: false } }; //invalid
                }
                else {
                    return null;
                }
            }));
        };
    };
    CustomValidatorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], CustomValidatorsService);
    return CustomValidatorsService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var LoginService = /** @class */ (function () {
    function LoginService(httpBackend, jwtHelperService) {
        this.httpBackend = httpBackend;
        this.jwtHelperService = jwtHelperService;
        this.currentUserName = null;
        this.currentUserRole = null;
    }
    LoginService.prototype.Login = function (loginViewModel) {
        var _this = this;
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](this.httpBackend);
        return this.httpClient.post("/authenticate", loginViewModel, { responseType: "json", observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
                _this.currentUserName = response.body.userName;
                _this.currentUserRole = response.body.role;
                sessionStorage.currentUser = JSON.stringify(response.body);
                sessionStorage.XSRFRequestToken = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    };
    LoginService.prototype.Register = function (signUpViewModel) {
        var _this = this;
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](this.httpBackend);
        return this.httpClient.post("/register", signUpViewModel, { responseType: "json", observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
                _this.currentUserName = response.body.userName;
                sessionStorage.currentUser = JSON.stringify(response.body);
                sessionStorage.XSRFRequestToken = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    };
    LoginService.prototype.getUserByEmail = function (Email) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](this.httpBackend);
        return this.httpClient.get("/api/getUserByEmail/" + Email, { responseType: "json" });
    };
    LoginService.prototype.Logout = function () {
        sessionStorage.removeItem("currentUser");
        this.currentUserName = null;
    };
    LoginService.prototype.isAuthenticated = function () {
        var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
        if (this.jwtHelperService.isTokenExpired()) {
            return false; //token is not valid
        }
        else {
            return true; //token is valid
        }
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProjectsService = /** @class */ (function () {
    function ProjectsService(httpClient) {
        this.httpClient = httpClient;
        this.MySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    ProjectsService.prototype.toggleDetails = function () {
        this.MySubject.next(!this.MySubject.value);
    };
    ProjectsService.prototype.getAllProjects = function () {
        return this.httpClient.get("/api/projects", { responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            for (var i = 0; i < data.length; i++) {
                //data[i].teamSize = data[i].teamSize * 100;
            }
            return data;
        }));
    };
    ProjectsService.prototype.getProjectByProjectID = function (ProjectID) {
        return this.httpClient.get("/api/projects/searchbyprojectid/" + ProjectID, { responseType: "json" });
    };
    ProjectsService.prototype.insertProject = function (newProject) {
        var requestHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage.XSRFRequestToken);
        return this.httpClient.post("/api/projects", newProject, { headers: requestHeaders, responseType: "json" });
    };
    ProjectsService.prototype.updateProject = function (existingProject) {
        return this.httpClient.put("/api/projects", existingProject, { responseType: "json" });
    };
    ProjectsService.prototype.deleteProject = function (ProjectID) {
        return this.httpClient.delete("/api/projects?ProjectID=" + ProjectID);
    };
    ProjectsService.prototype.SearchProjects = function (searchBy, searchText) {
        return this.httpClient.get("/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
    };
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/services/router-logger.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/router-logger.service.ts ***!
  \***************************************************/
/*! exports provided: RouterLoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLoggerService", function() { return RouterLoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RouterLoggerService = /** @class */ (function () {
    function RouterLoggerService(httpBackend) {
        this.httpBackend = httpBackend;
        this.currentUserName = null;
    }
    RouterLoggerService.prototype.log = function (logMsg) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](this.httpBackend);
        return this.httpClient.post("/api/routerlogger", logMsg, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("content-type", "text/plain") });
    };
    RouterLoggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"]])
    ], RouterLoggerService);
    return RouterLoggerService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/team-size-validator.directive */ "./src/app/directives/team-size-validator.directive.ts");
/* harmony import */ var _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/client-location-status-validator.directive */ "./src/app/directives/client-location-status-validator.directive.ts");
/* harmony import */ var _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/project-idunique-validator.directive */ "./src/app/directives/project-idunique-validator.directive.ts");
/* harmony import */ var _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/number-to-words.pipe */ "./src/app/pipes/number-to-words.pipe.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/paging.pipe */ "./src/app/pipes/paging.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/component-loader.directive */ "./src/app/directives/component-loader.directive.ts");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipes/sort.pipe */ "./src/app/pipes/sort.pipe.ts");













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_3__["TeamSizeValidatorDirective"],
                _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_4__["ClientLocationStatusValidatorDirective"],
                _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_5__["ProjectIDUniqueValidatorDirective"],
                _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_6__["NumberToWordsPipe"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"],
                _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__["PagingPipe"],
                _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_11__["ComponentLoaderDirective"],
                _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_12__["SortPipe"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_3__["TeamSizeValidatorDirective"],
                _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_4__["ClientLocationStatusValidatorDirective"],
                _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_5__["ProjectIDUniqueValidatorDirective"],
                _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_6__["NumberToWordsPipe"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"],
                _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__["PagingPipe"],
                _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_11__["ComponentLoaderDirective"],
                _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_12__["SortPipe"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Angular\TaskManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map