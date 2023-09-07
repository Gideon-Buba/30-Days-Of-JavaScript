// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Exercise Level 1

// Exercise 1
const jsonSkills = JSON.stringify(skills, undefined, 4);
console.log(jsonSkills);

// Exercise 2
const ageString = JSON.stringify(age);
console.log(ageString);

// Exercise 3
const studentString = JSON.stringify(student, undefined, 3);
console.log(studentString)


// Exercise Level 2

// Exercise 1
const jsonStudent = JSON.stringify(student['firstName', 'lastName', 'skills'], undefined, 4);
console.log(jsonStudent);



// Exercise Level 3

// Exercise 1
const txtObj = JSON.parse(txt);
console.log(txtObj)

// Exercise 2
let maxSkillsCount = 0;
let userWithMaxSkills = null;

// Iterate through the users in txtObj
for (const userName in txtObj) {
  if (txtObj.hasOwnProperty(userName)) {
    const user = txtObj[userName];
    const skillsCount = user.skills.length;

    // Check if this user has more skills than the current max
    if (skillsCount > maxSkillsCount) {
      maxSkillsCount = skillsCount;
      userWithMaxSkills = userName;
    }
  }
}

console.log(`The user with the most skills is: ${userWithMaxSkills}`);






