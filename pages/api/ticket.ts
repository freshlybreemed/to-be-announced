import { wrapAsync, sendEmail } from './helpers';
import { NextApiRequest } from 'next';

export default wrapAsync(async (req: NextApiRequest) => {
  const { event, order } = req.body;
  console.log(req.body);
  return await sendEmail([order.emailAddress], event, order);
});
