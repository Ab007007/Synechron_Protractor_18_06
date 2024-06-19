let userAges = new Map();
userAges.set('name', "Aravinda");
userAges.set('lastname', ' HB ')
.set('address', 'bangalore')
.set(true, 'have driving  licence');

console.log(userAges.entries());

userAges.forEach(ele => {
    console.log(ele);
})