const mobile = {
  brand: 'samsang',
  price: 5000,
  color: 'black',
  camera: '12mp',
  isNew: true
}

// for of: array
//for in: object

// const values = Object.values(mobile);
// console.log(values);
for (const prop in mobile) {
  //   console.log(prop)
  //   console.log(mobile[prop]);
  //
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
  console.log(key, ':', mobile[key]);
}