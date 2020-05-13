import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  if (req.method === 'POST') {
    return await db.collection('tba-event').insertOne(req.body);
  }
  if (req.method === 'GET') {
    return await db.collection('tba-event').find().toArray();
  }
  if (req.method === 'DELETE') {
    return await db.collection('tba-event').deleteMany();
  }
});
