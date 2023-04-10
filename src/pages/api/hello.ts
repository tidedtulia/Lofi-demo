// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: "dp7dspftn",
  api_key: "513661624383493",
  api_secret: "Z8bJQqQYJ8He-wSzU6-ZGKITU4E",
});

type Data = {
  item: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const folder = "lofi/music-" + id;
  const a: number = Number(req.query.index) - 1;
  console.log({ id, a });

  try {
    const { resources } = await cloudinary.v2.api.resources({
      type: "upload",
      prefix: folder,
      resource_type: "video",
      max_results: 193,
    });
    if (resources.length > a) {
      const resource = resources[a];
      const secureUrl = resource.secure_url;
      return res.json({ item: secureUrl });
    } else {
      // return res.status(404).end()
      return res.status(404).json({ item: "123" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}
