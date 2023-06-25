import type { NextApiRequest, NextApiResponse } from "next";

import { max } from "@/files/file";

import cloudinary from "cloudinary";
import { Music } from "@/types/music";
cloudinary.v2.config({
  cloud_name: "dp7dspftn",
  api_key: "513661624383493",
  api_secret: "Z8bJQqQYJ8He-wSzU6-ZGKITU4E",
});

export default async function getListMusic(
  req: NextApiRequest,
  res: NextApiResponse<Music[] | string>
) {
  const { id } = req.query;
  const folder = "lofi/music-" + id;

  try {
    const { resources } = await cloudinary.v2.api.resources({
      type: "upload",
      resource_type: "video",
      quality: "auto:low",
      flags: "lossy",
      format: "mp3",
      prefix: folder,
      max_results: max,
    });

    if (resources) {
      let listMusics: Music[] = [];
      resources.forEach((rs: any, index: number) => {
        let nameResult: string = rs.public_id.substring(13);
        let nameArray: string[] = nameResult.split("_");
        let name = "";
        let src = rs["secure_url"];

        for (let i = 0; i < nameArray.length - 1; i++) {
          name += nameArray[i] + " ";
        }
        //console.log({ index, name, src });

        listMusics.push({ index, name, src });
      });
      listMusics = shuffleArray(listMusics);
      return res.status(200).json(listMusics);
    } else {
      return res.status(404).json("error");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}
function shuffleArray(arr: Music[]): Music[] {
  const shuffledArray = [...arr]; // Tạo một bản sao của mảng ban đầu

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Hoán đổi hai phần tử ngẫu nhiên
  }

  return shuffledArray;
}
