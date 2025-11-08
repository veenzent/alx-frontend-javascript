interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // allows additional properties
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"


// write an interface names Directors that extends Teacher
interface Director extends Teacher {
    numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"


// Define the interface for printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
    // return `${firstName.charAt(0)}. ${lastName}`;
    return `${firstName}. ${lastName}`;
}

// const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
//     return `${firstName.charAt(0)}. ${lastName}`;
// };

// example usage
console.log(printTeacher("Vincent", "Odogwu")); // should print "V. Odogwu"

