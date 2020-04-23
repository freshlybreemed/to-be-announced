const connect = require("./db");
const cors = require("micro-cors")();

export const wrapAsync = (handler) => async (req, res) => {
  const db = await connect();
  return cors(
    handler(req, db)
      .then((result) => {
        res.setHeader(
          "cache-control",
          "s-maxage=1 maxage=0, stale-while-revalidate"
        );
        return res.json(result);
      })
      .catch((error) => res.status(500).json({ error: error.message }))
  );
};
