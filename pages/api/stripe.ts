const stripe = require('stripe')(process.env.STRIPE_DEV_SECRET);
import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';
import { OrderProps, EventProps } from '../../src/@types/types';

const saveCheckoutSession = async (order: OrderProps, db: any) =>
  await db.collection('checkout').insertOne(order);

const generateStripeCheckout = async (event: EventProps, order: OrderProps) => {
  const metaData = { slug: event.slug };
  for (var curr in order.cart) {
    metaData[curr] = order.cart[curr].quantity.toString();
  }
  console.log(metaData);
  const session = await stripe.paymentIntents.create({
    metadata: {
      emailAddress: order.emailAddress,
      ...metaData,
    },
    currency: 'USD',
    amount: order.total * 100,
  });

  return session;
};

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  const { event, order }: { event: EventProps; order: OrderProps } = req.body;

  await saveCheckoutSession(order, db);
  return await generateStripeCheckout(event, order);
});
