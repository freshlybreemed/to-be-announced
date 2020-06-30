const connect = require('./db');
const cors = require('micro-cors')();
const nodemailer = require('nodemailer');
const pdf = require('html-pdf');

import { EventProps, OrderProps } from '../../src/@types/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { ticketTemplate } from './ticketTemplate';
import { emailTemplates } from './emailTemplates';

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
       return  res.status(200).json(result)
      })
      .catch((error: any) => res.status(500).json({ error: error.message }))
  );
};

export const createDigitalTicket = (order, event) =>{
  return new Promise((resolve, reject) => {
    pdf.create(ticketTemplate.content(order),{
      width: '50mm', height: '90mm'}).toBuffer((err,buffer:Buffer)=> {
        if (err){
          console.log(err)
          reject(err)
        }
      console.log(buffer);
      return resolve(buffer)
    })
  })
}

export const sendEmail = async (
  emails: string[],
  event: EventProps,
  order: OrderProps
) => {
  try {
    // Generate test SMTP service account from ethereal.email
     await createDigitalTicket(order, event).then(async (tix:any)=>{
      console.log('tix', typeof tix,tix)
      // create reusable transporter object using the default SMTP transport
      let transporter = await nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'ebrima.jobe92@gmail.com', // generated ethereal user
          pass: process.env.NODEMAILER, // generated ethereal password
        },
      });
      const message = emailTemplates.content(event, order);
      console.log(message,emailTemplates.subject(event.name),emails)
      // await transporter.sendMail({
      //   from: `"TBA" <info@whatstba.com>`, // sender address
      //   to: emails, // list of receivers
      //   subject: emailTemplates.subject(event.name), // Subject line
      //   text: message, // plain text body
      //   html: message, // html body
      //   attachments:[{
      //     filename:'tickets.pdf',
      //     content: Buffer.alloc(tix)
      //   }]
      // });
      return ''
    })
    } catch (error) {
      console.error(error);
    }
  };
  
  export const stripeSecret = dev
  ? process.env.STRIPE_SECRET_DEV
  : process.env.STRIPE_SECRET_PROD;
