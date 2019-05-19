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

console.log(state, newState);
