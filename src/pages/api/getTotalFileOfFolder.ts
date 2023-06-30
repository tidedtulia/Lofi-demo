import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: "dp7dspftn",
  api_key: "513661624383493",
  api_secret: "Z8bJQqQYJ8He-wSzU6-ZGKITU4E",
});

// export default async function getTotalFileOfFolder(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     await cloudinary.v2.api.sub_folders("lofi", (err, resurce) => {
//       if (err) return res.status(400).json(err);

//       let array: { name: string; size: number }[] = [];

//       resurce.folders.forEach((folder: any) => {
//         if (folder.path.includes("music")) {
//           cloudinary.v2.api.resources(
//             {
//               type: "upload",
//               prefix: folder.path,
//               resource_type: "video",
//               max_results: 1000,
//             },
//             (error, rs) => {
//               if (error) return res.status(400).json(error);

//               console.log(folder.name, rs.resources.length);
//               let name = folder.name;
//               let size = rs.resources.length;
//               array.push({ name, size });
//             }
//           );
//         }
//       });
//       return res.json(array);
//     });
//   } catch (error) {
//     console.error("500:", error);
//     return res.status(500).end();
//   }
// }

export async function getFolderList(parentFolder: string): Promise<string[]> {
  try {
    const response = await cloudinary.v2.api.sub_folders(parentFolder);
    return response.folders.map((folder: any) => folder.name);
  } catch (error) {
    console.log("getFolderList: ", error);
    return [];
  }
}

export async function getFileCountInFolder(folder: string): Promise<number> {
  try {
    // const response = await cloudinary.v2.api.resources({
    //   type: "upload",
    //   prefix: folder,
    //   max_results: 200,
    // });
    // console.log("folder: ", folder, " total_count: ", response.total_count);

    // return response.total_count;
    let total_count = await cloudinary.v2.api.resources(
      {
        type: "upload",
        prefix: folder,
        resource_type: "video",
        max_results: 1000,
      },
      (error, rs) => {
        if (error) return 0;
        else return rs.resources.length;
      }
    );

    return total_count.resources.length;
  } catch (error) {
    console.error(
      `Error getting file count in folder "${folder}" from Cloudinary:`,
      error
    );
    return 0;
  }
}

export default async function getTotalFileOfFolder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const parentFolder = "lofi";
    const folderList = await getFolderList(parentFolder);

    const folderDataPromises = folderList.map(async (folder: string) => {
      const fileCount = await getFileCountInFolder(`${parentFolder}/${folder}`);
      return { folder, fileCount };
    });

    let folderData = await Promise.all(folderDataPromises);
    folderData = folderData.filter((folder) => folder.folder.includes("music"));
    return res.status(200).json(folderData);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}
