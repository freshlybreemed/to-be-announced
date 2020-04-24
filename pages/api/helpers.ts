const connect = require('./db');
const cors = require('micro-cors')();
import { NextApiRequest, NextApiResponse } from 'next';

export const wrapAsync = (handler: any) => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const db = await connect();
  return cors(
    handler(req, db)
      .then((result: any) => {
        res.setHeader(
          'cache-control',
          's-maxage=1 maxage=0, stale-while-revalidate',
        );
        return res.json(result);
      })
      .catch((error: any) => res.status(500).json({ error: error.message })),
  );
};
