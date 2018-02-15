"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService_1 = require("./Service/DataService");
var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.name = 'Angular';
        this.userName = "";
    }
    Object.defineProperty(AppComponent.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (val) {
            this._userName = val;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.getUserDetail = function () {
        var _this = this;
        this.service.getUserDetail(this.userName)
            .subscribe(function (result) { return _this.User = result; }, function (error) { return console.log(error); }, function () {
            _this.service.getUserRepos(_this.User.repos_url)
                .subscribe(function (response) { return _this.Repos = response; }, function (err) { return console.log(err); }, function () { return console.log("All Repos Loaded"); });
        });
    };
    AppComponent.prototype.alertMessage = function ($event) {
        alert("[" + this.User.bio + "]:" + $event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [DataService_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map