const school = 'Rajuk Uk Uttora Model School';
console.log(school);
// console.log(school.toLowerCase());   //toLowercase use kore var man choto kore
// console.log(school.toUpperCase());

// uppercase: ABCD EFG
//lowercase:  abcd efg
const subject = 'chemistry';
const book = 'ChemIsTry';


if (subject.toLowerCase() === book.toLowerCase()) {
  console.log('I am reading Book ai bar porikkhai pathai demu');
}
else {
  console.log('hudai parista ultai r vatha er jonno opekha kori');
}


const drinks = '  wa ter';
const liquid = 'water ';

if (drinks.trim() === liquid.trim()) {   // trim() string er start and end sorai 
  console.log('panir er opor nam life'); // trim() string er midle k sorai na
}
else {
  console.log('shagorem pani lobonatoo');
}
