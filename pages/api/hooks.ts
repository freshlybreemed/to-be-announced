import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest) => {
  const data = req.body;
  console.log(data.data.type, data.data.object);
  switch (data.type) {
    case 'payment_intent.succeeded':
      // await db.collection(balance).insertOne(data.data.object);
      return '';
    default:
      return true;
  }
});
