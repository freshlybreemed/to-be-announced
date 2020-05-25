const stripe = require('stripe')(process.env.STRIPE_DEV_SECRET);
import { wrapAsync } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest) => {
  const { amount, emailAddress, eventName } = req.body;
  console.log(req.headers);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    payment_intent_data: {
      metadata: {
        emailAddress,
      },
    },
    line_items: [
      {
        name: eventName,
        description: 'Purchase Tickets',
        amount: parseInt(amount) * 100,
        currency: 'usd',
        quantity: 1,
      },
    ],
    success_url: `http://${req.headers.host}/user`,
    cancel_url: `http://${req.headers.host}/user/balance`,
  });

  return session;
});
