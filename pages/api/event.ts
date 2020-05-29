import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  if (req.method === 'POST') {
  if (req.method === 'GET') {
    return await db
      .collection('tba-event')
      .find({
        startDate: {
          $gte: new Date(),
        },
      })
      .toArray();
  }
  if (req.method === 'DELETE') {
    return await db.collection('tba-event').deleteMany();
  }
});
