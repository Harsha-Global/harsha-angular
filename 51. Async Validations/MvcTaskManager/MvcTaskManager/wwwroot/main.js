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

/***/ "./src/app/admin/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/about/about.component.ts ***!
  \************************************************/
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
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/admin/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/admin/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/admin/my-profile/my-profile.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/admin/about/about.component.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/dashboard.service.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/admin/projects/projects.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../team-size-validator.directive */ "./src/app/team-size-validator.directive.ts");
/* harmony import */ var _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client-location-status-validator.directive */ "./src/app/client-location-status-validator.directive.ts");
/* harmony import */ var _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../project-idunique-validator.directive */ "./src/app/project-idunique-validator.directive.ts");












var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__["TeamSizeValidatorDirective"],
                _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_10__["ClientLocationStatusValidatorDirective"],
                _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_11__["ProjectIDUniqueValidatorDirective"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
            exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__["TeamSizeValidatorDirective"], _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_10__["ClientLocationStatusValidatorDirective"], _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_11__["ProjectIDUniqueValidatorDirective"]],
            providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n    <li class=\"breadcrumb-item active\">Dashboard</li>\n  </ol>\n</nav>\n\n<h5>Dashboard</h5>\n<h6>{{ToDay | date : \"d/M/y\"}}</h6>\n<div class=\"row\">\n  <div class=\"col-lg-3 pb-3\" style=\"background-color:#e9e6e6\">\n    <div class=\"row\">\n      <div class=\"col-11 text-white text-center mx-auto rounded pt-2 pb-2 font-weight-bold\"\n        style=\"background-color:#a39e9e; font-family:  'Arial Narrow Bold', sans-serif\">{{Designation | uppercase}}\n      </div>\n      <div class=\"col-12 text-center mt-2\">\n        <img src=\"assets/user.png\" width=\"120px\">\n      </div>\n      <div class=\"col-12 text-center pt-2 pb-2 font-weight-bold\" style=\"font-family: Tahoma\">\n        {{Username | lowercase}}\n      </div>\n      <div class=\"col-12 text-center pt-2 pb-2\" style=\"font-family: Arial\">TEAM SUMMARY</div>\n      <div class=\"col-12 mb-3\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            NO. OF TEAM MEMBERS\n            <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{NoOfTeamMembers}}</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            TOTAL COST OF ALL PROJECTS\n            <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">$ {{TotalCostOfAllProjects}} k</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            PENDING TASKS\n            <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{PendingTasks}}</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            UPCOMING PROJECTS\n            <span class=\"badge badge-secondary badge-pill\" style=\"font-size:13px\">{{UpComingProjects | percent}}</span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-12 text-center pt-2 pb-2\" style=\"font-family: 'Arial Narrow'\">CLIENTS</div>\n      <div class=\"col-12\">\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\" *ngFor=\"let client of Clients\">{{client | slice: 0: 10}}</li>\n        </ul>\n        <!--{{TeamMembersSummary}}-->\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"row\">\n      <div class=\"col-12 pt-0 pb-2\" style=\"background-color:#e9e6e6\">\n        <div class=\"row mt-2\">\n          <div class=\"col-6 text-left\">\n            <div class=\"dropdown\">\n              <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\n                data-toggle=\"dropdown\">\n                Project A\n              </button>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let project of Projects\" onclick=\"return false\"\n                  (click)=\"onProjectChange($event)\">{{project}}</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-6 text-right\">\n            <div class=\"dropdown\">\n              <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\n                data-toggle=\"dropdown\">\n                2019\n              </button>\n              <div class=\"dropdown-menu\">\n                  <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let year of Years\">\n                    <span [ngSwitch]=\"year\">\n                      <span *ngSwitchCase=\" '2019' \" style=\"color:green\">{{year}}</span>\n                      <span *ngSwitchCase=\" '2018' \" style=\"color:blue\">{{year}}</span>\n                      <span *ngSwitchCase=\" '2017' \" style=\"color:red\">{{year}}</span>\n                      <span *ngSwitchDefault style=\"color:black\">{{year}}</span>\n                    </span>\n                  </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-11 mx-auto mt-1 text-white text-center pt-2 pb-2 mx-auto rounded font-weight-bold\"\n        style=\"background-color: #718d97; font-family: 'Arial Narrow'\">PROJECT BRIEFING</div>\n      <div class=\"col-12\">\n        <table class=\"table table-borderless\">\n          <tr>\n            <td>Project Cost</td>\n            <td>{{ProjectCost | currency: \"INR\" }}</td>\n          </tr>\n          <tr>\n            <td>Current Expenditure</td>\n            <td>{{CurrentExpenditure | currency: \"INR\"}}</td>\n          </tr>\n          <tr>\n            <td>Available Funds</td>\n            <td>{{AvailableFunds | currency: \"INR\"}}</td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"col-11 mx-auto mt-1 text-white text-center pt-2 pb-2 mx-2 rounded font-weight-bold\"\n        style=\"background-color:#718d97; font-family: 'Arial Narrow'\">TEAM MEMBERS SUMMARY</div>\n      <div class=\"col-12\">\n        <table class=\"table\">\n          <tr>\n            <th>Region</th>\n            <th>Team Members Count</th>\n            <th>Temporarily Unavailable Members</th>\n          </tr>\n          <tr *ngFor=\"let teamMemberSumary of TeamMembersSummary\">\n            <td>\n              <b>{{teamMemberSumary.Region}}</b>\n            </td>\n            <td>\n              {{teamMemberSumary.TeamMembersCount}}\n            </td>\n            <td>\n              {{teamMemberSumary.TemporarilyUnavailableMembers}}\n            </td>\n          </tr>\n\n        </table>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3\" style=\"background-color:#e9e6e6\">\n    <div class=\"row\">\n      <div class=\"col-11 mx-auto mt-1 text-white text-center pt-1 pb-2 mx-2 rounded font-weight-bold\"\n        style=\"background-color:#718d97; font-family: 'Arial Narrow'\">TEAM MEMBERS</div>\n      <div class=\"col-lg-12 pt-2\">\n        <div class=\"accordion\" id=\"accordion1\">\n          <div class=\"card\" *ngFor=\"let teamMembersGroup of TeamMembers; let i = index\">\n\n\n            <div class=\"card-header bg-secondary\" id=\"card1\">\n              <h2 class=\"mb-0\">\n                <button class=\"btn btn-link text-white\" type=\"button\" data-toggle=\"collapse\"\n                  [attr.data-target]=\" '#cardbody' + i \">{{teamMembersGroup.Region}}</button>\n              </h2>\n            </div>\n            <div [id]=\" 'cardbody' + i \" class=\"collapse\" data-parent=\"#accordion1\" [ngClass]=\"(i == 0)? 'show': '' \">\n              <div class=\"card-body\">\n\n                <div *ngIf=\"i == 0; then firstTemplate; else secondTemplate\">\n\n                </div>\n\n                <ng-template #firstTemplate>\n                  <div class=\"card\" *ngFor=\"let member of teamMembersGroup.Members\">\n                    <div class=\"card-header bg-primary text-white\">#{{member.ID}} {{member.Name}}</div>\n                    <div class=\"card-body\">{{member.Status}}</div>\n                  </div>\n                </ng-template>\n\n                <ng-template #secondTemplate>\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>ID</th>\n                        <th>Name</th>\n                        <th>Status</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let member of teamMembersGroup.Members\">\n                        <td>{{member.ID}}</td>\n                        <td [style.color]=\" (member.Status == 'Busy')? 'red': 'black' \">{{member.Name}}</td>\n                        <td>{{member.Status}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </ng-template>\n\n\n              </div>\n            </div>\n\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard.service */ "./src/app/dashboard.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.Years = [];
        this.TeamMembersSummary = [];
        this.TeamMembers = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.Designation = "Team Leader";
        this.Username = "Scott Smith";
        this.NoOfTeamMembers = 67;
        this.TotalCostOfAllProjects = 240;
        this.PendingTasks = 15;
        this.UpComingProjects = 0.2;
        this.ProjectCost = 2113507;
        this.CurrentExpenditure = 96788;
        this.AvailableFunds = 52536;
        this.ToDay = new Date();
        this.Clients = [
            "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
        ];
        this.Projects = [
            "Project A", "Project B", "Project C", "Project D"
        ];
        for (var i = 2019; i >= 2010; i--) {
            this.Years.push(i);
        }
        this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
        this.TeamMembers = [
            {
                Region: "East", Members: [
                    { ID: 1, Name: "Ford", Status: "Available" },
                    { ID: 2, Name: "Miller", Status: "Available" },
                    { ID: 3, Name: "Jones", Status: "Busy" },
                    { ID: 4, Name: "James", Status: "Busy" }
                ]
            },
            {
                Region: "West", Members: [
                    { ID: 5, Name: "Anna", Status: "Available" },
                    { ID: 6, Name: "Arun", Status: "Available" },
                    { ID: 7, Name: "Varun", Status: "Busy" },
                    { ID: 8, Name: "Jasmine", Status: "Busy" }
                ]
            },
            {
                Region: "South", Members: [
                    { ID: 9, Name: "Krishna", Status: "Available" },
                    { ID: 10, Name: "Mohan", Status: "Available" },
                    { ID: 11, Name: "Raju", Status: "Busy" },
                    { ID: 12, Name: "Farooq", Status: "Busy" }
                ]
            },
            {
                Region: "North", Members: [
                    { ID: 13, Name: "Jacob", Status: "Available" },
                    { ID: 14, Name: "Smith", Status: "Available" },
                    { ID: 15, Name: "Jones", Status: "Busy" },
                    { ID: 16, Name: "James", Status: "Busy" }
                ]
            }
        ];
    };
    DashboardComponent.prototype.onProjectChange = function ($event) {
        if ($event.target.innerHTML == "Project A") {
            this.ProjectCost = 2113507;
            this.CurrentExpenditure = 96788;
            this.AvailableFunds = 52436;
        }
        else if ($event.target.innerHTML == "Project B") {
            this.ProjectCost = 88923;
            this.CurrentExpenditure = 22450;
            this.AvailableFunds = 2640;
        }
        else if ($event.target.innerHTML == "Project C") {
            this.ProjectCost = 662183;
            this.CurrentExpenditure = 7721;
            this.AvailableFunds = 9811;
        }
        else if ($event.target.innerHTML == "Project D") {
            this.ProjectCost = 928431;
            this.CurrentExpenditure = 562;
            this.AvailableFunds = 883;
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/my-profile/my-profile.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/my-profile/my-profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/my-profile/my-profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent() {
    }
    MyProfileComponent.prototype.ngOnInit = function () {
    };
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/admin/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.scss */ "./src/app/admin/my-profile/my-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/admin/projects/projects.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/projects/projects.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Projects\n  <i class=\"fa fa-circle-o-notch fa-spin\" style=\"font-size:34px\" *ngIf=\"showLoading\"></i>\n</h1>\n<div class=\"row\">\n  <div class=\"col-xl-9 mx-auto\">\n    <div class=\"form-group form-row\">\n\n      <div class=\"col-2\">\n        <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#newModal\" (click)=\"onNewClick($event)\">Create Project</button>\n      </div>\n\n      <label for=\"drpSearchBy\" class=\"col-form-label col-2 text-right\">Search by:</label>\n\n      <div class=\"col-3\">\n        <select class=\"form-control\" id=\"drpSearchBy\" name=\"SearchBy\" [(ngModel)]=\"searchBy\">\n          <option value=\"ProjectID\">Project ID</option>\n          <option value=\"ProjectName\">Project Name</option>\n          <option value=\"DateOfStart\">Date of Start</option>\n          <option value=\"TeamSize\">Team Size</option>\n        </select>\n      </div>\n\n      <label for=\"textSearchText\" class=\"col-form-label col-1 text-right\">Search:</label>\n\n      <div class=\"col-4\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" id=\"txtSearchText\" name=\"SearchText\" [(ngModel)]=\"searchText\">\n          <div class=\"input-group-append\" (click)=\"onSearchClick()\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-xl-9 mx-auto\">\n    <table class=\"table\">\n      <thead>\n        <th>Project ID</th>\n        <th>Project Name</th>\n        <th>Date of Start</th>\n        <th>Team Size</th>\n        <th>Client Location</th>\n        <th>Status</th>\n        <th>Actions</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let project of projects; let i = index\" [ngClass]=\"{ 'text-muted': !project.active}\">\n          <td>{{project.projectID}}</td>\n          <td>{{project.projectName}}</td>\n          <td>{{project.dateOfStart}}</td>\n          <td>{{project.teamSize}}</td>\n          <td>{{project.clientLocation.clientLocationName}}</td>\n          <td>{{project.status}}</td>\n          <td>\n            <button class=\"btn btn-info\" (click)=\"onEditClick($event, i)\" data-toggle=\"modal\" data-target=\"#editModal\">Edit</button>&nbsp;\n            <button class=\"btn btn-warning\" (click)=\"onDeleteClick($event, i)\" data-toggle=\"modal\" data-target=\"#deleteModal\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<form #newForm=\"ngForm\" novalidate=\"novalidate\" appClientLocationStatusValidator>\n  <div class=\"modal\" role=\"dialog\" id=\"newModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header bg-primary text-white\">\n          <div class=\"modal-title\">New Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtNewProjectID\" style=\"width:130px\" class=\"form-control\" placeholder=\"Project ID\" name=\"ProjectID\" [(ngModel)]=\"newProject.projectID\" required=\"required\" pattern=\"^[0-9]*$\" appProjectIDUniqueValidator #newProjectID=\"ngModel\" [ngClass]=\"{ 'is-invalid': newProjectID.invalid && (newProjectID.dirty || newProjectID.touched || newForm.submitted), 'is-valid': newProjectID.valid && (newProjectID.dirty || newProjectID.touched || newForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"newProjectID.invalid && (newProjectID.dirty || newProjectID.touched || newForm.submitted) && newProjectID.errors?.required\">Project ID can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"newProjectID.invalid && (newProjectID.dirty || newProjectID.touched || newForm.submitted) && newProjectID.errors?.pattern\">Project ID should contain numbers only</span>\n\n              <span class=\"text-danger\" *ngIf=\"newProjectID.invalid && (newProjectID.dirty || newProjectID.touched || newForm.submitted) && newProjectID.errors?.uniqueProjectID\">Duplicate Project ID</span>\n\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtNewProjectName\" class=\"form-control\" placeholder=\"Project Name\" name=\"ProjectName\" [(ngModel)]=\"newProject.projectName\" required=\"required\" minlength=\"3\" maxlength=\"30\" pattern=\"^[A-Za-z0-9 /-]*$\" #newProjectName=\"ngModel\" [ngClass]=\"{ 'is-invalid': newProjectName.invalid && (newProjectName.dirty || newProjectName.touched || newForm.submitted), 'is-valid': newProjectName.valid && (newProjectName.dirty || newProjectName.touched || newForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"newProjectName.invalid && (newProjectName.dirty || newProjectName.touched || newForm.submitted) && newProjectName.errors?.required\">Project Name can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"newProjectName.invalid && (newProjectName.dirty || newProjectName.touched || newForm.submitted) && newProjectName.errors?.pattern\">Project Name can contain alphabets, digits, dot, hyphen or space only</span>\n\n              <span class=\"text-danger\" *ngIf=\"newProjectName.invalid && (newProjectName.dirty || newProjectName.touched || newForm.submitted) && newProjectName.errors?.minlength\">Project name should be at least 3 characters long</span>\n\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\n            <div class=\"col-sm-8\">\n              <input type=\"date\" id=\"txtNewDateOfStart\" style=\"width:180px\" class=\"form-control\" placeholder=\"Date of Start\" name=\"DateOfStart\" [(ngModel)]=\"newProject.dateOfStart\" required=\"required\" #newDateOfStart=\"ngModel\" [ngClass]=\"{ 'is-invalid': newDateOfStart.invalid && (newDateOfStart.dirty || newDateOfStart.touched || newForm.submitted), 'is-valid': newDateOfStart.valid && (newDateOfStart.dirty || newDateOfStart.touched || newForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"newDateOfStart.invalid && (newDateOfStart.dirty || newDateOfStart.touched || newForm.submitted) && newDateOfStart.errors?.required\">Date of Start can't be blank</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtTeamSize\" style=\"width:150px\" class=\"form-control\" placeholder=\"Team Size\" name=\"TeamSize\" [(ngModel)]=\"newProject.teamSize\" pattern=\"^[0-9]*$\" maxlength=\"7\" appTeamSizeValidator=\"5\" #newTeamSize=\"ngModel\" [ngClass]=\"{ 'is-invalid': newTeamSize.invalid && (newTeamSize.dirty || newTeamSize.touched || newForm.submitted), 'is-valid': newTeamSize.valid && (newTeamSize.dirty || newTeamSize.touched || newForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"newTeamSize.invalid && (newTeamSize.dirty || newTeamSize.touched || newForm.submitted) && newTeamSize.errors?.required\">Team Size should be a number</span>\n\n              <span class=\"text-danger\" *ngIf=\"newTeamSize.invalid && (newTeamSize.dirty || newTeamSize.touched || newForm.submitted) && newTeamSize.errors?.divisible\">Team Size should be divisble by 5</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"col-sm-4 col-form-label\">&nbsp;</label>\n            <div class=\"col-sm-8\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" id=\"chkNewActive\" value=\"true\" class=\"form-check-input\" [(ngModel)]=\"newProject.active\" name=\"active\">\n                <label class=\"form-check-label\" for=\"chkNewActive\">Active</label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"rbNewStatusInForce\" class=\"col-sm-4\">Status</label>\n            <div class=\"col-sm-8\">\n\n              <div class=\"form-check form-check-inline\">\n                <input type=\"radio\" id=\"rbNewStatusInForce\" value=\"In Force\" class=\"form-check-input\" name=\"Status\" [(ngModel)]=\"newProject.status\" required=\"required\" #newStatusInForce=\"ngModel\">\n                <label for=\"rbNewStatusInForce\" class=\"form-check-label\">In Force</label>\n              </div>\n\n              <div class=\"form-check form-check-inline\">\n                <input type=\"radio\" id=\"rbNewStatusSupport\" value=\"Support\" class=\"form-check-input\" name=\"Status\" [(ngModel)]=\"newProject.status\" required=\"required\" #newStatusSupport=\"ngModel\">\n                <label for=\"rbNewStatusSupport\" class=\"form-check-label\">Support</label>\n              </div>\n\n              <span class=\"text-danger\" *ngIf=\"newStatusInForce.invalid && (newStatusInForce.dirty || newStatusInForce.touched || newForm.submitted) && newStatusInForce.errors?.required\">Please select status</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"drpNewClientLocation\" class=\"col-sm-4 col-form-label\">Client Location</label>\n            <div class=\"col-sm-8\">\n              <select id=\"drpNewClientLocation\" class=\"form-control\" name=\"ClientLocation\" [(ngModel)]=\"newProject.clientLocationID\" required=\"required\" #newClientLocationID=\"ngModel\" [ngClass]=\"{ 'is-invalid': newClientLocationID.invalid && (newClientLocationID.dirty || newClientLocationID.touched || newForm.submitted), 'is-valid': newClientLocationID.valid && (newClientLocationID.dirty || newClientLocationID.touched || newForm.submitted) }\">\n                <option value=\"null\">Please Select</option>\n                <option *ngFor=\"let clientLocation of clientLocations\" [value]=\"clientLocation.clientLocationID\">\n                  {{clientLocation.clientLocationName}}\n                </option>\n              </select>\n\n              <span class=\"text-danger\" *ngIf=\"newClientLocationID.invalid && (newClientLocationID.dirty || newClientLocationID.touched || newForm.submitted) && newClientLocationID.errors?.required\">Please client location</span>\n\n              <span class=\"text-danger\" *ngIf=\"newForm.invalid && (newForm.dirty || newForm.touched || newForm.submitted) && newForm.errors?.clientLocationStatus\">Support projects are not allowed at Tokyo</span>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\" id=\"newFormCancel\">Cancel</button>\n          <button class=\"btn btn-success\" (click)=\"onSaveClick()\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<!-- Edit Project -->\n<form #editForm=\"ngForm\" novalidate=\"novalidate\" appClientLocationStatusValidator>\n  <div class=\"modal\" role=\"dialog\" id=\"editModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">Edit Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtEditProjectID\" style=\"width:130px\" class=\"form-control-plain-text\" placeholder=\"Project ID\" name=\"ProjectID\" [(ngModel)]=\"editProject.projectID\" disabled=\"disabled\" required=\"required\" pattern=\"^[0-9]*$\" appProjectIDUniqueValidator #editProjectID=\"ngModel\" [ngClass]=\"{ 'is-invalid': editProjectID.invalid && (editProjectID.dirty || editProjectID.touched || newForm.submitted), 'is-valid': editProjectID.valid && (editProjectID.dirty || editProjectID.touched || newForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"editProjectID.invalid && (editProjectID.dirty || editProjectID.touched || editForm.submitted) && editProjectID.errors?.required\">Project ID can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"editProjectID.invalid && (editProjectID.dirty || editProjectID.touched || editForm.submitted) && editProjectID.errors?.pattern\">Project ID should contain numbers only</span>\n\n              <span class=\"text-danger\" *ngIf=\"editProjectID.invalid && (editProjectID.dirty || editProjectID.touched || editForm.submitted) && editProjectID.errors?.uniqueProjectID\">Duplicate Project ID</span>\n\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtEditProjectName\" class=\"form-control\" placeholder=\"Project Name\" name=\"ProjectName\" [(ngModel)]=\"editProject.projectName\" required=\"required\" minlength=\"3\" maxlength=\"30\" pattern=\"^[A-Za-z0-9 /-]*$\" #editProjectName=\"ngModel\" [ngClass]=\"{ 'is-invalid': editProjectName.invalid && (editProjectName.dirty || editProjectName.touched || editForm.submitted), 'is-valid': editProjectName.valid && (editProjectName.dirty || editProjectName.touched || editForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"editProjectName.invalid && (editProjectName.dirty || editProjectName.touched || editForm.submitted) && editProjectName.errors?.required\">Project Name can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"editProjectName.invalid && (editProjectName.dirty || editProjectName.touched || editForm.submitted) && editProjectName.errors?.pattern\">Project Name can contain alphabets, digits, dot, hyphen or space only</span>\n\n              <span class=\"text-danger\" *ngIf=\"editProjectName.invalid && (editProjectName.dirty || editProjectName.touched || editForm.submitted) && editProjectName.errors?.minlength\">Project name should be at least 3 characters long</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\n            <div class=\"col-sm-8\">\n              <input type=\"date\" id=\"txtEditDateOfStart\" style=\"width:180px\" class=\"form-control\" placeholder=\"Date of Start\" name=\"DateOfStart\" [(ngModel)]=\"editProject.dateOfStart\" required=\"required\" #editDateOfStart=\"ngModel\" [ngClass]=\"{ 'is-invalid': editDateOfStart.invalid && (editDateOfStart.dirty || editDateOfStart.touched || editForm.submitted), 'is-valid': editDateOfStart.valid && (editDateOfStart.dirty || editDateOfStart.touched || editForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"editDateOfStart.invalid && (editForm.submitted) && editDateOfStart.errors?.required\">Date of Start can't be blank</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtEditTeamSize\" style=\"width:150px\" class=\"form-control\" placeholder=\"Team Size\" name=\"TeamSize\" [(ngModel)]=\"editProject.teamSize\" pattern=\"^[0-9]*$\" maxlength=\"7\" appTeamSizeValidator=\"5\" #editTeamSize=\"ngModel\" [ngClass]=\"{ 'is-invalid': editTeamSize.invalid && (editTeamSize.dirty || editTeamSize.touched || editForm.submitted), 'is-valid': editTeamSize.valid && (editTeamSize.dirty || editTeamSize.touched || editForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"editTeamSize.invalid && (editTeamSize.dirty || editTeamSize.touched || editForm.submitted) && editTeamSize.errors?.required\">Team Size should be a number</span>\n\n              <span class=\"text-danger\" *ngIf=\"editTeamSize.invalid && (editTeamSize.dirty || editTeamSize.touched || editForm.submitted) && editTeamSize.errors?.divisible\">Team Size should be divisble by 5</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label class=\"col-sm-4\">&nbsp;</label>\n            <div class=\"col-sm-8\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" id=\"chkEditActive\" value=\"true\" class=\"form-check-input\" [(ngModel)]=\"editProject.active\" name=\"active\">\n                <label class=\"form-check-label\" for=\"chkEditActive\">Active</label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"rbEditStatusInForce\" class=\"col-sm-4\">Status</label>\n            <div class=\"col-sm-8\">\n\n              <div class=\"form-check form-check-inline\">\n                <input type=\"radio\" id=\"rbEditStatusInForce\" value=\"In Force\" class=\"form-check-input\" name=\"Status\" [(ngModel)]=\"editProject.status\" required=\"required\" #editStatusInForce=\"ngModel\">\n                <label for=\"rbEditStatusInForce\" class=\"form-check-label\">In Force</label>\n              </div>\n\n              <div class=\"form-check form-check-inline\">\n                <input type=\"radio\" id=\"rbEditStatusSupport\" value=\"Support\" class=\"form-check-input\" name=\"Status\" [(ngModel)]=\"editProject.status\" required=\"required\" #editStatusSupport=\"ngModel\">\n                <label for=\"rbEditStatusSupport\" class=\"form-check-label\">Support</label>\n              </div>\n\n              <span class=\"text-danger\" *ngIf=\"editStatusInForce.invalid && (editStatusInForce.dirty || editStatusInForce.touched || editForm.submitted) && editStatusInForce.errors?.required\">Please select status</span>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"drpEditClientLocation\" class=\"col-sm-4 col-form-label\">Client Location</label>\n            <div class=\"col-sm-8\">\n              <select id=\"drpEditClientLocation\" class=\"form-control\" name=\"ClientLocation\" [(ngModel)]=\"editProject.clientLocationID\" required=\"required\" #editClientLocationID=\"ngModel\" [ngClass]=\"{ 'is-invalid': editClientLocationID.invalid && (editClientLocationID.dirty || editClientLocationID.touched || editForm.submitted), 'is-valid': editClientLocationID.valid && (editClientLocationID.dirty || editClientLocationID.touched || editForm.submitted) }\">\n                <option value=\"null\">Please Select</option>\n                <option *ngFor=\"let clientLocation of clientLocations\" [value]=\"clientLocation.clientLocationID\">\n                  {{clientLocation.clientLocationName}}\n                </option>\n              </select>\n\n              <span class=\"text-danger\" *ngIf=\"editClientLocationID.invalid && (editClientLocationID.dirty || editClientLocationID.touched || editForm.submitted) && editClientLocationID.errors?.required\">Please client location</span>\n\n              <span class=\"text-danger\" *ngIf=\"editForm.invalid && (editForm.dirty || editForm.touched || editForm.submitted) && editForm.errors?.clientLocationStatus\">Support projects are not allowed at Tokyo</span>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\" id=\"editFormCancel\">Cancel</button>\n          <button class=\"btn btn-success\" (click)=\"onUpdateClick()\">Update</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n\n<!-- Delete Project -->\n<form>\n  <div class=\"modal\" role=\"dialog\" id=\"deleteModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">Delete Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"text-warning\">Are you sure to delete this Project?</div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtDeleteProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtDeleteProjectID\" style=\"width:100px\" class=\"form-control-plain-text\" placeholder=\"Project ID\" name=\"ProjectID\" [(ngModel)]=\"deleteProject.projectID\" disabled=\"disabled\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtDeleteProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtDeleteProjectName\" class=\"form-control-plain-text\" placeholder=\"Project Name\" name=\"ProjectName\" [(ngModel)]=\"deleteProject.projectName\" disabled=\"disabled\">\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onDeleteConfirmClick()\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/admin/projects/projects.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/projects/projects.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects.service */ "./src/app/projects.service.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../project */ "./src/app/project.ts");
/* harmony import */ var _client_locations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client-locations.service */ "./src/app/client-locations.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectsService, clientLocationsService) {
        this.projectsService = projectsService;
        this.clientLocationsService = clientLocationsService;
        this.projects = [];
        this.clientLocations = [];
        this.showLoading = true;
        this.newProject = new _project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.editProject = new _project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.editIndex = null;
        this.deleteProject = new _project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.deleteIndex = null;
        this.searchBy = "ProjectName";
        this.searchText = "";
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsService.getAllProjects().subscribe(function (response) {
            _this.projects = response;
            _this.showLoading = false;
        });
        this.clientLocationsService.getClientLocations().subscribe(function (response) {
            _this.clientLocations = response;
        });
    };
    ProjectsComponent.prototype.onNewClick = function (event) {
        this.newForm.resetForm();
    };
    ProjectsComponent.prototype.onSaveClick = function () {
        var _this = this;
        if (this.newForm.valid) {
            this.newProject.clientLocation.clientLocationID = 0;
            this.projectsService.insertProject(this.newProject).subscribe(function (response) {
                //Add Project to Grid
                var p = new _project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                _this.projects.push(p);
                //Clear New Project Dialog - TextBoxes
                _this.newProject.projectID = null;
                _this.newProject.projectName = null;
                _this.newProject.dateOfStart = null;
                _this.newProject.teamSize = null;
                _this.newProject.active = false;
                _this.newProject.clientLocationID = null;
                _this.newProject.status = null;
                jquery__WEBPACK_IMPORTED_MODULE_6__("#newFormCancel").trigger("click");
            }, function (error) {
                console.log(error);
            });
        }
    };
    ProjectsComponent.prototype.onEditClick = function (event, index) {
        var _this = this;
        this.editForm.resetForm();
        setTimeout(function () {
            _this.editProject.projectID = _this.projects[index].projectID;
            _this.editProject.projectName = _this.projects[index].projectName;
            _this.editProject.dateOfStart = _this.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd
            _this.editProject.teamSize = _this.projects[index].teamSize;
            _this.editProject.active = _this.projects[index].active;
            _this.editProject.clientLocationID = _this.projects[index].clientLocationID;
            _this.editProject.clientLocation = _this.projects[index].clientLocation;
            _this.editProject.status = _this.projects[index].status;
            _this.editIndex = index;
        }, 100);
    };
    ProjectsComponent.prototype.onUpdateClick = function () {
        var _this = this;
        if (this.editForm.valid) {
            this.projectsService.updateProject(this.editProject).subscribe(function (response) {
                var p = new _project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                _this.projects[_this.editIndex] = p;
                _this.editProject.projectID = null;
                _this.editProject.projectName = null;
                _this.editProject.dateOfStart = null;
                _this.editProject.teamSize = null;
                _this.newProject.active = false;
                _this.newProject.clientLocationID = null;
                _this.newProject.status = null;
                jquery__WEBPACK_IMPORTED_MODULE_6__("#editFormCancel").trigger("click");
            }, function (error) {
                console.log(error);
            });
        }
    };
    ProjectsComponent.prototype.onDeleteClick = function (event, index) {
        this.deleteIndex = index;
        this.deleteProject.projectID = this.projects[index].projectID;
        this.deleteProject.projectName = this.projects[index].projectName;
        this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
        this.deleteProject.teamSize = this.projects[index].teamSize;
    };
    ProjectsComponent.prototype.onDeleteConfirmClick = function () {
        var _this = this;
        this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(function (response) {
            _this.projects.splice(_this.deleteIndex, 1);
            _this.deleteProject.projectID = null;
            _this.deleteProject.projectName = null;
            _this.deleteProject.teamSize = null;
            _this.deleteProject.dateOfStart = null;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectsComponent.prototype.onSearchClick = function () {
        var _this = this;
        this.projectsService.SearchProjects(this.searchBy, this.searchText).subscribe(function (response) {
            _this.projects = response;
        }, function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("newForm"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ProjectsComponent.prototype, "newForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("editForm"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ProjectsComponent.prototype, "editForm", void 0);
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/admin/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/admin/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"], _client_locations_service__WEBPACK_IMPORTED_MODULE_4__["ClientLocationsService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
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
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/about/about.component */ "./src/app/admin/about/about.component.ts");
/* harmony import */ var _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/projects/projects.component */ "./src/app/admin/projects/projects.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./can-activate-guard.service */ "./src/app/can-activate-guard.service.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");










var routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: "signup", component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"] },
    { path: "dashboard", component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]], data: { expectedRole: "Admin" } },
    { path: "about", component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: "projects", component: _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]], data: { expectedRole: "Admin" } },
    { path: "tasks", component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__["TasksComponent"], canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuardService"]], data: { expectedRole: "Employee" } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
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

module.exports = "<nav class=\"navbar navbar-expand-sm bg-success navbar-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n        Angular Task Manager\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mynav\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"mynav\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" routerLink=\"dashboard\">Dashboard</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"about\">About</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" routerLink=\"projects\">Projects</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" href=\"#\">{{loginService.currentUserName}}</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" href=\"#\" (click)=\"loginService.Logout()\">Logout</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName == null\">\n                <a class=\"nav-link\" routerLink=\"login\">Login</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName == null\">\n                <a class=\"nav-link\" routerLink=\"signup\">Sign Up</a>\n            </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"search\"><i class=\"fa fa-search\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n            <button class=\"btn btn-warning my2- my-sm-0\" type=\"button\" (click)=\"onSearchClick()\">Search</button>\n        </form>\n    </div>\n</nav>\n\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(loginService, domSanitizer) {
        this.loginService = loginService;
        this.domSanitizer = domSanitizer;
    }
    AppComponent.prototype.onSearchClick = function () {
        console.log(this.loginService.currentUserName);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jwt-interceptor.service */ "./src/app/jwt-interceptor.service.ts");
/* harmony import */ var _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jwt-un-authorized-interceptor.service */ "./src/app/jwt-un-authorized-interceptor.service.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__["TasksComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
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
                    useClass: _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["JwtUnAuthorizedInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/can-activate-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/can-activate-guard.service.ts ***!
  \***********************************************/
/*! exports provided: CanActivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuardService", function() { return CanActivateGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], CanActivateGuardService);
    return CanActivateGuardService;
}());



/***/ }),

/***/ "./src/app/client-location-status-validator.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/client-location-status-validator.directive.ts ***!
  \***************************************************************/
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

/***/ "./src/app/client-location.ts":
/*!************************************!*\
  !*** ./src/app/client-location.ts ***!
  \************************************/
/*! exports provided: ClientLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocation", function() { return ClientLocation; });
var ClientLocation = /** @class */ (function () {
    function ClientLocation() {
        this.clientLocationID = null;
        this.clientLocationName = null;
    }
    return ClientLocation;
}());



/***/ }),

/***/ "./src/app/client-locations.service.ts":
/*!*********************************************!*\
  !*** ./src/app/client-locations.service.ts ***!
  \*********************************************/
/*! exports provided: ClientLocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocationsService", function() { return ClientLocationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ClientLocationsService = /** @class */ (function () {
    function ClientLocationsService(httpClient) {
        this.httpClient = httpClient;
    }
    ClientLocationsService.prototype.getClientLocations = function () {
        return this.httpClient.get("/api/clientlocations", { responseType: "json" });
    };
    ClientLocationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientLocationsService);
    return ClientLocationsService;
}());



/***/ }),

/***/ "./src/app/countries.service.ts":
/*!**************************************!*\
  !*** ./src/app/countries.service.ts ***!
  \**************************************/
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
    CountriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountriesService);
    return CountriesService;
}());



/***/ }),

/***/ "./src/app/custom-validators.service.ts":
/*!**********************************************!*\
  !*** ./src/app/custom-validators.service.ts ***!
  \**********************************************/
/*! exports provided: CustomValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorsService", function() { return CustomValidatorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
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

/***/ "./src/app/dashboard.service.ts":
/*!**************************************!*\
  !*** ./src/app/dashboard.service.ts ***!
  \**************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService.prototype.getTeamMembersSummary = function () {
        var TeamMembersSummary = [
            { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
            { Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8 },
            { Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1 },
            { Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6 }
        ];
        return TeamMembersSummary;
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/jwt-interceptor.service.ts":
/*!********************************************!*\
  !*** ./src/app/jwt-interceptor.service.ts ***!
  \********************************************/
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

/***/ "./src/app/jwt-un-authorized-interceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/jwt-un-authorized-interceptor.service.ts ***!
  \**********************************************************/
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

/***/ "./src/app/login-view-model.ts":
/*!*************************************!*\
  !*** ./src/app/login-view-model.ts ***!
  \*************************************/
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

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
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
    }
    LoginService.prototype.Login = function (loginViewModel) {
        var _this = this;
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"](this.httpBackend);
        return this.httpClient.post("/authenticate", loginViewModel, { responseType: "json", observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
                _this.currentUserName = response.body.userName;
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

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-xl-5 col-md-9 mx-auto\">\n      <div class=\"card mt-4\">\n        <div class=\"card-header bg-secondary text-white\">\n          <h3>Login</h3>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group form-row\">\n            <label for=\"UserName\" class=\"col-md-4 col-form-label\">Username</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"loginViewModel.UserName\" name=\"UserName\" autofocus=\"autofocus\">\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"Password\" class=\"col-md-4 col-form-label\">Password</label>\n            <div class=\"col-md-8\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginViewModel.Password\" name=\"Password\">\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"card-footer text-right\">\n          <span class=\"text-danger\">{{loginError}}&nbsp;</span>\n          <button class=\"btn btn-primary\" (click)=\"onLoginClick($event)\">Login</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-view-model */ "./src/app/login-view-model.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginViewModel = new _login_view_model__WEBPACK_IMPORTED_MODULE_2__["LoginViewModel"]();
        this.loginError = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginClick = function (event) {
        var _this = this;
        this.loginService.Login(this.loginViewModel).subscribe(function (response) {
            _this.router.navigateByUrl("/dashboard");
        }, function (error) {
            console.log(error);
            _this.loginError = "Invalid Username or Password";
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/project-idunique-validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/project-idunique-validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: ProjectIDUniqueValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectIDUniqueValidatorDirective", function() { return ProjectIDUniqueValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.service */ "./src/app/projects.service.ts");
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])
    ], ProjectIDUniqueValidatorDirective);
    return ProjectIDUniqueValidatorDirective;
}());



/***/ }),

/***/ "./src/app/project.ts":
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var _client_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-location */ "./src/app/client-location.ts");

var Project = /** @class */ (function () {
    function Project() {
        this.projectID = null;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = null;
        this.active = true;
        this.status = null;
        this.clientLocationID = null;
        this.clientLocation = new _client_location__WEBPACK_IMPORTED_MODULE_0__["ClientLocation"]();
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/projects.service.ts":
/*!*************************************!*\
  !*** ./src/app/projects.service.ts ***!
  \*************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProjectsService = /** @class */ (function () {
    function ProjectsService(httpClient) {
        this.httpClient = httpClient;
    }
    ProjectsService.prototype.getAllProjects = function () {
        return this.httpClient.get("/api/projects", { responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
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

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 col-xl-6 mx-auto\">\n\n    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmitClick()\">\n\n      <div class=\"card mt-1\">\n        <div class=\"card-header\">\n          <h4>Sign Up</h4>\n        </div>\n\n        <div class=\"card-body\">\n\n          <div class=\"form-group form-row\" formGroupName=\"personName\">\n            <label for=\"firstName\" class=\"col-md-4 col-form-label\">First Name:</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" name=\"firstName\" id=\"firstName\" placeholder=\"First Name\" class=\"form-control\" formControlName=\"firstName\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('personName.firstName').invalid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('personName.firstName').valid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.firstName').invalid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted) && signUpForm.get('personName.firstName').errors?.required\">First name can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.firstName').invalid && (signUpForm.get('personName.firstName').dirty || signUpForm.get('personName.firstName').touched || signUpForm.submitted) && signUpForm.get('personName.firstName').errors?.minlength\">First name should contain at least 2 characters</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\" formGroupName=\"personName\">\n            <label for=\"lastName\" class=\"col-md-4 col-form-label\">Last Name:</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" name=\"lastName\" id=\"lastName\" placeholder=\"Last Name\" class=\"form-control\" formControlName=\"lastName\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('personName.lastName').invalid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('personName.lastName').valid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.lastName').invalid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted) && signUpForm.get('personName.lastName').errors?.required\">Last name can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('personName.lastName').invalid && (signUpForm.get('personName.lastName').dirty || signUpForm.get('personName.lastName').touched || signUpForm.submitted) && signUpForm.get('personName.lastName').errors?.minlength\">Last name should contain at least 2 characters</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"email\" class=\"col-md-4 col-form-label\">Email:</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('email').valid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) && signUpForm.get('email').errors?.required\">Email can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) && signUpForm.get('email').errors?.email\">Email is invalid</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('email').invalid && (signUpForm.get('email').dirty || signUpForm.get('email').touched || signUpForm.submitted) && signUpForm.get('email').errors?.uniqueEmail\">Email already exists</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"mobile\" class=\"col-md-4 col-form-label\">Mobile:</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" name=\"mobile\" id=\"mobile\" placeholder=\"Mobile\" class=\"form-control\" formControlName=\"mobile\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('mobile').invalid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('mobile').valid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('mobile').invalid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted) && signUpForm.get('mobile').errors?.required\">Mobile can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('mobile').invalid && (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched || signUpForm.submitted) && signUpForm.get('mobile').errors?.pattern\">Mobile is invalid</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"dateOfBirth\" class=\"col-md-4 col-form-label\">Date of Birth:</label>\n            <div class=\"col-md-8\">\n              <input type=\"date\" name=\"dateOfBirth\" id=\"dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\" formControlName=\"dateOfBirth\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('dateOfBirth').invalid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('dateOfBirth').valid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('dateOfBirth').invalid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted) && signUpForm.get('dateOfBirth').errors?.required\">Date of Birth can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('dateOfBirth').invalid && (signUpForm.get('dateOfBirth').dirty || signUpForm.get('dateOfBirth').touched || signUpForm.submitted) && signUpForm.get('dateOfBirth').errors?.minAge\">Minimum Age must be 18</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"password\" class=\"col-md-4 col-form-label\">Password:</label>\n            <div class=\"col-md-8\">\n              <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('password').invalid && (signUpForm.get('password').dirty || signUpForm.get('password').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('password').valid && (signUpForm.get('password').dirty || signUpForm.get('password').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('password').invalid && (signUpForm.get('password').dirty || signUpForm.get('password').touched || signUpForm.submitted) && signUpForm.get('password').errors?.required\">Password can't be blank</span>\n            </div>\n          </div>\n\n\n          <div class=\"form-group form-row\">\n            <label for=\"confirmPassword\" class=\"col-md-4 col-form-label\">Confirm Password:</label>\n            <div class=\"col-md-8\">\n              <input type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"Confirm Password\" class=\"form-control\" formControlName=\"confirmPassword\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('confirmPassword').invalid && (signUpForm.get('confirmPassword').dirty || signUpForm.get('confirmPassword').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('confirmPassword').valid && (signUpForm.get('confirmPassword').dirty || signUpForm.get('confirmPassword').touched || signUpForm.submitted) }\">\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('confirmPassword').invalid && (signUpForm.get('confirmPassword').dirty || signUpForm.get('confirmPassword').touched || signUpForm.submitted) && signUpForm.get('confirmPassword').errors?.required\">Confirm Password can't be blank</span>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.invalid && (signUpForm.dirty || signUpForm.touched || signUpForm.submitted) && signUpForm.errors?.compareValidator\">Password and Confirm Password do not match</span>\n            </div>\n          </div>\n\n\n          <div class=\"form-group form-row\">\n            <label class=\"col-md-4 col-form-label\">Gender:</label>\n            <div class=\"col-md-8\">\n\n              <div class=\"form-check-label form-check-inline\" *ngFor=\"let gender of genders\">\n                <input type=\"radio\" name=\"gender\" [id]=\"gender\" [value]=\"gender\" class=\"form-check-input\" formControlName=\"gender\">\n                <label [for]=\"gender\" class=\"form-check-label\">{{gender}}</label>\n              </div>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('gender').invalid && (signUpForm.get('gender').dirty || signUpForm.get('gender').touched || signUpForm.submitted) && signUpForm.get('gender').errors?.required\">Please select gender</span>\n\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label for=\"countryID\" class=\"col-md-4 col-form-label\">Country:</label>\n            <div class=\"col-md-8\">\n              <select name=\"countryID\" id=\"countryID\" class=\"form-control\" formControlName=\"countryID\" [ngClass]=\"{\n                'is-invalid': signUpForm.get('countryID').invalid && (signUpForm.get('countryID').dirty || signUpForm.get('countryID').touched || signUpForm.submitted),\n\n                'is-valid': signUpForm.get('countryID').valid && (signUpForm.get('countryID').dirty || signUpForm.get('countryID').touched || signUpForm.submitted) }\">\n                <option value=\"null\">Please Select</option>\n                <option *ngFor=\"let country of countries\" [value]=\"country.countryID\">\n                  {{country.countryName}}\n                </option>\n              </select>\n\n              <span class=\"text-danger\" *ngIf=\"signUpForm.get('countryID').invalid && (signUpForm.get('countryID').dirty || signUpForm.get('countryID').touched || signUpForm.submitted) && signUpForm.get('countryID').errors?.required\">Please select country</span>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label class=\"col-md-4 col-form-label\"></label>\n            <div class=\"col-md-8\">\n              <input type=\"checkbox\" name=\"receiveNewsLetters\" id=\"receiveNewsLetters\" value=\"true\" class=\"form-check-input\" formControlName=\"receiveNewsLetters\">\n              <label for=\"receiveNewsLetters\" class=\"form-check-label\">Receive News Letters</label>\n            </div>\n          </div>\n\n          <div class=\"form-group form-row\">\n            <label class=\"col-md-4 col-form-label\">Skills:</label>\n            <div class=\"col-md-8\" formArrayName=\"skills\">\n              <div class=\"row\" *ngFor=\"let skill of signUpForm.get('skills').controls; let i = index\" [formGroupName]=\"i\">\n\n                <div class=\"col-5\">\n                  <input type=\"text\" name=\"skillName\" id=\"skillName\" placeholder=\"Skill Name\" formControlName=\"skillName\" class=\"form-control\" [ngClass]=\"{\n                    'is-invalid': skill.get('skillName').invalid && (skill.get('skillName').dirty || skill.get('skillName').touched || signUpForm.submitted),\n    \n                    'is-valid': skill.get('skillName').valid && (skill.get('skillName').dirty || skill.get('skillName').touched || signUpForm.submitted) }\">\n                </div>\n\n                <div class=\"col-4\">\n                  <select name=\"level\" id=\"level\" formControlName=\"level\" class=\"form-control\" [ngClass]=\"{\n                    'is-invalid': skill.get('level').invalid && (skill.get('level').dirty || skill.get('level').touched || signUpForm.submitted),\n    \n                    'is-valid': skill.get('level').valid && (skill.get('level').dirty || skill.get('level').touched || signUpForm.submitted) }\">\n                    <option value=\"null\">Please Select</option>\n                    <option value=\"Beginner\">Beginner</option>\n                    <option value=\"Intermediate\">Intermediate</option>\n                    <option value=\"Professional\">Professional</option>\n                    <option value=\"Expert\">Expert</option>\n                  </select>\n                </div>\n\n                <div class=\"col-3\">\n                  <button class=\"btn btn-danger\" type=\"button\" (click)=\"onRemoveClick(i)\">Remove</button>\n                </div>\n              </div>\n\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"onAddSkill()\">Add Skill</button>\n            </div>\n\n          </div>\n\n          <!-- {{signUpForm.value | json}} -->\n        </div>\n\n        <div class=\"card-footer\">\n          <button class=\"btn btn-success float-right\">Create Account</button>\n          <div class=\"text-danger\">{{registerError}}</div>\n        </div>\n\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.scss":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../countries.service */ "./src/app/countries.service.ts");
/* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-validators.service */ "./src/app/custom-validators.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
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
        });
    };
    SignUpComponent.prototype.onSubmitClick = function () {
        var _this = this;
        //Display current form value
        this.signUpForm["submitted"] = true;
        console.log(this.signUpForm);
        if (this.signUpForm.valid) {
            var signUpVieModel = this.signUpForm.value;
            this.loginService.Register(signUpVieModel).subscribe(function (response) {
                _this.router.navigate(["tasks"]);
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
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_countries_service__WEBPACK_IMPORTED_MODULE_3__["CountriesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"], _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tasks works!\n</p>\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.scss":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
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
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/tasks/tasks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/team-size-validator.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/team-size-validator.directive.ts ***!
  \**************************************************/
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