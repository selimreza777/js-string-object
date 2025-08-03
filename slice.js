const address = 'andorkilla';
const part = address.slice(2, 5) //index koto theke koto porjonto dekhabo
// console.log(part);

const sentence = "I am a good and hardworking person.";
// console.log(sentence.split(' ')); //string er modde faka vag kore deyar jonno 
// console.log(sentence.split('a'));
const friendsStr = 'Rahim,kahim,lamim,dalim,fahim,jamil';
const friend = friendsStr.split(',')
console.log(friend);

const realFriend = ['Rahim', 'kahim', 'lamim', 'dalim', 'fahim', 'jamil'];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
console.log(realFriend.join('&'));