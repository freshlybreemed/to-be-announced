import { wrapAsync } from "../helpers";
const ObjectId = require("mongodb").ObjectId;

export default wrapAsync(
  async (req, db) =>
    // !ObjectId.isValid(req.query.slug)
    db.collection("tba").find({ slug: req.query.slug }).toArray()
  // : db
  //     .collection("tba")
  //     .find({ _id: ObjectId(req.query.slug) })
  //     .toArray()
);
