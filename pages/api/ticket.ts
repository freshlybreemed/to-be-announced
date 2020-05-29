import {
  wrapAsync,
  // sendEmail
} from './helpers';
import { OrderProps, EventProps } from '../../src/@types/types';
// import { ticketEmail } from './emailTemplates';
import { NextApiRequest } from 'next';

const updateTixCount = async (
  order: OrderProps,
  event: EventProps,
  db: any,
) => {
  let ops = Object.keys(order.cart).map((curr) => {
    return {
      updateOne: {
        filter: { slug: event.slug },
        update: {
          $inc: {
            [`ticketTypes.${curr}.sold`]: order.cart[curr].quantity,
          },
        },
      },
    };
  });
  console.log(ops);
  return await db.collection('tba-event').bulkWrite(ops);
};

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  const { event, order } = req.body;
  return await updateTixCount(order, event, db);
  // return await sendEmail([order.emailAddress], ticketEmail, event, order);
});
