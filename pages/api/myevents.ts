import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (_req: NextApiRequest, db: any) => {
  return await db
    .collection('tba-event')
    .find({
      organizerId: '123',
    })
    .toArray();
});
