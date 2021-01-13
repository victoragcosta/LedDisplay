import { blackMatrix, randomMatrix } from "../../lib/utils";
import fs from "fs";

function getFileData(fileName = process.env.MEMORY_FILE) {
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(
      fileName,
      JSON.stringify({
        matrix: blackMatrix(),
      })
    );
  }
  let { matrix } = JSON.parse(fs.readFileSync(fileName).toString());

  return matrix;
}

export default function handler(req, res) {
  res.status(200).json({
    matrix: getFileData(),
  });
}
