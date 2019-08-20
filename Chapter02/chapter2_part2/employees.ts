class Employee {
	name:string;
	title: string;
  constructor(name) {
    this.name = name;
    this.title = "an employee";
  }
  annouceThyself() {
    return `Hi. My name is ${this.name} and I am ${this.title}.`;
  }
}
class Manager extends Employee {
  constructor(name) {
    super(name);
    this.title = "a manager";
  }
}

var emp = new Employee("Goofy");
console.log(emp.annouceThyself()); 

var mgr = new Manager("Mickey");
console.log(mgr.annouceThyself()); 
//  Hi. My name is Mickey and I am a manager.