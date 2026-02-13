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









var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
            exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]],
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

module.exports = "<h1>Projects</h1>\n<div class=\"row\">\n  <div class=\"col-8 mx-auto\">\n    <div class=\"form-group form-row\">\n      <label for=\"drpSearchBy\" class=\"col-form-label col-3\">Search:</label>\n      <div class=\"col-9\">\n        <select class=\"form-control\" id=\"drpSearchBy\" name=\"SearchBy\" [(ngModel)]=\"searchBy\">\n          <option value=\"ProjectID\">Project ID</option>\n          <option value=\"ProjectName\">Project Name</option>\n          <option value=\"DateOfStart\">Date of Start</option>\n          <option value=\"TeamSize\">Team Size</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group form-row\">\n      <label for=\"textSearchText\" class=\"col-form-label col-3\">Search:</label>\n      <div class=\"col-9\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" id=\"txtSearchText\" name=\"SearchText\" [(ngModel)]=\"searchText\">\n          <div class=\"input-group-append\" (click)=\"onSearchClick()\">\n             <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-8 mx-auto\">\n    <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#newModal\">Create Project</button>\n  </div>\n  <div class=\"col-8 mx-auto\">\n    <table class=\"table\">\n      <thead>\n        <th>Project ID</th>\n        <th>Project Name</th>\n        <th>Date of Start</th>\n        <th>Team Size</th>\n        <th>Actions</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let project of projects; let i = index\">\n          <td>{{project.projectID}}</td>\n          <td>{{project.projectName}}</td>\n          <td>{{project.dateOfStart}}</td>\n          <td>{{project.teamSize}}</td>\n          <td>\n            <button class=\"btn btn-info\" (click)=\"onEditClick($event, i)\" data-toggle=\"modal\"\n              data-target=\"#editModal\">Edit</button>&nbsp;\n            <button class=\"btn btn-warning\" (click)=\"onDeleteClick($event, i)\" data-toggle=\"modal\"\n              data-target=\"#deleteModal\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<form>\n  <div class=\"modal\" role=\"dialog\" id=\"newModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">New Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtNewProjectID\" style=\"width:100px\" class=\"form-control\" placeholder=\"Project ID\"\n                name=\"ProjectID\" [(ngModel)]=\"newProject.projectID\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtNewProjectName\" class=\"form-control\" placeholder=\"Project Name\"\n                name=\"ProjectName\" [(ngModel)]=\"newProject.projectName\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\n            <div class=\"col-sm-8\">\n              <input type=\"date\" id=\"txtNewDateOfStart\" style=\"width:150px\" class=\"form-control\"\n                placeholder=\"Date of Start\" name=\"DateOfStart\" [(ngModel)]=\"newProject.dateOfStart\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" id=\"txtTeamSize\" style=\"width:150px\" class=\"form-control\" placeholder=\"Team Size\"\n                name=\"TeamSize\" [(ngModel)]=\"newProject.teamSize\">\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onSaveClick()\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<!-- Edit Project -->\n<form>\n  <div class=\"modal\" role=\"dialog\" id=\"editModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">Edit Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtEditProjectID\" style=\"width:100px\" class=\"form-control-plain-text\"\n                placeholder=\"Project ID\" name=\"ProjectID\" [(ngModel)]=\"editProject.projectID\" disabled=\"disabled\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtEditProjectName\" class=\"form-control\" placeholder=\"Project Name\"\n                name=\"ProjectName\" [(ngModel)]=\"editProject.projectName\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\n            <div class=\"col-sm-8\">\n              <input type=\"date\" id=\"txtEditDateOfStart\" style=\"width:150px\" class=\"form-control\"\n                placeholder=\"Date of Start\" name=\"DateOfStart\" [(ngModel)]=\"editProject.dateOfStart\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtEditTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" id=\"txtEditTeamSize\" style=\"width:150px\" class=\"form-control\" placeholder=\"Team Size\"\n                name=\"TeamSize\" [(ngModel)]=\"editProject.teamSize\">\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onUpdateClick()\">Update</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n\n<!-- Delete Project -->\n<form>\n  <div class=\"modal\" role=\"dialog\" id=\"deleteModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">Delete Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"text-warning\">Are you sure to delete this Project?</div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtDeleteProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtDeleteProjectID\" style=\"width:100px\" class=\"form-control-plain-text\"\n                placeholder=\"Project ID\" name=\"ProjectID\" [(ngModel)]=\"deleteProject.projectID\" disabled=\"disabled\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtDeleteProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtDeleteProjectName\" class=\"form-control-plain-text\" placeholder=\"Project Name\"\n                name=\"ProjectName\" [(ngModel)]=\"deleteProject.projectName\" disabled=\"disabled\">\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onDeleteConfirmClick()\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

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
/* harmony import */ var src_app_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/project */ "./src/app/project.ts");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectsService) {
        this.projectsService = projectsService;
        this.projects = [];
        this.newProject = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.editProject = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.editIndex = null;
        this.deleteProject = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        this.deleteIndex = null;
        this.searchBy = "ProjectName";
        this.searchText = "";
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsService.getAllProjects().subscribe(function (response) {
            _this.projects = response;
        }, function (error) {
            console.log(error);
            alert("Authentication failed");
        });
    };
    ProjectsComponent.prototype.onSaveClick = function () {
        var _this = this;
        this.projectsService.insertProject(this.newProject).subscribe(function (response) {
            //Add Project to Grid
            var p = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            _this.projects.push(p);
            //Clear New Project Dialog - TextBoxes
            _this.newProject.projectID = null;
            _this.newProject.projectName = null;
            _this.newProject.dateOfStart = null;
            _this.newProject.teamSize = null;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectsComponent.prototype.onEditClick = function (event, index) {
        this.editProject.projectID = this.projects[index].projectID;
        this.editProject.projectName = this.projects[index].projectName;
        this.editProject.dateOfStart = this.projects[index].dateOfStart;
        this.editProject.teamSize = this.projects[index].teamSize;
        this.editIndex = index;
    };
    ProjectsComponent.prototype.onUpdateClick = function () {
        var _this = this;
        this.projectsService.updateProject(this.editProject).subscribe(function (response) {
            var p = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            _this.projects[_this.editIndex] = p;
            _this.editProject.projectID = null;
            _this.editProject.projectName = null;
            _this.editProject.dateOfStart = null;
            _this.editProject.teamSize = null;
        }, function (error) {
            console.log(error);
        });
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
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/admin/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/admin/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
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







var routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: "dashboard", component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: "about", component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: "projects", component: _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
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

module.exports = "<nav class=\"navbar navbar-expand-sm bg-success navbar-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n        Angular Task Manager\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mynav\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"mynav\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" routerLink=\"dashboard\">Dashboard</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"about\">About</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" routerLink=\"projects\">Projects</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" href=\"#\">{{loginService.currentUserName}}</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName != null\">\n                <a class=\"nav-link\" href=\"#\" (click)=\"loginService.Logout()\">Logout</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loginService.currentUserName == null\">\n                <a class=\"nav-link\" routerLink=\"login\">Login</a>\n            </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"search\"><i class=\"fa fa-search\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n            <button class=\"btn btn-warning my2- my-sm-0\" type=\"button\" (click)=\"onSearchClick()\">Search</button>\n        </form>\n    </div>\n</nav>\n\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>"

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



var AppComponent = /** @class */ (function () {
    function AppComponent(loginService) {
        this.loginService = loginService;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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




var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.currentUserName = null;
    }
    LoginService.prototype.Login = function (loginViewModel) {
        var _this = this;
        return this.httpClient.post("/authenticate", loginViewModel, { responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                _this.currentUserName = user.userName;
                sessionStorage.currentUser = JSON.stringify(user);
            }
            return user;
        }));
    };
    LoginService.prototype.Logout = function () {
        sessionStorage.removeItem("currentUser");
        this.currentUserName = null;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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

/***/ "./src/app/project.ts":
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
        this.projectID = 0;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = 0;
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
        var currentUser = { token: "" };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Authorization", "Bearer ");
        if (sessionStorage.currentUser != null) {
            currentUser = JSON.parse(sessionStorage.currentUser);
            headers = headers.set("Authorization", "Bearer " + currentUser.token);
        }
        return this.httpClient.get("/api/projects", { headers: headers, responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            for (var i = 0; i < data.length; i++) {
                data[i].teamSize = data[i].teamSize * 100;
            }
            return data;
        }));
    };
    ProjectsService.prototype.insertProject = function (newProject) {
        return this.httpClient.post("/api/projects", newProject, { responseType: "json" });
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