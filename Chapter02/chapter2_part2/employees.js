var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
        this.title = "an employee";
    }
    Employee.prototype.annouceThyself = function () {
        return "Hi. My name is " + this.name + " and I am " + this.title + ".";
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        var _this = _super.call(this, name) || this;
        _this.title = "a manager";
        return _this;
    }
    return Manager;
}(Employee));
var emp = new Employee("Goofy");
console.log(emp.annouceThyself());
var mgr = new Manager("Mickey");
console.log(mgr.annouceThyself());
//  Hi. My name is Mickey and I am a manager.
