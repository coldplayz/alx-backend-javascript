import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const data = {};

  try {
    const photo = await uploadPhoto();
    data.photo = photo;
  } catch (err) {
    data.photo = [];
  }

  try {
    const user = await createUser();
    data.user = user;
  } catch (err) {
    data.user = [];
  }

  return data;
}
