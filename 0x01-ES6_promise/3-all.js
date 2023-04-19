import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((objsList) => console.log(`${objsList[0].body} ${objsList[1].firstName} ${objsList[1].lastName}`), () => console.log('Signup system offline'));
}

/*
export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((objsList) => console.log(objsList[0].body, objsList[1].firstName, objsList[1].lastName))
    .catch(() => console.log('Signup system offline'));
}
*/
