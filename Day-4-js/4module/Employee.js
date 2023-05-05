export default class Employee {
        constructor(id, name) { //Constructor is a special method which automatically executed when object is created
                console.log("In constructor of Employee");
                this.id = id;
                this.name = name;
        }
        display() {
                //console. log("Inside display");
                //console. log("id is "+this.id+ " and name is :"+this.name);
                console.log(`id is = ${this.id} name is = ${this.name}`);//This is template string added in JS6        //This works with symbol `
        }
}
//export default Employee; //default

function test() {
        console.log("this is test function");
}

let i = 10;
//export { test}
export { test as  t, i}