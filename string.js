// onek vabe string variable er nam er man '',"",``, new string('') likha jai 
const country = 'Maldiv';
const division = "Man Hatton";
const distric = `B-Baria`;         // *****importent
const thana = new String('Demra'); //special purpass e use korbo
// console.log(typeof country);
// console.log(thana);

const numbers = [12, 45, 56, 23, 56];
console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[1]);
numbers[3] = 11;
console.log(numbers);
// string is immutable --->not changable ja change kora jai na string er man
// array is mutable    ---> changable ja change kora jai array element 
const capital = 'dhaka';
console.log(capital);
capital[0] = 'a';     ///this is immutable not changble capital var er man
console.log(capital);
// console.log(capital.length);  // string e ekoi vabe length hisab kora jai
// console.log(capital[4]);