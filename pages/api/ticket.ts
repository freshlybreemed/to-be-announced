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
  db: any
) => {
  let ops = { gross: order.total * 100 };
  Object.keys(order.cart).forEach((curr) => {
    ops[`ticketTypes.${order.cart[curr]._id}.sold`] = order.cart[curr].quantity;
  });

  order.date = new Date(order.date);
  await db.collection('ticket').insertOne(order);

  return await db.collection('event').updateOne(
    { slug: event.slug },
    {
      $inc: ops,

      $push: {
        tickets: {
          $each: [order],
          $slice: 10,
          $sort: { date: 1 },
        },
      },
    }
  );
};

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  const { event, order } = req.body;

  return await updateTixCount(order, event, db);
  // return await sendEmail([order.emailAddress], ticketEmail, event, order);
});
