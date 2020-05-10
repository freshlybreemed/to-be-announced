import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  if (req.method === 'POST') {
    return await db.collection('tba').insertOne(req.body);
  }
  if (req.method === 'GET') {
    return await db.collection('tba').find().toArray();
  }
});
