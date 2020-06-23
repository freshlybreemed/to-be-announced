import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';
import { EventProps } from '../../src/@types/types';

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  if (req.method === 'POST') {
    const event: EventProps = req.body;
    return await db.collection('tba-event').updateOne(
    return await db.collection('event').updateOne(
      { slug: req.body.slug },
      {
        $set: {
          ...req.body,
          startDate: new Date(event.startDate),
          endDate: new Date(event.endDate),
          updatedAt: new Date(),
        },
      },
      { upsert: true },
    );
  }
  if (req.method === 'GET') {
    return await db
      .collection('event')
      .find({
        // startDate: {
        //   $gte: new Date(),
        // },
      })
      .toArray();
  }
  if (req.method === 'DELETE') {
    return await db.collection('event').deleteMany();
  }
});
