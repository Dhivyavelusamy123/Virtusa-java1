///<reference path= "hello1.ts" />
var Hello;
(function (Hello) {
    var mech = /** @class */ (function () {
        function mech() {
        }
        mech.prototype.paint = function () {
            console.log("mech classroom is painted");
        };
        return mech;
    }());
    Hello.mech = mech;
})(Hello || (Hello = {}));
