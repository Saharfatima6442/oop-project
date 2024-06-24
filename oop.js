var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(Personality) {
        this.Personality = "2";
    }
    return Person;
}());
;
var getPersonality = /** @class */ (function (_super) {
    __extends(getPersonality, _super);
    function getPersonality() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    getPersonality.prototype.result = function () {
        if (this.Personality === "1") {
            console.log("Extrovert!");
        }
        else {
            console.log("Introvert!");
        }
        this.Personality;
    };
    return getPersonality;
}(Person));
var P1 = new getPersonality("1");
P1.result();
