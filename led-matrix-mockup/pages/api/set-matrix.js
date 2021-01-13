import fs from "fs";

function validateMatrix(matrix) {
  const [lines, columns, channels] = [16, 16, 3];
  let validated = matrix.length === lines;
  matrix.forEach((el) => {
    validated = validated && el.length === columns;
    el.forEach((e) => {
      validated = validated && e.length === channels;
    });
  });
  return validated;
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: "this api accepts only the method POST." });
  }
  if (!req.body || !req.body.matrix) {
    return res.status(400).json({ message: "the 16x16 matrix is missing." });
  }

  let { matrix } = req.body;

  if (!validateMatrix(matrix)) {
    return res
      .status(400)
      .json({ message: "the 16x16 RGB matrix is not valid." });
  }

  fs.writeFileSync(
    process.env.MEMORY_FILE,
    JSON.stringify({
      matrix,
    })
  );

  res.status(200).json({ message: "data received." });
}
