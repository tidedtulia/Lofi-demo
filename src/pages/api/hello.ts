// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: "dp7dspftn",
  api_key: "513661624383493",
  api_secret: "Z8bJQqQYJ8He-wSzU6-ZGKITU4E",
});

type Data = {
  list: Array<string>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const folder = "lofi/music-" + id + "/";
  console.log(folder);

  const { resources } = await cloudinary.v2.api.resources({
    type: "upload",
    prefix: folder,
    max_results: 100,
  });
  const urls = resources.map((rs: any) => rs.secure_url);
  res.status(200).json({ list: urls });
}
