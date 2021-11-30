"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
function every(array, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var result, index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = true;
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < array.length)) return [3, 4];
                    return [4, callback(array[index], index, array)];
                case 2:
                    if (!(_a.sent())) {
                        result = false;
                        return [3, 4];
                    }
                    _a.label = 3;
                case 3:
                    index++;
                    return [3, 1];
                case 4: return [2, result];
            }
        });
    });
}
var Test = (function () {
    function Test(tests) {
        if (tests === void 0) { tests = []; }
        this.tests = tests;
    }
    Test.prototype.testFunction = function (test) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var testResult, output, method, _b, _c, exception, error_1, error_2;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        testResult = undefined;
                        output = undefined;
                        method = test.function;
                        if (method == undefined) {
                            throw new Error("The function does not exist.");
                        }
                        if (!test.context) return [3, 4];
                        _b = test;
                        if (!(typeof test.context == "function")) return [3, 2];
                        return [4, test.context()];
                    case 1:
                        _c = _d.sent();
                        return [3, 3];
                    case 2:
                        _c = test.context;
                        _d.label = 3;
                    case 3:
                        _b.context = _c;
                        method = method.bind.apply(method, __spreadArray([test.context], test.input));
                        return [3, 5];
                    case 4:
                        method = method.bind.apply(method, __spreadArray([this], test.input));
                        _d.label = 5;
                    case 5:
                        if (!test.exception) return [3, 11];
                        exception = undefined;
                        _d.label = 6;
                    case 6:
                        _d.trys.push([6, 8, 9, 10]);
                        return [4, method()];
                    case 7:
                        _d.sent();
                        return [3, 10];
                    case 8:
                        error_1 = _d.sent();
                        exception = error_1.toString ? error_1.toString() : JSON.stringify(error_1);
                        return [3, 10];
                    case 9:
                        output = exception;
                        test.output = ((_a = test.output) === null || _a === void 0 ? void 0 : _a.toString) ? test.output.toString() : JSON.stringify(test.output);
                        testResult = (output == test.output);
                        return [7];
                    case 10: return [3, 14];
                    case 11:
                        _d.trys.push([11, 13, , 14]);
                        return [4, method()];
                    case 12:
                        output = _d.sent();
                        testResult = JSON.stringify(output) == JSON.stringify(test.output);
                        return [3, 14];
                    case 13:
                        error_2 = _d.sent();
                        console.log(error_2.toString ? error_2.toString() : JSON.stringify(error_2));
                        testResult = false;
                        return [3, 14];
                    case 14:
                        if (test.debug) {
                            console.log("Output: ", JSON.stringify(output));
                            console.log("Expected: ", JSON.stringify(test.output));
                        }
                        return [2, testResult];
                }
            });
        });
    };
    Test.prototype.evaluate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, tests, final;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        tests = self.tests;
                        final = undefined;
                        if (!(tests.length == 0)) return [3, 1];
                        throw new Error("There are no tests to test.");
                    case 1: return [4, every(tests, function (test) {
                            return __awaiter(this, void 0, void 0, function () {
                                var result;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, self.testFunction(test)];
                                        case 1:
                                            result = _a.sent();
                                            final = {
                                                state: result,
                                                message: result ? "All tests passed!" : "Test: " + test.name + " failed!"
                                            };
                                            return [2, result];
                                    }
                                });
                            });
                        })];
                    case 2:
                        _a.sent();
                        return [2, final];
                }
            });
        });
    };
    return Test;
}());
function test(tests) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Running tests...");
                    return [4, new Test(tests).evaluate()];
                case 1:
                    result = _a.sent();
                    console.log(result.message);
                    return [2, result.state];
            }
        });
    });
}
exports.default = test;
//# sourceMappingURL=test.js.map