import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';
import { EventProps } from '../../src/@types/types';
import moment from 'moment-timezone';

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  if (req.method === 'POST') {
    const event: EventProps = req.body;
    return await db.collection('event').updateOne(
      { slug: event.slug },
      {
        $set: {
          ...req.body,
          publishDate: new Date(event.publishDate),
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
