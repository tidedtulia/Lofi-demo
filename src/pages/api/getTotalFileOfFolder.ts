import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: "dp7dspftn",
  api_key: "513661624383493",
  api_secret: "Z8bJQqQYJ8He-wSzU6-ZGKITU4E",
});

export default async function getTotalFileOfFolder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await cloudinary.v2.api.sub_folders("lofi", (err, resurce) => {
      if (err) return res.status(400).json(err);

      let array: { name: string; size: number }[] = [];

      resurce.folders.forEach((folder: any) => {
        if (folder.path.includes("music")) {
          cloudinary.v2.api.resources(
            {
              type: "upload",
              prefix: folder.path,
              resource_type: "video",
              max_results: 1000,
            },
            (error, rs) => {
              if (error) return res.status(400).json(error);

              console.log(folder.name, rs.resources.length);
              let name = folder.name;
              let size = rs.resources.length;
              array.push({ name, size });
            }
          );
        }
      });
      return res.json(array);
    });
  } catch (error) {
    console.error("500:", error);
    return res.status(500).end();
  }
}
