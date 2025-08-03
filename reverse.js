const sentences = 'I am a learning web dev.';
// const output: '.ved bew gninrael a ma I'


let reverse = '';
for (const letter of sentences) {
  // console.log(letter);
  reverse = letter + reverse;
}
// console.log(reverse);

//ignore this solution
let rev = '';
for (let i = 0; i < sentences.length; i++) {
  // console.log(sentences[i]);
  const letter = sentences[i];
  rev = letter + rev;
}
// console.log(rev);


//another shortcut solution reverses
const reversed = sentences.split('').reverse().join('');
console.log(reversed);