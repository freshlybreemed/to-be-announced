import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  if (req.method === 'POST') {
    return await db
      .collection('tba-event')
      .updateOne({ slug: req.body.slug }, { $set: req.body }, { upsert: true });
  }
  if (req.method === 'GET') {
    return await db.collection('tba-event').find().toArray();
  }
  if (req.method === 'DELETE') {
    return await db.collection('tba-event').deleteMany();
  }
});
