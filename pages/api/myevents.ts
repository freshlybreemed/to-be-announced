import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(
  async (req: NextApiRequest, db: any) =>
    await db
      .collection('tba-event')
      .find({
        organizerId: '123',
      })
      .toArray(),
);
