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
var ReposComponent = /** @class */ (function () {
    function ReposComponent() {
        this.sayMyName = new core_1.EventEmitter();
    }
    ReposComponent.prototype.ngOnInit = function () {
    };
    ReposComponent.prototype.triggerEvent = function (message) {
        this.sayMyName.emit(message);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ReposComponent.prototype, "RepoList", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ReposComponent.prototype, "sayMyName", void 0);
    ReposComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'repos',
            templateUrl: './repos.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ReposComponent);
    return ReposComponent;
}());
exports.ReposComponent = ReposComponent;
//# sourceMappingURL=repos.component.js.map