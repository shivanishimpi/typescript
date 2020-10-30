enum Role {ADMIN, READ_ONLY, AUTHOR};
/*const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
*/
const person /*: {
  firstname: string;
  lastname: string;
} */ = {
  firstname: "Sunshine",
  lastname: "Cookie",
  hobbies:['Dance','Code','Paint'],
  role : Role.AUTHOR
};

person.hobbies.push('Writing');
//person.hobbies[0]='Live';

for(const hobby of person.hobbies){
    console.log(hobby.toLowerCase());
}
console.log(person);
console.log(person.hobbies);
if (person.role===Role.ADMIN){
    console.log('isAdmin');
}
else{
    console.log('is not ADMIN')
}