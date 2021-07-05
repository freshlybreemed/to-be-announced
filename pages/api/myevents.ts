import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  const { organizerId } = req.query;

  return await db
    .collection('event')
    .find({
      organizerId,
    })
    .toArray();
});
