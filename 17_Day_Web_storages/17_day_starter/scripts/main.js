// Exercise Level 1

// Exercise 1
const information = {
    firstName : 'Gideon',
    lastName: 'Buba',
    age: 21,
    country: 'Nigeria',
    city: 'Abuja'
};

let informationString = JSON.stringify(information);
localStorage.setItem('information', informationString);


// Exercise Level 2

// Exercise 1
const student = {
    firstName: 'Gideon',
    lastName: 'Buba',
    age: 21,
    skills: "['HTML', 'CSS', 'JavaScript', 'Python']",
    country: 'Nigeria',
    enrolled: {
        math: true,
        science: false,
        history: true,
    }
}

const studentString = JSON.stringify(student);

localStorage.setItem('student', studentString);

