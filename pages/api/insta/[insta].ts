import { NextApiRequest, NextApiResponse } from 'next';
import cheerio from 'cheerio';
import request from 'request';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let {
    query: { insta },
  }: { query?: { insta?: string } } = req;
  return await request(
    `https://www.instagram.com/p/${insta}`,
    async (error, _response, html) => {
      if (!error) {
        let $ = await cheerio.load(html);

        //basic data from the meta tags
        const image_link = $('meta[property="og:image"]').attr('content');
        console.log(image_link);
        if (image_link) {
          res.send(image_link);
        } else {
          return res
            .status(404)
            .send('Unable to find that specific post. Please try another');
        }
      } else {
        return res.status(404).send('Error, Unable to load webpage');
      }
    },
  );
};
