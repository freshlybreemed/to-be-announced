import { wrapAsync } from '../helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  const event = await db.collection('event').find({ slug: req.query.slug }).toArray()
  console.log('dude',event)
  db.collection('event').updateOne(
    { slug: req.query.slug },
    {
      $set: {
        updatedAt: new Date(),
      },
      $inc: { pageViews: .5}
    }
  );
  return event
});
