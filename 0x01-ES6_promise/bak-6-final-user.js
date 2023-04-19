import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((objsList) => {
      for (const obj of objsList) {
        if (obj.status === 'rejected') {
          obj.value = obj.reason.message;
          delete obj.reason;
        }
      }
      // console.log(objsList);
      return objsList;
    });
}
