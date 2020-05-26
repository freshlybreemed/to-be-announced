const connect = require('./db');
const cors = require('micro-cors')();
const nodemailer = require('nodemailer');
import { EventProps, OrderProps } from '../../src/@types/types';
import { NextApiRequest, NextApiResponse } from 'next';

export const dev = false;

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
  emails: string[],
  content: any,
  event: EventProps,
  order: OrderProps
) => {
  try {
    // Generate test SMTP service account from ethereal.email

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'ebrima.jobe92@gmail.com', // generated ethereal user
        pass: process.env.NODEMAILER, // generated ethereal password
      },
    });
    const message = content.content(event, order);
    for (var email in emails) {
      await transporter.sendMail({
        from: `"TBA" <info@whatstba.com>`, // sender address
        to: emails[email], // list of receivers
        subject: content.subject(event.name), // Subject line
        text: message, // plain text body
        html: message, // html body
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const stripeSecret = dev
  ? process.env.STRIPE_SECRET_DEV
  : process.env.STRIPE_SECRET_PROD;
