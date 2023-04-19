import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const data = {};

  try {
    const photo = await uploadPhoto();
    data.photo = photo;
  } catch (err) {
    data.photo = null;
    data.user = null;
  }

  try {
    const user = await createUser();
    data.user = user;
  } catch (err) {
    data.photo = null;
    data.user = null;
  }

  return data;
}
