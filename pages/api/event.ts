import { wrapAsync } from "./helpers";
import { NextApiRequest } from "next";

export default wrapAsync(async (req: NextApiRequest, db: any) =>
  console.log(req.body)
);
