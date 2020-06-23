import { wrapAsync } from '../helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  const { slug } = req.query;
  return await db
    .collection('ticket')
    .find({
      slug,
    })
    .toArray();
});
