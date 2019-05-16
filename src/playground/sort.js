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
console.log(contacts, res, test);