const author = {
  firstName: 'Aki',
  lastName: 'Iskandar',
  topics: ['Angular', 'JavaScript', 'TypeScript', 'Bootstrap', 'Node'],
  cities: ['Calgary', 'Cleveland'],
  publisher: 'Packt'
}

const fName = author.firstName;
const lName = author.lastName;
const pubName = author.publisher;

console.log(pubName);

const {firstName, lastName, publisher} = author;

console.log(firstName);