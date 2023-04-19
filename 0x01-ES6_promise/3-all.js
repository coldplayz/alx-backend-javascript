import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((objsList) => console.log(objsList[0].body, objsList[1].firstName, objsList[1].lastName))
    .catch(() => console.log('Signup system offline'));
}

/*
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((objsList) => console.log(
      `${objsList[0].body} ${objsList[1].firstName} ${objsList[1].lastName}`),
      () => console.log('Signup system offline'));
}
*/

/*
export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((objsList) => console.log(objsList[0].body, objsList[1].firstName, objsList[1].lastName))
    .catch(() => console.log('Signup system offline'));
}
*/

/*
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const x = uploadPhoto();
  const y = createUser();
  return Promise.all([x, y]).then(
    (data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`),
    () => console.log('Signup system offline'),
  );
}
*/

/*
export default function handleProfileSignup() {
  const up = uploadPhoto();
  const cu = createUser();

  Promise.all([up, cu])
    .then((objsList) => console.log(
      `${objsList[0].body} ${objsList[1].firstName} ${objsList[1].lastName}`,
    ),
    () => console.log('Signup system offline'));
}
*/
