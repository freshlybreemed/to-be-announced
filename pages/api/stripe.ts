const stripe = require('stripe')(process.env.STRIPE_DEV_SECRET);
import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest) => {
  const { emailAddress, eventName, image, cart } = req.body;
  console.log(req.headers.host);
  const tickets = Object.keys(cart)
    .filter((curr) => cart[curr].price > 0)
    .map((curr) => {
      return {
        name: `${eventName} - ${curr} ${
          cart[curr].quantity > 1 ? `Tickets` : `Ticket`
        }`,
        amount: cart[curr].price * 112,
        currency: 'usd',
        quantity: cart[curr].quantity,
        images: [image],
      };
    });
  const metaData = {};
  for (var curr in cart) {
    metaData[curr] = cart[curr].quantity.toString();
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    payment_intent_data: {
      metadata: {
        emailAddress,
        ...metaData,
      },
    },
    line_items: tickets,
    success_url: `http://${req.headers.host}/user`,
    cancel_url: `http://${req.headers.host}/user/balance`,
  });

  return session;
});
