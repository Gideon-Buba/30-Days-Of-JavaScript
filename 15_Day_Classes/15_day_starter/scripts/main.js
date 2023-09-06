
/*
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    console.log(this)
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    console.log('hi')
    return skills[index]
  }
}

console.log(Person.favoriteSkill())

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    console.log(this)
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)
console.log(s2)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo()) */



// Exercise 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age= age;
    this.color = color;
    this.legs = legs;
  }
  getFullname() {
    return `${this.name}`;
  }
  
  // Exercise 2
  getAnimalInfo() {
    const fullInfo = `My pet's name is ${this.name}, It is ${this.age} years old and ${this.color} in color. It also has ${this.legs} legs.`;
    return fullInfo;
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }
  bark() {
    console.log('woof woof');
  }

  // Exercise Level 2
  getAnimalInfo() {
    const fullInfo = `My dog's name is ${this.name}, It is ${this.age} years old and ${this.color} in color. It also has ${this.legs} legs.`;
    return fullInfo;
  }
}
class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }
  meow() {
    console.log('meow meow');
  }

  // Exercise Level 2
  getAnimalInfo() {
    const fullInfo = `My cats's name is ${this.name}, It is ${this.age} years old and ${this.color} in color. It also has ${this.legs} legs.`;
    return fullInfo;
  }
}

