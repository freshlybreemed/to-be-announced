import { wrapAsync } from '../helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest, db: any) =>
  db.collection('tba-event').find({ slug: req.query.slug }).toArray()
);
