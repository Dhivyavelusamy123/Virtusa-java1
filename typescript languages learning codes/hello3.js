///<reference path= "hello1.ts" />
var Hello;
(function (Hello) {
    var cse = /** @class */ (function () {
        function cse() {
        }
        cse.prototype.paint = function () {
            console.log("technical event");
        };
        return cse;
    }());
    Hello.cse = cse;
})(Hello || (Hello = {}));
