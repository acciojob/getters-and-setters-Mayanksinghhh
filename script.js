//complete this code
class Person {
	constructor(name,age){
		this.name=name
		this.age=age
	}
	name(){
		return name;
	}
	age(){
		this.age=age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}

	 study(){
		 return `${name} is studying`
	 }
}

class Teacher extends Person {

	constructor(name,age){
		super(name,age);
	}

	teach(){
		 return `${name} is teaching`
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
