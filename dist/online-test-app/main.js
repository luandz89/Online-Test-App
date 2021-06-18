(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-quiz></app-quiz>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz/quiz.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz/quiz.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-6\">\r\n    <h3>Quiz Application</h3>\r\n  </div>\r\n  <div class=\"col-6 text-right\">\r\n    Select Quiz:\r\n    <select [(ngModel)]=\"quizName\" (change)=\"loadQuiz(quizName)\">\r\n      <option *ngFor=\"let quiz of quizes\" [value]=\"quiz.id\">{{quiz.name}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n<div id=\"quiz\">\r\n  <h2 class=\"text-center font-weight-normal\">{{quiz.name}}</h2>\r\n  <hr />\r\n\r\n  <div *ngIf=\"mode=='quiz' && quiz\">\r\n    <div *ngFor=\"let question of filteredQuestions;\">\r\n      <div class=\"badge badge-info\">Question {{pager.index + 1}} of {{pager.count}}.</div>\r\n      <div *ngIf=\"config.duration\" class=\"badge badge-info float-right\">Time: {{ellapsedTime}} / {{duration}}</div>\r\n      <h3 class=\"font-weight-normal\">{{pager.index + 1}}.\r\n        <span [innerHTML]=\"question.name\"></span>\r\n      </h3>\r\n      <div class=\"row text-left options\">\r\n        <div class=\"col-6\" *ngFor=\"let option of question.options\">\r\n          <div class=\"option\">\r\n            <label class=\"font-weight-normal\" [attr.for]=\"option.id\">\r\n              <input id=\"{{option.id}}\" type=\"checkbox\" [(ngModel)]=\"option.selected\" (change)=\"onSelect(question, option);\" /> {{option.name}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">First</button>\r\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.index - 1);\">Prev</button>\r\n      <button class=\"btn btn-primary\" (click)=\"goTo(pager.index + 1);\">Next</button>\r\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Last</button>\r\n      <!--<pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>-->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-center\" *ngIf=\"mode=='review'\">\r\n    <div class=\"col-4 cursor-pointer\" *ngFor=\"let question of quiz.questions; let index = index;\">\r\n      <div (click)=\"goTo(index)\" class=\"p-3 mb-2 {{ isAnswered(question) == 'Answered'? 'bg-info': 'bg-warning' }}\">{{index + 1}}. {{ isAnswered(question) }}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"result\" *ngIf=\"mode=='result'\">\r\n    <h2>Quiz Result</h2>\r\n    <div *ngFor=\"let question of quiz.questions; let index = index\">\r\n      <div class=\"result-question\">\r\n        <h5>{{index + 1}}. {{question.name}}</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\" *ngFor=\"let Option of question.options\">\r\n            <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> {{Option.name}}\r\n          </div>\r\n        </div>\r\n        <div class=\"p-1 m-2 alert {{ isCorrect(question) == 'correct'? 'alert-success': 'alert-danger'}}\">Your answer is {{isCorrect(question)}}.</div>\r\n      </div>\r\n    </div>\r\n    <h4 class=\"alert alert-info text-center\">You may close this window now.</h4>\r\n  </div>\r\n  <hr />\r\n  <div *ngIf=\"mode!='result'\">\r\n    <button class=\"btn btn-warning\" (click)=\"mode = 'quiz'\">Quiz</button>\r\n    <button class=\"btn btn-info\" (click)=\"mode = 'review'\">Review</button>\r\n    <button class=\"btn btn-primary\" (click)=\"onSubmit();\">Submit Quiz</button>\r\n  </div>\r\n</div>"

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Option, Question, Quiz, QuizConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option */ "./src/app/models/option.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _option__WEBPACK_IMPORTED_MODULE_0__["Option"]; });

/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/models/question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _question__WEBPACK_IMPORTED_MODULE_1__["Question"]; });

/* harmony import */ var _quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz */ "./src/app/models/quiz.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return _quiz__WEBPACK_IMPORTED_MODULE_2__["Quiz"]; });

/* harmony import */ var _quiz_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-config */ "./src/app/models/quiz-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizConfig", function() { return _quiz_config__WEBPACK_IMPORTED_MODULE_3__["QuizConfig"]; });







/***/ }),

/***/ "./src/app/models/option.ts":
/*!**********************************!*\
  !*** ./src/app/models/option.ts ***!
  \**********************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
var Option = /** @class */ (function () {
    function Option(data) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
    Option.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Option;
}());



/***/ }),

/***/ "./src/app/models/question.ts":
/*!************************************!*\
  !*** ./src/app/models/question.ts ***!
  \************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option */ "./src/app/models/option.ts");

var Question = /** @class */ (function () {
    function Question(data) {
        var _this = this;
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(function (o) {
            _this.options.push(new _option__WEBPACK_IMPORTED_MODULE_0__["Option"](o));
        });
    }
    Question.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Question;
}());



/***/ }),

/***/ "./src/app/models/quiz-config.ts":
/*!***************************************!*\
  !*** ./src/app/models/quiz-config.ts ***!
  \***************************************/
/*! exports provided: QuizConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizConfig", function() { return QuizConfig; });
var QuizConfig = /** @class */ (function () {
    function QuizConfig(data) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.allowReview = data.allowReview;
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.pageSize = data.pageSize;
        this.requiredAll = data.requiredAll;
        this.richText = data.richText;
        this.shuffleQuestions = data.shuffleQuestions;
        this.shuffleOptions = data.shuffleOptions;
        this.showClock = data.showClock;
        this.showPager = data.showPager;
    }
    QuizConfig.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return QuizConfig;
}());



/***/ }),

/***/ "./src/app/models/quiz.ts":
/*!********************************!*\
  !*** ./src/app/models/quiz.ts ***!
  \********************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony import */ var _quiz_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-config */ "./src/app/models/quiz-config.ts");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/models/question.ts");


var Quiz = /** @class */ (function () {
    function Quiz(data) {
        var _this = this;
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new _quiz_config__WEBPACK_IMPORTED_MODULE_0__["QuizConfig"](data.config);
            this.questions = [];
            data.questions.forEach(function (q) {
                _this.questions.push(new _question__WEBPACK_IMPORTED_MODULE_1__["Question"](q));
            });
        }
    }
    Quiz.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Quiz;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/index */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizComponent = /** @class */ (function () {
    function QuizComponent(quizService) {
        this.quizService = quizService;
        this.quiz = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Quiz"](null);
        this.mode = 'quiz';
        this.config = {
            'allowBack': true,
            'allowReview': true,
            'autoMove': false,
            'duration': 300,
            'pageSize': 1,
            'requiredAll': false,
            'richText': false,
            'shuffleQuestions': false,
            'shuffleOptions': false,
            'showClock': false,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
        this.timer = null;
        this.ellapsedTime = '00:00';
        this.duration = '';
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.quizes = this.quizService.getAll();
        this.quizName = this.quizes[0].id;
        this.loadQuiz(this.quizName);
    };
    QuizComponent.prototype.loadQuiz = function (quizName) {
        var _this = this;
        this.quizService.get(quizName).subscribe(function (res) {
            _this.quiz = new _models_index__WEBPACK_IMPORTED_MODULE_2__["Quiz"](res);
            _this.pager.count = _this.quiz.questions.length;
            _this.startTime = new Date();
            _this.ellapsedTime = '00:00';
            _this.timer = setInterval(function () { _this.tick(); }, 1000);
            _this.duration = _this.parseTime(_this.config.duration);
        });
        this.mode = 'quiz';
    };
    QuizComponent.prototype.tick = function () {
        var now = new Date();
        var diff = (now.getTime() - this.startTime.getTime()) / 1000;
        if (diff >= this.config.duration) {
            this.onSubmit();
        }
        this.ellapsedTime = this.parseTime(diff);
    };
    QuizComponent.prototype.parseTime = function (totalSeconds) {
        var mins = Math.floor(totalSeconds / 60);
        var secs = Math.round(totalSeconds % 60);
        mins = (mins < 10 ? '0' : '') + mins;
        secs = (secs < 10 ? '0' : '') + secs;
        return mins + ":" + secs;
    };
    Object.defineProperty(QuizComponent.prototype, "filteredQuestions", {
        get: function () {
            return (this.quiz.questions) ?
                this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    QuizComponent.prototype.onSelect = function (question, option) {
        if (question.questionTypeId === 1) {
            question.options.forEach(function (x) { if (x.id !== option.id)
                x.selected = false; });
        }
        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    };
    QuizComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    QuizComponent.prototype.isAnswered = function (question) {
        return question.options.find(function (x) { return x.selected; }) ? 'Answered' : 'Not Answered';
    };
    ;
    QuizComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 'correct' : 'wrong';
    };
    ;
    QuizComponent.prototype.onSubmit = function () {
        var _this = this;
        var answers = [];
        this.quiz.questions.forEach(function (x) { return answers.push({ 'quizId': _this.quiz.id, 'questionId': x.id, 'answered': x.answered }); });
        // Post your data to the server here. answers contains the questionId and the users' answer.
        console.log(this.quiz.questions);
        this.mode = 'result';
    };
    QuizComponent.ctorParameters = function () { return [
        { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"] }
    ]; };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz/quiz.component.html"),
            providers: [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]],
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/services/quiz.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/quiz.service.ts ***!
  \******************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.get = function (url) {
        return this.http.get(url);
    };
    QuizService.prototype.getAll = function () {
        return [
            { id: 'data/javascript.json', name: 'JavaScript' },
            { id: 'data/aspnet.json', name: 'Asp.Net' },
            { id: 'data/csharp.json', name: 'C Sharp' },
            { id: 'data/designPatterns.json', name: 'Design Patterns' }
        ];
    };
    QuizService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    QuizService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], QuizService);
    return QuizService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luand\Desktop\online-test-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map