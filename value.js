const person = {
  name: 'Lolita',
  house: 'Mirpur 6',
  gender: 'Femel',
  age: 29,
  profession: 'House Wife',
  salary: 20000,
  married: true,
  'fav places': ['maldiv', 'amirica', 'jarmany', 'london'],
}
person['age'] = 40;
person.salary = 30000;  // value update modify
person['fav places'] = ['srilanka', 'dubai', 'japan']; //update fav place ['',]
console.log(person);

const keyName = ['profession'];
console.log(person[keyName]);

const popName ="profession";
person[popName]='developer';
console.log(person);