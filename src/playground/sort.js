const contacts = [
      {
        id: 10,
        name: 'Abu Adnaan',
        email: 'abuadnaan@gmail.com',
        phone: '080-7777-0364',
      },
      {
        id: 2,
        name: 'Ummu Abdillah',
        email: 'abuadnaan@gmail.com',
        phone: '070-6787-0354',
      },
      {
        id: 3,
        name: 'Fattylee Hack',
        email: 'fattyleehack@gmail.com',
        phone: '090-5506-0654',
      },
    ];
const res = [...contacts].sort((a,b) => -a.id + b.id)[0].id + 1;
const test = Boolean('  ');
//console.log(contacts, res, test);
const obj = { name: '  ', age: ''};
if(!obj.name   /*|| obj.age === false */) {
  console.log('this is the truth');
}


// console.log(Boolean(obj.name), Boolean(obj.age));

const duplicateArrayList = [1,2,1,2,3,3,4];
const refinedList = [...new Set(duplicateArrayList)];
//console.log(refinedList);

const state = {
  isAddContactOpen: true,
    newContact: {
     // id: uuid(),
      name: {sex: 'male'},
      email: '',
      phone: '',
      errors: {},
    },
};

const newState = {
  ...state,
  newContact: {
    ...state.newContact,
    name: {
      ...state.newContact.name,
        firstName: 'fatai', lastName: 'balogun',
  }
    }
};

//console.log(state, newState);

const { isAddContactOpen: i , newContact } = state;

//console.log(i, newContact);

const arr1 = [{id: 1, name: 'abuadnaan'}, {id: 2, name: 'lastName'}];

contactsVisibilities = [
    {
      id: 1,
      visible: false,
    },
    {
      id: 2,
      visible: false,
    },
    {
      id: 3,
      visible: false,
    },
    ];
const combinedArr = [];
arr1.forEach( (arr, i) => {
  combinedArr.push({...arr, ...contactsVisibilities[i]});
})
//console.log(combinedArr);

const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, arr) => acc + arr, 10);
const multiplyAndSum = nums.reduce((acc, arr) => {
  
}, 2)
var flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, curArr) => {
  acc.push(...curArr);
  return acc;
  }, []);
  
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']; 
const count = names.reduce((acc, curArr, i, arr) => {
  if( arr[i] === arr[3]) acc++;
  return acc;
}, 0);

var people = [ 
  { name: 'Alice', age: 21 }, 
  { name: 'Max', age: 20 }, 
  { name: 'Jane', age: 20 } 
];

const groupByAge = people.reduce((acc, curArr) => {
  if( curArr.age in acc) {
    acc[curArr.age].push(curArr);
  }
  else {
    acc[curArr.age] = [curArr];
  }
  return acc;
}, {});

var friends = [
  { name: 'Anna', 
    books: ['Bible', 'Harry Potter'], 
    age: 21 
  }, 
  { 
    name: 'Bob', 
    books: ['War and peace', 'Romeo and Juliet'], 
    age: 26   
  }, 
  { 
    name: 'Alice', 
    books: ['The Lord of the Rings', 'The Shining'], 
    age: 18 
  }
];
const allBooks = friends.reduce((acc, curArr) => {
  return [...acc, ...curArr.books];
}, []);

var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']; 

const refined = [...new Set([...myArray].sort())];
const refinedReduce = myArray.reduce((acc, curVal) => {
  if(!acc.includes(curVal)) {
    return [...acc, curVal]
  }
  return acc;
}, []);

const sRefined = JSON.stringify(refinedReduce);
//const pRefined = JSON.parse('["a","b","c","e","d"]');
try {
const pRefined = JSON.parse('{ "name": "abu Adnaan", age: 31 }')
console.log(sRefined, pRefined);
}
catch(e) {
  //console.log('errors handled succesfully')
}
const book = {
  publisher: {
    //name: 'fate',
  },
};

const { publisher: { name: publisherName = 'anonymous'}} = book;

//console.log('publisherName is', publisherName);

const [, , third = 'ak money'] = [1, 2, ];
console.log('third is', third);