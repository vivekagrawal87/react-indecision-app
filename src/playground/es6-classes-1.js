class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor) {
            description += `His major is ${this.major}`;
        }

        return description;
    } 
}

const me = new Person('Vivek Agrawal', 34);
console.log(me.getGreeting());
console.log(me.getDescription())

const student1 = new Student('Vivek', 23, 'Computers');
console.log(student1.getDescription());