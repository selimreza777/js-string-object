const collage = {
  name: 'Bncc',
  class: ['10', '11', '12'],
  event: ['science fair', 'bijoy dibosh', '21 feb'],
  uniq: {
    color: 'blue',
    result: {
      gpa: 5,
      merit: 'top'
    }
  }
}
console.log(collage.name);
console.log(collage.uniq.color);
collage.uniq.result.merit = 'city number one college'
console.log(collage.uniq.result.merit);
collage.event[1] = 'mothers Day',
  console.log(collage.event['1']);
delete collage.class;
console.log(collage);
