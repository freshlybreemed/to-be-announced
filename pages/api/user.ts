import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

const createUser = async (user: any, db: any) => {
  return await db.collection('user').updateOne(
    { slug: user.slug },
    {
      $set: { ...user, updatedAt: new Date() },
    }
  );
};
const updateUser = async (user: any, db: any) => {
  return await db.collection('user').updateOne(
    { _id: user.firebase.uid },
    {
      $set: { ...user, updatedAt: new Date() },
    },
    { upsert: true, returnOriginal: false }
  );
};

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  const { user }: { user: any } = req.body;
  console.log(user);
  return user.new ? await createUser(user, db) : await updateUser(user, db);
});
