const stripe = require('stripe')(process.env.STRIPE_DEV_SECRET);
import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';
import { OrderProps, EventProps } from '../../src/@types/types';

const saveCheckoutSession = async (order: OrderProps, db: any) =>
  await db.collection('tba-checkout').insertOne(order);

const generateStripeCheckout = async (event: EventProps, order: OrderProps) => {
  const tickets = Object.keys(order.cart)
    .filter((curr) => order.cart[curr].price > 0)
    .map((curr) => {
      return {
        name: `${event.name} - ${curr} ${
          order.cart[curr].quantity > 1 ? `Tickets` : `Ticket`
        }`,
        amount: order.cart[curr].price * 112,
        currency: 'usd',
        quantity: order.cart[curr].quantity,
        images: [event.image],
      };
    });
  const metaData = { slug: event.slug };
  for (var curr in order.cart) {
    metaData[curr] = order.cart[curr].quantity.toString();
  }
  console.log(metaData);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    payment_intent_data: {
      metadata: {
        emailAddress: order.emailAddress,
        ...metaData,
      },
    },
    line_items: tickets,
    success_url: `https://whatstba.com/user`,
    cancel_url: `https://whatstba.com/user/balance`,
  });

  return session;
};

export default wrapAsync(async (req: NextApiRequest, db: any) => {
  const { event, order }: { event: EventProps; order: OrderProps } = req.body;

  await saveCheckoutSession(order, db);
  return await generateStripeCheckout(event, order);
});
