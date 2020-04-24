import { wrapAsync } from '../helpers';
import { NextApiRequest } from 'next';
// const ObjectId = require("mongodb").ObjectId;

export default wrapAsync(
  async (req: NextApiRequest, db: any) =>
    // !ObjectId.isValid(req.query.slug)
    db.collection('tba').find({ slug: req.query.slug }).toArray(),
  // : db
  //     .collection("tba")
  //     .find({ _id: ObjectId(req.query.slug) })
  //     .toArray()
);
