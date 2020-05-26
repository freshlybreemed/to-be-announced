const connect = require('./db');
const cors = require('micro-cors')();
const mailgun = require('mailgun-js');
import { EventProps } from '../../src/@types/types';
const DOMAIN = 'sandboxaf4a2cef857b4556a257062d0ed5309a.mailgun.org';
import { NextApiRequest, NextApiResponse } from 'next';

export const wrapAsync = (handler: any) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const db = await connect();
  return cors(
    handler(req, db)
      .then((result: any) => {
        res.setHeader(
          'cache-control',
          's-maxage=1 maxage=0, stale-while-revalidate'
        );
        return res.json(result);
      })
      .catch((error: any) => res.status(500).json({ error: error.message }))
  );
};

export const sendEmail = async (
  email: string[],
  event: EventProps,
  order: any
) => {
  try {
    const mg = mailgun({
      apiKey: process.env.MAILGUN,
      domain: DOMAIN,
    });

    for (var key in email) {
      const data = {
        from: `"TBA" <info@whatstba.com>`, // sender address
        to: email[key],
        subject: 'Hello',
        text: 'Testing some Mailgun awesomness!',
        template: 'test123',
        'v:event': { event },
        'v:order': order,
      };
      await mg.messages().send(data, function (error, body) {
        if (error) console.log(error);
        console.log(body);
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const stripeSecret = dev
  ? process.env.STRIPE_SECRET_DEV
  : process.env.STRIPE_SECRET_PROD;
