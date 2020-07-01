import { wrapAsync } from '../helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest, db: any) =>
  db.collection('event').find({ _id: req.query._id }).toArray(),
);
