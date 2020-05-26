import { wrapAsync, sendEmail } from './helpers';
import { ticketEmail } from './emailTemplates';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest) => {
  const { event, order } = req.body;
  console.log(req.body);
  return await sendEmail([order.emailAddress], ticketEmail, event, order);
});
